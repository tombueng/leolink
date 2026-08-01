"""Arabic. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Arabic. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "التشخيص",
    "&Diagnostics…": "الت&شخيص…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "ما الذي فعله leolink والكاميرات — وتقرير يمكن إرفاقه ببلاغ عن خلل.",
    "Errors only": "الأخطاء فقط",
    "Warnings and errors": "التحذيرات والأخطاء",
    "Normal activity": "النشاط المعتاد",
    "Everything": "كل شيء",
    "All areas": "كل المجالات",
    "Search…": "بحث…",
    "Show": "اعرض",
    "Detailed logging": "سجل مفصّل",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "يسجّل كل طلب يُرسل إلى الكاميرا، وكل قرار يتخذه المفكِّك، وكل إعادة "
        "اتصال. اتركه مطفأً في الاستعمال اليومي — شغّله عندما يحدث خلل، وأعد "
        "إحداث المشكلة، ثم أرسل التقرير.",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "يسجّل كل طلب يُرسل إلى الكاميرا، وكل قرار يتخذه المفكِّك، وكل إعادة "
        "اتصال، في ‎~/.local/share/leolink/leolink.log‎.",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "الأخطاء والتحذيرات تُسجَّل دائماً. ويضيف السجل المفصّل الحوار الدائر "
        "مع الكاميرا — شغّله عندما يحدث خلل، وأعد إحداثه، ثم أرسل التقرير من "
        "«مساعدة ▸ التشخيص». تُزال كلمات المرور ورموز الجلسات قبل كتابة أي "
        "شيء.",
    "Open diagnostics…": "افتح التشخيص…",
    "Open diagnostics": "افتح التشخيص",
    "Follow new lines": "تابع الأسطر الجديدة",
    "Copy report": "انسخ التقرير",
    "System details and the log, ready to paste into a bug report.":
        "تفاصيل النظام والسجل، جاهزة للصق في بلاغ عن خلل.",
    "Report copied.": "نُسخ التقرير.",
    "Save report…": "احفظ التقرير…",
    "Save report": "احفظ التقرير",
    "Text files (*.txt)": "ملفات نصية (*.txt)",
    "Could not write %1.": "تعذّرت الكتابة إلى %1.",
    "Open log folder": "افتح مجلد السجل",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "تُزال كلمات المرور ورموز الجلسات وعناوين الإنترنت قبل كتابة أي شيء، "
        "ولذا يمكن مشاركة هذا كما هو. أما عناوين شبكتك الخاصة فتبقى — وهي "
        "عادةً أول خيط للحل.",
    "%1 of %2 lines": "%1 من %2 سطراً",
    "Report a problem": "أبلغ عن مشكلة",
    "<b>Attach a diagnostics report</b>": "<b>أرفق تقرير تشخيص</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "يسجّل ما هو جهازك، وبماذا أجابت الكاميرات، وأين اختل الأمر — مع إزالة "
        "كلمات المرور والعناوين مسبقاً. ومن دونه يتعذّر متابعة معظم "
        "البلاغات.\n\nإن كانت المشكلة مما يمكنك إحداثه، فشغّل أولاً السجل "
        "المفصّل في نافذة التشخيص، ثم أعد إحداثها، ثم انسخ التقرير.",
    "Go to the issue tracker": "اذهب إلى متتبّع المشكلات",
    "Application": "التطبيق",
    "Camera API": "واجهة الكاميرا",
    "ONVIF events": "أحداث ONVIF",
    "Event actions": "إجراءات الأحداث",
    "Baichuan": "Baichuan",
    "User interface": "واجهة المستخدم",
    "Qt": "Qt",
    "strong": "قوية",
    "good": "جيدة",
    "fair": "متوسطة",
    "weak": "ضعيفة",
    "unknown": "غير معروفة",
    "%1 — %2 (%3/4)": "%1 — %2 ‏(%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "الإشارة كما تسمعها الكاميرا: %1 من 4",
    "Encryption: %1": "التعمية: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "سُمعت بعض الأسماء من عدة نقاط وصول — تلك شبكة متشابكة. تتصل الكاميرا "
        "بالاسم لا بعقدة بعينها؛ والشبكة هي التي تقرر مع أيها تتحدث وتسلّمها "
        "عند الحاجة. ولإيجاد أفضل موضع، حرّك الكاميرا وراقب «إشارة الواي‌فاي» "
        "أعلاه: تلك هي الوصلة التي تملكها فعلاً.",
    "What this camera supports": "ما الذي تدعمه هذه الكاميرا",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "تختلف برمجيات Reolink الثابتة اختلافاً هائلاً بين طراز وآخر، والسبيل "
        "الموثوق الوحيد لمعرفة ما تستطيعه كاميرا هو أن تسألها. فإن كان ينقص "
        "leolink شيء تملكه كاميرتك بوضوح، فهذه القائمة في بلاغ عن خلل هي ما "
        "يجعل إضافته ممكنة.",
    "Ask the camera": "اسأل الكاميرا",
    "Copy the list": "انسخ القائمة",
    "Copied.": "نُسخ.",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>مدعوم (%1):</b> %2<br><br><b>غير مدعوم (%3):</b> %4",
    "Privacy": "الخصوصية",
    "Privacy areas…": "مناطق الخصوصية…",
    "Parts of the view the camera blanks before anything leaves it.":
        "أجزاء المشهد التي تطمسها الكاميرا قبل أن يغادرها أي شيء.",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "يُطمس داخل الكاميرا نفسها، فيغيب الجزء المغطى عن كل عارض وكل تسجيل — "
        "نافذة جار، أو مكتب لا ينبغي أن يظهر في الفيديو.",
    "%1 — privacy areas": "%1 — مناطق الخصوصية",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "اسحب لتحديد أجزاء المشهد التي ينبغي للكاميرا طمسها. فهي تسوّدها قبل "
        "أن يغادر الجهاز أي شيء، ولذا تغيب عن الصورة الحية وعن التسجيلات وعن "
        "كل برنامج آخر — بما في ذلك تطبيق الشركة المصنّعة.",
    "Remove the last": "أزل الأخيرة",
    "Remove all": "أزل الكل",
    "No picture: %1 — the areas can still be drawn.":
        "لا صورة: %1 — ما زال بالإمكان رسم المناطق.",
    "%1 of %2 areas": "%1 من %2 منطقة",
    "nothing blanked": "لا شيء مطموس",
    "Detection area…": "منطقة الكشف…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "أي أجزاء الصورة تراقبها الكاميرا. ويُهمَل كل ما هو خارج المنطقة — "
        "طريق عند حافة المشهد، شجرة في الريح، باب جار.",
    "%1 — the camera's detection area": "%1 — منطقة الكشف في الكاميرا",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "اسحب فوق الصورة لاختيار ما تراقبه الكاميرا. وتُهمَل المناطق المعتمة. "
        "هذه شبكة الكاميرا نفسها، %1 في %2، فهي أدق من شبكة leolink.",
    "When to watch…": "متى تراقب…",
    "Hours of the week the camera raises motion events at all.":
        "ساعات الأسبوع التي تبلّغ فيها الكاميرا عن الحركة أصلاً.",
    "%1 — when to watch": "%1 — متى تراقب",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "الساعات التي تبلّغ فيها الكاميرا عن الحركة. وخارجها تظل ترى، لكنها لا "
        "تقول شيئاً.",
    "When to record…": "متى تسجّل…",
    "Hours of the week the camera records to its card by itself.":
        "ساعات الأسبوع التي تسجّل فيها الكاميرا على بطاقتها من تلقاء نفسها.",
    "%1 — when to record": "%1 — متى تسجّل",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "الساعات التي تسجّل فيها الكاميرا على بطاقتها. ويلزم لذلك وجود بطاقة "
        "مركّبة؛ أما التسجيل على هذا الحاسوب فيُضبط في «الكاميرات ← الأحداث» "
        "ويستغني عنها.",
    "Area, times and sensitivity": "المنطقة والأوقات والحساسية",
    "To": "إلى",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "تسمح الكاميرات بحساسية مختلفة باختلاف ساعات اليوم، وهكذا تمنع أضواء "
        "السيارات ليلاً من إطلاق كل شيء دون أن تصمّ الكاميرا نهاراً.",
    "All week": "الأسبوع كله",
    "Never": "أبداً",
    "Nights": "ليلاً",
    "Working hours": "ساعات العمل",
    "Weekends": "عطلات نهاية الأسبوع",
    "22:00 to 06:00, every day.": "من 22:00 إلى 06:00، كل يوم.",
    "08:00 to 17:00, Monday to Friday.":
        "من 08:00 إلى 17:00، من الاثنين إلى الجمعة.",
    "Nothing is selected — this will never run.":
        "لم يُحدَّد شيء — لن يعمل هذا أبداً.",
    "Always on.": "مفعّل دائماً.",
    "Mobile data": "بيانات الجوال",
    "SIM card": "شريحة SIM",
    "PIN": "رمز PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "لا يلزم إلا إذا طلبته الشريحة. وثلاث محاولات خاطئة تقفل الشريحة، "
        "فتحتاج عندئذ إلى رمز PUK الذي لا يملكه سوى مشغّلك.",
    "Access point (APN)": "نقطة الوصول (APN)",
    "Authentication": "الاستيثاق",
    "Use mobile data": "استخدم بيانات الجوال",
    "Modem": "المودم",
    "Card": "البطاقة",
    "Type": "النوع",
    "Signal": "الإشارة",
    "IMEI": "IMEI",
    "Card number": "رقم البطاقة",
    "Mobile connection": "اتصال الجوال",
    "Data used": "البيانات المستهلكة",
    "Monthly limit": "الحد الشهري",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>لم يُختبر على عتاد حقيقي.</b> لا يملك أحد ممن يعملون على leolink "
        "كاميرا بمودم، ولذا كُتب هذا اعتماداً على البروتوكول وحده. لا يمكنه أن "
        "يُتلف شيئاً — فالأمر الذي لا تعرفه الكاميرا يُرفض ببساطة — لكنه قد لا "
        "يُظهر شيئاً على الإطلاق بالقدر نفسه.\n\nإن كانت كاميرتك تحوي شريحة "
        "SIM، فإن «ما الذي تدعمه هذه الكاميرا» تحت «الصيانة» يسرد الأوامر التي "
        "تملكها برمجيتها الثابتة فعلاً. وتلك القائمة، في بلاغ عن خلل، هي ما "
        "يتيح إتمام هذا الجزء على الوجه الصحيح.",
    "Baichuan (the camera's own protocol)":
        "Baichuan (بروتوكول الكاميرا الخاص)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "يناسب RTSP معظم الكاميرات وهو ما ينبغي تجربته أولاً.\n\nولا يحتاج "
        "HTTP-FLV سوى المنفذ 80، وهو ما يفيد حيث يكون RTSP محجوباً.\n\nأما "
        "Baichuan فهو ما يتحدثه تطبيق Reolink نفسه. وهو الجواب للكاميرات التي "
        "تُبقي RTSP مطفأً — والطرازات العاملة بالبطارية تفعل ذلك — ولا يستهلك "
        "أياً من جلسات الويب القليلة لدى الكاميرا. فيديو فقط: أما الصوت فما "
        "زال يأتي عبر RTSP.",
    "connecting over Baichuan…": "يجري الاتصال عبر Baichuan…",
    "Cannot open a local port: %1": "تعذّر فتح منفذ محلي: %1",
    "Baichuan login failed: %1": "فشل تسجيل الدخول عبر Baichuan: %1",
    "The camera refused to send video: %1": "رفضت الكاميرا إرسال الفيديو: %1",
    "The player did not connect.": "لم يتصل المشغّل.",
    "The camera stopped sending.": "توقفت الكاميرا عن الإرسال.",
    "custom stream": "بث مخصص",
    "Speak through the camera": "تحدّث عبر الكاميرا",
    "Stop speaking": "أوقف التحدث",
    "Play through %1": "شغّل عبر %1",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "ملفات صوتية (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;كل الملفات (*)",
    "Speaking through the camera…": "يجري التحدث عبر الكاميرا…",
    "Finished.": "انتهى.",
    "Cannot reach the camera: %1": "تعذّر الوصول إلى الكاميرا: %1",
    "The camera did not answer on the RTSP port.":
        "لم تُجب الكاميرا على منفذ RTSP.",
    "ffmpeg is needed to send sound and could not be started.":
        "يلزم ffmpeg لإرسال الصوت، ولم يتمكن من العمل.",
    "The camera rejected the user name or password.":
        "رفضت الكاميرا اسم المستخدم أو كلمة المرور.",
    "The camera refused: %1": "رفضت الكاميرا: %1",
    "This camera does not offer a speaker.":
        "لا تقدّم هذه الكاميرا مكبّر صوت.",
    "Sound": "الصوت",
    "Send sound": "أرسل الصوت",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "ميكروفون الكاميرا. وحتى مع إطفائه تظل تضع مساراً صوتياً في البث — "
        "مساراً صامتاً تماماً، وهو أصعب في التمييز بكثير من غياب المسار أصلاً.",
    "What it recognises": "ما الذي تميّزه",
    "People": "الأشخاص",
    "Vehicles": "المركبات",
    "Animals": "الحيوانات",
    "Faces": "الوجوه",
    "Any movement": "أي حركة",
    "Continuous": "مستمر",
    "This camera keeps a separate week for each kind of event. Which one?":
        "تحتفظ هذه الكاميرا بأسبوع منفصل لكل نوع من الأحداث. أيها؟",
    "Push notifications": "الإشعارات الفورية",
    "Folder": "المجلد",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "لا تجيب الكاميرا على الطلبات في هذه اللحظة. تفعل ذلك حين تتلقى الكثير "
        "منها دفعة واحدة؛ وتتعافى من تلقاء نفسها بعد برهة.",
    "Camera-side detection": "الكشف في الكاميرا",
    "Where it looks": "أين تنظر",
    "Choose the area…": "اختر المنطقة…",
    "When it reports at all": "متى تبلّغ أصلاً",
    "Choose the hours…": "اختر الساعات…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "أسبوع من الساعات: في التي تؤشّرها تبلّغ الكاميرا عن الحركة، وفي "
        "البقية تصمت. ولا علاقة لهذا بمدى حساسيتها — فتلك تُضبط أدناه.",
    "How readily it triggers": "ما مدى سهولة تنبّهها",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "خلال اليوم الواحد قد تتنبّه الكاميرا بسهولة أكبر أو أقل. وهكذا تمنع "
        "أضواء السيارات ليلاً من إطلاق كل شيء دون أن تُعميها نهاراً. أما عدد "
        "الفترات فتحدده الكاميرا؛ وأوقاتها وحساسياتها لك.",
    "Siren": "صفارة الإنذار",
    "Sound on an alarm": "أطلقها عند الإنذار",
    "Times": "الأوقات",
    "Spotlight": "الكشّاف",
    "On": "مضاء",
    "Draw": "ارسم",
    "Watch a rectangle": "راقب مستطيلاً",
    "Ignore a rectangle": "تجاهل مستطيلاً",
    "Drag over single cells.": "اسحب فوق الخلايا فُرادى.",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "اسحب مستطيلاً لمراقبته. ويؤدي Shift مع السحب الغرض نفسه دون تغيير "
        "الأداة.",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "اسحب مستطيلاً لتجاهله. ويؤدي Ctrl مع السحب الغرض نفسه دون تغيير "
        "الأداة.",
    "  · already added": "  · مضافة من قبل",
    "Processor load %1 %": "حِمل المعالج %1 %",
    "Encoder output %1 kbit/s": "خرج المرمِّز %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "مدعوم (%1):\n%2\n\nغير مدعوم (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "الكاميرا هي التي تسأل Reolink، لا هذا الحاسوب — ولذا تحتاج إلى منفذ "
        "خاص بها إلى الإنترنت.",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "لم يُجب جزء من الكاميرا. وبحسب ما سُئل عنه، يعني ذلك أنه لا توجد "
        "بطاقة SD مركّبة، أو أن الكاميرا لا منفذ لها إلى الإنترنت.",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "لا تُتاح هنا إعادة الضبط إلى إعدادات المصنع. فهي تمحو إعدادات الشبكة "
        "كذلك، والكاميرا التي نسيت شبكة الواي‌فاي لا بد من إنزالها والوصول "
        "إليها بكبل — فإن كنت تريد ذلك حقاً فاستخدم واجهة الويب الخاصة "
        "بالكاميرا.",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "لا توجد لدى الكاميرا جلسات شاغرة. فهي لا تسمح إلا بحفنة منها في آن "
        "واحد، وهي مشتركة مع تطبيق الهاتف وصفحتها على الويب. أغلق تلك، أو "
        "انتظر دقيقة حتى تنقضي القديمة.",
    "&File": "&ملف",
    "&View": "&عرض",
    "&Help": "م&ساعدة",
    "&Cameras…": "&كاميرات…",
    "&Save snapshots…": "ا&حفظ اللقطات…",
    "&Event log…": "س&جل الأحداث…",
    "Open &recordings folder": "افتح مجلد الت&سجيلات",
    "&Quit": "&خروج",
    "&Full screen": "&ملء الشاشة",
    "Leave full screen": "غادر ملء الشاشة",
    "Show &menu bar": "أظهر شريط ال&قوائم",
    "Show &toolbar": "أظهر شريط الأ&دوات",
    "Show status &bar": "أظهر شريط الحال&ة",
    "Hide window &decoration": "أخفِ إ&طار النافذة",
    "&Online handbook": "الدليل على الإ&نترنت",
    "&Protocol notes": "ملاحظات الب&روتوكول",
    "&Report a problem": "أ&بلغ عن مشكلة",
    "&About leolink": "&عن leolink",
    "Main": "الرئيسي",
    "Ready": "جاهز",
    "Grid view": "عرض شبكي",
    "No cameras configured": "لا كاميرات مضبوطة",
    "Nothing to capture": "لا شيء لالتقاطه",
    "Save snapshots to": "احفظ اللقطات في",
    "Esc leaves full screen": "‏Esc يغادر ملء الشاشة",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "‏Esc يغادر ملء الشاشة · والنقر المزدوج على كاميرا يملأ بها الشاشة",
    "Double-click for the grid · Esc leaves full screen":
        "نقر مزدوج للعودة إلى الشبكة · Esc يغادر ملء الشاشة",
    "Cannot save": "تعذّر الحفظ",
    "Settings could not be written to %1.": "تعذّرت كتابة الإعدادات إلى %1.",
    "Cannot create %1": "تعذّر إنشاء %1",
    "Recording %1": "يجري تسجيل %1",
    "Saved %1": "حُفظ %1",
    "Motion at %1": "حركة عند %1",
    "Motion detected": "رُصدت حركة",
    "Could not run the motion command for %1":
        "تعذّر تنفيذ أمر الحركة الخاص بـ %1",
    "leolink is still running": "‏leolink ما زال يعمل",
    "Cameras keep recording. Use the tray icon to come back.":
        "تواصل الكاميرات التسجيل. استخدم أيقونة منطقة التنبيه للعودة.",
    "Show window": "أظهر النافذة",
    "Cameras…": "كاميرات…",
    "Quit": "خروج",
    "Welcome to leolink": "مرحباً بك في leolink",
    "<b>No cameras are configured yet.</b>": "<b>لم تُضبط أي كاميرا بعد.</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "أضف كاميرا بعنوانها واسم مستخدمها وكلمة مرورها. يتحدث leolink إلى "
        "الكاميرا مباشرة داخل شبكتك — دون أي حساب سحابي.<p>ويشرح الدليل ما "
        "يفعله كل خيار.",
    "Add camera…": "أضف كاميرا…",
    "Open handbook": "افتح الدليل",
    "About leolink": "عن leolink",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>عميل أصيل على لينكس لكاميرات "
        "Reolink.</p><p>يتحدث بروتوكولات الكاميرا نفسها مباشرة: واجهة HTTP "
        "وRTSP وONVIF داخل الشبكة المحلية، وخدمة P2P من Reolink حين تريد "
        "الوصول إلى كاميرا من مكان آخر.</p><p><a href=\"%2\">الدليل</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">الشيفرة "
        "المصدرية</a></p><p>لا صلة له بشركة Reolink ولا يحظى بدعمها.</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "لم تُضبط أي كاميرا بعد.\n\nاستخدم «كاميرات…» لإضافة واحدة.",
    "connecting…": "يجري الاتصال…",
    "main stream": "البث الرئيسي",
    "sub stream": "البث الفرعي",
    "no host configured": "لا عنوان مضبوط",
    "cannot open stream": "تعذّر فتح البث",
    "libmpv unavailable": "‏libmpv غير متاحة",
    "player init failed": "تعذّر إقلاع المشغّل",
    "MOTION": "حركة",
    "Mute this camera": "اكتم هذه الكاميرا",
    "Unmute this camera": "ألغِ كتم هذه الكاميرا",
    "Volume": "شدة الصوت",
    "Camera settings": "إعدادات الكاميرا",
    "Settings": "الإعدادات",
    "Cameras": "الكاميرات",
    "Layout": "التخطيط",
    "Events": "الأحداث",
    "Window": "النافذة",
    "Add": "أضف",
    "Remove": "أزل",
    "Remove camera": "أزل الكاميرا",
    "Remove “%1” from the list?": "أتريد إزالة «%1» من القائمة؟",
    "New camera": "كاميرا جديدة",
    "Name": "الاسم",
    "Host": "العنوان",
    "User": "المستخدم",
    "Password": "كلمة المرور",
    "Password command": "أمر كلمة المرور",
    "UID": "UID",
    "Stream": "البث",
    "Transport": "النقل",
    "192.168.1.10 or camera.lan": "‏192.168.1.10 أو camera.lan",
    "optional, for P2P access": "اختياري، للوصول عبر P2P",
    "optional: pass show reolink/hall": "اختياري: pass show reolink/madkhal",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "إن ضُبط، نُفِّذ هذا الأمر واستُخدم خرجه كلمةَ مرور. وبذلك يبقى السر "
        "خارج ملف الإعدادات.",
    "Sub stream (low bandwidth)": "البث الفرعي (نطاق ترددي قليل)",
    "Main stream (full resolution)": "البث الرئيسي (دقة كاملة)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "‏HTTP-FLV (كمون أقل)",
    "Use HTTPS for the control API": "استخدم HTTPS لواجهة التحكم",
    "Show this camera": "أظهر هذه الكاميرا",
    "Test connection": "اختبر الاتصال",
    "Contacting %1…": "يجري الاتصال بـ %1…",
    "Enter a host first.": "أدخل عنواناً أولاً.",
    "Incomplete camera": "كاميرا ناقصة",
    "“%1” has no host address.": "‏«%1» بلا عنوان.",
    "%1 — firmware %2, %3 channel(s)": "%1 — البرمجية الثابتة %2، %3 قناة",
    "Scan network…": "افحص الشبكة…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "يسأل الشبكة عن كاميرات ONVIF الموجودة. ويُرسَل استعلام بث متعدد واحد؛ "
        "أما الأجهزة التي تلزم الصمت فلا يُتصل بها أبداً.",
    "Looking for cameras…": "يجري البحث عن كاميرات…",
    "Stop": "أوقف",
    "Cameras found": "وُجدت كاميرات",
    "Add which one?": "أيها تضيف؟",
    "No cameras found": "لم تُوجد كاميرات",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "لم يُجب أي جهاز ONVIF.\n\nلا تجيب الكاميرات إلا إذا كان ONVIF "
        "مشغَّلاً، والاستعلام لا يعبر الموجّهات ولا معظم الشبكات الخاصة "
        "الافتراضية. وما زال بإمكانك إضافة كاميرا بكتابة عنوانها.",
    "unnamed device": "جهاز بلا اسم",
    " (Reolink)": " ‏(Reolink)",
    "Cannot open a UDP socket for discovery.": "تعذّر فتح مقبس UDP للبحث.",
    "Grid size": "حجم الشبكة",
    "Columns": "الأعمدة",
    "Rows": "الصفوف",
    "Column": "العمود",
    "Row": "الصف",
    "Row span": "امتداد الصفوف",
    "Column span": "امتداد الأعمدة",
    "automatic": "تلقائي",
    "Position of the selected camera": "موضع الكاميرا المحددة",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "اترك الصف والعمود على «تلقائي» لتملأ الكاميرات الشبكة بالترتيب. ويتيح "
        "الامتداد لكاميرا واحدة أن تشغل عدة خلايا.",
    "Watch cameras for motion (ONVIF push)":
        "راقب الحركة في الكاميرات (دفع ONVIF)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "تبلّغ الكاميرا عن الحركة لحظة وقوعها، بدلاً من أن يسأل leolink مرة كل "
        "ثانية.",
    "Run command": "نفّذ أمراً",
    "notify-send \"Motion at %n\"": "notify-send \"حركة عند %n\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "يُنفَّذ عندما تبلّغ هذه الكاميرا عن حركة.\n%n اسم الكاميرا · %h "
        "العنوان · %t الطابع الزمني · %f ملف التسجيل",
    "Record while motion lasts": "سجّل ما دامت الحركة مستمرة",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "يسجّل على هذا الحاسوب من البث الحي، فيعمل حتى حين لا تكون في الكاميرا "
        "بطاقة SD.",
    "Keep recording after": "واصل التسجيل بعدها",
    " s": " ث",
    "Selected camera": "الكاميرا المحددة",
    "All cameras": "كل الكاميرات",
    "Recordings folder": "مجلد التسجيلات",
    "Browse…": "استعراض…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "تُكتب التسجيلات بصيغة Matroska دون إعادة ترميز: فتحتفظ الصورة بجودة "
        "الكاميرا الأصلية ويبقى المعالج شبه خامل.",
    "Appearance": "المظهر",
    "Show menu bar": "أظهر شريط القوائم",
    "Show toolbar": "أظهر شريط الأدوات",
    "Show status bar": "أظهر شريط الحالة",
    "Hide window decoration": "أخفِ إطار النافذة",
    "Ctrl+M toggles this at any time.": "‏Ctrl+M يبدّل هذا في أي وقت.",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "لشاشات الحائط. يبدّله Ctrl+Shift+D.",
    "Notification area": "منطقة التنبيه",
    "Show an icon in the notification area": "أظهر أيقونة في منطقة التنبيه",
    "Closing the window hides it instead of quitting":
        "إغلاق النافذة يخفيها بدل الخروج",
    "Minimising hides the window to the tray":
        "التصغير يخفي النافذة في منطقة التنبيه",
    "On motion": "عند الحركة",
    "Bring the window up when motion is detected": "أظهر النافذة عند رصد حركة",
    "Come back as": "العودة بهيئة",
    "Previous size": "الحجم السابق",
    "Full screen": "ملء الشاشة",
    "Language": "اللغة",
    "System language": "لغة النظام",
    "Takes effect after restarting leolink.": "يسري بعد إعادة تشغيل leolink.",
    "Menu bar hidden": "شريط القوائم مخفي",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "مع إخفاء شريط القوائم وشريط الأدوات معاً، اضغط Ctrl+M لاستعادة "
        "القائمة.",
    "Event log": "سجل الأحداث",
    "Camera:": "الكاميرا:",
    "Show:": "اعرض:",
    "All events": "كل الأحداث",
    "Motion": "حركة",
    "With recording": "مع تسجيل",
    "Refresh": "حدّث",
    "When": "متى",
    "Camera": "الكاميرا",
    "Event": "الحدث",
    "Media": "الوسائط",
    "video": "فيديو",
    "image": "صورة",
    " + image": " + صورة",
    "no preview": "لا معاينة",
    "recording only": "تسجيل فقط",
    "no events recorded yet": "لم تُسجَّل أحداث بعد",
    "Recording: %1%2": "التسجيل: %1%2",
    " (file missing)": " ‏(الملف مفقود)",
    "Image: %1": "الصورة: %1",
    "Open recording": "افتح التسجيل",
    "Open image": "افتح الصورة",
    "Nothing to open": "لا شيء لفتحه",
    "The file for this event is no longer there.":
        "لم يعد ملف هذا الحدث موجوداً.",
    "Clear log…": "امسح السجل…",
    "Clear event log": "امسح سجل الأحداث",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "أتريد حذف تاريخ الأحداث كله؟\n\nتبقى مقاطع الفيديو والصور المسجّلة "
        "على القرص — ولا يُمسح سوى السجل.",
    "Command": "الأمر",
    "could not be started": "تعذّر تشغيله",
    "Webhook": "Webhook",
    "invalid URL": "عنوان غير صالح",
    "Webhook → %1": "‏Webhook ← %1",
    "%1 failed: %2": "أخفق %1: %2",
    "Event log…": "سجل الأحداث…",
    "MQTT broker or topic not set.": "لم يُضبط وسيط MQTT أو موضوعه.",
    "MQTT broker did not respond.": "لم يستجب وسيط MQTT.",
    "MQTT: %1": "‏MQTT: %1",
    "MQTT: unexpected reply from the broker.":
        "‏MQTT: رد غير متوقع من الوسيط.",
    "MQTT refused the connection: %1": "رفض MQTT الاتصال: %1",
    "Video": "الفيديو",
    "Decoding": "فك الترميز",
    "Hardware, fastest": "عتاد، الأسرع",
    "Hardware, with frame copy": "عتاد، مع نسخ الإطارات",
    "Software only": "برمجياً فقط",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "يُبقي فك الترميز بالعتاد المعالجَ متفرغاً، وهو الخيار الصحيح لدقات "
        "البث الرئيسي.\n\nفإن ظهرت في الصورة مربعات خضراء أو تجمّدت، فاختر «مع "
        "نسخ الإطارات»: يظل فك الترميز على المعالج الرسومي، لكن كل إطار يُنسخ "
        "إلى الذاكرة الرئيسية، وهو ما تحتاجه بعض المشغّلات حين يكون الفيديو "
        "داخل نافذة أخرى.",
    "Favour low latency over smoothness":
        "فضّل الكمون المنخفض على انسيابية العرض",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "يُبقي التخزين المؤقت عند حده الأدنى. أطفئه إن تقطّع بث عالي معدل البت "
        "على شبكة مزدحمة.",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "اسحب الشريط أسفل إحدى الكاميرات لتحريك النافذة. ويعيد Ctrl+Shift+D "
        "الإطار، وCtrl+M القائمة.",
    "%1 — camera settings": "%1 — إعدادات الكاميرا",
    "Reading settings from %1…": "تجري قراءة الإعدادات من %1…",
    "Apply to camera": "طبّق على الكاميرا",
    "Main stream": "البث الرئيسي",
    "Sub stream": "البث الفرعي",
    "Resolution": "الدقة",
    "Frame rate": "معدل الإطارات",
    "Bit rate (kbit/s)": "معدل البت (kbit/s)",
    "H.264 profile": "ملمح H.264",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "الأعلى يعني صورة أفضل وحركة شبكية أكثر. ولا تعرض الكاميرا إلا "
        "المعدلات التي تقوى على الحفاظ عليها فعلاً.",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "تغيّر هذه الكاميرا نفسها، فيرى كل عميل النتيجة. وتأتي الخيارات من "
        "الكاميرا وتختلف من طراز إلى آخر.",
    "Picture": "الصورة",
    "Brightness": "السطوع",
    "Contrast": "التباين",
    "Saturation": "الإشباع",
    "Sharpness": "الحدة",
    "Hue": "درجة اللون",
    "Ready.": "جاهز.",
    "Writing to the camera…": "تجري الكتابة إلى الكاميرا…",
    "Nothing to write.": "لا شيء لكتابته.",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "حُفظ. تغيير المرمِّز يعيد تشغيل البث، ولذا قد تنقطع الصورة للحظة.",
    "&Record all cameras": "&سجّل كل الكاميرات",
    "Record this camera": "سجّل هذه الكاميرا",
    "Stop recording": "أوقف التسجيل",
    "Recording all cameras": "يجري تسجيل كل الكاميرات",
    "Recording stopped": "توقّف التسجيل",
    "Recording started": "بدأ التسجيل",
    "Could not start recording %1": "تعذّر بدء تسجيل %1",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "‏ffmpeg غير مثبت، ولذا يتعذّر التسجيل.",
    "No stream address for %1.": "لا عنوان بث لـ %1.",
    "Recording failed: %1": "أخفق التسجيل: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "لم ينتج التسجيل أي بيانات (خرج ffmpeg بالرمز %1).",
    "Could not start ffmpeg.": "تعذّر تشغيل ffmpeg.",
    "Custom URL": "عنوان مخصص",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "أي عنوان تستطيع libmpv فتحه. استخدمه لكاميرات الشركات الأخرى، أو بث "
        "مسجّل شبكي، أو ملف محلي.",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "‏ffmpeg غير مثبت، ولذا يتعذّر كشف الحركة.",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "‏ffmpeg غير مثبت، ولذا يتعذّر كشف الصوت.",
    "Motion detection stopped: %1": "توقّف كشف الحركة: %1",
    "Sound detection stopped: %1": "توقّف كشف الصوت: %1",
    "Could not start ffmpeg for motion detection.":
        "تعذّر تشغيل ffmpeg لكشف الحركة.",
    "Could not start ffmpeg for sound detection.":
        "تعذّر تشغيل ffmpeg لكشف الصوت.",
    "Sound detected": "رُصد صوت",
    "%1 at %2": "%1 عند %2",
    "Detection": "الكشف",
    "Motion comes from": "مصدر الإبلاغ عن الحركة",
    "The camera reports it (ONVIF)": "الكاميرا نفسها (ONVIF)",
    "leolink watches the picture": "‏leolink بمراقبة الصورة",
    "Either of the two": "أي منهما",
    "Do not watch": "لا تراقب",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "الكاميرات التي تبلّغ عن الحركة بنفسها لا تكلّف شيئاً في "
        "المراقبة.\n\nأما تحليل الصورة هنا فيعمل مع أي كاميرا، بما فيها التي "
        "لا تبلّغ عن شيء، لكنه يفتح لكل واحدة اتصالاً ثانياً بالبث الفرعي.",
    "Motion zones…": "مناطق الحركة…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "اختر أي أجزاء الصورة تُراقَب. ولا ينطبق ذلك إلا حين يحلل leolink "
        "الصورة بنفسه.",
    "Sensitivity": "الحساسية",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "مقدار ما يجب أن تتغيره بقعة في الصورة لتُحتسب. والأعلى يلحظ أكثر، بما "
        "في ذلك الظلال والمطر.",
    "Minimum area": "أصغر مساحة",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "مقدار ما يجب أن يتغير من المساحة المراقَبة ليُحتسب حركة. و20 ‰ هي "
        "اثنان بالمئة من الصورة — أي ما يقارب شخصاً على مسافة متوسطة.",
    "Raise an event on sound": "أطلق حدثاً عند الصوت",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "يتطلب كاميرا بميكروفون. ويفتح اتصالاً آخر بالبث الفرعي.",
    "Sound above": "صوت يفوق",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "‏-60 dB قريب من الصمت، و-20 dB صوت مرتفع على مقربة.",
    "Hold for": "أبقِه لمدة",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "يُبقي الحدث قائماً بعد انقطاع الضجيج، حتى لا يُبلَّغ عن نباح واحد "
        "أربع مرات.",
    "%1 — motion zones": "%1 — مناطق الحركة",
    "no picture available": "لا صورة متاحة",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "اسحب فوق الصورة لاختيار ما يُراقَب. وتُهمَل المناطق المعتمة — وهو "
        "مفيد لطريق عند حافة المشهد، أو شجرة تتحرك في الريح، أو مدخل بيت جار.",
    "Watch all": "راقب الكل",
    "Ignore all": "تجاهل الكل",
    "Invert": "اعكس",
    "Fetching a picture from %1…": "يجري جلب صورة من %1…",
    "No picture: %1 — the zones can still be set.":
        "لا صورة: %1 — ما زال بالإمكان ضبط المناطق.",
    "Recordings on the &camera…": "التسجيلات على ال&كاميرا…",
    "Browse what is stored on the camera's own SD card.":
        "تصفّح ما هو مخزّن على بطاقة SD الخاصة بالكاميرا.",
    "Which camera": "أي كاميرا",
    "Show recordings from": "أظهر تسجيلات",
    "%1 — recordings on the camera": "%1 — التسجيلات على الكاميرا",
    "Search": "ابحث",
    "From": "من",
    "to": "إلى",
    "Start": "البداية",
    "Length": "المدة",
    "Size": "الحجم",
    "File": "الملف",
    "Play": "شغّل",
    "Download…": "نزّل…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "اختر فترة واضغط «ابحث». ولا توجد تسجيلات إلا إذا كانت في الكاميرا "
        "بطاقة SD مركّبة.",
    "Asking %1…": "يجري سؤال %1…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "لم يُعثر على شيء في تلك الفترة. فإما أنه لم يُسجَّل شيء، وإما أن "
        "الكاميرا بلا بطاقة SD.",
    "No session with the camera — search first.":
        "لا جلسة مع الكاميرا — ابحث أولاً.",
    "No player": "لا مشغّل",
    "mpv was not found. The recording is at:\n\n%1":
        "لم يُعثر على mpv. والتسجيل موجود في:\n\n%1",
    "Save recording": "احفظ التسجيل",
    "Cannot write to %1.": "تعذّرت الكتابة إلى %1.",
    "Saved to %1": "حُفظ في %1",
    "Download failed: %1": "أخفق التنزيل: %1",
    "Maintenance": "الصيانة",
    "Restart": "إعادة التشغيل",
    "Restart the camera": "أعد تشغيل الكاميرا",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "تغيب الكاميرا عن الشبكة نحو دقيقة ثم تعود من تلقاء نفسها. ولا تتأثر "
        "التسجيلات على بطاقتها، وتبقى الإعدادات كما هي.\n\nويستحق الأمر "
        "التجربة حين تكفّ كاميرا عن الإجابة، أو ترفض الاتصالات الجديدة، أو "
        "تضطرب بعد تحديث برمجيتها الثابتة.",
    "<b>Restart %1?</b>": "<b>أتريد إعادة تشغيل %1؟</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "ستغيب الصورة نحو دقيقة. وسيتوقف كل ما يجري تسجيله الآن.",
    "Asking %1 to restart…": "يجري طلب إعادة التشغيل من %1…",
    "Restarting. The camera will be back in about a minute.":
        "تجري إعادة التشغيل. ستعود الكاميرا خلال دقيقة تقريباً.",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "لا تُتاح هنا إعادة الضبط إلى إعدادات المصنع ولا تهيئة بطاقة SD. "
        "فكلاهما لا رجعة فيه، والأفضل إجراؤهما في واجهة الويب الخاصة "
        "بالكاميرا، حيث التحذيرات من الشركة المصنّعة نفسها.",
    "Network": "الشبكة",
    "Connection": "الاتصال",
    "Reading…": "تجري القراءة…",
    "Wi-Fi signal": "إشارة الواي‌فاي",
    "Wi-Fi signal unknown": "إشارة الواي‌فاي غير معروفة",
    "Wi-Fi signal %1 of %2": "إشارة الواي‌فاي %1 من %2",
    "Link": "الوصلة",
    "Address": "العنوان",
    "Netmask": "قناع الشبكة",
    "Gateway": "البوابة",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "اسم الشبكة",
    "Ports": "المنافذ",
    "The camera reported nothing.": "لم تبلّغ الكاميرا بشيء.",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "معروض للاطلاع. أما العناوين وبيانات الواي‌فاي والمنافذ فتُغيَّر في "
        "واجهة الويب الخاصة بالكاميرا — وخطأ واحد هنا يضع الكاميرا خارج "
        "المنال.",
    "Hardware, with frame copy (recommended)":
        "عتاد، مع نسخ الإطارات (مستحسن)",
    "Hardware, zero copy (fastest)": "عتاد، دون نسخ (الأسرع)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "الخيارات الثلاثة تفك الترميز على بطاقة الرسوميات حيثما "
        "أمكن.\n\nويمرّر «مع نسخ الإطارات» كل إطار عبر الذاكرة الرئيسية. وهو "
        "أبطأ ببضع نقاط مئوية، وهو الخيار الافتراضي، لأن المسار بلا نسخ يُنتج "
        "مربعات خضراء أو صورة متجمدة على عدة مشغّلات حين يكون الفيديو داخل "
        "نافذة أخرى.\n\nجرّب «دون نسخ» إن أردت تلك النقاط الأخيرة؛ وارجع إن "
        "تفككت الصورة.",
    "This camera does not offer these settings.":
        "لا تقدّم هذه الكاميرا هذه الإعدادات.",
    "Exposure and orientation": "التعريض والاتجاه",
    "Day / night": "نهار / ليل",
    "Automatic": "تلقائي",
    "Always colour": "ملوّن دائماً",
    "Always black and white": "أبيض وأسود دائماً",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "ينتقل «تلقائي» إلى الأشعة تحت الحمراء مع خفوت الضوء. وفرض الألوان "
        "ليلاً يعطي صورة أشد عتمة من أن تُستعمل؛ وفرض الأبيض والأسود نهاراً "
        "يفقدك اللون بلا مقابل.",
    "Anti-flicker": "منع الوميض",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "طابق تردد التيار الكهربائي لديك — 50 هرتز في أوروبا — وإلا تضاربت "
        "إضاءة الداخل مع الغالق ونبضت الصورة.",
    "Exposure": "التعريض",
    "Mirror": "انعكاس أفقي",
    "Flip": "قلب رأسي",
    "For a camera mounted upside down.": "لكاميرا مركّبة مقلوبة.",
    "Backlight compensation": "تعويض الإضاءة الخلفية",
    "Helps when the subject stands against a bright window or sky.":
        "يفيد حين يقف الهدف أمام نافذة أو سماء ساطعة.",
    "Noise reduction": "خفض الضجيج",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "ينظّف الصورة المعتمة، على حساب تلطّخ كل ما يتحرك.",
    "Rotation": "الدوران",
    "Dynamic contrast": "التباين الديناميكي",
    "Infrared illumination": "الإضاءة تحت الحمراء",
    "Infrared lamps": "مصابيح الأشعة تحت الحمراء",
    "Always on": "مضاءة دائماً",
    "Always off": "مطفأة دائماً",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "يشغّلها «تلقائي» عند حلول الظلام. أطفئها إن كانت الكاميرا تنظر عبر "
        "زجاج — فالانعكاس يُعميها.",
    "Overlay": "الطبقة العلوية",
    "On-screen text": "نص على الصورة",
    "Background": "الخلفية",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "يرسم إطاراً خلف النص ليبقى مقروءاً فوق مشهد ساطع.",
    "Watermark": "العلامة المائية",
    "Embeds a mark in the recording itself.": "يضمّن علامة في التسجيل نفسه.",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "تحرق الكاميرا هذا في الصورة، فيظهر في كل تسجيل وفي كل عميل — لا هنا "
        "وحسب.",
    "Motion detection in the camera": "كشف الحركة في الكاميرا",
    "Switched on": "مشغّل",
    "Higher notices more, including shadows and headlights.":
        "الأعلى يلحظ أكثر، بما في ذلك الظلال وأضواء السيارات.",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "هذا هو كشف الكاميرا نفسها، وهو ما تبلّغ عنه عبر ONVIF. أما تحليل "
        "leolink للصورة فيُضبط على حدة، تحت «الكاميرات ← الأحداث».",
    "Recording": "التسجيل",
    "Recording to the camera's card": "التسجيل على بطاقة الكاميرا",
    "Overwrite when full": "استبدل عند الامتلاء",
    "Off means recording simply stops once the card fills up.":
        "الإطفاء يعني أن التسجيل يتوقف ببساطة متى امتلأت البطاقة.",
    "Record before the event": "سجّل قبل الحدث",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "يحتفظ بالثواني السابقة للحدث، وهي عادةً الجزء المهم.",
    "File length": "طول الملف",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "تحكم هذه ما تكتبه الكاميرا على بطاقتها. أما التسجيل على هذا الحاسوب "
        "فيُضبط تحت «الكاميرات ← الأحداث» ولا يحتاج بطاقة.",
    "Alerts": "التنبيهات",
    "E-mail": "البريد الإلكتروني",
    "FTP": "FTP",
    "FTP upload": "الرفع عبر FTP",
    "Push notification": "إشعار فوري",
    "Server": "الخادوم",
    "Port": "المنفذ",
    "Send to": "أرسل إلى",
    "Encrypted": "معمّى",
    "Not more often than": "ليس أكثر من مرة كل",
    "Attach": "أرفق",
    "Directory": "الدليل",
    "Mode": "الوضع",
    "Schedule": "الجدولة",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "ترسلها الكاميرا نفسها، فتظل تعمل حين يكون هذا الحاسوب مطفأً. أما ردود "
        "leolink — الأوامر وخطافات الويب وMQTT — فهي تحت «الكاميرات ← "
        "الأحداث».",
    "Time": "الوقت",
    "Time server": "خادوم الوقت",
    "Synchronise the clock": "زامن الساعة",
    "Every": "كل",
    "Scheduled restart": "إعادة تشغيل مجدولة",
    "Restart regularly": "أعد التشغيل بانتظام",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "تصبح بعض الكاميرات غير موثوقة بعد أسابيع من التشغيل المتواصل؛ وإعادة "
        "تشغيل أسبوعية علاج رخيص.",
    "Day": "اليوم",
    "Hour": "الساعة",
    "Minute": "الدقيقة",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "الكاميرا ذات الساعة الخاطئة تؤرّخ تسجيلاتها خطأً، وذلك أثقل مما يبدو "
        "حين تحتاج إلى العثور على تسجيل بعينه.",
    "Wi-Fi": "الواي‌فاي",
    "Scan": "افحص",
    "Join network": "انضم إلى الشبكة",
    "scanning…": "يجري الفحص…",
    "The camera is scanning for networks…": "الكاميرا تبحث عن شبكات…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "الكاميرا هي التي تفحص، لا هذا الحاسوب — وما يهم هو ما تصل إليه هي. "
        "وتُجرَّب كلمة المرور قبل حفظها، فيُرفض الخطأ المطبعي بدل أن تبقى "
        "الكاميرا بلا أي شبكة.",
    "Change the camera's network": "غيّر شبكة الكاميرا",
    "<b>Move %1 to “%2”?</b>": "<b>أتريد نقل %1 إلى «%2»؟</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "تختبر الكاميرا كلمة المرور أولاً وترفض إن كانت خاطئة، فالأمر أأمن مما "
        "يبدو.\n\nومع ذلك ستغيب دقيقة ريثما تعيد الاتصال، وإن أعطتها الشبكة "
        "الجديدة عنواناً مختلفاً فسيلزمك تحديثه هنا بعدئذ.",
    "Join": "انضم",
    "Testing the password on the camera…":
        "يجري اختبار كلمة المرور على الكاميرا…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "حُفظ. تعيد الكاميرا الاتصال وستعود بعد قليل.",
    "The camera could not join that network: %1":
        "تعذّر على الكاميرا الانضمام إلى تلك الشبكة: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "تُقرأ العناوين والمنافذ هنا، لكنها تُغيَّر في واجهة الويب الخاصة "
        "بالكاميرا. وخطأ واحد فيها يُخرج الكاميرا من الشبكة كلياً، والسبيل "
        "الوحيد للعودة هو دبوس إعادة الضبط — ولا يغني حوار تحذيري هناك عن شاشة "
        "الشركة المصنّعة نفسها.",
    "%1 fps": "%1 إطار/ث",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)": "انقطع البث — تجري إعادة الاتصال (%1)",
    "Hardware (recommended)": "عتاد (مستحسن)",
    "Hardware, driver's choice": "عتاد، باختيار المشغّل",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "يسمّي «المستحسن» المفكِّك صراحةً كي يبقى فك الترميز والرسم على واجهة "
        "الرسوميات نفسها. فإن تُرك mpv وشأنه فقد يفك الترميز بواجهة ويرسم "
        "بأخرى، وهو ما يجعل الصورة على بعض البطاقات خضراء صمّاء.\n\nفإن جاءت "
        "الصورة معطوبة، فجرّب البقية واحداً تلو الآخر. أما «برمجياً فقط» فيعمل "
        "دائماً، لكنه يكلّف نواة معالج كاملة عند الدقة القصوى.",
    "Wired": "سلكي",
    "%1 — strength unknown": "%1 — القوة غير معروفة",
    "%1 — %2 of %3": "%1 — %2 من %3",
    "WEAK SIGNAL": "إشارة ضعيفة",
    "BAD STREAM": "بث معطوب",
    "stream ended (%1) — reconnecting": "انتهى البث (%1) — تجري إعادة الاتصال",
    "Open the &log file": "افتح ملف الس&جل",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "ما أبلغ عنه المشغّلون والكاميرات. يستحق الإرفاق ببلاغ عن خلل.",
    "Nothing logged yet.": "لم يُسجَّل شيء بعد.",
    "Bit rate looks too low": "معدل البت يبدو منخفضاً أكثر مما ينبغي",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%1 kbit/s قليل جداً لـ %2.</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "عند هذه النسبة يميل مرمِّز الكاميرا إلى إخراج إطارات معطوبة، تصل على "
        "هيئة مربعات خضراء أو صورة متجمدة — وليس ذلك عطلاً في الشبكة، ولا "
        "شيئاً يستطيع leolink إصلاحه بالكامل.\n\nفإما أن ترفع معدل البت، وإما "
        "أن تخفض الدقة.",
    "Apply anyway": "طبّق رغم ذلك",
    "camera is reconfiguring…": "الكاميرا تعيد ضبط نفسها…",
    "Send a test e-mail": "أرسل بريداً تجريبياً",
    "Test the FTP upload": "اختبر الرفع عبر FTP",
    "Asking the camera to send a test e-mail…":
        "يجري طلب إرسال بريد تجريبي من الكاميرا…",
    "Asking the camera to try the FTP server…":
        "يجري طلب تجربة خادوم FTP من الكاميرا…",
    "%1: the camera reported success.": "%1: أبلغت الكاميرا بالنجاح.",
    "Condition": "الحالة",
    "Processor load %1%": "حِمل المعالج %1%",
    "Encoder load %1%": "حِمل المرمِّز %1%",
    "Network throughput %1 kbit/s": "إنتاجية الشبكة %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "الكاميرا عند حدّها. وخفض الدقة أو معدل الإطارات سيثبّتها.",
    "Firmware": "البرمجية الثابتة",
    "Not checked.": "لم يُتحقق.",
    "Check for updates": "ابحث عن تحديثات",
    "Asking Reolink…": "يجري سؤال Reolink…",
    "Install update": "ثبّت التحديث",
    "Update available: %1": "يتوفر تحديث: %1",
    "The firmware is up to date.": "البرمجية الثابتة محدّثة.",
    "Install firmware": "ثبّت البرمجية الثابتة",
    "<b>Update the firmware on %1?</b>":
        "<b>أتريد تحديث البرمجية الثابتة على %1؟</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "تنزّل الكاميرا التحديث بنفسها ثم تعيد التشغيل. وستتعذّر مخاطبتها عدة "
        "دقائق.\n\nلا تقطع عنها التيار أثناء التحديث — فالكاميرا التي تنقطع في "
        "منتصف الكتابة تحتاج عادةً إلى الإرجاع للصيانة.",
    "Install": "ثبّت",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "يجري التحديث. ستعيد الكاميرا التشغيل من تلقاء نفسها وتتعذّر مخاطبتها "
        "عدة دقائق. لا تقطع عنها التيار.",
    "Storage": "التخزين",
    "Format the SD card": "هيّئ بطاقة SD",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "تمحو التهيئة كل تسجيل على البطاقة. ولا تراجع عنها ولا تأكيد من "
        "الكاميرا بعدها.",
    "<b>Erase everything on the card in %1?</b>":
        "<b>أتريد محو كل ما على بطاقة %1؟</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "يُحذف كل تسجيل على البطاقة. ولا يمكن التراجع عن ذلك، ولا يمكن استرجاع "
        "أي شيء لم يُنزَّل من قبل.",
    "Erase": "امحُ",
    "Formatting…": "تجري التهيئة…",
    "The card has been formatted.": "هُيّئت البطاقة.",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "لا تُتاح هنا إعادة الضبط إلى إعدادات المصنع. فهي تمحو إعدادات الشبكة "
        "كذلك، والكاميرا التي نسيت شبكة الواي‌فاي لا بد من إنزالها وإعادة "
        "ضبطها يدوياً.",
    "Users": "المستخدمون",
    "Rights": "الصلاحيات",
    "Administrator": "مدير",
    "Viewer": "مشاهد",
    "Add…": "أضف…",
    "Change password…": "غيّر كلمة المرور…",
    "Delete": "احذف",
    "New user": "مستخدم جديد",
    "User name": "اسم المستخدم",
    "Password for %1": "كلمة مرور %1",
    "Creating %1…": "يجري إنشاء %1…",
    "Change password": "غيّر كلمة المرور",
    "New password for %1": "كلمة مرور جديدة لـ %1",
    "Changing the password for %1…": "يجري تغيير كلمة مرور %1…",
    "This is the account leolink uses": "هذا هو الحساب الذي يستخدمه leolink",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "غيّرها هنا وسيبقى leolink خارجاً إلى أن تُدخل كلمة المرور الجديدة تحت "
        "«الكاميرات» أيضاً.",
    "Cannot delete this account": "تعذّر حذف هذا الحساب",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "‏leolink مسجَّل الدخول باسم «%1». وحذفه سيقطع الاتصال بهذه الكاميرا "
        "فوراً.",
    "Delete user": "احذف المستخدم",
    "Delete “%1” from the camera?": "أتريد حذف «%1» من الكاميرا؟",
    "Deleting %1…": "يجري حذف %1…",
    "Done.": "تم.",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "هذه حسابات على الكاميرا، لا في leolink. وحساب المشاهد يستطيع المشاهدة "
        "دون تغيير أي شيء — ويستحق استعماله في كل ما يحتاج إلى رؤية الصورة "
        "فقط، حتى لا تُوجَّه كلمة مرور مخزّنة ضد إعدادات الكاميرا.",
    "camera is reconfiguring… %1 s": "الكاميرا تعيد ضبط نفسها… %1 ث",
    "File format not recognised.": "صيغة الملف غير معروفة.",
    "Invalid input.": "مُدخل غير صالح.",
    "No free connections — the camera allows only a few sessions at a time.":
        "لا اتصالات شاغرة — لا تسمح الكاميرا إلا ببضع جلسات في آن واحد.",
    "Session expired.": "انتهت صلاحية الجلسة.",
    "Wrong user name or password.": "اسم المستخدم أو كلمة المرور خطأ.",
    "Timed out.": "انتهت المهلة.",
    "This firmware does not support that command.":
        "لا تدعم هذه البرمجية الثابتة ذلك الأمر.",
    "Could not read the configuration.": "تعذّرت قراءة الإعدادات.",
    "Could not verify the configuration.": "تعذّر التحقق من الإعدادات.",
    "Subsystem unavailable — typically no SD card fitted.":
        "النظام الفرعي غير متاح — وعادةً بسبب عدم وجود بطاقة SD.",
    "Not permitted — this model lacks the hardware.":
        "غير مسموح — هذا الطراز يفتقر إلى العتاد اللازم.",
    "Account invalid, log in again.": "الحساب غير صالح، سجّل الدخول من جديد.",
    "User name already taken.": "اسم المستخدم مأخوذ سلفاً.",
    "Maximum number of users reached.": "بُلغ الحد الأقصى لعدد المستخدمين.",
    "Camera busy, try again shortly.":
        "الكاميرا مشغولة، أعد المحاولة بعد قليل.",
    "IP address conflict.": "تعارض في عناوين IP.",
    "Configuration test failed.": "أخفق اختبار الإعدادات.",
    "FTP login failed.": "أخفق تسجيل الدخول إلى FTP.",
    "FTP could not create the directory.": "تعذّر على FTP إنشاء الدليل.",
    "FTP upload failed.": "أخفق الرفع عبر FTP.",
    "FTP could not reach the server.": "تعذّر على FTP الوصول إلى الخادوم.",
    "Camera reported error %1.": "أبلغت الكاميرا عن الخطأ %1.",
    "Cannot reach %1: %2": "تعذّر الوصول إلى %1: %2",
    "Unexpected reply from %1.": "رد غير متوقع من %1.",
    "Login returned no token.": "لم يُعِد تسجيل الدخول أي رمز.",
    "Snapshot failed.": "أخفقت اللقطة.",
    "ONVIF subscription failed.": "أخفق الاشتراك عبر ONVIF.",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n اسم الكاميرا · %h العنوان · %t الوقت · %e الحدث · %s تشغيل/إيقاف · "
        "%f التسجيل · %p الصورة",
    "Run a command": "نفّذ أمراً",
    "Call a webhook": "استدعِ خطاف ويب",
    "Left empty, leolink sends a small JSON document describing the event.":
        "إن تُرك فارغاً أرسل leolink مستند JSON صغيراً يصف الحدث.",
    "Method": "الطريقة",
    "Body": "المتن",
    "Publish an MQTT message": "انشر رسالة MQTT",
    "Left empty: the same JSON document as the webhook.":
        "إن تُرك فارغاً: مستند JSON نفسه الذي يرسله خطاف الويب.",
    "Keep the last message on the broker": "أبقِ آخر رسالة لدى الوسيط",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "العميل الذي يتصل لاحقاً يعرف الحالة الراهنة فوراً بدل انتظار الحدث "
        "التالي. وهذا ما تريده أتمتة المنزل عادةً.",
    "Broker": "الوسيط",
    "Topic": "الموضوع",
    "Payload": "الحمولة",
    "MQTT": "MQTT",
    "In leolink": "في leolink",
    "In the camera": "في الكاميرا",
    "Try again": "أعد المحاولة",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>الكاميرا تبلّغ:</b> يقرر كاشف الكاميرا نفسه ويرسل حدث ONVIF. وما "
        "يراقبه ومدى سهولة تنبّهه يُضبط أدناه تحت «الكشف»، داخل الكاميرا "
        "ذاتها.<br><br><b>‏leolink يراقب الصورة:</b> يفتح هذا الحاسوب اتصالاً "
        "ثانياً بالبث الفرعي ويحلّل الصورة. يعمل مع أي كاميرا، بما فيها التي "
        "لا تبلّغ عن شيء — ولا دور عندئذ لكاشف الكاميرا نفسه.",
    "Choose what is watched…": "اختر ما يُراقَب…",
    "How leolink learns of motion": "كيف يعلم leolink بالحركة",
    "When leolink watches the picture": "حين يراقب leolink الصورة",
    "Detection by leolink": "الكشف بواسطة leolink",
    "Recording on this computer": "التسجيل على هذا الحاسوب",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "وجهة الملفات واحدة لكل الكاميرات وتُضبط تحت الإعدادات ▸ التسجيلات.",
    "Follow the defaults under Settings": "اتّبع الإعدادات الافتراضية",
    "Use this camera's own": "استخدم ما يخص هذه الكاميرا",
    "Reactions": "ردود الفعل",
    "What happens on an event": "ما يحدث عند وقوع حدث",
    "Muted": "مكتومة",
    "Sound in leolink": "الصوت في leolink",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "يوجد الضابطان نفساهما على بطاقة الكاميرا، حيث يسهل بلوغهما أسرع. "
        "وتبدأ الكاميرات مكتومة: فتح جدار منها ينبغي ألّا يملأ الغرفة بصوت كل "
        "واحدة دفعة واحدة.",
    "Playback": "التشغيل",
    "&Settings…": "الإ&عدادات…",
    "Reactions": "ردود الفعل",
    "Recordings": "التسجيلات",
    "General": "عام",
    "Tint the tile red for a moment": "لوّن البطاقة بالأحمر لحظةً",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "حتى تكفي نظرة واحدة إلى جدار من الكاميرات لمعرفة أيها كانت.",
    " ms": " ms",
    "Play a sound": "شغّل صوتاً",
    "Empty: the desktop's own notification sound":
        "فارغ: صوت التنبيه الخاص بسطح المكتب",
    "Sound to play": "الصوت المراد تشغيله",
    "For": "لمدة",
    "Sound file": "ملف الصوت",
    "On the screen": "على الشاشة",
    "The window": "النافذة",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "أي الكاميرات يثير حدثاً أصلاً وكيف، يُضبط لكل كاميرا تحت الكاميرات ▸ "
        "الإعدادات ▸ الكشف بواسطة leolink.",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "ما يفعله leolink حين تبلّغ كاميرا عن شيء. وتتبع الكاميرا هذه "
        "الإعدادات ما لم يقل حوارها الخاص غير ذلك — كلها أو لا شيء منها، ولا "
        "نصفها أبداً: فالإعدادات الموروثة جزئياً هي أصعب ما يُتتبَّع حين لا "
        "يعمل شيء.",
    "Recordings and stills": "التسجيلات واللقطات",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "تُكتب التسجيلات بصيغة Matroska دون إعادة ترميز: فتحتفظ الصورة بجودة "
        "الكاميرا الأصلية ويبقى المعالج شبه خامل.\n\nأما إن كانت الكاميرا "
        "تسجّل أصلاً فذلك إعدادها الخاص، تحت الكاميرات ▸ الإعدادات ▸ ردود "
        "الفعل.",
    "Settings for this camera…": "إعدادات هذه الكاميرا…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "الكشف وردود الفعل والتسجيل في leolink، ومرمِّز الكاميرا نفسها وصورتها "
        "وجداولها.",
}


# Plural forms — six forms: zero, one, two, few, many, other.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        "، لا نقاط وصول",
        "، نقطة وصول واحدة",
        "، نقطتا وصول",
        "، %n نقاط وصول",
        "، %n نقطة وصول",
        "، %n نقطة وصول"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "لم تُسمع من أي نقطة وصول.",
        "سُمعت من نقطة وصول واحدة — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.",
        "سُمعت من نقطتي وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.",
        "سُمعت من %n نقاط وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.",
        "سُمعت من %n نقطة وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.",
        "سُمعت من %n نقطة وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى."],
    "%n network(s) found, strongest first.": [
        "لم تُوجد شبكات.",
        "وُجدت شبكة واحدة، الأقوى أولاً.",
        "وُجدت شبكتان، الأقوى أولاً.",
        "وُجدت %n شبكات، الأقوى أولاً.",
        "وُجدت %n شبكة، الأقوى أولاً.",
        "وُجدت %n شبكة، الأقوى أولاً."],
    "Asking about %n command(s)…": [
        "لا أوامر للسؤال عنها…",
        "يجري السؤال عن أمر واحد…",
        "يجري السؤال عن أمرين…",
        "يجري السؤال عن %n أوامر…",
        "يجري السؤال عن %n أمراً…",
        "يجري السؤال عن %n أمر…"],
    "%n area(s) blanked": [
        "لا مناطق مطموسة",
        "طُمست منطقة واحدة",
        "طُمست منطقتان",
        "طُمست %n مناطق",
        "طُمست %n منطقة",
        "طُمست %n منطقة"],
    "%n area(s), switched off": [
        "لا مناطق، مطفأة",
        "منطقة واحدة، مطفأة",
        "منطقتان، مطفأتان",
        "%n مناطق، مطفأة",
        "%n منطقة، مطفأة",
        "%n منطقة، مطفأة"],
    "%n hour(s) a week.": [
        "لا ساعات في الأسبوع.",
        "ساعة واحدة في الأسبوع.",
        "ساعتان في الأسبوع.",
        "%n ساعات في الأسبوع.",
        "%n ساعة في الأسبوع.",
        "%n ساعة في الأسبوع."],
    "%n camera(s) live": [
        "لا كاميرات مباشرة",
        "كاميرا واحدة مباشرة",
        "كاميرتان مباشرة",
        "%n كاميرات مباشرة",
        "%n كاميرا مباشرة",
        "%n كاميرا مباشرة"],
    "Saved %n snapshot(s)": [
        "لم تُحفظ لقطات",
        "حُفظت لقطة واحدة",
        "حُفظت لقطتان",
        "حُفظت %n لقطات",
        "حُفظت %n لقطة",
        "حُفظت %n لقطة"],
    "Found %n device(s)…": [
        "لم تُوجد أجهزة…",
        "وُجد جهاز واحد…",
        "وُجد جهازان…",
        "وُجدت %n أجهزة…",
        "وُجد %n جهازاً…",
        "وُجد %n جهاز…"],
    "%n recording(s) found.": [
        "لم تُوجد تسجيلات.",
        "وُجد تسجيل واحد.",
        "وُجد تسجيلان.",
        "وُجدت %n تسجيلات.",
        "وُجد %n تسجيلاً.",
        "وُجد %n تسجيل."],
    "%n network(s) found.": [
        "لم تُوجد شبكات.",
        "وُجدت شبكة واحدة.",
        "وُجدت شبكتان.",
        "وُجدت %n شبكات.",
        "وُجدت %n شبكة.",
        "وُجدت %n شبكة."],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "لا إطارات معطوبة في الثواني العشر الأخيرة.\n\nوعادةً ما يكون السبب "
        "إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما "
        "يستطيع — وهذا ما عجز عنه.",
        "إطار واحد معطوب في الثواني العشر الأخيرة.\n\nوعادةً ما يكون السبب "
        "إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما "
        "يستطيع — وهذا ما عجز عنه.",
        "إطاران معطوبان في الثواني العشر الأخيرة.\n\nوعادةً ما يكون السبب "
        "إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما "
        "يستطيع — وهذا ما عجز عنه.",
        "%n إطارات معطوبة في الثواني العشر الأخيرة.\n\nوعادةً ما يكون السبب "
        "إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما "
        "يستطيع — وهذا ما عجز عنه.",
        "%n إطاراً معطوباً في الثواني العشر الأخيرة.\n\nوعادةً ما يكون السبب "
        "إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما "
        "يستطيع — وهذا ما عجز عنه.",
        "%n إطار معطوب في الثواني العشر الأخيرة.\n\nوعادةً ما يكون السبب إشارة "
        "واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما "
        "يستطيع — وهذا ما عجز عنه."],
}
