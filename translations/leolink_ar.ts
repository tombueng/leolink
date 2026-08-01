<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ar" sourcelanguage="en">
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n اسم الكاميرا · %h العنوان · %t الوقت · %e الحدث · %s تشغيل/إيقاف · %f التسجيل · %p الصورة</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>نفّذ أمراً</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="41"/>
        <location filename="../src/ActionEditor.cpp" line="44"/>
        <source>Command</source>
        <translation>الأمر</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="50"/>
        <source>Call a webhook</source>
        <translation>استدعِ خطاف ويب</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>إن تُرك فارغاً أرسل leolink مستند JSON صغيراً يصف الحدث.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>العنوان</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>الطريقة</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>المتن</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>انشر رسالة MQTT</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>إن تُرك فارغاً: مستند JSON نفسه الذي يرسله خطاف الويب.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>أبقِ آخر رسالة لدى الوسيط</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>العميل الذي يتصل لاحقاً يعرف الحالة الراهنة فوراً بدل انتظار الحدث التالي. وهذا ما تريده أتمتة المنزل عادةً.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>الوسيط</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>المنفذ</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>الموضوع</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>المستخدم</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>كلمة المرور</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>الحمولة</translation>
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
        <translation>‏ffmpeg غير مثبت، ولذا يتعذّر كشف الصوت.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>لا عنوان بث لـ %1.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="103"/>
        <source>Sound detection stopped: %1</source>
        <translation>توقّف كشف الصوت: %1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="108"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>تعذّر تشغيل ffmpeg لكشف الصوت.</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="52"/>
        <source>Cannot open a local port: %1</source>
        <translation>تعذّر فتح منفذ محلي: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="64"/>
        <source>Baichuan login failed: %1</source>
        <translation>فشل تسجيل الدخول عبر Baichuan: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="72"/>
        <source>The camera refused to send video: %1</source>
        <translation>رفضت الكاميرا إرسال الفيديو: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="80"/>
        <source>The player did not connect.</source>
        <translation>لم يتصل المشغّل.</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="132"/>
        <source>The camera stopped sending.</source>
        <translation>توقفت الكاميرا عن الإرسال.</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="77"/>
        <source>Camera</source>
        <translation>الكاميرا</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="125"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="133"/>
        <source>Reading settings from %1…</source>
        <translation>تجري قراءة الإعدادات من %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="138"/>
        <source>Apply to camera</source>
        <translation>طبّق على الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="169"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>تجري إعادة التشغيل. ستعود الكاميرا خلال دقيقة تقريباً.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="185"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>حُفظ. تعيد الكاميرا الاتصال وستعود بعد قليل.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="191"/>
        <source>%1: the camera reported success.</source>
        <translation>%1: أبلغت الكاميرا بالنجاح.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="199"/>
        <source>Processor load %1 %</source>
        <translation>حِمل المعالج %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="204"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>خرج المرمِّز %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="206"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>إنتاجية الشبكة %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="208"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>الكاميرا عند حدّها. وخفض الدقة أو معدل الإطارات سيثبّتها.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="865"/>
        <source>Administrator</source>
        <translation>مدير</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="229"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="865"/>
        <source>Viewer</source>
        <translation>مشاهد</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="254"/>
        <source>Done.</source>
        <translation>تم.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="259"/>
        <source>The card has been formatted.</source>
        <translation>هُيّئت البطاقة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="676"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>الأعلى يعني صورة أفضل وحركة شبكية أكثر. ولا تعرض الكاميرا إلا المعدلات التي تقوى على الحفاظ عليها فعلاً.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="680"/>
        <source>Resolution</source>
        <translation>الدقة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="681"/>
        <source>Frame rate</source>
        <translation>معدل الإطارات</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="682"/>
        <source>Bit rate (kbit/s)</source>
        <translation>معدل البت (kbit/s)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>H.264 profile</source>
        <translation>ملمح H.264</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="691"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>تغيّر هذه الكاميرا نفسها، فيرى كل عميل النتيجة. وتأتي الخيارات من الكاميرا وتختلف من طراز إلى آخر.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="704"/>
        <source>Send sound</source>
        <translation>أرسل الصوت</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="707"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>ميكروفون الكاميرا. وحتى مع إطفائه تظل تضع مساراً صوتياً في البث — مساراً صامتاً تماماً، وهو أصعب في التمييز بكثير من غياب المسار أصلاً.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="436"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="713"/>
        <source>Sound</source>
        <translation>الصوت</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>في leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="112"/>
        <source>In the camera</source>
        <translation>في الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="128"/>
        <source>Try again</source>
        <translation>أعد المحاولة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="336"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>الكاميرا نفسها (ONVIF)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="338"/>
        <source>leolink watches the picture</source>
        <translation>‏leolink بمراقبة الصورة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="340"/>
        <source>Either of the two</source>
        <translation>أي منهما</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="341"/>
        <source>Do not watch</source>
        <translation>لا تراقب</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="350"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;الكاميرا تبلّغ:&lt;/b&gt; يقرر كاشف الكاميرا نفسه ويرسل حدث ONVIF. وما يراقبه ومدى سهولة تنبّهه يُضبط أدناه تحت «الكشف»، داخل الكاميرا ذاتها.&lt;br&gt;&lt;br&gt;&lt;b&gt;‏leolink يراقب الصورة:&lt;/b&gt; يفتح هذا الحاسوب اتصالاً ثانياً بالبث الفرعي ويحلّل الصورة. يعمل مع أي كاميرا، بما فيها التي لا تبلّغ عن شيء — ولا دور عندئذ لكاشف الكاميرا نفسه.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="361"/>
        <source>Choose what is watched…</source>
        <translation>اختر ما يُراقَب…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="369"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>مقدار ما يجب أن تتغيره بقعة في الصورة لتُحتسب. والأعلى يلحظ أكثر، بما في ذلك الظلال والمطر.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="374"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="377"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>مقدار ما يجب أن يتغير من المساحة المراقَبة ليُحتسب حركة. و20 ‰ هي اثنان بالمئة من الصورة — أي ما يقارب شخصاً على مسافة متوسطة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="382"/>
        <source>Motion comes from</source>
        <translation>مصدر الإبلاغ عن الحركة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="385"/>
        <source>How leolink learns of motion</source>
        <translation>كيف يعلم leolink بالحركة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="391"/>
        <source>Minimum area</source>
        <translation>أصغر مساحة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="393"/>
        <source>When leolink watches the picture</source>
        <translation>حين يراقب leolink الصورة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="404"/>
        <source>Raise an event on sound</source>
        <translation>أطلق حدثاً عند الصوت</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="407"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>يتطلب كاميرا بميكروفون. ويفتح اتصالاً آخر بالبث الفرعي.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="412"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="415"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>‏-60 dB قريب من الصمت، و-20 dB صوت مرتفع على مقربة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="419"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="463"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="474"/>
        <source> s</source>
        <translation> ث</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="422"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>يُبقي الحدث قائماً بعد انقطاع الضجيج، حتى لا يُبلَّغ عن نباح واحد أربع مرات.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="433"/>
        <source>Sound above</source>
        <translation>صوت يفوق</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="434"/>
        <source>Hold for</source>
        <translation>أبقِه لمدة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="447"/>
        <source>Detection by leolink</source>
        <translation>الكشف بواسطة leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="455"/>
        <source>Record while motion lasts</source>
        <translation>سجّل ما دامت الحركة مستمرة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="458"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>يسجّل على هذا الحاسوب من البث الحي، فيعمل حتى حين لا تكون في الكاميرا بطاقة SD.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="596"/>
        <source>Follow the defaults under Settings</source>
        <translation>اتّبع الإعدادات الافتراضية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Use this camera&apos;s own</source>
        <translation>استخدم ما يخص هذه الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="610"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="620"/>
        <source>Reactions</source>
        <translation>ردود الفعل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="612"/>
        <source>What happens on an event</source>
        <translation>ما يحدث عند وقوع حدث</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="627"/>
        <source>Muted</source>
        <translation>مكتومة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="642"/>
        <source>Volume</source>
        <translation>شدة الصوت</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="644"/>
        <source>Sound in leolink</source>
        <translation>الصوت في leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="648"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>يوجد الضابطان نفساهما على بطاقة الكاميرا، حيث يسهل بلوغهما أسرع. وتبدأ الكاميرات مكتومة: فتح جدار منها ينبغي ألّا يملأ الغرفة بصوت كل واحدة دفعة واحدة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="658"/>
        <source>Playback</source>
        <translation>التشغيل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="718"/>
        <source>Main stream</source>
        <translation>البث الرئيسي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="719"/>
        <source>Sub stream</source>
        <translation>البث الفرعي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="724"/>
        <source>Video</source>
        <translation>الفيديو</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="738"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2246"/>
        <source>Brightness</source>
        <translation>السطوع</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <source>Contrast</source>
        <translation>التباين</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="740"/>
        <source>Saturation</source>
        <translation>الإشباع</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="741"/>
        <source>Sharpness</source>
        <translation>الحدة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="742"/>
        <source>Hue</source>
        <translation>درجة اللون</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>Picture</source>
        <translation>الصورة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="754"/>
        <source>Exposure and orientation</source>
        <translation>التعريض والاتجاه</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Day / night</source>
        <translation>نهار / ليل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="757"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>ينتقل «تلقائي» إلى الأشعة تحت الحمراء مع خفوت الضوء. وفرض الألوان ليلاً يعطي صورة أشد عتمة من أن تُستعمل؛ وفرض الأبيض والأسود نهاراً يفقدك اللون بلا مقابل.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="762"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="792"/>
        <source>Automatic</source>
        <translation>تلقائي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="763"/>
        <source>Always colour</source>
        <translation>ملوّن دائماً</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="764"/>
        <source>Always black and white</source>
        <translation>أبيض وأسود دائماً</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="765"/>
        <source>Anti-flicker</source>
        <translation>منع الوميض</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="766"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>طابق تردد التيار الكهربائي لديك — 50 هرتز في أوروبا — وإلا تضاربت إضاءة الداخل مع الغالق ونبضت الصورة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="770"/>
        <source>Exposure</source>
        <translation>التعريض</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>Mirror</source>
        <translation>انعكاس أفقي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="772"/>
        <source>Flip</source>
        <translation>قلب رأسي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="773"/>
        <source>For a camera mounted upside down.</source>
        <translation>لكاميرا مركّبة مقلوبة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="774"/>
        <source>Backlight compensation</source>
        <translation>تعويض الإضاءة الخلفية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="775"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>يفيد حين يقف الهدف أمام نافذة أو سماء ساطعة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="777"/>
        <source>Noise reduction</source>
        <translation>خفض الضجيج</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="778"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>ينظّف الصورة المعتمة، على حساب تلطّخ كل ما يتحرك.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>Rotation</source>
        <translation>الدوران</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="781"/>
        <source>Dynamic contrast</source>
        <translation>التباين الديناميكي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="785"/>
        <source>Infrared illumination</source>
        <translation>الإضاءة تحت الحمراء</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="787"/>
        <source>Infrared lamps</source>
        <translation>مصابيح الأشعة تحت الحمراء</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="788"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>يشغّلها «تلقائي» عند حلول الظلام. أطفئها إن كانت الكاميرا تنظر عبر زجاج — فالانعكاس يُعميها.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="793"/>
        <source>Always on</source>
        <translation>مضاءة دائماً</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="794"/>
        <source>Always off</source>
        <translation>مطفأة دائماً</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="808"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1909"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2188"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2216"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2253"/>
        <source>User</source>
        <translation>المستخدم</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="808"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>Rights</source>
        <translation>الصلاحيات</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="815"/>
        <source>Add…</source>
        <translation>أضف…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="816"/>
        <source>Change password…</source>
        <translation>غيّر كلمة المرور…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="817"/>
        <source>Delete</source>
        <translation>احذف</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="831"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>هذه حسابات على الكاميرا، لا في leolink. وحساب المشاهد يستطيع المشاهدة دون تغيير أي شيء — ويستحق استعماله في كل ما يحتاج إلى رؤية الصورة فقط، حتى لا تُوجَّه كلمة مرور مخزّنة ضد إعدادات الكاميرا.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="848"/>
        <source>Users</source>
        <translation>المستخدمون</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="855"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="860"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>New user</source>
        <translation>مستخدم جديد</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="855"/>
        <source>User name</source>
        <translation>اسم المستخدم</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="860"/>
        <source>Password for %1</source>
        <translation>كلمة مرور %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="872"/>
        <source>Creating %1…</source>
        <translation>يجري إنشاء %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="887"/>
        <source>Change password</source>
        <translation>غيّر كلمة المرور</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="887"/>
        <source>New password for %1</source>
        <translation>كلمة مرور جديدة لـ %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="896"/>
        <source>This is the account leolink uses</source>
        <translation>هذا هو الحساب الذي يستخدمه leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="897"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>غيّرها هنا وسيبقى leolink خارجاً إلى أن تُدخل كلمة المرور الجديدة تحت «الكاميرات» أيضاً.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="901"/>
        <source>Changing the password for %1…</source>
        <translation>يجري تغيير كلمة مرور %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="914"/>
        <source>Cannot delete this account</source>
        <translation>تعذّر حذف هذا الحساب</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="915"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>‏leolink مسجَّل الدخول باسم «%1». وحذفه سيقطع الاتصال بهذه الكاميرا فوراً.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="920"/>
        <source>Delete user</source>
        <translation>احذف المستخدم</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="921"/>
        <source>Delete “%1” from the camera?</source>
        <translation>أتريد حذف «%1» من الكاميرا؟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="925"/>
        <source>Deleting %1…</source>
        <translation>يجري حذف %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="932"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1340"/>
        <source>Format the SD card</source>
        <translation>هيّئ بطاقة SD</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="934"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;أتريد محو كل ما على بطاقة %1؟&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="937"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>يُحذف كل تسجيل على البطاقة. ولا يمكن التراجع عن ذلك، ولا يمكن استرجاع أي شيء لم يُنزَّل من قبل.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="940"/>
        <source>Erase</source>
        <translation>امحُ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="947"/>
        <source>Formatting…</source>
        <translation>تجري التهيئة…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="957"/>
        <source>Wi-Fi signal</source>
        <translation>إشارة الواي‌فاي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="961"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1285"/>
        <source>Reading…</source>
        <translation>تجري القراءة…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="965"/>
        <source>Connection</source>
        <translation>الاتصال</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="978"/>
        <source>Scan</source>
        <translation>افحص</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="982"/>
        <source>Join network</source>
        <translation>انضم إلى الشبكة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="996"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1030"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1919"/>
        <source>Network</source>
        <translation>الشبكة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="998"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1910"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2217"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2254"/>
        <source>Password</source>
        <translation>كلمة المرور</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1001"/>
        <source>Wi-Fi</source>
        <translation>الواي‌فاي</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1007"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>الكاميرا هي التي تفحص، لا هذا الحاسوب — وما يهم هو ما تصل إليه هي. وتُجرَّب كلمة المرور قبل حفظها، فيُرفض الخطأ المطبعي بدل أن تبقى الكاميرا بلا أي شبكة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1015"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>تُقرأ العناوين والمنافذ هنا، لكنها تُغيَّر في واجهة الويب الخاصة بالكاميرا. وخطأ واحد فيها يُخرج الكاميرا من الشبكة كلياً، والسبيل الوحيد للعودة هو دبوس إعادة الضبط — ولا يغني حوار تحذيري هناك عن شاشة الشركة المصنّعة نفسها.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1060"/>
        <source>strong</source>
        <translation>قوية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1061"/>
        <source>good</source>
        <translation>جيدة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>fair</source>
        <translation>متوسطة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1063"/>
        <source>weak</source>
        <translation>ضعيفة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>unknown</source>
        <translation>غير معروفة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1118"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 ‏(%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1123"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>، لا نقاط وصول</numerusform><numerusform>، نقطة وصول واحدة</numerusform><numerusform>، نقطتا وصول</numerusform><numerusform>، %n نقاط وصول</numerusform><numerusform>، %n نقطة وصول</numerusform><numerusform>، %n نقطة وصول</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1128"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>الإشارة كما تسمعها الكاميرا: %1 من 4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1130"/>
        <source>Encryption: %1</source>
        <translation>التعمية: %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1132"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>لم تُسمع من أي نقطة وصول.</numerusform><numerusform>سُمعت من نقطة وصول واحدة — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.</numerusform><numerusform>سُمعت من نقطتي وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.</numerusform><numerusform>سُمعت من %n نقاط وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.</numerusform><numerusform>سُمعت من %n نقطة وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.</numerusform><numerusform>سُمعت من %n نقطة وصول — شبكة واحدة، عدة عقد. والمعروض هو الأقوى.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1146"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>سُمعت بعض الأسماء من عدة نقاط وصول — تلك شبكة متشابكة. تتصل الكاميرا بالاسم لا بعقدة بعينها؛ والشبكة هي التي تقرر مع أيها تتحدث وتسلّمها عند الحاجة. ولإيجاد أفضل موضع، حرّك الكاميرا وراقب «إشارة الواي‌فاي» أعلاه: تلك هي الوصلة التي تملكها فعلاً.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1156"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>لم تُوجد شبكات.</numerusform><numerusform>وُجدت شبكة واحدة، الأقوى أولاً.</numerusform><numerusform>وُجدت شبكتان، الأقوى أولاً.</numerusform><numerusform>وُجدت %n شبكات، الأقوى أولاً.</numerusform><numerusform>وُجدت %n شبكة، الأقوى أولاً.</numerusform><numerusform>وُجدت %n شبكة، الأقوى أولاً.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1164"/>
        <source>scanning…</source>
        <translation>يجري الفحص…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1167"/>
        <source>The camera is scanning for networks…</source>
        <translation>الكاميرا تبحث عن شبكات…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1178"/>
        <source>Change the camera&apos;s network</source>
        <translation>غيّر شبكة الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1180"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;أتريد نقل %1 إلى «%2»؟&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1182"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>تختبر الكاميرا كلمة المرور أولاً وترفض إن كانت خاطئة، فالأمر أأمن مما يبدو.

ومع ذلك ستغيب دقيقة ريثما تعيد الاتصال، وإن أعطتها الشبكة الجديدة عنواناً مختلفاً فسيلزمك تحديثه هنا بعدئذ.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1188"/>
        <source>Join</source>
        <translation>انضم</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>Testing the password on the camera…</source>
        <translation>يجري اختبار كلمة المرور على الكاميرا…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1214"/>
        <source>Link</source>
        <translation>الوصلة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1215"/>
        <source>Address</source>
        <translation>العنوان</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1216"/>
        <source>Netmask</source>
        <translation>قناع الشبكة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1217"/>
        <source>Gateway</source>
        <translation>البوابة</translation>
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
        <translation>اسم الشبكة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1241"/>
        <source>Ports</source>
        <translation>المنافذ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1243"/>
        <source>The camera reported nothing.</source>
        <translation>لم تبلّغ الكاميرا بشيء.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1251"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1471"/>
        <source>Restart the camera</source>
        <translation>أعد تشغيل الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1257"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>تغيب الكاميرا عن الشبكة نحو دقيقة ثم تعود من تلقاء نفسها. ولا تتأثر التسجيلات على بطاقتها، وتبقى الإعدادات كما هي.

ويستحق الأمر التجربة حين تكفّ كاميرا عن الإجابة، أو ترفض الاتصالات الجديدة، أو تضطرب بعد تحديث برمجيتها الثابتة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1265"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1478"/>
        <source>Restart</source>
        <translation>إعادة التشغيل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1276"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>لا تُتاح هنا إعادة الضبط إلى إعدادات المصنع. فهي تمحو إعدادات الشبكة كذلك، والكاميرا التي نسيت شبكة الواي‌فاي لا بد من إنزالها والوصول إليها بكبل — فإن كنت تريد ذلك حقاً فاستخدم واجهة الويب الخاصة بالكاميرا.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1287"/>
        <source>Condition</source>
        <translation>الحالة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1292"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1360"/>
        <source>Not checked.</source>
        <translation>لم يُتحقق.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1295"/>
        <source>Check for updates</source>
        <translation>ابحث عن تحديثات</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1297"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>الكاميرا هي التي تسأل Reolink، لا هذا الحاسوب — ولذا تحتاج إلى منفذ خاص بها إلى الإنترنت.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1301"/>
        <source>Asking Reolink…</source>
        <translation>يجري سؤال Reolink…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1306"/>
        <source>Install update</source>
        <translation>ثبّت التحديث</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1310"/>
        <source>Install firmware</source>
        <translation>ثبّت البرمجية الثابتة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1312"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;أتريد تحديث البرمجية الثابتة على %1؟&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>تنزّل الكاميرا التحديث بنفسها ثم تعيد التشغيل. وستتعذّر مخاطبتها عدة دقائق.

لا تقطع عنها التيار أثناء التحديث — فالكاميرا التي تنقطع في منتصف الكتابة تحتاج عادةً إلى الإرجاع للصيانة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1319"/>
        <source>Install</source>
        <translation>ثبّت</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1334"/>
        <source>Firmware</source>
        <translation>البرمجية الثابتة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1344"/>
        <source>Storage</source>
        <translation>التخزين</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1347"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>تمحو التهيئة كل تسجيل على البطاقة. ولا تراجع عنها ولا تأكيد من الكاميرا بعدها.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1364"/>
        <source>Ask the camera</source>
        <translation>اسأل الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1368"/>
        <source>Copy the list</source>
        <translation>انسخ القائمة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>Copied.</source>
        <translation>نُسخ.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1379"/>
        <source>What this camera supports</source>
        <translation>ما الذي تدعمه هذه الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1382"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>تختلف برمجيات Reolink الثابتة اختلافاً هائلاً بين طراز وآخر، والسبيل الموثوق الوحيد لمعرفة ما تستطيعه كاميرا هو أن تسألها. فإن كان ينقص leolink شيء تملكه كاميرتك بوضوح، فهذه القائمة في بلاغ عن خلل هي ما يجعل إضافته ممكنة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1399"/>
        <source>Maintenance</source>
        <translation>الصيانة</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1430"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>لا أوامر للسؤال عنها…</numerusform><numerusform>يجري السؤال عن أمر واحد…</numerusform><numerusform>يجري السؤال عن أمرين…</numerusform><numerusform>يجري السؤال عن %n أوامر…</numerusform><numerusform>يجري السؤال عن %n أمراً…</numerusform><numerusform>يجري السؤال عن %n أمر…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1447"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>مدعوم (%1):
%2

غير مدعوم (%3):
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;أتريد إعادة تشغيل %1؟&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1475"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>ستغيب الصورة نحو دقيقة. وسيتوقف كل ما يجري تسجيله الآن.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1487"/>
        <source>Asking %1 to restart…</source>
        <translation>يجري طلب إعادة التشغيل من %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1565"/>
        <source>On-screen text</source>
        <translation>نص على الصورة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1567"/>
        <source>Background</source>
        <translation>الخلفية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1568"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>يرسم إطاراً خلف النص ليبقى مقروءاً فوق مشهد ساطع.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1570"/>
        <source>Watermark</source>
        <translation>العلامة المائية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1571"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>يضمّن علامة في التسجيل نفسه.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1575"/>
        <source>Privacy areas…</source>
        <translation>مناطق الخصوصية…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1578"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>أجزاء المشهد التي تطمسها الكاميرا قبل أن يغادرها أي شيء.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1589"/>
        <source>Privacy</source>
        <translation>الخصوصية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1593"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>يُطمس داخل الكاميرا نفسها، فيغيب الجزء المغطى عن كل عارض وكل تسجيل — نافذة جار، أو مكتب لا ينبغي أن يظهر في الفيديو.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1600"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>تحرق الكاميرا هذا في الصورة، فيظهر في كل تسجيل وفي كل عميل — لا هنا وحسب.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1608"/>
        <source>Overlay</source>
        <translation>الطبقة العلوية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1617"/>
        <source>Motion detection in the camera</source>
        <translation>كشف الحركة في الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="390"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1619"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>Sensitivity</source>
        <translation>الحساسية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="464"/>
        <source>nothing</source>
        <translation>لا شيء</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="467"/>
        <source>The seconds leading up to the trigger — usually the part that shows how someone got there. The past cannot be recorded after the fact, so anything above zero keeps the stream running into a buffer: one more connection to the camera, and a little disk.</source>
        <translation>الثواني السابقة للحدث — وهي عادةً الجزء الذي يُظهر كيف وصل أحدهم إلى هناك. الماضي لا يُسجَّل بأثر رجعي، ولذا فأي قيمة فوق الصفر تُبقي البث يجري في مخزن مؤقت: اتصال إضافي بالكاميرا، وقليل من القرص.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="477"/>
        <source>So an event does not stop mid-scene. Motion that resumes within this time continues the same file instead of starting a second.</source>
        <translation>كي لا ينتهي الحدث في منتصف المشهد. والحركة التي تعود خلال هذه المدة تُكمل الملف نفسه بدل أن تبدأ ثانياً.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="489"/>
        <source>Include before</source>
        <translation>اشمل ما قبله بـ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="492"/>
        <source>When something happens</source>
        <translation>عند وقوع شيء</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="496"/>
        <source>Record without stopping</source>
        <translation>سجّل دون توقف</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="501"/>
        <source> h</source>
        <translation> س</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="504"/>
        <source>How far back the archive reaches. Once it is this old, a file is deleted to make room for the newest one.</source>
        <translation>إلى أي مدى يعود الأرشيف. فمتى بلغ ملف هذا العمر حُذف لإفساح المجال لأحدث واحد.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="509"/>
        <source> min</source>
        <translation> د</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="512"/>
        <source>The archive is a run of files, not one — a file cannot be trimmed at the front, so keeping a day in one of them would mean rewriting it every minute. Shorter files find a moment more precisely; longer ones are fewer to scroll past.</source>
        <translation>الأرشيف سلسلة ملفات لا ملف واحد — إذ لا يمكن قص ملف من أوله، وحفظ يوم كامل في ملف واحد يعني إعادة كتابته كل دقيقة. الملفات القصيرة تحدد اللحظة بدقة أكبر، والطويلة أقل عدداً عند التصفّح.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="533"/>
        <source>Keep the last</source>
        <translation>احتفظ بآخر</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="534"/>
        <source>One file per</source>
        <translation>ملف واحد كل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="537"/>
        <source>Round the clock</source>
        <translation>على مدار الساعة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="541"/>
        <source>With both switched on, one buffer serves both: the recording of an event is cut out of the archive, so nothing extra is opened to the camera.

Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>مع تشغيل الاثنين يكفي مخزن واحد لكليهما: تسجيل الحدث يُقتطع من الأرشيف نفسه، فلا يُفتح شيء إضافي إلى الكاميرا.

ووجهة الملفات واحدة لكل الكاميرات وتُضبط تحت الإعدادات ▸ التسجيلات.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="577"/>
        <source>%1 hours of video. How much disk that is depends on the bit rate, which this camera has not reported yet.</source>
        <translation>%1 ساعة من الفيديو. أما كم يشغل ذلك من القرص فيتوقف على معدل البت، ولم تُبلغ هذه الكاميرا به بعد.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="585"/>
        <source>About %1 GB at the %2 kbit/s this stream is set to. Make sure the recordings folder has that much to spare.</source>
        <translation>نحو %1 غيغابايت عند %2 kbit/s المضبوط عليها هذا البث. تأكد أن مجلد التسجيلات يملك هذا القدر من المساحة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1620"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>الأعلى يلحظ أكثر، بما في ذلك الظلال وأضواء السيارات.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1622"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1931"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2203"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2209"/>
        <source>Switched on</source>
        <translation>مشغّل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1628"/>
        <source>Choose the area…</source>
        <translation>اختر المنطقة…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1630"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>أي أجزاء الصورة تراقبها الكاميرا. ويُهمَل كل ما هو خارج المنطقة — طريق عند حافة المشهد، شجرة في الريح، باب جار.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1636"/>
        <source>Where it looks</source>
        <translation>أين تنظر</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1640"/>
        <source>Choose the hours…</source>
        <translation>اختر الساعات…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1645"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>أسبوع من الساعات: في التي تؤشّرها تبلّغ الكاميرا عن الحركة، وفي البقية تصمت. ولا علاقة لهذا بمدى حساسيتها — فتلك تُضبط أدناه.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1652"/>
        <source>When it reports at all</source>
        <translation>متى تبلّغ أصلاً</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>From</source>
        <translation>من</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>To</source>
        <translation>إلى</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1671"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>خلال اليوم الواحد قد تتنبّه الكاميرا بسهولة أكبر أو أقل. وهكذا تمنع أضواء السيارات ليلاً من إطلاق كل شيء دون أن تُعميها نهاراً. أما عدد الفترات فتحدده الكاميرا؛ وأوقاتها وحساسياتها لك.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1679"/>
        <source>How readily it triggers</source>
        <translation>ما مدى سهولة تنبّهها</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1687"/>
        <source>What it recognises</source>
        <translation>ما الذي تميّزه</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1689"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>People</source>
        <translation>الأشخاص</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1690"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1823"/>
        <source>Vehicles</source>
        <translation>المركبات</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1691"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1824"/>
        <source>Animals</source>
        <translation>الحيوانات</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1825"/>
        <source>Faces</source>
        <translation>الوجوه</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1695"/>
        <source>Camera-side detection</source>
        <translation>الكشف في الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1704"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>هذا هو كشف الكاميرا نفسها، وهو ما تبلّغ عنه عبر ONVIF. أما تحليل leolink للصورة فيُضبط على حدة، تحت «الكاميرات ← الأحداث».</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1713"/>
        <source>Detection</source>
        <translation>الكشف</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1790"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — منطقة الكشف في الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1791"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>اسحب فوق الصورة لاختيار ما تراقبه الكاميرا. وتُهمَل المناطق المعتمة. هذه شبكة الكاميرا نفسها، %1 في %2، فهي أدق من شبكة leolink.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1808"/>
        <source>%1 — when to watch</source>
        <translation>%1 — متى تراقب</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1809"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>الساعات التي تبلّغ فيها الكاميرا عن الحركة. وخارجها تظل ترى، لكنها لا تقول شيئاً.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1820"/>
        <source>Any movement</source>
        <translation>أي حركة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1821"/>
        <source>Continuous</source>
        <translation>مستمر</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1853"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>تحتفظ هذه الكاميرا بأسبوع منفصل لكل نوع من الأحداث. أيها؟</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1901"/>
        <source>SIM card</source>
        <translation>شريحة SIM</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1903"/>
        <source>PIN</source>
        <translation>رمز PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1904"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>لا يلزم إلا إذا طلبته الشريحة. وثلاث محاولات خاطئة تقفل الشريحة، فتحتاج عندئذ إلى رمز PUK الذي لا يملكه سوى مشغّلك.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1908"/>
        <source>Access point (APN)</source>
        <translation>نقطة الوصول (APN)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1911"/>
        <source>Authentication</source>
        <translation>الاستيثاق</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1912"/>
        <source>Use mobile data</source>
        <translation>استخدم بيانات الجوال</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1916"/>
        <source>Modem</source>
        <translation>المودم</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1918"/>
        <source>Card</source>
        <translation>البطاقة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1920"/>
        <source>Type</source>
        <translation>النوع</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1921"/>
        <source>Signal</source>
        <translation>الإشارة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1922"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1923"/>
        <source>Card number</source>
        <translation>رقم البطاقة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1927"/>
        <source>Mobile connection</source>
        <translation>اتصال الجوال</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1929"/>
        <source>Data used</source>
        <translation>البيانات المستهلكة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1930"/>
        <source>Monthly limit</source>
        <translation>الحد الشهري</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1938"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;لم يُختبر على عتاد حقيقي.&lt;/b&gt; لا يملك أحد ممن يعملون على leolink كاميرا بمودم، ولذا كُتب هذا اعتماداً على البروتوكول وحده. لا يمكنه أن يُتلف شيئاً — فالأمر الذي لا تعرفه الكاميرا يُرفض ببساطة — لكنه قد لا يُظهر شيئاً على الإطلاق بالقدر نفسه.

إن كانت كاميرتك تحوي شريحة SIM، فإن «ما الذي تدعمه هذه الكاميرا» تحت «الصيانة» يسرد الأوامر التي تملكها برمجيتها الثابتة فعلاً. وتلك القائمة، في بلاغ عن خلل، هي ما يتيح إتمام هذا الجزء على الوجه الصحيح.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1951"/>
        <source>Mobile data</source>
        <translation>بيانات الجوال</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1968"/>
        <source>nothing blanked</source>
        <translation>لا شيء مطموس</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1970"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>لا مناطق مطموسة</numerusform><numerusform>طُمست منطقة واحدة</numerusform><numerusform>طُمست منطقتان</numerusform><numerusform>طُمست %n مناطق</numerusform><numerusform>طُمست %n منطقة</numerusform><numerusform>طُمست %n منطقة</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1972"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>لا مناطق، مطفأة</numerusform><numerusform>منطقة واحدة، مطفأة</numerusform><numerusform>منطقتان، مطفأتان</numerusform><numerusform>%n مناطق، مطفأة</numerusform><numerusform>%n منطقة، مطفأة</numerusform><numerusform>%n منطقة، مطفأة</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2054"/>
        <source>%1 — when to record</source>
        <translation>%1 — متى تسجّل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2055"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>الساعات التي تسجّل فيها الكاميرا على بطاقتها. ويلزم لذلك وجود بطاقة مركّبة؛ أما التسجيل على هذا الحاسوب فيُضبط في «الكاميرات ← الأحداث» ويستغني عنها.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2133"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2143"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>التسجيل على بطاقة الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2145"/>
        <source>Overwrite when full</source>
        <translation>استبدل عند الامتلاء</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2136"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2148"/>
        <source>Record before the event</source>
        <translation>سجّل قبل الحدث</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="490"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2151"/>
        <source>Keep recording after</source>
        <translation>واصل التسجيل بعدها</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2152"/>
        <source>File length</source>
        <translation>طول الملف</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2146"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>الإطفاء يعني أن التسجيل يتوقف ببساطة متى امتلأت البطاقة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2149"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>يحتفظ بالثواني السابقة للحدث، وهي عادةً الجزء المهم.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2155"/>
        <source>When to record…</source>
        <translation>متى تسجّل…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2158"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>ساعات الأسبوع التي تسجّل فيها الكاميرا على بطاقتها من تلقاء نفسها.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2168"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>تحكم هذه ما تكتبه الكاميرا على بطاقتها. أما التسجيل على هذا الحاسوب فيُضبط تحت «الكاميرات ← الأحداث» ولا يحتاج بطاقة.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="554"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2176"/>
        <source>Recording</source>
        <translation>التسجيل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2184"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2212"/>
        <source>E-mail</source>
        <translation>البريد الإلكتروني</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2186"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2214"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2251"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2308"/>
        <source>Server</source>
        <translation>الخادوم</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2187"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2199"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2215"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2252"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2309"/>
        <source>Port</source>
        <translation>المنفذ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2190"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2219"/>
        <source>Encrypted</source>
        <translation>معمّى</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2220"/>
        <source>Not more often than</source>
        <translation>ليس أكثر من مرة كل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2221"/>
        <source>Attach</source>
        <translation>أرفق</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2196"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2249"/>
        <source>FTP upload</source>
        <translation>الرفع عبر FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2202"/>
        <source>Folder</source>
        <translation>المجلد</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2207"/>
        <source>Push notifications</source>
        <translation>الإشعارات الفورية</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Send to</source>
        <translation>أرسل إلى</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2230"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2237"/>
        <source>Siren</source>
        <translation>صفارة الإنذار</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2232"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2239"/>
        <source>Sound on an alarm</source>
        <translation>أطلقها عند الإنذار</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2233"/>
        <source>Times</source>
        <translation>الأوقات</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2234"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2245"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2256"/>
        <source>Mode</source>
        <translation>الوضع</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2242"/>
        <source>Spotlight</source>
        <translation>الكشّاف</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2244"/>
        <source>On</source>
        <translation>مضاء</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2255"/>
        <source>Directory</source>
        <translation>الدليل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2260"/>
        <source>Push notification</source>
        <translation>إشعار فوري</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2262"/>
        <source>Schedule</source>
        <translation>الجدولة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2268"/>
        <source>Send a test e-mail</source>
        <translation>أرسل بريداً تجريبياً</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2271"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>يجري طلب إرسال بريد تجريبي من الكاميرا…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2274"/>
        <source>Test the FTP upload</source>
        <translation>اختبر الرفع عبر FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2277"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>يجري طلب تجربة خادوم FTP من الكاميرا…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2288"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>ترسلها الكاميرا نفسها، فتظل تعمل حين يكون هذا الحاسوب مطفأً. أما ردود leolink — الأوامر وخطافات الويب وMQTT — فهي تحت «الكاميرات ← الأحداث».</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2297"/>
        <source>Alerts</source>
        <translation>التنبيهات</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2305"/>
        <source>Time server</source>
        <translation>خادوم الوقت</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2307"/>
        <source>Synchronise the clock</source>
        <translation>زامن الساعة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2310"/>
        <source>Every</source>
        <translation>كل</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2314"/>
        <source>Scheduled restart</source>
        <translation>إعادة تشغيل مجدولة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2316"/>
        <source>Restart regularly</source>
        <translation>أعد التشغيل بانتظام</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2317"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>تصبح بعض الكاميرات غير موثوقة بعد أسابيع من التشغيل المتواصل؛ وإعادة تشغيل أسبوعية علاج رخيص.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2320"/>
        <source>Day</source>
        <translation>اليوم</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2321"/>
        <source>Hour</source>
        <translation>الساعة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2322"/>
        <source>Minute</source>
        <translation>الدقيقة</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2326"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>الكاميرا ذات الساعة الخاطئة تؤرّخ تسجيلاتها خطأً، وذلك أثقل مما يبدو حين تحتاج إلى العثور على تسجيل بعينه.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2334"/>
        <source>Time</source>
        <translation>الوقت</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2458"/>
        <source>Ready.</source>
        <translation>جاهز.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2563"/>
        <source>Writing to the camera…</source>
        <translation>تجري الكتابة إلى الكاميرا…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2621"/>
        <source>Nothing to write.</source>
        <translation>لا شيء لكتابته.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2638"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>حُفظ. تغيير المرمِّز يعيد تشغيل البث، ولذا قد تنقطع الصورة للحظة.</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>التشخيص</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>الأخطاء فقط</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>التحذيرات والأخطاء</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>النشاط المعتاد</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>كل شيء</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>كل المجالات</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>بحث…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>اعرض</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>سجل مفصّل</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>يسجّل كل طلب يُرسل إلى الكاميرا، وكل قرار يتخذه المفكِّك، وكل إعادة اتصال. اتركه مطفأً في الاستعمال اليومي — شغّله عندما يحدث خلل، وأعد إحداث المشكلة، ثم أرسل التقرير.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>تابع الأسطر الجديدة</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>انسخ التقرير</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>تفاصيل النظام والسجل، جاهزة للصق في بلاغ عن خلل.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>نُسخ التقرير.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>احفظ التقرير…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>احفظ التقرير</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>ملفات نصية (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>تعذّرت الكتابة إلى %1.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>حُفظ في %1</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>افتح مجلد السجل</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>تُزال كلمات المرور ورموز الجلسات وعناوين الإنترنت قبل كتابة أي شيء، ولذا يمكن مشاركة هذا كما هو. أما عناوين شبكتك الخاصة فتبقى — وهي عادةً أول خيط للحل.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%1 من %2 سطراً</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>تعذّر فتح مقبس UDP للبحث.</translation>
    </message>
</context>
<context>
    <name>leolink::EventDispatcher</name>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <location filename="../src/EventActions.cpp" line="108"/>
        <source>Command</source>
        <translation>الأمر</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <source>could not be started</source>
        <translation>تعذّر تشغيله</translation>
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
        <translation>عنوان غير صالح</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="163"/>
        <source>Webhook → %1</source>
        <translation>‏Webhook ← %1</translation>
    </message>
</context>
<context>
    <name>leolink::EventLogDialog</name>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="23"/>
        <source>Event log</source>
        <translation>سجل الأحداث</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>كل الكاميرات</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>كل الأحداث</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>حركة</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>مع تسجيل</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>الكاميرا:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>اعرض:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>حدّث</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>متى</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>الحدث</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>الوسائط</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>لا معاينة</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>افتح التسجيل</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>امسح السجل…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>فيديو</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>صورة</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + صورة</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>لم تُسجَّل أحداث بعد</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>تسجيل فقط</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>التسجيل: %1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation> ‏(الملف مفقود)</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>الصورة: %1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>افتح الصورة</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>لا شيء لفتحه</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>لم يعد ملف هذا الحدث موجوداً.</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>امسح سجل الأحداث</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>أتريد حذف تاريخ الأحداث كله؟

تبقى مقاطع الفيديو والصور المسجّلة على القرص — ولا يُمسح سوى السجل.</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>التطبيق</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>واجهة الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>الفيديو</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>أحداث ONVIF</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>الكشف</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>التسجيل</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>إجراءات الأحداث</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>الشبكة</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>واجهة المستخدم</translation>
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
        <translation>أخفق %1: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="111"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>لم تُضبط أي كاميرا بعد.

استخدم «كاميرات…» لإضافة واحدة.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;File</source>
        <translation>&amp;ملف</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="257"/>
        <source>&amp;Cameras…</source>
        <translation>&amp;كاميرات…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="262"/>
        <source>&amp;Settings…</source>
        <translation>الإ&amp;عدادات…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="268"/>
        <source>&amp;Save snapshots…</source>
        <translation>ا&amp;حفظ اللقطات…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="273"/>
        <source>&amp;Record all cameras</source>
        <translation>&amp;سجّل كل الكاميرات</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="280"/>
        <source>&amp;Event log…</source>
        <translation>س&amp;جل الأحداث…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>التسجيلات على ال&amp;كاميرا…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="290"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>تصفّح ما هو مخزّن على بطاقة SD الخاصة بالكاميرا.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="294"/>
        <location filename="../src/MainWindow.cpp" line="727"/>
        <location filename="../src/MainWindow.cpp" line="1794"/>
        <source>No cameras configured</source>
        <translation>لا كاميرات مضبوطة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Which camera</source>
        <translation>أي كاميرا</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Show recordings from</source>
        <translation>أظهر تسجيلات</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="317"/>
        <source>Open &amp;recordings folder</source>
        <translation>افتح مجلد الت&amp;سجيلات</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="325"/>
        <source>&amp;Quit</source>
        <translation>&amp;خروج</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;View</source>
        <translation>&amp;عرض</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="332"/>
        <source>&amp;Full screen</source>
        <translation>&amp;ملء الشاشة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="371"/>
        <source>Show &amp;menu bar</source>
        <translation>أظهر شريط ال&amp;قوائم</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="385"/>
        <source>Show &amp;toolbar</source>
        <translation>أظهر شريط الأ&amp;دوات</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="394"/>
        <source>Show status &amp;bar</source>
        <translation>أظهر شريط الحال&amp;ة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="403"/>
        <source>Hide window &amp;decoration</source>
        <translation>أخفِ إ&amp;طار النافذة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="415"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>اسحب الشريط أسفل إحدى الكاميرات لتحريك النافذة. ويعيد Ctrl+Shift+D الإطار، وCtrl+M القائمة.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Help</source>
        <translation>م&amp;ساعدة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="424"/>
        <source>&amp;Online handbook</source>
        <translation>الدليل على الإ&amp;نترنت</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="431"/>
        <source>&amp;Protocol notes</source>
        <translation>ملاحظات الب&amp;روتوكول</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="437"/>
        <source>&amp;Diagnostics…</source>
        <translation>الت&amp;شخيص…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="440"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>ما الذي فعله leolink والكاميرات — وتقرير يمكن إرفاقه ببلاغ عن خلل.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="444"/>
        <source>&amp;Report a problem</source>
        <translation>أ&amp;بلغ عن مشكلة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>Report a problem</source>
        <translation>أبلغ عن مشكلة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;أرفق تقرير تشخيص&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="453"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>يسجّل ما هو جهازك، وبماذا أجابت الكاميرات، وأين اختل الأمر — مع إزالة كلمات المرور والعناوين مسبقاً. ومن دونه يتعذّر متابعة معظم البلاغات.

إن كانت المشكلة مما يمكنك إحداثه، فشغّل أولاً السجل المفصّل في نافذة التشخيص، ثم أعد إحداثها، ثم انسخ التقرير.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Open diagnostics</source>
        <translation>افتح التشخيص</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="462"/>
        <source>Go to the issue tracker</source>
        <translation>اذهب إلى متتبّع المشكلات</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="473"/>
        <source>&amp;About leolink</source>
        <translation>&amp;عن leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="476"/>
        <source>About leolink</source>
        <translation>عن leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="477"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;عميل أصيل على لينكس لكاميرات Reolink.&lt;/p&gt;&lt;p&gt;يتحدث بروتوكولات الكاميرا نفسها مباشرة: واجهة HTTP وRTSP وONVIF داخل الشبكة المحلية، وخدمة P2P من Reolink حين تريد الوصول إلى كاميرا من مكان آخر.&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;الدليل&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;الشيفرة المصدرية&lt;/a&gt;&lt;/p&gt;&lt;p&gt;لا صلة له بشركة Reolink ولا يحظى بدعمها.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="489"/>
        <source>Main</source>
        <translation>الرئيسي</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="501"/>
        <source>Ready</source>
        <translation>جاهز</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="517"/>
        <source>Leave full screen</source>
        <translation>غادر ملء الشاشة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <location filename="../src/MainWindow.cpp" line="588"/>
        <source>Cameras…</source>
        <translation>كاميرات…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="526"/>
        <source>Event log…</source>
        <translation>سجل الأحداث…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="532"/>
        <location filename="../src/MainWindow.cpp" line="591"/>
        <source>Quit</source>
        <translation>خروج</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="582"/>
        <source>Show window</source>
        <translation>أظهر النافذة</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="751"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>لا كاميرات مباشرة</numerusform><numerusform>كاميرا واحدة مباشرة</numerusform><numerusform>كاميرتان مباشرة</numerusform><numerusform>%n كاميرات مباشرة</numerusform><numerusform>%n كاميرا مباشرة</numerusform><numerusform>%n كاميرا مباشرة</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="960"/>
        <source>Esc leaves full screen</source>
        <translation>‏Esc يغادر ملء الشاشة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="967"/>
        <location filename="../src/MainWindow.cpp" line="1006"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>نقر مزدوج للعودة إلى الشبكة · Esc يغادر ملء الشاشة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1004"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>‏Esc يغادر ملء الشاشة · والنقر المزدوج على كاميرا يملأ بها الشاشة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1029"/>
        <source>Grid view</source>
        <translation>عرض شبكي</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1215"/>
        <location filename="../src/MainWindow.cpp" line="1233"/>
        <location filename="../src/MainWindow.cpp" line="1471"/>
        <source>Cannot create %1</source>
        <translation>تعذّر إنشاء %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1361"/>
        <source>Recording %1</source>
        <translation>يجري تسجيل %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1283"/>
        <location filename="../src/MainWindow.cpp" line="1369"/>
        <source>Saved %1</source>
        <translation>حُفظ %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1375"/>
        <location filename="../src/MainWindow.cpp" line="1506"/>
        <source>Recording stopped</source>
        <translation>توقّف التسجيل</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1382"/>
        <source>%1: %2</source>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1487"/>
        <source>Recording started</source>
        <translation>بدأ التسجيل</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1505"/>
        <source>Recording all cameras</source>
        <translation>يجري تسجيل كل الكاميرات</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1586"/>
        <source>%1 at %2</source>
        <translation>%1 عند %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1606"/>
        <source>Motion detected</source>
        <translation>رُصدت حركة</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1618"/>
        <source>Sound detected</source>
        <translation>رُصد صوت</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1641"/>
        <source>Menu bar hidden</source>
        <translation>شريط القوائم مخفي</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1642"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>مع إخفاء شريط القوائم وشريط الأدوات معاً، اضغط Ctrl+M لاستعادة القائمة.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1661"/>
        <source>Cannot save</source>
        <translation>تعذّر الحفظ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1662"/>
        <source>Settings could not be written to %1.</source>
        <translation>تعذّرت كتابة الإعدادات إلى %1.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1729"/>
        <source>Play through %1</source>
        <translation>شغّل عبر %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1730"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>ملفات صوتية (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;كل الملفات (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1742"/>
        <source>Speaking through the camera…</source>
        <translation>يجري التحدث عبر الكاميرا…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1749"/>
        <source>Finished.</source>
        <translation>انتهى.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1872"/>
        <source>Nothing to capture</source>
        <translation>لا شيء لالتقاطه</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1877"/>
        <source>Save snapshots to</source>
        <translation>احفظ اللقطات في</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="1895"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>لم تُحفظ لقطات</numerusform><numerusform>حُفظت لقطة واحدة</numerusform><numerusform>حُفظت لقطتان</numerusform><numerusform>حُفظت %n لقطات</numerusform><numerusform>حُفظت %n لقطة</numerusform><numerusform>حُفظت %n لقطة</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1913"/>
        <source>Welcome to leolink</source>
        <translation>مرحباً بك في leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1915"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;لم تُضبط أي كاميرا بعد.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1917"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>أضف كاميرا بعنوانها واسم مستخدمها وكلمة مرورها. يتحدث leolink إلى الكاميرا مباشرة داخل شبكتك — دون أي حساب سحابي.&lt;p&gt;ويشرح الدليل ما يفعله كل خيار.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1921"/>
        <source>Add camera…</source>
        <translation>أضف كاميرا…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1922"/>
        <source>Open handbook</source>
        <translation>افتح الدليل</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1998"/>
        <source>leolink is still running</source>
        <translation>‏leolink ما زال يعمل</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1999"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>تواصل الكاميرات التسجيل. استخدم أيقونة منطقة التنبيه للعودة.</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>لا صورة متاحة</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — مناطق الخصوصية</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>اسحب لتحديد أجزاء المشهد التي ينبغي للكاميرا طمسها. فهي تسوّدها قبل أن يغادر الجهاز أي شيء، ولذا تغيب عن الصورة الحية وعن التسجيلات وعن كل برنامج آخر — بما في ذلك تطبيق الشركة المصنّعة.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>أزل الأخيرة</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>أزل الكل</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>يجري جلب صورة من %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>لا صورة: %1 — ما زال بالإمكان رسم المناطق.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%1 من %2 منطقة</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>‏ffmpeg غير مثبت، ولذا يتعذّر كشف الحركة.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>لا عنوان بث لـ %1.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="131"/>
        <source>Motion detection stopped: %1</source>
        <translation>توقّف كشف الحركة: %1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="156"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>تعذّر تشغيل ffmpeg لكشف الحركة.</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="157"/>
        <source>ONVIF subscription failed.</source>
        <translation>أخفق الاشتراك عبر ONVIF.</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>لم يُضبط وسيط MQTT أو موضوعه.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>لم يستجب وسيط MQTT.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>‏MQTT: %1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>‏MQTT: رد غير متوقع من الوسيط.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>رفض MQTT الاتصال: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — التسجيلات على الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>البث الرئيسي</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>البث الفرعي</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>ابحث</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>من</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>إلى</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>البداية</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>المدة</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>الحجم</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>الملف</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>شغّل</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>نزّل…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>اختر فترة واضغط «ابحث». ولا توجد تسجيلات إلا إذا كانت في الكاميرا بطاقة SD مركّبة.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>يجري سؤال %1…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>لم يُعثر على شيء في تلك الفترة. فإما أنه لم يُسجَّل شيء، وإما أن الكاميرا بلا بطاقة SD.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>لم تُوجد تسجيلات.</numerusform><numerusform>وُجد تسجيل واحد.</numerusform><numerusform>وُجد تسجيلان.</numerusform><numerusform>وُجدت %n تسجيلات.</numerusform><numerusform>وُجد %n تسجيلاً.</numerusform><numerusform>وُجد %n تسجيل.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>لا جلسة مع الكاميرا — ابحث أولاً.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>لا مشغّل</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>لم يُعثر على mpv. والتسجيل موجود في:

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>احفظ التسجيل</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>تعذّرت الكتابة إلى %1.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>حُفظ في %1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>أخفق التنزيل: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>الإعدادات</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>النافذة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>عند الحركة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>ردود الفعل</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>التسجيلات</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>الفيديو</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>عام</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>أظهر شريط القوائم</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>‏Ctrl+M يبدّل هذا في أي وقت.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>أظهر شريط الأدوات</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>أظهر شريط الحالة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>أخفِ إطار النافذة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>لشاشات الحائط. يبدّله Ctrl+Shift+D.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>المظهر</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>أظهر أيقونة في منطقة التنبيه</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>إغلاق النافذة يخفيها بدل الخروج</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>التصغير يخفي النافذة في منطقة التنبيه</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>منطقة التنبيه</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>لوّن البطاقة بالأحمر لحظةً</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>حتى تكفي نظرة واحدة إلى جدار من الكاميرات لمعرفة أيها كانت.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> ms</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>شغّل صوتاً</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>فارغ: صوت التنبيه الخاص بسطح المكتب</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>استعراض…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>الصوت المراد تشغيله</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>ملفات صوتية (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;كل الملفات (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>لمدة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>ملف الصوت</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>على الشاشة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>أظهر النافذة عند رصد حركة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>الحجم السابق</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>ملء الشاشة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>العودة بهيئة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>النافذة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>أي الكاميرات يثير حدثاً أصلاً وكيف، يُضبط لكل كاميرا تحت الكاميرات ▸ الإعدادات ▸ الكشف بواسطة leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>ما يفعله leolink حين تبلّغ كاميرا عن شيء. وتتبع الكاميرا هذه الإعدادات ما لم يقل حوارها الخاص غير ذلك — كلها أو لا شيء منها، ولا نصفها أبداً: فالإعدادات الموروثة جزئياً هي أصعب ما يُتتبَّع حين لا يعمل شيء.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>مجلد التسجيلات</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>التسجيلات واللقطات</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>تُكتب التسجيلات بصيغة Matroska دون إعادة ترميز: فتحتفظ الصورة بجودة الكاميرا الأصلية ويبقى المعالج شبه خامل.

أما إن كانت الكاميرا تسجّل أصلاً فذلك إعدادها الخاص، تحت الكاميرات ▸ الإعدادات ▸ ردود الفعل.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>عتاد (مستحسن)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>عتاد، باختيار المشغّل</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>عتاد، مع نسخ الإطارات</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="292"/>
        <source>Software only</source>
        <translation>برمجياً فقط</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="294"/>
        <source>“Recommended” names the decoder explicitly so that decoding and drawing stay on the same graphics API. Left to itself, mpv may decode through one API and draw through another, which on some cards turns the picture solid green.

If the picture is broken, try the others in turn. “Software only” always works but costs a whole processor core at full resolution.</source>
        <translation>يسمّي «المستحسن» المفكِّك صراحةً كي يبقى فك الترميز والرسم على واجهة الرسوميات نفسها. فإن تُرك mpv وشأنه فقد يفك الترميز بواجهة ويرسم بأخرى، وهو ما يجعل الصورة على بعض البطاقات خضراء صمّاء.

فإن جاءت الصورة معطوبة، فجرّب البقية واحداً تلو الآخر. أما «برمجياً فقط» فيعمل دائماً، لكنه يكلّف نواة معالج كاملة عند الدقة القصوى.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>فضّل الكمون المنخفض على انسيابية العرض</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>يُبقي التخزين المؤقت عند حده الأدنى. أطفئه إن تقطّع بث عالي معدل البت على شبكة مزدحمة.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>فك الترميز</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>لغة النظام</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>اللغة</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>يسري بعد إعادة تشغيل leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>سجل مفصّل</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>يسجّل كل طلب يُرسل إلى الكاميرا، وكل قرار يتخذه المفكِّك، وكل إعادة اتصال، في ‎~/.local/share/leolink/leolink.log‎.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>افتح التشخيص…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>الأخطاء والتحذيرات تُسجَّل دائماً. ويضيف السجل المفصّل الحوار الدائر مع الكاميرا — شغّله عندما يحدث خلل، وأعد إحداثه، ثم أرسل التقرير من «مساعدة ▸ التشخيص». تُزال كلمات المرور ورموز الجلسات قبل كتابة أي شيء.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>التشخيص</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>‏ffmpeg غير مثبت، ولذا يتعذّر التسجيل.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>لا عنوان بث لـ %1.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="102"/>
        <source>Recording failed: %1</source>
        <translation>أخفق التسجيل: %1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="134"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>لم ينتج التسجيل أي بيانات (خرج ffmpeg بالرمز %1).</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="150"/>
        <source>Could not start ffmpeg.</source>
        <translation>تعذّر تشغيل ffmpeg.</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="121"/>
        <source>File format not recognised.</source>
        <translation>صيغة الملف غير معروفة.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="122"/>
        <source>Invalid input.</source>
        <translation>مُدخل غير صالح.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="123"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>لا توجد لدى الكاميرا جلسات شاغرة. فهي لا تسمح إلا بحفنة منها في آن واحد، وهي مشتركة مع تطبيق الهاتف وصفحتها على الويب. أغلق تلك، أو انتظر دقيقة حتى تنقضي القديمة.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="127"/>
        <source>Session expired.</source>
        <translation>انتهت صلاحية الجلسة.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="128"/>
        <source>Wrong user name or password.</source>
        <translation>اسم المستخدم أو كلمة المرور خطأ.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="129"/>
        <source>Timed out.</source>
        <translation>انتهت المهلة.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="130"/>
        <source>This firmware does not support that command.</source>
        <translation>لا تدعم هذه البرمجية الثابتة ذلك الأمر.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="131"/>
        <source>Could not read the configuration.</source>
        <translation>تعذّرت قراءة الإعدادات.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="132"/>
        <source>Could not verify the configuration.</source>
        <translation>تعذّر التحقق من الإعدادات.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="133"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>لم يُجب جزء من الكاميرا. وبحسب ما سُئل عنه، يعني ذلك أنه لا توجد بطاقة SD مركّبة، أو أن الكاميرا لا منفذ لها إلى الإنترنت.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="136"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>غير مسموح — هذا الطراز يفتقر إلى العتاد اللازم.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="137"/>
        <source>Account invalid, log in again.</source>
        <translation>الحساب غير صالح، سجّل الدخول من جديد.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="138"/>
        <source>User name already taken.</source>
        <translation>اسم المستخدم مأخوذ سلفاً.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="139"/>
        <source>Maximum number of users reached.</source>
        <translation>بُلغ الحد الأقصى لعدد المستخدمين.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="140"/>
        <source>Camera busy, try again shortly.</source>
        <translation>الكاميرا مشغولة، أعد المحاولة بعد قليل.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="141"/>
        <source>IP address conflict.</source>
        <translation>تعارض في عناوين IP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="142"/>
        <source>Configuration test failed.</source>
        <translation>أخفق اختبار الإعدادات.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="143"/>
        <source>FTP login failed.</source>
        <translation>أخفق تسجيل الدخول إلى FTP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="144"/>
        <source>FTP could not create the directory.</source>
        <translation>تعذّر على FTP إنشاء الدليل.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="145"/>
        <source>FTP upload failed.</source>
        <translation>أخفق الرفع عبر FTP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="146"/>
        <source>FTP could not reach the server.</source>
        <translation>تعذّر على FTP الوصول إلى الخادوم.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="147"/>
        <source>Camera reported error %1.</source>
        <translation>أبلغت الكاميرا عن الخطأ %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="348"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>لا تجيب الكاميرا على الطلبات في هذه اللحظة. تفعل ذلك حين تتلقى الكثير منها دفعة واحدة؛ وتتعافى من تلقاء نفسها بعد برهة.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="355"/>
        <source>Cannot reach %1: %2</source>
        <translation>تعذّر الوصول إلى %1: %2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="369"/>
        <source>Unexpected reply from %1.</source>
        <translation>رد غير متوقع من %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="472"/>
        <source>Login returned no token.</source>
        <translation>لم يُعِد تسجيل الدخول أي رمز.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="511"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — البرمجية الثابتة %2، %3 قناة</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="776"/>
        <source>The camera could not join that network: %1</source>
        <translation>تعذّر على الكاميرا الانضمام إلى تلك الشبكة: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="786"/>
        <source>E-mail</source>
        <translation>البريد الإلكتروني</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="796"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="836"/>
        <source>Update available: %1</source>
        <translation>يتوفر تحديث: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="837"/>
        <source>The firmware is up to date.</source>
        <translation>البرمجية الثابتة محدّثة.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="854"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>يجري التحديث. ستعيد الكاميرا التشغيل من تلقاء نفسها وتتعذّر مخاطبتها عدة دقائق. لا تقطع عنها التيار.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="987"/>
        <source>Snapshot failed.</source>
        <translation>أخفقت اللقطة.</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>الأسبوع كله</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>أبداً</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>ليلاً</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>ساعات العمل</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>عطلات نهاية الأسبوع</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>اعكس</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>من 22:00 إلى 06:00، كل يوم.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>من 08:00 إلى 17:00، من الاثنين إلى الجمعة.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>لم يُحدَّد شيء — لن يعمل هذا أبداً.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>مفعّل دائماً.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>لا ساعات في الأسبوع.</numerusform><numerusform>ساعة واحدة في الأسبوع.</numerusform><numerusform>ساعتان في الأسبوع.</numerusform><numerusform>%n ساعات في الأسبوع.</numerusform><numerusform>%n ساعة في الأسبوع.</numerusform><numerusform>%n ساعة في الأسبوع.</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>لا تقدّم هذه الكاميرا هذه الإعدادات.</translation>
    </message>
</context>
<context>
    <name>leolink::SegmentBuffer</name>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="81"/>
        <source>ffmpeg is not installed, so continuous recording is unavailable.</source>
        <translation>‏ffmpeg غير مثبت، ولذا يتعذّر التسجيل دون توقف.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="86"/>
        <source>No stream address for %1.</source>
        <translation>لا عنوان بث لـ %1.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="90"/>
        <location filename="../src/SegmentBuffer.cpp" line="279"/>
        <source>Cannot write to %1.</source>
        <translation>تعذّرت الكتابة إلى %1.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="255"/>
        <source>Nothing had been buffered yet.</source>
        <translation>لم يكن قد خُزِّن شيء بعد.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="270"/>
        <source>That moment is no longer in the buffer.</source>
        <translation>تلك اللحظة لم تعد في المخزن المؤقت.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="325"/>
        <source>The recording could not be cut out of the buffer.</source>
        <translation>تعذّر اقتطاع التسجيل من المخزن المؤقت.</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="34"/>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <source>Cameras</source>
        <translation>الكاميرات</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="41"/>
        <source>Layout</source>
        <translation>التخطيط</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="80"/>
        <source>Add</source>
        <translation>أضف</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="81"/>
        <source>Remove</source>
        <translation>أزل</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="85"/>
        <source>Scan network…</source>
        <translation>افحص الشبكة…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="87"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>يسأل الشبكة عن كاميرات ONVIF الموجودة. ويُرسَل استعلام بث متعدد واحد؛ أما الأجهزة التي تلزم الصمت فلا يُتصل بها أبداً.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="102"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>‏192.168.1.10 أو camera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="107"/>
        <source>optional: pass show reolink/hall</source>
        <translation>اختياري: pass show reolink/madkhal</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="109"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>إن ضُبط، نُفِّذ هذا الأمر واستُخدم خرجه كلمةَ مرور. وبذلك يبقى السر خارج ملف الإعدادات.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="112"/>
        <source>optional, for P2P access</source>
        <translation>اختياري، للوصول عبر P2P</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="117"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>أي عنوان تستطيع libmpv فتحه. استخدمه لكاميرات الشركات الأخرى، أو بث مسجّل شبكي، أو ملف محلي.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="121"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>البث الفرعي (نطاق ترددي قليل)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="122"/>
        <source>Main stream (full resolution)</source>
        <translation>البث الرئيسي (دقة كاملة)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="126"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>‏HTTP-FLV (كمون أقل)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan (بروتوكول الكاميرا الخاص)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <location filename="../src/SettingsDialog.cpp" line="150"/>
        <source>Custom URL</source>
        <translation>عنوان مخصص</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>يناسب RTSP معظم الكاميرات وهو ما ينبغي تجربته أولاً.

ولا يحتاج HTTP-FLV سوى المنفذ 80، وهو ما يفيد حيث يكون RTSP محجوباً.

أما Baichuan فهو ما يتحدثه تطبيق Reolink نفسه. وهو الجواب للكاميرات التي تُبقي RTSP مطفأً — والطرازات العاملة بالبطارية تفعل ذلك — ولا يستهلك أياً من جلسات الويب القليلة لدى الكاميرا. فيديو فقط: أما الصوت فما زال يأتي عبر RTSP.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="138"/>
        <source>Use HTTPS for the control API</source>
        <translation>استخدم HTTPS لواجهة التحكم</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="139"/>
        <source>Show this camera</source>
        <translation>أظهر هذه الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="142"/>
        <source>Name</source>
        <translation>الاسم</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="143"/>
        <source>Host</source>
        <translation>العنوان</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="144"/>
        <source>User</source>
        <translation>المستخدم</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="145"/>
        <source>Password</source>
        <translation>كلمة المرور</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="146"/>
        <source>Password command</source>
        <translation>أمر كلمة المرور</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="147"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="148"/>
        <source>Stream</source>
        <translation>البث</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="149"/>
        <source>Transport</source>
        <translation>النقل</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>Test connection</source>
        <translation>اختبر الاتصال</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Settings for this camera…</source>
        <translation>إعدادات هذه الكاميرا…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>الكشف وردود الفعل والتسجيل في leolink، ومرمِّز الكاميرا نفسها وصورتها وجداولها.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>automatic</source>
        <translation>تلقائي</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="224"/>
        <source>Columns</source>
        <translation>الأعمدة</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="225"/>
        <source>Rows</source>
        <translation>الصفوف</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="227"/>
        <source>Grid size</source>
        <translation>حجم الشبكة</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="252"/>
        <source>Row</source>
        <translation>الصف</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="253"/>
        <source>Column</source>
        <translation>العمود</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="254"/>
        <source>Row span</source>
        <translation>امتداد الصفوف</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="255"/>
        <source>Column span</source>
        <translation>امتداد الأعمدة</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="257"/>
        <source>Position of the selected camera</source>
        <translation>موضع الكاميرا المحددة</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="268"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>اترك الصف والعمود على «تلقائي» لتملأ الكاميرات الشبكة بالترتيب. ويتيح الامتداد لكاميرا واحدة أن تشغل عدة خلايا.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="421"/>
        <source>New camera</source>
        <translation>كاميرا جديدة</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="436"/>
        <source>Remove camera</source>
        <translation>أزل الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="437"/>
        <source>Remove “%1” from the list?</source>
        <translation>أتريد إزالة «%1» من القائمة؟</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="457"/>
        <source>Enter a host first.</source>
        <translation>أدخل عنواناً أولاً.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="464"/>
        <source>Contacting %1…</source>
        <translation>يجري الاتصال بـ %1…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Looking for cameras…</source>
        <translation>يجري البحث عن كاميرات…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Stop</source>
        <translation>أوقف</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="488"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>لم تُوجد أجهزة…</numerusform><numerusform>وُجد جهاز واحد…</numerusform><numerusform>وُجد جهازان…</numerusform><numerusform>وُجدت %n أجهزة…</numerusform><numerusform>وُجد %n جهازاً…</numerusform><numerusform>وُجد %n جهاز…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="498"/>
        <source>No cameras found</source>
        <translation>لم تُوجد كاميرات</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="499"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>لم يُجب أي جهاز ONVIF.

لا تجيب الكاميرات إلا إذا كان ONVIF مشغَّلاً، والاستعلام لا يعبر الموجّهات ولا معظم الشبكات الخاصة الافتراضية. وما زال بإمكانك إضافة كاميرا بكتابة عنوانها.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="525"/>
        <source>unnamed device</source>
        <translation>جهاز بلا اسم</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="526"/>
        <source> (Reolink)</source>
        <translation> ‏(Reolink)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="527"/>
        <source>  · already added</source>
        <translation>  · مضافة من قبل</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="533"/>
        <source>Cameras found</source>
        <translation>وُجدت كاميرات</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="534"/>
        <source>Add which one?</source>
        <translation>أيها تضيف؟</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="577"/>
        <source>Incomplete camera</source>
        <translation>كاميرا ناقصة</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="578"/>
        <source>“%1” has no host address.</source>
        <translation>‏«%1» بلا عنوان.</translation>
    </message>
</context>
<context>
    <name>leolink::SignalIndicator</name>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="53"/>
        <source>Wi-Fi</source>
        <translation>الواي‌فاي</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="54"/>
        <source>Mobile data</source>
        <translation>بيانات الجوال</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>سلكي</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>الاتصال</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — القوة غير معروفة</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %2 من %3</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>تعذّر الوصول إلى الكاميرا: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>لم تُجب الكاميرا على منفذ RTSP.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="159"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>يلزم ffmpeg لإرسال الصوت، ولم يتمكن من العمل.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="272"/>
        <source>The camera rejected the user name or password.</source>
        <translation>رفضت الكاميرا اسم المستخدم أو كلمة المرور.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="281"/>
        <source>The camera refused: %1</source>
        <translation>رفضت الكاميرا: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="316"/>
        <source>This camera does not offer a speaker.</source>
        <translation>لا تقدّم هذه الكاميرا مكبّر صوت.</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>انتهى البث (%1) — تجري إعادة الاتصال</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>إشارة ضعيفة</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>بث معطوب</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>لا إطارات معطوبة في الثواني العشر الأخيرة.

وعادةً ما يكون السبب إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما يستطيع — وهذا ما عجز عنه.</numerusform><numerusform>إطار واحد معطوب في الثواني العشر الأخيرة.

وعادةً ما يكون السبب إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما يستطيع — وهذا ما عجز عنه.</numerusform><numerusform>إطاران معطوبان في الثواني العشر الأخيرة.

وعادةً ما يكون السبب إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما يستطيع — وهذا ما عجز عنه.</numerusform><numerusform>%n إطارات معطوبة في الثواني العشر الأخيرة.

وعادةً ما يكون السبب إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما يستطيع — وهذا ما عجز عنه.</numerusform><numerusform>%n إطاراً معطوباً في الثواني العشر الأخيرة.

وعادةً ما يكون السبب إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما يستطيع — وهذا ما عجز عنه.</numerusform><numerusform>%n إطار معطوب في الثواني العشر الأخيرة.

وعادةً ما يكون السبب إشارة واي‌فاي ضعيفة، أو معدل بت أقل مما تحتاجه الدقة. يصلح leolink ما يستطيع — وهذا ما عجز عنه.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>يجري الاتصال…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="703"/>
        <source>Mute this camera</source>
        <translation>اكتم هذه الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="306"/>
        <source>Volume</source>
        <translation>شدة الصوت</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <location filename="../src/VideoTile.cpp" line="1007"/>
        <source>Record this camera</source>
        <translation>سجّل هذه الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="985"/>
        <source>Speak through the camera</source>
        <translation>تحدّث عبر الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>إعدادات الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="455"/>
        <source>no host configured</source>
        <translation>لا عنوان مضبوط</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="529"/>
        <source>connecting over Baichuan…</source>
        <translation>يجري الاتصال عبر Baichuan…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="552"/>
        <location filename="../src/VideoTile.cpp" line="938"/>
        <source>custom stream</source>
        <translation>بث مخصص</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="554"/>
        <location filename="../src/VideoTile.cpp" line="940"/>
        <source>main stream</source>
        <translation>البث الرئيسي</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="555"/>
        <location filename="../src/VideoTile.cpp" line="941"/>
        <source>sub stream</source>
        <translation>البث الفرعي</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="702"/>
        <source>Unmute this camera</source>
        <translation>ألغِ كتم هذه الكاميرا</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="720"/>
        <source>MOTION</source>
        <translation>حركة</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="838"/>
        <location filename="../src/VideoTile.cpp" line="858"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>الكاميرا تعيد ضبط نفسها… %1 ث</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="860"/>
        <source>camera is reconfiguring…</source>
        <translation>الكاميرا تعيد ضبط نفسها…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="913"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>انقطع البث — تجري إعادة الاتصال (%1)</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="944"/>
        <source>%1 fps</source>
        <translation>%1 إطار/ث</translation>
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
        <translation>أوقف التحدث</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1006"/>
        <source>Stop recording</source>
        <translation>أوقف التسجيل</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — مناطق الحركة</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>اسحب فوق الصورة لاختيار ما يُراقَب. وتُهمَل المناطق المعتمة — وهو مفيد لطريق عند حافة المشهد، أو شجرة تتحرك في الريح، أو مدخل بيت جار.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>راقب الكل</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>تجاهل الكل</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>اعكس</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>ارسم</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>راقب مستطيلاً</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>تجاهل مستطيلاً</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>اسحب فوق الخلايا فُرادى.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>اسحب مستطيلاً لمراقبته. ويؤدي Shift مع السحب الغرض نفسه دون تغيير الأداة.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>اسحب مستطيلاً لتجاهله. ويؤدي Ctrl مع السحب الغرض نفسه دون تغيير الأداة.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>يجري جلب صورة من %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>لا صورة: %1 — ما زال بالإمكان ضبط المناطق.</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>لا صورة متاحة</translation>
    </message>
</context>
</TS>
