---
title: leolink handbook
description: Watching and recording Reolink cameras on Linux
---

# leolink handbook

leolink shows the live picture from Reolink cameras on Linux and reacts when
they see something. It speaks the camera's own protocols directly, so nothing
needs installing on the camera itself.

This is the help the application's **Help → Online handbook** menu opens.

---

## Adding a camera

**File → Cameras…**, then either **Add** and type the address, or
**Scan network…** to let leolink ask.

The scan sends one ONVIF discovery probe by multicast. Cameras answer only if
ONVIF is switched on — it is on by default on Reolink firmware, but the probe
does not cross routers or most VPNs. If nothing turns up, the camera is
probably still fine; just type its address.

**Test connection** logs in and reports the model and firmware. If it fails,
the message says why rather than "error":

| What you see | What it means |
|---|---|
| Wrong user name or password | exactly that |
| No free connections | the camera allows only a handful of sessions; close other viewers |
| This firmware does not support that command | older firmware, the feature is hidden |
| Not permitted — this model lacks the hardware | e.g. asking a fixed camera to pan |
| Subsystem unavailable | usually no SD card fitted |

### Which stream

**Sub stream** is roughly 640×360 and costs almost nothing. Use it for a wall of
cameras. **Main stream** is the full sensor resolution — 2560×1440 on an
RLC-410W — and is what you want full-screen or for recording.

### Which transport

**RTSP** is the default and works everywhere. **HTTP-FLV** is the path the
camera's own web interface uses: slightly lower latency, and it only needs port
80, which helps when RTSP is filtered.

**Baichuan** is Reolink's own protocol on port 9000 — what their app speaks.
Reach for it when RTSP gives you nothing: battery-powered models keep it
switched off to save power, and some firmware disables it by default. It also
leaves the camera's small pool of web sessions alone, which matters on a device
that only allows a handful at once. leolink speaks the protocol itself and hands
the player a plain video stream on a loopback port; sound still comes over RTSP.

### Keeping the password out of the file

`~/.config/leolink/config.json` is mode 600, but the password is in it as clear
text. To avoid that, leave the password field empty and give a **password
command** instead. leolink runs it and reads the secret from its output:

```
pass show reolink/hall
secret-tool lookup service reolink host 192.168.1.10
```

---

## Arranging the grid

**Cameras… → Layout.**

Left on *automatic*, cameras fill the grid in order and the grid sizes itself:
one camera 1×1, two 2×1, three or four 2×2, up to nine 3×3.

To place cameras yourself, set **Row** and **Column** per camera. **Row span**
and **Column span** let one camera cover several cells — a 2×2 driveway
surrounded by 1×1 tiles, for instance. The preview on the right shows the result
as you type; the selected camera is highlighted.

A placement that would fall outside the grid widens the grid rather than hiding
the camera.

---

## Events

**Cameras… → pick a camera → Settings for this camera…**, then *Detection by
leolink* and *Reactions*.

Every setting in this section belongs to the camera you picked, not to all of
them — which is the whole reason it lives in that camera's own window. What
happens on screen once an event arrives, on the other hand, is the same
whichever camera raised it, and is under **Settings… → On motion**.

### Who notices the motion

*The camera reports it* uses ONVIF and costs nothing — the camera was watching
anyway. This is right for any Reolink with motion detection switched on.

*leolink watches the picture* analyses the video here instead. Use it for
cameras that report nothing: older firmware, other makers, or a camera whose
own detection is off. It opens a second connection to the sub stream and
compares successive frames at 160x90 — small enough to watch many cameras at
once, and quite enough to notice a person.

*Either of the two* accepts whichever speaks first.

**Motion zones** apply to the local detector. Drag over the picture to choose
what is watched; darkened areas are ignored. Worth doing for a road at the edge
of view, a tree that moves in the wind, or a neighbour's doorway — those are
what produce alerts nobody wants at three in the morning.

**Sensitivity** is how much a spot must change to count at all.
**Minimum area** is how much of the watched picture must change before it is
called motion; 20‰ is two percent, roughly a person at middle distance. For
reference, a still camera measures around 0.3‰ from sensor noise alone, and
busy traffic around 60‰.

### Sound

A camera with a microphone can raise events on noise. The threshold is in dBFS:
-60 dB is close to silence, -35 dB the default, -20 dB a raised voice nearby.
*Hold for* keeps the event up after the noise stops so one bark is not reported
four times.

### Recording

**Record while motion lasts** writes the stream to disk *here*. The camera is
not involved beyond sending video, which is why this works on cameras with no SD
card in them.

The stream is muxed, not re-encoded: the recording is bit-identical to what the
camera sent, and the processor stays nearly idle. Files are Matroska, which
survives an abrupt end far better than MP4.

**Keep recording after** adds a tail so an event does not stop mid-scene.
Motion that resumes during that tail continues the same file instead of starting
a second one.

**Include before** puts the seconds *leading up to* the trigger into the file —
usually the part that shows how someone got there. The past cannot be recorded
after the fact, so anything above zero keeps the stream running into a buffer of
short segments on disk; when the event ends, the file is cut out of them without
re-encoding. It costs one more connection to the camera and a little disk, and
it is bounded by how long leolink has been running: ask for thirty seconds
twenty seconds after starting and you get twenty.

The cut lands on a key frame, so you may get a second or two *more* lead-in than
asked for, never less.

### Round the clock

Recording without stopping keeps a rolling window — the last day, the last
week — under `<recordings folder>/continuous/<camera>/`.

It is a run of files rather than one, because a file cannot be trimmed at the
front: keeping a day in a single file would mean rewriting tens of gigabytes
every time a minute expires. Dropping a whole file costs one `unlink`. **One
file per** sets how long each is — shorter finds a moment more precisely,
longer leaves fewer to scroll past — and **Keep the last** how far back the
archive reaches. Older files are deleted as new ones arrive.

Switch this on together with a pre-recording and one buffer serves both: the
recording of an event is cut out of the archive, so nothing extra is opened to
the camera.

Plan for the disk. The dialog estimates it from the bit rate the camera reports
for the stream leolink is opening — at 4 Mbit/s, a day is about 43 GB per
camera.

### Reacting

Three reactions, each optional, set globally or per camera:

- **Run command** — any shell command
- **Call an HTTP endpoint** — GET, POST or PUT
- **Publish MQTT** — QoS 0 to any broker

Per camera you either follow the global set or replace it entirely. There is no
partial inheritance, because "why did that not fire" is hard enough already.

Placeholders work in every template:

| | |
|---|---|
| `%n` | camera name |
| `%i` | camera id |
| `%h` | host |
| `%t` | ISO 8601 timestamp |
| `%e` | event type |
| `%s` | `on` or `off` |
| `%f` | recording file, if one was started |
| `%p` | still image |

Examples:

```sh
notify-send "Motion at %n" "%t"
curl -X POST https://home.example/hook -d "camera=%n"
```

With no webhook body or MQTT payload given, leolink sends JSON:

```json
{"camera":"Hall","cameraId":"a1b2c3d4","host":"192.168.1.10",
 "event":"motion","state":"on","time":"2026-07-26T21:42:06",
 "recording":"/home/you/Videos/leolink/Hall-20260726-214206.mkv"}
```

MQTT is a fire-and-forget publisher: connect, publish, disconnect. No TLS — use
it on a trusted network or point it at a local broker that bridges onward.

---

## Recordings on the camera

**File → Recordings on the camera…**

Cameras with an SD card record on their own, and this browses what is there:
pick a period, search, then play or download.

If every search comes back saying the subsystem is unavailable, the camera has
no card in it — that is what its error -17 means, and it is by far the most
common reason this shows nothing.

Playback opens in mpv rather than in a tile. A recording has a timeline, and a
viewer built for live pictures has no scrubbing or seeking to offer it.

## The event log

**File → Event log…** (`Ctrl+L`)

Every event with the still captured at that moment and the recording if there
was one. Filter by camera, or show only events that produced a recording.
Double-click opens the file.

Clearing the log removes the history, not the recordings.

The log is `~/.local/share/leolink/events.jsonl` — one JSON object per line, so
anything can read it. It is pruned to 90 days at start-up.

---

## Window and desktop

**Settings… → Window.**

Menu bar, toolbar, status bar and the window decoration can each be hidden, for
a wall display that should show cameras and nothing else.

### Full screen

`F11` puts the grid over the whole screen with every bar hidden. A
double-click on a camera gives that one camera the screen to itself; another
double-click goes back to the grid, and `Esc` leaves full screen altogether —
the bars come back exactly as they were configured.

A double-click on a camera in an ordinary window takes the short way and does
both at once: that camera, full screen. `Esc` then returns to the window.

The controls under each camera stay out of the way while nothing is happening:
a few seconds after the pointer stops they withdraw, and the pointer is hidden
with them, leaving nothing but the picture. Any movement brings them back.

**If you have hidden everything and cannot find your way back:**

- `Ctrl+M` brings the menu bar back
- `Ctrl+Shift+D` brings the window frame back
- **right-click anywhere** — the context menu always has these
- with no frame, **drag the strip beneath any camera** to move the window

### Tray

The tray icon is optional, and closing or minimising can hide the window to it
rather than quitting. Cameras keep recording while hidden.

**Bring the window up when motion is detected** either restores the previous
size or takes over the screen, whichever you pick.

### Alerts

**Settings… → On motion.**

A red flash over the tile for a moment, and optionally a sound. Both are
adjustable; the sound falls back to the desktop's own notification sound if no
file is given. The same page decides whether the window comes to the front.

Which cameras raise an event at all is not here — that is per camera, under
Cameras… → Settings for this camera… → Detection by leolink.

### Language

**Settings… → General.**

Twelve languages — Arabic, Chinese, English, French, German, Hindi, Italian,
Japanese, Portuguese, Russian, Spanish and Turkish — or whatever the system asks
for. Takes effect on restart. Arabic mirrors the whole interface.

The interface follows the desktop's light or dark palette. The video area stays
near-black in both — dark scenes and letterbox bars read correctly against it,
and a bright surround glares at night.

---

## Command line

```
leolink                                    normal start
leolink --baichuan-test <host> --user u --password p
leolink --baichuan-video <host> --user u --password p --out /tmp/x.h264
leolink --baichuan-p2p <UID>               UNTESTED, see below
```

The Baichuan probes print what the camera's proprietary protocol on port 9000
replies. Useful when reporting a problem with an unusual model. The video probe
also reports what the media container held — frame counts, codec, anything it
did not recognise — and writes the stream out so `ffprobe` can confirm it.

| Variable | What it does |
|---|---|
| `LEOLINK_DEBUG=1` | Detailed logging for one run, without touching the settings. Use it when the problem stops leolink from starting far enough to reach a dialog. |
| `LEOLINK_CONFIG=<path>` | Use a different configuration file. A second set of cameras, a kiosk profile, or trying a setting without disturbing one that works. |
| `LEOLINK_MPV_DEBUG=1` | libmpv's own log, for a tile that stays black. |

---

## When something goes wrong

**Help ▸ Diagnostics** (Ctrl+D) is the first place to look. It shows what
leolink and the cameras have actually been doing, filtered by area — video, the
camera's API, ONVIF events, detection — and by severity.

Errors and warnings are recorded always. **Detailed logging**, the checkbox in
that window, adds every request to the camera, every decoder decision and every
reconnect. Leave it off day to day; switch it on when something is wrong,
reproduce the problem, then press **Copy report**.

The report carries the log together with what the machine is: distribution,
Qt version, session type, graphics driver, which decoder mpv actually chose,
whether ffmpeg is installed. That last group answers most reports on its own.

**It is safe to share.** Passwords, session tokens and public addresses are
removed before anything reaches the file — not on the way out, but at the point
of writing, so a log that was never meant to be sent is clean too. Addresses
inside your own network are kept: they identify nothing outside the house and
are usually the first clue.

The log lives at `~/.local/share/leolink/leolink.log`, rotated at 2 MB (8 MB
with detailed logging on), one previous file kept.

### If the picture works but the processor is busy

Look for `Decoder in use:` in the log. `vaapi` or `nvdec` means the graphics
card is doing the work; `no` means the processor is, and on a 2560×1440 stream
that costs a core and a half for a picture that looks identical.

The usual cause is the camera's **H.264 profile set to “Base”**. Graphics
drivers implement *Constrained* Baseline, Main and High — not plain Baseline —
so the driver refuses the stream and mpv quietly falls back. Measured on an
RLC-410W with an AMD RX 6400:

```
profile Base (0x42)  →  "Hardware decoding of this stream is unsupported"  →  software
profile High (0x64)  →  "Using hardware decoding (vaapi)"                  →  vaapi
```

Camera settings ▸ Video ▸ profile ▸ **High** fixes it. The picture is the same;
High is a superset of Baseline and every decoder made this century handles it.

leolink says this in the log when it happens, so it need not be worked out
twice.

If hardware decoding misbehaves on your driver, `QT_XCB_GL_INTEGRATION=xcb_glx`
puts Qt back on GLX — hardware decoding then cannot work at all, but nor can it
cause trouble.

### If a setting seems to be missing

Reolink firmware differs enormously between models. **Camera settings ▸
Maintenance ▸ What this camera supports** asks the camera which commands it
actually has and lists the answer. If your camera clearly does something leolink
does not offer, that list in an
[issue](https://github.com/tombueng/leolink/issues) is what makes it possible to
add — particularly for hardware nobody here owns, such as an LTE model.

---

## Known limits

**Playback from an SD card** is implemented but never tested against a card.
The development camera has none fitted, so every search answers -17 and there
was nothing to check the file listing or the download against. The commands
come from the documented API — see the [protocol notes](protocol.md) — and the
dialog reports what the camera actually said, so a first run with a card in
should show plainly where reality differs.

**P2P access by UID** is implemented from the protocol description and has never
run against a P2P-capable camera. `leolink --baichuan-p2p <UID>` reports each
step. If you have such a camera, that output attached to an
[issue](https://github.com/tombueng/leolink/issues) would be very welcome.

**Two-way audio** is not implemented. The vendor's SDK can do it and the
protocol notes describe where it lives, but the development camera has no
speaker. The Baichuan transport is now in place, which is most of what it needs.

**Mobile data** — SIM, APN, signal — is implemented from the protocol and has
never run against a camera with a modem. Nothing there can do damage: a command
the camera does not know is simply refused. But it may equally show an empty
screen. The capability list described above is what would let it be finished.

**Weekly schedules** are 7×24 and the editor labels the first row Monday. Which
weekday the camera itself counts from could not be established here: the value
cannot be read back in a form that reveals it, and this camera's web interface
has no schedule screen to compare against. If recordings land a day out, that is
where to look.

---

## Why the picture is dark on a Wayland session

leolink asks Qt for the xcb platform when a Wayland session is detected, because
libmpv renders into a native window handle and that only works under X11.
XWayland bridges it. Setting `QT_QPA_PLATFORM` yourself overrides this.
