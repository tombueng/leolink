"""Turkish. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Turkish. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "Tanılama",
    "&Diagnostics…": "&Tanılama…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "leolink'in ve kameraların neler yaptığı — ve bir hata bildirimine "
        "ekleyebileceğiniz rapor.",
    "Errors only": "Yalnızca hatalar",
    "Warnings and errors": "Uyarılar ve hatalar",
    "Normal activity": "Olağan etkinlik",
    "Everything": "Her şey",
    "All areas": "Tüm alanlar",
    "Search…": "Ara…",
    "Show": "Göster",
    "Detailed logging": "Ayrıntılı günlük",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "Kameraya giden her isteği, kod çözücünün her kararını ve her yeniden "
        "bağlanmayı kaydeder. Günlük kullanımda kapalı bırakın — bir şey ters "
        "gittiğinde açın, sorunu yeniden oluşturun ve raporu öyle gönderin.",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "Kameraya giden her isteği, kod çözücünün her kararını ve her yeniden "
        "bağlanmayı ~/.local/share/leolink/leolink.log dosyasına kaydeder.",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "Hatalar ve uyarılar her zaman kaydedilir. Ayrıntılı günlük, kamerayla "
        "yapılan yazışmayı da ekler — bir şey ters gittiğinde açın, yeniden "
        "oluşturun, sonra Yardım ▸ Tanılama'dan raporu gönderin. Parolalar ve "
        "oturum anahtarları yazılmadan önce çıkarılır.",
    "Open diagnostics…": "Tanılamayı aç…",
    "Open diagnostics": "Tanılamayı aç",
    "Follow new lines": "Yeni satırları izle",
    "Copy report": "Raporu kopyala",
    "System details and the log, ready to paste into a bug report.":
        "Sistem bilgileri ve günlük, bir hata bildirimine yapıştırmaya hazır.",
    "Report copied.": "Rapor kopyalandı.",
    "Save report…": "Raporu kaydet…",
    "Save report": "Raporu kaydet",
    "Text files (*.txt)": "Metin dosyaları (*.txt)",
    "Could not write %1.": "%1 yazılamadı.",
    "Open log folder": "Günlük klasörünü aç",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "Parolalar, oturum anahtarları ve internet adresleri yazılmadan önce "
        "çıkarılır; rapor olduğu gibi paylaşılabilir. Kendi ağınızdaki "
        "adresler korunur — genellikle ilk ipucu onlardır.",
    "%1 of %2 lines": "%2 satırın %1 tanesi",
    "Report a problem": "Bir sorun bildir",
    "<b>Attach a diagnostics report</b>": "<b>Bir tanılama raporu ekleyin</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "Makinenizin ne olduğunu, kameraların ne yanıtladığını ve işlerin "
        "nerede ters gittiğini kaydeder — parolalar ve adresler çıkarılmış "
        "olarak. Onsuz bildirimlerin çoğu izlenemez.\n\nSorunu kendiniz "
        "tetikleyebiliyorsanız, önce tanılama penceresinde ayrıntılı günlüğü "
        "açın, sorunu yeniden yaşatın, sonra raporu kopyalayın.",
    "Go to the issue tracker": "Hata takip sistemine git",
    "Application": "Uygulama",
    "Camera API": "Kamera arayüzü",
    "ONVIF events": "ONVIF olayları",
    "Event actions": "Olay eylemleri",
    "Baichuan": "Baichuan",
    "User interface": "Kullanıcı arayüzü",
    "Qt": "Qt",
    "strong": "güçlü",
    "good": "iyi",
    "fair": "orta",
    "weak": "zayıf",
    "unknown": "bilinmiyor",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "Kameranın duyduğu haliyle sinyal: 4 üzerinden %1",
    "Encryption: %1": "Şifreleme: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "Bazı adlar birden çok erişim noktasından duyuldu — bu bir örgü ağdır. "
        "Kamera belirli bir düğüme değil, ada bağlanır; hangisiyle "
        "konuşacağına örgü ağ karar verir ve gerektiğinde devreder. En iyi "
        "yeri bulmak için kamerayı gezdirin ve yukarıdaki «Wi-Fi sinyali»ni "
        "izleyin: gerçekten sahip olduğu bağlantı odur.",
    "What this camera supports": "Bu kameranın desteklediği özellikler",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "Reolink donanım yazılımı modelden modele çok değişir ve bir kameranın "
        "neler yapabildiğini öğrenmenin tek güvenilir yolu ona sormaktır. "
        "leolink'te, kameranızda açıkça bulunan bir şey eksikse, bir hata "
        "bildirimindeki bu liste onu eklemeyi mümkün kılan şeydir.",
    "Ask the camera": "Kameraya sor",
    "Copy the list": "Listeyi kopyala",
    "Copied.": "Kopyalandı.",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>Destekleniyor (%1):</b> %2<br><br><b>Desteklenmiyor (%3):</b> %4",
    "Privacy": "Gizlilik",
    "Privacy areas…": "Gizli alanlar…",
    "Parts of the view the camera blanks before anything leaves it.":
        "Görüntünün, kameradan hiçbir şey çıkmadan önce kararttığı bölümleri.",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "Kameranın kendi içinde karartılır; böylece kapatılan bölüm her "
        "izleyicide ve her kayıtta eksiktir — komşunun penceresi ya da videoya "
        "girmemesi gereken bir çalışma masası.",
    "%1 — privacy areas": "%1 — gizli alanlar",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "Kameranın karartması gereken bölümleri sürükleyerek çizin. Bunları "
        "cihazdan hiçbir şey çıkmadan önce karartır; dolayısıyla canlı "
        "görüntüde, kayıtlarda ve başka her programda — üreticinin uygulaması "
        "dâhil — eksik olurlar.",
    "Remove the last": "Sonuncuyu kaldır",
    "Remove all": "Tümünü kaldır",
    "No picture: %1 — the areas can still be drawn.":
        "Görüntü yok: %1 — alanlar yine de çizilebilir.",
    "%1 of %2 areas": "%2 alanın %1 tanesi",
    "nothing blanked": "hiçbir şey karartılmadı",
    "Detection area…": "Algılama alanı…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "Kameranın görüntünün hangi bölümlerini izlediği. Alanın dışında kalan "
        "her şey yok sayılır — görüntünün kenarındaki bir yol, rüzgârdaki bir "
        "ağaç, komşunun kapısı.",
    "%1 — the camera's detection area": "%1 — kameranın algılama alanı",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "Kameranın neyi izleyeceğini seçmek için görüntünün üzerinde "
        "sürükleyin. Karartılmış alanlar yok sayılır. Bu, kameranın kendi "
        "ızgarasıdır, %1 × %2, yani leolink'inkinden daha ince.",
    "When to watch…": "Ne zaman izlesin…",
    "Hours of the week the camera raises motion events at all.":
        "Kameranın hareket olayı bildirdiği haftalık saatler.",
    "%1 — when to watch": "%1 — ne zaman izlesin",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "Kameranın hareket olayı bildirdiği saatler. Bunların dışında görmeye "
        "devam eder ama bir şey söylemez.",
    "When to record…": "Ne zaman kaydetsin…",
    "Hours of the week the camera records to its card by itself.":
        "Kameranın kendi kartına kendiliğinden kayıt yaptığı haftalık saatler.",
    "%1 — when to record": "%1 — ne zaman kaydetsin",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "Kameranın kendi kartına kayıt yaptığı saatler. Bunun için takılı bir "
        "kart gerekir; bu bilgisayara kayıt Kameralar → Olaylar altından "
        "ayarlanır ve karta gerek duymaz.",
    "Area, times and sensitivity": "Alan, saatler ve duyarlılık",
    "To": "Bitiş",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "Kameralar günün farklı saatlerinde farklı duyarlılığa izin verir; "
        "geceleri farların her şeyi tetiklemesini, gündüz kamerayı sağır "
        "etmeden böyle önlersiniz.",
    "All week": "Tüm hafta",
    "Never": "Asla",
    "Nights": "Geceleri",
    "Working hours": "Mesai saatleri",
    "Weekends": "Hafta sonları",
    "22:00 to 06:00, every day.": "Her gün 22:00 – 06:00.",
    "08:00 to 17:00, Monday to Friday.": "Pazartesiden cumaya 08:00 – 17:00.",
    "Nothing is selected — this will never run.":
        "Hiçbir şey seçilmedi — bu hiçbir zaman çalışmayacak.",
    "Always on.": "Her zaman etkin.",
    "Mobile data": "Mobil veri",
    "SIM card": "SIM kart",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "Yalnızca kart isterse gerekir. Üç yanlış deneme kartı kilitler; "
        "sonrasında yalnızca operatörünüzde bulunan bir PUK gerekir.",
    "Access point (APN)": "Erişim noktası (APN)",
    "Authentication": "Kimlik doğrulama",
    "Use mobile data": "Mobil veriyi kullan",
    "Modem": "Modem",
    "Card": "Kart",
    "Type": "Tür",
    "Signal": "Sinyal",
    "IMEI": "IMEI",
    "Card number": "Kart numarası",
    "Mobile connection": "Mobil bağlantı",
    "Data used": "Kullanılan veri",
    "Monthly limit": "Aylık sınır",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>Gerçek donanımda denenmedi.</b> leolink'te çalışan hiç kimsenin "
        "modemli kamerası yok; bu bölüm yalnızca protokole bakılarak yazıldı. "
        "Hiçbir şeye zarar veremez — kameranın bilmediği bir komut basitçe "
        "reddedilir — ama aynı ölçüde hiçbir şey de "
        "göstermeyebilir.\n\nKameranızda SIM varsa, Bakım altındaki «Bu "
        "kameranın desteklediği özellikler», donanım yazılımının gerçekten "
        "sahip olduğu komutları listeler. Bir hata bildirimindeki o liste, bu "
        "bölümün doğru dürüst tamamlanmasını sağlayacak şeydir.",
    "Baichuan (the camera's own protocol)":
        "Baichuan (kameranın kendi protokolü)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP çoğu kameraya uyar ve ilk denenmesi gerekendir.\n\nHTTP-FLV "
        "yalnızca 80 numaralı bağlantı noktasını ister; RTSP'nin engellendiği "
        "yerlerde işe yarar.\n\nBaichuan, Reolink'in kendi uygulamasının "
        "konuştuğu protokoldür. RTSP'yi kapalı tutan kameralar için — pilli "
        "modeller böyledir — doğru yanıttır ve kameranın az sayıdaki web "
        "oturumundan birini harcamaz. Yalnızca video: ses yine RTSP üzerinden "
        "gelir.",
    "connecting over Baichuan…": "Baichuan üzerinden bağlanılıyor…",
    "Cannot open a local port: %1": "Yerel bağlantı noktası açılamıyor: %1",
    "Baichuan login failed: %1": "Baichuan oturum açma başarısız: %1",
    "The camera refused to send video: %1":
        "Kamera video göndermeyi reddetti: %1",
    "The player did not connect.": "Oynatıcı bağlanmadı.",
    "The camera stopped sending.": "Kamera göndermeyi durdurdu.",
    "custom stream": "özel akış",
    "Speak through the camera": "Kameradan konuş",
    "Stop speaking": "Konuşmayı bitir",
    "Play through %1": "%1 üzerinden çal",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "Ses dosyaları (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Tüm dosyalar "
        "(*)",
    "Speaking through the camera…": "Kameradan konuşuluyor…",
    "Finished.": "Bitti.",
    "Cannot reach the camera: %1": "Kameraya ulaşılamıyor: %1",
    "The camera did not answer on the RTSP port.":
        "Kamera RTSP bağlantı noktasında yanıt vermedi.",
    "ffmpeg is needed to send sound and could not be started.":
        "Ses göndermek için ffmpeg gerekir ve başlatılamadı.",
    "The camera rejected the user name or password.":
        "Kamera kullanıcı adını veya parolayı reddetti.",
    "The camera refused: %1": "Kamera reddetti: %1",
    "This camera does not offer a speaker.": "Bu kamerada hoparlör yok.",
    "Sound": "Ses",
    "Send sound": "Sesi ilet",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "Kameranın mikrofonu. Bu kapalıyken de akışa bir ses izi koyar — "
        "tamamen sessiz olan, ki bunu fark etmek izin hiç olmamasından çok "
        "daha zordur.",
    "What it recognises": "Neyi tanıyor",
    "People": "İnsanlar",
    "Vehicles": "Araçlar",
    "Animals": "Hayvanlar",
    "Faces": "Yüzler",
    "Any movement": "Her türlü hareket",
    "Continuous": "Sürekli",
    "This camera keeps a separate week for each kind of event. Which one?":
        "Bu kamera her olay türü için ayrı bir hafta tutuyor. Hangisi?",
    "Push notifications": "Anlık bildirimler",
    "Folder": "Klasör",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "Kamera şu anda isteklere yanıt vermiyor. Bir anda çok fazla istek "
        "aldığında böyle yapar; biraz sonra kendiliğinden toparlanır.",
    "Camera-side detection": "Kamera tarafında algılama",
    "Where it looks": "Nereye bakıyor",
    "Choose the area…": "Alanı seç…",
    "When it reports at all": "Ne zaman bildiriyor",
    "Choose the hours…": "Saatleri seç…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "Saatlerden oluşan bir hafta: işaretlediklerinizde kamera hareketi "
        "bildirir, kalanlarda susar. Ne kadar duyarlı olduğuyla ilgisi yok — o "
        "aşağıda ayarlanır.",
    "How readily it triggers": "Ne kolaylıkla tetikleniyor",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "Gün içinde kamera daha kolay ya da daha zor tetiklenebilir. Geceleri "
        "farların her şeyi tetiklemesini, gündüz kamerayı kör etmeden böyle "
        "önlersiniz. Kaç dilim olacağını kamera belirler; saatleri ve "
        "duyarlılıkları sizindir.",
    "Siren": "Siren",
    "Sound on an alarm": "Alarmda ses ver",
    "Times": "Saatler",
    "Spotlight": "Işıldak",
    "On": "Açık",
    "Draw": "Çiz",
    "Watch a rectangle": "Bir dikdörtgeni izle",
    "Ignore a rectangle": "Bir dikdörtgeni yok say",
    "Drag over single cells.": "Tek tek hücrelerin üzerinde sürükleyin.",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "İzlenecek bir dikdörtgen çizin. Shift ile sürüklemek, araç "
        "değiştirmeden aynı işi yapar.",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "Yok sayılacak bir dikdörtgen çizin. Ctrl ile sürüklemek, araç "
        "değiştirmeden aynı işi yapar.",
    "  · already added": "  · zaten eklendi",
    "Processor load %1 %": "İşlemci yükü %1 %",
    "Encoder output %1 kbit/s": "Kodlayıcı çıkışı %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "Destekleniyor (%1):\n%2\n\nDesteklenmiyor (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "Reolink'e bu bilgisayar değil, kamera sorar — dolayısıyla kendine ait "
        "bir internet çıkışı gerekir.",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "Kameranın bir bölümü yanıt vermedi. Neyin sorulduğuna bağlı olarak "
        "bu, takılı SD kart olmadığı ya da kameranın internet çıkışı "
        "bulunmadığı anlamına gelir.",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "Fabrika ayarlarına dönüş burada sunulmuyor. Ağ ayarlarını da siler ve "
        "Wi-Fi'sini unutmuş bir kamerayı indirip kabloyla bağlamak gerekir — "
        "bunu gerçekten istiyorsanız kameranın kendi web arayüzünü kullanın.",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "Kameranın boş oturumu yok. Aynı anda yalnızca birkaçına izin verir ve "
        "bunlar telefon uygulaması ile web sayfasıyla paylaşılır. Onları "
        "kapatın ya da eskilerinin düşmesi için bir dakika bekleyin.",
    "&File": "&Dosya",
    "&View": "&Görünüm",
    "&Help": "&Yardım",
    "&Cameras…": "&Kameralar…",
    "&Save snapshots…": "Anlık görüntüleri ka&ydet…",
    "&Event log…": "&Olay günlüğü…",
    "Open &recordings folder": "Kayıt klasörünü &aç",
    "&Quit": "Çı&k",
    "&Full screen": "&Tam ekran",
    "Leave full screen": "Tam ekrandan çık",
    "Show &menu bar": "&Menü çubuğunu göster",
    "Show &toolbar": "A&raç çubuğunu göster",
    "Show status &bar": "&Durum çubuğunu göster",
    "Hide window &decoration": "&Pencere çerçevesini gizle",
    "&Online handbook": "Çevrim&içi el kitabı",
    "&Protocol notes": "&Protokol notları",
    "&Report a problem": "Bir &sorun bildir",
    "&About leolink": "leolink &hakkında",
    "Main": "Ana",
    "Ready": "Hazır",
    "Grid view": "Izgara görünümü",
    "No cameras configured": "Yapılandırılmış kamera yok",
    "Nothing to capture": "Yakalanacak bir şey yok",
    "Save snapshots to": "Anlık görüntüleri şuraya kaydet",
    "Esc leaves full screen": "Esc tam ekrandan çıkarır",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc tam ekrandan çıkarır · bir kameraya çift tıklamak ekranı kaplatır",
    "Double-click for the grid · Esc leaves full screen":
        "Izgara için çift tıklayın · Esc tam ekrandan çıkarır",
    "Cannot save": "Kaydedilemiyor",
    "Settings could not be written to %1.": "Ayarlar %1 konumuna yazılamadı.",
    "Cannot create %1": "%1 oluşturulamıyor",
    "Recording %1": "%1 kaydediliyor",
    "Saved %1": "%1 kaydedildi",
    "Motion at %1": "%1 konumunda hareket",
    "Motion detected": "Hareket algılandı",
    "Could not run the motion command for %1":
        "%1 için hareket komutu çalıştırılamadı",
    "leolink is still running": "leolink çalışmaya devam ediyor",
    "Cameras keep recording. Use the tray icon to come back.":
        "Kameralar kaydetmeyi sürdürüyor. Geri dönmek için bildirim alanındaki "
        "simgeyi kullanın.",
    "Show window": "Pencereyi göster",
    "Cameras…": "Kameralar…",
    "Quit": "Çık",
    "Welcome to leolink": "leolink'e hoş geldiniz",
    "<b>No cameras are configured yet.</b>":
        "<b>Henüz hiçbir kamera yapılandırılmadı.</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "Adresi, kullanıcı adı ve parolasıyla bir kamera ekleyin. leolink "
        "kamerayla doğrudan kendi ağınızda konuşur — hiçbir bulut hesabı "
        "devreye girmez.<p>Her seçeneğin ne yaptığı el kitabında anlatılır.",
    "Add camera…": "Kamera ekle…",
    "Open handbook": "El kitabını aç",
    "About leolink": "leolink hakkında",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Reolink kameraları için yerel bir Linux "
        "istemcisi.</p><p>Kameranın kendi protokollerini doğrudan konuşur: "
        "yerel ağda HTTP arayüzü, RTSP ve ONVIF; bir kameraya başka bir yerden "
        "ulaşmak istediğinizde de Reolink'in P2P hizmeti.</p><p><a "
        "href=\"%2\">El kitabı</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">Kaynak "
        "kodu</a></p><p>Reolink ile bağlantılı değildir, Reolink tarafından "
        "desteklenmez.</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "Henüz yapılandırılmış kamera yok.\n\nBir tane eklemek için "
        "«Kameralar…» seçeneğini kullanın.",
    "connecting…": "bağlanılıyor…",
    "main stream": "ana akış",
    "sub stream": "alt akış",
    "no host configured": "adres girilmemiş",
    "cannot open stream": "akış açılamıyor",
    "libmpv unavailable": "libmpv kullanılamıyor",
    "player init failed": "oynatıcı başlatılamadı",
    "MOTION": "HAREKET",
    "Mute this camera": "Bu kamerayı sessize al",
    "Unmute this camera": "Bu kameranın sesini aç",
    "Volume": "Ses düzeyi",
    "Camera settings": "Kamera ayarları",
    "Settings": "Ayarlar",
    "Cameras": "Kameralar",
    "Layout": "Yerleşim",
    "Events": "Olaylar",
    "Window": "Pencere",
    "Add": "Ekle",
    "Remove": "Kaldır",
    "Remove camera": "Kamerayı kaldır",
    "Remove “%1” from the list?": "«%1» listeden kaldırılsın mı?",
    "New camera": "Yeni kamera",
    "Name": "Ad",
    "Host": "Adres",
    "User": "Kullanıcı",
    "Password": "Parola",
    "Password command": "Parola komutu",
    "UID": "UID",
    "Stream": "Akış",
    "Transport": "Taşıma",
    "192.168.1.10 or camera.lan": "192.168.1.10 ya da kamera.lan",
    "optional, for P2P access": "isteğe bağlı, P2P erişimi için",
    "optional: pass show reolink/hall":
        "isteğe bağlı: pass show reolink/giris",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "Girilirse bu komut çalıştırılır ve çıktısı parola olarak kullanılır. "
        "Sırrı yapılandırma dosyasının dışında tutar.",
    "Sub stream (low bandwidth)": "Alt akış (az bant genişliği)",
    "Main stream (full resolution)": "Ana akış (tam çözünürlük)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (daha az gecikme)",
    "Use HTTPS for the control API": "Denetim arayüzü için HTTPS kullan",
    "Show this camera": "Bu kamerayı göster",
    "Test connection": "Bağlantıyı sına",
    "Contacting %1…": "%1 ile bağlantı kuruluyor…",
    "Enter a host first.": "Önce bir adres girin.",
    "Incomplete camera": "Eksik kamera",
    "“%1” has no host address.": "«%1» için adres yok.",
    "%1 — firmware %2, %3 channel(s)": "%1 — donanım yazılımı %2, %3 kanal",
    "Scan network…": "Ağı tara…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "Ağa hangi ONVIF kameralarının bulunduğunu sorar. Tek bir çok noktaya "
        "yayın sorgusu gönderir; susan cihazlarla hiç iletişime geçilmez.",
    "Looking for cameras…": "Kameralar aranıyor…",
    "Stop": "Durdur",
    "Cameras found": "Kameralar bulundu",
    "Add which one?": "Hangisi eklensin?",
    "No cameras found": "Kamera bulunamadı",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "Hiçbir ONVIF cihazı yanıt vermedi.\n\nKameralar yalnızca ONVIF açıksa "
        "yanıt verir ve sorgu yönlendiricileri de çoğu VPN'i de aşmaz. "
        "Adresini yazarak yine de bir kamera ekleyebilirsiniz.",
    "unnamed device": "adsız cihaz",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.":
        "Arama için UDP soketi açılamıyor.",
    "Grid size": "Izgara boyutu",
    "Columns": "Sütun",
    "Rows": "Satır",
    "Column": "Sütun",
    "Row": "Satır",
    "Row span": "Kapladığı satır",
    "Column span": "Kapladığı sütun",
    "automatic": "otomatik",
    "Position of the selected camera": "Seçili kameranın konumu",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "Kameraların ızgarayı sırayla doldurması için satır ve sütunu "
        "«otomatik» bırakın. Birden çok hücre kaplatarak bir kamerayı "
        "büyütebilirsiniz.",
    "Watch cameras for motion (ONVIF push)":
        "Kameralarda hareketi izle (ONVIF push)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "leolink saniyede bir sormak yerine, hareketi olduğu anda kamera "
        "bildirir.",
    "Run command": "Komut çalıştır",
    "notify-send \"Motion at %n\"": "notify-send \"%n konumunda hareket\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "Bu kamera hareket bildirdiğinde çalışır.\n%n kamera adı · %h adres · "
        "%t zaman damgası · %f kayıt dosyası",
    "Record while motion lasts": "Hareket sürdüğü sürece kaydet",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "Canlı akıştan bu bilgisayara kaydeder; dolayısıyla kamerada SD kart "
        "olmasa da çalışır.",
    "Keep recording after": "Sonrasında kaydı sürdür",
    " s": " sn",
    "Selected camera": "Seçili kamera",
    "All cameras": "Tüm kameralar",
    "Recordings folder": "Kayıt klasörü",
    "Browse…": "Gözat…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "Kayıtlar yeniden kodlanmadan Matroska olarak yazılır: görüntü "
        "kameranın özgün kalitesini korur ve işlemci neredeyse boş kalır.",
    "Appearance": "Görünüm",
    "Show menu bar": "Menü çubuğunu göster",
    "Show toolbar": "Araç çubuğunu göster",
    "Show status bar": "Durum çubuğunu göster",
    "Hide window decoration": "Pencere çerçevesini gizle",
    "Ctrl+M toggles this at any time.":
        "Ctrl+M bunu istediğiniz an değiştirir.",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "Duvar ekranları için. Ctrl+Shift+D değiştirir.",
    "Notification area": "Bildirim alanı",
    "Show an icon in the notification area":
        "Bildirim alanında bir simge göster",
    "Closing the window hides it instead of quitting":
        "Pencereyi kapatmak çıkmak yerine gizler",
    "Minimising hides the window to the tray":
        "Simge durumuna küçültmek pencereyi bildirim alanına gizler",
    "On motion": "Hareket olduğunda",
    "Bring the window up when motion is detected":
        "Hareket algılandığında pencereyi öne getir",
    "Come back as": "Şu şekilde geri dön",
    "Previous size": "Önceki boyut",
    "Full screen": "Tam ekran",
    "Language": "Dil",
    "System language": "Sistem dili",
    "Takes effect after restarting leolink.":
        "leolink yeniden başlatıldığında geçerli olur.",
    "Menu bar hidden": "Menü çubuğu gizli",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "Menü çubuğu da araç çubuğu da gizliyken menüyü geri getirmek için "
        "Ctrl+M tuşlarına basın.",
    "Event log": "Olay günlüğü",
    "Camera:": "Kamera:",
    "Show:": "Göster:",
    "All events": "Tüm olaylar",
    "Motion": "Hareket",
    "With recording": "Kayıtlı olanlar",
    "Refresh": "Yenile",
    "When": "Ne zaman",
    "Camera": "Kamera",
    "Event": "Olay",
    "Media": "Ortam",
    "video": "video",
    "image": "görüntü",
    " + image": " + görüntü",
    "no preview": "önizleme yok",
    "recording only": "yalnızca kayıt",
    "no events recorded yet": "henüz kaydedilmiş olay yok",
    "Recording: %1%2": "Kayıt: %1%2",
    " (file missing)": " (dosya eksik)",
    "Image: %1": "Görüntü: %1",
    "Open recording": "Kaydı aç",
    "Open image": "Görüntüyü aç",
    "Nothing to open": "Açılacak bir şey yok",
    "The file for this event is no longer there.":
        "Bu olaya ait dosya artık orada değil.",
    "Clear log…": "Günlüğü temizle…",
    "Clear event log": "Olay günlüğünü temizle",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "Tüm olay geçmişi silinsin mi?\n\nKaydedilmiş videolar ve görüntüler "
        "diskte kalır — yalnızca günlük temizlenir.",
    "Command": "Komut",
    "could not be started": "başlatılamadı",
    "Webhook": "Webhook",
    "invalid URL": "geçersiz adres",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 başarısız: %2",
    "Event log…": "Olay günlüğü…",
    "MQTT broker or topic not set.": "MQTT aracısı veya konusu girilmemiş.",
    "MQTT broker did not respond.": "MQTT aracısı yanıt vermedi.",
    "MQTT: %1": "MQTT: %1",
    "MQTT: unexpected reply from the broker.":
        "MQTT: aracıdan beklenmeyen yanıt.",
    "MQTT refused the connection: %1": "MQTT bağlantıyı reddetti: %1",
    "Video": "Video",
    "Decoding": "Kod çözme",
    "Hardware, fastest": "Donanım, en hızlısı",
    "Hardware, with frame copy": "Donanım, kare kopyalı",
    "Software only": "Yalnızca yazılım",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "Donanımla kod çözme işlemciyi serbest bırakır ve ana akış "
        "çözünürlükleri için doğru seçimdir.\n\nGörüntüde yeşil bloklar "
        "çıkıyorsa ya da takılıyorsa «kare kopyalı» seçeneğini seçin: kod "
        "çözme yine ekran kartında yapılır ama her kare ana belleğe "
        "kopyalanır; video başka bir pencerenin içinde otururken bazı "
        "sürücülerin buna ihtiyacı olur.",
    "Favour low latency over smoothness":
        "Akıcılık yerine düşük gecikmeyi yeğle",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "Ara belleklemeyi en aza indirir. Yüksek bit hızlı bir akış yoğun bir "
        "ağda takılıyorsa bunu kapatın.",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "Pencereyi taşımak için bir kameranın altındaki şeridi sürükleyin. "
        "Ctrl+Shift+D çerçeveyi, Ctrl+M menüyü geri getirir.",
    "%1 — camera settings": "%1 — kamera ayarları",
    "Reading settings from %1…": "%1 kamerasından ayarlar okunuyor…",
    "Apply to camera": "Kameraya uygula",
    "Main stream": "Ana akış",
    "Sub stream": "Alt akış",
    "Resolution": "Çözünürlük",
    "Frame rate": "Kare hızı",
    "Bit rate (kbit/s)": "Bit hızı (kbit/s)",
    "H.264 profile": "H.264 profili",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "Yüksek olması daha iyi görüntü ve daha çok ağ trafiği demektir. "
        "Kamera yalnızca gerçekten sürdürebildiği hızları sunar.",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "Bunlar kameranın kendisini değiştirir; sonucu her program görür. "
        "Seçenekler kameradan gelir ve modelden modele değişir.",
    "Picture": "Görüntü",
    "Brightness": "Parlaklık",
    "Contrast": "Karşıtlık",
    "Saturation": "Doygunluk",
    "Sharpness": "Keskinlik",
    "Hue": "Renk tonu",
    "Ready.": "Hazır.",
    "Writing to the camera…": "Kameraya yazılıyor…",
    "Nothing to write.": "Yazılacak bir şey yok.",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "Kaydedildi. Kodlayıcıyı değiştirmek akışı yeniden başlatır, bu yüzden "
        "görüntü kısa süre kesilebilir.",
    "&Record all cameras": "Tüm kameraları &kaydet",
    "Record this camera": "Bu kamerayı kaydet",
    "Stop recording": "Kaydı durdur",
    "Recording all cameras": "Tüm kameralar kaydediliyor",
    "Recording stopped": "Kayıt durduruldu",
    "Recording started": "Kayıt başladı",
    "Could not start recording %1": "%1 için kayıt başlatılamadı",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "ffmpeg kurulu değil, bu yüzden kayıt yapılamıyor.",
    "No stream address for %1.": "%1 için akış adresi yok.",
    "Recording failed: %1": "Kayıt başarısız: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "Kayıt hiç veri üretmedi (ffmpeg %1 ile çıktı).",
    "Could not start ffmpeg.": "ffmpeg başlatılamadı.",
    "Custom URL": "Özel adres",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "libmpv'nin açabildiği her adres. Başka üreticilerin kameraları, bir "
        "NVR akışı ya da yerel bir dosya için kullanın.",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "ffmpeg kurulu değil, bu yüzden hareket algılama yapılamıyor.",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "ffmpeg kurulu değil, bu yüzden ses algılama yapılamıyor.",
    "Motion detection stopped: %1": "Hareket algılama durdu: %1",
    "Sound detection stopped: %1": "Ses algılama durdu: %1",
    "Could not start ffmpeg for motion detection.":
        "Hareket algılama için ffmpeg başlatılamadı.",
    "Could not start ffmpeg for sound detection.":
        "Ses algılama için ffmpeg başlatılamadı.",
    "Sound detected": "Ses algılandı",
    "%1 at %2": "%2 konumunda %1",
    "Detection": "Algılama",
    "Motion comes from": "Hareketi bildiren",
    "The camera reports it (ONVIF)": "Kameranın kendisi (ONVIF)",
    "leolink watches the picture": "leolink görüntüyü izliyor",
    "Either of the two": "İkisinden herhangi biri",
    "Do not watch": "İzleme",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "Hareketi kendisi bildiren kameraları izlemenin bir maliyeti "
        "yoktur.\n\nGörüntüyü burada çözümlemek her kamerayla çalışır, hiçbir "
        "şey bildirmeyenlerle bile; ama her biri için alt akışa ikinci bir "
        "bağlantı açar.",
    "Motion zones…": "Hareket bölgeleri…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "Görüntünün hangi bölümlerinin izleneceğini seçin. Yalnızca görüntüyü "
        "leolink'in kendisi çözümlerken geçerlidir.",
    "Sensitivity": "Duyarlılık",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "Görüntüdeki bir noktanın sayılması için ne kadar değişmesi gerektiği. "
        "Yüksek değer daha çoğunu fark eder — gölgeleri ve yağmuru da.",
    "Minimum area": "En küçük alan",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "İzlenen alanın ne kadarının değişmesi hareket sayılacak. 20 ‰, "
        "görüntünün yüzde ikisidir — kabaca orta uzaklıkta bir insan.",
    "Raise an event on sound": "Seste olay oluştur",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "Mikrofonlu bir kamera gerekir. Alt akışa bir bağlantı daha açar.",
    "Sound above": "Şundan yüksek ses",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB sessizliğe yakın, -20 dB yakında yükseltilmiş bir sestir.",
    "Hold for": "Şu süre boyunca tut",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "Gürültü kesildikten sonra olayı ayakta tutar; böylece tek bir havlama "
        "dört kez bildirilmez.",
    "%1 — motion zones": "%1 — hareket bölgeleri",
    "no picture available": "kullanılabilir görüntü yok",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "Neyin izleneceğini seçmek için görüntünün üzerinde sürükleyin. "
        "Karartılmış alanlar yok sayılır — görüntünün kenarındaki bir yol, "
        "rüzgârda kıpırdayan bir ağaç ya da komşunun kapı önü için işe yarar.",
    "Watch all": "Tümünü izle",
    "Ignore all": "Tümünü yok say",
    "Invert": "Tersine çevir",
    "Fetching a picture from %1…": "%1 kamerasından görüntü alınıyor…",
    "No picture: %1 — the zones can still be set.":
        "Görüntü yok: %1 — bölgeler yine de belirlenebilir.",
    "Recordings on the &camera…": "Kameradaki &kayıtlar…",
    "Browse what is stored on the camera's own SD card.":
        "Kameranın kendi SD kartında ne olduğuna göz atın.",
    "Which camera": "Hangi kamera",
    "Show recordings from": "Kayıtları gösterilecek kamera",
    "%1 — recordings on the camera": "%1 — kameradaki kayıtlar",
    "Search": "Ara",
    "From": "Başlangıç",
    "to": "bitiş",
    "Start": "Başlangıç",
    "Length": "Süre",
    "Size": "Boyut",
    "File": "Dosya",
    "Play": "Oynat",
    "Download…": "İndir…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "Bir dönem seçip Ara düğmesine basın. Kayıtlar yalnızca kamerada "
        "takılı bir SD kart varsa bulunur.",
    "Asking %1…": "%1 kamerasına soruluyor…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "Bu dönemde bir şey bulunamadı. Ya hiçbir şey kaydedilmedi ya da "
        "kamerada SD kart yok.",
    "No session with the camera — search first.":
        "Kamerayla oturum yok — önce arama yapın.",
    "No player": "Oynatıcı yok",
    "mpv was not found. The recording is at:\n\n%1":
        "mpv bulunamadı. Kayıt şurada:\n\n%1",
    "Save recording": "Kaydı kaydet",
    "Cannot write to %1.": "%1 konumuna yazılamıyor.",
    "Saved to %1": "%1 konumuna kaydedildi",
    "Download failed: %1": "İndirme başarısız: %1",
    "Maintenance": "Bakım",
    "Restart": "Yeniden başlat",
    "Restart the camera": "Kamerayı yeniden başlat",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "Kamera bir dakika kadar ağdan düşer ve kendiliğinden geri gelir. SD "
        "kartındaki kayıtlar etkilenmez, ayarlar korunur.\n\nBir kamera yanıt "
        "vermez olduğunda, yeni bağlantıları reddettiğinde ya da bir donanım "
        "yazılımı güncellemesinden sonra tuhaflaştığında denemeye değer.",
    "<b>Restart %1?</b>": "<b>%1 yeniden başlatılsın mı?</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "Görüntü yaklaşık bir dakika gidecek. Şu anda kaydedilen ne varsa "
        "duracak.",
    "Asking %1 to restart…": "%1 kamerasından yeniden başlatma isteniyor…",
    "Restarting. The camera will be back in about a minute.":
        "Yeniden başlatılıyor. Kamera yaklaşık bir dakika içinde geri gelecek.",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "Fabrika ayarlarına dönüş ve SD kartı biçimlendirme burada sunulmuyor. "
        "İkisi de geri alınamaz ve uyarıların üreticiye ait olduğu, kameranın "
        "kendi web arayüzünde yapılması daha doğrudur.",
    "Network": "Ağ",
    "Connection": "Bağlantı",
    "Reading…": "Okunuyor…",
    "Wi-Fi signal": "Wi-Fi sinyali",
    "Wi-Fi signal unknown": "Wi-Fi sinyali bilinmiyor",
    "Wi-Fi signal %1 of %2": "Wi-Fi sinyali %2 üzerinden %1",
    "Link": "Bağlantı",
    "Address": "Adres",
    "Netmask": "Ağ maskesi",
    "Gateway": "Ağ geçidi",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "Ağ adı",
    "Ports": "Bağlantı noktaları",
    "The camera reported nothing.": "Kamera bir şey bildirmedi.",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "Bilgi olsun diye gösteriliyor. Adresler, Wi-Fi kimlik bilgileri ve "
        "bağlantı noktaları kameranın kendi web arayüzünden değiştirilir — "
        "burada yapılacak bir hata kamerayı erişilemez kılardı.",
    "Hardware, with frame copy (recommended)":
        "Donanım, kare kopyalı (önerilen)",
    "Hardware, zero copy (fastest)": "Donanım, kopyasız (en hızlısı)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "Üçü de mümkün olduğunca ekran kartında kod çözer.\n\n«Kare kopyalı», "
        "her kareyi ana bellekten geçirir. Yüzde birkaç daha yavaştır ve "
        "varsayılandır; çünkü kopyasız yol, video başka bir pencerenin içinde "
        "otururken birçok sürücüde yeşil bloklar ya da donmuş bir görüntü "
        "üretir.\n\nO son birkaç yüzdeyi istiyorsanız «kopyasız» seçeneğini "
        "deneyin; görüntü bozulursa geri dönün.",
    "This camera does not offer these settings.":
        "Bu kamerada bu ayarlar yok.",
    "Exposure and orientation": "Pozlama ve yönlendirme",
    "Day / night": "Gündüz / gece",
    "Automatic": "Otomatik",
    "Always colour": "Her zaman renkli",
    "Always black and white": "Her zaman siyah beyaz",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "«Otomatik», ışık azaldıkça kızılötesine geçer. Geceleri rengi "
        "zorlamak kullanılamayacak kadar karanlık bir görüntü verir; gündüz "
        "siyah beyazı zorlamak da rengi boşuna harcar.",
    "Anti-flicker": "Titreşim önleme",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "Şebeke frekansınıza uydurun — Avrupa'da 50 Hz — yoksa iç aydınlatma "
        "örtücüyle vuruşur ve görüntü atar.",
    "Exposure": "Pozlama",
    "Mirror": "Aynala",
    "Flip": "Ters çevir",
    "For a camera mounted upside down.":
        "Baş aşağı monte edilmiş bir kamera için.",
    "Backlight compensation": "Arka ışık dengelemesi",
    "Helps when the subject stands against a bright window or sky.":
        "Konu parlak bir pencerenin ya da gökyüzünün önünde durduğunda "
        "yardımcı olur.",
    "Noise reduction": "Gürültü azaltma",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "Karanlık bir görüntüyü temizler; karşılığında hareket eden her şeyi "
        "bulanıklaştırır.",
    "Rotation": "Döndürme",
    "Dynamic contrast": "Devingen karşıtlık",
    "Infrared illumination": "Kızılötesi aydınlatma",
    "Infrared lamps": "Kızılötesi lambalar",
    "Always on": "Her zaman açık",
    "Always off": "Her zaman kapalı",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "«Otomatik», hava karardığında bunları yakar. Kamera camın arkasından "
        "bakıyorsa kapatın — yansıma onu kör eder.",
    "Overlay": "Bindirme",
    "On-screen text": "Ekran üstü yazı",
    "Background": "Arka plan",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "Aydınlık bir sahnede okunur kalsın diye yazının arkasına bir kutu "
        "çizer.",
    "Watermark": "Filigran",
    "Embeds a mark in the recording itself.":
        "Kaydın kendisine bir işaret gömer.",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "Kamera bunu görüntünün içine yakar; dolayısıyla her kayıtta ve her "
        "programda görünür — yalnızca burada değil.",
    "Motion detection in the camera": "Kamerada hareket algılama",
    "Switched on": "Açık",
    "Higher notices more, including shadows and headlights.":
        "Yüksek değer daha çoğunu fark eder — gölgeleri ve farları da.",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "Bu, kameranın kendi algılamasıdır; ONVIF üzerinden bildirdiği de "
        "budur. leolink'in görüntüyü kendi çözümlemesi ayrıca, Kameralar → "
        "Olaylar altından ayarlanır.",
    "Recording": "Kayıt",
    "Recording to the camera's card": "Kameranın kartına kayıt",
    "Overwrite when full": "Dolunca üzerine yaz",
    "Off means recording simply stops once the card fills up.":
        "Kapalı olması, kart dolduğunda kaydın basitçe duracağı anlamına "
        "gelir.",
    "Record before the event": "Olaydan önceki süreyi kaydet",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "Tetiklemeden önceki saniyeleri saklar; genellikle ilginç olan kısım "
        "odur.",
    "File length": "Dosya uzunluğu",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "Bunlar kameranın kendi SD kartına ne yazacağını belirler. Bu "
        "bilgisayara kayıt Kameralar → Olaylar altından ayarlanır ve karta "
        "gerek duymaz.",
    "Alerts": "Uyarılar",
    "E-mail": "E-posta",
    "FTP": "FTP",
    "FTP upload": "FTP yüklemesi",
    "Push notification": "Anlık bildirim",
    "Server": "Sunucu",
    "Port": "Bağlantı noktası",
    "Send to": "Şuraya gönder",
    "Encrypted": "Şifreli",
    "Not more often than": "Şu sıklıktan daha sık değil",
    "Attach": "Ekle",
    "Directory": "Dizin",
    "Mode": "Kip",
    "Schedule": "Zamanlama",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "Bunları kameranın kendisi gönderir; dolayısıyla bu bilgisayar "
        "kapalıyken de çalışmayı sürdürürler. leolink'in kendi tepkileri — "
        "komutlar, webhook'lar, MQTT — Kameralar → Olaylar altındadır.",
    "Time": "Saat",
    "Time server": "Zaman sunucusu",
    "Synchronise the clock": "Saati eşitle",
    "Every": "Her",
    "Scheduled restart": "Zamanlanmış yeniden başlatma",
    "Restart regularly": "Düzenli olarak yeniden başlat",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "Bazı kameralar haftalarca açık kaldıktan sonra güvenilmez olur; "
        "haftalık bir yeniden başlatma ucuz bir çaredir.",
    "Day": "Gün",
    "Hour": "Saat",
    "Minute": "Dakika",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "Saati yanlış olan bir kamera kayıtlarını yanlış tarihler; bir kaydı "
        "bulmanız gerektiğinde bunun ağırlığı sanıldığından fazladır.",
    "Wi-Fi": "Wi-Fi",
    "Scan": "Tara",
    "Join network": "Ağa katıl",
    "scanning…": "taranıyor…",
    "The camera is scanning for networks…": "Kamera ağları tarıyor…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "Tarayan bu bilgisayar değil, kameradır — önemli olan onun "
        "ulaşabildiğidir. Parola kaydedilmeden önce denenir; böylece bir yazım "
        "hatası, kamerayı ağsız bırakmak yerine reddedilir.",
    "Change the camera's network": "Kameranın ağını değiştir",
    "<b>Move %1 to “%2”?</b>": "<b>%1 «%2» ağına taşınsın mı?</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "Kamera parolayı önce dener ve yanlışsa reddeder; yani bu "
        "göründüğünden güvenlidir.\n\nYine de yeniden bağlanırken bir dakika "
        "ortadan kaybolacak ve yeni ağ ona başka bir adres verirse sonrasında "
        "burada güncellemeniz gerekecek.",
    "Join": "Katıl",
    "Testing the password on the camera…": "Parola kamerada sınanıyor…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "Kaydedildi. Kamera yeniden bağlanıyor, birazdan geri gelecek.",
    "The camera could not join that network: %1":
        "Kamera o ağa katılamadı: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "Adresler ve bağlantı noktaları burada okunur ama kameranın kendi web "
        "arayüzünden değiştirilir. Birini yanlış girmek kamerayı ağdan tamamen "
        "düşürür ve geri dönüşün tek yolu sıfırlama iğnesidir — orada bir "
        "uyarı penceresi, üreticinin kendi ekranının yerini tutmaz.",
    "%1 fps": "%1 fps",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)":
        "akış koptu — yeniden bağlanılıyor (%1)",
    "Hardware (recommended)": "Donanım (önerilen)",
    "Hardware, driver's choice": "Donanım, sürücünün seçimi",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "«Önerilen», kod çözmeyle çizimin aynı grafik arayüzünde kalması için "
        "kod çözücüyü açıkça adlandırır. Kendi haline bırakılırsa mpv kod "
        "çözmeyi birinden, çizimi öbüründen yapabilir; bu da bazı kartlarda "
        "görüntüyü koyu yeşile boyar.\n\nGörüntü bozuksa öbürlerini sırayla "
        "deneyin. «Yalnızca yazılım» her zaman çalışır ama tam çözünürlükte "
        "bir işlemci çekirdeğinin tamamına mal olur.",
    "Wired": "Kablolu",
    "%1 — strength unknown": "%1 — güç bilinmiyor",
    "%1 — %2 of %3": "%1 — %3 üzerinden %2",
    "WEAK SIGNAL": "ZAYIF SİNYAL",
    "BAD STREAM": "BOZUK AKIŞ",
    "stream ended (%1) — reconnecting":
        "akış bitti (%1) — yeniden bağlanılıyor",
    "Open the &log file": "&Günlük dosyasını aç",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "Oynatıcıların ve kameraların bildirdikleri. Bir hata bildirimine "
        "eklemeye değer.",
    "Nothing logged yet.": "Henüz kaydedilmiş bir şey yok.",
    "Bit rate looks too low": "Bit hızı fazla düşük görünüyor",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%2 için %1 kbit/s çok az.</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "Bu oranda kameranın kodlayıcısı bozuk kareler üretmeye eğilimlidir; "
        "bunlar yeşil bloklar ya da donan bir görüntü olarak gelir — ağ "
        "arızası değildir ve leolink'in tümüyle onarabileceği bir şey de "
        "değildir.\n\nYa bit hızını yükseltin ya da çözünürlüğü düşürün.",
    "Apply anyway": "Yine de uygula",
    "camera is reconfiguring…": "kamera yeniden yapılandırılıyor…",
    "Send a test e-mail": "Sınama e-postası gönder",
    "Test the FTP upload": "FTP yüklemesini sına",
    "Asking the camera to send a test e-mail…":
        "Kameradan sınama e-postası göndermesi isteniyor…",
    "Asking the camera to try the FTP server…":
        "Kameradan FTP sunucusunu denemesi isteniyor…",
    "%1: the camera reported success.":
        "%1: kamera başarılı olduğunu bildirdi.",
    "Condition": "Durum",
    "Processor load %1%": "İşlemci yükü %1 %",
    "Encoder load %1%": "Kodlayıcı yükü %1 %",
    "Network throughput %1 kbit/s": "Ağ trafiği %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "Kamera sınırında. Çözünürlüğü ya da kare hızını düşürmek onu "
        "dengeleyecektir.",
    "Firmware": "Donanım yazılımı",
    "Not checked.": "Denetlenmedi.",
    "Check for updates": "Güncellemeleri denetle",
    "Asking Reolink…": "Reolink'e soruluyor…",
    "Install update": "Güncellemeyi kur",
    "Update available: %1": "Güncelleme var: %1",
    "The firmware is up to date.": "Donanım yazılımı güncel.",
    "Install firmware": "Donanım yazılımını kur",
    "<b>Update the firmware on %1?</b>":
        "<b>%1 kamerasının donanım yazılımı güncellensin mi?</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "Kamera güncellemeyi kendisi indirir ve yeniden başlar. Birkaç dakika "
        "erişilemez olacak.\n\nGüncelleme sırasında elektriğini kesmeyin — "
        "yazma işleminin ortasında kesilen bir kamera genellikle servise "
        "gitmek zorunda kalır.",
    "Install": "Kur",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "Güncelleniyor. Kamera kendiliğinden yeniden başlayacak ve birkaç "
        "dakika erişilemez olacak. Elektriğini kesmeyin.",
    "Storage": "Depolama",
    "Format the SD card": "SD kartı biçimlendir",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "Biçimlendirmek karttaki her kaydı siler. Geri alınamaz ve sonrasında "
        "kameradan bir onay da gelmez.",
    "<b>Erase everything on the card in %1?</b>":
        "<b>%1 kamerasındaki kartta ne varsa silinsin mi?</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "Karttaki her kayıt silinir. Bu geri alınamaz ve daha önce "
        "indirilmemiş hiçbir şey kurtarılamaz.",
    "Erase": "Sil",
    "Formatting…": "Biçimlendiriliyor…",
    "The card has been formatted.": "Kart biçimlendirildi.",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "Fabrika ayarlarına dönüş burada sunulmuyor. Ağ ayarlarını da siler ve "
        "Wi-Fi'sini unutmuş bir kamerayı indirip elle sıfırlamak gerekir.",
    "Users": "Kullanıcılar",
    "Rights": "Yetkiler",
    "Administrator": "Yönetici",
    "Viewer": "İzleyici",
    "Add…": "Ekle…",
    "Change password…": "Parolayı değiştir…",
    "Delete": "Sil",
    "New user": "Yeni kullanıcı",
    "User name": "Kullanıcı adı",
    "Password for %1": "%1 için parola",
    "Creating %1…": "%1 oluşturuluyor…",
    "Change password": "Parolayı değiştir",
    "New password for %1": "%1 için yeni parola",
    "Changing the password for %1…": "%1 parolası değiştiriliyor…",
    "This is the account leolink uses": "leolink'in kullandığı hesap budur",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "Burada değiştirirseniz, yeni parola Kameralar altına da girilene "
        "kadar leolink dışarıda kalır.",
    "Cannot delete this account": "Bu hesap silinemez",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink «%1» olarak oturum açmış durumda. Onu silmek bu kameraya olan "
        "bağlantıyı anında keserdi.",
    "Delete user": "Kullanıcıyı sil",
    "Delete “%1” from the camera?": "«%1» kameradan silinsin mi?",
    "Deleting %1…": "%1 siliniyor…",
    "Done.": "Tamam.",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "Bunlar leolink'teki değil, kameradaki hesaplardır. İzleyici hesabı "
        "izleyebilir ama hiçbir şeyi değiştiremez — yalnızca görüntüyü görmesi "
        "yeten her şey için kullanmaya değer, böylece saklanan bir parola "
        "kameranın ayarlarına karşı kullanılamaz.",
    "camera is reconfiguring… %1 s": "kamera yeniden yapılandırılıyor… %1 sn",
    "File format not recognised.": "Dosya biçimi tanınmadı.",
    "Invalid input.": "Geçersiz giriş.",
    "No free connections — the camera allows only a few sessions at a time.":
        "Boş bağlantı yok — kamera aynı anda yalnızca birkaç oturuma izin "
        "verir.",
    "Session expired.": "Oturumun süresi doldu.",
    "Wrong user name or password.": "Kullanıcı adı ya da parola yanlış.",
    "Timed out.": "Süre doldu.",
    "This firmware does not support that command.":
        "Bu donanım yazılımı o komutu desteklemiyor.",
    "Could not read the configuration.": "Yapılandırma okunamadı.",
    "Could not verify the configuration.": "Yapılandırma doğrulanamadı.",
    "Subsystem unavailable — typically no SD card fitted.":
        "Alt sistem kullanılamıyor — genellikle takılı SD kart yoktur.",
    "Not permitted — this model lacks the hardware.":
        "İzin verilmiyor — bu modelde gereken donanım yok.",
    "Account invalid, log in again.": "Hesap geçersiz, yeniden oturum açın.",
    "User name already taken.": "Bu kullanıcı adı zaten alınmış.",
    "Maximum number of users reached.": "En çok kullanıcı sayısına ulaşıldı.",
    "Camera busy, try again shortly.":
        "Kamera meşgul, birazdan yeniden deneyin.",
    "IP address conflict.": "IP adresi çakışması.",
    "Configuration test failed.": "Yapılandırma sınaması başarısız.",
    "FTP login failed.": "FTP oturumu açılamadı.",
    "FTP could not create the directory.": "FTP dizini oluşturamadı.",
    "FTP upload failed.": "FTP yüklemesi başarısız.",
    "FTP could not reach the server.": "FTP sunucuya ulaşamadı.",
    "Camera reported error %1.": "Kamera %1 hatasını bildirdi.",
    "Cannot reach %1: %2": "%1 adresine ulaşılamıyor: %2",
    "Unexpected reply from %1.": "%1 adresinden beklenmeyen yanıt.",
    "Login returned no token.": "Oturum açma hiçbir anahtar döndürmedi.",
    "Snapshot failed.": "Anlık görüntü alınamadı.",
    "ONVIF subscription failed.": "ONVIF aboneliği başarısız.",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n kamera adı · %h adres · %t saat · %e olay · %s açık/kapalı · %f "
        "kayıt · %p görüntü",
    "Run a command": "Bir komut çalıştır",
    "Call a webhook": "Bir webhook çağır",
    "Left empty, leolink sends a small JSON document describing the event.":
        "Boş bırakılırsa leolink, olayı anlatan küçük bir JSON belgesi "
        "gönderir.",
    "Method": "Yöntem",
    "Body": "Gövde",
    "Publish an MQTT message": "Bir MQTT iletisi yayımla",
    "Left empty: the same JSON document as the webhook.":
        "Boş bırakılırsa: webhook ile aynı JSON belgesi.",
    "Keep the last message on the broker": "Son iletiyi aracıda tut",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "Sonradan bağlanan bir istemci, bir sonraki olayı beklemek yerine "
        "mevcut durumu hemen öğrenir. Ev otomasyonunun genellikle istediği "
        "budur.",
    "Broker": "Aracı",
    "Topic": "Konu",
    "Payload": "Yük",
    "MQTT": "MQTT",
    "In leolink": "leolink'te",
    "In the camera": "Kamerada",
    "Try again": "Yeniden dene",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>Kamera bildirir:</b> kameranın kendi algılayıcısı karar verir ve "
        "bir ONVIF olayı gönderir. Neyi izlediği ve ne kolaylıkla tetiklendiği "
        "aşağıdaki «Algılama» altında, kameranın kendisinde "
        "ayarlanır.<br><br><b>leolink görüntüyü izler:</b> bu bilgisayar alt "
        "akışa ikinci bir bağlantı açıp görüntüyü çözümler. Hiçbir şey "
        "bildirmeyenler de dâhil her kamerayla çalışır — ve o durumda "
        "kameranın kendi algılayıcısının bir rolü kalmaz.",
    "Choose what is watched…": "Neyin izleneceğini seç…",
    "How leolink learns of motion": "leolink hareketten nasıl haberdar olur",
    "When leolink watches the picture": "leolink görüntüyü izlediğinde",
    "Detection by leolink": "leolink tarafından algılama",
    "Recording on this computer": "Bu bilgisayara kayıt",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "Dosyaların nereye gideceği tüm kameralar için aynıdır ve Ayarlar ▸ "
        "Kayıtlar altında belirlenir.",
    "Follow the defaults under Settings": "Ayarlar'daki varsayılanları izle",
    "Use this camera's own": "Bu kameranınkini kullan",
    "Reactions": "Tepkiler",
    "What happens on an event": "Bir olayda ne olacağı",
    "Muted": "Sessiz",
    "Sound in leolink": "leolink'te ses",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "Aynı iki denetim, daha çabuk erişilen kamera karosunun üzerinde de "
        "bulunur. Kameralar sessiz başlar: bir duvar dolusu kamerayı açmak, "
        "odayı hepsinin sesiyle doldurmamalı.",
    "Playback": "Oynatma",
    "&Settings…": "&Ayarlar…",
    "Reactions": "Tepkiler",
    "Recordings": "Kayıtlar",
    "General": "Genel",
    "Tint the tile red for a moment": "Karoyu bir an kırmızıya boya",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "Bir duvar dolusu kameraya şöyle bir bakmak, hangisi olduğunu görmeye "
        "yetsin diye.",
    " ms": " ms",
    "Play a sound": "Bir ses çal",
    "Empty: the desktop's own notification sound":
        "Boş: masaüstünün kendi bildirim sesi",
    "Sound to play": "Çalınacak ses",
    "For": "Süre",
    "Sound file": "Ses dosyası",
    "On the screen": "Ekranda",
    "The window": "Pencere",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "Hangi kameraların olay üreteceği ve nasıl üreteceği, her kamera için "
        "Kameralar ▸ Ayarlar ▸ leolink tarafından algılama altında belirlenir.",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "Bir kamera bir şey bildirdiğinde leolink'in ne yapacağı. Kendi "
        "penceresi başka bir şey söylemedikçe her kamera bunlara uyar — hepsi "
        "ya da hiçbiri, asla yarısı: kısmen devralınan ayarlar, bir şey "
        "tetiklenmediğinde çözülmesi en zor olanlardır.",
    "Recordings and stills": "Kayıtlar ve anlık görüntüler",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "Kayıtlar yeniden kodlanmadan Matroska olarak yazılır: görüntü "
        "kameranın özgün kalitesini korur ve işlemci neredeyse boş "
        "kalır.\n\nBir kameranın kayıt yapıp yapmayacağı kendi ayarıdır; "
        "Kameralar ▸ Ayarlar ▸ Tepkiler altında.",
    "Settings for this camera…": "Bu kameranın ayarları…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "leolink'teki algılama, tepkiler ve kayıt ile kameranın kendi "
        "kodlayıcısı, görüntüsü ve zamanlamaları.",

    # ── the settings, split by reach ──
    "nothing": "yok",
    "The seconds leading up to the trigger — usually the part that shows how "
    "someone got there. The past cannot be recorded after the fact, so "
    "anything above zero keeps the stream running into a buffer: one more "
    "connection to the camera, and a little disk.":
        "Tetiklemeden hemen önceki saniyeler — genellikle birinin oraya nasıl "
        "geldiğini gösteren kısım. Geçmiş sonradan kaydedilemez; sıfırın "
        "üzerindeki her değer bu yüzden akışı sürekli bir tampona yazar: "
        "kameraya bir bağlantı daha, ve biraz disk.",
    "So an event does not stop mid-scene. Motion that resumes within this time "
    "continues the same file instead of starting a second.":
        "Bir olay sahnenin ortasında bitmesin diye. Bu süre içinde yeniden "
        "başlayan hareket, ikinci bir dosya açmak yerine aynı dosyayı "
        "sürdürür.",
    "Include before": "Öncesini de al",
    "When something happens": "Bir şey olduğunda",
    "Record without stopping": "Durmadan kaydet",
    " h": " sa",
    "How far back the archive reaches. Once it is this old, a file is deleted "
    "to make room for the newest one.":
        "Arşivin ne kadar geriye uzandığı. Bu yaşa gelen bir dosya, en "
        "yenisine yer açmak için silinir.",
    " min": " dk",
    "The archive is a run of files, not one — a file cannot be trimmed at the "
    "front, so keeping a day in one of them would mean rewriting it every "
    "minute. Shorter files find a moment more precisely; longer ones are fewer "
    "to scroll past.":
        "Arşiv tek bir dosya değil, bir dosya dizisidir — bir dosya baştan "
        "kırpılamaz, bütün bir günü tek dosyada tutmak onu her dakika yeniden "
        "yazmak demek olurdu. Kısa dosyalar bir anı daha kesin bulur; uzun "
        "dosyalar gezinmek için daha azdır.",
    "Keep the last": "Şu kadarını tut",
    "One file per": "Her dosya",
    "Round the clock": "Günün yirmi dört saati",
    "With both switched on, one buffer serves both: the recording of an event "
    "is cut out of the archive, so nothing extra is opened to the "
    "camera.\n\nWhere the files go is the same for every camera and is set "
    "under Settings ▸ Recordings.":
        "İkisi de açıkken tek bir tampon ikisine birden yeter: olayın kaydı "
        "arşivin içinden kesilir, yani kameraya fazladan hiçbir şey "
        "açılmaz.\n\nDosyaların nereye gideceği tüm kameralar için aynıdır ve "
        "Ayarlar ▸ Kayıtlar altında belirlenir.",
    "%1 hours of video. How much disk that is depends on the bit rate, which "
    "this camera has not reported yet.":
        "%1 saatlik video. Bunun ne kadar disk ettiği bit hızına bağlı, ve bu "
        "kamera onu henüz bildirmedi.",
    "About %1 GB at the %2 kbit/s this stream is set to. Make sure the "
    "recordings folder has that much to spare.":
        "Bu akışın ayarlı olduğu %2 kbit/s ile yaklaşık %1 GB. Kayıt "
        "klasöründe o kadar yer bulunsun.",
    "ffmpeg is not installed, so continuous recording is unavailable.":
        "ffmpeg kurulu değil, bu yüzden kesintisiz kayıt yapılamıyor.",
    "Nothing had been buffered yet.": "Tamponda henüz bir şey yoktu.",
    "That moment is no longer in the buffer.": "O an artık tamponda değil.",
    "The recording could not be cut out of the buffer.":
        "Kayıt tampondan kesilemedi.",
}


# Plural forms — one form: this language does not inflect for number.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        ", %n erişim noktası"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "%n erişim noktasından duyuldu — tek ağ, birkaç düğüm. Gösterilen, en "
        "güçlü olanı."],
    "%n network(s) found, strongest first.": [
        "%n ağ bulundu, en güçlüsü ilk sırada."],
    "Asking about %n command(s)…": [
        "%n komut soruluyor…"],
    "%n area(s) blanked": [
        "%n alan karartıldı"],
    "%n area(s), switched off": [
        "%n alan, kapalı"],
    "%n hour(s) a week.": [
        "Haftada %n saat."],
    "%n camera(s) live": [
        "%n kamera canlı"],
    "Saved %n snapshot(s)": [
        "%n anlık görüntü kaydedildi"],
    "Found %n device(s)…": [
        "%n cihaz bulundu…"],
    "%n recording(s) found.": [
        "%n kayıt bulundu."],
    "%n network(s) found.": [
        "%n ağ bulundu."],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "Son on saniyede %n bozuk kare.\n\nGenellikle zayıf bir Wi-Fi sinyali "
        "ya da çözünürlük için fazla düşük ayarlanmış bir bit hızı. leolink "
        "elinden geleni onarır — bunlar onaramadıkları."],
}
