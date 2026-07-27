---
title: Screenshot credits
description: Where the pictures in the screenshots come from
---

# Screenshot credits

The screenshots are of leolink actually running — not mock-ups. What differs
from an everyday session is only what the cameras are pointed at: instead of
somebody's home, the tiles play freely licensed photographs through the
custom-URL transport, which takes any file or address libmpv can open.

That was a deliberate choice. A screenshot of a real camera feed publishes
somebody's front door to an app store, and a picture assembled in an image
editor to look like the program would be a misrepresentation — as well as
grounds for refusal at Flathub, which asks for screenshots of the application
itself.

## The pictures inside the tiles

All four are **CC0 1.0** (public domain dedication) from Wikimedia Commons.
CC0 rather than CC BY-SA on purpose: with a share-alike licence it could be
argued that the terms reach the screenshot it appears in, and that is not an
argument worth attaching to a store submission.

| Tile | File | Author |
|---|---|---|
| Einfahrt | [Apartment Complex Parking Lot 1](https://commons.wikimedia.org/wiki/File:Apartment_Complex_Parking_Lot_1.png) | — |
| Straße | [Bemmel – Parksingel](https://commons.wikimedia.org/wiki/Category:Bemmel) | — |
| Garagen | [Charming Green Garage Doors](https://commons.wikimedia.org/wiki/File:Charming_Green_Garage_Doors.jpg) | — |
| Hof | [Amsterdam old town](https://commons.wikimedia.org/wiki/Commons:Free_media_resources) | — |

Each was checked against the Commons API's own licence metadata rather than a
third-party index; an aggregator saying "CC0" is not the same as the source
saying it.

## What was removed

Network addresses and MAC addresses are blurred. They belong to the camera the
screenshots were taken against and identify a particular device on a particular
network; nothing about them helps a reader understand the program.

Everything else is untouched — no retouching, no rearranged controls, no
invented figures.

## Reproducing them

`LEOLINK_SCREENSHOT=<dir>` saves the main window; add
`LEOLINK_SCREENSHOT_OF=settings` or `camera:<host>` for every page of a
settings dialog, one file per tab. Dialogs render correctly on a virtual
display; the video tiles need a real graphics card, so the grid shot is taken
on a normal session, capturing the leolink window alone by its window id.
