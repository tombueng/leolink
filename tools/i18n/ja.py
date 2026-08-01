"""Japanese. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Japanese. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "診断",
    "&Diagnostics…": "診断(&D)…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "leolink とカメラのこれまでの動作 — そして不具合報告に添付できるレポート。",
    "Errors only": "エラーのみ",
    "Warnings and errors": "警告とエラー",
    "Normal activity": "通常の動作",
    "Everything": "すべて",
    "All areas": "すべての分野",
    "Search…": "検索…",
    "Show": "表示",
    "Detailed logging": "詳細ログ",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "カメラへの要求、デコーダーの判断、再接続をすべて記録します。ふだんはオフのままにしてください — "
        "不具合があるときにオンにし、問題を再現してからレポートを送ってください。",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "カメラへの要求、デコーダーの判断、再接続をすべて ~/.local/share/leolink/leolink.log に記録します。",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "エラーと警告はつねに記録されます。詳細ログはカメラとのやり取りを追加します — 不具合があるときにオンにし、再現させてから、ヘルプ ▸ "
        "診断 でレポートを送ってください。パスワードとトークンは書き出す前に取り除かれます。",
    "Open diagnostics…": "診断を開く…",
    "Open diagnostics": "診断を開く",
    "Follow new lines": "新しい行を追う",
    "Copy report": "レポートをコピー",
    "System details and the log, ready to paste into a bug report.":
        "システム情報とログ。不具合報告にそのまま貼り付けられます。",
    "Report copied.": "レポートをコピーしました。",
    "Save report…": "レポートを保存…",
    "Save report": "レポートを保存",
    "Text files (*.txt)": "テキストファイル (*.txt)",
    "Could not write %1.": "%1 を書き込めませんでした。",
    "Open log folder": "ログのフォルダーを開く",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "パスワード、セッショントークン、インターネット上のアドレスは書き出す前に取り除かれるので、このまま共有できます。自分のネットワーク内のアドレスは残ります "
        "— たいていそれが最初の手がかりになります。",
    "%1 of %2 lines": "%2 行中 %1 行",
    "Report a problem": "問題を報告",
    "<b>Attach a diagnostics report</b>": "<b>診断レポートを添付してください</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "お使いの機械の素性、カメラの応答、どこで問題が起きたかを記録します — "
        "パスワードとアドレスはすでに取り除かれています。これがないと、ほとんどの報告は追跡できません。\n\n自分で起こせる問題なら、まず診断ウィンドウで詳細ログをオンにし、もう一度起こしてから、レポートをコピーしてください。",
    "Go to the issue tracker": "課題トラッカーへ",
    "Application": "アプリケーション",
    "Camera API": "カメラ API",
    "ONVIF events": "ONVIF イベント",
    "Event actions": "イベント時の動作",
    "Baichuan": "Baichuan",
    "User interface": "ユーザーインターフェース",
    "Qt": "Qt",
    "strong": "強い",
    "good": "良好",
    "fair": "普通",
    "weak": "弱い",
    "unknown": "不明",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4": "カメラが受け取っている信号: 4 段階中 %1",
    "Encryption: %1": "暗号化: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "いくつかの名前が複数のアクセスポイントから聞こえました — "
        "メッシュです。カメラは特定のノードではなく名前に接続し、どのノードと話すかはメッシュ側が決めて必要に応じて引き継ぎます。最適な場所を探すには、カメラを動かしながら上の「Wi-Fi "
        "信号」を見てください。それが実際の接続です。",
    "What this camera supports": "このカメラが対応している機能",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "Reolink "
        "のファームウェアは機種によって大きく異なり、カメラに何ができるかを確かめる確実な方法は本人に尋ねることだけです。お使いのカメラに明らかにある機能が "
        "leolink に欠けているなら、不具合報告に添えたこの一覧こそが追加を可能にします。",
    "Ask the camera": "カメラに尋ねる",
    "Copy the list": "一覧をコピー",
    "Copied.": "コピーしました。",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>対応 (%1):</b> %2<br><br><b>非対応 (%3):</b> %4",
    "Privacy": "プライバシー",
    "Privacy areas…": "プライバシー領域…",
    "Parts of the view the camera blanks before anything leaves it.":
        "何かがカメラから出ていく前に、カメラが塗りつぶす部分です。",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "カメラ自身の中で塗りつぶされるので、覆われた部分はどのビューアーにも、どの録画にも残りません — 隣家の窓や、映すべきでない机など。",
    "%1 — privacy areas": "%1 — プライバシー領域",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "カメラに塗りつぶさせたい部分をドラッグで指定します。機器から何かが出ていく前に黒く塗るので、ライブ映像にも、録画にも、ほかのどのソフトにも "
        "— メーカー製アプリにも — 残りません。",
    "Remove the last": "最後の 1 つを削除",
    "Remove all": "すべて削除",
    "No picture: %1 — the areas can still be drawn.":
        "映像なし: %1 — 領域はそれでも描けます。",
    "%1 of %2 areas": "%2 個中 %1 個の領域",
    "nothing blanked": "塗りつぶしなし",
    "Detection area…": "検知領域…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "カメラが映像のどの部分を見張るか。領域の外はすべて無視されます — 画面の端の道路、風に揺れる木、隣家のドアなど。",
    "%1 — the camera's detection area": "%1 — カメラの検知領域",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "映像の上をドラッグして、カメラが見張る範囲を選びます。暗くなった領域は無視されます。これはカメラ自身のマス目 (%1 × %2) "
        "なので、leolink のものより細かくなっています。",
    "When to watch…": "見張る時間帯…",
    "Hours of the week the camera raises motion events at all.":
        "カメラがそもそも動体イベントを上げる曜日と時刻。",
    "%1 — when to watch": "%1 — 見張る時間帯",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "カメラが動体イベントを上げる時間帯。それ以外の時間も見てはいますが、何も言いません。",
    "When to record…": "録画する時間帯…",
    "Hours of the week the camera records to its card by itself.":
        "カメラが自分でカードに録画する曜日と時刻。",
    "%1 — when to record": "%1 — 録画する時間帯",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "カメラが自分のカードに録画する時間帯。カードが入っている必要があります。このコンピューターへの録画は カメラ → イベント "
        "で設定し、カードは要りません。",
    "Area, times and sensitivity": "領域・時間帯・感度",
    "To": "終了",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "カメラは時間帯ごとに感度を変えられます。夜のヘッドライトで何もかも反応させず、昼間に鈍らせないための仕組みです。",
    "All week": "1 週間ずっと",
    "Never": "しない",
    "Nights": "夜間",
    "Working hours": "勤務時間",
    "Weekends": "週末",
    "22:00 to 06:00, every day.": "毎日 22:00 から 06:00 まで。",
    "08:00 to 17:00, Monday to Friday.": "月曜から金曜の 08:00 から 17:00 まで。",
    "Nothing is selected — this will never run.": "何も選ばれていません — これでは一度も動きません。",
    "Always on.": "つねに有効。",
    "Mobile data": "モバイルデータ",
    "SIM card": "SIM カード",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "カードが求める場合にだけ必要です。3 回間違えるとカードはロックされ、契約先しか知らない PUK が必要になります。",
    "Access point (APN)": "アクセスポイント (APN)",
    "Authentication": "認証",
    "Use mobile data": "モバイルデータを使う",
    "Modem": "モデム",
    "Card": "カード",
    "Type": "種類",
    "Signal": "信号",
    "IMEI": "IMEI",
    "Card number": "カード番号",
    "Mobile connection": "モバイル接続",
    "Data used": "使用したデータ量",
    "Monthly limit": "月間の上限",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>実機で検証していません。</b> leolink "
        "の関係者にモデム付きカメラを持っている者がおらず、これはプロトコルだけを頼りに書かれています。壊すことはできません — "
        "カメラが知らないコマンドは単に拒否されます — が、同じくらいの確率で何も表示されないかもしれません。\n\nお使いのカメラに SIM "
        "があるなら、メンテナンスの「このカメラが対応している機能」に、そのファームウェアが実際に持つコマンドが並びます。その一覧を不具合報告に添えていただければ、ここをきちんと仕上げられます。",
    "Baichuan (the camera's own protocol)": "Baichuan (カメラ独自のプロトコル)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP はほとんどのカメラに合い、まず試すべきものです。\n\nHTTP-FLV はポート 80 だけで済むので、RTSP "
        "が塞がれている環境で役立ちます。\n\nBaichuan は Reolink 純正アプリが話すものです。RTSP を切ったままのカメラ — "
        "電池式の機種がそうです — にはこれが答えで、カメラのわずかな Web セッションを消費しません。映像のみで、音声は引き続き RTSP "
        "から届きます。",
    "connecting over Baichuan…": "Baichuan で接続中…",
    "Cannot open a local port: %1": "ローカルポートを開けません: %1",
    "Baichuan login failed: %1": "Baichuan のログインに失敗しました: %1",
    "The camera refused to send video: %1": "カメラが映像の送信を拒否しました: %1",
    "The player did not connect.": "プレーヤーが接続しませんでした。",
    "The camera stopped sending.": "カメラが送信を止めました。",
    "custom stream": "任意のストリーム",
    "Speak through the camera": "カメラを通して話す",
    "Stop speaking": "話すのをやめる",
    "Play through %1": "%1 を通して再生",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "音声ファイル (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;すべてのファイル (*)",
    "Speaking through the camera…": "カメラを通して話しています…",
    "Finished.": "終了しました。",
    "Cannot reach the camera: %1": "カメラに届きません: %1",
    "The camera did not answer on the RTSP port.": "カメラが RTSP ポートで応答しませんでした。",
    "ffmpeg is needed to send sound and could not be started.":
        "音声の送信には ffmpeg が必要ですが、起動できませんでした。",
    "The camera rejected the user name or password.":
        "カメラがユーザー名かパスワードを拒否しました。",
    "The camera refused: %1": "カメラが拒否しました: %1",
    "This camera does not offer a speaker.": "このカメラにはスピーカーがありません。",
    "Sound": "音声",
    "Send sound": "音声を送る",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "カメラのマイクです。これをオフにしても、ストリームには音声トラックが入ります — "
        "完全な無音のものが。トラックが無い場合よりずっと気づきにくくなります。",
    "What it recognises": "何を見分けるか",
    "People": "人",
    "Vehicles": "車両",
    "Animals": "動物",
    "Faces": "顔",
    "Any movement": "あらゆる動き",
    "Continuous": "常時",
    "This camera keeps a separate week for each kind of event. Which one?":
        "このカメラはイベントの種類ごとに別々の週を持っています。どれにしますか。",
    "Push notifications": "プッシュ通知",
    "Folder": "フォルダー",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "カメラは今、要求に応じていません。一度に多くの要求を受けたときにこうなります。しばらくすれば自分で戻ります。",
    "Camera-side detection": "カメラ側の検知",
    "Where it looks": "どこを見るか",
    "Choose the area…": "領域を選ぶ…",
    "When it reports at all": "そもそもいつ知らせるか",
    "Choose the hours…": "時間帯を選ぶ…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "1 週間ぶんの時間帯です。チェックした時間帯ではカメラが動きを知らせ、それ以外では黙ります。感度とは関係ありません — "
        "それは下で設定します。",
    "How readily it triggers": "どれくらい起きやすいか",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "1 "
        "日のうちでも、カメラは反応しやすくも、しにくくもできます。夜のヘッドライトで何もかも反応させず、昼間に見えなくならないための設定です。区分がいくつあるかはカメラが決め、その時刻と感度はあなたが決めます。",
    "Siren": "サイレン",
    "Sound on an alarm": "警報時に鳴らす",
    "Times": "時間帯",
    "Spotlight": "スポットライト",
    "On": "オン",
    "Draw": "描画",
    "Watch a rectangle": "矩形を見張る",
    "Ignore a rectangle": "矩形を無視する",
    "Drag over single cells.": "マス目を 1 つずつなぞってください。",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "見張る矩形をドラッグで描きます。Shift を押しながらのドラッグでも、道具を切り替えずに同じことができます。",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "無視する矩形をドラッグで描きます。Ctrl を押しながらのドラッグでも、道具を切り替えずに同じことができます。",
    "  · already added": "  · 追加済み",
    "Processor load %1 %": "プロセッサー負荷 %1 %",
    "Encoder output %1 kbit/s": "エンコーダー出力 %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "対応 (%1):\n%2\n\n非対応 (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "Reolink に問い合わせるのはこのコンピューターではなくカメラです — つまり、カメラ自身にインターネットへの出口が要ります。",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "カメラの一部が応答しませんでした。何を尋ねたかによりますが、SD "
        "カードが入っていないか、カメラにインターネットへの出口がないということです。",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "工場出荷状態への初期化はここでは提供していません。ネットワーク設定も消えるため、Wi-Fi "
        "を忘れたカメラは取り外してケーブルでつなぐしかありません — どうしても必要なら、カメラ自身の Web インターフェースを使ってください。",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "カメラに空きセッションがありません。同時に数本しか許さず、しかもスマートフォンアプリや Web "
        "ページと共有です。それらを閉じるか、古いものが切れるまで 1 分ほど待ってください。",
    "&File": "ファイル(&F)",
    "&View": "表示(&V)",
    "&Help": "ヘルプ(&H)",
    "&Cameras…": "カメラ(&C)…",
    "&Save snapshots…": "静止画を保存(&S)…",
    "&Event log…": "イベントログ(&E)…",
    "Open &recordings folder": "録画フォルダーを開く(&R)",
    "&Quit": "終了(&Q)",
    "&Full screen": "全画面表示(&F)",
    "Leave full screen": "全画面表示をやめる",
    "Show &menu bar": "メニューバーを表示(&M)",
    "Show &toolbar": "ツールバーを表示(&T)",
    "Show status &bar": "ステータスバーを表示(&B)",
    "Hide window &decoration": "ウィンドウ枠を隠す(&D)",
    "&Online handbook": "オンラインの手引き(&O)",
    "&Protocol notes": "プロトコルの覚え書き(&P)",
    "&Report a problem": "問題を報告(&R)",
    "&About leolink": "leolink について(&A)",
    "Main": "メイン",
    "Ready": "準備完了",
    "Grid view": "グリッド表示",
    "No cameras configured": "カメラが設定されていません",
    "Nothing to capture": "取り込むものがありません",
    "Save snapshots to": "静止画の保存先",
    "Esc leaves full screen": "Esc で全画面表示を抜けます",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc で全画面表示を抜けます · カメラをダブルクリックすると画面いっぱいに表示します",
    "Double-click for the grid · Esc leaves full screen":
        "ダブルクリックでグリッドへ · Esc で全画面表示を抜けます",
    "Cannot save": "保存できません",
    "Settings could not be written to %1.": "設定を %1 に書き込めませんでした。",
    "Cannot create %1": "%1 を作成できません",
    "Recording %1": "%1 を録画中",
    "Saved %1": "%1 を保存しました",
    "Motion at %1": "%1 で動きを検知",
    "Motion detected": "動きを検知しました",
    "Could not run the motion command for %1": "%1 の動体コマンドを実行できませんでした",
    "leolink is still running": "leolink は動き続けています",
    "Cameras keep recording. Use the tray icon to come back.":
        "カメラは録画を続けています。戻るには通知領域のアイコンをお使いください。",
    "Show window": "ウィンドウを表示",
    "Cameras…": "カメラ…",
    "Quit": "終了",
    "Welcome to leolink": "leolink へようこそ",
    "<b>No cameras are configured yet.</b>": "<b>カメラがまだ 1 台も設定されていません。</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "アドレス・ユーザー名・パスワードを入れてカメラを追加してください。leolink はお使いのネットワーク内でカメラと直接やり取りします — "
        "クラウドアカウントは一切関係ありません。<p>各項目の意味は手引きに書かれています。",
    "Add camera…": "カメラを追加…",
    "Open handbook": "手引きを開く",
    "About leolink": "leolink について",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Reolink カメラのための Linux "
        "ネイティブクライアント。</p><p>カメラ自身のプロトコルを直接話します。ローカルネットワークでは HTTP "
        "API・RTSP・ONVIF、外出先からカメラに届きたいときは Reolink の P2P サービス。</p><p><a "
        "href=\"%2\">手引き</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">ソースコード</a></p><p>Reolink "
        "とは無関係で、同社の承認も受けていません。</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "カメラがまだ設定されていません。\n\n「カメラ…」から追加してください。",
    "connecting…": "接続中…",
    "main stream": "メインストリーム",
    "sub stream": "サブストリーム",
    "no host configured": "アドレスが未設定",
    "cannot open stream": "ストリームを開けません",
    "libmpv unavailable": "libmpv が使えません",
    "player init failed": "プレーヤーを起動できませんでした",
    "MOTION": "動体",
    "Mute this camera": "このカメラを消音",
    "Unmute this camera": "このカメラの消音を解除",
    "Volume": "音量",
    "Camera settings": "カメラの設定",
    "Settings": "設定",
    "Cameras": "カメラ",
    "Layout": "配置",
    "Events": "イベント",
    "Window": "ウィンドウ",
    "Add": "追加",
    "Remove": "削除",
    "Remove camera": "カメラを削除",
    "Remove “%1” from the list?": "「%1」を一覧から削除しますか。",
    "New camera": "新しいカメラ",
    "Name": "名前",
    "Host": "アドレス",
    "User": "ユーザー",
    "Password": "パスワード",
    "Password command": "パスワード取得コマンド",
    "UID": "UID",
    "Stream": "ストリーム",
    "Transport": "伝送方式",
    "192.168.1.10 or camera.lan": "192.168.1.10 または camera.lan",
    "optional, for P2P access": "任意、P2P 接続用",
    "optional: pass show reolink/hall": "任意: pass show reolink/genkan",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "設定すると、このコマンドが実行され、その出力がパスワードとして使われます。秘密を設定ファイルの外に置けます。",
    "Sub stream (low bandwidth)": "サブストリーム (低帯域)",
    "Main stream (full resolution)": "メインストリーム (フル解像度)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (低遅延)",
    "Use HTTPS for the control API": "制御 API に HTTPS を使う",
    "Show this camera": "このカメラを表示する",
    "Test connection": "接続を試す",
    "Contacting %1…": "%1 に接続しています…",
    "Enter a host first.": "先にアドレスを入力してください。",
    "Incomplete camera": "カメラの設定が不完全です",
    "“%1” has no host address.": "「%1」にアドレスがありません。",
    "%1 — firmware %2, %3 channel(s)": "%1 — ファームウェア %2、%3 チャンネル",
    "Scan network…": "ネットワークを探索…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "ネットワークに ONVIF カメラの有無を尋ねます。マルチキャストの問い合わせを 1 "
        "回送るだけで、黙っている機器に接続することはありません。",
    "Looking for cameras…": "カメラを探しています…",
    "Stop": "中止",
    "Cameras found": "カメラが見つかりました",
    "Add which one?": "どれを追加しますか。",
    "No cameras found": "カメラが見つかりません",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "ONVIF 機器からの応答がありませんでした。\n\nカメラは ONVIF がオンのときにしか答えず、問い合わせはルーターや多くの VPN "
        "を越えません。アドレスを直接入力してカメラを追加することもできます。",
    "unnamed device": "名前のない機器",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.": "探索用の UDP ソケットを開けません。",
    "Grid size": "グリッドの大きさ",
    "Columns": "列数",
    "Rows": "行数",
    "Column": "列",
    "Row": "行",
    "Row span": "行の連結数",
    "Column span": "列の連結数",
    "automatic": "自動",
    "Position of the selected camera": "選んだカメラの位置",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "行と列を「自動」のままにすると、カメラは順にグリッドを埋めます。連結すれば 1 台で複数のマスを占められます。",
    "Watch cameras for motion (ONVIF push)": "カメラの動体検知を利用する (ONVIF プッシュ)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "leolink が 1 秒ごとに尋ねるのではなく、動きが起きた時点でカメラが知らせます。",
    "Run command": "コマンドを実行",
    "notify-send \"Motion at %n\"": "notify-send \"%n で動きを検知\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "このカメラが動きを知らせたときに実行されます。\n%n カメラ名 · %h アドレス · %t 時刻 · %f 録画ファイル",
    "Record while motion lasts": "動きが続くあいだ録画する",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "ライブストリームからこのコンピューターに録画するので、カメラに SD カードが無くても使えます。",
    "Keep recording after": "動き終了後も録画を続ける",
    " s": " 秒",
    "Selected camera": "選んだカメラ",
    "All cameras": "すべてのカメラ",
    "Recordings folder": "録画フォルダー",
    "Browse…": "参照…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "録画は再エンコードせずに Matroska で書き出されます。映像はカメラ本来の画質を保ち、CPU はほとんど動きません。",
    "Appearance": "外観",
    "Show menu bar": "メニューバーを表示",
    "Show toolbar": "ツールバーを表示",
    "Show status bar": "ステータスバーを表示",
    "Hide window decoration": "ウィンドウ枠を隠す",
    "Ctrl+M toggles this at any time.": "Ctrl+M でいつでも切り替えられます。",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "壁掛けディスプレイ向け。Ctrl+Shift+D で切り替わります。",
    "Notification area": "通知領域",
    "Show an icon in the notification area": "通知領域にアイコンを表示する",
    "Closing the window hides it instead of quitting": "ウィンドウを閉じても終了せず隠す",
    "Minimising hides the window to the tray": "最小化するとウィンドウを通知領域に隠す",
    "On motion": "動きがあったとき",
    "Bring the window up when motion is detected": "動きを検知したらウィンドウを前面に出す",
    "Come back as": "戻るときの状態",
    "Previous size": "元の大きさ",
    "Full screen": "全画面表示",
    "Language": "言語",
    "System language": "システムの言語",
    "Takes effect after restarting leolink.": "leolink を再起動すると反映されます。",
    "Menu bar hidden": "メニューバーが隠れています",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "メニューバーもツールバーも隠れているときは、Ctrl+M でメニューを呼び戻せます。",
    "Event log": "イベントログ",
    "Camera:": "カメラ:",
    "Show:": "表示:",
    "All events": "すべてのイベント",
    "Motion": "動体",
    "With recording": "録画あり",
    "Refresh": "更新",
    "When": "日時",
    "Camera": "カメラ",
    "Event": "イベント",
    "Media": "メディア",
    "video": "動画",
    "image": "画像",
    " + image": " + 画像",
    "no preview": "プレビューなし",
    "recording only": "録画のみ",
    "no events recorded yet": "まだイベントは記録されていません",
    "Recording: %1%2": "録画: %1%2",
    " (file missing)": " (ファイルがありません)",
    "Image: %1": "画像: %1",
    "Open recording": "録画を開く",
    "Open image": "画像を開く",
    "Nothing to open": "開くものがありません",
    "The file for this event is no longer there.": "このイベントのファイルはもうありません。",
    "Clear log…": "ログを消去…",
    "Clear event log": "イベントログを消去",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "イベントの履歴をすべて削除しますか。\n\n録画した動画と画像はディスクに残ります — 消えるのはログだけです。",
    "Command": "コマンド",
    "could not be started": "起動できませんでした",
    "Webhook": "Webhook",
    "invalid URL": "アドレスが不正です",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 に失敗しました: %2",
    "Event log…": "イベントログ…",
    "MQTT broker or topic not set.": "MQTT のブローカーかトピックが未設定です。",
    "MQTT broker did not respond.": "MQTT ブローカーが応答しませんでした。",
    "MQTT: %1": "MQTT: %1",
    "MQTT: unexpected reply from the broker.": "MQTT: ブローカーから予期しない応答がありました。",
    "MQTT refused the connection: %1": "MQTT が接続を拒否しました: %1",
    "Video": "映像",
    "Decoding": "デコード",
    "Hardware, fastest": "ハードウェア、最速",
    "Hardware, with frame copy": "ハードウェア、フレームをコピー",
    "Software only": "ソフトウェアのみ",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "ハードウェアデコードはプロセッサーを空けたままにでき、メインストリームの解像度にはこれが適しています。\n\n映像に緑のブロックが出たり止まったりする場合は「フレームをコピー」を選んでください。デコードは "
        "GPU のままですが、各フレームをメインメモリーへ写します。映像が別のウィンドウの中にあるとき、これを必要とするドライバーがあります。",
    "Favour low latency over smoothness": "なめらかさより低遅延を優先する",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "バッファリングを最小限にします。ビットレートの高いストリームが混雑したネットワークで途切れる場合はオフにしてください。",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "ウィンドウを動かすには、カメラの下の帯をドラッグしてください。Ctrl+Shift+D で枠が、Ctrl+M でメニューが戻ります。",
    "%1 — camera settings": "%1 — カメラの設定",
    "Reading settings from %1…": "%1 から設定を読み込んでいます…",
    "Apply to camera": "カメラに適用",
    "Main stream": "メインストリーム",
    "Sub stream": "サブストリーム",
    "Resolution": "解像度",
    "Frame rate": "フレームレート",
    "Bit rate (kbit/s)": "ビットレート (kbit/s)",
    "H.264 profile": "H.264 プロファイル",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "高いほど画質は良く、ネットワークの負荷も増えます。カメラは実際に維持できる値だけを示します。",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "これはカメラ自体を変更するので、結果はどのソフトからも見えます。選択肢はカメラから来るもので、機種ごとに異なります。",
    "Picture": "画質",
    "Brightness": "明るさ",
    "Contrast": "コントラスト",
    "Saturation": "彩度",
    "Sharpness": "シャープネス",
    "Hue": "色相",
    "Ready.": "準備完了。",
    "Writing to the camera…": "カメラに書き込んでいます…",
    "Nothing to write.": "書き込むものがありません。",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "保存しました。エンコーダーを変えるとストリームが再起動するので、映像が一瞬途切れることがあります。",
    "&Record all cameras": "すべてのカメラを録画(&R)",
    "Record this camera": "このカメラを録画",
    "Stop recording": "録画を停止",
    "Recording all cameras": "すべてのカメラを録画中",
    "Recording stopped": "録画を停止しました",
    "Recording started": "録画を開始しました",
    "Could not start recording %1": "%1 の録画を開始できませんでした",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "ffmpeg が入っていないため、録画できません。",
    "No stream address for %1.": "%1 のストリームアドレスがありません。",
    "Recording failed: %1": "録画に失敗しました: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "録画にデータがありませんでした (ffmpeg の終了コード %1)。",
    "Could not start ffmpeg.": "ffmpeg を起動できませんでした。",
    "Custom URL": "任意の URL",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "libmpv が開けるアドレスなら何でも。他社製カメラ、NVR のストリーム、ローカルファイルなどに使えます。",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "ffmpeg が入っていないため、動体検知は使えません。",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "ffmpeg が入っていないため、音の検知は使えません。",
    "Motion detection stopped: %1": "動体検知を停止しました: %1",
    "Sound detection stopped: %1": "音の検知を停止しました: %1",
    "Could not start ffmpeg for motion detection.":
        "動体検知用の ffmpeg を起動できませんでした。",
    "Could not start ffmpeg for sound detection.":
        "音の検知用の ffmpeg を起動できませんでした。",
    "Sound detected": "音を検知しました",
    "%1 at %2": "%2 で %1",
    "Detection": "検知",
    "Motion comes from": "動きを知らせるのは",
    "The camera reports it (ONVIF)": "カメラ自身 (ONVIF)",
    "leolink watches the picture": "leolink が映像を見る",
    "Either of the two": "どちらでも",
    "Do not watch": "見張らない",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "自分で動きを知らせるカメラなら、見張る費用はかかりません。\n\nここで映像を解析する方法はどのカメラでも使え、何も知らせないカメラにも効きますが、1 "
        "台につきサブストリームへの接続がもう 1 本増えます。",
    "Motion zones…": "動体ゾーン…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "映像のどの部分を見張るか選びます。leolink 自身が映像を解析する場合にのみ効きます。",
    "Sensitivity": "感度",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "映像上の一点がどれだけ変われば数えるか。高いほど多くを拾い、影や雨も拾います。",
    "Minimum area": "最小面積",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "見張っている面積のどれだけが変われば動きとみなすか。20 ‰ は画面の 2 パーセント — おおよそ中距離の人ひとりぶんです。",
    "Raise an event on sound": "音でイベントを起こす",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "マイク付きのカメラが必要です。サブストリームへの接続がもう 1 本増えます。",
    "Sound above": "この大きさを超える音",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB はほぼ無音、-20 dB は近くで張り上げた声くらいです。",
    "Hold for": "保持時間",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "音が止まったあともイベントを保ち、1 回の吠え声が 4 回報告されないようにします。",
    "%1 — motion zones": "%1 — 動体ゾーン",
    "no picture available": "利用できる映像がありません",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "映像の上をドラッグして、見張る範囲を選びます。暗くなった領域は無視されます — 画面の端の道路、風に揺れる木、隣家の玄関などに便利です。",
    "Watch all": "すべて見張る",
    "Ignore all": "すべて無視する",
    "Invert": "反転",
    "Fetching a picture from %1…": "%1 から映像を取得しています…",
    "No picture: %1 — the zones can still be set.":
        "映像なし: %1 — ゾーンはそれでも設定できます。",
    "Recordings on the &camera…": "カメラ内の録画(&C)…",
    "Browse what is stored on the camera's own SD card.":
        "カメラ自身の SD カードに入っているものを一覧します。",
    "Which camera": "どのカメラ",
    "Show recordings from": "録画を表示するカメラ",
    "%1 — recordings on the camera": "%1 — カメラ内の録画",
    "Search": "検索",
    "From": "開始",
    "to": "終了",
    "Start": "開始時刻",
    "Length": "長さ",
    "Size": "サイズ",
    "File": "ファイル",
    "Play": "再生",
    "Download…": "ダウンロード…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "期間を選んで「検索」を押してください。録画があるのは、カメラに SD カードが入っている場合だけです。",
    "Asking %1…": "%1 に問い合わせています…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "その期間には何も見つかりませんでした。何も録画されなかったか、カメラに SD カードが無いかのどちらかです。",
    "No session with the camera — search first.":
        "カメラとのセッションがありません — 先に検索してください。",
    "No player": "プレーヤーがありません",
    "mpv was not found. The recording is at:\n\n%1":
        "mpv が見つかりませんでした。録画はこちらにあります:\n\n%1",
    "Save recording": "録画を保存",
    "Cannot write to %1.": "%1 に書き込めません。",
    "Saved to %1": "%1 に保存しました",
    "Download failed: %1": "ダウンロードに失敗しました: %1",
    "Maintenance": "メンテナンス",
    "Restart": "再起動",
    "Restart the camera": "カメラを再起動",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "カメラは 1 分ほどネットワークから消え、自分で戻ってきます。SD "
        "カード内の録画は影響を受けず、設定も保たれます。\n\n応答しなくなった、新しい接続を拒む、ファームウェア更新後に調子が狂った — "
        "そんなときに試す価値があります。",
    "<b>Restart %1?</b>": "<b>%1 を再起動しますか。</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "映像が 1 分ほど途切れます。今録画中のものは停止します。",
    "Asking %1 to restart…": "%1 に再起動を要求しています…",
    "Restarting. The camera will be back in about a minute.":
        "再起動しています。カメラは 1 分ほどで戻ります。",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "工場出荷状態への初期化と SD カードの初期化はここでは提供していません。どちらも取り消せないので、警告がメーカー自身のものであるカメラの "
        "Web インターフェースで行うほうが安全です。",
    "Network": "ネットワーク",
    "Connection": "接続",
    "Reading…": "読み込み中…",
    "Wi-Fi signal": "Wi-Fi 信号",
    "Wi-Fi signal unknown": "Wi-Fi 信号は不明",
    "Wi-Fi signal %1 of %2": "Wi-Fi 信号 %2 段階中 %1",
    "Link": "リンク",
    "Address": "アドレス",
    "Netmask": "サブネットマスク",
    "Gateway": "ゲートウェイ",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "ネットワーク名",
    "Ports": "ポート",
    "The camera reported nothing.": "カメラは何も報告しませんでした。",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "参考として表示しています。アドレス・Wi-Fi の認証情報・ポートはカメラ自身の Web インターフェースで変更します — "
        "ここでの誤りはカメラを手の届かない場所へ追いやります。",
    "Hardware, with frame copy (recommended)": "ハードウェア、フレームをコピー (推奨)",
    "Hardware, zero copy (fastest)": "ハードウェア、コピーなし (最速)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "3 "
        "つとも、可能な範囲でグラフィックカード上でデコードします。\n\n「フレームをコピー」は各フレームをメインメモリー経由で渡します。数パーセント遅くなりますが既定です。コピーなしの経路は、映像が別のウィンドウの中にあるとき、いくつかのドライバーで緑のブロックや静止画を生むからです。\n\n最後の数パーセントが欲しければ「コピーなし」を試し、映像が崩れるなら戻してください。",
    "This camera does not offer these settings.": "このカメラにはこれらの設定がありません。",
    "Exposure and orientation": "露出と向き",
    "Day / night": "昼 / 夜",
    "Automatic": "自動",
    "Always colour": "つねにカラー",
    "Always black and white": "つねに白黒",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "「自動」は光が落ちるにつれて赤外線に切り替えます。夜にカラーを強いると暗すぎて使えない映像になり、昼に白黒を強いると色を無駄に失います。",
    "Anti-flicker": "フリッカー低減",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "電源の周波数に合わせてください — ヨーロッパでは 50 Hz — さもないと室内照明がシャッターと干渉し、映像が脈打ちます。",
    "Exposure": "露出",
    "Mirror": "左右反転",
    "Flip": "上下反転",
    "For a camera mounted upside down.": "逆さに取り付けたカメラ向け。",
    "Backlight compensation": "逆光補正",
    "Helps when the subject stands against a bright window or sky.":
        "被写体が明るい窓や空を背にしているときに効きます。",
    "Noise reduction": "ノイズ低減",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "暗い映像をきれいにしますが、動くものがにじむ代償があります。",
    "Rotation": "回転",
    "Dynamic contrast": "ダイナミックコントラスト",
    "Infrared illumination": "赤外線照明",
    "Infrared lamps": "赤外線ランプ",
    "Always on": "つねにオン",
    "Always off": "つねにオフ",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "「自動」は暗くなると点灯します。カメラがガラス越しに見ている場合はオフにしてください — 反射で目がくらみます。",
    "Overlay": "重ね表示",
    "On-screen text": "画面上の文字",
    "Background": "背景",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "明るい場面でも読めるよう、文字の後ろに枠を描きます。",
    "Watermark": "透かし",
    "Embeds a mark in the recording itself.": "録画そのものに印を埋め込みます。",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "カメラが映像に焼き付けるので、ここだけでなく、あらゆる録画とあらゆるソフトに現れます。",
    "Motion detection in the camera": "カメラ内の動体検知",
    "Switched on": "オン",
    "Higher notices more, including shadows and headlights.":
        "高いほど多くを拾い、影やヘッドライトも拾います。",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "これはカメラ自身の検知、つまり ONVIF で知らせてくるものです。leolink による映像の解析は別に、カメラ → イベント "
        "で設定します。",
    "Recording": "録画",
    "Recording to the camera's card": "カメラのカードへの録画",
    "Overwrite when full": "いっぱいになったら上書き",
    "Off means recording simply stops once the card fills up.":
        "オフにすると、カードがいっぱいになった時点で録画は単に止まります。",
    "Record before the event": "イベント前も録画",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "きっかけの直前の数秒を残します。たいていそこが肝心な部分です。",
    "File length": "1 ファイルの長さ",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "これらはカメラが自分の SD カードに書くものを決めます。このコンピューターへの録画は カメラ → イベント "
        "で設定し、カードは要りません。",
    "Alerts": "通知",
    "E-mail": "メール",
    "FTP": "FTP",
    "FTP upload": "FTP アップロード",
    "Push notification": "プッシュ通知",
    "Server": "サーバー",
    "Port": "ポート",
    "Send to": "宛先",
    "Encrypted": "暗号化",
    "Not more often than": "この間隔より頻繁にしない",
    "Attach": "添付",
    "Directory": "ディレクトリ",
    "Mode": "モード",
    "Schedule": "スケジュール",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "カメラ自身が送るので、このコンピューターの電源が切れていても働き続けます。leolink 側の反応 — コマンド、Webhook、MQTT "
        "— は カメラ → イベント にあります。",
    "Time": "時刻",
    "Time server": "時刻サーバー",
    "Synchronise the clock": "時計を同期する",
    "Every": "間隔",
    "Scheduled restart": "定期再起動",
    "Restart regularly": "定期的に再起動する",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "何週間も動かしっぱなしにすると不安定になるカメラがあります。週 1 回の再起動は安上がりな対策です。",
    "Day": "曜日",
    "Hour": "時",
    "Minute": "分",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "時計の狂ったカメラは録画に誤った時刻を刻みます。1 本を探し出す必要が生じたとき、これは見た目以上に効いてきます。",
    "Wi-Fi": "Wi-Fi",
    "Scan": "探索",
    "Join network": "ネットワークに接続",
    "scanning…": "探索中…",
    "The camera is scanning for networks…": "カメラがネットワークを探しています…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "探索するのはこのコンピューターではなくカメラです — "
        "大事なのはカメラが届く範囲です。パスワードは保存前に試されるので、打ち間違いは拒否され、カメラがどのネットワークにも繋がらない状態にはなりません。",
    "Change the camera's network": "カメラのネットワークを変更",
    "<b>Move %1 to “%2”?</b>": "<b>%1 を「%2」に移しますか。</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "カメラは先にパスワードを試し、誤っていれば拒否するので、見た目より安全です。\n\nそれでも再接続のあいだ 1 "
        "分ほど姿を消し、新しいネットワークが別のアドレスを割り当てた場合は、あとでここを更新する必要があります。",
    "Join": "接続",
    "Testing the password on the camera…": "カメラでパスワードを試しています…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "保存しました。カメラは再接続中で、まもなく戻ります。",
    "The camera could not join that network: %1":
        "カメラはそのネットワークに接続できませんでした: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "アドレスとポートはここで読めますが、変更はカメラ自身の Web "
        "インターフェースで行います。ひとつ誤るとカメラは完全にネットワークから外れ、戻す方法はリセットピンだけです — "
        "そこでは警告ダイアログはメーカー自身の画面の代わりにはなりません。",
    "%1 fps": "%1 fps",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)": "ストリームが切れました — 再接続中 (%1)",
    "Hardware (recommended)": "ハードウェア (推奨)",
    "Hardware, driver's choice": "ハードウェア、ドライバーに任せる",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "「推奨」はデコーダーを明示的に指定し、デコードと描画を同じグラフィック API に揃えます。任せておくと、mpv は一方の API "
        "でデコードし、もう一方で描画することがあり、一部のカードでは映像が一面の緑になります。\n\n映像が壊れるなら、ほかを順に試してください。「ソフトウェアのみ」はつねに動きますが、フル解像度ではプロセッサーのコアを "
        "1 つまるごと使います。",
    "Wired": "有線",
    "%1 — strength unknown": "%1 — 強度不明",
    "%1 — %2 of %3": "%1 — %3 段階中 %2",
    "WEAK SIGNAL": "信号が弱い",
    "BAD STREAM": "ストリーム不良",
    "stream ended (%1) — reconnecting": "ストリームが終了しました (%1) — 再接続中",
    "Open the &log file": "ログファイルを開く(&L)",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "プレーヤーとカメラが報告した内容です。不具合報告に添える価値があります。",
    "Nothing logged yet.": "まだ何も記録されていません。",
    "Bit rate looks too low": "ビットレートが低すぎるようです",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%2 に対して %1 kbit/s はごくわずかです。</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "この比率だと、カメラのエンコーダーは壊れたフレームを出しがちで、緑のブロックや静止した映像として届きます — "
        "ネットワークの障害ではなく、leolink が完全に直せるものでもありません。\n\nビットレートを上げるか、解像度を下げてください。",
    "Apply anyway": "それでも適用",
    "camera is reconfiguring…": "カメラを再設定しています…",
    "Send a test e-mail": "テストメールを送る",
    "Test the FTP upload": "FTP アップロードを試す",
    "Asking the camera to send a test e-mail…": "カメラにテストメールの送信を頼んでいます…",
    "Asking the camera to try the FTP server…": "カメラに FTP サーバーを試すよう頼んでいます…",
    "%1: the camera reported success.": "%1: カメラは成功したと報告しました。",
    "Condition": "状態",
    "Processor load %1%": "プロセッサー負荷 %1%",
    "Encoder load %1%": "エンコーダー負荷 %1%",
    "Network throughput %1 kbit/s": "ネットワーク帯域 %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "カメラは限界に来ています。解像度かフレームレートを下げると落ち着きます。",
    "Firmware": "ファームウェア",
    "Not checked.": "未確認。",
    "Check for updates": "更新を確認",
    "Asking Reolink…": "Reolink に問い合わせています…",
    "Install update": "更新をインストール",
    "Update available: %1": "更新があります: %1",
    "The firmware is up to date.": "ファームウェアは最新です。",
    "Install firmware": "ファームウェアをインストール",
    "<b>Update the firmware on %1?</b>": "<b>%1 のファームウェアを更新しますか。</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "カメラは自分で更新をダウンロードして再起動します。数分間つながらなくなります。\n\n更新中に電源を切らないでください — "
        "書き込みの途中で止まったカメラは、たいてい修理に出すことになります。",
    "Install": "インストール",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "更新しています。カメラは自分で再起動し、数分間つながらなくなります。電源を切らないでください。",
    "Storage": "ストレージ",
    "Format the SD card": "SD カードを初期化",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "初期化するとカード上の録画はすべて消えます。取り消しはできず、そのあとカメラからの確認もありません。",
    "<b>Erase everything on the card in %1?</b>":
        "<b>%1 のカードの中身をすべて消しますか。</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "カード上のすべての録画が削除されます。取り消せず、まだダウンロードしていないものは取り戻せません。",
    "Erase": "消去",
    "Formatting…": "初期化しています…",
    "The card has been formatted.": "カードを初期化しました。",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "工場出荷状態への初期化はここでは提供していません。ネットワーク設定も消えるため、Wi-Fi "
        "を忘れたカメラは取り外して手作業でリセットするしかなくなります。",
    "Users": "ユーザー",
    "Rights": "権限",
    "Administrator": "管理者",
    "Viewer": "閲覧者",
    "Add…": "追加…",
    "Change password…": "パスワードを変更…",
    "Delete": "削除",
    "New user": "新しいユーザー",
    "User name": "ユーザー名",
    "Password for %1": "%1 のパスワード",
    "Creating %1…": "%1 を作成しています…",
    "Change password": "パスワードを変更",
    "New password for %1": "%1 の新しいパスワード",
    "Changing the password for %1…": "%1 のパスワードを変更しています…",
    "This is the account leolink uses": "これは leolink が使っているアカウントです",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "ここで変更すると、カメラの設定でも新しいパスワードを入力するまで leolink は締め出されます。",
    "Cannot delete this account": "このアカウントは削除できません",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink は「%1」としてログインしています。削除すると、このカメラとの接続がただちに切れます。",
    "Delete user": "ユーザーを削除",
    "Delete “%1” from the camera?": "「%1」をカメラから削除しますか。",
    "Deleting %1…": "%1 を削除しています…",
    "Done.": "完了しました。",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "これは leolink ではなくカメラ上のアカウントです。閲覧者アカウントは見ることはできても何も変更できません — "
        "映像を見るだけで足りる用途にはこちらを使うと、保存したパスワードがカメラの設定に向けられることを防げます。",
    "camera is reconfiguring… %1 s": "カメラを再設定しています… %1 秒",
    "File format not recognised.": "ファイル形式を認識できません。",
    "Invalid input.": "入力が不正です。",
    "No free connections — the camera allows only a few sessions at a time.":
        "空き接続がありません — カメラが同時に許すセッションはごくわずかです。",
    "Session expired.": "セッションの有効期限が切れました。",
    "Wrong user name or password.": "ユーザー名またはパスワードが違います。",
    "Timed out.": "時間切れです。",
    "This firmware does not support that command.":
        "このファームウェアはそのコマンドに対応していません。",
    "Could not read the configuration.": "設定を読み取れませんでした。",
    "Could not verify the configuration.": "設定を検証できませんでした。",
    "Subsystem unavailable — typically no SD card fitted.":
        "サブシステムが使えません — たいていは SD カードが入っていません。",
    "Not permitted — this model lacks the hardware.":
        "許可されていません — この機種にはその装置がありません。",
    "Account invalid, log in again.": "アカウントが無効です。ログインし直してください。",
    "User name already taken.": "そのユーザー名はすでに使われています。",
    "Maximum number of users reached.": "ユーザー数が上限に達しました。",
    "Camera busy, try again shortly.": "カメラが混み合っています。少し待ってお試しください。",
    "IP address conflict.": "IP アドレスが競合しています。",
    "Configuration test failed.": "設定のテストに失敗しました。",
    "FTP login failed.": "FTP のログインに失敗しました。",
    "FTP could not create the directory.": "FTP でディレクトリを作成できませんでした。",
    "FTP upload failed.": "FTP アップロードに失敗しました。",
    "FTP could not reach the server.": "FTP でサーバーに届きませんでした。",
    "Camera reported error %1.": "カメラがエラー %1 を報告しました。",
    "Cannot reach %1: %2": "%1 に届きません: %2",
    "Unexpected reply from %1.": "%1 から予期しない応答がありました。",
    "Login returned no token.": "ログインでトークンが返りませんでした。",
    "Snapshot failed.": "静止画の取得に失敗しました。",
    "ONVIF subscription failed.": "ONVIF の購読に失敗しました。",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n カメラ名 · %h アドレス · %t 時刻 · %e イベント · %s オン/オフ · %f 録画 · %p 画像",
    "Run a command": "コマンドを実行する",
    "Call a webhook": "Webhook を呼び出す",
    "Left empty, leolink sends a small JSON document describing the event.":
        "空のままなら、leolink がイベントを説明する小さな JSON 文書を送ります。",
    "Method": "メソッド",
    "Body": "本文",
    "Publish an MQTT message": "MQTT メッセージを配信する",
    "Left empty: the same JSON document as the webhook.":
        "空のまま: Webhook と同じ JSON 文書。",
    "Keep the last message on the broker": "最後のメッセージをブローカーに残す",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "あとから接続したクライアントが、次のイベントを待たずに現在の状態をすぐ知れます。ホームオートメーションでたいてい必要になるのはこちらです。",
    "Broker": "ブローカー",
    "Topic": "トピック",
    "Payload": "ペイロード",
    "MQTT": "MQTT",
    "In leolink": "leolink 側",
    "In the camera": "カメラ側",
    "Try again": "再試行",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>カメラが知らせる:</b> カメラ自身の検知器が判断し、ONVIF "
        "イベントを送ります。何を見張り、どれくらい起きやすいかは、下の「検知」— カメラ自身の設定 — "
        "で決めます。<br><br><b>leolink が映像を見る:</b> このコンピューターがサブストリームへもう 1 "
        "本接続して映像を解析します。何も知らせないカメラを含め、どのカメラでも使え、その場合カメラ自身の検知器は関係ありません。",
    "Choose what is watched…": "見張る範囲を選ぶ…",
    "How leolink learns of motion": "leolink が動きを知る経路",
    "When leolink watches the picture": "leolink が映像を見るとき",
    "Detection by leolink": "leolink による検知",
    "Recording on this computer": "このコンピューターへの録画",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "ファイルの保存先はどのカメラも同じで、設定 ▸ 録画 で決めます。",
    "Follow the defaults under Settings": "設定の既定に従う",
    "Use this camera's own": "このカメラ独自のものを使う",
    "Reactions": "反応",
    "What happens on an event": "イベント時の動作",
    "Muted": "消音",
    "Sound in leolink": "leolink での音",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "同じ 2 "
        "つはカメラのタイル上にもあり、そちらのほうが早く手が届きます。カメラは消音で始まります。ずらりと並べたカメラを開いたとたん、部屋が全部の音で埋まっては困るからです。",
    "Playback": "再生",
    "&Settings…": "設定(&S)…",
    "Reactions": "反応",
    "Recordings": "録画",
    "General": "全般",
    "Tint the tile red for a moment": "タイルを一瞬赤く染める",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "ずらりと並んだカメラをひと目見るだけで、どれだったか分かるように。",
    " ms": " ミリ秒",
    "Play a sound": "音を鳴らす",
    "Empty: the desktop's own notification sound": "空: デスクトップ自身の通知音",
    "Sound to play": "鳴らす音",
    "For": "長さ",
    "Sound file": "音声ファイル",
    "On the screen": "画面上",
    "The window": "ウィンドウ",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "どのカメラがそもそもイベントを起こすか、またその方法は、カメラごとに カメラ ▸ 設定 ▸ leolink による検知 で決めます。",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "カメラが何かを知らせたときに leolink がすることです。カメラ自身のダイアログが別のことを言わないかぎり、カメラはこれに従います — "
        "すべてか、まったくなしか。半分だけということはありません。部分的に受け継いだ設定は、何かが起きなかったときにいちばん解きほぐしにくいからです。",
    "Recordings and stills": "録画と静止画",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "録画は再エンコードせずに Matroska "
        "で書き出されます。映像はカメラ本来の画質を保ち、プロセッサーはほとんど動きません。\n\nそのカメラがそもそも録画するかどうかは、カメラ "
        "▸ 設定 ▸ 反応 にある、そのカメラ自身の設定です。",
    "Settings for this camera…": "このカメラの設定…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "leolink 側の検知・反応・録画と、カメラ自身のエンコーダー・画質・スケジュール。",

    # ── the settings, split by reach ──
    "nothing": "なし",
    "The seconds leading up to the trigger — usually the part that shows how "
    "someone got there. The past cannot be recorded after the fact, so "
    "anything above zero keeps the stream running into a buffer: one more "
    "connection to the camera, and a little disk.":
        "きっかけの直前の数秒 — "
        "たいてい、その人がどうやってそこへ来たのかが写っている部分です。過ぎたことは後から録画できないので、ゼロより大きくすると映像を常にバッファへ流し込みます。カメラへの接続がもう "
        "1 本と、少しのディスクを使います。",
    "So an event does not stop mid-scene. Motion that resumes within this time "
    "continues the same file instead of starting a second.":
        "イベントが場面の途中で終わらないように。この時間内に動きが再開した場合は、2 つ目のファイルを作らず同じファイルを続けます。",
    "Include before": "前を含める",
    "When something happens": "何かあったとき",
    "Record without stopping": "止めずに録画する",
    " h": " 時間",
    "How far back the archive reaches. Once it is this old, a file is deleted "
    "to make room for the newest one.":
        "アーカイブがどこまでさかのぼるか。この古さになったファイルは、いちばん新しいものの場所を空けるために削除されます。",
    " min": " 分",
    "The archive is a run of files, not one — a file cannot be trimmed at the "
    "front, so keeping a day in one of them would mean rewriting it every "
    "minute. Shorter files find a moment more precisely; longer ones are fewer "
    "to scroll past.":
        "アーカイブは 1 つのファイルではなく連なりです。ファイルは先頭を切り詰められないので、丸一日を 1 "
        "つに収めるには毎分書き直すことになります。短いファイルは目的の瞬間を細かく探せ、長いファイルは数が少なくて済みます。",
    "Keep the last": "保持する期間",
    "One file per": "1 ファイルの長さ",
    "Round the clock": "二十四時間",
    "With both switched on, one buffer serves both: the recording of an event "
    "is cut out of the archive, so nothing extra is opened to the "
    "camera.\n\nWhere the files go is the same for every camera and is set "
    "under Settings ▸ Recordings.":
        "両方を入れると 1 "
        "つのバッファが両方を兼ねます。イベントの録画はアーカイブから切り出されるので、カメラへ余分な接続は開きません。\n\nファイルの保存先はどのカメラも同じで、設定 "
        "▸ 録画 で決めます。",
    "%1 hours of video. How much disk that is depends on the bit rate, which "
    "this camera has not reported yet.":
        "%1 時間ぶんの映像です。ディスクをどれだけ使うかはビットレート次第で、このカメラはまだ知らせてきていません。",
    "About %1 GB at the %2 kbit/s this stream is set to. Make sure the "
    "recordings folder has that much to spare.":
        "このストリームに設定された %2 kbit/s なら約 %1 GB です。録画フォルダーにそれだけ空きがあるか確かめてください。",
    "ffmpeg is not installed, so continuous recording is unavailable.":
        "ffmpeg が入っていないため、連続録画は使えません。",
    "Nothing had been buffered yet.": "まだ何もバッファされていませんでした。",
    "That moment is no longer in the buffer.": "その時点はもうバッファにありません。",
    "The recording could not be cut out of the buffer.":
        "バッファから録画を切り出せませんでした。",
}


# Plural forms — one form: this language does not inflect for number.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        "、アクセスポイント %n 台"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "アクセスポイント %n 台から受信 — 1 つのネットワークに複数のノード。表示しているのは最も強いものです。"],
    "%n network(s) found, strongest first.": [
        "ネットワークを %n 件検出、強い順。"],
    "Asking about %n command(s)…": [
        "%n 件のコマンドを問い合わせています…"],
    "%n area(s) blanked": [
        "%n 個の領域を塗りつぶし"],
    "%n area(s), switched off": [
        "%n 個の領域、オフ"],
    "%n hour(s) a week.": [
        "週 %n 時間。"],
    "%n camera(s) live": [
        "%n 台のカメラがライブ"],
    "Saved %n snapshot(s)": [
        "静止画を %n 枚保存しました"],
    "Found %n device(s)…": [
        "%n 台の機器を検出…"],
    "%n recording(s) found.": [
        "録画が %n 件見つかりました。"],
    "%n network(s) found.": [
        "ネットワークが %n 件見つかりました。"],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "直近 10 秒で %n 枚のフレームが壊れました。\n\nたいていは Wi-Fi "
        "信号が弱いか、解像度に対してビットレートが低すぎるかです。leolink は直せるものは直します — これは直せなかったぶんです。"],
}
