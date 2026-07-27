---
title: Reolink protocol notes
description: What the cameras speak, and how it was worked out
---

# Reolink protocol notes

Everything here was verified against an **RLC-410W**, firmware
`v3.0.0.2356_23062002`, hardware `IPC_51316M`, unless marked otherwise.

## Ports

| Port | Service | Used for |
|---|---|---|
| 80 / 443 | nginx, CGI API | control, configuration, snapshots, HTTP-FLV |
| 554 | RTSP | main and sub stream, H.264 + AAC |
| 1935 | RTMP | legacy; the source behind HTTP-FLV |
| 8000 | ONVIF | standard control **and event push** |
| 9000 | Baichuan | the proprietary protocol the vendor's own client uses |

Readable via `GetNetPort`, and each can be switched off.

For a wired camera, **CGI + RTSP + ONVIF covers everything**. Baichuan only
becomes necessary for battery models, remote access by UID, and two-way audio.

---

## The CGI API

```
POST /cgi-bin/api.cgi?cmd=<Command>&token=<token>
Content-Type: application/json

[{"cmd":"<Command>","action":0,"param":{...}}]
```

The reply is always an array. `code` 0 means success; otherwise the real reason
is in `error.rspCode`.

### Login

```json
[{"cmd":"Login","param":{"User":{"userName":"admin","password":"…"}}}]
```

returns a token valid for 3600 seconds, which then goes on every request as a
query parameter. `Logout` releases it — worth doing, because the camera only
holds a few sessions and hands out `-5` when they run out.

### action=1 gives the valid ranges

The single most useful thing in this API. With `"action":1` the camera returns,
alongside the current value, a schema of what it will accept:

```json
{"cmd":"GetEnc","code":0,
 "value":{"Enc":{…current…}},
 "range":{"Enc":[{"mainStream":{
     "bitRate":[1024,1536,2048,3072,4096,5120,6144,7168,8192],
     "frameRate":[30,25,22,20,18,16,15,12,10,8,6,4,2],
     "profile":["Base","Main","High"],
     "size":"2560*1440"}}]}}
```

A client should build its settings UI from this rather than hardcoding values —
the lists differ per model and firmware.

### Error codes

From the web interface's own `bc_enum.js`, plus codes seen on the device:

| Code | Meaning |
|---|---|
| -3 | file format not recognised |
| -4 | bad input |
| -5 | no free connections |
| -6 | session expired |
| -7 | wrong user or password |
| -8 | timeout |
| **-9** | **firmware does not know this command** |
| -12 / -13 | configuration could not be read / verified |
| **-17** | **subsystem missing** (e.g. search with no SD card) |
| **-26** | **command exists, hardware does not** |
| -27 | account invalid |
| -28 / -29 | user name taken / user limit reached |
| -31 | device busy |
| -200…-203 | FTP login / directory / upload / connection |

**-9 versus -26 is the distinction that matters** when probing what a camera can
do. -9 means this firmware has never heard of the command. -26 means the command
is real but the model lacks the hardware — no pan-tilt motor, no speaker. A
client should hide the feature in both cases and retry in neither.

### Sessions are scarce, and only `Logout` frees one

A camera allows a handful of sessions at once — shared with the phone app and
its own web page — and `Login` reports `leaseTime: 3600`. That lease is real:
a session that is simply dropped stays occupied for the full hour. Closing the
program does not release it either.

Measured here, the hard way: after a run that opened a session per settings
dialog and never logged out, the camera answered `-5 max session` to every
request for the best part of an hour, including from `curl`. It looks exactly
like a broken camera.

**Send `Logout` when you are done with a token.** It costs one request and it is
the difference between a camera that works and one that appears dead.

### `Set*` sometimes refuses what `Get*` just returned

`GetAlarm` reports `enable` as a bit field — `1602` on an RLC-410W — while its
range document calls it `"boolean"`. `SetAlarm` then rejects `1602` with a bare
`-4 param error`, and accepts only `0` or `1`. Reading the value back afterwards
gives `1602` again, so the camera rebuilds the field itself.

This is worth knowing in general terms: **a read-modify-write round trip is not
guaranteed to be accepted**, so it is worth testing one that changes nothing
before assuming a write path works. That test is what found this; every shape of
`SetAlarm` failed until `enable` was normalised, and none of the error messages
pointed at the field.

Nulls are the other trap: `action.recChannel` comes back as `null` on a camera
with no recording channels, and dropping the key is safer than sending it.

### Confirmed commands

36 of 71 probed commands work on the RLC-410W:

```
Device    GetAbility GetDevInfo GetDevName GetTime GetNorm GetAutoMaint
          GetPerformance GetAutoUpgrade GetCertificateInfo GetUser GetOnline
          GetHddInfo GetAuthorization
Network   GetNetPort GetLocalLink GetWifi GetWifiSignal ScanWifi GetDdns
          GetNtp GetUpnp GetP2p GetEmail GetFtp GetPush GetRtspUrl
Video     GetEnc GetImage GetIsp GetOsd GetCrop GetMask
Recording GetRec
Alarm     GetAlarm GetMdAlarm GetMdState
Light     GetIrLights
```

Unsupported with `-9` (firmware generation): the `*V20` variants, all the AI
commands, `GetAudioCfg`, `GetWhiteLed`, `GetBatteryInfo`, `GetPirInfo`,
`GetRecordSchedule`, `GetChannelstatus`, `GetEvents`, `GetLog`, `GetAlarmArea`.

Unsupported with `-26` (hardware): `GetPtzPreset`, `GetPtzPatrol`,
`GetPtzSerial`, `GetPtzTattern`, `GetAutoFocus`, `GetZoomFocus`,
`GetAudioAlarm`, `GetPowerLed`.

### An encryption layer on newer firmware

The web interface pushes requests through `infoHandler.transform()` and replies
through `infoHandler.recover()` when `infoHandler.isValid()`. On the tested
firmware that layer is **inactive** and plain JSON works. Newer firmware may
differ. Not analysed.

---

## Streaming

### RTSP

```
rtsp://<user>:<pass>@<host>:554/h264Preview_01_main    2560x1440 H.264 + AAC
rtsp://<user>:<pass>@<host>:554/h264Preview_01_sub       640x352 H.264 + AAC
```

Channel is **1-based** here. TCP transport is more reliable than UDP.

### HTTP-FLV

What the web interface actually uses for live view:

```
http://<host>/flv?port=1935&app=bcs&stream=channel0_main.bcs&user=<u>&password=<p>
```

Channel is **0-based** here — the inconsistency is the vendor's, not a typo.
Authentication is by query parameter, no token needed, and it only requires
port 80.

### Snapshot

```
GET /cgi-bin/api.cgi?cmd=Snap&channel=0&rs=<nonce>&token=<token>
```

JPEG at full main-stream resolution. Note that an error comes back as JSON with
HTTP 200, so check for the JPEG marker rather than the status code.

### Playback — not verified

`Search`, `Playback` and `Download` exist. The development camera has no SD card
(`GetHddInfo` returns `[]`, `Search` answers `-17`), so their data formats are
undocumented here.

---

## ONVIF

Fully functional, and the better path for events.

Services: `device_service`, `media_service`, `event_service`,
`imaging_service`, `analytics_service`, all under `http://<host>:8000/onvif/`.
Media profiles `000` (main), `001` (sub), `VideoAnalyticsToken`.

Auth is WS-Security UsernameToken with PasswordDigest:
`Base64(SHA1(nonce ‖ created ‖ password))`.

### Motion push

`WSPullPointSupport` is true:

1. `CreatePullPointSubscription` → a subscription URL
2. `PullMessages` against it, long-polling

Topics:

```
tns1:RuleEngine/CellMotionDetector/Motion    SimpleItem IsMotion
tns1:VideoSource/MotionAlarm                 SimpleItem State
```

The first pull always returns the current state as a property event, which gives
a client a defined starting point.

**Two firmware quirks, both load-bearing:**

- Send `CreatePullPointSubscription` **without** WS-Addressing headers. With
  them, the camera answers HTTP 400.
- Send `PullMessages` **with** them. Without, HTTP 400 again.

And read the subscription address from `<SubscriptionReference>`. Taking the
last `<Address>` in the document picks up the anonymous WS-Addressing ReplyTo,
and then you are politely polling `www.w3.org` instead of the camera.

---

## Baichuan (port 9000)

The proprietary protocol. Reverse engineering credit goes to
[thirtythreeforty/neolink](https://github.com/thirtythreeforty/neolink) and the
maintained fork
[QuantumEntangledAndy/neolink](https://github.com/QuantumEntangledAndy/neolink)
— their Wireshark dissector is what made this tractable.

### Frame format

Magic `0x0abcdef0`, little endian, so `f0 de bc 0a` on the wire.

```
Offset  Size  Field
 0      u32   magic
 4      u32   message type
 8      u32   body length
12      u8    XML encryption offset
13      u8    stream id
14      u16   message handle
16      u16   legacy: encryption protocol │ modern: status code
18      u16   message class
20      u32   modern only: binary payload offset
```

**Header length follows the message class** — and here practice differs from the
published dissector:

| Class | Length | Role |
|---|---|---|
| `0x6514` | 20 | legacy request |
| `0x6614` | **20** | reply to a legacy request |
| `0x6414` | 24 | modern request |
| `0x0000`, `0x6482` | 24 | modern reply |

The dissector groups `0x6614` with the 24-byte classes. **On the device it
arrives with 20.** Treat it as 24 and you consume four bytes of the body, after
which decryption produces noise and nothing explains why. The check is easy:
compare the header's `body_len` against the bytes actually read.

### Obfuscation

XML bodies are XORed with a fixed 8-byte key `1f 2d 3c 4b 5a 69 78 ff`:

```
plain[i] = raw[i] ^ key[(i + off) % 8] ^ off
```

`off` is the header field at byte 12. The function is symmetric. This is
obfuscation, not encryption — the key is a constant in the vendor's own SDK.

The encryption request goes in the legacy header's field at offset 16:
`0xdc00` none, `0xdc01` XOR, `0xdc12` AES. The camera confirms with `0xdd01`.

### Login — four messages

Verified against the device:

1. **Client → legacy login** (class `0x6514`, type 1), field@16 = `0xdc01`.
   Body: `MD5(user)` and `MD5(password)` as upper-case hex clipped to 31
   characters, in 32-byte NUL-padded fields.
2. **Camera → nonce** (class `0x6614`, 20-byte header, XOR body):
   ```xml
   <Encryption version="1.1"><type>md5</type>
   <nonce>9F89BBCE447CAB52</nonce></Encryption>
   ```
3. **Client → modern login** (class `0x6414`, type 1), XOR-obfuscated XML, with
   the credentials now bound to the nonce: `MD5(user + nonce)` and
   `MD5(password + nonce)`. That binding is the replay protection.
4. **Camera → device info**, class `0x0000`, **status 200**, ~3.7 KB of XML.

The 31-character clip is deliberate on the vendor's side: the string has to fit
a 32-byte field with a trailing NUL.

### Video — the BcMedia container

Requesting video is message type 3 with an XML body:

```xml
<Preview version="1.1">
  <channelId>0</channelId>
  <handle>0</handle>
  <streamType>subStream</streamType>   <!-- or mainStream -->
</Preview>
```

The camera then sends a run of type-3 messages whose bodies carry a stream of
blocks. The first message has a non-zero `payload_offset` in its 24-byte header:
that many bytes at the front are an XML preamble
(`<Extension><binaryData>1</binaryData></Extension>`), not media. Feed those to
a parser and it finds nothing.

Each block starts with four ASCII characters. **These are not what the published
notes say.** Those give the magics as little-endian `u32` constants, which spell
them backwards; a parser written from them matches nothing at all. What the
hardware actually sends, verified on an RLC-410W:

| On the wire | Block | Header |
|---|---|---|
| `1001` / `1002` | stream info | 32 bytes (length is stated at +4) |
| `00dc` | key frame | 32 bytes |
| `01dc` | predicted frame | 24 bytes |
| `05wb` | AAC audio | 8 bytes |
| `01wb` | ADPCM audio | 8 bytes |

The names are AVI's, which is presumably where they came from: `00dc` is
compressed video on stream 0, `wb` is audio.

Video block layout:

```
+0   magic          "00dc" / "01dc"
+4   codec          "H264" / "H265"
+8   payload size   u32
+12  unknown        u32
+16  microseconds   u32
+20  unknown        u32
+24  unix time      u32   (key frames only)
+28  unknown        u32   (key frames only)
```

Info block:

```
+4   header length  u32   (32 here)
+8   width          u32
+12  height         u32
+17  frame rate     u8
+18  year-1900, month, day, hour, minute, second, each u8
```

The payload is plain Annex-B, so **the check that the layout is right is that
the first bytes of every payload are `00 00 00 01`**. That is what turned this
from guesswork into something verifiable — and it is worth keeping in any parser
as an assertion.

Two details a parser needs:

* **Blocks are padded.** Zero bytes appear between them, and key frames are
  followed by a short trailer holding the capture time — four bytes after the
  first one, three after the ones that follow. Skipping any small gap and
  resynchronising on the next known magic handles all of it.
* **Media bodies are not obfuscated.** The XOR applies to the XML control
  messages only.

leolink unpacks this into an H.264 elementary stream and re-serves it on a
loopback port, which mpv opens as `tcp://127.0.0.1:<port>`. Since a raw stream
carries no timestamps, the player needs `--no-correct-pts` and
`--container-fps-override` set to the rate the info block announced; without
them mpv invents timing and says so.

```
leolink --baichuan-video <host> --user admin --password … --out /tmp/x.h264
```

reports what the container held and writes the elementary stream out, so it can
be checked with `ffprobe`. Measured on an RLC-410W sub stream: 150 frames in
10 seconds, 640x352 High profile, zero decode errors.

### What it adds over the CGI API

```xml
<type>wifi_solo_ipc</type>        device class
<ptzMode>none</ptzMode>           pan-tilt capability, stated plainly
<secretCode>…</secretCode>
<softVer>50331883</softVer>       version as a number
```

Careful with `<sdCard>1</sdCard>`: that means **supported**, not *fitted*.
Whether a card is present is `<diskNum>` — `0` here, matching the empty
`GetHddInfo` from the CGI API.

### Message types

From the dissector; only type 1 verified here.

```
1 login   2 logout   3/4 video preview   5–16 file/replay
18 PTZ    25–107 configuration           145 ping   234 UDP keep-alive
```

### P2P — implemented, never run

Reaching a camera by UID goes through Reolink's rendezvous servers,
`p2p.reolink.com` through `p2p11.reolink.com` on UDP 9999. The exchange is
`C2mQ` → `M2cQr` → `C2rC` → `R2cCr` → `C2dT` → `D2cCfm`, ending in a local,
mapped or relayed connection that then carries ordinary Baichuan.

UDP magic values: discovery `0x2a87cf3a`, acknowledgement `0x2a87cf20`,
data `0x2a87cf10`.

leolink implements step 1 and reports what comes back. **It has never been run
against a P2P-capable camera** — there is none here. The discovery packet's
checksum is derived from prose rather than from captured traffic and is the
first thing to suspect if the servers stay silent.

```
leolink --baichuan-p2p <UID>
```

Output attached to an [issue](https://github.com/tombueng/leolink/issues) would
be genuinely useful.

---

## The vendor's Windows client

Worth knowing if you want to go further: the Reolink Client 8.x is an **Electron
application with unpacked JavaScript**. No decompiling required.

```
ReolinkClient.exe (NSIS)
└── $PLUGINSDIR/app-64.7z
    ├── Reolink.exe            Electron 20.3.0
    ├── libBCSDKWrapper.dll    the Baichuan SDK, 1318 named exports
    └── resources/app/         application logic, plain bundled JS
        ├── jsonApi.js         bridge to the native SDK
        └── bcsdk.node         N-API binding
```

`bcsdk.node` exports exactly two functions, `BCSDK_JsonApiRequest` and
`BCSDK_JsonApiRespond`. The whole interface between the UI and the protocol is
one JSON channel, so the 1219 C++ exports are implementation detail.

Running it under Wine needs two things: `ELECTRON_RUN_AS_NODE` must not be set,
or Electron starts as bare Node and rejects GUI arguments; and
`sharp-win32-x64.node` fails to load and takes the application down with it,
so its `require` has to be stubbed.
