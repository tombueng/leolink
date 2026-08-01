"""Simplified Chinese. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Simplified Chinese. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "诊断",
    "&Diagnostics…": "诊断(&D)…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "leolink 和摄像机都做了些什么 — 以及可附在故障报告里的报告。",
    "Errors only": "仅错误",
    "Warnings and errors": "警告和错误",
    "Normal activity": "常规活动",
    "Everything": "全部",
    "All areas": "所有方面",
    "Search…": "搜索…",
    "Show": "显示",
    "Detailed logging": "详细日志",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "记录对摄像机的每次请求、解码器的每个决定和每次重连。日常使用时保持关闭 — 出问题时打开，重现问题，然后再发送报告。",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "把对摄像机的每次请求、解码器的每个决定和每次重连记入 ~/.local/share/leolink/leolink.log。",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "错误和警告始终会记录。详细日志还会加上与摄像机的往来 — 出问题时打开它，重现问题，然后从「帮助 ▸ "
        "诊断」发送报告。密码和会话令牌在写入之前就已删除。",
    "Open diagnostics…": "打开诊断…",
    "Open diagnostics": "打开诊断",
    "Follow new lines": "跟随新行",
    "Copy report": "复制报告",
    "System details and the log, ready to paste into a bug report.":
        "系统信息和日志，可直接粘贴到故障报告中。",
    "Report copied.": "报告已复制。",
    "Save report…": "保存报告…",
    "Save report": "保存报告",
    "Text files (*.txt)": "文本文件 (*.txt)",
    "Could not write %1.": "无法写入 %1。",
    "Open log folder": "打开日志文件夹",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "密码、会话令牌和互联网地址在写入前就已删除，因此可以原样分享。您自己网络内的地址会保留 — 它们通常正是第一条线索。",
    "%1 of %2 lines": "%2 行中的 %1 行",
    "Report a problem": "报告问题",
    "<b>Attach a diagnostics report</b>": "<b>请附上诊断报告</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "它记录了您的机器是什么、摄像机回答了什么，以及问题出在哪里 — "
        "密码和地址都已删除。没有它，多数报告无从跟进。\n\n如果这个问题您能自己触发，请先在诊断窗口打开详细日志，让它再发生一次，然后复制报告。",
    "Go to the issue tracker": "前往问题追踪页",
    "Application": "应用程序",
    "Camera API": "摄像机接口",
    "ONVIF events": "ONVIF 事件",
    "Event actions": "事件动作",
    "Baichuan": "Baichuan",
    "User interface": "用户界面",
    "Qt": "Qt",
    "strong": "强",
    "good": "良好",
    "fair": "一般",
    "weak": "弱",
    "unknown": "未知",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4": "摄像机所听到的信号：4 格中的 %1 格",
    "Encryption: %1": "加密：%1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "有些名称是从多个接入点听到的 — 那是一张 Mesh 网。摄像机连接的是这个名称，而不是某个具体节点；由 Mesh "
        "决定它与哪个节点通信，并在需要时切换。要找到最佳位置，请移动摄像机并观察上方的「Wi-Fi 信号」：那才是它实际的连接。",
    "What this camera supports": "这台摄像机支持什么",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "Reolink 的固件在不同型号之间差异极大，想可靠地知道一台摄像机能做什么，唯一的办法就是问它。如果您的摄像机明显具备某项功能而 "
        "leolink 却没有，把这份清单放进故障报告，正是让它得以补上的关键。",
    "Ask the camera": "询问摄像机",
    "Copy the list": "复制清单",
    "Copied.": "已复制。",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>支持（%1）：</b>%2<br><br><b>不支持（%3）：</b>%4",
    "Privacy": "隐私",
    "Privacy areas…": "隐私区域…",
    "Parts of the view the camera blanks before anything leaves it.":
        "在任何画面离开摄像机之前，由它遮黑的部分。",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "在摄像机内部就被遮黑，因此被遮住的部分在任何查看端和任何录像里都不存在 — 邻居的窗户，或者不该入镜的一张办公桌。",
    "%1 — privacy areas": "%1 — 隐私区域",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "拖出摄像机应当遮黑的部分。它会在画面离开设备之前涂黑，因此这些部分在实时画面、录像以及任何其他程序中都不存在 — 包括厂商自己的应用。",
    "Remove the last": "移除最后一个",
    "Remove all": "全部移除",
    "No picture: %1 — the areas can still be drawn.": "无画面：%1 — 区域仍然可以绘制。",
    "%1 of %2 areas": "%2 个区域中的 %1 个",
    "nothing blanked": "未遮黑任何区域",
    "Detection area…": "侦测区域…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "摄像机监看画面的哪些部分。区域之外的一切都被忽略 — 画面边缘的一条路、风中的一棵树、邻居家的门。",
    "%1 — the camera's detection area": "%1 — 摄像机的侦测区域",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "在画面上拖动，选择摄像机监看的范围。变暗的区域会被忽略。这是摄像机自己的网格，%1 × %2，因此比 leolink 的更细。",
    "When to watch…": "何时监看…",
    "Hours of the week the camera raises motion events at all.":
        "摄像机会上报移动事件的每周时段。",
    "%1 — when to watch": "%1 — 何时监看",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "摄像机上报移动事件的时段。在此之外它照样看得见，只是不吭声。",
    "When to record…": "何时录像…",
    "Hours of the week the camera records to its card by itself.":
        "摄像机自行录到存储卡上的每周时段。",
    "%1 — when to record": "%1 — 何时录像",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "摄像机录到自己存储卡上的时段。这需要装好存储卡；录到本机是在「摄像机 → 事件」下设置的，无需存储卡。",
    "Area, times and sensitivity": "区域、时段与灵敏度",
    "To": "至",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "摄像机允许在一天中的不同时段采用不同灵敏度 — 夜里车灯不再触发一切，白天也不至于视而不见。",
    "All week": "整周",
    "Never": "从不",
    "Nights": "夜间",
    "Working hours": "工作时间",
    "Weekends": "周末",
    "22:00 to 06:00, every day.": "每天 22:00 至 06:00。",
    "08:00 to 17:00, Monday to Friday.": "周一至周五 08:00 至 17:00。",
    "Nothing is selected — this will never run.": "没有选中任何时段 — 这将永远不会运行。",
    "Always on.": "始终启用。",
    "Mobile data": "移动数据",
    "SIM card": "SIM 卡",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "只有卡要求时才需要。连错三次会锁卡，届时需要只有运营商才有的 PUK。",
    "Access point (APN)": "接入点（APN）",
    "Authentication": "身份验证",
    "Use mobile data": "使用移动数据",
    "Modem": "调制解调器",
    "Card": "卡",
    "Type": "类型",
    "Signal": "信号",
    "IMEI": "IMEI",
    "Card number": "卡号",
    "Mobile connection": "移动连接",
    "Data used": "已用流量",
    "Monthly limit": "每月上限",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>未在真实硬件上验证。</b>参与 leolink 的人没有一台带调制解调器的摄像机，这部分仅凭协议写成。它不会弄坏任何东西 — "
        "摄像机不认识的命令只会被拒绝 — 但同样可能什么都显示不出来。\n\n如果您的摄像机有 SIM "
        "卡，「维护」下的「这台摄像机支持什么」会列出它的固件实际拥有的命令。把那份清单放进故障报告，正是把这部分做好的前提。",
    "Baichuan (the camera's own protocol)": "Baichuan（摄像机自有协议）",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP 适合大多数摄像机，也是首先该试的。\n\nHTTP-FLV 只需要 80 端口，在 RTSP "
        "被封的地方很有用。\n\nBaichuan 是 Reolink 自家应用所讲的协议。对于把 RTSP 关掉的摄像机 — 电池款就是如此 — "
        "它就是答案，而且不占用摄像机那少得可怜的 Web 会话。仅限视频：声音仍走 RTSP。",
    "connecting over Baichuan…": "正通过 Baichuan 连接…",
    "Cannot open a local port: %1": "无法打开本地端口：%1",
    "Baichuan login failed: %1": "Baichuan 登录失败：%1",
    "The camera refused to send video: %1": "摄像机拒绝发送视频：%1",
    "The player did not connect.": "播放器未能连接。",
    "The camera stopped sending.": "摄像机已停止发送。",
    "custom stream": "自定义流",
    "Speak through the camera": "通过摄像机讲话",
    "Stop speaking": "结束讲话",
    "Play through %1": "通过 %1 播放",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "声音文件 (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;所有文件 (*)",
    "Speaking through the camera…": "正通过摄像机讲话…",
    "Finished.": "已完成。",
    "Cannot reach the camera: %1": "无法连上摄像机：%1",
    "The camera did not answer on the RTSP port.": "摄像机在 RTSP 端口上没有回应。",
    "ffmpeg is needed to send sound and could not be started.":
        "发送声音需要 ffmpeg，而它未能启动。",
    "The camera rejected the user name or password.": "摄像机拒绝了该用户名或密码。",
    "The camera refused: %1": "摄像机已拒绝：%1",
    "This camera does not offer a speaker.": "这台摄像机没有扬声器。",
    "Sound": "声音",
    "Send sound": "传输声音",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "摄像机的麦克风。即使关掉，它仍会在流里放一条音轨 — 一条完全无声的音轨，这比根本没有音轨要难察觉得多。",
    "What it recognises": "它能识别什么",
    "People": "人",
    "Vehicles": "车辆",
    "Animals": "动物",
    "Faces": "人脸",
    "Any movement": "任何移动",
    "Continuous": "持续",
    "This camera keeps a separate week for each kind of event. Which one?":
        "这台摄像机为每类事件单独保存一周的时段表。要哪一个？",
    "Push notifications": "推送通知",
    "Folder": "文件夹",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "摄像机此刻不回应请求。当它一次收到太多请求时就会这样；过一会儿它会自行恢复。",
    "Camera-side detection": "摄像机侧侦测",
    "Where it looks": "它看向哪里",
    "Choose the area…": "选择区域…",
    "When it reports at all": "它何时才上报",
    "Choose the hours…": "选择时段…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "一周的时段：勾选的时段里摄像机会上报移动，其余时段保持沉默。这与它有多灵敏无关 — 灵敏度在下面设置。",
    "How readily it triggers": "它多容易被触发",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "在一天之内，摄像机可以更容易或更不容易被触发。夜里车灯不再触发一切，白天也不至于视而不见。分几段由摄像机决定；每段的时间和灵敏度归您。",
    "Siren": "警报器",
    "Sound on an alarm": "报警时鸣响",
    "Times": "时段",
    "Spotlight": "照明灯",
    "On": "开",
    "Draw": "绘制",
    "Watch a rectangle": "监看一个矩形",
    "Ignore a rectangle": "忽略一个矩形",
    "Drag over single cells.": "在单个格子上拖动。",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "拖出一个要监看的矩形。按住 Shift 拖动可在不换工具的情况下做同样的事。",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "拖出一个要忽略的矩形。按住 Ctrl 拖动可在不换工具的情况下做同样的事。",
    "  · already added": "  · 已添加",
    "Processor load %1 %": "处理器负载 %1 %",
    "Encoder output %1 kbit/s": "编码器输出 %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "支持（%1）：\n%2\n\n不支持（%3）：\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "向 Reolink 询问的是摄像机，而不是这台电脑 — 因此它需要自己的一条互联网出路。",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "摄像机的一部分没有回应。视询问内容而定，这意味着没有装存储卡，或者摄像机没有互联网出路。",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "这里不提供恢复出厂设置。它连网络设置一并清除，而一台忘掉 Wi-Fi 的摄像机只能取下来用网线连接 — "
        "如果您确实要这么做，请使用摄像机自己的网页界面。",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "摄像机没有空闲会话。它一次只允许寥寥几个，还要与手机应用和它的网页共用。请关掉那些，或者等一分钟让旧会话失效。",
    "&File": "文件(&F)",
    "&View": "视图(&V)",
    "&Help": "帮助(&H)",
    "&Cameras…": "摄像机(&C)…",
    "&Save snapshots…": "保存快照(&S)…",
    "&Event log…": "事件日志(&E)…",
    "Open &recordings folder": "打开录像文件夹(&R)",
    "&Quit": "退出(&Q)",
    "&Full screen": "全屏(&F)",
    "Leave full screen": "退出全屏",
    "Show &menu bar": "显示菜单栏(&M)",
    "Show &toolbar": "显示工具栏(&T)",
    "Show status &bar": "显示状态栏(&B)",
    "Hide window &decoration": "隐藏窗口边框(&D)",
    "&Online handbook": "在线手册(&O)",
    "&Protocol notes": "协议笔记(&P)",
    "&Report a problem": "报告问题(&R)",
    "&About leolink": "关于 leolink(&A)",
    "Main": "主",
    "Ready": "就绪",
    "Grid view": "网格视图",
    "No cameras configured": "尚未配置摄像机",
    "Nothing to capture": "没有可截取的内容",
    "Save snapshots to": "快照保存到",
    "Esc leaves full screen": "Esc 退出全屏",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc 退出全屏 · 双击某台摄像机可让它铺满屏幕",
    "Double-click for the grid · Esc leaves full screen": "双击返回网格 · Esc 退出全屏",
    "Cannot save": "无法保存",
    "Settings could not be written to %1.": "设置无法写入 %1。",
    "Cannot create %1": "无法创建 %1",
    "Recording %1": "正在录制 %1",
    "Saved %1": "已保存 %1",
    "Motion at %1": "%1 处有移动",
    "Motion detected": "侦测到移动",
    "Could not run the motion command for %1": "无法为 %1 执行移动命令",
    "leolink is still running": "leolink 仍在运行",
    "Cameras keep recording. Use the tray icon to come back.":
        "摄像机仍在录制。用通知区域的图标可以回来。",
    "Show window": "显示窗口",
    "Cameras…": "摄像机…",
    "Quit": "退出",
    "Welcome to leolink": "欢迎使用 leolink",
    "<b>No cameras are configured yet.</b>": "<b>还没有配置任何摄像机。</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "用地址、用户名和密码添加一台摄像机。leolink 在您自己的网络里直接与摄像机通信 — 不涉及任何云账号。<p>各个选项的作用请见手册。",
    "Add camera…": "添加摄像机…",
    "Open handbook": "打开手册",
    "About leolink": "关于 leolink",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>面向 Reolink 摄像机的 Linux "
        "原生客户端。</p><p>直接讲摄像机自己的协议：局域网内的 HTTP 接口、RTSP 和 ONVIF，以及需要从别处连上摄像机时 "
        "Reolink 的 P2P 服务。</p><p><a href=\"%2\">手册</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">源代码</a></p><p>与 Reolink "
        "无关，也未获其背书。</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "还没有配置任何摄像机。\n\n请通过「摄像机…」添加一台。",
    "connecting…": "正在连接…",
    "main stream": "主码流",
    "sub stream": "子码流",
    "no host configured": "未填写地址",
    "cannot open stream": "无法打开码流",
    "libmpv unavailable": "libmpv 不可用",
    "player init failed": "播放器启动失败",
    "MOTION": "移动",
    "Mute this camera": "静音这台摄像机",
    "Unmute this camera": "取消这台摄像机的静音",
    "Volume": "音量",
    "Camera settings": "摄像机设置",
    "Settings": "设置",
    "Cameras": "摄像机",
    "Layout": "布局",
    "Events": "事件",
    "Window": "窗口",
    "Add": "添加",
    "Remove": "移除",
    "Remove camera": "移除摄像机",
    "Remove “%1” from the list?": "要把「%1」从列表中移除吗？",
    "New camera": "新摄像机",
    "Name": "名称",
    "Host": "地址",
    "User": "用户",
    "Password": "密码",
    "Password command": "取密码的命令",
    "UID": "UID",
    "Stream": "码流",
    "Transport": "传输",
    "192.168.1.10 or camera.lan": "192.168.1.10 或 camera.lan",
    "optional, for P2P access": "可选，用于 P2P 访问",
    "optional: pass show reolink/hall": "可选：pass show reolink/menting",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "若已填写，则运行该命令，并把它的输出用作密码。这样密码就不必写进配置文件。",
    "Sub stream (low bandwidth)": "子码流（带宽小）",
    "Main stream (full resolution)": "主码流（完整分辨率）",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV（延迟更低）",
    "Use HTTPS for the control API": "控制接口使用 HTTPS",
    "Show this camera": "显示这台摄像机",
    "Test connection": "测试连接",
    "Contacting %1…": "正在联系 %1…",
    "Enter a host first.": "请先填写地址。",
    "Incomplete camera": "摄像机信息不完整",
    "“%1” has no host address.": "「%1」没有地址。",
    "%1 — firmware %2, %3 channel(s)": "%1 — 固件 %2，%3 个通道",
    "Scan network…": "扫描网络…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "向网络询问有哪些 ONVIF 摄像机。只发出一次组播探询；保持沉默的设备绝不会被联系。",
    "Looking for cameras…": "正在查找摄像机…",
    "Stop": "停止",
    "Cameras found": "找到摄像机",
    "Add which one?": "添加哪一台？",
    "No cameras found": "未找到摄像机",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "没有 ONVIF 设备回应。\n\n摄像机只有在开启 ONVIF 时才会回答，而探询既穿不过路由器，也穿不过多数 "
        "VPN。您仍可以手动输入地址来添加摄像机。",
    "unnamed device": "未命名设备",
    " (Reolink)": "（Reolink）",
    "Cannot open a UDP socket for discovery.": "无法为搜索打开 UDP 套接字。",
    "Grid size": "网格大小",
    "Columns": "列数",
    "Rows": "行数",
    "Column": "列",
    "Row": "行",
    "Row span": "跨行",
    "Column span": "跨列",
    "automatic": "自动",
    "Position of the selected camera": "所选摄像机的位置",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "把行和列留在「自动」，摄像机就会按顺序填满网格。通过跨格，一台摄像机可以占据多个格子。",
    "Watch cameras for motion (ONVIF push)": "监看摄像机的移动（ONVIF 推送）",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "移动发生时由摄像机上报，而不是让 leolink 每秒询问一次。",
    "Run command": "运行命令",
    "notify-send \"Motion at %n\"": "notify-send \"%n 处有移动\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "当这台摄像机上报移动时运行。\n%n 摄像机名称 · %h 地址 · %t 时间戳 · %f 录像文件",
    "Record while motion lasts": "移动期间持续录制",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "从实时码流录到本机，因此即使摄像机没装存储卡也能用。",
    "Keep recording after": "移动结束后继续录",
    " s": " 秒",
    "Selected camera": "所选摄像机",
    "All cameras": "所有摄像机",
    "Recordings folder": "录像文件夹",
    "Browse…": "浏览…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "录像以 Matroska 写出且不重新编码：画面保持摄像机的原始质量，处理器几乎不干活。",
    "Appearance": "外观",
    "Show menu bar": "显示菜单栏",
    "Show toolbar": "显示工具栏",
    "Show status bar": "显示状态栏",
    "Hide window decoration": "隐藏窗口边框",
    "Ctrl+M toggles this at any time.": "Ctrl+M 可随时切换。",
    "For wall displays. Ctrl+Shift+D toggles it.": "适合墙面显示屏。Ctrl+Shift+D 切换。",
    "Notification area": "通知区域",
    "Show an icon in the notification area": "在通知区域显示图标",
    "Closing the window hides it instead of quitting": "关闭窗口时隐藏而不退出",
    "Minimising hides the window to the tray": "最小化时把窗口收进通知区域",
    "On motion": "有移动时",
    "Bring the window up when motion is detected": "侦测到移动时把窗口调到前面",
    "Come back as": "返回时的状态",
    "Previous size": "先前的大小",
    "Full screen": "全屏",
    "Language": "语言",
    "System language": "系统语言",
    "Takes effect after restarting leolink.": "重启 leolink 后生效。",
    "Menu bar hidden": "菜单栏已隐藏",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "菜单栏和工具栏都隐藏时，按 Ctrl+M 可把菜单调回来。",
    "Event log": "事件日志",
    "Camera:": "摄像机：",
    "Show:": "显示：",
    "All events": "所有事件",
    "Motion": "移动",
    "With recording": "有录像",
    "Refresh": "刷新",
    "When": "时间",
    "Camera": "摄像机",
    "Event": "事件",
    "Media": "媒体",
    "video": "视频",
    "image": "图像",
    " + image": " + 图像",
    "no preview": "无预览",
    "recording only": "仅录像",
    "no events recorded yet": "尚未记录任何事件",
    "Recording: %1%2": "录像：%1%2",
    " (file missing)": "（文件缺失）",
    "Image: %1": "图像：%1",
    "Open recording": "打开录像",
    "Open image": "打开图像",
    "Nothing to open": "没有可打开的内容",
    "The file for this event is no longer there.": "这条事件对应的文件已经不在了。",
    "Clear log…": "清空日志…",
    "Clear event log": "清空事件日志",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "要删除全部事件历史吗？\n\n录下的视频和图像仍留在磁盘上 — 只清空日志。",
    "Command": "命令",
    "could not be started": "无法启动",
    "Webhook": "Webhook",
    "invalid URL": "地址无效",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 失败：%2",
    "Event log…": "事件日志…",
    "MQTT broker or topic not set.": "未设置 MQTT 代理或主题。",
    "MQTT broker did not respond.": "MQTT 代理没有回应。",
    "MQTT: %1": "MQTT：%1",
    "MQTT: unexpected reply from the broker.": "MQTT：代理返回了意外的应答。",
    "MQTT refused the connection: %1": "MQTT 拒绝了连接：%1",
    "Video": "视频",
    "Decoding": "解码",
    "Hardware, fastest": "硬件，最快",
    "Hardware, with frame copy": "硬件，带帧拷贝",
    "Software only": "仅软件",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "硬件解码让处理器保持空闲，对主码流分辨率来说是正确的选择。\n\n如果画面出现绿块或卡住，请选「带帧拷贝」：仍在 GPU "
        "上解码，但会把每一帧拷到主内存 — 当视频嵌在另一个窗口里时，有些驱动需要这样。",
    "Favour low latency over smoothness": "宁要低延迟，不要流畅",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "把缓冲降到最低。如果高码率的流在拥挤的网络上卡顿，请关掉它。",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "拖动摄像机下方的横条可移动窗口。Ctrl+Shift+D 找回边框，Ctrl+M 找回菜单。",
    "%1 — camera settings": "%1 — 摄像机设置",
    "Reading settings from %1…": "正在从 %1 读取设置…",
    "Apply to camera": "应用到摄像机",
    "Main stream": "主码流",
    "Sub stream": "子码流",
    "Resolution": "分辨率",
    "Frame rate": "帧率",
    "Bit rate (kbit/s)": "码率（kbit/s）",
    "H.264 profile": "H.264 规格",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "越高画面越好，网络流量也越大。摄像机只会给出它确实撑得住的码率。",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "这些改动的是摄像机本身，因此任何客户端都会看到结果。可选项来自摄像机，各型号不同。",
    "Picture": "画面",
    "Brightness": "亮度",
    "Contrast": "对比度",
    "Saturation": "饱和度",
    "Sharpness": "锐度",
    "Hue": "色调",
    "Ready.": "就绪。",
    "Writing to the camera…": "正在写入摄像机…",
    "Nothing to write.": "没有要写入的内容。",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "已保存。更换编码器会重启码流，因此画面可能会短暂中断。",
    "&Record all cameras": "录制所有摄像机(&R)",
    "Record this camera": "录制这台摄像机",
    "Stop recording": "停止录制",
    "Recording all cameras": "正在录制所有摄像机",
    "Recording stopped": "录制已停止",
    "Recording started": "录制已开始",
    "Could not start recording %1": "无法开始录制 %1",
    "%1: %2": "%1：%2",
    "ffmpeg is not installed, so recording is unavailable.":
        "未安装 ffmpeg，因此无法录制。",
    "No stream address for %1.": "%1 没有码流地址。",
    "Recording failed: %1": "录制失败：%1",
    "Recording produced no data (ffmpeg exit %1).": "录制没有产生数据（ffmpeg 退出码 %1）。",
    "Could not start ffmpeg.": "无法启动 ffmpeg。",
    "Custom URL": "自定义地址",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "任何 libmpv 能打开的地址。可用于其他厂商的摄像机、NVR 码流或本地文件。",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "未安装 ffmpeg，因此无法进行移动侦测。",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "未安装 ffmpeg，因此无法进行声音侦测。",
    "Motion detection stopped: %1": "移动侦测已停止：%1",
    "Sound detection stopped: %1": "声音侦测已停止：%1",
    "Could not start ffmpeg for motion detection.": "无法为移动侦测启动 ffmpeg。",
    "Could not start ffmpeg for sound detection.": "无法为声音侦测启动 ffmpeg。",
    "Sound detected": "侦测到声音",
    "%1 at %2": "%2 处的 %1",
    "Detection": "侦测",
    "Motion comes from": "移动由谁上报",
    "The camera reports it (ONVIF)": "摄像机本身（ONVIF）",
    "leolink watches the picture": "leolink 观察画面",
    "Either of the two": "两者皆可",
    "Do not watch": "不监看",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "自己上报移动的摄像机，监看起来不费任何代价。\n\n在这里分析画面则适用于任何摄像机，包括什么都不上报的，但每台都要额外开一条到子码流的连接。",
    "Motion zones…": "移动区域…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "选择画面的哪些部分受到监看。仅在由 leolink 自行分析画面时有效。",
    "Sensitivity": "灵敏度",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "画面上的一处要变化多少才算数。越高察觉得越多，连阴影和雨水也算。",
    "Minimum area": "最小面积",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "受监看的面积要变化多少才算移动。20 ‰ 是画面的百分之二 — 大约相当于中距离上的一个人。",
    "Raise an event on sound": "声音触发事件",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "需要带麦克风的摄像机。会再开一条到子码流的连接。",
    "Sound above": "声音高于",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB 接近寂静，-20 dB 相当于近旁提高的说话声。",
    "Hold for": "保持",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "噪声停止后仍让事件保持一会儿，免得一声犬吠被报四次。",
    "%1 — motion zones": "%1 — 移动区域",
    "no picture available": "没有可用画面",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "在画面上拖动，选择受监看的范围。变暗的区域会被忽略 — 适合画面边缘的道路、风中摇动的树，或邻居家的门口。",
    "Watch all": "全部监看",
    "Ignore all": "全部忽略",
    "Invert": "反转",
    "Fetching a picture from %1…": "正在从 %1 获取画面…",
    "No picture: %1 — the zones can still be set.": "无画面：%1 — 区域仍然可以设置。",
    "Recordings on the &camera…": "摄像机上的录像(&C)…",
    "Browse what is stored on the camera's own SD card.": "浏览摄像机自己存储卡上的内容。",
    "Which camera": "哪台摄像机",
    "Show recordings from": "显示以下摄像机的录像",
    "%1 — recordings on the camera": "%1 — 摄像机上的录像",
    "Search": "搜索",
    "From": "从",
    "to": "到",
    "Start": "开始",
    "Length": "时长",
    "Size": "大小",
    "File": "文件",
    "Play": "播放",
    "Download…": "下载…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "选择一个时段并按「搜索」。只有摄像机装了存储卡才会有录像。",
    "Asking %1…": "正在询问 %1…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "那个时段里什么都没找到。要么没有录下任何东西，要么摄像机没有存储卡。",
    "No session with the camera — search first.": "尚未与摄像机建立会话 — 请先搜索。",
    "No player": "没有播放器",
    "mpv was not found. The recording is at:\n\n%1":
        "找不到 mpv。录像位于：\n\n%1",
    "Save recording": "保存录像",
    "Cannot write to %1.": "无法写入 %1。",
    "Saved to %1": "已保存到 %1",
    "Download failed: %1": "下载失败：%1",
    "Maintenance": "维护",
    "Restart": "重启",
    "Restart the camera": "重启摄像机",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "摄像机会离线一分钟左右，然后自行回来。存储卡上的录像不受影响，设置也会保留。\n\n当摄像机不再应答、拒绝新连接，或固件升级后行为异常时，值得一试。",
    "<b>Restart %1?</b>": "<b>要重启 %1 吗？</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "画面会消失约一分钟。此刻正在录制的内容将会停止。",
    "Asking %1 to restart…": "正在请求 %1 重启…",
    "Restarting. The camera will be back in about a minute.":
        "正在重启。摄像机约一分钟后回来。",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "这里不提供恢复出厂设置和格式化存储卡。两者都不可撤销，最好在摄像机自己的网页界面里做，那里的警告出自厂商之手。",
    "Network": "网络",
    "Connection": "连接",
    "Reading…": "正在读取…",
    "Wi-Fi signal": "Wi-Fi 信号",
    "Wi-Fi signal unknown": "Wi-Fi 信号未知",
    "Wi-Fi signal %1 of %2": "Wi-Fi 信号 %2 格中的 %1 格",
    "Link": "链路",
    "Address": "地址",
    "Netmask": "子网掩码",
    "Gateway": "网关",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "网络名称",
    "Ports": "端口",
    "The camera reported nothing.": "摄像机什么也没报告。",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "仅供参考。地址、Wi-Fi 凭据和端口要在摄像机自己的网页界面里更改 — 在这里改错会让摄像机彻底失联。",
    "Hardware, with frame copy (recommended)": "硬件，带帧拷贝（推荐）",
    "Hardware, zero copy (fastest)": "硬件，零拷贝（最快）",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "三者在可行处都会用显卡解码。\n\n「带帧拷贝」把每一帧经由主内存传递。它慢上几个百分点，却是默认值，因为当视频嵌在另一个窗口里时，零拷贝路径在若干驱动上会产生绿块或画面定格。\n\n若想要最后那几个百分点，可以试试「零拷贝」；画面出问题就退回来。",
    "This camera does not offer these settings.": "这台摄像机没有这些设置。",
    "Exposure and orientation": "曝光与方向",
    "Day / night": "白天 / 夜间",
    "Automatic": "自动",
    "Always colour": "始终彩色",
    "Always black and white": "始终黑白",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "「自动」会随着光线变暗切到红外。夜里强行彩色会得到暗到没法用的画面；白天强行黑白则白白丢掉颜色。",
    "Anti-flicker": "抗闪烁",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "请与您的市电频率一致 — 欧洲为 50 Hz — 否则室内灯光会与快门拍频，画面会一跳一跳。",
    "Exposure": "曝光",
    "Mirror": "镜像",
    "Flip": "翻转",
    "For a camera mounted upside down.": "适用于倒装的摄像机。",
    "Backlight compensation": "背光补偿",
    "Helps when the subject stands against a bright window or sky.":
        "当被摄对象背对明亮的窗户或天空时有用。",
    "Noise reduction": "降噪",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "让暗处画面更干净，代价是运动的物体会拖影。",
    "Rotation": "旋转",
    "Dynamic contrast": "动态对比度",
    "Infrared illumination": "红外补光",
    "Infrared lamps": "红外灯",
    "Always on": "始终开启",
    "Always off": "始终关闭",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "「自动」会在天黑时点亮。如果摄像机隔着玻璃拍摄，请关掉 — 反光会让它什么也看不见。",
    "Overlay": "叠加",
    "On-screen text": "画面上的文字",
    "Background": "背景",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "在文字后面画一个方框，让它在明亮场景下仍然清晰。",
    "Watermark": "水印",
    "Embeds a mark in the recording itself.": "把标记嵌进录像本身。",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "摄像机会把它烧进画面，因此它出现在每一段录像和每一个客户端里 — 不只是这里。",
    "Motion detection in the camera": "摄像机内的移动侦测",
    "Switched on": "已开启",
    "Higher notices more, including shadows and headlights.":
        "越高察觉得越多，连阴影和车灯也算。",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "这是摄像机自己的侦测，也就是它通过 ONVIF 上报的那一种。leolink 自行分析画面是另行设置的，在「摄像机 → 事件」下。",
    "Recording": "录像",
    "Recording to the camera's card": "录到摄像机的存储卡",
    "Overwrite when full": "写满后覆盖",
    "Off means recording simply stops once the card fills up.":
        "关闭意味着存储卡写满后录制就直接停止。",
    "Record before the event": "事件前预录",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "保留触发之前的那几秒，通常那才是有意思的部分。",
    "File length": "单个文件长度",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "这些决定摄像机往自己存储卡上写什么。录到本机是在「摄像机 → 事件」下设置的，无需存储卡。",
    "Alerts": "告警",
    "E-mail": "电子邮件",
    "FTP": "FTP",
    "FTP upload": "FTP 上传",
    "Push notification": "推送通知",
    "Server": "服务器",
    "Port": "端口",
    "Send to": "发送至",
    "Encrypted": "加密",
    "Not more often than": "最短间隔",
    "Attach": "附带",
    "Directory": "目录",
    "Mode": "模式",
    "Schedule": "时段",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "由摄像机自己发送，因此这台电脑关机时它们照常工作。leolink 自己的反应 — 命令、Webhook、MQTT — 在「摄像机 → "
        "事件」下。",
    "Time": "时间",
    "Time server": "时间服务器",
    "Synchronise the clock": "同步时钟",
    "Every": "每隔",
    "Scheduled restart": "定时重启",
    "Restart regularly": "定期重启",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "有些摄像机连续运行数周后会变得不稳定；每周重启一次是一剂便宜的良方。",
    "Day": "星期",
    "Hour": "小时",
    "Minute": "分钟",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "时钟不准的摄像机会给录像打上错误的时间，等到要找某一段时，这比听上去要紧得多。",
    "Wi-Fi": "Wi-Fi",
    "Scan": "扫描",
    "Join network": "加入网络",
    "scanning…": "正在扫描…",
    "The camera is scanning for networks…": "摄像机正在扫描网络…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "扫描的是摄像机而不是这台电脑 — 重要的是它能够到什么。密码会在保存前先试一次，因此打错字会被拒绝，而不会让摄像机落得连不上任何网络。",
    "Change the camera's network": "更改摄像机的网络",
    "<b>Move %1 to “%2”?</b>": "<b>要把 %1 迁到「%2」吗？</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "摄像机会先测试密码，错了就拒绝，所以这比听上去安全。\n\n即便如此，它在重连期间仍会消失约一分钟；如果新网络给它分配了不同的地址，之后您得在这里更新。",
    "Join": "加入",
    "Testing the password on the camera…": "正在摄像机上测试密码…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "已保存。摄像机正在重连，很快就会回来。",
    "The camera could not join that network: %1": "摄像机无法加入该网络：%1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "地址和端口在这里只是读取，更改要在摄像机自己的网页界面里做。填错一个就会让摄像机彻底脱离网络，唯一的退路是复位针 — "
        "在那种事情上，一个警告对话框顶不上厂商自己的界面。",
    "%1 fps": "%1 fps",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)": "码流丢失 — 正在重连（%1）",
    "Hardware (recommended)": "硬件（推荐）",
    "Hardware, driver's choice": "硬件，由驱动决定",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "「推荐」明确指定解码器，让解码和绘制留在同一套图形接口上。放任不管时，mpv "
        "可能用一套接口解码、另一套绘制，在某些显卡上会把画面变成一片纯绿。\n\n如果画面损坏，请逐个试试其余选项。「仅软件」总能工作，但在完整分辨率下要吃掉一整个处理器核心。",
    "Wired": "有线",
    "%1 — strength unknown": "%1 — 强度未知",
    "%1 — %2 of %3": "%1 — %3 格中的 %2 格",
    "WEAK SIGNAL": "信号弱",
    "BAD STREAM": "码流异常",
    "stream ended (%1) — reconnecting": "码流已结束（%1）— 正在重连",
    "Open the &log file": "打开日志文件(&L)",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "播放器和摄像机报告的内容。值得附在故障报告里。",
    "Nothing logged yet.": "尚未记录任何内容。",
    "Bit rate looks too low": "码率似乎过低",
    "<b>%1 kbit/s is very little for %2.</b>": "<b>对 %2 来说，%1 kbit/s 太少了。</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "在这个比例下，摄像机的编码器容易输出损坏的帧，表现为绿块或画面定格 — 这既不是网络故障，也不是 leolink "
        "能够完全修复的问题。\n\n要么提高码率，要么降低分辨率。",
    "Apply anyway": "仍然应用",
    "camera is reconfiguring…": "摄像机正在重新配置…",
    "Send a test e-mail": "发送测试邮件",
    "Test the FTP upload": "测试 FTP 上传",
    "Asking the camera to send a test e-mail…": "正在请求摄像机发送测试邮件…",
    "Asking the camera to try the FTP server…": "正在请求摄像机试连 FTP 服务器…",
    "%1: the camera reported success.": "%1：摄像机报告成功。",
    "Condition": "状况",
    "Processor load %1%": "处理器负载 %1%",
    "Encoder load %1%": "编码器负载 %1%",
    "Network throughput %1 kbit/s": "网络吞吐 %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "摄像机已到极限。降低分辨率或帧率会让它稳下来。",
    "Firmware": "固件",
    "Not checked.": "尚未检查。",
    "Check for updates": "检查更新",
    "Asking Reolink…": "正在询问 Reolink…",
    "Install update": "安装更新",
    "Update available: %1": "有可用更新：%1",
    "The firmware is up to date.": "固件已是最新。",
    "Install firmware": "安装固件",
    "<b>Update the firmware on %1?</b>": "<b>要更新 %1 的固件吗？</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "摄像机会自行下载更新并重启。它将有数分钟无法连接。\n\n更新期间切勿断电 — 刷写中途被打断的摄像机通常只能寄回维修。",
    "Install": "安装",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "正在升级。摄像机会自行重启，并有数分钟无法连接。切勿断电。",
    "Storage": "存储",
    "Format the SD card": "格式化存储卡",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "格式化会抹掉卡上的每一段录像。无法撤销，之后摄像机也不会再确认。",
    "<b>Erase everything on the card in %1?</b>": "<b>要抹掉 %1 存储卡上的一切吗？</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "卡上的每一段录像都会被删除。这无法撤销，尚未下载的内容也无从找回。",
    "Erase": "抹掉",
    "Formatting…": "正在格式化…",
    "The card has been formatted.": "存储卡已格式化。",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "这里不提供恢复出厂设置。它连网络设置一并清除，而一台忘掉 Wi-Fi 的摄像机只能取下来手动复位。",
    "Users": "用户",
    "Rights": "权限",
    "Administrator": "管理员",
    "Viewer": "访客",
    "Add…": "添加…",
    "Change password…": "修改密码…",
    "Delete": "删除",
    "New user": "新用户",
    "User name": "用户名",
    "Password for %1": "%1 的密码",
    "Creating %1…": "正在创建 %1…",
    "Change password": "修改密码",
    "New password for %1": "%1 的新密码",
    "Changing the password for %1…": "正在修改 %1 的密码…",
    "This is the account leolink uses": "这就是 leolink 使用的账号",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "在这里改掉，leolink 就会被挡在门外，直到新密码也在「摄像机」下填好为止。",
    "Cannot delete this account": "无法删除此账号",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink 正以「%1」登录。删除它会立刻切断与这台摄像机的连接。",
    "Delete user": "删除用户",
    "Delete “%1” from the camera?": "要把「%1」从摄像机上删除吗？",
    "Deleting %1…": "正在删除 %1…",
    "Done.": "完成。",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "这些是摄像机上的账号，不是 leolink 里的。访客账号能看却什么都改不了 — "
        "凡是只需看画面的场合都值得用它，这样保存下来的密码就无法反过来改动摄像机的设置。",
    "camera is reconfiguring… %1 s": "摄像机正在重新配置… %1 秒",
    "File format not recognised.": "无法识别的文件格式。",
    "Invalid input.": "输入无效。",
    "No free connections — the camera allows only a few sessions at a time.":
        "没有空闲连接 — 摄像机一次只允许少数几个会话。",
    "Session expired.": "会话已过期。",
    "Wrong user name or password.": "用户名或密码不正确。",
    "Timed out.": "已超时。",
    "This firmware does not support that command.": "此固件不支持该命令。",
    "Could not read the configuration.": "无法读取配置。",
    "Could not verify the configuration.": "无法验证配置。",
    "Subsystem unavailable — typically no SD card fitted.":
        "子系统不可用 — 通常是因为没装存储卡。",
    "Not permitted — this model lacks the hardware.": "不允许 — 此型号没有相应硬件。",
    "Account invalid, log in again.": "账号无效，请重新登录。",
    "User name already taken.": "该用户名已被占用。",
    "Maximum number of users reached.": "已达到用户数量上限。",
    "Camera busy, try again shortly.": "摄像机忙，请稍后再试。",
    "IP address conflict.": "IP 地址冲突。",
    "Configuration test failed.": "配置测试失败。",
    "FTP login failed.": "FTP 登录失败。",
    "FTP could not create the directory.": "FTP 无法创建目录。",
    "FTP upload failed.": "FTP 上传失败。",
    "FTP could not reach the server.": "FTP 无法连上服务器。",
    "Camera reported error %1.": "摄像机报告错误 %1。",
    "Cannot reach %1: %2": "无法连上 %1：%2",
    "Unexpected reply from %1.": "来自 %1 的意外应答。",
    "Login returned no token.": "登录没有返回令牌。",
    "Snapshot failed.": "抓拍失败。",
    "ONVIF subscription failed.": "ONVIF 订阅失败。",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n 摄像机名称 · %h 地址 · %t 时间 · %e 事件 · %s 开/关 · %f 录像 · %p 图像",
    "Run a command": "运行一条命令",
    "Call a webhook": "调用一个 Webhook",
    "Left empty, leolink sends a small JSON document describing the event.":
        "留空时，leolink 会发送一份描述该事件的小型 JSON 文档。",
    "Method": "方法",
    "Body": "正文",
    "Publish an MQTT message": "发布一条 MQTT 消息",
    "Left empty: the same JSON document as the webhook.":
        "留空：与 Webhook 相同的那份 JSON 文档。",
    "Keep the last message on the broker": "在代理上保留最后一条消息",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "稍后连接的客户端会立刻得知当前状态，而不必等下一次事件。智能家居通常就要这个。",
    "Broker": "代理",
    "Topic": "主题",
    "Payload": "负载",
    "MQTT": "MQTT",
    "In leolink": "在 leolink 中",
    "In the camera": "在摄像机中",
    "Try again": "重试",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>由摄像机上报：</b>由摄像机自己的侦测器判断，并发出 ONVIF "
        "事件。它看哪里、多容易触发，在下方的「侦测」中设置——那是摄像机自身的设置。<br><br><b>由 leolink "
        "观察画面：</b>本机再开一条到子码流的连接来分析画面。任何摄像机都适用，包括什么都不上报的；此时摄像机自己的侦测器不起作用。",
    "Choose what is watched…": "选择监看范围…",
    "How leolink learns of motion": "leolink 如何得知移动",
    "When leolink watches the picture": "当 leolink 观察画面时",
    "Detection by leolink": "由 leolink 侦测",
    "Recording on this computer": "录到本机",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "文件存到哪里对所有摄像机都一样，在「设置 ▸ 录像」中指定。",
    "Follow the defaults under Settings": "沿用「设置」中的默认",
    "Use this camera's own": "使用这台摄像机自己的",
    "Reactions": "响应",
    "What happens on an event": "发生事件时做什么",
    "Muted": "静音",
    "Sound in leolink": "leolink 中的声音",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "同样这两项也在摄像机自己的画面块上，那里更好按。摄像机默认静音：打开一整墙摄像机，不该让每一台的声音同时灌满房间。",
    "Playback": "播放",
    "&Settings…": "设置(&S)…",
    "Reactions": "响应",
    "Recordings": "录像",
    "General": "常规",
    "Tint the tile red for a moment": "让画面块短暂泛红",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "这样扫一眼整墙摄像机，就知道是哪一台。",
    " ms": " 毫秒",
    "Play a sound": "播放提示音",
    "Empty: the desktop's own notification sound": "留空：使用桌面自带的通知音",
    "Sound to play": "要播放的声音",
    "For": "持续",
    "Sound file": "声音文件",
    "On the screen": "屏幕上",
    "The window": "窗口",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "哪些摄像机会产生事件、以何种方式产生，在「摄像机 ▸ 设置 ▸ 由 leolink 侦测」中逐台指定。",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "当某台摄像机上报时 leolink "
        "会做什么。除非某台摄像机自己的对话框另有说明，否则它就照这里来——要么全用，要么全不用，绝不用一半：部分继承的设置，在出问题却没触发时最难理清。",
    "Recordings and stills": "录像与抓拍",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "录像以 Matroska "
        "写出且不重新编码：画面保持摄像机的原始质量，处理器几乎不干活。\n\n某台摄像机是否录像，是它自己的设置，在「摄像机 ▸ 设置 ▸ "
        "响应」中。",
    "Settings for this camera…": "这台摄像机的设置…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "leolink 侧的侦测、响应与录像，以及摄像机自身的编码器、画面和时段。",

    # ── the settings, split by reach ──
    "nothing": "不含",
    "The seconds leading up to the trigger — usually the part that shows how "
    "someone got there. The past cannot be recorded after the fact, so "
    "anything above zero keeps the stream running into a buffer: one more "
    "connection to the camera, and a little disk.":
        "触发前的那几秒——通常正是能看出人是怎么过来的那一段。过去的画面无法事后补录，所以只要大于零，就会把码流持续写进缓冲：多一条到摄像机的连接，以及一点磁盘。",
    "So an event does not stop mid-scene. Motion that resumes within this time "
    "continues the same file instead of starting a second.":
        "免得事件在场景中途就断了。在这段时间内重新出现的移动会接着写同一个文件，而不是另起一个。",
    "Include before": "往前多录",
    "When something happens": "发生事情时",
    "Record without stopping": "不间断录制",
    " h": " 小时",
    "How far back the archive reaches. Once it is this old, a file is deleted "
    "to make room for the newest one.":
        "存档能往回追多久。文件到了这个年纪就会被删掉，给最新的腾地方。",
    " min": " 分钟",
    "The archive is a run of files, not one — a file cannot be trimmed at the "
    "front, so keeping a day in one of them would mean rewriting it every "
    "minute. Shorter files find a moment more precisely; longer ones are fewer "
    "to scroll past.":
        "存档是一串文件，不是一个——文件没法从头上剪掉，把一整天塞进一个文件就意味着每分钟重写一遍。文件短，定位某一刻更准；文件长，翻起来更少。",
    "Keep the last": "保留最近",
    "One file per": "每个文件",
    "Round the clock": "全天候",
    "With both switched on, one buffer serves both: the recording of an event "
    "is cut out of the archive, so nothing extra is opened to the "
    "camera.\n\nWhere the files go is the same for every camera and is set "
    "under Settings ▸ Recordings.":
        "两个都打开时，一个缓冲兼顾两者：事件录像直接从存档里剪出来，因此不会再向摄像机多开一条连接。\n\n文件存到哪里对所有摄像机都一样，在「设置 "
        "▸ 录像」中指定。",
    "%1 hours of video. How much disk that is depends on the bit rate, which "
    "this camera has not reported yet.":
        "%1 小时的视频。占多少磁盘取决于码率，而这台摄像机还没有报告过。",
    "About %1 GB at the %2 kbit/s this stream is set to. Make sure the "
    "recordings folder has that much to spare.":
        "按这条码流设定的 %2 kbit/s 计算，大约 %1 GB。请确认录像文件夹有这么多空间。",
    "ffmpeg is not installed, so continuous recording is unavailable.":
        "未安装 ffmpeg，因此无法不间断录制。",
    "Nothing had been buffered yet.": "缓冲里还什么都没有。",
    "That moment is no longer in the buffer.": "那一刻已经不在缓冲里了。",
    "The recording could not be cut out of the buffer.": "无法从缓冲中剪出这段录像。",
}


# Plural forms — one form: this language does not inflect for number.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        "，%n 个接入点"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "从 %n 个接入点听到 — 一张网络，多个节点。显示的是最强的那个。"],
    "%n network(s) found, strongest first.": [
        "找到 %n 个网络，最强的在前。"],
    "Asking about %n command(s)…": [
        "正在询问 %n 条命令…"],
    "%n area(s) blanked": [
        "已遮黑 %n 个区域"],
    "%n area(s), switched off": [
        "%n 个区域，已关闭"],
    "%n hour(s) a week.": [
        "每周 %n 小时。"],
    "%n camera(s) live": [
        "%n 台摄像机在线"],
    "Saved %n snapshot(s)": [
        "已保存 %n 张快照"],
    "Found %n device(s)…": [
        "已找到 %n 台设备…"],
    "%n recording(s) found.": [
        "找到 %n 段录像。"],
    "%n network(s) found.": [
        "找到 %n 个网络。"],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "最近十秒内有 %n 帧损坏。\n\n通常是 Wi-Fi 信号弱，或者码率相对分辨率设得太低。leolink 能修的都修了 — "
        "这些是修不了的。"],
}
