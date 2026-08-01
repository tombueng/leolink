<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN" sourcelanguage="en">
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n 摄像机名称 · %h 地址 · %t 时间 · %e 事件 · %s 开/关 · %f 录像 · %p 图像</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>运行一条命令</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="41"/>
        <location filename="../src/ActionEditor.cpp" line="44"/>
        <source>Command</source>
        <translation>命令</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="50"/>
        <source>Call a webhook</source>
        <translation>调用一个 Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>留空时，leolink 会发送一份描述该事件的小型 JSON 文档。</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>方法</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>正文</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>发布一条 MQTT 消息</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>留空：与 Webhook 相同的那份 JSON 文档。</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>在代理上保留最后一条消息</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>稍后连接的客户端会立刻得知当前状态，而不必等下一次事件。智能家居通常就要这个。</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>代理</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>主题</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>负载</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="119"/>
        <source>MQTT</source>
        <translation>MQTT</translation>
    </message>
</context>
<context>
    <name>leolink::AudioDetector</name>
    <message>
        <location filename="../src/AudioDetector.cpp" line="57"/>
        <source>ffmpeg is not installed, so sound detection is unavailable.</source>
        <translation>未安装 ffmpeg，因此无法进行声音侦测。</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>%1 没有码流地址。</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="103"/>
        <source>Sound detection stopped: %1</source>
        <translation>声音侦测已停止：%1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="108"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>无法为声音侦测启动 ffmpeg。</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="52"/>
        <source>Cannot open a local port: %1</source>
        <translation>无法打开本地端口：%1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="64"/>
        <source>Baichuan login failed: %1</source>
        <translation>Baichuan 登录失败：%1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="72"/>
        <source>The camera refused to send video: %1</source>
        <translation>摄像机拒绝发送视频：%1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="80"/>
        <source>The player did not connect.</source>
        <translation>播放器未能连接。</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="132"/>
        <source>The camera stopped sending.</source>
        <translation>摄像机已停止发送。</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="77"/>
        <source>Camera</source>
        <translation>摄像机</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="125"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="133"/>
        <source>Reading settings from %1…</source>
        <translation>正在从 %1 读取设置…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="138"/>
        <source>Apply to camera</source>
        <translation>应用到摄像机</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="169"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>正在重启。摄像机约一分钟后回来。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="185"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>已保存。摄像机正在重连，很快就会回来。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="191"/>
        <source>%1: the camera reported success.</source>
        <translation>%1：摄像机报告成功。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="199"/>
        <source>Processor load %1 %</source>
        <translation>处理器负载 %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="204"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>编码器输出 %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="206"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>网络吞吐 %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="208"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>摄像机已到极限。降低分辨率或帧率会让它稳下来。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="865"/>
        <source>Administrator</source>
        <translation>管理员</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="229"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="865"/>
        <source>Viewer</source>
        <translation>访客</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="254"/>
        <source>Done.</source>
        <translation>完成。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="259"/>
        <source>The card has been formatted.</source>
        <translation>存储卡已格式化。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="676"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>越高画面越好，网络流量也越大。摄像机只会给出它确实撑得住的码率。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="680"/>
        <source>Resolution</source>
        <translation>分辨率</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="681"/>
        <source>Frame rate</source>
        <translation>帧率</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="682"/>
        <source>Bit rate (kbit/s)</source>
        <translation>码率（kbit/s）</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>H.264 profile</source>
        <translation>H.264 规格</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="691"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>这些改动的是摄像机本身，因此任何客户端都会看到结果。可选项来自摄像机，各型号不同。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="704"/>
        <source>Send sound</source>
        <translation>传输声音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="707"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>摄像机的麦克风。即使关掉，它仍会在流里放一条音轨 — 一条完全无声的音轨，这比根本没有音轨要难察觉得多。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="436"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="713"/>
        <source>Sound</source>
        <translation>声音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>在 leolink 中</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="112"/>
        <source>In the camera</source>
        <translation>在摄像机中</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="128"/>
        <source>Try again</source>
        <translation>重试</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="336"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>摄像机本身（ONVIF）</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="338"/>
        <source>leolink watches the picture</source>
        <translation>leolink 观察画面</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="340"/>
        <source>Either of the two</source>
        <translation>两者皆可</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="341"/>
        <source>Do not watch</source>
        <translation>不监看</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="350"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;由摄像机上报：&lt;/b&gt;由摄像机自己的侦测器判断，并发出 ONVIF 事件。它看哪里、多容易触发，在下方的「侦测」中设置——那是摄像机自身的设置。&lt;br&gt;&lt;br&gt;&lt;b&gt;由 leolink 观察画面：&lt;/b&gt;本机再开一条到子码流的连接来分析画面。任何摄像机都适用，包括什么都不上报的；此时摄像机自己的侦测器不起作用。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="361"/>
        <source>Choose what is watched…</source>
        <translation>选择监看范围…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="369"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>画面上的一处要变化多少才算数。越高察觉得越多，连阴影和雨水也算。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="374"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="377"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>受监看的面积要变化多少才算移动。20 ‰ 是画面的百分之二 — 大约相当于中距离上的一个人。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="382"/>
        <source>Motion comes from</source>
        <translation>移动由谁上报</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="385"/>
        <source>How leolink learns of motion</source>
        <translation>leolink 如何得知移动</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="391"/>
        <source>Minimum area</source>
        <translation>最小面积</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="393"/>
        <source>When leolink watches the picture</source>
        <translation>当 leolink 观察画面时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="404"/>
        <source>Raise an event on sound</source>
        <translation>声音触发事件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="407"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>需要带麦克风的摄像机。会再开一条到子码流的连接。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="412"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="415"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 dB 接近寂静，-20 dB 相当于近旁提高的说话声。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="419"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="463"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="474"/>
        <source> s</source>
        <translation> 秒</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="422"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>噪声停止后仍让事件保持一会儿，免得一声犬吠被报四次。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="433"/>
        <source>Sound above</source>
        <translation>声音高于</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="434"/>
        <source>Hold for</source>
        <translation>保持</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="447"/>
        <source>Detection by leolink</source>
        <translation>由 leolink 侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="455"/>
        <source>Record while motion lasts</source>
        <translation>移动期间持续录制</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="458"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>从实时码流录到本机，因此即使摄像机没装存储卡也能用。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="596"/>
        <source>Follow the defaults under Settings</source>
        <translation>沿用「设置」中的默认</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Use this camera&apos;s own</source>
        <translation>使用这台摄像机自己的</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="610"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="620"/>
        <source>Reactions</source>
        <translation>响应</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="612"/>
        <source>What happens on an event</source>
        <translation>发生事件时做什么</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="627"/>
        <source>Muted</source>
        <translation>静音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="642"/>
        <source>Volume</source>
        <translation>音量</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="644"/>
        <source>Sound in leolink</source>
        <translation>leolink 中的声音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="648"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>同样这两项也在摄像机自己的画面块上，那里更好按。摄像机默认静音：打开一整墙摄像机，不该让每一台的声音同时灌满房间。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="658"/>
        <source>Playback</source>
        <translation>播放</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="718"/>
        <source>Main stream</source>
        <translation>主码流</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="719"/>
        <source>Sub stream</source>
        <translation>子码流</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="724"/>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="738"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2246"/>
        <source>Brightness</source>
        <translation>亮度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <source>Contrast</source>
        <translation>对比度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="740"/>
        <source>Saturation</source>
        <translation>饱和度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="741"/>
        <source>Sharpness</source>
        <translation>锐度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="742"/>
        <source>Hue</source>
        <translation>色调</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>Picture</source>
        <translation>画面</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="754"/>
        <source>Exposure and orientation</source>
        <translation>曝光与方向</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Day / night</source>
        <translation>白天 / 夜间</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="757"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>「自动」会随着光线变暗切到红外。夜里强行彩色会得到暗到没法用的画面；白天强行黑白则白白丢掉颜色。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="762"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="792"/>
        <source>Automatic</source>
        <translation>自动</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="763"/>
        <source>Always colour</source>
        <translation>始终彩色</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="764"/>
        <source>Always black and white</source>
        <translation>始终黑白</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="765"/>
        <source>Anti-flicker</source>
        <translation>抗闪烁</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="766"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>请与您的市电频率一致 — 欧洲为 50 Hz — 否则室内灯光会与快门拍频，画面会一跳一跳。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="770"/>
        <source>Exposure</source>
        <translation>曝光</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>Mirror</source>
        <translation>镜像</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="772"/>
        <source>Flip</source>
        <translation>翻转</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="773"/>
        <source>For a camera mounted upside down.</source>
        <translation>适用于倒装的摄像机。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="774"/>
        <source>Backlight compensation</source>
        <translation>背光补偿</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="775"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>当被摄对象背对明亮的窗户或天空时有用。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="777"/>
        <source>Noise reduction</source>
        <translation>降噪</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="778"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>让暗处画面更干净，代价是运动的物体会拖影。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>Rotation</source>
        <translation>旋转</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="781"/>
        <source>Dynamic contrast</source>
        <translation>动态对比度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="785"/>
        <source>Infrared illumination</source>
        <translation>红外补光</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="787"/>
        <source>Infrared lamps</source>
        <translation>红外灯</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="788"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>「自动」会在天黑时点亮。如果摄像机隔着玻璃拍摄，请关掉 — 反光会让它什么也看不见。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="793"/>
        <source>Always on</source>
        <translation>始终开启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="794"/>
        <source>Always off</source>
        <translation>始终关闭</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="808"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1909"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2188"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2216"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2253"/>
        <source>User</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="808"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>Rights</source>
        <translation>权限</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="815"/>
        <source>Add…</source>
        <translation>添加…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="816"/>
        <source>Change password…</source>
        <translation>修改密码…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="817"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="831"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>这些是摄像机上的账号，不是 leolink 里的。访客账号能看却什么都改不了 — 凡是只需看画面的场合都值得用它，这样保存下来的密码就无法反过来改动摄像机的设置。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="848"/>
        <source>Users</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="855"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="860"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>New user</source>
        <translation>新用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="855"/>
        <source>User name</source>
        <translation>用户名</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="860"/>
        <source>Password for %1</source>
        <translation>%1 的密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="872"/>
        <source>Creating %1…</source>
        <translation>正在创建 %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="887"/>
        <source>Change password</source>
        <translation>修改密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="887"/>
        <source>New password for %1</source>
        <translation>%1 的新密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="896"/>
        <source>This is the account leolink uses</source>
        <translation>这就是 leolink 使用的账号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="897"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>在这里改掉，leolink 就会被挡在门外，直到新密码也在「摄像机」下填好为止。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="901"/>
        <source>Changing the password for %1…</source>
        <translation>正在修改 %1 的密码…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="914"/>
        <source>Cannot delete this account</source>
        <translation>无法删除此账号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="915"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink 正以「%1」登录。删除它会立刻切断与这台摄像机的连接。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="920"/>
        <source>Delete user</source>
        <translation>删除用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="921"/>
        <source>Delete “%1” from the camera?</source>
        <translation>要把「%1」从摄像机上删除吗？</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="925"/>
        <source>Deleting %1…</source>
        <translation>正在删除 %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="932"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1340"/>
        <source>Format the SD card</source>
        <translation>格式化存储卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="934"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要抹掉 %1 存储卡上的一切吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="937"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>卡上的每一段录像都会被删除。这无法撤销，尚未下载的内容也无从找回。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="940"/>
        <source>Erase</source>
        <translation>抹掉</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="947"/>
        <source>Formatting…</source>
        <translation>正在格式化…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="957"/>
        <source>Wi-Fi signal</source>
        <translation>Wi-Fi 信号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="961"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1285"/>
        <source>Reading…</source>
        <translation>正在读取…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="965"/>
        <source>Connection</source>
        <translation>连接</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="978"/>
        <source>Scan</source>
        <translation>扫描</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="982"/>
        <source>Join network</source>
        <translation>加入网络</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="996"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1030"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1919"/>
        <source>Network</source>
        <translation>网络</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="998"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1910"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2217"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2254"/>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1001"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1007"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>扫描的是摄像机而不是这台电脑 — 重要的是它能够到什么。密码会在保存前先试一次，因此打错字会被拒绝，而不会让摄像机落得连不上任何网络。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1015"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>地址和端口在这里只是读取，更改要在摄像机自己的网页界面里做。填错一个就会让摄像机彻底脱离网络，唯一的退路是复位针 — 在那种事情上，一个警告对话框顶不上厂商自己的界面。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1060"/>
        <source>strong</source>
        <translation>强</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1061"/>
        <source>good</source>
        <translation>良好</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>fair</source>
        <translation>一般</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1063"/>
        <source>weak</source>
        <translation>弱</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1118"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1123"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>，%n 个接入点</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1128"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>摄像机所听到的信号：4 格中的 %1 格</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1130"/>
        <source>Encryption: %1</source>
        <translation>加密：%1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1132"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>从 %n 个接入点听到 — 一张网络，多个节点。显示的是最强的那个。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1146"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>有些名称是从多个接入点听到的 — 那是一张 Mesh 网。摄像机连接的是这个名称，而不是某个具体节点；由 Mesh 决定它与哪个节点通信，并在需要时切换。要找到最佳位置，请移动摄像机并观察上方的「Wi-Fi 信号」：那才是它实际的连接。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1156"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>找到 %n 个网络，最强的在前。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1164"/>
        <source>scanning…</source>
        <translation>正在扫描…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1167"/>
        <source>The camera is scanning for networks…</source>
        <translation>摄像机正在扫描网络…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1178"/>
        <source>Change the camera&apos;s network</source>
        <translation>更改摄像机的网络</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1180"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要把 %1 迁到「%2」吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1182"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>摄像机会先测试密码，错了就拒绝，所以这比听上去安全。

即便如此，它在重连期间仍会消失约一分钟；如果新网络给它分配了不同的地址，之后您得在这里更新。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1188"/>
        <source>Join</source>
        <translation>加入</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>Testing the password on the camera…</source>
        <translation>正在摄像机上测试密码…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1214"/>
        <source>Link</source>
        <translation>链路</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1215"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1216"/>
        <source>Netmask</source>
        <translation>子网掩码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1217"/>
        <source>Gateway</source>
        <translation>网关</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1218"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1219"/>
        <source>DNS</source>
        <translation>DNS</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1220"/>
        <source>Network name</source>
        <translation>网络名称</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1241"/>
        <source>Ports</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1243"/>
        <source>The camera reported nothing.</source>
        <translation>摄像机什么也没报告。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1251"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1471"/>
        <source>Restart the camera</source>
        <translation>重启摄像机</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1257"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>摄像机会离线一分钟左右，然后自行回来。存储卡上的录像不受影响，设置也会保留。

当摄像机不再应答、拒绝新连接，或固件升级后行为异常时，值得一试。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1265"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1478"/>
        <source>Restart</source>
        <translation>重启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1276"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>这里不提供恢复出厂设置。它连网络设置一并清除，而一台忘掉 Wi-Fi 的摄像机只能取下来用网线连接 — 如果您确实要这么做，请使用摄像机自己的网页界面。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1287"/>
        <source>Condition</source>
        <translation>状况</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1292"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1360"/>
        <source>Not checked.</source>
        <translation>尚未检查。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1295"/>
        <source>Check for updates</source>
        <translation>检查更新</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1297"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>向 Reolink 询问的是摄像机，而不是这台电脑 — 因此它需要自己的一条互联网出路。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1301"/>
        <source>Asking Reolink…</source>
        <translation>正在询问 Reolink…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1306"/>
        <source>Install update</source>
        <translation>安装更新</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1310"/>
        <source>Install firmware</source>
        <translation>安装固件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1312"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要更新 %1 的固件吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>摄像机会自行下载更新并重启。它将有数分钟无法连接。

更新期间切勿断电 — 刷写中途被打断的摄像机通常只能寄回维修。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1319"/>
        <source>Install</source>
        <translation>安装</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1334"/>
        <source>Firmware</source>
        <translation>固件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1344"/>
        <source>Storage</source>
        <translation>存储</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1347"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>格式化会抹掉卡上的每一段录像。无法撤销，之后摄像机也不会再确认。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1364"/>
        <source>Ask the camera</source>
        <translation>询问摄像机</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1368"/>
        <source>Copy the list</source>
        <translation>复制清单</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>Copied.</source>
        <translation>已复制。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1379"/>
        <source>What this camera supports</source>
        <translation>这台摄像机支持什么</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1382"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>Reolink 的固件在不同型号之间差异极大，想可靠地知道一台摄像机能做什么，唯一的办法就是问它。如果您的摄像机明显具备某项功能而 leolink 却没有，把这份清单放进故障报告，正是让它得以补上的关键。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1399"/>
        <source>Maintenance</source>
        <translation>维护</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1430"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>正在询问 %n 条命令…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1447"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>支持（%1）：
%2

不支持（%3）：
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要重启 %1 吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1475"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>画面会消失约一分钟。此刻正在录制的内容将会停止。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1487"/>
        <source>Asking %1 to restart…</source>
        <translation>正在请求 %1 重启…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1565"/>
        <source>On-screen text</source>
        <translation>画面上的文字</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1567"/>
        <source>Background</source>
        <translation>背景</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1568"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>在文字后面画一个方框，让它在明亮场景下仍然清晰。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1570"/>
        <source>Watermark</source>
        <translation>水印</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1571"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>把标记嵌进录像本身。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1575"/>
        <source>Privacy areas…</source>
        <translation>隐私区域…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1578"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>在任何画面离开摄像机之前，由它遮黑的部分。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1589"/>
        <source>Privacy</source>
        <translation>隐私</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1593"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>在摄像机内部就被遮黑，因此被遮住的部分在任何查看端和任何录像里都不存在 — 邻居的窗户，或者不该入镜的一张办公桌。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1600"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>摄像机会把它烧进画面，因此它出现在每一段录像和每一个客户端里 — 不只是这里。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1608"/>
        <source>Overlay</source>
        <translation>叠加</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1617"/>
        <source>Motion detection in the camera</source>
        <translation>摄像机内的移动侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="390"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1619"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>Sensitivity</source>
        <translation>灵敏度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="464"/>
        <source>nothing</source>
        <translation>不含</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="467"/>
        <source>The seconds leading up to the trigger — usually the part that shows how someone got there. The past cannot be recorded after the fact, so anything above zero keeps the stream running into a buffer: one more connection to the camera, and a little disk.</source>
        <translation>触发前的那几秒——通常正是能看出人是怎么过来的那一段。过去的画面无法事后补录，所以只要大于零，就会把码流持续写进缓冲：多一条到摄像机的连接，以及一点磁盘。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="477"/>
        <source>So an event does not stop mid-scene. Motion that resumes within this time continues the same file instead of starting a second.</source>
        <translation>免得事件在场景中途就断了。在这段时间内重新出现的移动会接着写同一个文件，而不是另起一个。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="489"/>
        <source>Include before</source>
        <translation>往前多录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="492"/>
        <source>When something happens</source>
        <translation>发生事情时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="496"/>
        <source>Record without stopping</source>
        <translation>不间断录制</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="501"/>
        <source> h</source>
        <translation> 小时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="504"/>
        <source>How far back the archive reaches. Once it is this old, a file is deleted to make room for the newest one.</source>
        <translation>存档能往回追多久。文件到了这个年纪就会被删掉，给最新的腾地方。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="509"/>
        <source> min</source>
        <translation> 分钟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="512"/>
        <source>The archive is a run of files, not one — a file cannot be trimmed at the front, so keeping a day in one of them would mean rewriting it every minute. Shorter files find a moment more precisely; longer ones are fewer to scroll past.</source>
        <translation>存档是一串文件，不是一个——文件没法从头上剪掉，把一整天塞进一个文件就意味着每分钟重写一遍。文件短，定位某一刻更准；文件长，翻起来更少。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="533"/>
        <source>Keep the last</source>
        <translation>保留最近</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="534"/>
        <source>One file per</source>
        <translation>每个文件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="537"/>
        <source>Round the clock</source>
        <translation>全天候</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="541"/>
        <source>With both switched on, one buffer serves both: the recording of an event is cut out of the archive, so nothing extra is opened to the camera.

Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>两个都打开时，一个缓冲兼顾两者：事件录像直接从存档里剪出来，因此不会再向摄像机多开一条连接。

文件存到哪里对所有摄像机都一样，在「设置 ▸ 录像」中指定。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="577"/>
        <source>%1 hours of video. How much disk that is depends on the bit rate, which this camera has not reported yet.</source>
        <translation>%1 小时的视频。占多少磁盘取决于码率，而这台摄像机还没有报告过。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="585"/>
        <source>About %1 GB at the %2 kbit/s this stream is set to. Make sure the recordings folder has that much to spare.</source>
        <translation>按这条码流设定的 %2 kbit/s 计算，大约 %1 GB。请确认录像文件夹有这么多空间。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1620"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>越高察觉得越多，连阴影和车灯也算。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1622"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1931"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2203"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2209"/>
        <source>Switched on</source>
        <translation>已开启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1628"/>
        <source>Choose the area…</source>
        <translation>选择区域…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1630"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>摄像机监看画面的哪些部分。区域之外的一切都被忽略 — 画面边缘的一条路、风中的一棵树、邻居家的门。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1636"/>
        <source>Where it looks</source>
        <translation>它看向哪里</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1640"/>
        <source>Choose the hours…</source>
        <translation>选择时段…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1645"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>一周的时段：勾选的时段里摄像机会上报移动，其余时段保持沉默。这与它有多灵敏无关 — 灵敏度在下面设置。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1652"/>
        <source>When it reports at all</source>
        <translation>它何时才上报</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>From</source>
        <translation>从</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>To</source>
        <translation>至</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1671"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>在一天之内，摄像机可以更容易或更不容易被触发。夜里车灯不再触发一切，白天也不至于视而不见。分几段由摄像机决定；每段的时间和灵敏度归您。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1679"/>
        <source>How readily it triggers</source>
        <translation>它多容易被触发</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1687"/>
        <source>What it recognises</source>
        <translation>它能识别什么</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1689"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>People</source>
        <translation>人</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1690"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1823"/>
        <source>Vehicles</source>
        <translation>车辆</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1691"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1824"/>
        <source>Animals</source>
        <translation>动物</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1825"/>
        <source>Faces</source>
        <translation>人脸</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1695"/>
        <source>Camera-side detection</source>
        <translation>摄像机侧侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1704"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>这是摄像机自己的侦测，也就是它通过 ONVIF 上报的那一种。leolink 自行分析画面是另行设置的，在「摄像机 → 事件」下。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1713"/>
        <source>Detection</source>
        <translation>侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1790"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — 摄像机的侦测区域</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1791"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>在画面上拖动，选择摄像机监看的范围。变暗的区域会被忽略。这是摄像机自己的网格，%1 × %2，因此比 leolink 的更细。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1808"/>
        <source>%1 — when to watch</source>
        <translation>%1 — 何时监看</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1809"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>摄像机上报移动事件的时段。在此之外它照样看得见，只是不吭声。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1820"/>
        <source>Any movement</source>
        <translation>任何移动</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1821"/>
        <source>Continuous</source>
        <translation>持续</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1853"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>这台摄像机为每类事件单独保存一周的时段表。要哪一个？</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1901"/>
        <source>SIM card</source>
        <translation>SIM 卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1903"/>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1904"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>只有卡要求时才需要。连错三次会锁卡，届时需要只有运营商才有的 PUK。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1908"/>
        <source>Access point (APN)</source>
        <translation>接入点（APN）</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1911"/>
        <source>Authentication</source>
        <translation>身份验证</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1912"/>
        <source>Use mobile data</source>
        <translation>使用移动数据</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1916"/>
        <source>Modem</source>
        <translation>调制解调器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1918"/>
        <source>Card</source>
        <translation>卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1920"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1921"/>
        <source>Signal</source>
        <translation>信号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1922"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1923"/>
        <source>Card number</source>
        <translation>卡号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1927"/>
        <source>Mobile connection</source>
        <translation>移动连接</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1929"/>
        <source>Data used</source>
        <translation>已用流量</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1930"/>
        <source>Monthly limit</source>
        <translation>每月上限</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1938"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;未在真实硬件上验证。&lt;/b&gt;参与 leolink 的人没有一台带调制解调器的摄像机，这部分仅凭协议写成。它不会弄坏任何东西 — 摄像机不认识的命令只会被拒绝 — 但同样可能什么都显示不出来。

如果您的摄像机有 SIM 卡，「维护」下的「这台摄像机支持什么」会列出它的固件实际拥有的命令。把那份清单放进故障报告，正是把这部分做好的前提。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1951"/>
        <source>Mobile data</source>
        <translation>移动数据</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1968"/>
        <source>nothing blanked</source>
        <translation>未遮黑任何区域</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1970"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>已遮黑 %n 个区域</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1972"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n 个区域，已关闭</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2054"/>
        <source>%1 — when to record</source>
        <translation>%1 — 何时录像</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2055"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>摄像机录到自己存储卡上的时段。这需要装好存储卡；录到本机是在「摄像机 → 事件」下设置的，无需存储卡。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2133"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2143"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>录到摄像机的存储卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2145"/>
        <source>Overwrite when full</source>
        <translation>写满后覆盖</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2136"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2148"/>
        <source>Record before the event</source>
        <translation>事件前预录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="490"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2151"/>
        <source>Keep recording after</source>
        <translation>移动结束后继续录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2152"/>
        <source>File length</source>
        <translation>单个文件长度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2146"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>关闭意味着存储卡写满后录制就直接停止。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2149"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>保留触发之前的那几秒，通常那才是有意思的部分。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2155"/>
        <source>When to record…</source>
        <translation>何时录像…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2158"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>摄像机自行录到存储卡上的每周时段。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2168"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>这些决定摄像机往自己存储卡上写什么。录到本机是在「摄像机 → 事件」下设置的，无需存储卡。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="554"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2176"/>
        <source>Recording</source>
        <translation>录像</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2184"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2212"/>
        <source>E-mail</source>
        <translation>电子邮件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2186"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2214"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2251"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2308"/>
        <source>Server</source>
        <translation>服务器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2187"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2199"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2215"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2252"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2309"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2190"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2219"/>
        <source>Encrypted</source>
        <translation>加密</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2220"/>
        <source>Not more often than</source>
        <translation>最短间隔</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2221"/>
        <source>Attach</source>
        <translation>附带</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2196"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2249"/>
        <source>FTP upload</source>
        <translation>FTP 上传</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2202"/>
        <source>Folder</source>
        <translation>文件夹</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2207"/>
        <source>Push notifications</source>
        <translation>推送通知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Send to</source>
        <translation>发送至</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2230"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2237"/>
        <source>Siren</source>
        <translation>警报器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2232"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2239"/>
        <source>Sound on an alarm</source>
        <translation>报警时鸣响</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2233"/>
        <source>Times</source>
        <translation>时段</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2234"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2245"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2256"/>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2242"/>
        <source>Spotlight</source>
        <translation>照明灯</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2244"/>
        <source>On</source>
        <translation>开</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2255"/>
        <source>Directory</source>
        <translation>目录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2260"/>
        <source>Push notification</source>
        <translation>推送通知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2262"/>
        <source>Schedule</source>
        <translation>时段</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2268"/>
        <source>Send a test e-mail</source>
        <translation>发送测试邮件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2271"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>正在请求摄像机发送测试邮件…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2274"/>
        <source>Test the FTP upload</source>
        <translation>测试 FTP 上传</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2277"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>正在请求摄像机试连 FTP 服务器…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2288"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>由摄像机自己发送，因此这台电脑关机时它们照常工作。leolink 自己的反应 — 命令、Webhook、MQTT — 在「摄像机 → 事件」下。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2297"/>
        <source>Alerts</source>
        <translation>告警</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2305"/>
        <source>Time server</source>
        <translation>时间服务器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2307"/>
        <source>Synchronise the clock</source>
        <translation>同步时钟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2310"/>
        <source>Every</source>
        <translation>每隔</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2314"/>
        <source>Scheduled restart</source>
        <translation>定时重启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2316"/>
        <source>Restart regularly</source>
        <translation>定期重启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2317"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>有些摄像机连续运行数周后会变得不稳定；每周重启一次是一剂便宜的良方。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2320"/>
        <source>Day</source>
        <translation>星期</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2321"/>
        <source>Hour</source>
        <translation>小时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2322"/>
        <source>Minute</source>
        <translation>分钟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2326"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>时钟不准的摄像机会给录像打上错误的时间，等到要找某一段时，这比听上去要紧得多。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2334"/>
        <source>Time</source>
        <translation>时间</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2458"/>
        <source>Ready.</source>
        <translation>就绪。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2563"/>
        <source>Writing to the camera…</source>
        <translation>正在写入摄像机…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2621"/>
        <source>Nothing to write.</source>
        <translation>没有要写入的内容。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2638"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>已保存。更换编码器会重启码流，因此画面可能会短暂中断。</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>诊断</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>仅错误</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>警告和错误</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>常规活动</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>全部</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>所有方面</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>搜索…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>显示</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>详细日志</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>记录对摄像机的每次请求、解码器的每个决定和每次重连。日常使用时保持关闭 — 出问题时打开，重现问题，然后再发送报告。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>跟随新行</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>复制报告</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>系统信息和日志，可直接粘贴到故障报告中。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>报告已复制。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>保存报告…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>保存报告</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>文本文件 (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>无法写入 %1。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>已保存到 %1</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>打开日志文件夹</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>密码、会话令牌和互联网地址在写入前就已删除，因此可以原样分享。您自己网络内的地址会保留 — 它们通常正是第一条线索。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%2 行中的 %1 行</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>无法为搜索打开 UDP 套接字。</translation>
    </message>
</context>
<context>
    <name>leolink::EventDispatcher</name>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <location filename="../src/EventActions.cpp" line="108"/>
        <source>Command</source>
        <translation>命令</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <source>could not be started</source>
        <translation>无法启动</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="119"/>
        <location filename="../src/EventActions.cpp" line="157"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="119"/>
        <source>invalid URL</source>
        <translation>地址无效</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="163"/>
        <source>Webhook → %1</source>
        <translation>Webhook → %1</translation>
    </message>
</context>
<context>
    <name>leolink::EventLogDialog</name>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="23"/>
        <source>Event log</source>
        <translation>事件日志</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>所有摄像机</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>所有事件</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>移动</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>有录像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>摄像机：</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>显示：</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>时间</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>摄像机</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>事件</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>媒体</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>无预览</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>打开录像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>清空日志…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>图像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + 图像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>尚未记录任何事件</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>仅录像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>录像：%1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation>（文件缺失）</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>图像：%1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>打开图像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>没有可打开的内容</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>这条事件对应的文件已经不在了。</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>清空事件日志</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>要删除全部事件历史吗？

录下的视频和图像仍留在磁盘上 — 只清空日志。</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>应用程序</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>摄像机接口</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>ONVIF 事件</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>侦测</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>录像</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>事件动作</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>网络</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>用户界面</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="293"/>
        <source>Qt</source>
        <translation>Qt</translation>
    </message>
</context>
<context>
    <name>leolink::MainWindow</name>
    <message>
        <location filename="../src/MainWindow.cpp" line="72"/>
        <source>%1 failed: %2</source>
        <translation>%1 失败：%2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="111"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>还没有配置任何摄像机。

请通过「摄像机…」添加一台。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;File</source>
        <translation>文件(&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="257"/>
        <source>&amp;Cameras…</source>
        <translation>摄像机(&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="262"/>
        <source>&amp;Settings…</source>
        <translation>设置(&amp;S)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="268"/>
        <source>&amp;Save snapshots…</source>
        <translation>保存快照(&amp;S)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="273"/>
        <source>&amp;Record all cameras</source>
        <translation>录制所有摄像机(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="280"/>
        <source>&amp;Event log…</source>
        <translation>事件日志(&amp;E)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>摄像机上的录像(&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="290"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>浏览摄像机自己存储卡上的内容。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="294"/>
        <location filename="../src/MainWindow.cpp" line="727"/>
        <location filename="../src/MainWindow.cpp" line="1794"/>
        <source>No cameras configured</source>
        <translation>尚未配置摄像机</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Which camera</source>
        <translation>哪台摄像机</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Show recordings from</source>
        <translation>显示以下摄像机的录像</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="317"/>
        <source>Open &amp;recordings folder</source>
        <translation>打开录像文件夹(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="325"/>
        <source>&amp;Quit</source>
        <translation>退出(&amp;Q)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;View</source>
        <translation>视图(&amp;V)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="332"/>
        <source>&amp;Full screen</source>
        <translation>全屏(&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="371"/>
        <source>Show &amp;menu bar</source>
        <translation>显示菜单栏(&amp;M)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="385"/>
        <source>Show &amp;toolbar</source>
        <translation>显示工具栏(&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="394"/>
        <source>Show status &amp;bar</source>
        <translation>显示状态栏(&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="403"/>
        <source>Hide window &amp;decoration</source>
        <translation>隐藏窗口边框(&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="415"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>拖动摄像机下方的横条可移动窗口。Ctrl+Shift+D 找回边框，Ctrl+M 找回菜单。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Help</source>
        <translation>帮助(&amp;H)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="424"/>
        <source>&amp;Online handbook</source>
        <translation>在线手册(&amp;O)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="431"/>
        <source>&amp;Protocol notes</source>
        <translation>协议笔记(&amp;P)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="437"/>
        <source>&amp;Diagnostics…</source>
        <translation>诊断(&amp;D)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="440"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>leolink 和摄像机都做了些什么 — 以及可附在故障报告里的报告。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="444"/>
        <source>&amp;Report a problem</source>
        <translation>报告问题(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>Report a problem</source>
        <translation>报告问题</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;请附上诊断报告&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="453"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>它记录了您的机器是什么、摄像机回答了什么，以及问题出在哪里 — 密码和地址都已删除。没有它，多数报告无从跟进。

如果这个问题您能自己触发，请先在诊断窗口打开详细日志，让它再发生一次，然后复制报告。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Open diagnostics</source>
        <translation>打开诊断</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="462"/>
        <source>Go to the issue tracker</source>
        <translation>前往问题追踪页</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="473"/>
        <source>&amp;About leolink</source>
        <translation>关于 leolink(&amp;A)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="476"/>
        <source>About leolink</source>
        <translation>关于 leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="477"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;面向 Reolink 摄像机的 Linux 原生客户端。&lt;/p&gt;&lt;p&gt;直接讲摄像机自己的协议：局域网内的 HTTP 接口、RTSP 和 ONVIF，以及需要从别处连上摄像机时 Reolink 的 P2P 服务。&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;手册&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;源代码&lt;/a&gt;&lt;/p&gt;&lt;p&gt;与 Reolink 无关，也未获其背书。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="489"/>
        <source>Main</source>
        <translation>主</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="501"/>
        <source>Ready</source>
        <translation>就绪</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="517"/>
        <source>Leave full screen</source>
        <translation>退出全屏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <location filename="../src/MainWindow.cpp" line="588"/>
        <source>Cameras…</source>
        <translation>摄像机…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="526"/>
        <source>Event log…</source>
        <translation>事件日志…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="532"/>
        <location filename="../src/MainWindow.cpp" line="591"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="582"/>
        <source>Show window</source>
        <translation>显示窗口</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="751"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n 台摄像机在线</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="960"/>
        <source>Esc leaves full screen</source>
        <translation>Esc 退出全屏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="967"/>
        <location filename="../src/MainWindow.cpp" line="1006"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>双击返回网格 · Esc 退出全屏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1004"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Esc 退出全屏 · 双击某台摄像机可让它铺满屏幕</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1029"/>
        <source>Grid view</source>
        <translation>网格视图</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1215"/>
        <location filename="../src/MainWindow.cpp" line="1233"/>
        <location filename="../src/MainWindow.cpp" line="1471"/>
        <source>Cannot create %1</source>
        <translation>无法创建 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1361"/>
        <source>Recording %1</source>
        <translation>正在录制 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1283"/>
        <location filename="../src/MainWindow.cpp" line="1369"/>
        <source>Saved %1</source>
        <translation>已保存 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1375"/>
        <location filename="../src/MainWindow.cpp" line="1506"/>
        <source>Recording stopped</source>
        <translation>录制已停止</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1382"/>
        <source>%1: %2</source>
        <translation>%1：%2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1487"/>
        <source>Recording started</source>
        <translation>录制已开始</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1505"/>
        <source>Recording all cameras</source>
        <translation>正在录制所有摄像机</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1586"/>
        <source>%1 at %2</source>
        <translation>%2 处的 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1606"/>
        <source>Motion detected</source>
        <translation>侦测到移动</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1618"/>
        <source>Sound detected</source>
        <translation>侦测到声音</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1641"/>
        <source>Menu bar hidden</source>
        <translation>菜单栏已隐藏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1642"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>菜单栏和工具栏都隐藏时，按 Ctrl+M 可把菜单调回来。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1661"/>
        <source>Cannot save</source>
        <translation>无法保存</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1662"/>
        <source>Settings could not be written to %1.</source>
        <translation>设置无法写入 %1。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1729"/>
        <source>Play through %1</source>
        <translation>通过 %1 播放</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1730"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>声音文件 (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;所有文件 (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1742"/>
        <source>Speaking through the camera…</source>
        <translation>正通过摄像机讲话…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1749"/>
        <source>Finished.</source>
        <translation>已完成。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1872"/>
        <source>Nothing to capture</source>
        <translation>没有可截取的内容</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1877"/>
        <source>Save snapshots to</source>
        <translation>快照保存到</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="1895"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>已保存 %n 张快照</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1913"/>
        <source>Welcome to leolink</source>
        <translation>欢迎使用 leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1915"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;还没有配置任何摄像机。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1917"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>用地址、用户名和密码添加一台摄像机。leolink 在您自己的网络里直接与摄像机通信 — 不涉及任何云账号。&lt;p&gt;各个选项的作用请见手册。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1921"/>
        <source>Add camera…</source>
        <translation>添加摄像机…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1922"/>
        <source>Open handbook</source>
        <translation>打开手册</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1998"/>
        <source>leolink is still running</source>
        <translation>leolink 仍在运行</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1999"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>摄像机仍在录制。用通知区域的图标可以回来。</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>没有可用画面</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — 隐私区域</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>拖出摄像机应当遮黑的部分。它会在画面离开设备之前涂黑，因此这些部分在实时画面、录像以及任何其他程序中都不存在 — 包括厂商自己的应用。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>移除最后一个</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>全部移除</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>正在从 %1 获取画面…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>无画面：%1 — 区域仍然可以绘制。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%2 个区域中的 %1 个</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>未安装 ffmpeg，因此无法进行移动侦测。</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>%1 没有码流地址。</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="131"/>
        <source>Motion detection stopped: %1</source>
        <translation>移动侦测已停止：%1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="156"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>无法为移动侦测启动 ffmpeg。</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="157"/>
        <source>ONVIF subscription failed.</source>
        <translation>ONVIF 订阅失败。</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>未设置 MQTT 代理或主题。</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>MQTT 代理没有回应。</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>MQTT：%1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>MQTT：代理返回了意外的应答。</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>MQTT 拒绝了连接：%1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — 摄像机上的录像</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>主码流</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>子码流</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>从</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>到</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>开始</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>时长</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>播放</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>下载…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>选择一个时段并按「搜索」。只有摄像机装了存储卡才会有录像。</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>正在询问 %1…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>那个时段里什么都没找到。要么没有录下任何东西，要么摄像机没有存储卡。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>找到 %n 段录像。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>尚未与摄像机建立会话 — 请先搜索。</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>没有播放器</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>找不到 mpv。录像位于：

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>保存录像</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>无法写入 %1。</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>已保存到 %1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>下载失败：%1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>窗口</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>有移动时</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>响应</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>录像</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>常规</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>显示菜单栏</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>Ctrl+M 可随时切换。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>显示工具栏</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>显示状态栏</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>隐藏窗口边框</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>适合墙面显示屏。Ctrl+Shift+D 切换。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>外观</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>在通知区域显示图标</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>关闭窗口时隐藏而不退出</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>最小化时把窗口收进通知区域</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>通知区域</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>让画面块短暂泛红</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>这样扫一眼整墙摄像机，就知道是哪一台。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> 毫秒</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>播放提示音</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>留空：使用桌面自带的通知音</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>浏览…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>要播放的声音</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>声音文件 (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;所有文件 (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>持续</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>声音文件</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>屏幕上</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>侦测到移动时把窗口调到前面</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>先前的大小</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>全屏</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>返回时的状态</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>窗口</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>哪些摄像机会产生事件、以何种方式产生，在「摄像机 ▸ 设置 ▸ 由 leolink 侦测」中逐台指定。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>当某台摄像机上报时 leolink 会做什么。除非某台摄像机自己的对话框另有说明，否则它就照这里来——要么全用，要么全不用，绝不用一半：部分继承的设置，在出问题却没触发时最难理清。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>录像文件夹</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>录像与抓拍</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>录像以 Matroska 写出且不重新编码：画面保持摄像机的原始质量，处理器几乎不干活。

某台摄像机是否录像，是它自己的设置，在「摄像机 ▸ 设置 ▸ 响应」中。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>硬件（推荐）</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>硬件，由驱动决定</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>硬件，带帧拷贝</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="292"/>
        <source>Software only</source>
        <translation>仅软件</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="294"/>
        <source>“Recommended” names the decoder explicitly so that decoding and drawing stay on the same graphics API. Left to itself, mpv may decode through one API and draw through another, which on some cards turns the picture solid green.

If the picture is broken, try the others in turn. “Software only” always works but costs a whole processor core at full resolution.</source>
        <translation>「推荐」明确指定解码器，让解码和绘制留在同一套图形接口上。放任不管时，mpv 可能用一套接口解码、另一套绘制，在某些显卡上会把画面变成一片纯绿。

如果画面损坏，请逐个试试其余选项。「仅软件」总能工作，但在完整分辨率下要吃掉一整个处理器核心。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>宁要低延迟，不要流畅</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>把缓冲降到最低。如果高码率的流在拥挤的网络上卡顿，请关掉它。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>解码</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>系统语言</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>语言</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>重启 leolink 后生效。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>详细日志</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>把对摄像机的每次请求、解码器的每个决定和每次重连记入 ~/.local/share/leolink/leolink.log。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>打开诊断…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>错误和警告始终会记录。详细日志还会加上与摄像机的往来 — 出问题时打开它，重现问题，然后从「帮助 ▸ 诊断」发送报告。密码和会话令牌在写入之前就已删除。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>诊断</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>未安装 ffmpeg，因此无法录制。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>%1 没有码流地址。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="102"/>
        <source>Recording failed: %1</source>
        <translation>录制失败：%1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="134"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>录制没有产生数据（ffmpeg 退出码 %1）。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="150"/>
        <source>Could not start ffmpeg.</source>
        <translation>无法启动 ffmpeg。</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="121"/>
        <source>File format not recognised.</source>
        <translation>无法识别的文件格式。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="122"/>
        <source>Invalid input.</source>
        <translation>输入无效。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="123"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>摄像机没有空闲会话。它一次只允许寥寥几个，还要与手机应用和它的网页共用。请关掉那些，或者等一分钟让旧会话失效。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="127"/>
        <source>Session expired.</source>
        <translation>会话已过期。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="128"/>
        <source>Wrong user name or password.</source>
        <translation>用户名或密码不正确。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="129"/>
        <source>Timed out.</source>
        <translation>已超时。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="130"/>
        <source>This firmware does not support that command.</source>
        <translation>此固件不支持该命令。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="131"/>
        <source>Could not read the configuration.</source>
        <translation>无法读取配置。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="132"/>
        <source>Could not verify the configuration.</source>
        <translation>无法验证配置。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="133"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>摄像机的一部分没有回应。视询问内容而定，这意味着没有装存储卡，或者摄像机没有互联网出路。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="136"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>不允许 — 此型号没有相应硬件。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="137"/>
        <source>Account invalid, log in again.</source>
        <translation>账号无效，请重新登录。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="138"/>
        <source>User name already taken.</source>
        <translation>该用户名已被占用。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="139"/>
        <source>Maximum number of users reached.</source>
        <translation>已达到用户数量上限。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="140"/>
        <source>Camera busy, try again shortly.</source>
        <translation>摄像机忙，请稍后再试。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="141"/>
        <source>IP address conflict.</source>
        <translation>IP 地址冲突。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="142"/>
        <source>Configuration test failed.</source>
        <translation>配置测试失败。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="143"/>
        <source>FTP login failed.</source>
        <translation>FTP 登录失败。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="144"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP 无法创建目录。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="145"/>
        <source>FTP upload failed.</source>
        <translation>FTP 上传失败。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="146"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP 无法连上服务器。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="147"/>
        <source>Camera reported error %1.</source>
        <translation>摄像机报告错误 %1。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="348"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>摄像机此刻不回应请求。当它一次收到太多请求时就会这样；过一会儿它会自行恢复。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="355"/>
        <source>Cannot reach %1: %2</source>
        <translation>无法连上 %1：%2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="369"/>
        <source>Unexpected reply from %1.</source>
        <translation>来自 %1 的意外应答。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="472"/>
        <source>Login returned no token.</source>
        <translation>登录没有返回令牌。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="511"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — 固件 %2，%3 个通道</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="776"/>
        <source>The camera could not join that network: %1</source>
        <translation>摄像机无法加入该网络：%1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="786"/>
        <source>E-mail</source>
        <translation>电子邮件</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="796"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="836"/>
        <source>Update available: %1</source>
        <translation>有可用更新：%1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="837"/>
        <source>The firmware is up to date.</source>
        <translation>固件已是最新。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="854"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>正在升级。摄像机会自行重启，并有数分钟无法连接。切勿断电。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="987"/>
        <source>Snapshot failed.</source>
        <translation>抓拍失败。</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>整周</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>从不</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>夜间</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>工作时间</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>周末</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>反转</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>每天 22:00 至 06:00。</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>周一至周五 08:00 至 17:00。</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>没有选中任何时段 — 这将永远不会运行。</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>始终启用。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>每周 %n 小时。</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>这台摄像机没有这些设置。</translation>
    </message>
</context>
<context>
    <name>leolink::SegmentBuffer</name>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="81"/>
        <source>ffmpeg is not installed, so continuous recording is unavailable.</source>
        <translation>未安装 ffmpeg，因此无法不间断录制。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="86"/>
        <source>No stream address for %1.</source>
        <translation>%1 没有码流地址。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="90"/>
        <location filename="../src/SegmentBuffer.cpp" line="279"/>
        <source>Cannot write to %1.</source>
        <translation>无法写入 %1。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="255"/>
        <source>Nothing had been buffered yet.</source>
        <translation>缓冲里还什么都没有。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="270"/>
        <source>That moment is no longer in the buffer.</source>
        <translation>那一刻已经不在缓冲里了。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="325"/>
        <source>The recording could not be cut out of the buffer.</source>
        <translation>无法从缓冲中剪出这段录像。</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="34"/>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <source>Cameras</source>
        <translation>摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="41"/>
        <source>Layout</source>
        <translation>布局</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="80"/>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="81"/>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="85"/>
        <source>Scan network…</source>
        <translation>扫描网络…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="87"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>向网络询问有哪些 ONVIF 摄像机。只发出一次组播探询；保持沉默的设备绝不会被联系。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="102"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 或 camera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="107"/>
        <source>optional: pass show reolink/hall</source>
        <translation>可选：pass show reolink/menting</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="109"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>若已填写，则运行该命令，并把它的输出用作密码。这样密码就不必写进配置文件。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="112"/>
        <source>optional, for P2P access</source>
        <translation>可选，用于 P2P 访问</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="117"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>任何 libmpv 能打开的地址。可用于其他厂商的摄像机、NVR 码流或本地文件。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="121"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>子码流（带宽小）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="122"/>
        <source>Main stream (full resolution)</source>
        <translation>主码流（完整分辨率）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="126"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV（延迟更低）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan（摄像机自有协议）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <location filename="../src/SettingsDialog.cpp" line="150"/>
        <source>Custom URL</source>
        <translation>自定义地址</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>RTSP 适合大多数摄像机，也是首先该试的。

HTTP-FLV 只需要 80 端口，在 RTSP 被封的地方很有用。

Baichuan 是 Reolink 自家应用所讲的协议。对于把 RTSP 关掉的摄像机 — 电池款就是如此 — 它就是答案，而且不占用摄像机那少得可怜的 Web 会话。仅限视频：声音仍走 RTSP。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="138"/>
        <source>Use HTTPS for the control API</source>
        <translation>控制接口使用 HTTPS</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="139"/>
        <source>Show this camera</source>
        <translation>显示这台摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="142"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="143"/>
        <source>Host</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="144"/>
        <source>User</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="145"/>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="146"/>
        <source>Password command</source>
        <translation>取密码的命令</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="147"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="148"/>
        <source>Stream</source>
        <translation>码流</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="149"/>
        <source>Transport</source>
        <translation>传输</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>Test connection</source>
        <translation>测试连接</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Settings for this camera…</source>
        <translation>这台摄像机的设置…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>leolink 侧的侦测、响应与录像，以及摄像机自身的编码器、画面和时段。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>automatic</source>
        <translation>自动</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="224"/>
        <source>Columns</source>
        <translation>列数</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="225"/>
        <source>Rows</source>
        <translation>行数</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="227"/>
        <source>Grid size</source>
        <translation>网格大小</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="252"/>
        <source>Row</source>
        <translation>行</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="253"/>
        <source>Column</source>
        <translation>列</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="254"/>
        <source>Row span</source>
        <translation>跨行</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="255"/>
        <source>Column span</source>
        <translation>跨列</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="257"/>
        <source>Position of the selected camera</source>
        <translation>所选摄像机的位置</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="268"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>把行和列留在「自动」，摄像机就会按顺序填满网格。通过跨格，一台摄像机可以占据多个格子。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="421"/>
        <source>New camera</source>
        <translation>新摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="436"/>
        <source>Remove camera</source>
        <translation>移除摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="437"/>
        <source>Remove “%1” from the list?</source>
        <translation>要把「%1」从列表中移除吗？</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="457"/>
        <source>Enter a host first.</source>
        <translation>请先填写地址。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="464"/>
        <source>Contacting %1…</source>
        <translation>正在联系 %1…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Looking for cameras…</source>
        <translation>正在查找摄像机…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="488"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>已找到 %n 台设备…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="498"/>
        <source>No cameras found</source>
        <translation>未找到摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="499"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>没有 ONVIF 设备回应。

摄像机只有在开启 ONVIF 时才会回答，而探询既穿不过路由器，也穿不过多数 VPN。您仍可以手动输入地址来添加摄像机。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="525"/>
        <source>unnamed device</source>
        <translation>未命名设备</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="526"/>
        <source> (Reolink)</source>
        <translation>（Reolink）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="527"/>
        <source>  · already added</source>
        <translation>  · 已添加</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="533"/>
        <source>Cameras found</source>
        <translation>找到摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="534"/>
        <source>Add which one?</source>
        <translation>添加哪一台？</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="577"/>
        <source>Incomplete camera</source>
        <translation>摄像机信息不完整</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="578"/>
        <source>“%1” has no host address.</source>
        <translation>「%1」没有地址。</translation>
    </message>
</context>
<context>
    <name>leolink::SignalIndicator</name>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="53"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="54"/>
        <source>Mobile data</source>
        <translation>移动数据</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>有线</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>连接</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — 强度未知</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %3 格中的 %2 格</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>无法连上摄像机：%1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>摄像机在 RTSP 端口上没有回应。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="159"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>发送声音需要 ffmpeg，而它未能启动。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="272"/>
        <source>The camera rejected the user name or password.</source>
        <translation>摄像机拒绝了该用户名或密码。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="281"/>
        <source>The camera refused: %1</source>
        <translation>摄像机已拒绝：%1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="316"/>
        <source>This camera does not offer a speaker.</source>
        <translation>这台摄像机没有扬声器。</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>码流已结束（%1）— 正在重连</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>信号弱</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>码流异常</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>最近十秒内有 %n 帧损坏。

通常是 Wi-Fi 信号弱，或者码率相对分辨率设得太低。leolink 能修的都修了 — 这些是修不了的。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>正在连接…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="703"/>
        <source>Mute this camera</source>
        <translation>静音这台摄像机</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="306"/>
        <source>Volume</source>
        <translation>音量</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <location filename="../src/VideoTile.cpp" line="1007"/>
        <source>Record this camera</source>
        <translation>录制这台摄像机</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="985"/>
        <source>Speak through the camera</source>
        <translation>通过摄像机讲话</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>摄像机设置</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="455"/>
        <source>no host configured</source>
        <translation>未填写地址</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="529"/>
        <source>connecting over Baichuan…</source>
        <translation>正通过 Baichuan 连接…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="552"/>
        <location filename="../src/VideoTile.cpp" line="938"/>
        <source>custom stream</source>
        <translation>自定义流</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="554"/>
        <location filename="../src/VideoTile.cpp" line="940"/>
        <source>main stream</source>
        <translation>主码流</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="555"/>
        <location filename="../src/VideoTile.cpp" line="941"/>
        <source>sub stream</source>
        <translation>子码流</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="702"/>
        <source>Unmute this camera</source>
        <translation>取消这台摄像机的静音</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="720"/>
        <source>MOTION</source>
        <translation>移动</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="838"/>
        <location filename="../src/VideoTile.cpp" line="858"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>摄像机正在重新配置… %1 秒</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="860"/>
        <source>camera is reconfiguring…</source>
        <translation>摄像机正在重新配置…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="913"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>码流丢失 — 正在重连（%1）</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="944"/>
        <source>%1 fps</source>
        <translation>%1 fps</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="947"/>
        <source>%1 Mbit/s</source>
        <translation>%1 Mbit/s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="948"/>
        <source>%1 kbit/s</source>
        <translation>%1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="984"/>
        <source>Stop speaking</source>
        <translation>结束讲话</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1006"/>
        <source>Stop recording</source>
        <translation>停止录制</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — 移动区域</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>在画面上拖动，选择受监看的范围。变暗的区域会被忽略 — 适合画面边缘的道路、风中摇动的树，或邻居家的门口。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>全部监看</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>全部忽略</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>反转</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>绘制</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>监看一个矩形</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>忽略一个矩形</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>在单个格子上拖动。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>拖出一个要监看的矩形。按住 Shift 拖动可在不换工具的情况下做同样的事。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>拖出一个要忽略的矩形。按住 Ctrl 拖动可在不换工具的情况下做同样的事。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>正在从 %1 获取画面…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>无画面：%1 — 区域仍然可以设置。</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>没有可用画面</translation>
    </message>
</context>
</TS>
