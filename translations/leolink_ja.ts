<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja" sourcelanguage="en">
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n カメラ名 · %h アドレス · %t 時刻 · %e イベント · %s オン/オフ · %f 録画 · %p 画像</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>コマンドを実行する</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="41"/>
        <location filename="../src/ActionEditor.cpp" line="44"/>
        <source>Command</source>
        <translation>コマンド</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="50"/>
        <source>Call a webhook</source>
        <translation>Webhook を呼び出す</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>空のままなら、leolink がイベントを説明する小さな JSON 文書を送ります。</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>アドレス</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>メソッド</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>本文</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>MQTT メッセージを配信する</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>空のまま: Webhook と同じ JSON 文書。</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>最後のメッセージをブローカーに残す</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>あとから接続したクライアントが、次のイベントを待たずに現在の状態をすぐ知れます。ホームオートメーションでたいてい必要になるのはこちらです。</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>ブローカー</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>ポート</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>トピック</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>ユーザー</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>パスワード</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>ペイロード</translation>
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
        <translation>ffmpeg が入っていないため、音の検知は使えません。</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>%1 のストリームアドレスがありません。</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="101"/>
        <source>Sound detection stopped: %1</source>
        <translation>音の検知を停止しました: %1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="106"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>音の検知用の ffmpeg を起動できませんでした。</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="52"/>
        <source>Cannot open a local port: %1</source>
        <translation>ローカルポートを開けません: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="64"/>
        <source>Baichuan login failed: %1</source>
        <translation>Baichuan のログインに失敗しました: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="72"/>
        <source>The camera refused to send video: %1</source>
        <translation>カメラが映像の送信を拒否しました: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="80"/>
        <source>The player did not connect.</source>
        <translation>プレーヤーが接続しませんでした。</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="132"/>
        <source>The camera stopped sending.</source>
        <translation>カメラが送信を止めました。</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="77"/>
        <source>Camera</source>
        <translation>カメラ</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="124"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="132"/>
        <source>Reading settings from %1…</source>
        <translation>%1 から設定を読み込んでいます…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="137"/>
        <source>Apply to camera</source>
        <translation>カメラに適用</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="168"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>再起動しています。カメラは 1 分ほどで戻ります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="184"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>保存しました。カメラは再接続中で、まもなく戻ります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="190"/>
        <source>%1: the camera reported success.</source>
        <translation>%1: カメラは成功したと報告しました。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="198"/>
        <source>Processor load %1 %</source>
        <translation>プロセッサー負荷 %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="203"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>エンコーダー出力 %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="205"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>ネットワーク帯域 %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="207"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>カメラは限界に来ています。解像度かフレームレートを下げると落ち着きます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="227"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Administrator</source>
        <translation>管理者</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Viewer</source>
        <translation>閲覧者</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="253"/>
        <source>Done.</source>
        <translation>完了しました。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="258"/>
        <source>The card has been formatted.</source>
        <translation>カードを初期化しました。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="560"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>高いほど画質は良く、ネットワークの負荷も増えます。カメラは実際に維持できる値だけを示します。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="564"/>
        <source>Resolution</source>
        <translation>解像度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="565"/>
        <source>Frame rate</source>
        <translation>フレームレート</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="566"/>
        <source>Bit rate (kbit/s)</source>
        <translation>ビットレート (kbit/s)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="567"/>
        <source>H.264 profile</source>
        <translation>H.264 プロファイル</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="575"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>これはカメラ自体を変更するので、結果はどのソフトからも見えます。選択肢はカメラから来るもので、機種ごとに異なります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="588"/>
        <source>Send sound</source>
        <translation>音声を送る</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="591"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>カメラのマイクです。これをオフにしても、ストリームには音声トラックが入ります — 完全な無音のものが。トラックが無い場合よりずっと気づきにくくなります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="431"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Sound</source>
        <translation>音声</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>leolink 側</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="111"/>
        <source>In the camera</source>
        <translation>カメラ側</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="127"/>
        <source>Try again</source>
        <translation>再試行</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="331"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>カメラ自身 (ONVIF)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="333"/>
        <source>leolink watches the picture</source>
        <translation>leolink が映像を見る</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="335"/>
        <source>Either of the two</source>
        <translation>どちらでも</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="336"/>
        <source>Do not watch</source>
        <translation>見張らない</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="345"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;カメラが知らせる:&lt;/b&gt; カメラ自身の検知器が判断し、ONVIF イベントを送ります。何を見張り、どれくらい起きやすいかは、下の「検知」— カメラ自身の設定 — で決めます。&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink が映像を見る:&lt;/b&gt; このコンピューターがサブストリームへもう 1 本接続して映像を解析します。何も知らせないカメラを含め、どのカメラでも使え、その場合カメラ自身の検知器は関係ありません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="356"/>
        <source>Choose what is watched…</source>
        <translation>見張る範囲を選ぶ…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="364"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>映像上の一点がどれだけ変われば数えるか。高いほど多くを拾い、影や雨も拾います。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="369"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="372"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>見張っている面積のどれだけが変われば動きとみなすか。20 ‰ は画面の 2 パーセント — おおよそ中距離の人ひとりぶんです。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="377"/>
        <source>Motion comes from</source>
        <translation>動きを知らせるのは</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="380"/>
        <source>How leolink learns of motion</source>
        <translation>leolink が動きを知る経路</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="386"/>
        <source>Minimum area</source>
        <translation>最小面積</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="388"/>
        <source>When leolink watches the picture</source>
        <translation>leolink が映像を見るとき</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="399"/>
        <source>Raise an event on sound</source>
        <translation>音でイベントを起こす</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="402"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>マイク付きのカメラが必要です。サブストリームへの接続がもう 1 本増えます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="407"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="410"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 dB はほぼ無音、-20 dB は近くで張り上げた声くらいです。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="414"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="457"/>
        <source> s</source>
        <translation> 秒</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="417"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>音が止まったあともイベントを保ち、1 回の吠え声が 4 回報告されないようにします。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="428"/>
        <source>Sound above</source>
        <translation>この大きさを超える音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="429"/>
        <source>Hold for</source>
        <translation>保持時間</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="442"/>
        <source>Detection by leolink</source>
        <translation>leolink による検知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="449"/>
        <source>Record while motion lasts</source>
        <translation>動きが続くあいだ録画する</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="452"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>ライブストリームからこのコンピューターに録画するので、カメラに SD カードが無くても使えます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="468"/>
        <source>Recording on this computer</source>
        <translation>このコンピューターへの録画</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="472"/>
        <source>Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>ファイルの保存先はどのカメラも同じで、設定 ▸ 録画 で決めます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="479"/>
        <source>Follow the defaults under Settings</source>
        <translation>設定の既定に従う</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="480"/>
        <source>Use this camera&apos;s own</source>
        <translation>このカメラ独自のものを使う</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="493"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="504"/>
        <source>Reactions</source>
        <translation>反応</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="495"/>
        <source>What happens on an event</source>
        <translation>イベント時の動作</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="511"/>
        <source>Muted</source>
        <translation>消音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="526"/>
        <source>Volume</source>
        <translation>音量</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="528"/>
        <source>Sound in leolink</source>
        <translation>leolink での音</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="532"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>同じ 2 つはカメラのタイル上にもあり、そちらのほうが早く手が届きます。カメラは消音で始まります。ずらりと並べたカメラを開いたとたん、部屋が全部の音で埋まっては困るからです。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="542"/>
        <source>Playback</source>
        <translation>再生</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="602"/>
        <source>Main stream</source>
        <translation>メインストリーム</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="603"/>
        <source>Sub stream</source>
        <translation>サブストリーム</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="608"/>
        <source>Video</source>
        <translation>映像</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="622"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2130"/>
        <source>Brightness</source>
        <translation>明るさ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="623"/>
        <source>Contrast</source>
        <translation>コントラスト</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="624"/>
        <source>Saturation</source>
        <translation>彩度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="625"/>
        <source>Sharpness</source>
        <translation>シャープネス</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="626"/>
        <source>Hue</source>
        <translation>色相</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="628"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>Picture</source>
        <translation>画質</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="638"/>
        <source>Exposure and orientation</source>
        <translation>露出と向き</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="640"/>
        <source>Day / night</source>
        <translation>昼 / 夜</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="641"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>「自動」は光が落ちるにつれて赤外線に切り替えます。夜にカラーを強いると暗すぎて使えない映像になり、昼に白黒を強いると色を無駄に失います。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="646"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="676"/>
        <source>Automatic</source>
        <translation>自動</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="647"/>
        <source>Always colour</source>
        <translation>つねにカラー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="648"/>
        <source>Always black and white</source>
        <translation>つねに白黒</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="649"/>
        <source>Anti-flicker</source>
        <translation>フリッカー低減</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="650"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>電源の周波数に合わせてください — ヨーロッパでは 50 Hz — さもないと室内照明がシャッターと干渉し、映像が脈打ちます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="654"/>
        <source>Exposure</source>
        <translation>露出</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="655"/>
        <source>Mirror</source>
        <translation>左右反転</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="656"/>
        <source>Flip</source>
        <translation>上下反転</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="657"/>
        <source>For a camera mounted upside down.</source>
        <translation>逆さに取り付けたカメラ向け。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="658"/>
        <source>Backlight compensation</source>
        <translation>逆光補正</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="659"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>被写体が明るい窓や空を背にしているときに効きます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="661"/>
        <source>Noise reduction</source>
        <translation>ノイズ低減</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="662"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>暗い映像をきれいにしますが、動くものがにじむ代償があります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="664"/>
        <source>Rotation</source>
        <translation>回転</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="665"/>
        <source>Dynamic contrast</source>
        <translation>ダイナミックコントラスト</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="669"/>
        <source>Infrared illumination</source>
        <translation>赤外線照明</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="671"/>
        <source>Infrared lamps</source>
        <translation>赤外線ランプ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="672"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>「自動」は暗くなると点灯します。カメラがガラス越しに見ている場合はオフにしてください — 反射で目がくらみます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="677"/>
        <source>Always on</source>
        <translation>つねにオン</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="678"/>
        <source>Always off</source>
        <translation>つねにオフ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1793"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2072"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2084"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2100"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <source>User</source>
        <translation>ユーザー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>Rights</source>
        <translation>権限</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="699"/>
        <source>Add…</source>
        <translation>追加…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="700"/>
        <source>Change password…</source>
        <translation>パスワードを変更…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="701"/>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="715"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>これは leolink ではなくカメラ上のアカウントです。閲覧者アカウントは見ることはできても何も変更できません — 映像を見るだけで足りる用途にはこちらを使うと、保存したパスワードがカメラの設定に向けられることを防げます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="732"/>
        <source>Users</source>
        <translation>ユーザー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>New user</source>
        <translation>新しいユーザー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <source>User name</source>
        <translation>ユーザー名</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <source>Password for %1</source>
        <translation>%1 のパスワード</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Creating %1…</source>
        <translation>%1 を作成しています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>Change password</source>
        <translation>パスワードを変更</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>New password for %1</source>
        <translation>%1 の新しいパスワード</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>This is the account leolink uses</source>
        <translation>これは leolink が使っているアカウントです</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="781"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>ここで変更すると、カメラの設定でも新しいパスワードを入力するまで leolink は締め出されます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="785"/>
        <source>Changing the password for %1…</source>
        <translation>%1 のパスワードを変更しています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="798"/>
        <source>Cannot delete this account</source>
        <translation>このアカウントは削除できません</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink は「%1」としてログインしています。削除すると、このカメラとの接続がただちに切れます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="804"/>
        <source>Delete user</source>
        <translation>ユーザーを削除</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="805"/>
        <source>Delete “%1” from the camera?</source>
        <translation>「%1」をカメラから削除しますか。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="809"/>
        <source>Deleting %1…</source>
        <translation>%1 を削除しています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="816"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1224"/>
        <source>Format the SD card</source>
        <translation>SD カードを初期化</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="818"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 のカードの中身をすべて消しますか。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="821"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>カード上のすべての録画が削除されます。取り消せず、まだダウンロードしていないものは取り戻せません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="824"/>
        <source>Erase</source>
        <translation>消去</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="831"/>
        <source>Formatting…</source>
        <translation>初期化しています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="841"/>
        <source>Wi-Fi signal</source>
        <translation>Wi-Fi 信号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="845"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1169"/>
        <source>Reading…</source>
        <translation>読み込み中…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="849"/>
        <source>Connection</source>
        <translation>接続</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="862"/>
        <source>Scan</source>
        <translation>探索</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="866"/>
        <source>Join network</source>
        <translation>ネットワークに接続</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="880"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="914"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1803"/>
        <source>Network</source>
        <translation>ネットワーク</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="882"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1794"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2073"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2085"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2101"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <source>Password</source>
        <translation>パスワード</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="885"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="891"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>探索するのはこのコンピューターではなくカメラです — 大事なのはカメラが届く範囲です。パスワードは保存前に試されるので、打ち間違いは拒否され、カメラがどのネットワークにも繋がらない状態にはなりません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="899"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>アドレスとポートはここで読めますが、変更はカメラ自身の Web インターフェースで行います。ひとつ誤るとカメラは完全にネットワークから外れ、戻す方法はリセットピンだけです — そこでは警告ダイアログはメーカー自身の画面の代わりにはなりません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="944"/>
        <source>strong</source>
        <translation>強い</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="945"/>
        <source>good</source>
        <translation>良好</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="946"/>
        <source>fair</source>
        <translation>普通</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="947"/>
        <source>weak</source>
        <translation>弱い</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="948"/>
        <source>unknown</source>
        <translation>不明</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1002"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1007"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>、アクセスポイント %n 台</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1012"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>カメラが受け取っている信号: 4 段階中 %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1014"/>
        <source>Encryption: %1</source>
        <translation>暗号化: %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1016"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>アクセスポイント %n 台から受信 — 1 つのネットワークに複数のノード。表示しているのは最も強いものです。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1030"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>いくつかの名前が複数のアクセスポイントから聞こえました — メッシュです。カメラは特定のノードではなく名前に接続し、どのノードと話すかはメッシュ側が決めて必要に応じて引き継ぎます。最適な場所を探すには、カメラを動かしながら上の「Wi-Fi 信号」を見てください。それが実際の接続です。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1040"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>ネットワークを %n 件検出、強い順。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1048"/>
        <source>scanning…</source>
        <translation>探索中…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1051"/>
        <source>The camera is scanning for networks…</source>
        <translation>カメラがネットワークを探しています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>Change the camera&apos;s network</source>
        <translation>カメラのネットワークを変更</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 を「%2」に移しますか。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1066"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>カメラは先にパスワードを試し、誤っていれば拒否するので、見た目より安全です。

それでも再接続のあいだ 1 分ほど姿を消し、新しいネットワークが別のアドレスを割り当てた場合は、あとでここを更新する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1072"/>
        <source>Join</source>
        <translation>接続</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1080"/>
        <source>Testing the password on the camera…</source>
        <translation>カメラでパスワードを試しています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1098"/>
        <source>Link</source>
        <translation>リンク</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1099"/>
        <source>Address</source>
        <translation>アドレス</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1100"/>
        <source>Netmask</source>
        <translation>サブネットマスク</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1101"/>
        <source>Gateway</source>
        <translation>ゲートウェイ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1102"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1103"/>
        <source>DNS</source>
        <translation>DNS</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1104"/>
        <source>Network name</source>
        <translation>ネットワーク名</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1125"/>
        <source>Ports</source>
        <translation>ポート</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1127"/>
        <source>The camera reported nothing.</source>
        <translation>カメラは何も報告しませんでした。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1355"/>
        <source>Restart the camera</source>
        <translation>カメラを再起動</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1141"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>カメラは 1 分ほどネットワークから消え、自分で戻ってきます。SD カード内の録画は影響を受けず、設定も保たれます。

応答しなくなった、新しい接続を拒む、ファームウェア更新後に調子が狂った — そんなときに試す価値があります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1149"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1362"/>
        <source>Restart</source>
        <translation>再起動</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1160"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>工場出荷状態への初期化はここでは提供していません。ネットワーク設定も消えるため、Wi-Fi を忘れたカメラは取り外してケーブルでつなぐしかありません — どうしても必要なら、カメラ自身の Web インターフェースを使ってください。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1171"/>
        <source>Condition</source>
        <translation>状態</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1176"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1244"/>
        <source>Not checked.</source>
        <translation>未確認。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1179"/>
        <source>Check for updates</source>
        <translation>更新を確認</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1181"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>Reolink に問い合わせるのはこのコンピューターではなくカメラです — つまり、カメラ自身にインターネットへの出口が要ります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1185"/>
        <source>Asking Reolink…</source>
        <translation>Reolink に問い合わせています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1190"/>
        <source>Install update</source>
        <translation>更新をインストール</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1194"/>
        <source>Install firmware</source>
        <translation>ファームウェアをインストール</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 のファームウェアを更新しますか。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1198"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>カメラは自分で更新をダウンロードして再起動します。数分間つながらなくなります。

更新中に電源を切らないでください — 書き込みの途中で止まったカメラは、たいてい修理に出すことになります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1203"/>
        <source>Install</source>
        <translation>インストール</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1218"/>
        <source>Firmware</source>
        <translation>ファームウェア</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1228"/>
        <source>Storage</source>
        <translation>ストレージ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1231"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>初期化するとカード上の録画はすべて消えます。取り消しはできず、そのあとカメラからの確認もありません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1248"/>
        <source>Ask the camera</source>
        <translation>カメラに尋ねる</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1252"/>
        <source>Copy the list</source>
        <translation>一覧をコピー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1255"/>
        <source>Copied.</source>
        <translation>コピーしました。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1263"/>
        <source>What this camera supports</source>
        <translation>このカメラが対応している機能</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1266"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>Reolink のファームウェアは機種によって大きく異なり、カメラに何ができるかを確かめる確実な方法は本人に尋ねることだけです。お使いのカメラに明らかにある機能が leolink に欠けているなら、不具合報告に添えたこの一覧こそが追加を可能にします。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1283"/>
        <source>Maintenance</source>
        <translation>メンテナンス</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>%n 件のコマンドを問い合わせています…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1331"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>対応 (%1):
%2

非対応 (%3):
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1357"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 を再起動しますか。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1359"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>映像が 1 分ほど途切れます。今録画中のものは停止します。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>Asking %1 to restart…</source>
        <translation>%1 に再起動を要求しています…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1449"/>
        <source>On-screen text</source>
        <translation>画面上の文字</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1451"/>
        <source>Background</source>
        <translation>背景</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1452"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>明るい場面でも読めるよう、文字の後ろに枠を描きます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1454"/>
        <source>Watermark</source>
        <translation>透かし</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1455"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>録画そのものに印を埋め込みます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1459"/>
        <source>Privacy areas…</source>
        <translation>プライバシー領域…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1462"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>何かがカメラから出ていく前に、カメラが塗りつぶす部分です。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>Privacy</source>
        <translation>プライバシー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1477"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>カメラ自身の中で塗りつぶされるので、覆われた部分はどのビューアーにも、どの録画にも残りません — 隣家の窓や、映すべきでない机など。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1484"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>カメラが映像に焼き付けるので、ここだけでなく、あらゆる録画とあらゆるソフトに現れます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1492"/>
        <source>Overlay</source>
        <translation>重ね表示</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1501"/>
        <source>Motion detection in the camera</source>
        <translation>カメラ内の動体検知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="385"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1503"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>Sensitivity</source>
        <translation>感度</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1504"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>高いほど多くを拾い、影やヘッドライトも拾います。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1506"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1815"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2023"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2077"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2087"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2093"/>
        <source>Switched on</source>
        <translation>オン</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1512"/>
        <source>Choose the area…</source>
        <translation>領域を選ぶ…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1514"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>カメラが映像のどの部分を見張るか。領域の外はすべて無視されます — 画面の端の道路、風に揺れる木、隣家のドアなど。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1520"/>
        <source>Where it looks</source>
        <translation>どこを見るか</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1524"/>
        <source>Choose the hours…</source>
        <translation>時間帯を選ぶ…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1529"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>1 週間ぶんの時間帯です。チェックした時間帯ではカメラが動きを知らせ、それ以外では黙ります。感度とは関係ありません — それは下で設定します。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1536"/>
        <source>When it reports at all</source>
        <translation>そもそもいつ知らせるか</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>From</source>
        <translation>開始</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>To</source>
        <translation>終了</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1555"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>1 日のうちでも、カメラは反応しやすくも、しにくくもできます。夜のヘッドライトで何もかも反応させず、昼間に見えなくならないための設定です。区分がいくつあるかはカメラが決め、その時刻と感度はあなたが決めます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1563"/>
        <source>How readily it triggers</source>
        <translation>どれくらい起きやすいか</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1571"/>
        <source>What it recognises</source>
        <translation>何を見分けるか</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1573"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1706"/>
        <source>People</source>
        <translation>人</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1574"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1707"/>
        <source>Vehicles</source>
        <translation>車両</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1575"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1708"/>
        <source>Animals</source>
        <translation>動物</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1576"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1709"/>
        <source>Faces</source>
        <translation>顔</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1579"/>
        <source>Camera-side detection</source>
        <translation>カメラ側の検知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1588"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>これはカメラ自身の検知、つまり ONVIF で知らせてくるものです。leolink による映像の解析は別に、カメラ → イベント で設定します。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1597"/>
        <source>Detection</source>
        <translation>検知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1674"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — カメラの検知領域</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1675"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>映像の上をドラッグして、カメラが見張る範囲を選びます。暗くなった領域は無視されます。これはカメラ自身のマス目 (%1 × %2) なので、leolink のものより細かくなっています。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <source>%1 — when to watch</source>
        <translation>%1 — 見張る時間帯</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1693"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>カメラが動体イベントを上げる時間帯。それ以外の時間も見てはいますが、何も言いません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1704"/>
        <source>Any movement</source>
        <translation>あらゆる動き</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1705"/>
        <source>Continuous</source>
        <translation>常時</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1737"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>このカメラはイベントの種類ごとに別々の週を持っています。どれにしますか。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1785"/>
        <source>SIM card</source>
        <translation>SIM カード</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1787"/>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1788"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>カードが求める場合にだけ必要です。3 回間違えるとカードはロックされ、契約先しか知らない PUK が必要になります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1792"/>
        <source>Access point (APN)</source>
        <translation>アクセスポイント (APN)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1795"/>
        <source>Authentication</source>
        <translation>認証</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1796"/>
        <source>Use mobile data</source>
        <translation>モバイルデータを使う</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1800"/>
        <source>Modem</source>
        <translation>モデム</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1802"/>
        <source>Card</source>
        <translation>カード</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1804"/>
        <source>Type</source>
        <translation>種類</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1805"/>
        <source>Signal</source>
        <translation>信号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1806"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1807"/>
        <source>Card number</source>
        <translation>カード番号</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1811"/>
        <source>Mobile connection</source>
        <translation>モバイル接続</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1813"/>
        <source>Data used</source>
        <translation>使用したデータ量</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1814"/>
        <source>Monthly limit</source>
        <translation>月間の上限</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;実機で検証していません。&lt;/b&gt; leolink の関係者にモデム付きカメラを持っている者がおらず、これはプロトコルだけを頼りに書かれています。壊すことはできません — カメラが知らないコマンドは単に拒否されます — が、同じくらいの確率で何も表示されないかもしれません。

お使いのカメラに SIM があるなら、メンテナンスの「このカメラが対応している機能」に、そのファームウェアが実際に持つコマンドが並びます。その一覧を不具合報告に添えていただければ、ここをきちんと仕上げられます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1835"/>
        <source>Mobile data</source>
        <translation>モバイルデータ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1852"/>
        <source>nothing blanked</source>
        <translation>塗りつぶしなし</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1854"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>%n 個の領域を塗りつぶし</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1856"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n 個の領域、オフ</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1938"/>
        <source>%1 — when to record</source>
        <translation>%1 — 録画する時間帯</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1939"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>カメラが自分のカードに録画する時間帯。カードが入っている必要があります。このコンピューターへの録画は カメラ → イベント で設定し、カードは要りません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2017"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2027"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>カメラのカードへの録画</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2019"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2029"/>
        <source>Overwrite when full</source>
        <translation>いっぱいになったら上書き</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2020"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2032"/>
        <source>Record before the event</source>
        <translation>イベント前も録画</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="466"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2021"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2035"/>
        <source>Keep recording after</source>
        <translation>動き終了後も録画を続ける</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2022"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2036"/>
        <source>File length</source>
        <translation>1 ファイルの長さ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2030"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>オフにすると、カードがいっぱいになった時点で録画は単に止まります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2033"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>きっかけの直前の数秒を残します。たいていそこが肝心な部分です。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2039"/>
        <source>When to record…</source>
        <translation>録画する時間帯…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2042"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>カメラが自分でカードに録画する曜日と時刻。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2052"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>これらはカメラが自分の SD カードに書くものを決めます。このコンピューターへの録画は カメラ → イベント で設定し、カードは要りません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2060"/>
        <source>Recording</source>
        <translation>録画</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2068"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2096"/>
        <source>E-mail</source>
        <translation>メール</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2070"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2082"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2098"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <source>Server</source>
        <translation>サーバー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2071"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2083"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2099"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2136"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <source>Port</source>
        <translation>ポート</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2074"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2103"/>
        <source>Encrypted</source>
        <translation>暗号化</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2075"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2104"/>
        <source>Not more often than</source>
        <translation>この間隔より頻繁にしない</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2076"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2105"/>
        <source>Attach</source>
        <translation>添付</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2080"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2133"/>
        <source>FTP upload</source>
        <translation>FTP アップロード</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2086"/>
        <source>Folder</source>
        <translation>フォルダー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2091"/>
        <source>Push notifications</source>
        <translation>プッシュ通知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2102"/>
        <source>Send to</source>
        <translation>宛先</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2114"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2121"/>
        <source>Siren</source>
        <translation>サイレン</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2116"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2123"/>
        <source>Sound on an alarm</source>
        <translation>警報時に鳴らす</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2117"/>
        <source>Times</source>
        <translation>時間帯</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2118"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2129"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2140"/>
        <source>Mode</source>
        <translation>モード</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2126"/>
        <source>Spotlight</source>
        <translation>スポットライト</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2128"/>
        <source>On</source>
        <translation>オン</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <source>Directory</source>
        <translation>ディレクトリ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2144"/>
        <source>Push notification</source>
        <translation>プッシュ通知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2146"/>
        <source>Schedule</source>
        <translation>スケジュール</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2152"/>
        <source>Send a test e-mail</source>
        <translation>テストメールを送る</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2155"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>カメラにテストメールの送信を頼んでいます…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2158"/>
        <source>Test the FTP upload</source>
        <translation>FTP アップロードを試す</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2161"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>カメラに FTP サーバーを試すよう頼んでいます…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2172"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>カメラ自身が送るので、このコンピューターの電源が切れていても働き続けます。leolink 側の反応 — コマンド、Webhook、MQTT — は カメラ → イベント にあります。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2181"/>
        <source>Alerts</source>
        <translation>通知</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <source>Time server</source>
        <translation>時刻サーバー</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <source>Synchronise the clock</source>
        <translation>時計を同期する</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2194"/>
        <source>Every</source>
        <translation>間隔</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <source>Scheduled restart</source>
        <translation>定期再起動</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <source>Restart regularly</source>
        <translation>定期的に再起動する</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>何週間も動かしっぱなしにすると不安定になるカメラがあります。週 1 回の再起動は安上がりな対策です。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2204"/>
        <source>Day</source>
        <translation>曜日</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2205"/>
        <source>Hour</source>
        <translation>時</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2206"/>
        <source>Minute</source>
        <translation>分</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2210"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>時計の狂ったカメラは録画に誤った時刻を刻みます。1 本を探し出す必要が生じたとき、これは見た目以上に効いてきます。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Time</source>
        <translation>時刻</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2340"/>
        <source>Ready.</source>
        <translation>準備完了。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2445"/>
        <source>Writing to the camera…</source>
        <translation>カメラに書き込んでいます…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2503"/>
        <source>Nothing to write.</source>
        <translation>書き込むものがありません。</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2520"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>保存しました。エンコーダーを変えるとストリームが再起動するので、映像が一瞬途切れることがあります。</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>診断</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>エラーのみ</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>警告とエラー</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>通常の動作</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>すべて</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>すべての分野</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>検索…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>表示</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>詳細ログ</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>カメラへの要求、デコーダーの判断、再接続をすべて記録します。ふだんはオフのままにしてください — 不具合があるときにオンにし、問題を再現してからレポートを送ってください。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>新しい行を追う</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>レポートをコピー</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>システム情報とログ。不具合報告にそのまま貼り付けられます。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>レポートをコピーしました。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>レポートを保存…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>レポートを保存</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>テキストファイル (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>%1 を書き込めませんでした。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>%1 に保存しました</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>ログのフォルダーを開く</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>パスワード、セッショントークン、インターネット上のアドレスは書き出す前に取り除かれるので、このまま共有できます。自分のネットワーク内のアドレスは残ります — たいていそれが最初の手がかりになります。</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%2 行中 %1 行</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>探索用の UDP ソケットを開けません。</translation>
    </message>
</context>
<context>
    <name>leolink::EventDispatcher</name>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <location filename="../src/EventActions.cpp" line="108"/>
        <source>Command</source>
        <translation>コマンド</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <source>could not be started</source>
        <translation>起動できませんでした</translation>
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
        <translation>アドレスが不正です</translation>
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
        <translation>イベントログ</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>すべてのカメラ</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>すべてのイベント</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>動体</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>録画あり</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>カメラ:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>表示:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>更新</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>日時</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>カメラ</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>イベント</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>メディア</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>プレビューなし</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>録画を開く</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>ログを消去…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>動画</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>画像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + 画像</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>まだイベントは記録されていません</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>録画のみ</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>録画: %1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation> (ファイルがありません)</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>画像: %1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>画像を開く</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>開くものがありません</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>このイベントのファイルはもうありません。</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>イベントログを消去</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>イベントの履歴をすべて削除しますか。

録画した動画と画像はディスクに残ります — 消えるのはログだけです。</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>アプリケーション</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>カメラ API</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>映像</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>ONVIF イベント</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>検知</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>録画</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>イベント時の動作</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>ネットワーク</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>ユーザーインターフェース</translation>
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
        <location filename="../src/MainWindow.cpp" line="71"/>
        <source>%1 failed: %2</source>
        <translation>%1 に失敗しました: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="110"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>カメラがまだ設定されていません。

「カメラ…」から追加してください。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="253"/>
        <source>&amp;File</source>
        <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;Cameras…</source>
        <translation>カメラ(&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="260"/>
        <source>&amp;Settings…</source>
        <translation>設定(&amp;S)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="266"/>
        <source>&amp;Save snapshots…</source>
        <translation>静止画を保存(&amp;S)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="271"/>
        <source>&amp;Record all cameras</source>
        <translation>すべてのカメラを録画(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="278"/>
        <source>&amp;Event log…</source>
        <translation>イベントログ(&amp;E)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="286"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>カメラ内の録画(&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>カメラ自身の SD カードに入っているものを一覧します。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="292"/>
        <location filename="../src/MainWindow.cpp" line="725"/>
        <location filename="../src/MainWindow.cpp" line="1654"/>
        <source>No cameras configured</source>
        <translation>カメラが設定されていません</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Which camera</source>
        <translation>どのカメラ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Show recordings from</source>
        <translation>録画を表示するカメラ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="315"/>
        <source>Open &amp;recordings folder</source>
        <translation>録画フォルダーを開く(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="323"/>
        <source>&amp;Quit</source>
        <translation>終了(&amp;Q)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="328"/>
        <source>&amp;View</source>
        <translation>表示(&amp;V)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;Full screen</source>
        <translation>全画面表示(&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="369"/>
        <source>Show &amp;menu bar</source>
        <translation>メニューバーを表示(&amp;M)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="383"/>
        <source>Show &amp;toolbar</source>
        <translation>ツールバーを表示(&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="392"/>
        <source>Show status &amp;bar</source>
        <translation>ステータスバーを表示(&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="401"/>
        <source>Hide window &amp;decoration</source>
        <translation>ウィンドウ枠を隠す(&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="413"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>ウィンドウを動かすには、カメラの下の帯をドラッグしてください。Ctrl+Shift+D で枠が、Ctrl+M でメニューが戻ります。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="420"/>
        <source>&amp;Help</source>
        <translation>ヘルプ(&amp;H)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Online handbook</source>
        <translation>オンラインの手引き(&amp;O)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="429"/>
        <source>&amp;Protocol notes</source>
        <translation>プロトコルの覚え書き(&amp;P)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="435"/>
        <source>&amp;Diagnostics…</source>
        <translation>診断(&amp;D)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="438"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>leolink とカメラのこれまでの動作 — そして不具合報告に添付できるレポート。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="442"/>
        <source>&amp;Report a problem</source>
        <translation>問題を報告(&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="447"/>
        <source>Report a problem</source>
        <translation>問題を報告</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;診断レポートを添付してください&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>お使いの機械の素性、カメラの応答、どこで問題が起きたかを記録します — パスワードとアドレスはすでに取り除かれています。これがないと、ほとんどの報告は追跡できません。

自分で起こせる問題なら、まず診断ウィンドウで詳細ログをオンにし、もう一度起こしてから、レポートをコピーしてください。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="458"/>
        <source>Open diagnostics</source>
        <translation>診断を開く</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Go to the issue tracker</source>
        <translation>課題トラッカーへ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="471"/>
        <source>&amp;About leolink</source>
        <translation>leolink について(&amp;A)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="474"/>
        <source>About leolink</source>
        <translation>leolink について</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="475"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;Reolink カメラのための Linux ネイティブクライアント。&lt;/p&gt;&lt;p&gt;カメラ自身のプロトコルを直接話します。ローカルネットワークでは HTTP API・RTSP・ONVIF、外出先からカメラに届きたいときは Reolink の P2P サービス。&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;手引き&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;ソースコード&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Reolink とは無関係で、同社の承認も受けていません。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="487"/>
        <source>Main</source>
        <translation>メイン</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="499"/>
        <source>Ready</source>
        <translation>準備完了</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="515"/>
        <source>Leave full screen</source>
        <translation>全画面表示をやめる</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="522"/>
        <location filename="../src/MainWindow.cpp" line="586"/>
        <source>Cameras…</source>
        <translation>カメラ…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <source>Event log…</source>
        <translation>イベントログ…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="530"/>
        <location filename="../src/MainWindow.cpp" line="589"/>
        <source>Quit</source>
        <translation>終了</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="580"/>
        <source>Show window</source>
        <translation>ウィンドウを表示</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="749"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n 台のカメラがライブ</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="958"/>
        <source>Esc leaves full screen</source>
        <translation>Esc で全画面表示を抜けます</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="965"/>
        <location filename="../src/MainWindow.cpp" line="1004"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>ダブルクリックでグリッドへ · Esc で全画面表示を抜けます</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1002"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Esc で全画面表示を抜けます · カメラをダブルクリックすると画面いっぱいに表示します</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1027"/>
        <source>Grid view</source>
        <translation>グリッド表示</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1209"/>
        <location filename="../src/MainWindow.cpp" line="1332"/>
        <source>Cannot create %1</source>
        <translation>%1 を作成できません</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1246"/>
        <source>Recording %1</source>
        <translation>%1 を録画中</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1254"/>
        <source>Saved %1</source>
        <translation>%1 を保存しました</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1260"/>
        <location filename="../src/MainWindow.cpp" line="1367"/>
        <source>Recording stopped</source>
        <translation>録画を停止しました</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1267"/>
        <source>%1: %2</source>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1348"/>
        <source>Recording started</source>
        <translation>録画を開始しました</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1366"/>
        <source>Recording all cameras</source>
        <translation>すべてのカメラを録画中</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1447"/>
        <source>%1 at %2</source>
        <translation>%2 で %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1467"/>
        <source>Motion detected</source>
        <translation>動きを検知しました</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1479"/>
        <source>Sound detected</source>
        <translation>音を検知しました</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1502"/>
        <source>Menu bar hidden</source>
        <translation>メニューバーが隠れています</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1503"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>メニューバーもツールバーも隠れているときは、Ctrl+M でメニューを呼び戻せます。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1522"/>
        <source>Cannot save</source>
        <translation>保存できません</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1523"/>
        <source>Settings could not be written to %1.</source>
        <translation>設定を %1 に書き込めませんでした。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1589"/>
        <source>Play through %1</source>
        <translation>%1 を通して再生</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1590"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>音声ファイル (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;すべてのファイル (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1602"/>
        <source>Speaking through the camera…</source>
        <translation>カメラを通して話しています…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1609"/>
        <source>Finished.</source>
        <translation>終了しました。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1732"/>
        <source>Nothing to capture</source>
        <translation>取り込むものがありません</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1737"/>
        <source>Save snapshots to</source>
        <translation>静止画の保存先</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="1755"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>静止画を %n 枚保存しました</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1773"/>
        <source>Welcome to leolink</source>
        <translation>leolink へようこそ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1775"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;カメラがまだ 1 台も設定されていません。&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1777"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>アドレス・ユーザー名・パスワードを入れてカメラを追加してください。leolink はお使いのネットワーク内でカメラと直接やり取りします — クラウドアカウントは一切関係ありません。&lt;p&gt;各項目の意味は手引きに書かれています。</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1781"/>
        <source>Add camera…</source>
        <translation>カメラを追加…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1782"/>
        <source>Open handbook</source>
        <translation>手引きを開く</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1858"/>
        <source>leolink is still running</source>
        <translation>leolink は動き続けています</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1859"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>カメラは録画を続けています。戻るには通知領域のアイコンをお使いください。</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>利用できる映像がありません</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — プライバシー領域</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>カメラに塗りつぶさせたい部分をドラッグで指定します。機器から何かが出ていく前に黒く塗るので、ライブ映像にも、録画にも、ほかのどのソフトにも — メーカー製アプリにも — 残りません。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>最後の 1 つを削除</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>すべて削除</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>%1 から映像を取得しています…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>映像なし: %1 — 領域はそれでも描けます。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%2 個中 %1 個の領域</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>ffmpeg が入っていないため、動体検知は使えません。</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>%1 のストリームアドレスがありません。</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="129"/>
        <source>Motion detection stopped: %1</source>
        <translation>動体検知を停止しました: %1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="154"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>動体検知用の ffmpeg を起動できませんでした。</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="157"/>
        <source>ONVIF subscription failed.</source>
        <translation>ONVIF の購読に失敗しました。</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>MQTT のブローカーかトピックが未設定です。</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>MQTT ブローカーが応答しませんでした。</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>MQTT: %1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>MQTT: ブローカーから予期しない応答がありました。</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>MQTT が接続を拒否しました: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — カメラ内の録画</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>メインストリーム</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>サブストリーム</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>検索</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>開始</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>終了</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>開始時刻</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>長さ</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>再生</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>ダウンロード…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>期間を選んで「検索」を押してください。録画があるのは、カメラに SD カードが入っている場合だけです。</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>%1 に問い合わせています…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>その期間には何も見つかりませんでした。何も録画されなかったか、カメラに SD カードが無いかのどちらかです。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>録画が %n 件見つかりました。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>カメラとのセッションがありません — 先に検索してください。</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>プレーヤーがありません</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>mpv が見つかりませんでした。録画はこちらにあります:

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>録画を保存</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>%1 に書き込めません。</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>%1 に保存しました</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>ダウンロードに失敗しました: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>ウィンドウ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>動きがあったとき</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>反応</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>録画</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>映像</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>全般</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>メニューバーを表示</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>Ctrl+M でいつでも切り替えられます。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>ツールバーを表示</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>ステータスバーを表示</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>ウィンドウ枠を隠す</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>壁掛けディスプレイ向け。Ctrl+Shift+D で切り替わります。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>外観</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>通知領域にアイコンを表示する</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>ウィンドウを閉じても終了せず隠す</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>最小化するとウィンドウを通知領域に隠す</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>通知領域</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>タイルを一瞬赤く染める</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>ずらりと並んだカメラをひと目見るだけで、どれだったか分かるように。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> ミリ秒</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>音を鳴らす</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>空: デスクトップ自身の通知音</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>参照…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>鳴らす音</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>音声ファイル (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;すべてのファイル (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>長さ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>音声ファイル</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>画面上</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>動きを検知したらウィンドウを前面に出す</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>元の大きさ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>全画面表示</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>戻るときの状態</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>ウィンドウ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>どのカメラがそもそもイベントを起こすか、またその方法は、カメラごとに カメラ ▸ 設定 ▸ leolink による検知 で決めます。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>カメラが何かを知らせたときに leolink がすることです。カメラ自身のダイアログが別のことを言わないかぎり、カメラはこれに従います — すべてか、まったくなしか。半分だけということはありません。部分的に受け継いだ設定は、何かが起きなかったときにいちばん解きほぐしにくいからです。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>録画フォルダー</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>録画と静止画</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>録画は再エンコードせずに Matroska で書き出されます。映像はカメラ本来の画質を保ち、プロセッサーはほとんど動きません。

そのカメラがそもそも録画するかどうかは、カメラ ▸ 設定 ▸ 反応 にある、そのカメラ自身の設定です。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>ハードウェア (推奨)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>ハードウェア、ドライバーに任せる</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>ハードウェア、フレームをコピー</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="292"/>
        <source>Software only</source>
        <translation>ソフトウェアのみ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="294"/>
        <source>“Recommended” names the decoder explicitly so that decoding and drawing stay on the same graphics API. Left to itself, mpv may decode through one API and draw through another, which on some cards turns the picture solid green.

If the picture is broken, try the others in turn. “Software only” always works but costs a whole processor core at full resolution.</source>
        <translation>「推奨」はデコーダーを明示的に指定し、デコードと描画を同じグラフィック API に揃えます。任せておくと、mpv は一方の API でデコードし、もう一方で描画することがあり、一部のカードでは映像が一面の緑になります。

映像が壊れるなら、ほかを順に試してください。「ソフトウェアのみ」はつねに動きますが、フル解像度ではプロセッサーのコアを 1 つまるごと使います。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>なめらかさより低遅延を優先する</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>バッファリングを最小限にします。ビットレートの高いストリームが混雑したネットワークで途切れる場合はオフにしてください。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>デコード</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>システムの言語</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>言語</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>leolink を再起動すると反映されます。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>詳細ログ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>カメラへの要求、デコーダーの判断、再接続をすべて ~/.local/share/leolink/leolink.log に記録します。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>診断を開く…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>エラーと警告はつねに記録されます。詳細ログはカメラとのやり取りを追加します — 不具合があるときにオンにし、再現させてから、ヘルプ ▸ 診断 でレポートを送ってください。パスワードとトークンは書き出す前に取り除かれます。</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>診断</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>ffmpeg が入っていないため、録画できません。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>%1 のストリームアドレスがありません。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="99"/>
        <source>Recording failed: %1</source>
        <translation>録画に失敗しました: %1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="131"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>録画にデータがありませんでした (ffmpeg の終了コード %1)。</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="147"/>
        <source>Could not start ffmpeg.</source>
        <translation>ffmpeg を起動できませんでした。</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="121"/>
        <source>File format not recognised.</source>
        <translation>ファイル形式を認識できません。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="122"/>
        <source>Invalid input.</source>
        <translation>入力が不正です。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="123"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>カメラに空きセッションがありません。同時に数本しか許さず、しかもスマートフォンアプリや Web ページと共有です。それらを閉じるか、古いものが切れるまで 1 分ほど待ってください。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="127"/>
        <source>Session expired.</source>
        <translation>セッションの有効期限が切れました。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="128"/>
        <source>Wrong user name or password.</source>
        <translation>ユーザー名またはパスワードが違います。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="129"/>
        <source>Timed out.</source>
        <translation>時間切れです。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="130"/>
        <source>This firmware does not support that command.</source>
        <translation>このファームウェアはそのコマンドに対応していません。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="131"/>
        <source>Could not read the configuration.</source>
        <translation>設定を読み取れませんでした。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="132"/>
        <source>Could not verify the configuration.</source>
        <translation>設定を検証できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="133"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>カメラの一部が応答しませんでした。何を尋ねたかによりますが、SD カードが入っていないか、カメラにインターネットへの出口がないということです。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="136"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>許可されていません — この機種にはその装置がありません。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="137"/>
        <source>Account invalid, log in again.</source>
        <translation>アカウントが無効です。ログインし直してください。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="138"/>
        <source>User name already taken.</source>
        <translation>そのユーザー名はすでに使われています。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="139"/>
        <source>Maximum number of users reached.</source>
        <translation>ユーザー数が上限に達しました。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="140"/>
        <source>Camera busy, try again shortly.</source>
        <translation>カメラが混み合っています。少し待ってお試しください。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="141"/>
        <source>IP address conflict.</source>
        <translation>IP アドレスが競合しています。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="142"/>
        <source>Configuration test failed.</source>
        <translation>設定のテストに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="143"/>
        <source>FTP login failed.</source>
        <translation>FTP のログインに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="144"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP でディレクトリを作成できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="145"/>
        <source>FTP upload failed.</source>
        <translation>FTP アップロードに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="146"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP でサーバーに届きませんでした。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="147"/>
        <source>Camera reported error %1.</source>
        <translation>カメラがエラー %1 を報告しました。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="348"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>カメラは今、要求に応じていません。一度に多くの要求を受けたときにこうなります。しばらくすれば自分で戻ります。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="355"/>
        <source>Cannot reach %1: %2</source>
        <translation>%1 に届きません: %2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="369"/>
        <source>Unexpected reply from %1.</source>
        <translation>%1 から予期しない応答がありました。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="472"/>
        <source>Login returned no token.</source>
        <translation>ログインでトークンが返りませんでした。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="511"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — ファームウェア %2、%3 チャンネル</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="776"/>
        <source>The camera could not join that network: %1</source>
        <translation>カメラはそのネットワークに接続できませんでした: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="786"/>
        <source>E-mail</source>
        <translation>メール</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="796"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="836"/>
        <source>Update available: %1</source>
        <translation>更新があります: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="837"/>
        <source>The firmware is up to date.</source>
        <translation>ファームウェアは最新です。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="854"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>更新しています。カメラは自分で再起動し、数分間つながらなくなります。電源を切らないでください。</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="987"/>
        <source>Snapshot failed.</source>
        <translation>静止画の取得に失敗しました。</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>1 週間ずっと</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>しない</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>夜間</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>勤務時間</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>週末</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>反転</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>毎日 22:00 から 06:00 まで。</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>月曜から金曜の 08:00 から 17:00 まで。</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>何も選ばれていません — これでは一度も動きません。</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>つねに有効。</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>週 %n 時間。</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>このカメラにはこれらの設定がありません。</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="34"/>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <source>Cameras</source>
        <translation>カメラ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="41"/>
        <source>Layout</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="80"/>
        <source>Add</source>
        <translation>追加</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="81"/>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="85"/>
        <source>Scan network…</source>
        <translation>ネットワークを探索…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="87"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>ネットワークに ONVIF カメラの有無を尋ねます。マルチキャストの問い合わせを 1 回送るだけで、黙っている機器に接続することはありません。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="102"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 または camera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="107"/>
        <source>optional: pass show reolink/hall</source>
        <translation>任意: pass show reolink/genkan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="109"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>設定すると、このコマンドが実行され、その出力がパスワードとして使われます。秘密を設定ファイルの外に置けます。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="112"/>
        <source>optional, for P2P access</source>
        <translation>任意、P2P 接続用</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="117"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>libmpv が開けるアドレスなら何でも。他社製カメラ、NVR のストリーム、ローカルファイルなどに使えます。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="121"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>サブストリーム (低帯域)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="122"/>
        <source>Main stream (full resolution)</source>
        <translation>メインストリーム (フル解像度)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="126"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV (低遅延)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan (カメラ独自のプロトコル)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <location filename="../src/SettingsDialog.cpp" line="150"/>
        <source>Custom URL</source>
        <translation>任意の URL</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>RTSP はほとんどのカメラに合い、まず試すべきものです。

HTTP-FLV はポート 80 だけで済むので、RTSP が塞がれている環境で役立ちます。

Baichuan は Reolink 純正アプリが話すものです。RTSP を切ったままのカメラ — 電池式の機種がそうです — にはこれが答えで、カメラのわずかな Web セッションを消費しません。映像のみで、音声は引き続き RTSP から届きます。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="138"/>
        <source>Use HTTPS for the control API</source>
        <translation>制御 API に HTTPS を使う</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="139"/>
        <source>Show this camera</source>
        <translation>このカメラを表示する</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="142"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="143"/>
        <source>Host</source>
        <translation>アドレス</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="144"/>
        <source>User</source>
        <translation>ユーザー</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="145"/>
        <source>Password</source>
        <translation>パスワード</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="146"/>
        <source>Password command</source>
        <translation>パスワード取得コマンド</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="147"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="148"/>
        <source>Stream</source>
        <translation>ストリーム</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="149"/>
        <source>Transport</source>
        <translation>伝送方式</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>Test connection</source>
        <translation>接続を試す</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Settings for this camera…</source>
        <translation>このカメラの設定…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>leolink 側の検知・反応・録画と、カメラ自身のエンコーダー・画質・スケジュール。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>automatic</source>
        <translation>自動</translation>
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
        <translation>グリッドの大きさ</translation>
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
        <translation>行の連結数</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="255"/>
        <source>Column span</source>
        <translation>列の連結数</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="257"/>
        <source>Position of the selected camera</source>
        <translation>選んだカメラの位置</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="268"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>行と列を「自動」のままにすると、カメラは順にグリッドを埋めます。連結すれば 1 台で複数のマスを占められます。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="421"/>
        <source>New camera</source>
        <translation>新しいカメラ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="436"/>
        <source>Remove camera</source>
        <translation>カメラを削除</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="437"/>
        <source>Remove “%1” from the list?</source>
        <translation>「%1」を一覧から削除しますか。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="457"/>
        <source>Enter a host first.</source>
        <translation>先にアドレスを入力してください。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="464"/>
        <source>Contacting %1…</source>
        <translation>%1 に接続しています…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Looking for cameras…</source>
        <translation>カメラを探しています…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Stop</source>
        <translation>中止</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="488"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>%n 台の機器を検出…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="498"/>
        <source>No cameras found</source>
        <translation>カメラが見つかりません</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="499"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>ONVIF 機器からの応答がありませんでした。

カメラは ONVIF がオンのときにしか答えず、問い合わせはルーターや多くの VPN を越えません。アドレスを直接入力してカメラを追加することもできます。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="525"/>
        <source>unnamed device</source>
        <translation>名前のない機器</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="526"/>
        <source> (Reolink)</source>
        <translation> (Reolink)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="527"/>
        <source>  · already added</source>
        <translation>  · 追加済み</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="533"/>
        <source>Cameras found</source>
        <translation>カメラが見つかりました</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="534"/>
        <source>Add which one?</source>
        <translation>どれを追加しますか。</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="577"/>
        <source>Incomplete camera</source>
        <translation>カメラの設定が不完全です</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="578"/>
        <source>“%1” has no host address.</source>
        <translation>「%1」にアドレスがありません。</translation>
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
        <translation>モバイルデータ</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>有線</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>接続</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — 強度不明</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %3 段階中 %2</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>カメラに届きません: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>カメラが RTSP ポートで応答しませんでした。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="159"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>音声の送信には ffmpeg が必要ですが、起動できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="272"/>
        <source>The camera rejected the user name or password.</source>
        <translation>カメラがユーザー名かパスワードを拒否しました。</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="281"/>
        <source>The camera refused: %1</source>
        <translation>カメラが拒否しました: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="316"/>
        <source>This camera does not offer a speaker.</source>
        <translation>このカメラにはスピーカーがありません。</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>ストリームが終了しました (%1) — 再接続中</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>信号が弱い</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>ストリーム不良</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>直近 10 秒で %n 枚のフレームが壊れました。

たいていは Wi-Fi 信号が弱いか、解像度に対してビットレートが低すぎるかです。leolink は直せるものは直します — これは直せなかったぶんです。</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>接続中…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="703"/>
        <source>Mute this camera</source>
        <translation>このカメラを消音</translation>
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
        <translation>このカメラを録画</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="985"/>
        <source>Speak through the camera</source>
        <translation>カメラを通して話す</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>カメラの設定</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="455"/>
        <source>no host configured</source>
        <translation>アドレスが未設定</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="529"/>
        <source>connecting over Baichuan…</source>
        <translation>Baichuan で接続中…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="552"/>
        <location filename="../src/VideoTile.cpp" line="938"/>
        <source>custom stream</source>
        <translation>任意のストリーム</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="554"/>
        <location filename="../src/VideoTile.cpp" line="940"/>
        <source>main stream</source>
        <translation>メインストリーム</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="555"/>
        <location filename="../src/VideoTile.cpp" line="941"/>
        <source>sub stream</source>
        <translation>サブストリーム</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="702"/>
        <source>Unmute this camera</source>
        <translation>このカメラの消音を解除</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="720"/>
        <source>MOTION</source>
        <translation>動体</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="838"/>
        <location filename="../src/VideoTile.cpp" line="858"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>カメラを再設定しています… %1 秒</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="860"/>
        <source>camera is reconfiguring…</source>
        <translation>カメラを再設定しています…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="913"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>ストリームが切れました — 再接続中 (%1)</translation>
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
        <translation>話すのをやめる</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1006"/>
        <source>Stop recording</source>
        <translation>録画を停止</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — 動体ゾーン</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>映像の上をドラッグして、見張る範囲を選びます。暗くなった領域は無視されます — 画面の端の道路、風に揺れる木、隣家の玄関などに便利です。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>すべて見張る</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>すべて無視する</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>反転</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>描画</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>矩形を見張る</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>矩形を無視する</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>マス目を 1 つずつなぞってください。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>見張る矩形をドラッグで描きます。Shift を押しながらのドラッグでも、道具を切り替えずに同じことができます。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>無視する矩形をドラッグで描きます。Ctrl を押しながらのドラッグでも、道具を切り替えずに同じことができます。</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>%1 から映像を取得しています…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>映像なし: %1 — ゾーンはそれでも設定できます。</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>利用できる映像がありません</translation>
    </message>
</context>
</TS>
