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

---

## Short reply — "is there a native Linux client?" (English)

> There is now: **leolink**, a native Qt/C++ client for Reolink cameras on Linux.
> I write it — so treat this as the biased answer it is.
>
> What it does: several cameras in a grid you arrange yourself, per-camera
> volume, motion alerts pushed by the camera over ONVIF (or worked out here from
> the picture, for cameras that report nothing), recording to your own disk on
> motion — which works without an SD card in the camera — and an event log with
> the stills and clips. It changes settings on the camera too: resolution, bit
> rate, profile, detection area, privacy zones, users, Wi-Fi.
>
> Four ways to get the picture: RTSP, HTTP-FLV, Reolink's own Baichuan protocol
> (for cameras that keep RTSP switched off), or any URL you like. Two-way audio
> works through the standard ONVIF backchannel where the camera has a speaker.
>
> Nothing goes to a cloud. On the local network it talks only to the camera.
>
> Honest about the state of it: it is new. Developed against an RLC-410W and a
> Duo 2 PoE, and it asks each camera what it supports rather than assuming, so
> other models should work — but "should" is doing some lifting there. Playback
> from an SD card and the P2P path are written from the protocol and have never
> run against hardware that has them.
>
> MIT, source and .deb/.rpm/AppImage/Flatpak at
> https://github.com/tombueng/leolink

---

## Short reply — "gibt es einen nativen Linux-Client?" (German)

> Inzwischen ja: **leolink**, ein nativer Qt/C++-Client für Reolink-Kameras
> unter Linux. Ich schreibe ihn — nehmt die Antwort also als das, was sie ist:
> parteiisch.
>
> Was er kann: mehrere Kameras in einem selbst angeordneten Raster, Lautstärke
> je Kamera, Bewegungsmeldungen von der Kamera über ONVIF (oder hier aus dem
> Bild errechnet, für Kameras, die nichts melden), Aufnahme auf die eigene
> Platte bei Bewegung — das geht auch ohne SD-Karte in der Kamera — und ein
> Ereignisprotokoll mit Standbildern und Clips. Kameraeinstellungen ändert er
> auch: Auflösung, Bitrate, Profil, Erfassungsbereich, Privatzonen, Benutzer,
> WLAN.
>
> Vier Wege für das Bild: RTSP, HTTP-FLV, Reolinks eigenes Baichuan-Protokoll
> (für Kameras, die RTSP abgeschaltet lassen) oder eine beliebige URL.
> Gegensprechen läuft über den ONVIF-Rückkanal, wo die Kamera einen Lautsprecher
> hat.
>
> Nichts geht in eine Cloud. Im lokalen Netz spricht er nur mit der Kamera.
>
> Ehrlich zum Stand: er ist neu. Entwickelt an einer RLC-410W und einer Duo 2
> PoE, und er fragt jede Kamera, was sie kann, statt es anzunehmen — andere
> Modelle sollten also laufen. Wiedergabe von der SD-Karte und der P2P-Weg sind
> aus dem Protokoll geschrieben und nie an passender Hardware gelaufen.
>
> MIT-Lizenz, Quellcode und .deb/.rpm/AppImage/Flatpak unter
> https://github.com/tombueng/leolink

---

## One-liner, for a thread that only wants a pointer

> Native Linux client for Reolink cameras, MIT, Qt/C++:
> https://github.com/tombueng/leolink — my own project, and new, so the usual
> caveats apply.
