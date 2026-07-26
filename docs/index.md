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

**Cameras… → Events.**

Motion comes from the camera over ONVIF. leolink holds a long poll open and the
camera answers when something happens, so this is a request every few seconds
rather than one per second.

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

**Cameras… → Window.**

Menu bar, toolbar, status bar and the window decoration can each be hidden, for
a wall display that should show cameras and nothing else.

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

A red flash over the tile for a moment, and optionally a sound. Both are
adjustable; the sound falls back to the desktop's own notification sound if no
file is given.

### Language

English and German, or whatever the system asks for. Takes effect on restart.

The interface follows the desktop's light or dark palette. The video area stays
near-black in both — dark scenes and letterbox bars read correctly against it,
and a bright surround glares at night.

---

## Command line

```
leolink                                    normal start
leolink --baichuan-test <host> --user u --password p
leolink --baichuan-p2p <UID>               UNTESTED, see below
```

The Baichuan probes print what the camera's proprietary protocol on port 9000
replies. Useful when reporting a problem with an unusual model.

`LEOLINK_MPV_DEBUG=1` turns on libmpv's own log, which is what to attach when a
tile stays black.

---

## Known limits

**Playback from an SD card** is not implemented. The commands exist in the
camera API and are documented in the [protocol notes](protocol.md), but the
development camera has no card fitted, so nothing here has been tested against
real recordings.

**P2P access by UID** is implemented from the protocol description and has never
run against a P2P-capable camera. `leolink --baichuan-p2p <UID>` reports each
step. If you have such a camera, that output attached to an
[issue](https://github.com/tombueng/leolink/issues) would be very welcome.

**Motion and audio detection performed by leolink itself**, with drawable zones,
for cameras that report nothing on their own — planned, not built.

---

## Why the picture is dark on a Wayland session

leolink asks Qt for the xcb platform when a Wayland session is detected, because
libmpv renders into a native window handle and that only works under X11.
XWayland bridges it. Setting `QT_QPA_PLATFORM` yourself overrides this.
