# Camera captures

What four real cameras answered, used by the tests in place of the cameras:

| Directory  | Model                       | Firmware    | Has a web server |
|------------|-----------------------------|-------------|------------------|
| `e1zoom`   | E1 Zoom                     | 3.1.0.4417  | yes (HTTPS)      |
| `doorbell` | Reolink Video Doorbell WiFi | 3.0.0.6460  | yes              |
| `e1`       | E1                          | 3.1.0.1643  | switched off     |
| `e1pro`    | E1 Pro                      | 3.1.0.3149  | none             |

`<msg>.xml` is the camera's reply to Baichuan message `<msg>`, decrypted. These
are the *get* messages that `src/BaichuanCommands.cpp` reads. `http/<Command>.json`
is the same camera's answer to that HTTP API command, captured within minutes.
Only the two cameras with a web server have one.

Everything that could identify a camera, a household or a network has been
replaced. The same original value gets the same replacement in the XML and the
JSON, so the two still agree where the cameras agreed:

- camera names → `Camera N`
- serial numbers → zeros
- UIDs → `TESTUIDnnnnnnnnn`
- MAC addresses → the documentation range `00:00:5e:00:53:xx`
- IP addresses → TEST-NET-1, `192.0.2.x`
- the camera's own network, and every network it could hear → `example-net-N`
- Wi-Fi keys and passwords → empty
- e-mail and FTP servers and accounts → `example.com`
- time zone → UTC

Afterwards, every original value was searched for in every file, and none
remained.

`onvif/` holds an E1 Zoom's ONVIF replies: its answer to a WS-Discovery probe,
to CreatePullPointSubscription, and to its first PullMessages. The
WS-Security header the camera echoes back has been removed, since its password
digest could be attacked offline. The address and the MAC address inside the
device's UUID were replaced as above.
