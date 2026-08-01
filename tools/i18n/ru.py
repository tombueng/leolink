"""Russian. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Russian. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "Диагностика",
    "&Diagnostics…": "&Диагностика…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "Чем занимались leolink и камеры — и отчёт, который можно приложить к "
        "сообщению об ошибке.",
    "Errors only": "Только ошибки",
    "Warnings and errors": "Предупреждения и ошибки",
    "Normal activity": "Обычная работа",
    "Everything": "Всё",
    "All areas": "Все области",
    "Search…": "Поиск…",
    "Show": "Показывать",
    "Detailed logging": "Подробный журнал",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "Записывает каждый запрос к камере, каждое решение декодера и каждое "
        "переподключение. В повседневной работе держите выключенным — "
        "включите, когда что-то не так, воспроизведите проблему и лишь затем "
        "отправьте отчёт.",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "Записывает каждый запрос к камере, каждое решение декодера и каждое "
        "переподключение в ~/.local/share/leolink/leolink.log.",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "Ошибки и предупреждения записываются всегда. Подробный журнал "
        "добавляет переписку с камерой — включите его, когда что-то не так, "
        "воспроизведите проблему, затем отправьте отчёт из «Справка ▸ "
        "Диагностика». Пароли и сессионные ключи удаляются до записи.",
    "Open diagnostics…": "Открыть диагностику…",
    "Open diagnostics": "Открыть диагностику",
    "Follow new lines": "Следовать за новыми строками",
    "Copy report": "Скопировать отчёт",
    "System details and the log, ready to paste into a bug report.":
        "Сведения о системе и журнал, готовые для вставки в сообщение об "
        "ошибке.",
    "Report copied.": "Отчёт скопирован.",
    "Save report…": "Сохранить отчёт…",
    "Save report": "Сохранить отчёт",
    "Text files (*.txt)": "Текстовые файлы (*.txt)",
    "Could not write %1.": "Не удалось записать %1.",
    "Open log folder": "Открыть папку журнала",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "Пароли, сессионные ключи и интернет-адреса удаляются до записи, "
        "поэтому отчёт можно передавать как есть. Адреса внутри вашей сети "
        "сохраняются — обычно они и есть первая зацепка.",
    "%1 of %2 lines": "%1 из %2 строк",
    "Report a problem": "Сообщить о проблеме",
    "<b>Attach a diagnostics report</b>":
        "<b>Приложите диагностический отчёт</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "Он фиксирует, что у вас за машина, что ответили камеры и где всё "
        "пошло не так — пароли и адреса уже удалены. Без него большинство "
        "сообщений невозможно разобрать.\n\nЕсли проблему удаётся вызвать "
        "самому, сначала включите подробный журнал в окне диагностики, "
        "повторите её и лишь затем скопируйте отчёт.",
    "Go to the issue tracker": "Перейти к трекеру задач",
    "Application": "Приложение",
    "Camera API": "Интерфейс камеры",
    "ONVIF events": "События ONVIF",
    "Event actions": "Действия по событию",
    "Baichuan": "Baichuan",
    "User interface": "Интерфейс пользователя",
    "Qt": "Qt",
    "strong": "сильный",
    "good": "хороший",
    "fair": "средний",
    "weak": "слабый",
    "unknown": "неизвестно",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "Сигнал так, как его слышит камера: %1 из 4",
    "Encryption: %1": "Шифрование: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "Некоторые имена были слышны с нескольких точек доступа — это "
        "mesh-сеть. Камера подключается к имени, а не к конкретному узлу; сеть "
        "сама решает, с каким из них говорить, и передаёт её по мере "
        "надобности. Чтобы найти лучшее место, перемещайте камеру и следите за "
        "«Сигналом Wi-Fi» выше: это и есть та связь, что у неё на самом деле.",
    "What this camera supports": "Что умеет эта камера",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "Прошивка Reolink сильно различается от модели к модели, и "
        "единственный надёжный способ узнать, что камера умеет, — спросить её "
        "саму. Если в leolink нет чего-то, что у вашей камеры явно есть, "
        "именно этот список в сообщении об ошибке позволяет это добавить.",
    "Ask the camera": "Спросить камеру",
    "Copy the list": "Скопировать список",
    "Copied.": "Скопировано.",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>Поддерживается (%1):</b> %2<br><br><b>Не поддерживается (%3):</b> "
        "%4",
    "Privacy": "Приватность",
    "Privacy areas…": "Приватные зоны…",
    "Parts of the view the camera blanks before anything leaves it.":
        "Части кадра, которые камера закрашивает, прежде чем что-либо покинет "
        "её.",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "Закрашивается в самой камере, поэтому закрытая часть отсутствует у "
        "любого зрителя и в любой записи — окно соседа или стол, которому не "
        "место на видео.",
    "%1 — privacy areas": "%1 — приватные зоны",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "Выделите части кадра, которые камера должна закрасить. Она делает это "
        "до того, как что-либо покинет устройство, поэтому их нет ни в живой "
        "картинке, ни в записях, ни в любой другой программе — включая "
        "приложение производителя.",
    "Remove the last": "Удалить последнюю",
    "Remove all": "Удалить все",
    "No picture: %1 — the areas can still be drawn.":
        "Нет изображения: %1 — зоны всё равно можно нарисовать.",
    "%1 of %2 areas": "%1 из %2 зон",
    "nothing blanked": "ничего не закрашено",
    "Detection area…": "Зона обнаружения…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "Какие части кадра камера наблюдает. Всё за пределами зоны "
        "игнорируется — дорога у края кадра, дерево на ветру, дверь соседа.",
    "%1 — the camera's detection area": "%1 — зона обнаружения камеры",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "Проведите по изображению, чтобы выбрать, что камера наблюдает. "
        "Затемнённые области игнорируются. Это собственная сетка камеры, %1 на "
        "%2, поэтому она мельче, чем у leolink.",
    "When to watch…": "Когда наблюдать…",
    "Hours of the week the camera raises motion events at all.":
        "Часы недели, в которые камера вообще сообщает о движении.",
    "%1 — when to watch": "%1 — когда наблюдать",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "Часы, в которые камера сообщает о движении. В остальное время она всё "
        "видит, но молчит.",
    "When to record…": "Когда записывать…",
    "Hours of the week the camera records to its card by itself.":
        "Часы недели, в которые камера сама пишет на свою карту.",
    "%1 — when to record": "%1 — когда записывать",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "Часы, в которые камера пишет на собственную карту. Для этого нужна "
        "установленная карта; запись на этот компьютер настраивается в «Камеры "
        "→ События» и обходится без неё.",
    "Area, times and sensitivity": "Зона, время и чувствительность",
    "To": "До",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "Камеры допускают разную чувствительность в разное время суток — так "
        "фары ночью перестают срабатывать на всё подряд, а днём камера не "
        "глохнет.",
    "All week": "Всю неделю",
    "Never": "Никогда",
    "Nights": "Ночью",
    "Working hours": "Рабочее время",
    "Weekends": "Выходные",
    "22:00 to 06:00, every day.": "С 22:00 до 06:00, ежедневно.",
    "08:00 to 17:00, Monday to Friday.":
        "С 08:00 до 17:00, с понедельника по пятницу.",
    "Nothing is selected — this will never run.":
        "Ничего не выбрано — это никогда не сработает.",
    "Always on.": "Всегда включено.",
    "Mobile data": "Мобильные данные",
    "SIM card": "SIM-карта",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "Нужен, только если карта его спрашивает. Три неверные попытки "
        "блокируют карту, и тогда потребуется PUK, который есть только у "
        "оператора.",
    "Access point (APN)": "Точка доступа (APN)",
    "Authentication": "Аутентификация",
    "Use mobile data": "Использовать мобильные данные",
    "Modem": "Модем",
    "Card": "Карта",
    "Type": "Тип",
    "Signal": "Сигнал",
    "IMEI": "IMEI",
    "Card number": "Номер карты",
    "Mobile connection": "Мобильное соединение",
    "Data used": "Израсходовано данных",
    "Monthly limit": "Месячный лимит",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>Не проверено на настоящем оборудовании.</b> Ни у кого из "
        "причастных к leolink нет камеры с модемом, поэтому это написано по "
        "одному лишь протоколу. Испортить ничего нельзя — неизвестную камере "
        "команду она просто отклонит — но с тем же успехом может вообще ничего "
        "не показать.\n\nЕсли в вашей камере есть SIM, пункт «Что умеет эта "
        "камера» в разделе «Обслуживание» перечисляет команды, которые её "
        "прошивка действительно знает. Именно такой список в сообщении об "
        "ошибке позволил бы довести это до ума.",
    "Baichuan (the camera's own protocol)":
        "Baichuan (собственный протокол камеры)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP подходит большинству камер, и начинать стоит с него.\n\nHTTP-FLV "
        "нужен только порт 80, что выручает там, где RTSP закрыт.\n\nBaichuan "
        "— то, на чём говорит приложение Reolink. Это ответ для камер, у "
        "которых RTSP выключен — так делают модели на батарее — и он не "
        "занимает ни одной из немногочисленных веб-сессий камеры. Только "
        "видео: звук по-прежнему идёт по RTSP.",
    "connecting over Baichuan…": "подключение через Baichuan…",
    "Cannot open a local port: %1": "Не удаётся открыть локальный порт: %1",
    "Baichuan login failed: %1": "Не удалось войти по Baichuan: %1",
    "The camera refused to send video: %1":
        "Камера отказалась передавать видео: %1",
    "The player did not connect.": "Проигрыватель не подключился.",
    "The camera stopped sending.": "Камера перестала передавать.",
    "custom stream": "свой поток",
    "Speak through the camera": "Говорить через камеру",
    "Stop speaking": "Прекратить говорить",
    "Play through %1": "Воспроизвести через %1",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "Звуковые файлы (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Все файлы (*)",
    "Speaking through the camera…": "Говорим через камеру…",
    "Finished.": "Готово.",
    "Cannot reach the camera: %1": "Не удаётся связаться с камерой: %1",
    "The camera did not answer on the RTSP port.":
        "Камера не ответила на порту RTSP.",
    "ffmpeg is needed to send sound and could not be started.":
        "Для передачи звука нужен ffmpeg, и запустить его не удалось.",
    "The camera rejected the user name or password.":
        "Камера отклонила имя пользователя или пароль.",
    "The camera refused: %1": "Камера отказала: %1",
    "This camera does not offer a speaker.": "У этой камеры нет динамика.",
    "Sound": "Звук",
    "Send sound": "Передавать звук",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "Микрофон камеры. Даже выключенный, он всё равно кладёт в поток "
        "звуковую дорожку — совершенно немую, распознать которую куда труднее, "
        "чем полное её отсутствие.",
    "What it recognises": "Что она распознаёт",
    "People": "Люди",
    "Vehicles": "Транспорт",
    "Animals": "Животные",
    "Faces": "Лица",
    "Any movement": "Любое движение",
    "Continuous": "Непрерывно",
    "This camera keeps a separate week for each kind of event. Which one?":
        "Эта камера ведёт отдельную неделю для каждого типа событий. Какую?",
    "Push notifications": "Push-уведомления",
    "Folder": "Папка",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "Сейчас камера не отвечает на запросы. Так бывает, когда их приходит "
        "слишком много сразу; через мгновение она приходит в себя сама.",
    "Camera-side detection": "Обнаружение в камере",
    "Where it looks": "Куда она смотрит",
    "Choose the area…": "Выбрать зону…",
    "When it reports at all": "Когда она вообще сообщает",
    "Choose the hours…": "Выбрать часы…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "Неделя по часам: в отмеченных камера сообщает о движении, в остальных "
        "молчит. К её чувствительности это отношения не имеет — она "
        "настраивается ниже.",
    "How readily it triggers": "Насколько легко она срабатывает",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "В течение суток камера может срабатывать легче или труднее. Так фары "
        "ночью перестают срабатывать на всё подряд, а днём камера не слепнет. "
        "Сколько будет промежутков, задаёт камера; их время и чувствительность "
        "— за вами.",
    "Siren": "Сирена",
    "Sound on an alarm": "Звучать при тревоге",
    "Times": "Время",
    "Spotlight": "Прожектор",
    "On": "Включён",
    "Draw": "Рисовать",
    "Watch a rectangle": "Наблюдать прямоугольник",
    "Ignore a rectangle": "Игнорировать прямоугольник",
    "Drag over single cells.": "Проведите по отдельным клеткам.",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "Растяните прямоугольник для наблюдения. Shift с перетаскиванием "
        "делает то же самое, не меняя инструмент.",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "Растяните прямоугольник, который нужно игнорировать. Ctrl с "
        "перетаскиванием делает то же самое, не меняя инструмент.",
    "  · already added": "  · уже добавлена",
    "Processor load %1 %": "Загрузка процессора %1 %",
    "Encoder output %1 kbit/s": "Поток кодировщика %1 кбит/с",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "Поддерживается (%1):\n%2\n\nНе поддерживается (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "К Reolink обращается камера, а не этот компьютер — значит, ей нужен "
        "собственный выход в интернет.",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "Часть камеры не ответила. В зависимости от того, о чём её спросили, "
        "это значит, что карта SD не установлена или у камеры нет выхода в "
        "интернет.",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "Сброса к заводским настройкам здесь нет. Он стирает и сетевые "
        "настройки, а камеру, забывшую свой Wi-Fi, придётся снимать и "
        "подключать кабелем — если вам это действительно нужно, воспользуйтесь "
        "её собственным веб-интерфейсом.",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "У камеры нет свободных сессий. Она допускает лишь несколько "
        "одновременно, и они общие с мобильным приложением и её веб-страницей. "
        "Закройте их или подождите минуту, пока старые истекут.",
    "&File": "&Файл",
    "&View": "&Вид",
    "&Help": "&Справка",
    "&Cameras…": "&Камеры…",
    "&Save snapshots…": "&Сохранить снимки…",
    "&Event log…": "&Журнал событий…",
    "Open &recordings folder": "Открыть папку &записей",
    "&Quit": "В&ыход",
    "&Full screen": "&Полный экран",
    "Leave full screen": "Выйти из полного экрана",
    "Show &menu bar": "Показывать строку &меню",
    "Show &toolbar": "Показывать панель &инструментов",
    "Show status &bar": "Показывать строку &состояния",
    "Hide window &decoration": "Скрыть &рамку окна",
    "&Online handbook": "Руководство в &сети",
    "&Protocol notes": "Заметки о &протоколе",
    "&Report a problem": "Сообщить о п&роблеме",
    "&About leolink": "&О leolink",
    "Main": "Основная",
    "Ready": "Готово",
    "Grid view": "Сетка",
    "No cameras configured": "Камеры не настроены",
    "Nothing to capture": "Снимать нечего",
    "Save snapshots to": "Сохранять снимки в",
    "Esc leaves full screen": "Esc выходит из полного экрана",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc выходит из полного экрана · двойной щелчок по камере "
        "разворачивает её на весь экран",
    "Double-click for the grid · Esc leaves full screen":
        "Двойной щелчок — вернуться к сетке · Esc выходит из полного экрана",
    "Cannot save": "Не удаётся сохранить",
    "Settings could not be written to %1.":
        "Настройки не удалось записать в %1.",
    "Cannot create %1": "Не удаётся создать %1",
    "Recording %1": "Запись %1",
    "Saved %1": "Сохранено %1",
    "Motion at %1": "Движение у %1",
    "Motion detected": "Обнаружено движение",
    "Could not run the motion command for %1":
        "Не удалось выполнить команду при движении для %1",
    "leolink is still running": "leolink продолжает работать",
    "Cameras keep recording. Use the tray icon to come back.":
        "Камеры продолжают запись. Чтобы вернуться, воспользуйтесь значком в "
        "области уведомлений.",
    "Show window": "Показать окно",
    "Cameras…": "Камеры…",
    "Quit": "Выход",
    "Welcome to leolink": "Добро пожаловать в leolink",
    "<b>No cameras are configured yet.</b>":
        "<b>Пока не настроено ни одной камеры.</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "Добавьте камеру с её адресом, именем пользователя и паролем. leolink "
        "говорит с камерой напрямую в вашей сети — никакой облачной учётной "
        "записи не требуется.<p>Что делает каждый параметр, описано в "
        "руководстве.",
    "Add camera…": "Добавить камеру…",
    "Open handbook": "Открыть руководство",
    "About leolink": "О leolink",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Родной клиент Linux для камер "
        "Reolink.</p><p>Говорит на собственных протоколах камеры напрямую: "
        "HTTP-интерфейс, RTSP и ONVIF в локальной сети, а также служба P2P от "
        "Reolink, когда до камеры нужно дотянуться извне.</p><p><a "
        "href=\"%2\">Руководство</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">Исходный "
        "код</a></p><p>Не связан с Reolink и не поддерживается ею.</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "Пока не настроено ни одной камеры.\n\nДобавьте её через «Камеры…».",
    "connecting…": "подключение…",
    "main stream": "основной поток",
    "sub stream": "дополнительный поток",
    "no host configured": "адрес не задан",
    "cannot open stream": "не удаётся открыть поток",
    "libmpv unavailable": "libmpv недоступна",
    "player init failed": "не удалось запустить проигрыватель",
    "MOTION": "ДВИЖЕНИЕ",
    "Mute this camera": "Приглушить эту камеру",
    "Unmute this camera": "Вернуть звук этой камеры",
    "Volume": "Громкость",
    "Camera settings": "Настройки камеры",
    "Settings": "Настройки",
    "Cameras": "Камеры",
    "Layout": "Расположение",
    "Events": "События",
    "Window": "Окно",
    "Add": "Добавить",
    "Remove": "Удалить",
    "Remove camera": "Удалить камеру",
    "Remove “%1” from the list?": "Удалить «%1» из списка?",
    "New camera": "Новая камера",
    "Name": "Название",
    "Host": "Адрес",
    "User": "Пользователь",
    "Password": "Пароль",
    "Password command": "Команда для пароля",
    "UID": "UID",
    "Stream": "Поток",
    "Transport": "Транспорт",
    "192.168.1.10 or camera.lan": "192.168.1.10 или camera.lan",
    "optional, for P2P access": "не обязательно, для доступа по P2P",
    "optional: pass show reolink/hall":
        "не обязательно: pass show reolink/prihozhaya",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "Если задана, выполняется эта команда, и её вывод используется как "
        "пароль. Так секрет не попадает в файл настроек.",
    "Sub stream (low bandwidth)": "Дополнительный поток (мало трафика)",
    "Main stream (full resolution)": "Основной поток (полное разрешение)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (меньше задержка)",
    "Use HTTPS for the control API":
        "Использовать HTTPS для управляющего интерфейса",
    "Show this camera": "Показывать эту камеру",
    "Test connection": "Проверить соединение",
    "Contacting %1…": "Связываемся с %1…",
    "Enter a host first.": "Сначала укажите адрес.",
    "Incomplete camera": "Камера заполнена не полностью",
    "“%1” has no host address.": "У «%1» нет адреса.",
    "%1 — firmware %2, %3 channel(s)": "%1 — прошивка %2, каналов: %3",
    "Scan network…": "Просканировать сеть…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "Спрашивает у сети, какие камеры ONVIF в ней есть. Отправляется один "
        "многоадресный запрос; с устройствами, которые молчат, связь не "
        "устанавливается.",
    "Looking for cameras…": "Поиск камер…",
    "Stop": "Остановить",
    "Cameras found": "Найдены камеры",
    "Add which one?": "Какую добавить?",
    "No cameras found": "Камеры не найдены",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "Ни одно устройство ONVIF не ответило.\n\nКамеры отвечают, только если "
        "ONVIF включён, а запрос не проходит ни через маршрутизаторы, ни через "
        "большинство VPN. Камеру всё равно можно добавить, введя её адрес "
        "вручную.",
    "unnamed device": "устройство без названия",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.":
        "Не удаётся открыть UDP-сокет для поиска.",
    "Grid size": "Размер сетки",
    "Columns": "Столбцов",
    "Rows": "Строк",
    "Column": "Столбец",
    "Row": "Строка",
    "Row span": "Занимает строк",
    "Column span": "Занимает столбцов",
    "automatic": "автоматически",
    "Position of the selected camera": "Положение выбранной камеры",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "Оставьте строку и столбец на «автоматически», и камеры заполнят сетку "
        "по порядку. Занимая несколько ячеек, одна камера может покрыть сразу "
        "нескольких.",
    "Watch cameras for motion (ONVIF push)":
        "Следить за движением на камерах (push по ONVIF)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "Камера сообщает о движении, как только оно происходит, вместо того "
        "чтобы leolink спрашивал раз в секунду.",
    "Run command": "Выполнить команду",
    "notify-send \"Motion at %n\"": "notify-send \"Движение у %n\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "Выполняется, когда эта камера сообщает о движении.\n%n название "
        "камеры · %h адрес · %t отметка времени · %f файл записи",
    "Record while motion lasts": "Записывать, пока длится движение",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "Пишет на этот компьютер из живого потока, поэтому работает даже "
        "тогда, когда в камере нет карты SD.",
    "Keep recording after": "Продолжать запись ещё",
    " s": " с",
    "Selected camera": "Выбранная камера",
    "All cameras": "Все камеры",
    "Recordings folder": "Папка записей",
    "Browse…": "Обзор…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "Записи пишутся в Matroska без перекодирования: изображение сохраняет "
        "исходное качество камеры, а процессор остаётся почти без нагрузки.",
    "Appearance": "Внешний вид",
    "Show menu bar": "Показывать строку меню",
    "Show toolbar": "Показывать панель инструментов",
    "Show status bar": "Показывать строку состояния",
    "Hide window decoration": "Скрыть рамку окна",
    "Ctrl+M toggles this at any time.":
        "Ctrl+M переключает это в любой момент.",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "Для настенных экранов. Переключается по Ctrl+Shift+D.",
    "Notification area": "Область уведомлений",
    "Show an icon in the notification area":
        "Показывать значок в области уведомлений",
    "Closing the window hides it instead of quitting":
        "Закрытие окна скрывает его, а не завершает программу",
    "Minimising hides the window to the tray":
        "Сворачивание убирает окно в область уведомлений",
    "On motion": "При движении",
    "Bring the window up when motion is detected":
        "Показывать окно, когда обнаружено движение",
    "Come back as": "Возвращаться как",
    "Previous size": "Прежний размер",
    "Full screen": "Полный экран",
    "Language": "Язык",
    "System language": "Язык системы",
    "Takes effect after restarting leolink.":
        "Вступает в силу после перезапуска leolink.",
    "Menu bar hidden": "Строка меню скрыта",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "Когда скрыты и строка меню, и панель инструментов, нажмите Ctrl+M, "
        "чтобы вернуть меню.",
    "Event log": "Журнал событий",
    "Camera:": "Камера:",
    "Show:": "Показывать:",
    "All events": "Все события",
    "Motion": "Движение",
    "With recording": "С записью",
    "Refresh": "Обновить",
    "When": "Когда",
    "Camera": "Камера",
    "Event": "Событие",
    "Media": "Медиа",
    "video": "видео",
    "image": "изображение",
    " + image": " + изображение",
    "no preview": "нет предпросмотра",
    "recording only": "только запись",
    "no events recorded yet": "событий пока не записано",
    "Recording: %1%2": "Запись: %1%2",
    " (file missing)": " (файл отсутствует)",
    "Image: %1": "Изображение: %1",
    "Open recording": "Открыть запись",
    "Open image": "Открыть изображение",
    "Nothing to open": "Открывать нечего",
    "The file for this event is no longer there.":
        "Файла этого события больше нет.",
    "Clear log…": "Очистить журнал…",
    "Clear event log": "Очистить журнал событий",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "Удалить всю историю событий?\n\nЗаписанные видео и изображения "
        "останутся на диске — очищается только журнал.",
    "Command": "Команда",
    "could not be started": "не удалось запустить",
    "Webhook": "Webhook",
    "invalid URL": "неверный адрес",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 не удалось: %2",
    "Event log…": "Журнал событий…",
    "MQTT broker or topic not set.": "Не задан брокер или тема MQTT.",
    "MQTT broker did not respond.": "Брокер MQTT не ответил.",
    "MQTT: %1": "MQTT: %1",
    "MQTT: unexpected reply from the broker.":
        "MQTT: неожиданный ответ брокера.",
    "MQTT refused the connection: %1": "MQTT отклонил соединение: %1",
    "Video": "Видео",
    "Decoding": "Декодирование",
    "Hardware, fastest": "Аппаратное, самое быстрое",
    "Hardware, with frame copy": "Аппаратное, с копированием кадров",
    "Software only": "Только программное",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "Аппаратное декодирование освобождает процессор и подходит для "
        "разрешений основного потока.\n\nЕсли в изображении появляются зелёные "
        "блоки или оно замирает, выберите «с копированием кадров»: "
        "декодирование остаётся на видеокарте, но каждый кадр копируется в "
        "основную память — это нужно некоторым драйверам, когда видео "
        "находится внутри другого окна.",
    "Favour low latency over smoothness":
        "Предпочитать низкую задержку плавности",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "Сводит буферизацию к минимуму. Выключите, если поток с высоким "
        "битрейтом дёргается в загруженной сети.",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "Чтобы передвинуть окно, потяните полосу под камерой. Ctrl+Shift+D "
        "возвращает рамку, Ctrl+M — меню.",
    "%1 — camera settings": "%1 — настройки камеры",
    "Reading settings from %1…": "Читаем настройки с %1…",
    "Apply to camera": "Применить к камере",
    "Main stream": "Основной поток",
    "Sub stream": "Дополнительный поток",
    "Resolution": "Разрешение",
    "Frame rate": "Частота кадров",
    "Bit rate (kbit/s)": "Битрейт (кбит/с)",
    "H.264 profile": "Профиль H.264",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "Выше — лучше картинка и больше трафика. Камера предлагает только те "
        "значения, которые действительно способна выдержать.",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "Это меняет саму камеру, поэтому результат увидит любая программа. "
        "Список вариантов приходит от камеры и различается у разных моделей.",
    "Picture": "Изображение",
    "Brightness": "Яркость",
    "Contrast": "Контраст",
    "Saturation": "Насыщенность",
    "Sharpness": "Резкость",
    "Hue": "Оттенок",
    "Ready.": "Готово.",
    "Writing to the camera…": "Запись в камеру…",
    "Nothing to write.": "Записывать нечего.",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "Сохранено. Смена кодировщика перезапускает поток, поэтому изображение "
        "может ненадолго пропасть.",
    "&Record all cameras": "&Записывать все камеры",
    "Record this camera": "Записывать эту камеру",
    "Stop recording": "Остановить запись",
    "Recording all cameras": "Идёт запись всех камер",
    "Recording stopped": "Запись остановлена",
    "Recording started": "Запись начата",
    "Could not start recording %1": "Не удалось начать запись %1",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "ffmpeg не установлен, поэтому запись недоступна.",
    "No stream address for %1.": "Нет адреса потока для %1.",
    "Recording failed: %1": "Запись не удалась: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "Запись не дала данных (ffmpeg завершился с кодом %1).",
    "Could not start ffmpeg.": "Не удалось запустить ffmpeg.",
    "Custom URL": "Свой адрес",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "Любой адрес, который умеет открыть libmpv. Подходит для камер других "
        "производителей, потока с видеорегистратора или локального файла.",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "ffmpeg не установлен, поэтому обнаружение движения недоступно.",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "ffmpeg не установлен, поэтому обнаружение звука недоступно.",
    "Motion detection stopped: %1": "Обнаружение движения остановлено: %1",
    "Sound detection stopped: %1": "Обнаружение звука остановлено: %1",
    "Could not start ffmpeg for motion detection.":
        "Не удалось запустить ffmpeg для обнаружения движения.",
    "Could not start ffmpeg for sound detection.":
        "Не удалось запустить ffmpeg для обнаружения звука.",
    "Sound detected": "Обнаружен звук",
    "%1 at %2": "%1 у %2",
    "Detection": "Обнаружение",
    "Motion comes from": "О движении сообщает",
    "The camera reports it (ONVIF)": "Сама камера (ONVIF)",
    "leolink watches the picture": "leolink, наблюдая за картинкой",
    "Either of the two": "Любой из двух",
    "Do not watch": "Не наблюдать",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "Камеры, которые сами сообщают о движении, ничего не стоят в "
        "наблюдении.\n\nАнализ картинки здесь работает с любой камерой, в том "
        "числе с теми, что не сообщают ни о чём, но открывает для каждой "
        "второе соединение к дополнительному потоку.",
    "Motion zones…": "Зоны движения…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "Выберите, какие части изображения наблюдаются. Действует, только "
        "когда картинку анализирует сам leolink.",
    "Sensitivity": "Чувствительность",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "Насколько должна измениться точка изображения, чтобы это засчиталось. "
        "Выше — замечает больше, включая тени и дождь.",
    "Minimum area": "Минимальная площадь",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "Какая доля наблюдаемой площади должна измениться, чтобы это считалось "
        "движением. 20 ‰ — это два процента кадра, примерно человек на средней "
        "дистанции.",
    "Raise an event on sound": "Создавать событие по звуку",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "Нужна камера с микрофоном. Открывает ещё одно соединение к "
        "дополнительному потоку.",
    "Sound above": "Звук громче",
    " dB": " дБ",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 дБ — почти тишина, -20 дБ — повышенный голос рядом.",
    "Hold for": "Удерживать",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "Держит событие после того, как шум стих, чтобы один лай не сообщался "
        "четыре раза.",
    "%1 — motion zones": "%1 — зоны движения",
    "no picture available": "изображение недоступно",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "Проведите по изображению, чтобы выбрать, что наблюдается. Затемнённые "
        "области игнорируются — удобно для дороги у края кадра, дерева на "
        "ветру или соседского порога.",
    "Watch all": "Наблюдать всё",
    "Ignore all": "Игнорировать всё",
    "Invert": "Обратить",
    "Fetching a picture from %1…": "Получаем изображение с %1…",
    "No picture: %1 — the zones can still be set.":
        "Нет изображения: %1 — зоны всё равно можно задать.",
    "Recordings on the &camera…": "Записи на &камере…",
    "Browse what is stored on the camera's own SD card.":
        "Просмотрите то, что лежит на собственной карте SD камеры.",
    "Which camera": "Какая камера",
    "Show recordings from": "Показать записи с",
    "%1 — recordings on the camera": "%1 — записи на камере",
    "Search": "Найти",
    "From": "С",
    "to": "по",
    "Start": "Начало",
    "Length": "Длительность",
    "Size": "Размер",
    "File": "Файл",
    "Play": "Воспроизвести",
    "Download…": "Скачать…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "Выберите период и нажмите «Найти». Записи существуют, только если в "
        "камеру вставлена карта SD.",
    "Asking %1…": "Спрашиваем %1…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "За этот период ничего не найдено. Либо ничего не записывалось, либо в "
        "камере нет карты SD.",
    "No session with the camera — search first.":
        "Нет сессии с камерой — сначала выполните поиск.",
    "No player": "Нет проигрывателя",
    "mpv was not found. The recording is at:\n\n%1":
        "mpv не найден. Запись находится здесь:\n\n%1",
    "Save recording": "Сохранить запись",
    "Cannot write to %1.": "Не удаётся записать в %1.",
    "Saved to %1": "Сохранено в %1",
    "Download failed: %1": "Не удалось скачать: %1",
    "Maintenance": "Обслуживание",
    "Restart": "Перезапуск",
    "Restart the camera": "Перезапустить камеру",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "Камера пропадёт из сети примерно на минуту и вернётся сама. Записи на "
        "её карте SD не пострадают, настройки сохранятся.\n\nСтоит "
        "попробовать, когда камера перестала отвечать, отказывает в новых "
        "соединениях или разладилась после обновления прошивки.",
    "<b>Restart %1?</b>": "<b>Перезапустить %1?</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "Изображение пропадёт примерно на минуту. Всё, что записывается прямо "
        "сейчас, остановится.",
    "Asking %1 to restart…": "Просим %1 перезапуститься…",
    "Restarting. The camera will be back in about a minute.":
        "Перезапускается. Камера вернётся примерно через минуту.",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "Сброса к заводским настройкам и форматирования карты SD здесь нет. И "
        "то и другое необратимо, и делать это лучше в собственном "
        "веб-интерфейсе камеры, где предупреждения исходят от производителя.",
    "Network": "Сеть",
    "Connection": "Соединение",
    "Reading…": "Чтение…",
    "Wi-Fi signal": "Сигнал Wi-Fi",
    "Wi-Fi signal unknown": "Сигнал Wi-Fi неизвестен",
    "Wi-Fi signal %1 of %2": "Сигнал Wi-Fi %1 из %2",
    "Link": "Подключение",
    "Address": "Адрес",
    "Netmask": "Маска сети",
    "Gateway": "Шлюз",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "Имя сети",
    "Ports": "Порты",
    "The camera reported nothing.": "Камера ничего не сообщила.",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "Показано для справки. Адреса, данные Wi-Fi и порты меняются в "
        "собственном веб-интерфейсе камеры — ошибка здесь сделала бы камеру "
        "недосягаемой.",
    "Hardware, with frame copy (recommended)":
        "Аппаратное, с копированием кадров (рекомендуется)",
    "Hardware, zero copy (fastest)":
        "Аппаратное, без копирования (самое быстрое)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "Все три декодируют на видеокарте там, где это возможно.\n\n«С "
        "копированием кадров» проводит каждый кадр через основную память. Это "
        "на несколько процентов медленнее и выбрано по умолчанию, потому что "
        "путь без копирования на ряде драйверов даёт зелёные блоки или "
        "застывшую картинку, когда видео находится внутри другого "
        "окна.\n\nПопробуйте «без копирования», если нужны последние проценты; "
        "вернитесь назад, если изображение рассыпается.",
    "This camera does not offer these settings.":
        "У этой камеры таких настроек нет.",
    "Exposure and orientation": "Экспозиция и ориентация",
    "Day / night": "День / ночь",
    "Automatic": "Автоматически",
    "Always colour": "Всегда цветное",
    "Always black and white": "Всегда чёрно-белое",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "«Авто» переходит в инфракрасный режим по мере убывания света. "
        "Принудительный цвет ночью даёт слишком тёмную и бесполезную картинку; "
        "принудительное чёрно-белое днём отнимает цвет впустую.",
    "Anti-flicker": "Подавление мерцания",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "Подберите под частоту вашей электросети — 50 Гц в Европе — иначе "
        "комнатное освещение начнёт биться с затвором и картинка будет "
        "пульсировать.",
    "Exposure": "Экспозиция",
    "Mirror": "Зеркально",
    "Flip": "Перевернуть",
    "For a camera mounted upside down.":
        "Для камеры, установленной вверх ногами.",
    "Backlight compensation": "Компенсация контрового света",
    "Helps when the subject stands against a bright window or sky.":
        "Помогает, когда объект стоит на фоне яркого окна или неба.",
    "Noise reduction": "Шумоподавление",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "Вычищает тёмную картинку ценой смазывания всего, что движется.",
    "Rotation": "Поворот",
    "Dynamic contrast": "Динамический контраст",
    "Infrared illumination": "Инфракрасная подсветка",
    "Infrared lamps": "Инфракрасные лампы",
    "Always on": "Всегда включены",
    "Always off": "Всегда выключены",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "«Авто» включает их с наступлением темноты. Выключите, если камера "
        "смотрит через стекло — отражение её ослепляет.",
    "Overlay": "Наложение",
    "On-screen text": "Текст поверх изображения",
    "Background": "Подложка",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "Рисует прямоугольник за текстом, чтобы он оставался читаемым на "
        "светлой сцене.",
    "Watermark": "Водяной знак",
    "Embeds a mark in the recording itself.":
        "Встраивает метку в саму запись.",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "Камера впечатывает это прямо в изображение, поэтому оно появляется в "
        "каждой записи и в каждой программе — не только здесь.",
    "Motion detection in the camera": "Обнаружение движения в камере",
    "Switched on": "Включено",
    "Higher notices more, including shadows and headlights.":
        "Выше — замечает больше, включая тени и фары.",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "Это собственное обнаружение камеры, то самое, о котором она сообщает "
        "по ONVIF. Анализ картинки силами leolink настраивается отдельно, в "
        "«Камеры → События».",
    "Recording": "Запись",
    "Recording to the camera's card": "Запись на карту камеры",
    "Overwrite when full": "Перезаписывать при заполнении",
    "Off means recording simply stops once the card fills up.":
        "Выключено означает, что запись просто прекращается, как только карта "
        "заполнится.",
    "Record before the event": "Записывать до события",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "Сохраняет секунды перед срабатыванием — обычно самое интересное.",
    "File length": "Длина файла",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "Это управляет тем, что камера пишет на свою карту SD. Запись на этот "
        "компьютер настраивается в «Камеры → События» и карты не требует.",
    "Alerts": "Оповещения",
    "E-mail": "Эл. почта",
    "FTP": "FTP",
    "FTP upload": "Выгрузка по FTP",
    "Push notification": "Push-уведомление",
    "Server": "Сервер",
    "Port": "Порт",
    "Send to": "Отправлять на",
    "Encrypted": "Шифрование",
    "Not more often than": "Не чаще, чем раз в",
    "Attach": "Прикладывать",
    "Directory": "Каталог",
    "Mode": "Режим",
    "Schedule": "Расписание",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "Их отправляет сама камера, поэтому они продолжают работать, когда "
        "этот компьютер выключен. Собственные реакции leolink — команды, "
        "вебхуки, MQTT — находятся в «Камеры → События».",
    "Time": "Время",
    "Time server": "Сервер времени",
    "Synchronise the clock": "Синхронизировать часы",
    "Every": "Каждые",
    "Scheduled restart": "Перезапуск по расписанию",
    "Restart regularly": "Перезапускать регулярно",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "Некоторые камеры начинают вести себя ненадёжно после недель работы; "
        "еженедельный перезапуск — дешёвое лекарство.",
    "Day": "День",
    "Hour": "Час",
    "Minute": "Минута",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "Камера с неверными часами неправильно датирует записи, а это значит "
        "куда больше, чем кажется, когда нужную запись приходится искать.",
    "Wi-Fi": "Wi-Fi",
    "Scan": "Поиск",
    "Join network": "Подключиться к сети",
    "scanning…": "поиск…",
    "The camera is scanning for networks…": "Камера ищет сети…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "Ищет камера, а не этот компьютер — важно то, что доступно ей. Пароль "
        "проверяется до сохранения, поэтому опечатка будет отклонена, а не "
        "оставит камеру вовсе без сети.",
    "Change the camera's network": "Сменить сеть камеры",
    "<b>Move %1 to “%2”?</b>": "<b>Перевести %1 в «%2»?</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "Камера сначала проверяет пароль и отказывает, если он неверен, так "
        "что это безопаснее, чем кажется.\n\nОна всё же пропадёт на минуту, "
        "пока переподключается, и если новая сеть выдаст ей другой адрес, его "
        "придётся потом обновить здесь.",
    "Join": "Подключиться",
    "Testing the password on the camera…": "Проверяем пароль на камере…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "Сохранено. Камера переподключается и скоро вернётся.",
    "The camera could not join that network: %1":
        "Камере не удалось подключиться к этой сети: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "Адреса и порты здесь читаются, но меняются в собственном "
        "веб-интерфейсе камеры. Ошибка в одном из них полностью выведет камеру "
        "из сети, и единственный путь назад — кнопка сброса; предупреждающее "
        "окно здесь не заменит собственный экран производителя.",
    "%1 fps": "%1 кадр/с",
    "%1 Mbit/s": "%1 Мбит/с",
    "%1 kbit/s": "%1 кбит/с",
    "stream lost — reconnecting (%1)": "поток потерян — переподключение (%1)",
    "Hardware (recommended)": "Аппаратное (рекомендуется)",
    "Hardware, driver's choice": "Аппаратное, на усмотрение драйвера",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "«Рекомендуется» задаёт декодер явно, чтобы декодирование и отрисовка "
        "остались в одном графическом интерфейсе. Предоставленный сам себе, "
        "mpv может декодировать через один, а рисовать через другой, отчего на "
        "некоторых картах изображение становится сплошь зелёным.\n\nЕсли "
        "картинка разваливается, попробуйте остальные по очереди. «Только "
        "программное» работает всегда, но при полном разрешении съедает целое "
        "ядро процессора.",
    "Wired": "Проводное",
    "%1 — strength unknown": "%1 — сила неизвестна",
    "%1 — %2 of %3": "%1 — %2 из %3",
    "WEAK SIGNAL": "СЛАБЫЙ СИГНАЛ",
    "BAD STREAM": "ПЛОХОЙ ПОТОК",
    "stream ended (%1) — reconnecting":
        "поток завершился (%1) — переподключение",
    "Open the &log file": "Открыть файл &журнала",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "Что сообщили проигрыватели и камеры. Стоит приложить к сообщению об "
        "ошибке.",
    "Nothing logged yet.": "Пока ничего не записано.",
    "Bit rate looks too low": "Битрейт выглядит слишком низким",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%1 кбит/с — это очень мало для %2.</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "При таком соотношении кодировщик камеры склонен выдавать повреждённые "
        "кадры, которые приходят зелёными блоками или замиранием картинки — "
        "это не сбой сети и не то, что leolink может полностью "
        "исправить.\n\nЛибо поднимите битрейт, либо снизьте разрешение.",
    "Apply anyway": "Всё равно применить",
    "camera is reconfiguring…": "камера перенастраивается…",
    "Send a test e-mail": "Отправить пробное письмо",
    "Test the FTP upload": "Проверить выгрузку по FTP",
    "Asking the camera to send a test e-mail…":
        "Просим камеру отправить пробное письмо…",
    "Asking the camera to try the FTP server…":
        "Просим камеру проверить сервер FTP…",
    "%1: the camera reported success.": "%1: камера сообщила об успехе.",
    "Condition": "Состояние",
    "Processor load %1%": "Загрузка процессора %1 %",
    "Encoder load %1%": "Загрузка кодировщика %1 %",
    "Network throughput %1 kbit/s": "Сетевой трафик %1 кбит/с",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "Камера на пределе. Снижение разрешения или частоты кадров её "
        "успокоит.",
    "Firmware": "Прошивка",
    "Not checked.": "Не проверялось.",
    "Check for updates": "Проверить обновления",
    "Asking Reolink…": "Спрашиваем Reolink…",
    "Install update": "Установить обновление",
    "Update available: %1": "Доступно обновление: %1",
    "The firmware is up to date.": "Прошивка актуальна.",
    "Install firmware": "Установить прошивку",
    "<b>Update the firmware on %1?</b>": "<b>Обновить прошивку на %1?</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "Камера скачивает обновление сама и перезапускается. Несколько минут "
        "она будет недоступна.\n\nНе отключайте ей питание во время обновления "
        "— камеру, прерванную посреди записи прошивки, обычно приходится "
        "отправлять в ремонт.",
    "Install": "Установить",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "Идёт обновление. Камера перезапустится сама и несколько минут будет "
        "недоступна. Не отключайте ей питание.",
    "Storage": "Хранилище",
    "Format the SD card": "Форматировать карту SD",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "Форматирование стирает с карты все записи. Отменить это нельзя, и "
        "подтверждения от камеры потом не будет.",
    "<b>Erase everything on the card in %1?</b>":
        "<b>Стереть всё, что есть на карте в %1?</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "Каждая запись на карте будет удалена. Отменить это нельзя, и всё, что "
        "не было скачано заранее, восстановить не удастся.",
    "Erase": "Стереть",
    "Formatting…": "Форматирование…",
    "The card has been formatted.": "Карта отформатирована.",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "Сброса к заводским настройкам здесь нет. Он стирает и сетевые "
        "настройки, а камеру, забывшую свой Wi-Fi, придётся снимать и "
        "сбрасывать вручную.",
    "Users": "Пользователи",
    "Rights": "Права",
    "Administrator": "Администратор",
    "Viewer": "Наблюдатель",
    "Add…": "Добавить…",
    "Change password…": "Сменить пароль…",
    "Delete": "Удалить",
    "New user": "Новый пользователь",
    "User name": "Имя пользователя",
    "Password for %1": "Пароль для %1",
    "Creating %1…": "Создаём %1…",
    "Change password": "Сменить пароль",
    "New password for %1": "Новый пароль для %1",
    "Changing the password for %1…": "Меняем пароль для %1…",
    "This is the account leolink uses":
        "Это учётная запись, которой пользуется leolink",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "Смените её здесь — и leolink останется снаружи, пока новый пароль не "
        "будет введён ещё и в разделе «Камеры».",
    "Cannot delete this account": "Эту учётную запись удалить нельзя",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink вошёл как «%1». Её удаление тут же оборвало бы связь с этой "
        "камерой.",
    "Delete user": "Удалить пользователя",
    "Delete “%1” from the camera?": "Удалить «%1» из камеры?",
    "Deleting %1…": "Удаляем %1…",
    "Done.": "Готово.",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "Это учётные записи на камере, а не в leolink. Наблюдатель может "
        "смотреть, но ничего не менять — стоит использовать его везде, где "
        "нужно только видеть картинку, чтобы сохранённый пароль нельзя было "
        "обратить против настроек камеры.",
    "camera is reconfiguring… %1 s": "камера перенастраивается… %1 с",
    "File format not recognised.": "Формат файла не распознан.",
    "Invalid input.": "Недопустимый ввод.",
    "No free connections — the camera allows only a few sessions at a time.":
        "Нет свободных соединений — камера допускает лишь несколько сессий "
        "одновременно.",
    "Session expired.": "Сессия истекла.",
    "Wrong user name or password.": "Неверное имя пользователя или пароль.",
    "Timed out.": "Время ожидания истекло.",
    "This firmware does not support that command.":
        "Эта прошивка не поддерживает такую команду.",
    "Could not read the configuration.": "Не удалось прочитать настройки.",
    "Could not verify the configuration.": "Не удалось проверить настройки.",
    "Subsystem unavailable — typically no SD card fitted.":
        "Подсистема недоступна — обычно потому, что нет карты SD.",
    "Not permitted — this model lacks the hardware.":
        "Не разрешено — у этой модели нет нужного оборудования.",
    "Account invalid, log in again.":
        "Учётная запись недействительна, войдите снова.",
    "User name already taken.": "Такое имя пользователя уже занято.",
    "Maximum number of users reached.":
        "Достигнуто предельное число пользователей.",
    "Camera busy, try again shortly.":
        "Камера занята, повторите попытку чуть позже.",
    "IP address conflict.": "Конфликт IP-адресов.",
    "Configuration test failed.": "Проверка настроек не удалась.",
    "FTP login failed.": "Не удалось войти на FTP.",
    "FTP could not create the directory.": "FTP не смог создать каталог.",
    "FTP upload failed.": "Выгрузка по FTP не удалась.",
    "FTP could not reach the server.": "FTP не смог связаться с сервером.",
    "Camera reported error %1.": "Камера сообщила об ошибке %1.",
    "Cannot reach %1: %2": "Не удаётся связаться с %1: %2",
    "Unexpected reply from %1.": "Неожиданный ответ от %1.",
    "Login returned no token.": "Вход не вернул ключа.",
    "Snapshot failed.": "Не удалось сделать снимок.",
    "ONVIF subscription failed.": "Не удалось оформить подписку ONVIF.",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n название камеры · %h адрес · %t время · %e событие · %s вкл/выкл · "
        "%f запись · %p изображение",
    "Run a command": "Выполнить команду",
    "Call a webhook": "Вызвать вебхук",
    "Left empty, leolink sends a small JSON document describing the event.":
        "Если оставить пустым, leolink отправит небольшой документ JSON с "
        "описанием события.",
    "Method": "Метод",
    "Body": "Тело",
    "Publish an MQTT message": "Опубликовать сообщение MQTT",
    "Left empty: the same JSON document as the webhook.":
        "Если оставить пустым: тот же документ JSON, что и у вебхука.",
    "Keep the last message on the broker":
        "Хранить последнее сообщение на брокере",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "Клиент, подключившийся позже, сразу узнаёт текущее состояние, а не "
        "ждёт следующего события. Обычно это и нужно домашней автоматизации.",
    "Broker": "Брокер",
    "Topic": "Тема",
    "Payload": "Полезная нагрузка",
    "MQTT": "MQTT",
    "In leolink": "В leolink",
    "In the camera": "В камере",
    "Try again": "Повторить",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>Камера сообщает сама:</b> решает собственный детектор камеры, и он "
        "отправляет событие ONVIF. Что он наблюдает и насколько легко "
        "срабатывает, задаётся ниже, в разделе «Обнаружение», в самой "
        "камере.<br><br><b>leolink наблюдает за картинкой:</b> этот компьютер "
        "открывает второе соединение к дополнительному потоку и анализирует "
        "изображение. Работает с любой камерой, в том числе с теми, что не "
        "сообщают ни о чём, — и тогда собственный детектор камеры ни при чём.",
    "Choose what is watched…": "Выбрать наблюдаемую область…",
    "How leolink learns of motion": "Как leolink узнаёт о движении",
    "When leolink watches the picture": "Когда leolink наблюдает за картинкой",
    "Detection by leolink": "Обнаружение силами leolink",
    "Recording on this computer": "Запись на этот компьютер",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "Куда попадают файлы — общее для всех камер и задаётся в «Настройки ▸ "
        "Записи».",
    "Follow the defaults under Settings": "Следовать настройкам по умолчанию",
    "Use this camera's own": "Использовать собственные для этой камеры",
    "Reactions": "Реакции",
    "What happens on an event": "Что происходит при событии",
    "Muted": "Без звука",
    "Sound in leolink": "Звук в leolink",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "Те же две настройки есть на плитке самой камеры, где до них ближе. "
        "Камеры начинают без звука: открывая стену камер, не хочется наполнить "
        "комнату звуком от каждой сразу.",
    "Playback": "Воспроизведение",
    "&Settings…": "&Настройки…",
    "Reactions": "Реакции",
    "Recordings": "Записи",
    "General": "Общее",
    "Tint the tile red for a moment": "Ненадолго подсветить плитку красным",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "Чтобы одного взгляда на стену камер хватало понять, какая это была.",
    " ms": " мс",
    "Play a sound": "Проиграть звук",
    "Empty: the desktop's own notification sound":
        "Пусто: звук уведомления самой системы",
    "Sound to play": "Какой звук проигрывать",
    "For": "В течение",
    "Sound file": "Звуковой файл",
    "On the screen": "На экране",
    "The window": "Окно",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "Какие камеры вообще создают события и как — задаётся для каждой в "
        "«Камеры ▸ Настройки ▸ Обнаружение силами leolink».",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "Что делает leolink, когда камера о чём-то сообщает. Камера следует "
        "этому, пока её собственный диалог не скажет иначе — всё или ничего, "
        "но не наполовину: частично унаследованные настройки труднее всего "
        "распутать, когда что-то не срабатывает.",
    "Recordings and stills": "Записи и снимки",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "Записи пишутся в Matroska без перекодирования: изображение сохраняет "
        "исходное качество камеры, а процессор остаётся почти без "
        "нагрузки.\n\nЗаписывает ли камера вообще — её собственная настройка, "
        "в «Камеры ▸ Настройки ▸ Реакции».",
    "Settings for this camera…": "Настройки этой камеры…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "Обнаружение, реакции и запись в leolink, а также кодировщик, "
        "изображение и расписания самой камеры.",
}


# Plural forms — three forms: one, few, many.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        ", %n точка доступа",
        ", %n точки доступа",
        ", %n точек доступа"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "Слышно с %n точки доступа — одна сеть, несколько узлов. Показан самый "
        "сильный.",
        "Слышно с %n точек доступа — одна сеть, несколько узлов. Показан самый "
        "сильный.",
        "Слышно с %n точек доступа — одна сеть, несколько узлов. Показан самый "
        "сильный."],
    "%n network(s) found, strongest first.": [
        "Найдена %n сеть, самая сильная первой.",
        "Найдено %n сети, самая сильная первой.",
        "Найдено %n сетей, самая сильная первой."],
    "Asking about %n command(s)…": [
        "Спрашиваем про %n команду…",
        "Спрашиваем про %n команды…",
        "Спрашиваем про %n команд…"],
    "%n area(s) blanked": [
        "%n зона закрашена",
        "%n зоны закрашены",
        "%n зон закрашено"],
    "%n area(s), switched off": [
        "%n зона, выключено",
        "%n зоны, выключено",
        "%n зон, выключено"],
    "%n hour(s) a week.": [
        "%n час в неделю.",
        "%n часа в неделю.",
        "%n часов в неделю."],
    "%n camera(s) live": [
        "%n камера в эфире",
        "%n камеры в эфире",
        "%n камер в эфире"],
    "Saved %n snapshot(s)": [
        "Сохранён %n снимок",
        "Сохранено %n снимка",
        "Сохранено %n снимков"],
    "Found %n device(s)…": [
        "Найдено %n устройство…",
        "Найдено %n устройства…",
        "Найдено %n устройств…"],
    "%n recording(s) found.": [
        "Найдена %n запись.",
        "Найдено %n записи.",
        "Найдено %n записей."],
    "%n network(s) found.": [
        "Найдена %n сеть.",
        "Найдено %n сети.",
        "Найдено %n сетей."],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "%n повреждённый кадр за последние десять секунд.\n\nОбычно это слабый "
        "сигнал Wi-Fi или битрейт, заниженный для такого разрешения. leolink "
        "исправляет что может — вот то, чего он исправить не смог.",
        "%n повреждённых кадра за последние десять секунд.\n\nОбычно это "
        "слабый сигнал Wi-Fi или битрейт, заниженный для такого разрешения. "
        "leolink исправляет что может — вот то, чего он исправить не смог.",
        "%n повреждённых кадров за последние десять секунд.\n\nОбычно это "
        "слабый сигнал Wi-Fi или битрейт, заниженный для такого разрешения. "
        "leolink исправляет что может — вот то, чего он исправить не смог."],
}
