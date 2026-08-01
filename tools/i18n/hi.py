"""Hindi. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Hindi. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "निदान",
    "&Diagnostics…": "निदान (&D)…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "leolink और कैमरों ने अब तक क्या किया — और एक रिपोर्ट जिसे बग रिपोर्ट "
        "के साथ भेजा जा सके।",
    "Errors only": "केवल त्रुटियाँ",
    "Warnings and errors": "चेतावनियाँ और त्रुटियाँ",
    "Normal activity": "सामान्य गतिविधि",
    "Everything": "सब कुछ",
    "All areas": "सभी क्षेत्र",
    "Search…": "खोजें…",
    "Show": "दिखाएँ",
    "Detailed logging": "विस्तृत लॉग",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "कैमरे को भेजा गया हर अनुरोध, डिकोडर का हर निर्णय और हर पुनःसंयोजन "
        "दर्ज करता है। रोज़मर्रा के उपयोग में इसे बंद ही रहने दें — कुछ गड़बड़ "
        "हो तो चालू करें, समस्या दोहराएँ, फिर रिपोर्ट भेजें।",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "कैमरे को भेजा गया हर अनुरोध, डिकोडर का हर निर्णय और हर पुनःसंयोजन "
        "~/.local/share/leolink/leolink.log में दर्ज करता है।",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "त्रुटियाँ और चेतावनियाँ हमेशा दर्ज होती हैं। विस्तृत लॉग कैमरे के साथ "
        "हुई बातचीत भी जोड़ देता है — कुछ गड़बड़ हो तो इसे चालू करें, समस्या "
        "दोहराएँ, फिर सहायता ▸ निदान से रिपोर्ट भेजें। पासवर्ड और सत्र-टोकन "
        "कुछ भी लिखे जाने से पहले हटा दिए जाते हैं।",
    "Open diagnostics…": "निदान खोलें…",
    "Open diagnostics": "निदान खोलें",
    "Follow new lines": "नई पंक्तियों के साथ चलें",
    "Copy report": "रिपोर्ट कॉपी करें",
    "System details and the log, ready to paste into a bug report.":
        "सिस्टम का विवरण और लॉग, बग रिपोर्ट में चिपकाने के लिए तैयार।",
    "Report copied.": "रिपोर्ट कॉपी हो गई।",
    "Save report…": "रिपोर्ट सहेजें…",
    "Save report": "रिपोर्ट सहेजें",
    "Text files (*.txt)": "पाठ फ़ाइलें (*.txt)",
    "Could not write %1.": "%1 लिखा नहीं जा सका।",
    "Open log folder": "लॉग फ़ोल्डर खोलें",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "पासवर्ड, सत्र-टोकन और इंटरनेट पते कुछ भी लिखे जाने से पहले हटा दिए "
        "जाते हैं, इसलिए इसे जस का तस साझा किया जा सकता है। आपके अपने नेटवर्क "
        "के पते बने रहते हैं — आमतौर पर वही पहला सुराग होते हैं।",
    "%1 of %2 lines": "%2 में से %1 पंक्तियाँ",
    "Report a problem": "समस्या की सूचना दें",
    "<b>Attach a diagnostics report</b>": "<b>निदान रिपोर्ट संलग्न करें</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "यह दर्ज करती है कि आपकी मशीन क्या है, कैमरों ने क्या उत्तर दिया और "
        "गड़बड़ी कहाँ हुई — पासवर्ड और पते पहले ही हटाए जा चुके होते हैं। इसके "
        "बिना अधिकांश सूचनाओं पर आगे काम नहीं हो पाता।\n\nयदि समस्या आप स्वयं "
        "पैदा कर सकते हैं, तो पहले निदान विंडो में विस्तृत लॉग चालू करें, उसे "
        "दोबारा घटित करें, और तब रिपोर्ट कॉपी करें।",
    "Go to the issue tracker": "समस्या-सूची पर जाएँ",
    "Application": "अनुप्रयोग",
    "Camera API": "कैमरा इंटरफ़ेस",
    "ONVIF events": "ONVIF घटनाएँ",
    "Event actions": "घटना पर कार्रवाई",
    "Baichuan": "Baichuan",
    "User interface": "उपयोक्ता इंटरफ़ेस",
    "Qt": "Qt",
    "strong": "मज़बूत",
    "good": "अच्छा",
    "fair": "ठीक-ठाक",
    "weak": "कमज़ोर",
    "unknown": "अज्ञात",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "कैमरे को जैसा सुनाई देता है वैसा संकेत: 4 में से %1",
    "Encryption: %1": "एन्क्रिप्शन: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "कुछ नाम कई पहुँच-बिंदुओं से सुनाई दिए — यह एक मेश नेटवर्क है। कैमरा "
        "नाम से जुड़ता है, किसी विशेष नोड से नहीं; किससे बात होगी यह मेश तय "
        "करता है और ज़रूरत पड़ने पर बदल देता है। सबसे अच्छी जगह खोजने के लिए "
        "कैमरा हिलाएँ और ऊपर «वाई-फ़ाई संकेत» देखें: असली कड़ी वही है।",
    "What this camera supports": "यह कैमरा क्या-क्या कर सकता है",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "Reolink का फ़र्मवेयर मॉडल-दर-मॉडल बहुत भिन्न है, और यह जानने का "
        "एकमात्र भरोसेमंद तरीका कि कोई कैमरा क्या कर सकता है, उसी से पूछना है। "
        "यदि leolink में कुछ ऐसा नहीं है जो आपके कैमरे में स्पष्ट रूप से मौजूद "
        "है, तो बग रिपोर्ट में दी गई यही सूची उसे जोड़ना संभव बनाती है।",
    "Ask the camera": "कैमरे से पूछें",
    "Copy the list": "सूची कॉपी करें",
    "Copied.": "कॉपी हो गया।",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>समर्थित (%1):</b> %2<br><br><b>असमर्थित (%3):</b> %4",
    "Privacy": "निजता",
    "Privacy areas…": "निजी क्षेत्र…",
    "Parts of the view the camera blanks before anything leaves it.":
        "दृश्य के वे हिस्से जिन्हें कैमरा कुछ भी बाहर जाने से पहले काला कर "
        "देता है।",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "कैमरे के भीतर ही काला किया जाता है, इसलिए ढका हुआ हिस्सा हर दर्शक और "
        "हर रिकॉर्डिंग में गायब रहता है — पड़ोसी की खिड़की, या कोई मेज़ जो "
        "वीडियो में नहीं आनी चाहिए।",
    "%1 — privacy areas": "%1 — निजी क्षेत्र",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "दृश्य के वे हिस्से खींचकर चुनें जिन्हें कैमरा काला करे। वह उन्हें "
        "उपकरण से कुछ भी बाहर जाने से पहले काला कर देता है, इसलिए वे सीधे "
        "प्रसारण में, रिकॉर्डिंग में और हर दूसरे प्रोग्राम में — निर्माता के "
        "ऐप में भी — गायब रहते हैं।",
    "Remove the last": "अंतिम हटाएँ",
    "Remove all": "सभी हटाएँ",
    "No picture: %1 — the areas can still be drawn.":
        "कोई चित्र नहीं: %1 — क्षेत्र फिर भी खींचे जा सकते हैं।",
    "%1 of %2 areas": "%2 में से %1 क्षेत्र",
    "nothing blanked": "कुछ भी काला नहीं",
    "Detection area…": "पहचान क्षेत्र…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "कैमरा चित्र के किन हिस्सों पर नज़र रखता है। क्षेत्र के बाहर की हर "
        "चीज़ अनदेखी रहती है — दृश्य के किनारे की सड़क, हवा में हिलता पेड़, "
        "पड़ोसी का दरवाज़ा।",
    "%1 — the camera's detection area": "%1 — कैमरे का पहचान क्षेत्र",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "कैमरा किस पर नज़र रखे यह चुनने के लिए चित्र पर खींचें। गहरे किए गए "
        "क्षेत्र अनदेखे रहते हैं। यह कैमरे की अपनी जाली है, %1 × %2, इसलिए "
        "leolink की जाली से महीन है।",
    "When to watch…": "कब निगरानी करे…",
    "Hours of the week the camera raises motion events at all.":
        "सप्ताह के वे घंटे जिनमें कैमरा गति की सूचना देता ही है।",
    "%1 — when to watch": "%1 — कब निगरानी करे",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "वे घंटे जिनमें कैमरा गति की सूचना देता है। इनके बाहर वह देखता तो है, "
        "पर कुछ कहता नहीं।",
    "When to record…": "कब रिकॉर्ड करे…",
    "Hours of the week the camera records to its card by itself.":
        "सप्ताह के वे घंटे जिनमें कैमरा अपने आप अपने कार्ड पर रिकॉर्ड करता है।",
    "%1 — when to record": "%1 — कब रिकॉर्ड करे",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "वे घंटे जिनमें कैमरा अपने ही कार्ड पर रिकॉर्ड करता है। इसके लिए कार्ड "
        "लगा होना चाहिए; इस कंप्यूटर पर रिकॉर्डिंग कैमरे → घटनाएँ के नीचे तय "
        "होती है और बिना कार्ड के चलती है।",
    "Area, times and sensitivity": "क्षेत्र, समय और संवेदनशीलता",
    "To": "तक",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "कैमरे दिन के अलग-अलग समय पर अलग संवेदनशीलता की छूट देते हैं — इसी से "
        "रात में हेडलाइट सब कुछ नहीं छेड़तीं और दिन में कैमरा बहरा भी नहीं "
        "होता।",
    "All week": "पूरा सप्ताह",
    "Never": "कभी नहीं",
    "Nights": "रात में",
    "Working hours": "काम के घंटे",
    "Weekends": "सप्ताहांत",
    "22:00 to 06:00, every day.": "रोज़ 22:00 से 06:00 तक।",
    "08:00 to 17:00, Monday to Friday.":
        "सोमवार से शुक्रवार, 08:00 से 17:00 तक।",
    "Nothing is selected — this will never run.":
        "कुछ भी चुना नहीं गया — यह कभी नहीं चलेगा।",
    "Always on.": "हमेशा चालू।",
    "Mobile data": "मोबाइल डेटा",
    "SIM card": "सिम कार्ड",
    "PIN": "पिन",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "केवल तभी चाहिए जब कार्ड माँगे। तीन गलत प्रयासों पर कार्ड बंद हो जाता "
        "है और फिर PUK चाहिए, जो केवल आपके ऑपरेटर के पास होता है।",
    "Access point (APN)": "पहुँच-बिंदु (APN)",
    "Authentication": "प्रमाणीकरण",
    "Use mobile data": "मोबाइल डेटा इस्तेमाल करें",
    "Modem": "मॉडेम",
    "Card": "कार्ड",
    "Type": "प्रकार",
    "Signal": "संकेत",
    "IMEI": "IMEI",
    "Card number": "कार्ड संख्या",
    "Mobile connection": "मोबाइल संयोजन",
    "Data used": "खर्च हुआ डेटा",
    "Monthly limit": "मासिक सीमा",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>असली हार्डवेयर पर परखा नहीं गया।</b> leolink से जुड़े किसी भी "
        "व्यक्ति के पास मॉडेम वाला कैमरा नहीं है, इसलिए यह केवल प्रोटोकॉल के "
        "आधार पर लिखा गया है। यह कुछ भी बिगाड़ नहीं सकता — जिस आदेश को कैमरा "
        "नहीं जानता उसे वह बस ठुकरा देता है — पर उतनी ही आसानी से कुछ भी न "
        "दिखाए, यह भी हो सकता है।\n\nयदि आपके कैमरे में सिम है, तो रखरखाव के "
        "नीचे «यह कैमरा क्या-क्या कर सकता है» उन आदेशों की सूची देता है जो "
        "उसके फ़र्मवेयर में सचमुच हैं। बग रिपोर्ट में दी गई वही सूची इसे ढंग "
        "से पूरा करने देगी।",
    "Baichuan (the camera's own protocol)":
        "Baichuan (कैमरे का अपना प्रोटोकॉल)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP अधिकांश कैमरों पर ठीक बैठता है और सबसे पहले यही आज़माना "
        "चाहिए।\n\nHTTP-FLV को केवल पोर्ट 80 चाहिए, जो वहाँ काम आता है जहाँ "
        "RTSP रोका गया हो।\n\nBaichuan वही है जो Reolink का अपना ऐप बोलता है। "
        "जो कैमरे RTSP बंद रखते हैं — बैटरी वाले मॉडल ऐसा करते हैं — उनके लिए "
        "यही उत्तर है, और यह कैमरे के गिने-चुने वेब सत्रों में से एक भी नहीं "
        "लेता। केवल वीडियो: ध्वनि अब भी RTSP से आती है।",
    "connecting over Baichuan…": "Baichuan से जुड़ रहे हैं…",
    "Cannot open a local port: %1": "स्थानीय पोर्ट नहीं खुल सका: %1",
    "Baichuan login failed: %1": "Baichuan लॉगिन विफल: %1",
    "The camera refused to send video: %1":
        "कैमरे ने वीडियो भेजने से मना किया: %1",
    "The player did not connect.": "प्लेयर जुड़ा ही नहीं।",
    "The camera stopped sending.": "कैमरे ने भेजना बंद कर दिया।",
    "custom stream": "अपनी स्ट्रीम",
    "Speak through the camera": "कैमरे के ज़रिए बोलें",
    "Stop speaking": "बोलना बंद करें",
    "Play through %1": "%1 के ज़रिए बजाएँ",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "ध्वनि फ़ाइलें (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;सभी फ़ाइलें "
        "(*)",
    "Speaking through the camera…": "कैमरे के ज़रिए बोल रहे हैं…",
    "Finished.": "समाप्त।",
    "Cannot reach the camera: %1": "कैमरे तक नहीं पहुँच पा रहे: %1",
    "The camera did not answer on the RTSP port.":
        "कैमरे ने RTSP पोर्ट पर उत्तर नहीं दिया।",
    "ffmpeg is needed to send sound and could not be started.":
        "ध्वनि भेजने के लिए ffmpeg चाहिए और वह चालू नहीं हो सका।",
    "The camera rejected the user name or password.":
        "कैमरे ने उपयोक्ता-नाम या पासवर्ड ठुकरा दिया।",
    "The camera refused: %1": "कैमरे ने मना किया: %1",
    "This camera does not offer a speaker.":
        "इस कैमरे में लाउडस्पीकर नहीं है।",
    "Sound": "ध्वनि",
    "Send sound": "ध्वनि भेजें",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "कैमरे का माइक्रोफ़ोन। इसके बंद रहने पर भी वह स्ट्रीम में एक ऑडियो "
        "ट्रैक डालता है — पूरी तरह मौन, जिसे पहचानना ट्रैक के बिल्कुल न होने "
        "से कहीं कठिन है।",
    "What it recognises": "यह क्या पहचानता है",
    "People": "व्यक्ति",
    "Vehicles": "वाहन",
    "Animals": "जानवर",
    "Faces": "चेहरे",
    "Any movement": "कोई भी हलचल",
    "Continuous": "लगातार",
    "This camera keeps a separate week for each kind of event. Which one?":
        "यह कैमरा हर तरह की घटना के लिए अलग सप्ताह रखता है। कौन-सा?",
    "Push notifications": "पुश सूचनाएँ",
    "Folder": "फ़ोल्डर",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "कैमरा इस समय अनुरोधों का उत्तर नहीं दे रहा। जब उसे एक साथ बहुत अनुरोध "
        "मिल जाएँ तो वह ऐसा करता है; थोड़ी देर में वह अपने आप सँभल जाता है।",
    "Camera-side detection": "कैमरे की ओर से पहचान",
    "Where it looks": "वह कहाँ देखता है",
    "Choose the area…": "क्षेत्र चुनें…",
    "When it reports at all": "वह सूचना देता ही कब है",
    "Choose the hours…": "घंटे चुनें…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "घंटों का एक सप्ताह: जिन पर आप निशान लगाएँगे उनमें कैमरा गति की सूचना "
        "देगा, बाकी में चुप रहेगा। इसका उसकी संवेदनशीलता से कोई लेना-देना नहीं "
        "— वह नीचे तय होती है।",
    "How readily it triggers": "यह कितनी आसानी से चलता है",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "एक ही दिन में कैमरा कम या ज़्यादा आसानी से चल सकता है। इसी से रात में "
        "हेडलाइट सब कुछ नहीं छेड़तीं और दिन में वह अंधा भी नहीं होता। कितने "
        "खंड होंगे यह कैमरा तय करता है; उनके समय और संवेदनशीलता आपकी हैं।",
    "Siren": "सायरन",
    "Sound on an alarm": "अलार्म पर बजाएँ",
    "Times": "समय",
    "Spotlight": "स्पॉटलाइट",
    "On": "चालू",
    "Draw": "बनाएँ",
    "Watch a rectangle": "एक आयत पर नज़र रखें",
    "Ignore a rectangle": "एक आयत अनदेखा करें",
    "Drag over single cells.": "अलग-अलग खानों पर खींचें।",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "नज़र रखने के लिए एक आयत खींचें। Shift दबाकर खींचने से भी वही होता है, "
        "बिना औज़ार बदले।",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "अनदेखा करने के लिए एक आयत खींचें। Ctrl दबाकर खींचने से भी वही होता "
        "है, बिना औज़ार बदले।",
    "  · already added": "  · पहले से जोड़ा जा चुका",
    "Processor load %1 %": "प्रोसेसर भार %1 %",
    "Encoder output %1 kbit/s": "एन्कोडर उत्पादन %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "समर्थित (%1):\n%2\n\nअसमर्थित (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "Reolink से कैमरा पूछता है, यह कंप्यूटर नहीं — इसलिए उसे इंटरनेट तक "
        "अपना रास्ता चाहिए।",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "कैमरे के एक हिस्से ने उत्तर नहीं दिया। पूछे गए सवाल के अनुसार इसका "
        "अर्थ है कि कोई SD कार्ड लगा नहीं है, या कैमरे के पास इंटरनेट तक "
        "रास्ता नहीं है।",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "फ़ैक्ट्री रीसेट यहाँ नहीं दिया गया है। वह नेटवर्क सेटिंग भी मिटा देता "
        "है, और जो कैमरा अपना वाई-फ़ाई भूल चुका हो उसे उतारकर केबल से जोड़ना "
        "पड़ता है — यदि आप सचमुच यही चाहते हैं तो कैमरे का अपना वेब इंटरफ़ेस "
        "इस्तेमाल करें।",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "कैमरे के पास कोई खाली सत्र नहीं है। वह एक बार में मुट्ठी भर ही चलने "
        "देता है, और वे फ़ोन ऐप तथा उसके वेब पन्ने के साथ साझा होते हैं। "
        "उन्हें बंद करें, या एक मिनट रुकें कि पुराने अपने आप समाप्त हो जाएँ।",
    "&File": "फ़ाइल (&F)",
    "&View": "दृश्य (&V)",
    "&Help": "सहायता (&H)",
    "&Cameras…": "कैमरे (&C)…",
    "&Save snapshots…": "स्नैपशॉट सहेजें (&S)…",
    "&Event log…": "घटना लॉग (&E)…",
    "Open &recordings folder": "रिकॉर्डिंग फ़ोल्डर खोलें (&R)",
    "&Quit": "बाहर निकलें (&Q)",
    "&Full screen": "पूर्ण स्क्रीन (&F)",
    "Leave full screen": "पूर्ण स्क्रीन से बाहर आएँ",
    "Show &menu bar": "मेन्यू पट्टी दिखाएँ (&M)",
    "Show &toolbar": "औज़ार पट्टी दिखाएँ (&T)",
    "Show status &bar": "स्थिति पट्टी दिखाएँ (&B)",
    "Hide window &decoration": "खिड़की का ढाँचा छिपाएँ (&D)",
    "&Online handbook": "ऑनलाइन पुस्तिका (&O)",
    "&Protocol notes": "प्रोटोकॉल टिप्पणियाँ (&P)",
    "&Report a problem": "समस्या की सूचना दें (&R)",
    "&About leolink": "leolink के बारे में (&A)",
    "Main": "मुख्य",
    "Ready": "तैयार",
    "Grid view": "जाली दृश्य",
    "No cameras configured": "कोई कैमरा सेट नहीं है",
    "Nothing to capture": "लेने को कुछ नहीं",
    "Save snapshots to": "स्नैपशॉट यहाँ सहेजें",
    "Esc leaves full screen": "Esc पूर्ण स्क्रीन से बाहर लाता है",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc पूर्ण स्क्रीन से बाहर लाता है · किसी कैमरे पर दो बार क्लिक करने "
        "से वह पूरी स्क्रीन भर देता है",
    "Double-click for the grid · Esc leaves full screen":
        "जाली के लिए दो बार क्लिक करें · Esc पूर्ण स्क्रीन से बाहर लाता है",
    "Cannot save": "सहेजा नहीं जा सकता",
    "Settings could not be written to %1.": "सेटिंग %1 में नहीं लिखी जा सकीं।",
    "Cannot create %1": "%1 बनाया नहीं जा सकता",
    "Recording %1": "%1 रिकॉर्ड हो रहा है",
    "Saved %1": "%1 सहेजा गया",
    "Motion at %1": "%1 पर गति",
    "Motion detected": "गति पहचानी गई",
    "Could not run the motion command for %1":
        "%1 के लिए गति-आदेश नहीं चलाया जा सका",
    "leolink is still running": "leolink अब भी चल रहा है",
    "Cameras keep recording. Use the tray icon to come back.":
        "कैमरे रिकॉर्ड करते रहेंगे। लौटने के लिए सूचना क्षेत्र के चिह्न का "
        "उपयोग करें।",
    "Show window": "खिड़की दिखाएँ",
    "Cameras…": "कैमरे…",
    "Quit": "बाहर निकलें",
    "Welcome to leolink": "leolink में आपका स्वागत है",
    "<b>No cameras are configured yet.</b>":
        "<b>अभी तक कोई कैमरा सेट नहीं किया गया है।</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "पता, उपयोक्ता-नाम और पासवर्ड देकर एक कैमरा जोड़ें। leolink आपके अपने "
        "नेटवर्क में कैमरे से सीधे बात करता है — किसी क्लाउड खाते की ज़रूरत "
        "नहीं।<p>हर विकल्प क्या करता है, यह पुस्तिका में लिखा है।",
    "Add camera…": "कैमरा जोड़ें…",
    "Open handbook": "पुस्तिका खोलें",
    "About leolink": "leolink के बारे में",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Reolink कैमरों के लिए एक मूल Linux "
        "क्लाइंट।</p><p>कैमरे के अपने प्रोटोकॉल सीधे बोलता है: स्थानीय नेटवर्क "
        "पर HTTP इंटरफ़ेस, RTSP और ONVIF, तथा कहीं दूर से कैमरे तक पहुँचना हो "
        "तो Reolink की P2P सेवा।</p><p><a href=\"%2\">पुस्तिका</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">स्रोत "
        "कोड</a></p><p>Reolink से न कोई संबंध है, न उसका समर्थन प्राप्त "
        "है।</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "अभी तक कोई कैमरा सेट नहीं है।\n\nएक जोड़ने के लिए «कैमरे…» का उपयोग "
        "करें।",
    "connecting…": "जुड़ रहे हैं…",
    "main stream": "मुख्य स्ट्रीम",
    "sub stream": "उप-स्ट्रीम",
    "no host configured": "कोई पता दर्ज नहीं",
    "cannot open stream": "स्ट्रीम नहीं खुल सकी",
    "libmpv unavailable": "libmpv उपलब्ध नहीं",
    "player init failed": "प्लेयर चालू नहीं हो सका",
    "MOTION": "गति",
    "Mute this camera": "इस कैमरे को मौन करें",
    "Unmute this camera": "इस कैमरे का मौन हटाएँ",
    "Volume": "ध्वनि-मात्रा",
    "Camera settings": "कैमरा सेटिंग",
    "Settings": "सेटिंग",
    "Cameras": "कैमरे",
    "Layout": "सज्जा",
    "Events": "घटनाएँ",
    "Window": "खिड़की",
    "Add": "जोड़ें",
    "Remove": "हटाएँ",
    "Remove camera": "कैमरा हटाएँ",
    "Remove “%1” from the list?": "«%1» को सूची से हटाएँ?",
    "New camera": "नया कैमरा",
    "Name": "नाम",
    "Host": "पता",
    "User": "उपयोक्ता",
    "Password": "पासवर्ड",
    "Password command": "पासवर्ड-आदेश",
    "UID": "UID",
    "Stream": "स्ट्रीम",
    "Transport": "परिवहन",
    "192.168.1.10 or camera.lan": "192.168.1.10 या camera.lan",
    "optional, for P2P access": "वैकल्पिक, P2P पहुँच के लिए",
    "optional: pass show reolink/hall": "वैकल्पिक: pass show reolink/dalan",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "यदि दिया गया हो तो यह आदेश चलता है और उसका परिणाम पासवर्ड की तरह "
        "इस्तेमाल होता है। इससे रहस्य सेटिंग फ़ाइल से बाहर रहता है।",
    "Sub stream (low bandwidth)": "उप-स्ट्रीम (कम बैंडविड्थ)",
    "Main stream (full resolution)": "मुख्य स्ट्रीम (पूरा रिज़ॉल्यूशन)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (कम विलंब)",
    "Use HTTPS for the control API":
        "नियंत्रण इंटरफ़ेस के लिए HTTPS इस्तेमाल करें",
    "Show this camera": "यह कैमरा दिखाएँ",
    "Test connection": "संयोजन जाँचें",
    "Contacting %1…": "%1 से संपर्क हो रहा है…",
    "Enter a host first.": "पहले एक पता दर्ज करें।",
    "Incomplete camera": "अधूरा कैमरा",
    "“%1” has no host address.": "«%1» का कोई पता नहीं है।",
    "%1 — firmware %2, %3 channel(s)": "%1 — फ़र्मवेयर %2, %3 चैनल",
    "Scan network…": "नेटवर्क खंगालें…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "नेटवर्क से पूछता है कि कौन-से ONVIF कैमरे मौजूद हैं। इसमें एक ही "
        "मल्टीकास्ट पूछताछ जाती है; जो उपकरण चुप रहते हैं उनसे कभी संपर्क नहीं "
        "किया जाता।",
    "Looking for cameras…": "कैमरे खोजे जा रहे हैं…",
    "Stop": "रोकें",
    "Cameras found": "कैमरे मिले",
    "Add which one?": "कौन-सा जोड़ें?",
    "No cameras found": "कोई कैमरा नहीं मिला",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "किसी ONVIF उपकरण ने उत्तर नहीं दिया।\n\nकैमरे तभी उत्तर देते हैं जब "
        "ONVIF चालू हो, और यह पूछताछ न राउटर पार करती है, न अधिकांश VPN। आप "
        "कैमरे का पता टाइप करके उसे फिर भी जोड़ सकते हैं।",
    "unnamed device": "बिना नाम का उपकरण",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.":
        "खोज के लिए UDP सॉकेट नहीं खुल सका।",
    "Grid size": "जाली का आकार",
    "Columns": "स्तंभ",
    "Rows": "पंक्तियाँ",
    "Column": "स्तंभ",
    "Row": "पंक्ति",
    "Row span": "कितनी पंक्तियाँ घेरे",
    "Column span": "कितने स्तंभ घेरे",
    "automatic": "स्वतः",
    "Position of the selected camera": "चुने हुए कैमरे की जगह",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "पंक्ति और स्तंभ को «स्वतः» पर छोड़ दें तो कैमरे क्रम से जाली भरते "
        "जाएँगे। कई खाने घेरकर एक कैमरा एक से अधिक खाने ले सकता है।",
    "Watch cameras for motion (ONVIF push)":
        "कैमरों में गति पर नज़र रखें (ONVIF पुश)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "leolink के हर सेकंड पूछने के बजाय, गति होते ही कैमरा उसकी सूचना देता "
        "है।",
    "Run command": "आदेश चलाएँ",
    "notify-send \"Motion at %n\"": "notify-send \"%n पर गति\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "जब यह कैमरा गति की सूचना दे तब चलता है।\n%n कैमरे का नाम · %h पता · "
        "%t समय-मुहर · %f रिकॉर्डिंग फ़ाइल",
    "Record while motion lasts": "जब तक गति रहे तब तक रिकॉर्ड करें",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "सीधे प्रसारण से इसी कंप्यूटर पर रिकॉर्ड करता है, इसलिए यह तब भी चलता "
        "है जब कैमरे में SD कार्ड न हो।",
    "Keep recording after": "उसके बाद भी रिकॉर्ड करते रहें",
    " s": " से",
    "Selected camera": "चुना हुआ कैमरा",
    "All cameras": "सभी कैमरे",
    "Recordings folder": "रिकॉर्डिंग फ़ोल्डर",
    "Browse…": "ढूँढें…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "रिकॉर्डिंग बिना दोबारा एन्कोड किए Matroska में लिखी जाती हैं: चित्र "
        "कैमरे की मूल गुणवत्ता बनाए रखता है और प्रोसेसर लगभग खाली रहता है।",
    "Appearance": "रूप-रंग",
    "Show menu bar": "मेन्यू पट्टी दिखाएँ",
    "Show toolbar": "औज़ार पट्टी दिखाएँ",
    "Show status bar": "स्थिति पट्टी दिखाएँ",
    "Hide window decoration": "खिड़की का ढाँचा छिपाएँ",
    "Ctrl+M toggles this at any time.": "Ctrl+M इसे कभी भी बदल देता है।",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "दीवार पर लगे पर्दों के लिए। Ctrl+Shift+D इसे बदलता है।",
    "Notification area": "सूचना क्षेत्र",
    "Show an icon in the notification area":
        "सूचना क्षेत्र में एक चिह्न दिखाएँ",
    "Closing the window hides it instead of quitting":
        "खिड़की बंद करने पर बाहर निकलने के बजाय उसे छिपाएँ",
    "Minimising hides the window to the tray":
        "छोटा करने पर खिड़की सूचना क्षेत्र में छिप जाए",
    "On motion": "गति होने पर",
    "Bring the window up when motion is detected":
        "गति पहचाने जाने पर खिड़की सामने लाएँ",
    "Come back as": "किस रूप में लौटें",
    "Previous size": "पिछला आकार",
    "Full screen": "पूर्ण स्क्रीन",
    "Language": "भाषा",
    "System language": "तंत्र की भाषा",
    "Takes effect after restarting leolink.":
        "leolink को दोबारा चालू करने पर लागू होता है।",
    "Menu bar hidden": "मेन्यू पट्टी छिपी है",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "मेन्यू पट्टी और औज़ार पट्टी दोनों छिपी हों तो मेन्यू वापस लाने के लिए "
        "Ctrl+M दबाएँ।",
    "Event log": "घटना लॉग",
    "Camera:": "कैमरा:",
    "Show:": "दिखाएँ:",
    "All events": "सभी घटनाएँ",
    "Motion": "गति",
    "With recording": "रिकॉर्डिंग सहित",
    "Refresh": "ताज़ा करें",
    "When": "कब",
    "Camera": "कैमरा",
    "Event": "घटना",
    "Media": "मीडिया",
    "video": "वीडियो",
    "image": "चित्र",
    " + image": " + चित्र",
    "no preview": "कोई झलक नहीं",
    "recording only": "केवल रिकॉर्डिंग",
    "no events recorded yet": "अभी तक कोई घटना दर्ज नहीं हुई",
    "Recording: %1%2": "रिकॉर्डिंग: %1%2",
    " (file missing)": " (फ़ाइल गायब है)",
    "Image: %1": "चित्र: %1",
    "Open recording": "रिकॉर्डिंग खोलें",
    "Open image": "चित्र खोलें",
    "Nothing to open": "खोलने को कुछ नहीं",
    "The file for this event is no longer there.":
        "इस घटना की फ़ाइल अब वहाँ नहीं है।",
    "Clear log…": "लॉग खाली करें…",
    "Clear event log": "घटना लॉग खाली करें",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "पूरा घटना-इतिहास मिटा दें?\n\nरिकॉर्ड किए गए वीडियो और चित्र डिस्क पर "
        "बने रहेंगे — केवल लॉग खाली होगा।",
    "Command": "आदेश",
    "could not be started": "चालू नहीं हो सका",
    "Webhook": "Webhook",
    "invalid URL": "अमान्य पता",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 विफल: %2",
    "Event log…": "घटना लॉग…",
    "MQTT broker or topic not set.": "MQTT ब्रोकर या विषय दर्ज नहीं है।",
    "MQTT broker did not respond.": "MQTT ब्रोकर ने उत्तर नहीं दिया।",
    "MQTT: %1": "MQTT: %1",
    "MQTT: unexpected reply from the broker.":
        "MQTT: ब्रोकर से अप्रत्याशित उत्तर।",
    "MQTT refused the connection: %1": "MQTT ने संयोजन ठुकरा दिया: %1",
    "Video": "वीडियो",
    "Decoding": "डिकोडिंग",
    "Hardware, fastest": "हार्डवेयर, सबसे तेज़",
    "Hardware, with frame copy": "हार्डवेयर, फ़्रेम कॉपी के साथ",
    "Software only": "केवल सॉफ़्टवेयर",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "हार्डवेयर डिकोडिंग प्रोसेसर को खाली रखती है और मुख्य स्ट्रीम के "
        "रिज़ॉल्यूशन के लिए सही चुनाव है।\n\nयदि चित्र में हरे खाने दिखें या "
        "वह अटके, तो «फ़्रेम कॉपी के साथ» चुनें: डिकोडिंग GPU पर ही होती है, "
        "पर हर फ़्रेम मुख्य स्मृति में कॉपी होता है, जिसकी कुछ ड्राइवरों को तब "
        "ज़रूरत पड़ती है जब वीडियो किसी दूसरी खिड़की के भीतर बैठा हो।",
    "Favour low latency over smoothness":
        "प्रवाह की जगह कम विलंब को वरीयता दें",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "बफ़रिंग को कम से कम रखता है। यदि ऊँची बिटरेट वाली स्ट्रीम व्यस्त "
        "नेटवर्क पर अटके तो इसे बंद कर दें।",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "खिड़की खिसकाने के लिए किसी कैमरे के नीचे की पट्टी खींचें। "
        "Ctrl+Shift+D ढाँचा लौटाता है, Ctrl+M मेन्यू।",
    "%1 — camera settings": "%1 — कैमरा सेटिंग",
    "Reading settings from %1…": "%1 से सेटिंग पढ़ी जा रही हैं…",
    "Apply to camera": "कैमरे पर लागू करें",
    "Main stream": "मुख्य स्ट्रीम",
    "Sub stream": "उप-स्ट्रीम",
    "Resolution": "रिज़ॉल्यूशन",
    "Frame rate": "फ़्रेम दर",
    "Bit rate (kbit/s)": "बिटरेट (kbit/s)",
    "H.264 profile": "H.264 प्रोफ़ाइल",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "ऊँचा मतलब बेहतर चित्र और अधिक नेटवर्क भार। कैमरा केवल वही दरें देता "
        "है जिन्हें वह सचमुच सँभाल सकता है।",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "ये कैमरे को ही बदलते हैं, इसलिए परिणाम हर क्लाइंट को दिखता है। विकल्प "
        "कैमरे से आते हैं और मॉडल-दर-मॉडल बदलते हैं।",
    "Picture": "चित्र",
    "Brightness": "चमक",
    "Contrast": "कंट्रास्ट",
    "Saturation": "संतृप्ति",
    "Sharpness": "तीक्ष्णता",
    "Hue": "रंगत",
    "Ready.": "तैयार।",
    "Writing to the camera…": "कैमरे पर लिखा जा रहा है…",
    "Nothing to write.": "लिखने को कुछ नहीं।",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "सहेजा गया। एन्कोडर बदलने पर स्ट्रीम फिर से शुरू होती है, इसलिए चित्र "
        "पल भर के लिए गायब हो सकता है।",
    "&Record all cameras": "सभी कैमरे रिकॉर्ड करें (&R)",
    "Record this camera": "यह कैमरा रिकॉर्ड करें",
    "Stop recording": "रिकॉर्डिंग रोकें",
    "Recording all cameras": "सभी कैमरे रिकॉर्ड हो रहे हैं",
    "Recording stopped": "रिकॉर्डिंग रुक गई",
    "Recording started": "रिकॉर्डिंग शुरू हुई",
    "Could not start recording %1": "%1 की रिकॉर्डिंग शुरू नहीं हो सकी",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "ffmpeg स्थापित नहीं है, इसलिए रिकॉर्डिंग संभव नहीं।",
    "No stream address for %1.": "%1 के लिए कोई स्ट्रीम पता नहीं।",
    "Recording failed: %1": "रिकॉर्डिंग विफल: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "रिकॉर्डिंग में कोई डेटा नहीं आया (ffmpeg निकास %1)।",
    "Could not start ffmpeg.": "ffmpeg चालू नहीं हो सका।",
    "Custom URL": "अपना पता",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "कोई भी पता जिसे libmpv खोल सके। दूसरे निर्माताओं के कैमरों, किसी NVR "
        "स्ट्रीम या स्थानीय फ़ाइल के लिए इसका उपयोग करें।",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "ffmpeg स्थापित नहीं है, इसलिए गति-पहचान संभव नहीं।",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "ffmpeg स्थापित नहीं है, इसलिए ध्वनि-पहचान संभव नहीं।",
    "Motion detection stopped: %1": "गति-पहचान रुक गई: %1",
    "Sound detection stopped: %1": "ध्वनि-पहचान रुक गई: %1",
    "Could not start ffmpeg for motion detection.":
        "गति-पहचान के लिए ffmpeg चालू नहीं हो सका।",
    "Could not start ffmpeg for sound detection.":
        "ध्वनि-पहचान के लिए ffmpeg चालू नहीं हो सका।",
    "Sound detected": "ध्वनि पहचानी गई",
    "%1 at %2": "%2 पर %1",
    "Detection": "पहचान",
    "Motion comes from": "गति की सूचना देता है",
    "The camera reports it (ONVIF)": "कैमरा स्वयं (ONVIF)",
    "leolink watches the picture": "leolink चित्र देखकर",
    "Either of the two": "दोनों में से कोई भी",
    "Do not watch": "निगरानी न करें",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "जो कैमरे गति की सूचना स्वयं देते हैं, उन पर नज़र रखने की कोई कीमत "
        "नहीं।\n\nयहाँ चित्र का विश्लेषण हर कैमरे के साथ चलता है, उनके साथ भी "
        "जो कुछ नहीं बताते, पर हर एक के लिए उप-स्ट्रीम तक एक दूसरा संयोजन "
        "खोलता है।",
    "Motion zones…": "गति क्षेत्र…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "चुनें कि चित्र के किन हिस्सों पर नज़र रखी जाए। यह केवल तभी लागू होता "
        "है जब leolink स्वयं चित्र का विश्लेषण करता हो।",
    "Sensitivity": "संवेदनशीलता",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "चित्र के किसी बिंदु को गिनती में आने के लिए कितना बदलना चाहिए। ऊँचा "
        "होने पर अधिक पकड़ में आता है, छाया और बारिश भी।",
    "Minimum area": "न्यूनतम क्षेत्रफल",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "देखे जा रहे क्षेत्र का कितना हिस्सा बदले कि वह गति गिनी जाए। 20 ‰ "
        "यानी चित्र का दो प्रतिशत — मोटे तौर पर मध्यम दूरी पर खड़ा एक व्यक्ति।",
    "Raise an event on sound": "ध्वनि पर घटना दर्ज करें",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "माइक्रोफ़ोन वाला कैमरा चाहिए। उप-स्ट्रीम तक एक और संयोजन खोलता है।",
    "Sound above": "इससे तेज़ ध्वनि",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB लगभग सन्नाटा है, -20 dB पास में ऊँची आवाज़।",
    "Hold for": "इतनी देर बनाए रखें",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "शोर थमने के बाद भी घटना को बनाए रखता है, ताकि एक ही भौंक चार बार दर्ज "
        "न हो।",
    "%1 — motion zones": "%1 — गति क्षेत्र",
    "no picture available": "कोई चित्र उपलब्ध नहीं",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "किस पर नज़र रखी जाए यह चुनने के लिए चित्र पर खींचें। गहरे किए गए "
        "क्षेत्र अनदेखे रहते हैं — दृश्य के किनारे की सड़क, हवा में हिलते पेड़ "
        "या पड़ोसी के दरवाज़े के लिए उपयोगी।",
    "Watch all": "सब पर नज़र रखें",
    "Ignore all": "सब अनदेखा करें",
    "Invert": "उलटें",
    "Fetching a picture from %1…": "%1 से चित्र लिया जा रहा है…",
    "No picture: %1 — the zones can still be set.":
        "कोई चित्र नहीं: %1 — क्षेत्र फिर भी तय किए जा सकते हैं।",
    "Recordings on the &camera…": "कैमरे में रखी रिकॉर्डिंग (&C)…",
    "Browse what is stored on the camera's own SD card.":
        "देखें कि कैमरे के अपने SD कार्ड पर क्या रखा है।",
    "Which camera": "कौन-सा कैमरा",
    "Show recordings from": "इनकी रिकॉर्डिंग दिखाएँ",
    "%1 — recordings on the camera": "%1 — कैमरे में रखी रिकॉर्डिंग",
    "Search": "खोजें",
    "From": "से",
    "to": "तक",
    "Start": "आरंभ",
    "Length": "अवधि",
    "Size": "आकार",
    "File": "फ़ाइल",
    "Play": "चलाएँ",
    "Download…": "डाउनलोड करें…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "एक अवधि चुनें और «खोजें» दबाएँ। रिकॉर्डिंग तभी होती हैं जब कैमरे में "
        "SD कार्ड लगा हो।",
    "Asking %1…": "%1 से पूछा जा रहा है…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "उस अवधि में कुछ नहीं मिला। या तो कुछ रिकॉर्ड ही नहीं हुआ, या कैमरे "
        "में SD कार्ड नहीं है।",
    "No session with the camera — search first.":
        "कैमरे के साथ कोई सत्र नहीं — पहले खोजें।",
    "No player": "कोई प्लेयर नहीं",
    "mpv was not found. The recording is at:\n\n%1":
        "mpv नहीं मिला। रिकॉर्डिंग यहाँ है:\n\n%1",
    "Save recording": "रिकॉर्डिंग सहेजें",
    "Cannot write to %1.": "%1 में नहीं लिखा जा सकता।",
    "Saved to %1": "%1 में सहेजा गया",
    "Download failed: %1": "डाउनलोड विफल: %1",
    "Maintenance": "रखरखाव",
    "Restart": "पुनःआरंभ",
    "Restart the camera": "कैमरा दोबारा चालू करें",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "कैमरा करीब एक मिनट के लिए नेटवर्क से हट जाता है और अपने आप लौट आता "
        "है। उसके SD कार्ड की रिकॉर्डिंग पर कोई असर नहीं पड़ता और सेटिंग बनी "
        "रहती हैं।\n\nजब कोई कैमरा उत्तर देना बंद कर दे, नए संयोजन ठुकराए, या "
        "फ़र्मवेयर अद्यतन के बाद बहकने लगे, तब आज़माने लायक है।",
    "<b>Restart %1?</b>": "<b>%1 को दोबारा चालू करें?</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "चित्र करीब एक मिनट के लिए चला जाएगा। इस समय जो कुछ रिकॉर्ड हो रहा है "
        "वह रुक जाएगा।",
    "Asking %1 to restart…": "%1 से दोबारा चालू होने को कहा जा रहा है…",
    "Restarting. The camera will be back in about a minute.":
        "दोबारा चालू हो रहा है। कैमरा करीब एक मिनट में लौट आएगा।",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "फ़ैक्ट्री रीसेट और SD कार्ड का फ़ॉर्मैट यहाँ नहीं दिए गए हैं। दोनों "
        "अपरिवर्तनीय हैं और इन्हें कैमरे के अपने वेब इंटरफ़ेस में करना बेहतर "
        "है, जहाँ चेतावनियाँ निर्माता की अपनी हैं।",
    "Network": "नेटवर्क",
    "Connection": "संयोजन",
    "Reading…": "पढ़ा जा रहा है…",
    "Wi-Fi signal": "वाई-फ़ाई संकेत",
    "Wi-Fi signal unknown": "वाई-फ़ाई संकेत अज्ञात",
    "Wi-Fi signal %1 of %2": "वाई-फ़ाई संकेत %2 में से %1",
    "Link": "कड़ी",
    "Address": "पता",
    "Netmask": "नेटमास्क",
    "Gateway": "गेटवे",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "नेटवर्क का नाम",
    "Ports": "पोर्ट",
    "The camera reported nothing.": "कैमरे ने कुछ नहीं बताया।",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "केवल जानकारी के लिए। पते, वाई-फ़ाई की जानकारी और पोर्ट कैमरे के अपने "
        "वेब इंटरफ़ेस में बदले जाते हैं — यहाँ की एक गलती कैमरे को पहुँच से "
        "बाहर कर देगी।",
    "Hardware, with frame copy (recommended)":
        "हार्डवेयर, फ़्रेम कॉपी के साथ (अनुशंसित)",
    "Hardware, zero copy (fastest)": "हार्डवेयर, बिना कॉपी (सबसे तेज़)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "तीनों जहाँ संभव हो ग्राफ़िक्स कार्ड पर डिकोड करते हैं।\n\n«फ़्रेम "
        "कॉपी के साथ» हर फ़्रेम को मुख्य स्मृति से गुज़ारता है। यह कुछ प्रतिशत "
        "धीमा है और यही डिफ़ॉल्ट है, क्योंकि बिना कॉपी वाला रास्ता कई "
        "ड्राइवरों पर हरे खाने या जमा हुआ चित्र देता है जब वीडियो किसी दूसरी "
        "खिड़की के भीतर बैठा हो।\n\nअंतिम कुछ प्रतिशत चाहिए तो «बिना कॉपी» "
        "आज़माएँ; चित्र बिगड़े तो लौट आएँ।",
    "This camera does not offer these settings.":
        "इस कैमरे में ये सेटिंग नहीं हैं।",
    "Exposure and orientation": "एक्सपोज़र और दिशा",
    "Day / night": "दिन / रात",
    "Automatic": "स्वतः",
    "Always colour": "हमेशा रंगीन",
    "Always black and white": "हमेशा श्वेत-श्याम",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "«स्वतः» रोशनी घटने के साथ इन्फ़्रारेड पर चला जाता है। रात में रंग की "
        "ज़िद करने पर चित्र इतना गहरा हो जाता है कि काम का नहीं रहता; दिन में "
        "श्वेत-श्याम की ज़िद रंग यूँ ही गँवा देती है।",
    "Anti-flicker": "टिमटिमाहट रोकें",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "अपनी बिजली की आवृत्ति से मिलाएँ — यूरोप में 50 Hz — वरना भीतर की "
        "रोशनी शटर से टकराएगी और चित्र धड़केगा।",
    "Exposure": "एक्सपोज़र",
    "Mirror": "दर्पण",
    "Flip": "उलटें",
    "For a camera mounted upside down.": "उल्टा लगाए गए कैमरे के लिए।",
    "Backlight compensation": "बैकलाइट क्षतिपूर्ति",
    "Helps when the subject stands against a bright window or sky.":
        "तब काम आता है जब विषय किसी चमकीली खिड़की या आसमान के सामने खड़ा हो।",
    "Noise reduction": "शोर घटाना",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "गहरे चित्र को साफ़ करता है, पर हिलती हुई हर चीज़ धुँधली पड़ जाती है।",
    "Rotation": "घुमाव",
    "Dynamic contrast": "गतिशील कंट्रास्ट",
    "Infrared illumination": "इन्फ़्रारेड रोशनी",
    "Infrared lamps": "इन्फ़्रारेड लैंप",
    "Always on": "हमेशा चालू",
    "Always off": "हमेशा बंद",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "«स्वतः» अंधेरा होने पर उन्हें जला देता है। यदि कैमरा शीशे के पार "
        "देखता है तो उन्हें बंद कर दें — परावर्तन उसे अंधा कर देता है।",
    "Overlay": "ऊपरी परत",
    "On-screen text": "पर्दे पर लिखा पाठ",
    "Background": "पृष्ठभूमि",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "पाठ के पीछे एक डिब्बा बनाता है ताकि वह चमकीले दृश्य पर भी पढ़ा जा "
        "सके।",
    "Watermark": "जलचिह्न",
    "Embeds a mark in the recording itself.":
        "रिकॉर्डिंग में ही एक निशान गाड़ देता है।",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "कैमरा इसे चित्र में ही जला देता है, इसलिए यह हर रिकॉर्डिंग और हर "
        "क्लाइंट में दिखता है — केवल यहाँ नहीं।",
    "Motion detection in the camera": "कैमरे में गति-पहचान",
    "Switched on": "चालू",
    "Higher notices more, including shadows and headlights.":
        "ऊँचा होने पर अधिक पकड़ में आता है, छाया और हेडलाइट भी।",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "यह कैमरे की अपनी पहचान है, वही जिसकी सूचना वह ONVIF से देता है। "
        "leolink द्वारा चित्र का विश्लेषण अलग से, कैमरे → घटनाएँ के नीचे तय "
        "होता है।",
    "Recording": "रिकॉर्डिंग",
    "Recording to the camera's card": "कैमरे के कार्ड पर रिकॉर्डिंग",
    "Overwrite when full": "भर जाने पर ऊपर लिखें",
    "Off means recording simply stops once the card fills up.":
        "बंद का अर्थ है कि कार्ड भरते ही रिकॉर्डिंग बस रुक जाएगी।",
    "Record before the event": "घटना से पहले भी रिकॉर्ड करें",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "किसी घटना से ठीक पहले के सेकंड सहेजता है, जो अक्सर सबसे दिलचस्प "
        "हिस्सा होते हैं।",
    "File length": "फ़ाइल की लंबाई",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "ये तय करते हैं कि कैमरा अपने SD कार्ड पर क्या लिखता है। इस कंप्यूटर "
        "पर रिकॉर्डिंग कैमरे → घटनाएँ के नीचे तय होती है और उसे कार्ड नहीं "
        "चाहिए।",
    "Alerts": "सूचनाएँ",
    "E-mail": "ई-मेल",
    "FTP": "FTP",
    "FTP upload": "FTP अपलोड",
    "Push notification": "पुश सूचना",
    "Server": "सर्वर",
    "Port": "पोर्ट",
    "Send to": "यहाँ भेजें",
    "Encrypted": "एन्क्रिप्टेड",
    "Not more often than": "इससे अधिक बार नहीं",
    "Attach": "साथ भेजें",
    "Directory": "निर्देशिका",
    "Mode": "ढंग",
    "Schedule": "समय-सारणी",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "इन्हें कैमरा स्वयं भेजता है, इसलिए ये तब भी चलती रहती हैं जब यह "
        "कंप्यूटर बंद हो। leolink की अपनी प्रतिक्रियाएँ — आदेश, वेबहुक, MQTT — "
        "कैमरे → घटनाएँ के नीचे हैं।",
    "Time": "समय",
    "Time server": "समय सर्वर",
    "Synchronise the clock": "घड़ी मिलाएँ",
    "Every": "हर",
    "Scheduled restart": "निर्धारित पुनःआरंभ",
    "Restart regularly": "नियमित रूप से दोबारा चालू करें",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "कुछ कैमरे हफ़्तों चलते रहने के बाद भरोसे लायक नहीं रहते; सप्ताह में "
        "एक बार दोबारा चालू करना सस्ता इलाज है।",
    "Day": "दिन",
    "Hour": "घंटा",
    "Minute": "मिनट",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "गलत घड़ी वाला कैमरा अपनी रिकॉर्डिंग पर गलत समय अंकित करता है, और जब "
        "कोई एक रिकॉर्डिंग ढूँढ़नी हो तब यह सुनने से कहीं अधिक भारी पड़ता है।",
    "Wi-Fi": "वाई-फ़ाई",
    "Scan": "खंगालें",
    "Join network": "नेटवर्क से जुड़ें",
    "scanning…": "खंगाला जा रहा है…",
    "The camera is scanning for networks…": "कैमरा नेटवर्क खोज रहा है…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "खंगालता कैमरा है, यह कंप्यूटर नहीं — मायने वही रखता है जहाँ तक वह "
        "पहुँच सके। पासवर्ड सहेजने से पहले आज़माया जाता है, इसलिए टाइप की गलती "
        "ठुकरा दी जाती है, कैमरा किसी नेटवर्क के बिना नहीं रह जाता।",
    "Change the camera's network": "कैमरे का नेटवर्क बदलें",
    "<b>Move %1 to “%2”?</b>": "<b>%1 को «%2» पर ले जाएँ?</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "कैमरा पहले पासवर्ड आज़माता है और गलत होने पर मना कर देता है, इसलिए यह "
        "सुनने से अधिक सुरक्षित है।\n\nफिर भी वह दोबारा जुड़ते समय एक मिनट के "
        "लिए गायब रहेगा, और यदि नया नेटवर्क उसे कोई दूसरा पता दे दे तो बाद में "
        "उसे यहाँ बदलना होगा।",
    "Join": "जुड़ें",
    "Testing the password on the camera…":
        "कैमरे पर पासवर्ड आज़माया जा रहा है…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "सहेजा गया। कैमरा दोबारा जुड़ रहा है और जल्दी ही लौट आएगा।",
    "The camera could not join that network: %1":
        "कैमरा उस नेटवर्क से नहीं जुड़ सका: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "पते और पोर्ट यहाँ पढ़े जाते हैं, पर बदले कैमरे के अपने वेब इंटरफ़ेस "
        "में जाते हैं। इनमें से एक भी गलत होने पर कैमरा नेटवर्क से पूरी तरह "
        "बाहर हो जाता है, और लौटने का एकमात्र रास्ता रीसेट पिन है — वहाँ कोई "
        "चेतावनी-संवाद निर्माता के अपने पर्दे की जगह नहीं ले सकता।",
    "%1 fps": "%1 fps",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)":
        "स्ट्रीम टूटी — दोबारा जुड़ रहे हैं (%1)",
    "Hardware (recommended)": "हार्डवेयर (अनुशंसित)",
    "Hardware, driver's choice": "हार्डवेयर, ड्राइवर की पसंद",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "«अनुशंसित» डिकोडर का नाम स्पष्ट रूप से देता है ताकि डिकोडिंग और "
        "चित्रांकन एक ही ग्राफ़िक्स इंटरफ़ेस पर रहें। अपने भरोसे छोड़ने पर mpv "
        "एक इंटरफ़ेस से डिकोड और दूसरे से चित्रांकन कर सकता है, जिससे कुछ "
        "कार्डों पर चित्र पूरा हरा पड़ जाता है।\n\nचित्र बिगड़ा हो तो बाकी "
        "विकल्प बारी-बारी आज़माएँ। «केवल सॉफ़्टवेयर» हमेशा चलता है, पर पूरे "
        "रिज़ॉल्यूशन पर प्रोसेसर का एक पूरा कोर खा जाता है।",
    "Wired": "तार से",
    "%1 — strength unknown": "%1 — शक्ति अज्ञात",
    "%1 — %2 of %3": "%1 — %3 में से %2",
    "WEAK SIGNAL": "कमज़ोर संकेत",
    "BAD STREAM": "खराब स्ट्रीम",
    "stream ended (%1) — reconnecting":
        "स्ट्रीम समाप्त (%1) — दोबारा जुड़ रहे हैं",
    "Open the &log file": "लॉग फ़ाइल खोलें (&L)",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "प्लेयरों और कैमरों ने जो बताया। बग रिपोर्ट के साथ भेजने लायक।",
    "Nothing logged yet.": "अभी तक कुछ दर्ज नहीं हुआ।",
    "Bit rate looks too low": "बिटरेट बहुत कम लगती है",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%2 के लिए %1 kbit/s बहुत कम है।</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "इस अनुपात पर कैमरे का एन्कोडर बिगड़े हुए फ़्रेम देने लगता है, जो हरे "
        "खानों या जमे हुए चित्र के रूप में आते हैं — यह नेटवर्क की खराबी नहीं "
        "है, और न ही ऐसा कुछ जिसे leolink पूरी तरह सुधार सके।\n\nया तो बिटरेट "
        "बढ़ाएँ, या रिज़ॉल्यूशन घटाएँ।",
    "Apply anyway": "फिर भी लागू करें",
    "camera is reconfiguring…": "कैमरा फिर से सज रहा है…",
    "Send a test e-mail": "एक जाँच ई-मेल भेजें",
    "Test the FTP upload": "FTP अपलोड जाँचें",
    "Asking the camera to send a test e-mail…":
        "कैमरे से जाँच ई-मेल भेजने को कहा जा रहा है…",
    "Asking the camera to try the FTP server…":
        "कैमरे से FTP सर्वर आज़माने को कहा जा रहा है…",
    "%1: the camera reported success.": "%1: कैमरे ने सफलता बताई।",
    "Condition": "दशा",
    "Processor load %1%": "प्रोसेसर भार %1%",
    "Encoder load %1%": "एन्कोडर भार %1%",
    "Network throughput %1 kbit/s": "नेटवर्क प्रवाह %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "कैमरा अपनी सीमा पर है। रिज़ॉल्यूशन या फ़्रेम दर घटाने से वह सँभल "
        "जाएगा।",
    "Firmware": "फ़र्मवेयर",
    "Not checked.": "जाँचा नहीं गया।",
    "Check for updates": "अद्यतन देखें",
    "Asking Reolink…": "Reolink से पूछा जा रहा है…",
    "Install update": "अद्यतन स्थापित करें",
    "Update available: %1": "अद्यतन उपलब्ध: %1",
    "The firmware is up to date.": "फ़र्मवेयर नया ही है।",
    "Install firmware": "फ़र्मवेयर स्थापित करें",
    "<b>Update the firmware on %1?</b>": "<b>%1 का फ़र्मवेयर अद्यतन करें?</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "कैमरा अद्यतन स्वयं उतारता है और दोबारा चालू होता है। कई मिनट तक वह "
        "पहुँच से बाहर रहेगा।\n\nअद्यतन के दौरान उसकी बिजली न काटें — फ़्लैश "
        "के बीच में रुका कैमरा आमतौर पर वापस भेजना पड़ता है।",
    "Install": "स्थापित करें",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "अद्यतन हो रहा है। कैमरा अपने आप दोबारा चालू होगा और कई मिनट तक पहुँच "
        "से बाहर रहेगा। उसकी बिजली न काटें।",
    "Storage": "भंडारण",
    "Format the SD card": "SD कार्ड फ़ॉर्मैट करें",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "फ़ॉर्मैट करने से कार्ड की हर रिकॉर्डिंग मिट जाती है। इसे पलटा नहीं जा "
        "सकता, और बाद में कैमरे से कोई पुष्टि भी नहीं आती।",
    "<b>Erase everything on the card in %1?</b>":
        "<b>%1 के कार्ड पर मौजूद सब कुछ मिटा दें?</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "कार्ड की हर रिकॉर्डिंग मिट जाएगी। इसे पलटा नहीं जा सकता, और जो पहले "
        "से उतारा नहीं गया उसे वापस नहीं पाया जा सकता।",
    "Erase": "मिटाएँ",
    "Formatting…": "फ़ॉर्मैट हो रहा है…",
    "The card has been formatted.": "कार्ड फ़ॉर्मैट हो गया।",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "फ़ैक्ट्री रीसेट यहाँ नहीं दिया गया है। वह नेटवर्क सेटिंग भी मिटा देता "
        "है, और जो कैमरा अपना वाई-फ़ाई भूल चुका हो उसे उतारकर हाथ से रीसेट "
        "करना पड़ता है।",
    "Users": "उपयोक्ता",
    "Rights": "अधिकार",
    "Administrator": "प्रशासक",
    "Viewer": "दर्शक",
    "Add…": "जोड़ें…",
    "Change password…": "पासवर्ड बदलें…",
    "Delete": "मिटाएँ",
    "New user": "नया उपयोक्ता",
    "User name": "उपयोक्ता-नाम",
    "Password for %1": "%1 का पासवर्ड",
    "Creating %1…": "%1 बनाया जा रहा है…",
    "Change password": "पासवर्ड बदलें",
    "New password for %1": "%1 का नया पासवर्ड",
    "Changing the password for %1…": "%1 का पासवर्ड बदला जा रहा है…",
    "This is the account leolink uses":
        "यही वह खाता है जिसे leolink इस्तेमाल करता है",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "इसे यहाँ बदलेंगे तो leolink तब तक बाहर रहेगा जब तक नया पासवर्ड कैमरे "
        "के नीचे भी दर्ज न कर दिया जाए।",
    "Cannot delete this account": "यह खाता मिटाया नहीं जा सकता",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink «%1» के रूप में जुड़ा है। इसे मिटाने से इस कैमरे का संयोजन "
        "तुरंत टूट जाएगा।",
    "Delete user": "उपयोक्ता मिटाएँ",
    "Delete “%1” from the camera?": "«%1» को कैमरे से मिटाएँ?",
    "Deleting %1…": "%1 मिटाया जा रहा है…",
    "Done.": "हो गया।",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "ये कैमरे के खाते हैं, leolink के नहीं। दर्शक खाता देख सकता है पर कुछ "
        "बदल नहीं सकता — जहाँ केवल चित्र देखना हो वहाँ इसका उपयोग करने लायक "
        "है, ताकि सहेजा हुआ पासवर्ड कैमरे की सेटिंग के विरुद्ध न मोड़ा जा सके।",
    "camera is reconfiguring… %1 s": "कैमरा फिर से सज रहा है… %1 से",
    "File format not recognised.": "फ़ाइल का प्रारूप पहचाना नहीं गया।",
    "Invalid input.": "अमान्य प्रविष्टि।",
    "No free connections — the camera allows only a few sessions at a time.":
        "कोई खाली संयोजन नहीं — कैमरा एक बार में कुछ ही सत्रों की छूट देता है।",
    "Session expired.": "सत्र समाप्त हो गया।",
    "Wrong user name or password.": "उपयोक्ता-नाम या पासवर्ड गलत है।",
    "Timed out.": "समय समाप्त।",
    "This firmware does not support that command.":
        "यह फ़र्मवेयर उस आदेश को नहीं जानता।",
    "Could not read the configuration.": "सेटिंग पढ़ी नहीं जा सकी।",
    "Could not verify the configuration.": "सेटिंग जाँची नहीं जा सकी।",
    "Subsystem unavailable — typically no SD card fitted.":
        "उपतंत्र उपलब्ध नहीं — आमतौर पर SD कार्ड लगा न होने के कारण।",
    "Not permitted — this model lacks the hardware.":
        "अनुमति नहीं — इस मॉडल में वह हार्डवेयर नहीं है।",
    "Account invalid, log in again.": "खाता अमान्य, दोबारा लॉगिन करें।",
    "User name already taken.": "यह उपयोक्ता-नाम पहले से लिया जा चुका है।",
    "Maximum number of users reached.":
        "उपयोक्ताओं की अधिकतम संख्या पूरी हो गई।",
    "Camera busy, try again shortly.":
        "कैमरा व्यस्त है, थोड़ी देर बाद फिर आज़माएँ।",
    "IP address conflict.": "IP पते का टकराव।",
    "Configuration test failed.": "सेटिंग की जाँच विफल रही।",
    "FTP login failed.": "FTP लॉगिन विफल।",
    "FTP could not create the directory.": "FTP निर्देशिका नहीं बना सका।",
    "FTP upload failed.": "FTP अपलोड विफल।",
    "FTP could not reach the server.": "FTP सर्वर तक नहीं पहुँच सका।",
    "Camera reported error %1.": "कैमरे ने त्रुटि %1 बताई।",
    "Cannot reach %1: %2": "%1 तक नहीं पहुँच पा रहे: %2",
    "Unexpected reply from %1.": "%1 से अप्रत्याशित उत्तर।",
    "Login returned no token.": "लॉगिन से कोई टोकन नहीं मिला।",
    "Snapshot failed.": "स्नैपशॉट विफल।",
    "ONVIF subscription failed.": "ONVIF सदस्यता विफल।",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n कैमरे का नाम · %h पता · %t समय · %e घटना · %s चालू/बंद · %f "
        "रिकॉर्डिंग · %p चित्र",
    "Run a command": "एक आदेश चलाएँ",
    "Call a webhook": "एक वेबहुक बुलाएँ",
    "Left empty, leolink sends a small JSON document describing the event.":
        "खाली छोड़ने पर leolink घटना का वर्णन करता एक छोटा JSON दस्तावेज़ "
        "भेजता है।",
    "Method": "विधि",
    "Body": "मुख्य भाग",
    "Publish an MQTT message": "एक MQTT संदेश प्रकाशित करें",
    "Left empty: the same JSON document as the webhook.":
        "खाली छोड़ने पर: वही JSON दस्तावेज़ जो वेबहुक भेजता है।",
    "Keep the last message on the broker": "अंतिम संदेश ब्रोकर पर बनाए रखें",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "बाद में जुड़ने वाले क्लाइंट को अगली घटना का इंतज़ार किए बिना मौजूदा "
        "स्थिति तुरंत पता चल जाती है। घर के स्वचालन को आमतौर पर यही चाहिए।",
    "Broker": "ब्रोकर",
    "Topic": "विषय",
    "Payload": "पेलोड",
    "MQTT": "MQTT",
    "In leolink": "leolink में",
    "In the camera": "कैमरे में",
    "Try again": "फिर कोशिश करें",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>कैमरा स्वयं बताता है:</b> कैमरे का अपना संसूचक तय करता है और एक "
        "ONVIF घटना भेजता है। वह क्या देखता है और कितनी आसानी से चलता है, यह "
        "नीचे «पहचान» में — कैमरे के भीतर ही — तय होता है।<br><br><b>leolink "
        "चित्र देखता है:</b> यह कंप्यूटर उप-स्ट्रीम से एक दूसरा संयोजन खोलकर "
        "चित्र का विश्लेषण करता है। हर कैमरे के साथ चलता है, उनके साथ भी जो "
        "कुछ नहीं बताते — और तब कैमरे के अपने संसूचक की कोई भूमिका नहीं रहती।",
    "Choose what is watched…": "चुनें कि किस पर नज़र रखी जाए…",
    "How leolink learns of motion": "leolink को गति का पता कैसे चलता है",
    "When leolink watches the picture": "जब leolink चित्र देखता है",
    "Detection by leolink": "leolink द्वारा पहचान",
    "Recording on this computer": "इस कंप्यूटर पर रिकॉर्डिंग",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "फ़ाइलें कहाँ जाती हैं, यह हर कैमरे के लिए एक ही है और सेटिंग ▸ "
        "रिकॉर्डिंग के नीचे तय होता है।",
    "Follow the defaults under Settings":
        "सेटिंग में दी गई प्रविष्टियों का पालन करें",
    "Use this camera's own": "इस कैमरे की अपनी प्रविष्टियाँ लें",
    "Reactions": "प्रतिक्रियाएँ",
    "What happens on an event": "किसी घटना पर क्या होता है",
    "Muted": "मौन",
    "Sound in leolink": "leolink में ध्वनि",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "यही दो नियंत्रण कैमरे की अपनी टाइल पर भी हैं, जहाँ वे जल्दी हाथ आते "
        "हैं। कैमरे मौन से शुरू होते हैं: कैमरों की एक पूरी दीवार खोलने पर "
        "कमरा हर एक की आवाज़ से नहीं भर जाना चाहिए।",
    "Playback": "प्लेबैक",
    "&Settings…": "&सेटिंग…",
    "Reactions": "प्रतिक्रियाएँ",
    "Recordings": "रिकॉर्डिंग",
    "General": "सामान्य",
    "Tint the tile red for a moment": "टाइल को पल भर के लिए लाल रंगें",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "ताकि कैमरों की पूरी दीवार पर एक नज़र डालना ही यह जानने को काफ़ी हो कि "
        "कौन-सा था।",
    " ms": " ms",
    "Play a sound": "एक ध्वनि बजाएँ",
    "Empty: the desktop's own notification sound":
        "खाली: डेस्कटॉप की अपनी सूचना-ध्वनि",
    "Sound to play": "बजाई जाने वाली ध्वनि",
    "For": "कितनी देर",
    "Sound file": "ध्वनि फ़ाइल",
    "On the screen": "पर्दे पर",
    "The window": "खिड़की",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "कौन-से कैमरे घटना उठाते ही हैं और कैसे, यह हर कैमरे के लिए कैमरे ▸ "
        "सेटिंग ▸ leolink द्वारा पहचान के नीचे तय होता है।",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "जब कोई कैमरा कुछ बताता है तो leolink क्या करता है। जब तक कैमरे का "
        "अपना संवाद कुछ और न कहे, वह इन्हीं का पालन करता है — या तो सब, या कुछ "
        "नहीं, कभी आधा नहीं: आंशिक रूप से विरासत में मिली प्रविष्टियाँ ही तब "
        "सबसे मुश्किल पड़ती हैं जब कुछ चलता ही नहीं।",
    "Recordings and stills": "रिकॉर्डिंग और स्नैपशॉट",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "रिकॉर्डिंग बिना दोबारा एन्कोड किए Matroska में लिखी जाती हैं: चित्र "
        "कैमरे की मूल गुणवत्ता बनाए रखता है और प्रोसेसर लगभग खाली रहता "
        "है।\n\nकोई कैमरा रिकॉर्ड करता है या नहीं, यह उसकी अपनी प्रविष्टि है, "
        "कैमरे ▸ सेटिंग ▸ प्रतिक्रियाएँ के नीचे।",
    "Settings for this camera…": "इस कैमरे की सेटिंग…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "leolink की ओर से पहचान, प्रतिक्रियाएँ और रिकॉर्डिंग, तथा कैमरे का "
        "अपना एन्कोडर, चित्र और समय-सारणी।",
}


# Plural forms — two forms, singular first.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        ", %n पहुँच-बिंदु",
        ", %n पहुँच-बिंदु"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "%n पहुँच-बिंदु से सुनाई दिया — एक नेटवर्क, कई नोड। सबसे मज़बूत वाला "
        "दिखाया गया है।",
        "%n पहुँच-बिंदुओं से सुनाई दिया — एक नेटवर्क, कई नोड। सबसे मज़बूत वाला "
        "दिखाया गया है।"],
    "%n network(s) found, strongest first.": [
        "%n नेटवर्क मिला, सबसे मज़बूत पहले।",
        "%n नेटवर्क मिले, सबसे मज़बूत पहले।"],
    "Asking about %n command(s)…": [
        "%n आदेश के बारे में पूछा जा रहा है…",
        "%n आदेशों के बारे में पूछा जा रहा है…"],
    "%n area(s) blanked": [
        "%n क्षेत्र काला किया गया",
        "%n क्षेत्र काले किए गए"],
    "%n area(s), switched off": [
        "%n क्षेत्र, बंद",
        "%n क्षेत्र, बंद"],
    "%n hour(s) a week.": [
        "सप्ताह में %n घंटा।",
        "सप्ताह में %n घंटे।"],
    "%n camera(s) live": [
        "%n कैमरा सीधे प्रसारण में",
        "%n कैमरे सीधे प्रसारण में"],
    "Saved %n snapshot(s)": [
        "%n स्नैपशॉट सहेजा गया",
        "%n स्नैपशॉट सहेजे गए"],
    "Found %n device(s)…": [
        "%n उपकरण मिला…",
        "%n उपकरण मिले…"],
    "%n recording(s) found.": [
        "%n रिकॉर्डिंग मिली।",
        "%n रिकॉर्डिंग मिलीं।"],
    "%n network(s) found.": [
        "%n नेटवर्क मिला।",
        "%n नेटवर्क मिले।"],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "पिछले दस सेकंड में %n फ़्रेम बिगड़ा।\n\nआमतौर पर कमज़ोर वाई-फ़ाई "
        "संकेत, या रिज़ॉल्यूशन के हिसाब से बहुत कम रखी गई बिटरेट। leolink जो "
        "सुधार सकता है सुधारता है — यह वही है जो वह नहीं सुधार सका।",
        "पिछले दस सेकंड में %n फ़्रेम बिगड़े।\n\nआमतौर पर कमज़ोर वाई-फ़ाई "
        "संकेत, या रिज़ॉल्यूशन के हिसाब से बहुत कम रखी गई बिटरेट। leolink जो "
        "सुधार सकता है सुधारता है — यह वही है जो वह नहीं सुधार सका।"],
}
