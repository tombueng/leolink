<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN" sourcelanguage="en">
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/Keyring.cpp" line="43"/>
        <source>The keyring did not answer.</source>
        <translation>密钥环没有响应。</translation>
    </message>
    <message>
        <location filename="../src/Keyring.cpp" line="113"/>
        <location filename="../src/Keyring.cpp" line="129"/>
        <location filename="../src/Keyring.cpp" line="150"/>
        <source>This build has no keyring support.</source>
        <translation>此版本不支持密钥环。</translation>
    </message>
    <message>
        <location filename="../src/BaichuanApi.cpp" line="76"/>
        <source>Cannot reach %1 over Baichuan: %2</source>
        <translation>无法通过 Baichuan 连接 %1：%2</translation>
    </message>
    <message>
        <location filename="../src/BaichuanApi.cpp" line="224"/>
        <source>Lost the connection to %1.</source>
        <translation>与 %1 的连接已断开。</translation>
    </message>
    <message>
        <location filename="../src/BaichuanApi.cpp" line="377"/>
        <source>The camera did not take the firmware: %1</source>
        <translation>摄像头未接受固件：%1</translation>
    </message>
</context>
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
    <name>leolink::BaichuanEvents</name>
    <message>
        <location filename="../src/BaichuanEvents.cpp" line="32"/>
        <source>Lost the camera&apos;s alarms: %1</source>
        <translation>摄像头的报警已中断：%1</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="175"/>
        <source>Cannot open a local port: %1</source>
        <translation>无法打开本地端口：%1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="193"/>
        <source>Baichuan login failed: %1</source>
        <translation>Baichuan 登录失败：%1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="203"/>
        <source>The camera refused to send video: %1</source>
        <translation>摄像机拒绝发送视频：%1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="482"/>
        <source>The player did not connect.</source>
        <translation>播放器未能连接。</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="497"/>
        <source>The camera stopped sending.</source>
        <translation>摄像机已停止发送。</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="95"/>
        <source>%1 channel %2</source>
        <translation>%1 通道 %2</translation>
    </message>
    <message>
        <location filename="../src/Config.cpp" line="102"/>
        <source>Camera</source>
        <translation>摄像机</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="134"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="142"/>
        <source>Reading settings from %1…</source>
        <translation>正在从 %1 读取设置…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="147"/>
        <source>Apply to camera</source>
        <translation>应用到摄像机</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="208"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>正在重启。摄像机约一分钟后回来。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="224"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>已保存。摄像机正在重连，很快就会回来。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="230"/>
        <source>%1: the camera reported success.</source>
        <translation>%1：摄像机报告成功。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="238"/>
        <source>Processor load %1 %</source>
        <translation>处理器负载 %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="243"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>编码器输出 %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="245"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>网络吞吐 %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="247"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>摄像机已到极限。降低分辨率或帧率会让它稳下来。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="302"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="973"/>
        <source>Administrator</source>
        <translation>管理员</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="303"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="973"/>
        <source>Viewer</source>
        <translation>访客</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="335"/>
        <source>Done.</source>
        <translation>完成。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="340"/>
        <source>The card has been formatted.</source>
        <translation>存储卡已格式化。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="784"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>越高画面越好，网络流量也越大。摄像机只会给出它确实撑得住的码率。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="788"/>
        <source>Resolution</source>
        <translation>分辨率</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="789"/>
        <source>Frame rate</source>
        <translation>帧率</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="790"/>
        <source>Bit rate (kbit/s)</source>
        <translation>码率（kbit/s）</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="791"/>
        <source>H.264 profile</source>
        <translation>H.264 规格</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>这些改动的是摄像机本身，因此任何客户端都会看到结果。可选项来自摄像机，各型号不同。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="812"/>
        <source>Send sound</source>
        <translation>传输声音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="815"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>摄像机的麦克风。即使关掉，它仍会在流里放一条音轨 — 一条完全无声的音轨，这比根本没有音轨要难察觉得多。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="544"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="821"/>
        <source>Sound</source>
        <translation>声音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="112"/>
        <source>This camera</source>
        <translation>此摄像机</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="115"/>
        <source>In leolink</source>
        <translation>在 leolink 中</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="121"/>
        <source>In the camera</source>
        <translation>在摄像机中</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="137"/>
        <source>Try again</source>
        <translation>重试</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="270"/>
        <source>Installing. The camera is still on the old firmware… %1</source>
        <translation>正在安装。摄像头仍在使用旧固件… %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="272"/>
        <source>Installing. The camera is restarting… %1</source>
        <translation>正在安装。摄像头正在重启… %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="275"/>
        <source>You can close this window: the camera finishes on its own. Do not cut its power.</source>
        <translation>可以关闭此窗口：摄像头会自行完成。请勿断电。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="281"/>
        <source>Installed. The camera is running %1.</source>
        <translation>已安装。摄像头正在运行 %1。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="290"/>
        <source>Sending the firmware… %1 %</source>
        <translation>正在发送固件… %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="446"/>
        <source>leolink watches the picture</source>
        <translation>leolink 观察画面</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="448"/>
        <source>Either of the two</source>
        <translation>两者皆可</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="449"/>
        <source>Do not watch</source>
        <translation>不监看</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="458"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;由摄像机上报：&lt;/b&gt;由摄像机自己的侦测器判断，并发出 ONVIF 事件。它看哪里、多容易触发，在下方的「侦测」中设置——那是摄像机自身的设置。&lt;br&gt;&lt;br&gt;&lt;b&gt;由 leolink 观察画面：&lt;/b&gt;本机再开一条到子码流的连接来分析画面。任何摄像机都适用，包括什么都不上报的；此时摄像机自己的侦测器不起作用。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="469"/>
        <source>Choose what is watched…</source>
        <translation>选择监看范围…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="477"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>画面上的一处要变化多少才算数。越高察觉得越多，连阴影和雨水也算。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="482"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="485"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>受监看的面积要变化多少才算移动。20 ‰ 是画面的百分之二 — 大约相当于中距离上的一个人。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="490"/>
        <source>Motion comes from</source>
        <translation>移动由谁上报</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="493"/>
        <source>How leolink learns of motion</source>
        <translation>leolink 如何得知移动</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="499"/>
        <source>Minimum area</source>
        <translation>最小面积</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="501"/>
        <source>When leolink watches the picture</source>
        <translation>当 leolink 观察画面时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="512"/>
        <source>Raise an event on sound</source>
        <translation>声音触发事件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="515"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>需要带麦克风的摄像机。会再开一条到子码流的连接。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="520"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="523"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 dB 接近寂静，-20 dB 相当于近旁提高的说话声。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="527"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="571"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="582"/>
        <source> s</source>
        <translation> 秒</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="530"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>噪声停止后仍让事件保持一会儿，免得一声犬吠被报四次。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="541"/>
        <source>Sound above</source>
        <translation>声音高于</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="542"/>
        <source>Hold for</source>
        <translation>保持</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="555"/>
        <source>Detection by leolink</source>
        <translation>由 leolink 侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="563"/>
        <source>Record while motion lasts</source>
        <translation>移动期间持续录制</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="566"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>从实时码流录到本机，因此即使摄像机没装存储卡也能用。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="704"/>
        <source>Follow the defaults under Settings</source>
        <translation>沿用「设置」中的默认</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="705"/>
        <source>Use this camera&apos;s own</source>
        <translation>使用这台摄像机自己的</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="718"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="728"/>
        <source>Reactions</source>
        <translation>响应</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="720"/>
        <source>What happens on an event</source>
        <translation>发生事件时做什么</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="735"/>
        <source>Muted</source>
        <translation>静音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="750"/>
        <source>Volume</source>
        <translation>音量</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="752"/>
        <source>Sound in leolink</source>
        <translation>leolink 中的声音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>同样这两项也在摄像机自己的画面块上，那里更好按。摄像机默认静音：打开一整墙摄像机，不该让每一台的声音同时灌满房间。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="766"/>
        <source>Playback</source>
        <translation>播放</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="826"/>
        <source>Main stream</source>
        <translation>主码流</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="827"/>
        <source>Sub stream</source>
        <translation>子码流</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="832"/>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="846"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2543"/>
        <source>Brightness</source>
        <translation>亮度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="847"/>
        <source>Contrast</source>
        <translation>对比度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="848"/>
        <source>Saturation</source>
        <translation>饱和度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="849"/>
        <source>Sharpness</source>
        <translation>锐度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="850"/>
        <source>Hue</source>
        <translation>色调</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="852"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="907"/>
        <source>Picture</source>
        <translation>画面</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="862"/>
        <source>Exposure and orientation</source>
        <translation>曝光与方向</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="864"/>
        <source>Day / night</source>
        <translation>白天 / 夜间</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="865"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>「自动」会随着光线变暗切到红外。夜里强行彩色会得到暗到没法用的画面；白天强行黑白则白白丢掉颜色。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="870"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="900"/>
        <source>Automatic</source>
        <translation>自动</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="871"/>
        <source>Always colour</source>
        <translation>始终彩色</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="872"/>
        <source>Always black and white</source>
        <translation>始终黑白</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="873"/>
        <source>Anti-flicker</source>
        <translation>抗闪烁</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="874"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>请与您的市电频率一致 — 欧洲为 50 Hz — 否则室内灯光会与快门拍频，画面会一跳一跳。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="878"/>
        <source>Exposure</source>
        <translation>曝光</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="879"/>
        <source>Mirror</source>
        <translation>镜像</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="880"/>
        <source>Flip</source>
        <translation>翻转</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="881"/>
        <source>For a camera mounted upside down.</source>
        <translation>适用于倒装的摄像机。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="882"/>
        <source>Backlight compensation</source>
        <translation>背光补偿</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="883"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>当被摄对象背对明亮的窗户或天空时有用。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="885"/>
        <source>Noise reduction</source>
        <translation>降噪</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="886"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>让暗处画面更干净，代价是运动的物体会拖影。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="888"/>
        <source>Rotation</source>
        <translation>旋转</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="889"/>
        <source>Dynamic contrast</source>
        <translation>动态对比度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="893"/>
        <source>Infrared illumination</source>
        <translation>红外补光</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="895"/>
        <source>Infrared lamps</source>
        <translation>红外灯</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="896"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>「自动」会在天黑时点亮。如果摄像机隔着玻璃拍摄，请关掉 — 反光会让它什么也看不见。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="901"/>
        <source>Always on</source>
        <translation>始终开启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="902"/>
        <source>Always off</source>
        <translation>始终关闭</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="916"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2206"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2485"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2497"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2513"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2550"/>
        <source>User</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="916"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="975"/>
        <source>Rights</source>
        <translation>权限</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="923"/>
        <source>Add…</source>
        <translation>添加…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="924"/>
        <source>Change password…</source>
        <translation>修改密码…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="925"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="939"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>这些是摄像机上的账号，不是 leolink 里的。访客账号能看却什么都改不了 — 凡是只需看画面的场合都值得用它，这样保存下来的密码就无法反过来改动摄像机的设置。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="956"/>
        <source>Users</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="963"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="968"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="975"/>
        <source>New user</source>
        <translation>新用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="963"/>
        <source>User name</source>
        <translation>用户名</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="968"/>
        <source>Password for %1</source>
        <translation>%1 的密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="980"/>
        <source>Creating %1…</source>
        <translation>正在创建 %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="995"/>
        <source>Change password</source>
        <translation>修改密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="995"/>
        <source>New password for %1</source>
        <translation>%1 的新密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1004"/>
        <source>This is the account leolink uses</source>
        <translation>这就是 leolink 使用的账号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1005"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>在这里改掉，leolink 就会被挡在门外，直到新密码也在「摄像机」下填好为止。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1009"/>
        <source>Changing the password for %1…</source>
        <translation>正在修改 %1 的密码…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1022"/>
        <source>Cannot delete this account</source>
        <translation>无法删除此账号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1023"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink 正以「%1」登录。删除它会立刻切断与这台摄像机的连接。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1028"/>
        <source>Delete user</source>
        <translation>删除用户</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1029"/>
        <source>Delete “%1” from the camera?</source>
        <translation>要把「%1」从摄像机上删除吗？</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1033"/>
        <source>Deleting %1…</source>
        <translation>正在删除 %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1040"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1634"/>
        <source>Format the SD card</source>
        <translation>格式化存储卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1042"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要抹掉 %1 存储卡上的一切吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1045"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>卡上的每一段录像都会被删除。这无法撤销，尚未下载的内容也无从找回。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1048"/>
        <source>Erase</source>
        <translation>抹掉</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1055"/>
        <source>Formatting…</source>
        <translation>正在格式化…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1069"/>
        <source>The firmware is still being sent to the camera.</source>
        <translation>固件仍在发送到摄像机。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1071"/>
        <source>This window can be closed once it says the camera is installing. Closing it now cuts the package short.</source>
        <translation>当窗口显示摄像机正在安装时，即可关闭此窗口。现在关闭会使固件包传输中断。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1073"/>
        <source>Keep open</source>
        <translation>保持打开</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1074"/>
        <source>Close anyway</source>
        <translation>仍然关闭</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1086"/>
        <source>Firmware for %1</source>
        <translation>%1 的固件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1088"/>
        <source>Reolink firmware (*.pak)</source>
        <translation>Reolink 固件 (*.pak)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1094"/>
        <source>%1 cannot be read.</source>
        <translation>无法读取 %1。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1111"/>
        <source>&lt;b&gt;Install build %1 on %2?&lt;/b&gt;</source>
        <translation>&lt;b&gt;在 %2 上安装版本 %1？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1114"/>
        <source>%1

The package is for board %2, which is what the camera reports, and replaces %3. leolink sends it from this computer, which takes a minute or two; keep this window open until it says so. The camera then installs it and restarts, unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>%1

此固件包适用于主板 %2，正是摄像头报告的型号，将替换 %3。leolink 从这台电脑发送它，需要一两分钟；请保持此窗口打开，直到提示完成。随后摄像头会安装并自行重启，数分钟内无法访问。

更新期间请勿断电——写入中途被中断的摄像头通常需要返修。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1135"/>
        <source>Sending the firmware…</source>
        <translation>正在发送固件…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1146"/>
        <source>Wi-Fi signal</source>
        <translation>Wi-Fi 信号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1150"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1567"/>
        <source>Reading…</source>
        <translation>正在读取…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1154"/>
        <source>Connection</source>
        <translation>连接</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1167"/>
        <source>Scan</source>
        <translation>扫描</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1171"/>
        <source>Join network</source>
        <translation>加入网络</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1185"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1219"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1467"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2216"/>
        <source>Network</source>
        <translation>网络</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1187"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2207"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2486"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2498"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2514"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2551"/>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1190"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>扫描的是摄像机而不是这台电脑 — 重要的是它能够到什么。密码会在保存前先试一次，因此打错字会被拒绝，而不会让摄像机落得连不上任何网络。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1204"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>地址和端口在这里只是读取，更改要在摄像机自己的网页界面里做。填错一个就会让摄像机彻底脱离网络，唯一的退路是复位针 — 在那种事情上，一个警告对话框顶不上厂商自己的界面。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1249"/>
        <source>strong</source>
        <translation>强</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1250"/>
        <source>good</source>
        <translation>良好</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1251"/>
        <source>fair</source>
        <translation>一般</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1252"/>
        <source>weak</source>
        <translation>弱</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1253"/>
        <source>unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1307"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1312"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>，%n 个接入点</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1317"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>摄像机所听到的信号：4 格中的 %1 格</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1319"/>
        <source>Encryption: %1</source>
        <translation>加密：%1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1321"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>从 %n 个接入点听到 — 一张网络，多个节点。显示的是最强的那个。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1335"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>有些名称是从多个接入点听到的 — 那是一张 Mesh 网。摄像机连接的是这个名称，而不是某个具体节点；由 Mesh 决定它与哪个节点通信，并在需要时切换。要找到最佳位置，请移动摄像机并观察上方的「Wi-Fi 信号」：那才是它实际的连接。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1345"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>找到 %n 个网络，最强的在前。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1353"/>
        <source>scanning…</source>
        <translation>正在扫描…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1356"/>
        <source>The camera is scanning for networks…</source>
        <translation>摄像机正在扫描网络…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1367"/>
        <source>Change the camera&apos;s network</source>
        <translation>更改摄像机的网络</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1369"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要把 %1 迁到「%2」吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>摄像机会先测试密码，错了就拒绝，所以这比听上去安全。

即便如此，它在重连期间仍会消失约一分钟；如果新网络给它分配了不同的地址，之后您得在这里更新。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1377"/>
        <source>Join</source>
        <translation>加入</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1385"/>
        <source>Testing the password on the camera…</source>
        <translation>正在摄像机上测试密码…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1402"/>
        <source>Wi-Fi, %1</source>
        <translation>Wi-Fi，%1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1410"/>
        <source>Link</source>
        <translation>链路</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1411"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1482"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1412"/>
        <source>Netmask</source>
        <translation>子网掩码</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1413"/>
        <source>Gateway</source>
        <translation>网关</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1414"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1415"/>
        <source>DNS</source>
        <translation>DNS</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1416"/>
        <source>Network name</source>
        <translation>网络名称</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1437"/>
        <source>Ports</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1439"/>
        <source>The camera reported nothing.</source>
        <translation>摄像机什么也没报告。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1456"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1457"/>
        <source>Model</source>
        <translation>型号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1458"/>
        <source>Item number</source>
        <translation>货号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1459"/>
        <source>Hardware</source>
        <translation>硬件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1461"/>
        <source>Build</source>
        <translation>构建</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1462"/>
        <source>Board</source>
        <translation>主板</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1463"/>
        <source>Serial number</source>
        <translation>序列号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1464"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1465"/>
        <source>MAC address</source>
        <translation>MAC 地址</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1466"/>
        <source>IP address</source>
        <translation>IP 地址</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1469"/>
        <source>What it is</source>
        <translation>设备信息</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1483"/>
        <source>Found</source>
        <translation>检测结果</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1485"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1486"/>
        <source>Over Baichuan, port 9000 — this camera has no web server. Most settings are available; some, such as user accounts and e-mail server details, are only reachable through Reolink&apos;s own app.</source>
        <translation>通过 Baichuan，端口 9000 — 此摄像机没有 Web 服务器。大多数设置都可用；部分设置，例如用户账户和电子邮件服务器详细信息，只能通过 Reolink 自己的应用访问。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1490"/>
        <source>Over the camera&apos;s web interface (HTTP API).</source>
        <translation>通过摄像机的网页界面（HTTP API）。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1492"/>
        <source>How leolink reaches it</source>
        <translation>leolink 如何连接它</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1495"/>
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1496"/>
        <source>Puts all of this on the clipboard, for a bug report or a support request.</source>
        <translation>将所有这些内容复制到剪贴板，用于错误报告或技术支持请求。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1520"/>
        <source>About</source>
        <translation>关于</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1533"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1767"/>
        <source>Restart the camera</source>
        <translation>重启摄像机</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1539"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>摄像机会离线一分钟左右，然后自行回来。存储卡上的录像不受影响，设置也会保留。

当摄像机不再应答、拒绝新连接，或固件升级后行为异常时，值得一试。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1547"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1774"/>
        <source>Restart</source>
        <translation>重启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1558"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>这里不提供恢复出厂设置。它连网络设置一并清除，而一台忘掉 Wi-Fi 的摄像机只能取下来用网线连接 — 如果您确实要这么做，请使用摄像机自己的网页界面。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1569"/>
        <source>Condition</source>
        <translation>状况</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1574"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1654"/>
        <source>Not checked.</source>
        <translation>尚未检查。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1577"/>
        <source>Check for updates</source>
        <translation>检查更新</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1579"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>向 Reolink 询问的是摄像机，而不是这台电脑 — 因此它需要自己的一条互联网出路。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1583"/>
        <source>Asking Reolink…</source>
        <translation>正在询问 Reolink…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1588"/>
        <source>Install update</source>
        <translation>安装更新</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1067"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1093"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1103"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1109"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1592"/>
        <source>Install firmware</source>
        <translation>安装固件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1594"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要更新 %1 的固件吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1596"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>摄像机会自行下载更新并重启。它将有数分钟无法连接。

更新期间切勿断电 — 刷写中途被打断的摄像机通常只能寄回维修。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1123"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1601"/>
        <source>Install</source>
        <translation>安装</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1460"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1628"/>
        <source>Firmware</source>
        <translation>固件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1638"/>
        <source>Storage</source>
        <translation>存储</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1641"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>格式化会抹掉卡上的每一段录像。无法撤销，之后摄像机也不会再确认。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1658"/>
        <source>Ask the camera</source>
        <translation>询问摄像机</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1662"/>
        <source>Copy the list</source>
        <translation>复制清单</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1665"/>
        <source>Copied.</source>
        <translation>已复制。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1673"/>
        <source>What this camera supports</source>
        <translation>这台摄像机支持什么</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1676"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>Reolink 的固件在不同型号之间差异极大，想可靠地知道一台摄像机能做什么，唯一的办法就是问它。如果您的摄像机明显具备某项功能而 leolink 却没有，把这份清单放进故障报告，正是让它得以补上的关键。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1693"/>
        <source>Maintenance</source>
        <translation>维护</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1726"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>正在询问 %n 条命令…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1743"/>
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
        <location filename="../src/CameraSettingsDialog.cpp" line="1769"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;要重启 %1 吗？&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1771"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>画面会消失约一分钟。此刻正在录制的内容将会停止。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1783"/>
        <source>Asking %1 to restart…</source>
        <translation>正在请求 %1 重启…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1861"/>
        <source>On-screen text</source>
        <translation>画面上的文字</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1863"/>
        <source>Background</source>
        <translation>背景</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1864"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>在文字后面画一个方框，让它在明亮场景下仍然清晰。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1866"/>
        <source>Watermark</source>
        <translation>水印</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1867"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>把标记嵌进录像本身。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1871"/>
        <source>Privacy areas…</source>
        <translation>隐私区域…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1874"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>在任何画面离开摄像机之前，由它遮黑的部分。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1885"/>
        <source>Privacy</source>
        <translation>隐私</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1889"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>在摄像机内部就被遮黑，因此被遮住的部分在任何查看端和任何录像里都不存在 — 邻居的窗户，或者不该入镜的一张办公桌。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1896"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>摄像机会把它烧进画面，因此它出现在每一段录像和每一个客户端里 — 不只是这里。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1904"/>
        <source>Overlay</source>
        <translation>叠加</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1913"/>
        <source>Motion detection in the camera</source>
        <translation>摄像机内的移动侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="498"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1915"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1955"/>
        <source>Sensitivity</source>
        <translation>灵敏度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="572"/>
        <source>nothing</source>
        <translation>不含</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="575"/>
        <source>The seconds leading up to the trigger — usually the part that shows how someone got there. The past cannot be recorded after the fact, so anything above zero keeps the stream running into a buffer: one more connection to the camera, and a little disk.</source>
        <translation>触发前的那几秒——通常正是能看出人是怎么过来的那一段。过去的画面无法事后补录，所以只要大于零，就会把码流持续写进缓冲：多一条到摄像机的连接，以及一点磁盘。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="585"/>
        <source>So an event does not stop mid-scene. Motion that resumes within this time continues the same file instead of starting a second.</source>
        <translation>免得事件在场景中途就断了。在这段时间内重新出现的移动会接着写同一个文件，而不是另起一个。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Include before</source>
        <translation>往前多录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="600"/>
        <source>When something happens</source>
        <translation>发生事情时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="604"/>
        <source>Record without stopping</source>
        <translation>不间断录制</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="609"/>
        <source> h</source>
        <translation> 小时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="612"/>
        <source>How far back the archive reaches. Once it is this old, a file is deleted to make room for the newest one.</source>
        <translation>存档能往回追多久。文件到了这个年纪就会被删掉，给最新的腾地方。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="617"/>
        <source> min</source>
        <translation> 分钟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="620"/>
        <source>The archive is a run of files, not one — a file cannot be trimmed at the front, so keeping a day in one of them would mean rewriting it every minute. Shorter files find a moment more precisely; longer ones are fewer to scroll past.</source>
        <translation>存档是一串文件，不是一个——文件没法从头上剪掉，把一整天塞进一个文件就意味着每分钟重写一遍。文件短，定位某一刻更准；文件长，翻起来更少。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="641"/>
        <source>Keep the last</source>
        <translation>保留最近</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="642"/>
        <source>One file per</source>
        <translation>每个文件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="645"/>
        <source>Round the clock</source>
        <translation>全天候</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="649"/>
        <source>With both switched on, one buffer serves both: the recording of an event is cut out of the archive, so nothing extra is opened to the camera.

Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>两个都打开时，一个缓冲兼顾两者：事件录像直接从存档里剪出来，因此不会再向摄像机多开一条连接。

文件存到哪里对所有摄像机都一样，在「设置 ▸ 录像」中指定。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="685"/>
        <source>%1 hours of video. How much disk that is depends on the bit rate, which this camera has not reported yet.</source>
        <translation>%1 小时的视频。占多少磁盘取决于码率，而这台摄像机还没有报告过。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="693"/>
        <source>About %1 GB at the %2 kbit/s this stream is set to. Make sure the recordings folder has that much to spare.</source>
        <translation>按这条码流设定的 %2 kbit/s 计算，大约 %1 GB。请确认录像文件夹有这么多空间。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1614"/>
        <source>Install from file…</source>
        <translation>从文件安装…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1617"/>
        <source>A .pak from Reolink&apos;s download centre, sent from this computer over port 9000. Unzip the download first.</source>
        <translation>来自 Reolink 下载中心的 .pak，由这台电脑通过 9000 端口发送。请先解压下载的文件。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1916"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>越高察觉得越多，连阴影和车灯也算。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1918"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2436"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2490"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2500"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2506"/>
        <source>Switched on</source>
        <translation>已开启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1924"/>
        <source>Choose the area…</source>
        <translation>选择区域…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1926"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>摄像机监看画面的哪些部分。区域之外的一切都被忽略 — 画面边缘的一条路、风中的一棵树、邻居家的门。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1932"/>
        <source>Where it looks</source>
        <translation>它看向哪里</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1936"/>
        <source>Choose the hours…</source>
        <translation>选择时段…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1941"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>一周的时段：勾选的时段里摄像机会上报移动，其余时段保持沉默。这与它有多灵敏无关 — 灵敏度在下面设置。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1948"/>
        <source>When it reports at all</source>
        <translation>它何时才上报</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1955"/>
        <source>From</source>
        <translation>从</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1955"/>
        <source>To</source>
        <translation>至</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1967"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>在一天之内，摄像机可以更容易或更不容易被触发。夜里车灯不再触发一切，白天也不至于视而不见。分几段由摄像机决定；每段的时间和灵敏度归您。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1975"/>
        <source>How readily it triggers</source>
        <translation>它多容易被触发</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1983"/>
        <source>What it recognises</source>
        <translation>它能识别什么</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1985"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2119"/>
        <source>People</source>
        <translation>人</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1986"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2120"/>
        <source>Vehicles</source>
        <translation>车辆</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1987"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2121"/>
        <source>Animals</source>
        <translation>动物</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1988"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2122"/>
        <source>Faces</source>
        <translation>人脸</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1991"/>
        <source>Camera-side detection</source>
        <translation>摄像机侧侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2010"/>
        <source>Detection</source>
        <translation>侦测</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2087"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — 摄像机的侦测区域</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2088"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>在画面上拖动，选择摄像机监看的范围。变暗的区域会被忽略。这是摄像机自己的网格，%1 × %2，因此比 leolink 的更细。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2105"/>
        <source>%1 — when to watch</source>
        <translation>%1 — 何时监看</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2106"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>摄像机上报移动事件的时段。在此之外它照样看得见，只是不吭声。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2117"/>
        <source>Any movement</source>
        <translation>任何移动</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2118"/>
        <source>Continuous</source>
        <translation>持续</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2150"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>这台摄像机为每类事件单独保存一周的时段表。要哪一个？</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <source>SIM card</source>
        <translation>SIM 卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>只有卡要求时才需要。连错三次会锁卡，届时需要只有运营商才有的 PUK。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2205"/>
        <source>Access point (APN)</source>
        <translation>接入点（APN）</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2208"/>
        <source>Authentication</source>
        <translation>身份验证</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2209"/>
        <source>Use mobile data</source>
        <translation>使用移动数据</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2213"/>
        <source>Modem</source>
        <translation>调制解调器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2215"/>
        <source>Card</source>
        <translation>卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2217"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Signal</source>
        <translation>信号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2219"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2220"/>
        <source>Card number</source>
        <translation>卡号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2224"/>
        <source>Mobile connection</source>
        <translation>移动连接</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2226"/>
        <source>Data used</source>
        <translation>已用流量</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2227"/>
        <source>Monthly limit</source>
        <translation>每月上限</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2235"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;未在真实硬件上验证。&lt;/b&gt;参与 leolink 的人没有一台带调制解调器的摄像机，这部分仅凭协议写成。它不会弄坏任何东西 — 摄像机不认识的命令只会被拒绝 — 但同样可能什么都显示不出来。

如果您的摄像机有 SIM 卡，「维护」下的「这台摄像机支持什么」会列出它的固件实际拥有的命令。把那份清单放进故障报告，正是把这部分做好的前提。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2248"/>
        <source>Mobile data</source>
        <translation>移动数据</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2265"/>
        <source>nothing blanked</source>
        <translation>未遮黑任何区域</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="2267"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>已遮黑 %n 个区域</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="2269"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n 个区域，已关闭</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2351"/>
        <source>%1 — when to record</source>
        <translation>%1 — 何时录像</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2352"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>摄像机录到自己存储卡上的时段。这需要装好存储卡；录到本机是在「摄像机 → 事件」下设置的，无需存储卡。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2430"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2440"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>录到摄像机的存储卡</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2432"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2442"/>
        <source>Overwrite when full</source>
        <translation>写满后覆盖</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2433"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2445"/>
        <source>Record before the event</source>
        <translation>事件前预录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="598"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2434"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2448"/>
        <source>Keep recording after</source>
        <translation>移动结束后继续录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2435"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2449"/>
        <source>File length</source>
        <translation>单个文件长度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2443"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>关闭意味着存储卡写满后录制就直接停止。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2446"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>保留触发之前的那几秒，通常那才是有意思的部分。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2452"/>
        <source>When to record…</source>
        <translation>何时录像…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2455"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>摄像机自行录到存储卡上的每周时段。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2465"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>这些决定摄像机往自己存储卡上写什么。录到本机是在「摄像机 → 事件」下设置的，无需存储卡。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="662"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2473"/>
        <source>Recording</source>
        <translation>录像</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="444"/>
        <source>The camera reports it (ONVIF or Baichuan)</source>
        <translation>摄像机本身（ONVIF / Baichuan）</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2000"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF or Baichuan. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>这是摄像机自己的侦测，也就是它通过 ONVIF / Baichuan 上报的那一种。leolink 自行分析画面是另行设置的，在「摄像机 → 事件」下。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2481"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2509"/>
        <source>E-mail</source>
        <translation>电子邮件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2483"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2495"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2511"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2548"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2605"/>
        <source>Server</source>
        <translation>服务器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2484"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2496"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2512"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2549"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2606"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2487"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2516"/>
        <source>Encrypted</source>
        <translation>加密</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2488"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2517"/>
        <source>Not more often than</source>
        <translation>最短间隔</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2489"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2518"/>
        <source>Attach</source>
        <translation>附带</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2493"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2546"/>
        <source>FTP upload</source>
        <translation>FTP 上传</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2499"/>
        <source>Folder</source>
        <translation>文件夹</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2504"/>
        <source>Push notifications</source>
        <translation>推送通知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2515"/>
        <source>Send to</source>
        <translation>发送至</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2527"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2534"/>
        <source>Siren</source>
        <translation>警报器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2529"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2536"/>
        <source>Sound on an alarm</source>
        <translation>报警时鸣响</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2530"/>
        <source>Times</source>
        <translation>时段</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2531"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2542"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2553"/>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2539"/>
        <source>Spotlight</source>
        <translation>照明灯</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2541"/>
        <source>On</source>
        <translation>开</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2552"/>
        <source>Directory</source>
        <translation>目录</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2557"/>
        <source>Push notification</source>
        <translation>推送通知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2559"/>
        <source>Schedule</source>
        <translation>时段</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2565"/>
        <source>Send a test e-mail</source>
        <translation>发送测试邮件</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2568"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>正在请求摄像机发送测试邮件…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2571"/>
        <source>Test the FTP upload</source>
        <translation>测试 FTP 上传</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2574"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>正在请求摄像机试连 FTP 服务器…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2585"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>由摄像机自己发送，因此这台电脑关机时它们照常工作。leolink 自己的反应 — 命令、Webhook、MQTT — 在「摄像机 → 事件」下。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2594"/>
        <source>Alerts</source>
        <translation>告警</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2602"/>
        <source>Time server</source>
        <translation>时间服务器</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2604"/>
        <source>Synchronise the clock</source>
        <translation>同步时钟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2607"/>
        <source>Every</source>
        <translation>每隔</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2611"/>
        <source>Scheduled restart</source>
        <translation>定时重启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2613"/>
        <source>Restart regularly</source>
        <translation>定期重启</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2614"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>有些摄像机连续运行数周后会变得不稳定；每周重启一次是一剂便宜的良方。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2617"/>
        <source>Day</source>
        <translation>星期</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2618"/>
        <source>Hour</source>
        <translation>小时</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2619"/>
        <source>Minute</source>
        <translation>分钟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2623"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>时钟不准的摄像机会给录像打上错误的时间，等到要找某一段时，这比听上去要紧得多。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2631"/>
        <source>Time</source>
        <translation>时间</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2767"/>
        <source>Ready.</source>
        <translation>就绪。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2872"/>
        <source>Writing to the camera…</source>
        <translation>正在写入摄像机…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2939"/>
        <source>Nothing to write.</source>
        <translation>没有要写入的内容。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2956"/>
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
        <location filename="../src/EventActions.cpp" line="116"/>
        <location filename="../src/EventActions.cpp" line="123"/>
        <source>Command</source>
        <translation>命令</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="116"/>
        <source>could not be started</source>
        <translation>无法启动</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="134"/>
        <location filename="../src/EventActions.cpp" line="172"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="134"/>
        <source>invalid URL</source>
        <translation>地址无效</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="178"/>
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
    <name>leolink::HandbookWindow</name>
    <message>
        <location filename="../src/HandbookWindow.cpp" line="103"/>
        <source>leolink handbook</source>
        <translation>leolink 手册</translation>
    </message>
    <message>
        <location filename="../src/HandbookWindow.cpp" line="122"/>
        <source>Back</source>
        <translation>后退</translation>
    </message>
    <message>
        <location filename="../src/HandbookWindow.cpp" line="123"/>
        <source>Forward</source>
        <translation>前进</translation>
    </message>
    <message>
        <location filename="../src/HandbookWindow.cpp" line="124"/>
        <source>Contents</source>
        <translation>目录</translation>
    </message>
    <message>
        <location filename="../src/HandbookWindow.cpp" line="125"/>
        <source>Protocol notes</source>
        <translation>协议笔记</translation>
    </message>
    <message>
        <location filename="../src/HandbookWindow.cpp" line="126"/>
        <source>View on the web</source>
        <translation>在网页上查看</translation>
    </message>
    <message>
        <location filename="../src/HandbookWindow.cpp" line="127"/>
        <source>This page on GitHub, as it was for leolink %1</source>
        <translation>此页面在 GitHub 上对应 leolink %1 的版本</translation>
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
        <location filename="../src/MainWindow.cpp" line="84"/>
        <source>%1 failed: %2</source>
        <translation>%1 失败：%2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="123"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>还没有配置任何摄像机。

请通过「摄像机…」添加一台。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="135"/>
        <source>Asking the cameras what they offer…</source>
        <translation>正在询问摄像机支持哪些功能…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="297"/>
        <source>&amp;File</source>
        <translation>文件(&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="299"/>
        <source>&amp;Cameras…</source>
        <translation>摄像机(&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="304"/>
        <source>&amp;Settings…</source>
        <translation>设置(&amp;S)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="310"/>
        <source>&amp;Save snapshots…</source>
        <translation>保存快照(&amp;S)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="315"/>
        <source>&amp;Record all cameras</source>
        <translation>录制所有摄像机(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="322"/>
        <source>&amp;Event log…</source>
        <translation>事件日志(&amp;E)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>摄像机上的录像(&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="332"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>浏览摄像机自己存储卡上的内容。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="336"/>
        <location filename="../src/MainWindow.cpp" line="775"/>
        <location filename="../src/MainWindow.cpp" line="2143"/>
        <source>No cameras configured</source>
        <translation>尚未配置摄像机</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="347"/>
        <source>Which camera</source>
        <translation>哪台摄像机</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="347"/>
        <source>Show recordings from</source>
        <translation>显示以下摄像机的录像</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="359"/>
        <source>Open &amp;recordings folder</source>
        <translation>打开录像文件夹(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="367"/>
        <source>&amp;Quit</source>
        <translation>退出(&amp;Q)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="372"/>
        <source>&amp;View</source>
        <translation>视图(&amp;V)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="374"/>
        <source>&amp;Full screen</source>
        <translation>全屏(&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="413"/>
        <source>Show &amp;menu bar</source>
        <translation>显示菜单栏(&amp;M)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="427"/>
        <source>Show &amp;toolbar</source>
        <translation>显示工具栏(&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="436"/>
        <source>Show status &amp;bar</source>
        <translation>显示状态栏(&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="445"/>
        <source>Hide window &amp;decoration</source>
        <translation>隐藏窗口边框(&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="457"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>拖动摄像机下方的横条可移动窗口。Ctrl+Shift+D 找回边框，Ctrl+M 找回菜单。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="464"/>
        <source>&amp;Help</source>
        <translation>帮助(&amp;H)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="475"/>
        <source>&amp;Protocol notes</source>
        <translation>协议笔记(&amp;P)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="479"/>
        <source>&amp;Diagnostics…</source>
        <translation>诊断(&amp;D)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="482"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>leolink 和摄像机都做了些什么 — 以及可附在故障报告里的报告。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="486"/>
        <source>&amp;Report a problem</source>
        <translation>报告问题(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="491"/>
        <source>Report a problem</source>
        <translation>报告问题</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="493"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;请附上诊断报告&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="495"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>它记录了您的机器是什么、摄像机回答了什么，以及问题出在哪里 — 密码和地址都已删除。没有它，多数报告无从跟进。

如果这个问题您能自己触发，请先在诊断窗口打开详细日志，让它再发生一次，然后复制报告。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="502"/>
        <source>Open diagnostics</source>
        <translation>打开诊断</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="504"/>
        <source>Go to the issue tracker</source>
        <translation>前往问题追踪页</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="515"/>
        <source>&amp;About leolink</source>
        <translation>关于 leolink(&amp;A)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="518"/>
        <source>About leolink</source>
        <translation>关于 leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="531"/>
        <source>Main</source>
        <translation>主</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="543"/>
        <source>Ready</source>
        <translation>就绪</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="559"/>
        <source>Leave full screen</source>
        <translation>退出全屏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="566"/>
        <location filename="../src/MainWindow.cpp" line="630"/>
        <source>Cameras…</source>
        <translation>摄像机…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="568"/>
        <source>Event log…</source>
        <translation>事件日志…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="574"/>
        <location filename="../src/MainWindow.cpp" line="633"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="624"/>
        <source>Show window</source>
        <translation>显示窗口</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="800"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n 台摄像机在线</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1109"/>
        <source>Esc leaves full screen</source>
        <translation>Esc 退出全屏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1116"/>
        <location filename="../src/MainWindow.cpp" line="1155"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>双击返回网格 · Esc 退出全屏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1153"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Esc 退出全屏 · 双击某台摄像机可让它铺满屏幕</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1178"/>
        <source>Grid view</source>
        <translation>网格视图</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1364"/>
        <location filename="../src/MainWindow.cpp" line="1382"/>
        <location filename="../src/MainWindow.cpp" line="1617"/>
        <source>Cannot create %1</source>
        <translation>无法创建 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1507"/>
        <source>Recording %1</source>
        <translation>正在录制 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1429"/>
        <location filename="../src/MainWindow.cpp" line="1515"/>
        <source>Saved %1</source>
        <translation>已保存 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="469"/>
        <source>&amp;Handbook</source>
        <translation>手册(&amp;H)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="519"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly, on the local network: the HTTP API, RTSP, ONVIF, and Reolink&apos;s own Baichuan for cameras without a web server.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;面向 Reolink 摄像机的 Linux 原生客户端。&lt;/p&gt;&lt;p&gt;在局域网内直接讲摄像机自己的协议：HTTP 接口、RTSP、ONVIF，以及用于没有 Web 服务器的摄像机的 Reolink 自有协议 Baichuan。&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;手册&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;源代码&lt;/a&gt;&lt;/p&gt;&lt;p&gt;与 Reolink 无关，也未获其背书。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1521"/>
        <location filename="../src/MainWindow.cpp" line="1652"/>
        <source>Recording stopped</source>
        <translation>录制已停止</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1528"/>
        <source>%1: %2</source>
        <translation>%1：%2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1633"/>
        <source>Recording started</source>
        <translation>录制已开始</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1651"/>
        <source>Recording all cameras</source>
        <translation>正在录制所有摄像机</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1732"/>
        <source>%1 at %2</source>
        <translation>%2 处的 %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1752"/>
        <source>Motion detected</source>
        <translation>侦测到移动</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1764"/>
        <source>Sound detected</source>
        <translation>侦测到声音</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1787"/>
        <source>Menu bar hidden</source>
        <translation>菜单栏已隐藏</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1788"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>菜单栏和工具栏都隐藏时，按 Ctrl+M 可把菜单调回来。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1807"/>
        <source>Cannot save</source>
        <translation>无法保存</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1808"/>
        <source>Settings could not be written to %1.</source>
        <translation>设置无法写入 %1。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1953"/>
        <source>The camera would not move: %1</source>
        <translation>摄像头未能转动：%1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2078"/>
        <source>Play through %1</source>
        <translation>通过 %1 播放</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2079"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>声音文件 (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;所有文件 (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2091"/>
        <source>Speaking through the camera…</source>
        <translation>正通过摄像机讲话…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2098"/>
        <source>Finished.</source>
        <translation>已完成。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2234"/>
        <source>Nothing to capture</source>
        <translation>没有可截取的内容</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2239"/>
        <source>Save snapshots to</source>
        <translation>快照保存到</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="2257"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>已保存 %n 张快照</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2275"/>
        <source>Welcome to leolink</source>
        <translation>欢迎使用 leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2277"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;还没有配置任何摄像机。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2279"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>用地址、用户名和密码添加一台摄像机。leolink 在您自己的网络里直接与摄像机通信 — 不涉及任何云账号。&lt;p&gt;各个选项的作用请见手册。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2283"/>
        <source>Add camera…</source>
        <translation>添加摄像机…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2284"/>
        <source>Open handbook</source>
        <translation>打开手册</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2367"/>
        <source>leolink is still running</source>
        <translation>leolink 仍在运行</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2368"/>
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
        <location filename="../src/MotionDetector.cpp" line="60"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>未安装 ffmpeg，因此无法进行移动侦测。</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="101"/>
        <source>No stream address for %1.</source>
        <translation>%1 没有码流地址。</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="132"/>
        <source>Motion detection stopped: %1</source>
        <translation>移动侦测已停止：%1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="157"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>无法为移动侦测启动 ffmpeg。</translation>
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
    <name>leolink::OnvifEvents</name>
    <message>
        <location filename="../src/OnvifEvents.cpp" line="200"/>
        <location filename="../src/OnvifEvents.cpp" line="254"/>
        <source>ONVIF subscription failed.</source>
        <translation>ONVIF 订阅失败。</translation>
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
    <name>leolink::PtzPad</name>
    <message>
        <location filename="../src/PtzPad.cpp" line="21"/>
        <source>Up and left</source>
        <translation>左上</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="22"/>
        <source>Up</source>
        <translation>上</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="23"/>
        <source>Up and right</source>
        <translation>右上</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="24"/>
        <source>Left</source>
        <translation>左</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="25"/>
        <source>Right</source>
        <translation>右</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="26"/>
        <source>Down and left</source>
        <translation>左下</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="27"/>
        <source>Down</source>
        <translation>下</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="28"/>
        <source>Down and right</source>
        <translation>右下</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="30"/>
        <source>Zoom in</source>
        <translation>放大</translation>
    </message>
    <message>
        <location filename="../src/PtzPad.cpp" line="31"/>
        <source>Zoom out</source>
        <translation>缩小</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="56"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>未安装 ffmpeg，因此无法录制。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="64"/>
        <source>No stream address for %1.</source>
        <translation>%1 没有码流地址。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="105"/>
        <source>Recording failed: %1</source>
        <translation>录制失败：%1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="137"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>录制没有产生数据（ffmpeg 退出码 %1）。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="153"/>
        <source>Could not start ffmpeg.</source>
        <translation>无法启动 ffmpeg。</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="220"/>
        <source>File format not recognised.</source>
        <translation>无法识别的文件格式。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="221"/>
        <source>Invalid input.</source>
        <translation>输入无效。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="222"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>摄像机没有空闲会话。它一次只允许寥寥几个，还要与手机应用和它的网页共用。请关掉那些，或者等一分钟让旧会话失效。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="226"/>
        <source>Session expired.</source>
        <translation>会话已过期。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="227"/>
        <source>Wrong user name or password.</source>
        <translation>用户名或密码不正确。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="228"/>
        <source>Timed out.</source>
        <translation>已超时。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="229"/>
        <source>This firmware does not support that command.</source>
        <translation>此固件不支持该命令。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="230"/>
        <source>Could not read the configuration.</source>
        <translation>无法读取配置。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="231"/>
        <source>Could not verify the configuration.</source>
        <translation>无法验证配置。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="232"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>摄像机的一部分没有回应。视询问内容而定，这意味着没有装存储卡，或者摄像机没有互联网出路。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="235"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>不允许 — 此型号没有相应硬件。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="236"/>
        <source>Account invalid, log in again.</source>
        <translation>账号无效，请重新登录。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="237"/>
        <source>User name already taken.</source>
        <translation>该用户名已被占用。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="238"/>
        <source>Maximum number of users reached.</source>
        <translation>已达到用户数量上限。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="239"/>
        <source>Camera busy, try again shortly.</source>
        <translation>摄像机忙，请稍后再试。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="240"/>
        <source>IP address conflict.</source>
        <translation>IP 地址冲突。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="241"/>
        <source>Configuration test failed.</source>
        <translation>配置测试失败。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="242"/>
        <source>FTP login failed.</source>
        <translation>FTP 登录失败。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="243"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP 无法创建目录。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="244"/>
        <source>FTP upload failed.</source>
        <translation>FTP 上传失败。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="245"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP 无法连上服务器。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="246"/>
        <source>Camera reported error %1.</source>
        <translation>摄像机报告错误 %1。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="453"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>摄像机此刻不回应请求。当它一次收到太多请求时就会这样；过一会儿它会自行恢复。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="513"/>
        <source>Cannot reach %1: %2</source>
        <translation>无法连上 %1：%2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="502"/>
        <source>Unexpected reply from %1.</source>
        <translation>来自 %1 的意外应答。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="496"/>
        <source>Not available without the camera&apos;s web server.</source>
        <translation>没有摄像机的 Web 服务器时不可用。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="597"/>
        <source>Login returned no token.</source>
        <translation>登录没有返回令牌。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="636"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — 固件 %2，%3 个通道</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="986"/>
        <source>The camera could not join that network: %1</source>
        <translation>摄像机无法加入该网络：%1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="996"/>
        <source>E-mail</source>
        <translation>电子邮件</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1006"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1046"/>
        <source>Update available: %1</source>
        <translation>有可用更新：%1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1047"/>
        <source>The firmware is up to date.</source>
        <translation>固件已是最新。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1064"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>正在升级。摄像机会自行重启，并有数分钟无法连接。切勿断电。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1078"/>
        <source>Installing from a file needs the camera&apos;s port 9000, which it does not offer.</source>
        <translation>从文件安装需要摄像头的 9000 端口，但它未开放。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1095"/>
        <source>Sent. The camera is installing it and will restart on its own, unreachable for several minutes. Do not cut its power.</source>
        <translation>已发送。摄像头正在安装并会自行重启，数分钟内无法访问。请勿断电。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1171"/>
        <source>The camera restarted on %1, the build it had before, so the update was not installed.</source>
        <translation>摄像头以之前的版本 %1 重启，因此更新未安装。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/ReolinkClient.cpp" line="1177"/>
        <source>The camera has not answered for %n minute(s). It may still be installing; leave its power on and look again later.</source>
        <translation><numerusform>摄像头已 %n 分钟没有响应。它可能仍在安装；请保持通电，稍后再查看。</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/ReolinkClient.cpp" line="1180"/>
        <source>The camera still reports %1 after %n minute(s).</source>
        <translation><numerusform>%n 分钟后摄像头仍报告 %1。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1292"/>
        <source>Snapshots from %1 need its web server, which it does not have.</source>
        <translation>%1 的快照需要它的 Web 服务器，但它没有。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1312"/>
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
        <location filename="../src/SegmentBuffer.cpp" line="84"/>
        <source>ffmpeg is not installed, so continuous recording is unavailable.</source>
        <translation>未安装 ffmpeg，因此无法不间断录制。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="89"/>
        <source>No stream address for %1.</source>
        <translation>%1 没有码流地址。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="93"/>
        <location filename="../src/SegmentBuffer.cpp" line="284"/>
        <source>Cannot write to %1.</source>
        <translation>无法写入 %1。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="260"/>
        <source>Nothing had been buffered yet.</source>
        <translation>缓冲里还什么都没有。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="275"/>
        <source>That moment is no longer in the buffer.</source>
        <translation>那一刻已经不在缓冲里了。</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="330"/>
        <source>The recording could not be cut out of the buffer.</source>
        <translation>无法从缓冲中剪出这段录像。</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <location filename="../src/SettingsDialog.cpp" line="46"/>
        <source>Cameras</source>
        <translation>摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="47"/>
        <source>Layout</source>
        <translation>布局</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="98"/>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="99"/>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="103"/>
        <source>Scan network…</source>
        <translation>扫描网络…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="105"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>向网络询问有哪些 ONVIF 摄像机。只发出一次组播探询；保持沉默的设备绝不会被联系。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="120"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 或 camera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>optional: pass show reolink/hall</source>
        <translation>可选：pass show reolink/menting</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>若已填写，则运行该命令，并把它的输出用作密码。这样密码就不必写进配置文件。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>This configuration file</source>
        <translation>本配置文件</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="133"/>
        <source>A command</source>
        <translation>一条命令</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="134"/>
        <source>The system keyring</source>
        <translation>系统密钥环</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="137"/>
        <source>Where this camera&apos;s password is kept.

The configuration file holds it in clear text, readable only by you (mode 600). A command — pass, secret-tool, anything that prints the password — keeps it out of the file. The system keyring stores it in the desktop&apos;s own secret service.

The keyring is usually locked until somebody logs in, so a machine that starts unattended and shows cameras on a wall is better served by the file or by a command.</source>
        <translation>这台摄像机的密码存放在哪里。

配置文件以明文保存，只有你能读取（模式 600）。命令 — pass、secret-tool，任何能打印密码的东西 — 可让密码不进入文件。系统密钥环把它交给桌面自己的机密服务。

密钥环通常在有人登录前处于锁定状态，因此无人值守启动、在墙上显示画面的机器更适合用文件或命令。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>optional, not used yet</source>
        <translation>可选，暂未使用</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="168"/>
        <source>Which input of the device this is. Leave at 0 for a camera.

An NVR answers for all of its cameras on one address, one login and one port, and the channel is the only thing that tells them apart. Testing the connection to a recorder offers to add them all, so this rarely has to be set by hand.</source>
        <translation>这是设备的哪一路输入。摄像机保持为 0。

NVR 用一个地址、一个登录和一个端口代所有摄像机应答，区分它们的只有通道。测试与录像机的连接时会提示把它们全部添加，因此很少需要手动设置。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>任何 libmpv 能打开的地址。可用于其他厂商的摄像机、NVR 码流或本地文件。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="181"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>子码流（带宽小）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="182"/>
        <source>Main stream (full resolution)</source>
        <translation>主码流（完整分辨率）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="185"/>
        <source>Automatic (HTTP-FLV, then RTSP, then Baichuan)</source>
        <translation>自动（HTTP-FLV，然后 RTSP，然后 Baichuan）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="187"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="188"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV（延迟更低）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="189"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan（摄像机自有协议）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="191"/>
        <location filename="../src/SettingsDialog.cpp" line="217"/>
        <source>Custom URL</source>
        <translation>自定义地址</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="193"/>
        <source>Automatic asks the camera what it offers and takes the first of HTTP-FLV, RTSP and Baichuan, cheapest for this computer first. If one never shows a picture it moves on to the next.

RTSP suits most cameras.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>自动模式会询问摄像机支持什么，并按对本机开销从小到大的顺序，选用 HTTP-FLV、RTSP 和 Baichuan 中第一个可用的。如果某一种始终没有画面，就换下一种。

RTSP 适合大多数摄像机。

HTTP-FLV 只需要 80 端口，在 RTSP 被封的地方很有用。

Baichuan 是 Reolink 自家应用所讲的协议。对于把 RTSP 关掉的摄像机 — 电池款就是如此 — 它就是答案，而且不占用摄像机那少得可怜的 Web 会话。仅限视频：声音仍走 RTSP。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="203"/>
        <source>Use HTTPS for the control API</source>
        <translation>控制接口使用 HTTPS</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="204"/>
        <source>Show this camera</source>
        <translation>显示这台摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="208"/>
        <source>Host</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="209"/>
        <source>User</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="210"/>
        <source>Password kept in</source>
        <translation>密码存放于</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="211"/>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="212"/>
        <source>Password command</source>
        <translation>取密码的命令</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="213"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="214"/>
        <source>Channel</source>
        <translation>通道</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="215"/>
        <source>Stream</source>
        <translation>码流</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <source>Transport</source>
        <translation>传输</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="230"/>
        <source>Test connection</source>
        <translation>测试连接</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="242"/>
        <source>Settings for this camera…</source>
        <translation>这台摄像机的设置…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="244"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>leolink 侧的侦测、响应与录像，以及摄像机自身的编码器、画面和时段。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="274"/>
        <location filename="../src/SettingsDialog.cpp" line="283"/>
        <location filename="../src/SettingsDialog.cpp" line="302"/>
        <source>automatic</source>
        <translation>自动</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="291"/>
        <source>Columns</source>
        <translation>列数</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="292"/>
        <source>Rows</source>
        <translation>行数</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="294"/>
        <source>Grid size</source>
        <translation>网格大小</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="319"/>
        <source>Row</source>
        <translation>行</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="320"/>
        <source>Column</source>
        <translation>列</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="321"/>
        <source>Row span</source>
        <translation>跨行</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="322"/>
        <source>Column span</source>
        <translation>跨列</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="324"/>
        <source>Position of the selected camera</source>
        <translation>所选摄像机的位置</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="335"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>把行和列留在「自动」，摄像机就会按顺序填满网格。通过跨格，一台摄像机可以占据多个格子。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="494"/>
        <location filename="../src/SettingsDialog.cpp" line="722"/>
        <source>New camera</source>
        <translation>新摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="512"/>
        <source>Remove camera</source>
        <translation>移除摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="513"/>
        <source>Remove “%1” from the list?</source>
        <translation>要把「%1」从列表中移除吗？</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="541"/>
        <source>type it once; it moves to the keyring when you save</source>
        <translation>输入一次；保存时会移入密钥环</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="542"/>
        <source>no keyring is answering — it will stay in the file</source>
        <translation>没有密钥环响应 — 密码将留在文件中</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="556"/>
        <source>Enter a host first.</source>
        <translation>请先填写地址。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="563"/>
        <source>Contacting %1…</source>
        <translation>正在联系 %1…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="646"/>
        <source>Cameras on this recorder</source>
        <translation>此录像机上的摄像机</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="649"/>
        <source>%1 answers for %n channel(s). Which of them should be added?</source>
        <translation><numerusform>%1 代 %n 个通道应答。要添加其中哪些？</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="668"/>
        <location filename="../src/SettingsDialog.cpp" line="739"/>
        <source>Channel %1</source>
        <translation>通道 %1</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="670"/>
        <source>%1 — %2</source>
        <translation>%1 — %2</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="672"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="674"/>
        <source>%1 — already in the list</source>
        <translation>%1 — 已在列表中</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="676"/>
        <source>%1 — nothing connected</source>
        <translation>%1 — 未接任何设备</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="688"/>
        <source>All</source>
        <translation>全选</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="689"/>
        <source>None</source>
        <translation>全不选</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="767"/>
        <source>Added %n camera(s) from this recorder.</source>
        <translation><numerusform>已从此录像机添加 %n 台摄像机。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="776"/>
        <source>Looking for cameras…</source>
        <translation>正在查找摄像机…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="776"/>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="790"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>已找到 %n 台设备…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="800"/>
        <source>No cameras found</source>
        <translation>未找到摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="801"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>没有 ONVIF 设备回应。

摄像机只有在开启 ONVIF 时才会回答，而探询既穿不过路由器，也穿不过多数 VPN。您仍可以手动输入地址来添加摄像机。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="827"/>
        <source>unnamed device</source>
        <translation>未命名设备</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="828"/>
        <source> (Reolink)</source>
        <translation>（Reolink）</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="829"/>
        <source>  · already added</source>
        <translation>  · 已添加</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="835"/>
        <source>Cameras found</source>
        <translation>找到摄像机</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="836"/>
        <source>Add which one?</source>
        <translation>添加哪一台？</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="880"/>
        <source>Incomplete camera</source>
        <translation>摄像机信息不完整</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="881"/>
        <source>“%1” has no host address.</source>
        <translation>「%1」没有地址。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="897"/>
        <source>The keyring would not take it</source>
        <translation>密钥环未接受</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="898"/>
        <source>“%1” could not be saved in the system keyring: %2

Its password has been left in the configuration file.</source>
        <translation>“%1”无法保存到系统密钥环：%2

其密码仍留在配置文件中。</translation>
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
        <location filename="../src/TalkSession.cpp" line="165"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>发送声音需要 ffmpeg，而它未能启动。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="278"/>
        <source>The camera rejected the user name or password.</source>
        <translation>摄像机拒绝了该用户名或密码。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="287"/>
        <source>The camera refused: %1</source>
        <translation>摄像机已拒绝：%1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="322"/>
        <source>This camera does not offer a speaker.</source>
        <translation>这台摄像机没有扬声器。</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="149"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>码流已结束（%1）— 正在重连</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="209"/>
        <source>WEAK SIGNAL</source>
        <translation>信号弱</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="209"/>
        <source>BAD STREAM</source>
        <translation>码流异常</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="216"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>最近十秒内有 %n 帧损坏。

通常是 Wi-Fi 信号弱，或者码率相对分辨率设得太低。leolink 能修的都修了 — 这些是修不了的。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="228"/>
        <location filename="../src/VideoTile.cpp" line="239"/>
        <location filename="../src/VideoTile.cpp" line="285"/>
        <source>connecting…</source>
        <translation>正在连接…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="300"/>
        <location filename="../src/VideoTile.cpp" line="760"/>
        <source>Mute this camera</source>
        <translation>静音这台摄像机</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <source>Volume</source>
        <translation>音量</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="316"/>
        <location filename="../src/VideoTile.cpp" line="1087"/>
        <source>Record this camera</source>
        <translation>录制这台摄像机</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="327"/>
        <location filename="../src/VideoTile.cpp" line="1065"/>
        <source>Speak through the camera</source>
        <translation>通过摄像机讲话</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="338"/>
        <source>Turn the camera</source>
        <translation>转动摄像头</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="360"/>
        <source>Camera settings</source>
        <translation>摄像机设置</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="477"/>
        <source>no host configured</source>
        <translation>未填写地址</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="563"/>
        <source>connecting over Baichuan…</source>
        <translation>正通过 Baichuan 连接…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="587"/>
        <location filename="../src/VideoTile.cpp" line="1007"/>
        <source>custom stream</source>
        <translation>自定义流</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="589"/>
        <location filename="../src/VideoTile.cpp" line="1009"/>
        <source>main stream</source>
        <translation>主码流</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="590"/>
        <location filename="../src/VideoTile.cpp" line="1010"/>
        <source>sub stream</source>
        <translation>子码流</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="759"/>
        <source>Unmute this camera</source>
        <translation>取消这台摄像机的静音</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="777"/>
        <source>MOTION</source>
        <translation>移动</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="895"/>
        <location filename="../src/VideoTile.cpp" line="915"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>摄像机正在重新配置… %1 秒</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="917"/>
        <source>camera is reconfiguring…</source>
        <translation>摄像机正在重新配置…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="982"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>码流丢失 — 正在重连（%1）</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1013"/>
        <source>%1 fps</source>
        <translation>%1 fps</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1016"/>
        <source>%1 Mbit/s</source>
        <translation>%1 Mbit/s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1017"/>
        <source>%1 kbit/s</source>
        <translation>%1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1064"/>
        <source>Stop speaking</source>
        <translation>结束讲话</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1086"/>
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
<context>
    <name>leolink::firmware</name>
    <message>
        <location filename="../src/Firmware.cpp" line="48"/>
        <source>This is not named like a Reolink firmware package (board.build_date…pak). Use the .pak from inside the zip Reolink&apos;s download centre gives.</source>
        <translation>文件名不像 Reolink 固件包（主板.版本_日期…pak）。请使用 Reolink 下载中心 zip 包中的 .pak 文件。</translation>
    </message>
    <message>
        <location filename="../src/Firmware.cpp" line="53"/>
        <source>This file does not look like a Reolink firmware package.</source>
        <translation>此文件看起来不是 Reolink 固件包。</translation>
    </message>
    <message>
        <location filename="../src/Firmware.cpp" line="55"/>
        <source>The camera has not said which board it has, so no package can be checked against it.</source>
        <translation>摄像头未报告其主板，因此无法核对任何固件包。</translation>
    </message>
    <message>
        <location filename="../src/Firmware.cpp" line="58"/>
        <source>This package is for %1, and the camera is %2. Installing firmware for another board can leave a camera that no longer starts.</source>
        <translation>此固件包适用于 %1，而摄像头是 %2。安装其他主板的固件可能导致摄像头无法启动。</translation>
    </message>
    <message>
        <location filename="../src/Firmware.cpp" line="63"/>
        <source>Build %1 is already installed.</source>
        <translation>版本 %1 已安装。</translation>
    </message>
    <message>
        <location filename="../src/Firmware.cpp" line="65"/>
        <source>Build %1 is older than the installed %2. leolink only installs newer firmware.</source>
        <translation>版本 %1 比已安装的 %2 更旧。leolink 只安装更新的固件。</translation>
    </message>
</context>
</TS>
