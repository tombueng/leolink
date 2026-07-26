---
title: Announcement drafts
description: Ready-to-post texts for communities that ask about Linux clients
---

# Announcement drafts

Texts you can post yourself where people ask about running Reolink cameras on
Linux. Nothing here has been posted anywhere — these are drafts for you to send
under your own name.

A word on where to post: most of these communities treat unsolicited project
links as spam. The ones below are places where the question genuinely comes up.
Reply to an existing question rather than opening a new thread wherever
possible, and say plainly that it is your own project.

---

## Reolink community forum

> **A native Linux client, if anyone else needs one**
>
> I wanted to watch my cameras on Linux without the Windows client, so I wrote
> one: **leolink**. Qt 6, talks to the camera's own HTTP API, RTSP and ONVIF —
> nothing installed on the camera, no cloud account needed for local viewing.
>
> Several cameras in a grid you arrange yourself, volume per camera, motion
> alerts pushed over ONVIF, and recording to the PC — which means you get event
> recordings even on cameras with no SD card in them. Events can also run a
> command, call a webhook or publish MQTT.
>
> It also changes the camera's own encoder settings, and it builds those menus
> from what the camera reports it supports, so it should behave on models I
> have never seen.
>
> Free and open source, MIT: https://github.com/tombueng/leolink
>
> Developed against an RLC-410W. If you have a different model — especially a
> battery one or anything you reach by UID — I would like to hear what breaks.
> Full disclosure: my own project, not affiliated with Reolink.

---

## r/reolinkcam, r/homeassistant, r/linux

> **leolink — a native Linux viewer for Reolink cameras (Qt6, MIT)**
>
> Built this because the options on Linux were a browser tab or the Windows
> client under Wine.
>
> - multi-camera grid, tiles can span cells
> - ONVIF motion push, not polling
> - records on the PC, so no SD card required
> - events → shell command, HTTP webhook or MQTT (handy for Home Assistant)
> - camera settings (resolution, bitrate, framerate) read from what the camera
>   says it supports
> - `.deb`, `.rpm`, AppImage and Flatpak
>
> https://github.com/tombueng/leolink
>
> Tested against an RLC-410W. Reports from other models welcome — the protocol
> notes in the repo may also be useful if you are writing your own thing.
> It is my project.

---

## Home Assistant community

> **MQTT and webhooks from Reolink cameras without the cloud**
>
> If you are pulling Reolink motion into Home Assistant, leolink can publish
> straight to MQTT on every event, with the topic and payload templated:
>
> ```
> leolink/%n/motion   →   {"camera":"Hall","event":"motion","state":"on", …}
> ```
>
> It is a viewer first — multi-camera grid, local recording — but the event
> side may be the useful part here. The motion signal comes from the camera
> over ONVIF push rather than polling.
>
> https://github.com/tombueng/leolink · MIT · my own project

---

## Hacker News / Lobsters

Only worth posting if the reverse-engineering angle is the story, which is the
part likely to interest that audience:

> **Reverse engineering Reolink's camera protocols to write a Linux client**
>
> Wrote up what the cameras actually speak while building a viewer for them:
> the HTTP CGI API and its error codes, the two ONVIF quirks in their firmware
> that make event subscription fail in opposite directions, and the Baichuan
> protocol on port 9000 including its four-message login handshake.
>
> One finding worth the price of admission: mpv's "low-latency" profile
> silently breaks recording — two of its options cut stream probing so short
> that the recorder never learns the codec parameters and writes zero-byte
> files.
>
> Notes: https://tombueng.github.io/leolink/protocol.html
> Client: https://github.com/tombueng/leolink

---

## When answering an existing question

Keep it short, answer what was asked first, mention the project second:

> RTSP works on any Reolink at `rtsp://user:pass@ip:554/h264Preview_01_main`
> (sub stream: `_sub`), so VLC or mpv will show it. If you want several cameras
> and motion events, I maintain leolink, which does that natively on Linux:
> https://github.com/tombueng/leolink
