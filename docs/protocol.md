---
title: Reolink protocol notes
description: What the cameras speak, and how it was worked out
---

# Reolink protocol notes

Everything here was verified against an **RLC-410W**, firmware
`v3.0.0.2356_23062002`, hardware `IPC_51316M`, unless marked otherwise.
Later additions name their camera: an **E1** (`v3.1.0.1643`), an **E1 Pro**
(`v3.1.0.3149`), an **E1 Zoom** (`v3.1.0.4417`) and a **Video Doorbell**
(`v3.0.0.6460`).

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

### Newer firmware: the `*V20` generation

On the E1 Zoom and the Video Doorbell it is the other way round: they know the
`*V20` forms — `GetRecV20`, `GetEmailV20`, `GetFtpV20`, `GetPushV20`,
`GetAudioAlarmV20` — and those are the ones to ask. Three things differ from
the RLC-410W:

- **Asking the older command can take the web server down.** Both answer the
  legacy `GetPush` not with `-9` but by crashing the web server: every request
  after it gets HTTP **502** for about forty seconds, until it has restarted,
  and HTTP-FLV video stalls with it. So ask the `*V20` form first, and the
  older form only after the camera has answered `-9` to the newer one. Never
  probe with both.
- **The `*V20` alert reads need the channel.** `GetEmailV20` and `GetPushV20`
  sent without `{"channel": 0}` answer `-4 param error`; `GetFtpV20` takes it
  either way. Send it on all of them.
- **Port 80 only redirects.** The E1 Zoom answers `http://` with a `302` to
  `https://` (self-signed), for the CGI API and HTTP-FLV alike. The doorbell
  still serves plain HTTP. The E1 and E1 Pro have no web server at all, and are
  configured over [Baichuan](#settings) instead.

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

An NVR serves its cameras from this same path on its own address: channel 3 of
a recorder is `/h264Preview_04_sub` on the recorder, with the recorder's own
credentials. There is no separate port or path per camera.

### HTTP-FLV

What the web interface actually uses for live view:

```
http://<host>/flv?port=1935&app=bcs&stream=channel0_main.bcs&user=<u>&password=<p>
```

Channel is **0-based** here — the inconsistency is the vendor's, not a typo.
An NVR's fourth camera is `channel3_main.bcs`.
Authentication is by query parameter, no token needed, and it only requires
port 80.

### Snapshot

```
GET /cgi-bin/api.cgi?cmd=Snap&channel=0&rs=<nonce>&token=<token>
```

JPEG at full main-stream resolution. Note that an error comes back as JSON with
HTTP 200, so check for the JPEG marker rather than the status code.

### Recorders

A device that answers `GetDevInfo` with `channelNum` greater than one is an
NVR. Everything else follows from that one number: the same login, the same
address and the same port serve every camera on it, and each request that could
be about a particular one carries `channel`.

`GetChannelstatus` names them:

```json
{"cmd":"GetChannelstatus","value":{"count":8,"status":[
  {"channel":0,"name":"Front door","typeInfo":"RLC-810A","online":1}]}}
```

Older firmware answers `-9` to it — including the RLC-410W above, which has one
channel anyway. `channelNum` alone is then enough to offer a numbered list.

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

A camera with AI detection (the E1 Zoom) adds a topic per kind of thing it
recognises, each with a `State` item:

```
tns1:RuleEngine/MyRuleDetector/PeopleDetect    SimpleItem State
tns1:RuleEngine/MyRuleDetector/VehicleDetect   SimpleItem State
tns1:RuleEngine/MyRuleDetector/DogCatDetect    SimpleItem State
tns1:RuleEngine/MyRuleDetector/FaceDetect      SimpleItem State
```

**Keep a state per topic and item.** They change independently: a person
leaving a picture that is still moving sends `PeopleDetect` false while
`CellMotionDetector` still says true. Treating them as one switch ends the
motion early. The camera is seeing motion while any of them is true.

**Two firmware quirks, both load-bearing:**

- Send `CreatePullPointSubscription` **without** WS-Addressing headers. With
  them, the camera answers HTTP 400.
- Send `PullMessages` **with** them. Without, HTTP 400 again.

And read the subscription address from `<SubscriptionReference>`. Taking the
last `<Address>` in the document picks up the anonymous WS-Addressing ReplyTo,
and then you are politely polling `www.w3.org` instead of the camera.

### Subscription lifetime

Measured on the E1 Zoom. A plain `CreatePullPointSubscription` is granted only
**ten seconds**, `PullMessages` does not extend it, and the camera holds a quiet
poll open for up to twenty. So a quiet poll outlives its own subscription, and
the polls after it are refused with HTTP 400 until the client subscribes again
— a dozen seconds of every half minute in which motion goes unheard.

- Ask for longer: `<InitialTerminationTime>PT120S</InitialTerminationTime>` in
  the subscribe request is honoured.
- Read what was actually granted from `CurrentTime` and `TerminationTime` in
  the reply, and send `wsnt:Renew` at half of that, in case a camera ignores
  the request.
- `Renew` needs WS-Addressing, like `PullMessages`; without it, HTTP 400.

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
`0xdc00` none, `0xdc01` XOR, `0xdc12` AES. The camera's reply confirms what it
granted in the same field: `0xdd01` for XOR, `0xdd12` for AES.

**Some firmware answers only an AES request.** An E1 Pro on
`v3.1.0.3149_2401092478` leaves a login asking for `0xdc01` unanswered — no
reply at all, so the client simply times out — and replies at once to `0xdc12`.
An E1 on `v3.1.0.1643_22122300` answers either and grants what was asked. So
leolink asks for AES and follows whatever the reply grants.

### AES

Once `0xdd12` is granted, XML bodies are AES-128 in CFB mode with a 128-bit
segment:

```
key = first 16 characters of upper-case hex MD5("<nonce>-<password>"), as text
iv  = "0123456789abcdef"
```

Every message part starts a fresh keystream from that IV; nothing carries from
one message to the next. Two things are not what one would guess:

- **The modern login itself stays XOR.** Encrypting step 3 with the AES key gets
  status 400. AES starts with the camera's reply to it, the device info.
- **Media is only partly encrypted.** A type-3 message whose XML preamble carries
  `<encryptLen>N</encryptLen>` has its first N bytes of media encrypted and the
  rest plain; a message with no preamble is plain throughout. On an E1 Pro that
  is the first 1024 bytes of a key frame, all of a short predicted frame or
  audio block, and none of the stream info.

The video request (type 3) must be encrypted like any other XML: sent XOR'd in
an AES session it is refused with status 400.

### Login — four messages

Verified against the device:

1. **Client → legacy login** (class `0x6514`, type 1), field@16 = `0xdc12`
   (AES; see above for why not `0xdc01`).
   Body: `MD5(user)` and `MD5(password)` as upper-case hex clipped to 31
   characters, in 32-byte NUL-padded fields.
2. **Camera → nonce** (class `0x6614`, 20-byte header), field@16 saying what
   was granted:
   ```xml
   <Encryption version="1.1"><type>md5</type>
   <nonce>9F89BBCE447CAB52</nonce></Encryption>
   ```
3. **Client → modern login** (class `0x6414`, type 1), XOR-obfuscated XML even
   when AES was granted, with
   the credentials now bound to the nonce: `MD5(user + nonce)` and
   `MD5(password + nonce)`. That binding is the replay protection.
4. **Camera → device info**, class `0x0000`, **status 200**, ~3.7 KB of XML —
   under AES if it was granted.

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
a parser and it finds nothing. Under AES the preamble appears on most media
messages, not just the first, and carries `<encryptLen>` — see [AES](#aes).

Each block starts with four ASCII characters. **These are not what the published
notes say.** Those give the magics as little-endian `u32` constants, which spell
them backwards; a parser written from them matches nothing at all. What the
hardware actually sends, verified on an RLC-410W:

| On the wire | Block | Header |
|---|---|---|
| `1001` / `1002` | stream info | 32 bytes (length is stated at +4) |
| `00dc` | key frame | 32 bytes on an RLC-410W — **not a constant, see below** |
| `01dc` | predicted frame | 24 bytes on an RLC-410W — **not a constant** |
| `05wb` | AAC audio | 8 bytes |
| `01wb` | ADPCM audio | 8 bytes |

**The video header length varies by firmware, and within one stream.** An E1
Pro (capture supplied in issue #2) puts **152** bytes in front of a key frame
and **120 or 144** in front of a predicted one, changing from frame to frame:
the header carries a metadata section whose length is not fixed, containing an
`lz4 ` marker and an LZ4 frame — camera metadata, not the picture, which is
plain Annex-B behind it as usual.

Taking 32 and 24 for constants therefore does not merely mis-parse an unfamiliar
camera; it hands the decoder every frame with a hundred-odd bytes of header on
the front and the same number missing off the end, which H.264 survives well
enough that nothing looks wrong. Measure the header instead — see below.

The names are AVI's, which is presumably where they came from: `00dc` is
compressed video on stream 0, `wb` is audio.

Video block layout:

```
+0   magic          "00dc" / "01dc"
+4   codec          "H264" / "H265"
+8   payload size   u32
+12  unknown        u32
+16  microseconds   u32   (low word of a 64-bit count — see below)
+20  microseconds   u32   (high word; 118 on a camera up for 141 hours)
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
from guesswork into something verifiable — and rather than an assertion, it is
better used as the measurement itself: search the block for the first start
code and take that as the end of the header. It costs a scan of a few dozen
bytes per frame and it is right on every firmware, instead of on the one the
constants were taken from.

One trap comes with that. A start code is four bytes and three of them are
zero, so a field of zeroes followed by a timestamp whose lowest byte is `01`
reads as one — about one frame in a hundred on the E1 Pro capture. The byte
after a real start code is a NAL header, whose top bit is a reserved zero and
whose type is one of the handful a camera opens a frame with (1, 5, 6, 7, 8,
9), and that is enough to tell them apart.

**The two words at +16 and +20 are one 64-bit microsecond counter, low word
first.** Measured across 495 frames of the E1 Pro capture: steps of exactly
40,000 µs, against a stream announcing 25 fps and counted off the wire at 25.1.
The high word was 118 throughout, which is 118 × 2³² µs ≈ 141 hours — the
camera's uptime, and consistent with reading the pair as one number.

That timestamp is worth more than it looks. The stream carries no container, so
a player has to be told what rate to play at, and a rate that is wrong by a
frame or two a second becomes a delay that grows for as long as the window is
open. A per-frame timestamp removes the guess.

Two details a parser needs:

* **Blocks are padded.** Zero bytes appear between them, and key frames are
  followed by a short trailer holding the capture time — four bytes after the
  first one, three after the ones that follow. Skipping any small gap and
  resynchronising on the next known magic handles all of it.
* **Media bodies are not obfuscated.** The XOR applies to the XML control
  messages only.

leolink unpacks this into H.264 pictures, wraps them in MPEG-TS with the
timestamp out of each block header, and serves that on a loopback port, which
mpv opens as `tcp://127.0.0.1:<port>`. It used to hand over the bare elementary
stream, which carries no timing at all: the player then had to be told a rate
with `--no-correct-pts` and `--container-fps-override`, and believe it. See
*What leolink does with it* below for why that had to change.

```
leolink --baichuan-video <host> --user admin --password … --out /tmp/x.h264
```

reports what the container held and writes the elementary stream out — the
probe talks to the parser directly, so this is the pictures as the camera sent
them, without the transport wrapping. Handy for `ffprobe`. Measured on an
RLC-410W sub stream: 150 frames in 10 seconds, 640x352 High profile, zero
decode errors.

### What leolink does with it

The blocks above are an elementary stream: pictures one after another, with
nothing to say when each is due. Handed to a player like that, the player has to
be told a frame rate and then trusts it absolutely — and a camera that announces
25 while the player was told 15 puts ten surplus frames a second into a queue
that never drains. That was issue #2, and it is a bug the format invites rather
than one anybody wrote.

So the relay wraps the frames in MPEG-TS on the way out, using the timestamp
from each block header. It is the smallest container that carries a time per
picture, every player reads it, it is designed to be joined mid-stream — which
is exactly what connecting to a camera is — and it takes about 200 lines and no
library to write. The overhead is roughly six per cent.

What that buys, beyond the bug: the rate no longer has to be guessed or
corrected, clock drift between camera and computer stops accumulating, and a
player that reconnects can be handed the tables and the last key frame and
start immediately.

What it also changed, which took a second look to see: **giving up pictures only
helps if the gap goes with them.** A player reads a little ahead of what it is
showing and no further, so every hiccup on the way — a camera on Wi-Fi delivers
in bursts — leaves surplus standing in the relay's socket that nothing takes out
again. Shedding it was how that was bounded, and with a bare elementary stream
that worked: the pictures that were left played back to back at the rate the
player had been told, so the delay came off with them. With a timestamp on every
picture it does not. The player honours the gap, holds the last picture for
exactly as long as the ones given up would have taken, and is precisely as far
behind afterwards as before — measured here as a three-second freeze with no
delay recovered at all. So the relay now closes the seam: after shedding, the
next picture is stamped one interval after the last one sent, and the time
that the discarded pictures occupied is taken out of the timeline as well. The
same arithmetic covers a camera whose clock restarts or jumps, which would
otherwise reach the player as time running backwards.

**One camera connection, several readers.** The relay is shared: the tile's
player, an ffmpeg recording and an ffmpeg looking for motion all open the same
loopback port, and each is served on a connection of its own, with its own
muxer and its own pacing, so a player that falls behind gives up pictures
without taking them from the recording beside it. A camera with a handful of
sessions spends one on all of them. The port is open before the camera has
answered, and a reader that connects that early waits in the queue until the
pictures start.

One trap in serving several readers from a thread with no event loop:
`QTcpServer::waitForNewConnection(0)` takes every connection waiting on the
socket but reports only once, so two readers that arrive together leave the
second in the server's own queue. Ask `hasPendingConnections()` as well.

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
18 PTZ    19 PTZ preset   31 alarm subscription   33 alarm
25–107 configuration      93 link type (a keep-alive)
145 ping  234 UDP keep-alive
```

### Settings

A camera with no web server — an E1 Pro, or an E1 with HTTP switched off —
still carries every setting over Baichuan. leolink answers the CGI API's
commands from these messages (`src/BaichuanApi.cpp`), so the settings dialog
works on such a camera without knowing the difference. Message numbers from
[reolink_aio](https://github.com/starkillerOG/reolink_aio) (MIT, notice in
[LICENSE](../LICENSE)); each mapping checked field by field against an E1 Zoom answering
both ways (`leolink --baichuan-api <host> <command>`), and every write tried on
an E1 (3.1.0.1643) and an E1 Pro (3.1.0.3149): write, read back, restore,
compare the raw XML.

Requests carry `<Extension><channelId>0</channelId></Extension>`. A write sends
the whole `<body>` the read returned, changed. Status 200 is success; a read
answered 400 or 405 is how the camera says it has no such thing.

```
read/write  XML                         CGI API
80          VersionInfo                 GetDevInfo
56/57       Compression                 GetEnc/SetEnc     (range: 146 StreamInfoList)
26/25       VideoInput                  GetImage/SetImage
26/25       InputAdvanceCfg             GetIsp/SetIsp     (threshold: 296/297)
44/45       OsdDatetime, OsdChannelName GetOsd/SetOsd
52/53       Shelter                     GetMask/SetMask
46/47       MD                          GetMdAlarm/SetMdAlarm
299/300     AiCfg                       GetAiCfg/SetAiCfg
54/55, 81/82 RecordCfg, Record          GetRecV20/SetRecV20
217/216     EmailTask                   Get/SetEmailV20   (switch and schedule)
70/71       FtpTask                     Get/SetFtpV20     (switch and schedule)
219/218     PushTask                    Get/SetPushV20
232/231     AudioTask                   Get/SetAudioAlarmV20
37/36       ServerPort, HttpPort, …     GetNetPort/SetNetPort
76          Dhcp, Ip, Dns               GetLocalLink
116         Wifi (and the scan list)    GetWifi, ScanWifi
115         WifiSignal                  GetWifiSignal
114         Uid                         GetP2p
104/105     SystemGeneral               GetTime/SetTime
208/209     LedState                    Get/SetIrLights, Get/SetPowerLed
102         HddInfoList                 GetHddInfo
190         PtzPreset                   GetPtzPreset
23          —                           Reboot
```

What does not map one to one:

- **OSD positions** are `topLeftX`/`topLeftY`: 1 for the near edge, 65536 for
  the far one, 65537 for the centre. Upper Left is 1/1, Top Center 65537/1,
  Lower Right 65536/65536.
- **The motion grid** is a 96×64 bitmap, base64, most significant bit first,
  with the active 80×60 in its top left corner. The CGI API's is a string of
  '0' and '1', 80×60. Bit order confirmed by clearing cells over Baichuan and
  reading them back over HTTP.
- **Motion sensitivity.** Firmware with `<sensInfoNew>` goes by its
  `sensitivityDefault` alone. A per-period band written to the older
  `<sensitivityInfoList>` is answered 200 and ignored, and so is
  `<MD><enable>0</enable>`. leolink offers the default sensitivity and no
  switch.
- **AI kinds.** `detectType` lists the kinds switched on; the CGI API lists
  people, vehicle, dog_cat and face whatever the model, each 0 or 1.
- **Schedules** are `typeScheduleList` items, 168 characters each: `MD`,
  `Normal` (the CGI API's `TIMING`), `people`, `vehicle`, `dog_cat`.
- **Storage** sizes come in two parts; the CGI API's figure is G × 1024 + M.
- **Wi-Fi signal** is in dBm. The CGI API's 0–4 is roughly (dBm + 64) / 4,
  fitted to two cameras answering both ways.

Not found over Baichuan yet: user accounts, the e-mail and FTP server
settings, daylight-saving rules, NTP, formatting the card, recording search.
Those answer -9, as a CGI command the firmware does not know would, and the
dialog leaves them out.

### Alarms

What a camera with no ONVIF tells about motion, and what Reolink's own app
listens to. Checked on an E1 (`v3.1.0.4450`); the messages and layout follow
reolink_aio.

Subscribing is message **31** with no body and **251** in the header's
channel byte (byte 12), which marks a message about the camera's push
channel rather than about a channel of video. The camera answers it, then
sends message **33** at once with the state of every channel, and again on
every change:

```xml
<AlarmEventList version="1.1">
<AlarmEvent version="1.1">
<channelId>0</channelId>
<status>none</status>          <!-- "MD" while there is motion -->
<AItype>none</AItype>          <!-- or "people", "vehicle", "dog_cat", comma-separated -->
<recording>0</recording>
<timeStamp>0</timeStamp>
</AlarmEvent>
</AlarmEventList>
```

leolink counts a channel as seeing motion while its status holds `MD` or
`AItype` names anything but `none`, which is how the same camera's ONVIF
topics read. A status of `visitor` is a doorbell press, and is not motion.

Other pushes arrive on the same connection unasked — 78 (picture), 79
(serial port), 291 (floodlight), 623 (sleep) — and are stepped over. Nothing
more needs sending but a keep-alive: message **93**, answered with the link
type, every half minute or so.

**The subscription shares the settings session.** An E1 has few Baichuan
sessions: with two taken it refused three more opened at once. So leolink
subscribes on the connection it already keeps for settings and PTZ, reads
what is pushed between one request and the next, and hands on an alarm that
arrives while a request is waiting for its answer instead of stepping over it.
The keep-alive also keeps that session from being dropped as idle, which an
E1 Pro otherwise does within a minute. A camera reached only over Baichuan
costs two sessions in all: that one, and the video.

### PTZ

```xml
<!-- message 18; the movement goes on until "Stop" or the end of travel -->
<PtzControl version="1.1">
<channelId>0</channelId>
<speed>32</speed>              <!-- optional -->
<command>Left</command>
</PtzControl>

<!-- message 19 -->
<PtzPreset version="1.1">
<channelId>0</channelId>
<presetList><preset><id>1</id><command>toPos</command></preset></presetList>
</PtzPreset>
```

The commands are the CGI API's `PtzCtrl` operations — `Left`, `RightUp`,
`ZoomInc`, `Stop` — and an E1, an E1 Pro and an E1 Zoom accept `Stop` in that
spelling and in lower case alike. Whether there is a motor is the login's
`<ptzMode>`: `pt` on the E1 and E1 Pro, `ptz` on the E1 Zoom, `none` on the
doorbell. Over HTTP the same is `GetAbility`'s `ptzCtrl` and, for the zoom,
`supportZoom` or a `ptzType` of 1, 2 or 5 — the E1 Zoom says 5. `GetPtzPreset`
says nothing either way: the doorbell answers it with four presets.

### Firmware

Message numbers from reolink_aio, as above.

```
197   CheckFirmware   the camera asks Reolink           (<hasNewFirmware>)
191   UpgradeOnline   the camera downloads and installs (<OnlineUpdate><needUpdate>1)
227   UpgradeStatus   state, downloadSize, packetSize
67    a .pak sent from the client
```

197 needs the camera to reach Reolink's servers. On a network that keeps
cameras in, the E1 and E1 Pro hold the request until the client times out.
227 answers 400 when no upgrade is running.

**Sending a file** is message 67, all under one handle:

1. A body with the file's name and size:

   ```xml
   <ConfigFileInfo version="1.1">
   <fileName>IPC_561SD53MP.4450_2509011489.E1.3MP.WIFI5.PT.REOLINK.pak</fileName>
   <fileSize>13982629</fileSize>
   <updateParameter>0</updateParameter>
   <channelBits>0</channelBits>
   </ConfigFileInfo>
   ```

2. The file in pieces, each behind
   `<Extension version="1.1"><binaryData>1</binaryData></Extension>`. The
   extension is encrypted like any other; the piece after it is **not**. The
   payload offset is the extension's length, as for media.

The camera answers each message with status 200. A message of 40,000 bytes or
more makes it close the connection, so a piece is cut to keep each message,
header included, under 38,000. After the last piece the camera checks the
image, writes it, and restarts on its own.

A package's name is the only thing that says which camera it is for:
`<board>.<build>_<date>.<model>….pak`, where the board is what GetDevInfo
reports as `hardVer`. The file itself starts `13 59 72 32` and a partition
table (`loader`, `fdt`, `uboot`, `kernel`, `rootfs`), and the rest is
compressed. leolink sends a package only to the board its name gives, and only
to a camera on an older build.

Installed this way so far: an E1 (3.1.0.1643 → 4450), two E1 Pros (3149 →
5112) and a Video Doorbell WiFi (3.0.0.6460 → 7106). The doorbell has a web
server too, and took the file over Baichuan all the same. Each was back on the
new build within a few minutes, which the dialog followed through the restart.

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
