<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="hi" sourcelanguage="en">
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n कैमरे का नाम · %h पता · %t समय · %e घटना · %s चालू/बंद · %f रिकॉर्डिंग · %p चित्र</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>एक आदेश चलाएँ</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="41"/>
        <location filename="../src/ActionEditor.cpp" line="44"/>
        <source>Command</source>
        <translation>आदेश</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="50"/>
        <source>Call a webhook</source>
        <translation>एक वेबहुक बुलाएँ</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>खाली छोड़ने पर leolink घटना का वर्णन करता एक छोटा JSON दस्तावेज़ भेजता है।</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>पता</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>विधि</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>मुख्य भाग</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>एक MQTT संदेश प्रकाशित करें</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>खाली छोड़ने पर: वही JSON दस्तावेज़ जो वेबहुक भेजता है।</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>अंतिम संदेश ब्रोकर पर बनाए रखें</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>बाद में जुड़ने वाले क्लाइंट को अगली घटना का इंतज़ार किए बिना मौजूदा स्थिति तुरंत पता चल जाती है। घर के स्वचालन को आमतौर पर यही चाहिए।</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>ब्रोकर</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>पोर्ट</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>विषय</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>उपयोक्ता</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>पासवर्ड</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>पेलोड</translation>
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
        <translation>ffmpeg स्थापित नहीं है, इसलिए ध्वनि-पहचान संभव नहीं।</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>%1 के लिए कोई स्ट्रीम पता नहीं।</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="101"/>
        <source>Sound detection stopped: %1</source>
        <translation>ध्वनि-पहचान रुक गई: %1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="106"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>ध्वनि-पहचान के लिए ffmpeg चालू नहीं हो सका।</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="52"/>
        <source>Cannot open a local port: %1</source>
        <translation>स्थानीय पोर्ट नहीं खुल सका: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="64"/>
        <source>Baichuan login failed: %1</source>
        <translation>Baichuan लॉगिन विफल: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="72"/>
        <source>The camera refused to send video: %1</source>
        <translation>कैमरे ने वीडियो भेजने से मना किया: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="80"/>
        <source>The player did not connect.</source>
        <translation>प्लेयर जुड़ा ही नहीं।</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="132"/>
        <source>The camera stopped sending.</source>
        <translation>कैमरे ने भेजना बंद कर दिया।</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="77"/>
        <source>Camera</source>
        <translation>कैमरा</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="124"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="132"/>
        <source>Reading settings from %1…</source>
        <translation>%1 से सेटिंग पढ़ी जा रही हैं…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="137"/>
        <source>Apply to camera</source>
        <translation>कैमरे पर लागू करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="168"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>दोबारा चालू हो रहा है। कैमरा करीब एक मिनट में लौट आएगा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="184"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>सहेजा गया। कैमरा दोबारा जुड़ रहा है और जल्दी ही लौट आएगा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="190"/>
        <source>%1: the camera reported success.</source>
        <translation>%1: कैमरे ने सफलता बताई।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="198"/>
        <source>Processor load %1 %</source>
        <translation>प्रोसेसर भार %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="203"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>एन्कोडर उत्पादन %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="205"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>नेटवर्क प्रवाह %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="207"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>कैमरा अपनी सीमा पर है। रिज़ॉल्यूशन या फ़्रेम दर घटाने से वह सँभल जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="227"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Administrator</source>
        <translation>प्रशासक</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Viewer</source>
        <translation>दर्शक</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="253"/>
        <source>Done.</source>
        <translation>हो गया।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="258"/>
        <source>The card has been formatted.</source>
        <translation>कार्ड फ़ॉर्मैट हो गया।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="560"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>ऊँचा मतलब बेहतर चित्र और अधिक नेटवर्क भार। कैमरा केवल वही दरें देता है जिन्हें वह सचमुच सँभाल सकता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="564"/>
        <source>Resolution</source>
        <translation>रिज़ॉल्यूशन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="565"/>
        <source>Frame rate</source>
        <translation>फ़्रेम दर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="566"/>
        <source>Bit rate (kbit/s)</source>
        <translation>बिटरेट (kbit/s)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="567"/>
        <source>H.264 profile</source>
        <translation>H.264 प्रोफ़ाइल</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="575"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>ये कैमरे को ही बदलते हैं, इसलिए परिणाम हर क्लाइंट को दिखता है। विकल्प कैमरे से आते हैं और मॉडल-दर-मॉडल बदलते हैं।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="588"/>
        <source>Send sound</source>
        <translation>ध्वनि भेजें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="591"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>कैमरे का माइक्रोफ़ोन। इसके बंद रहने पर भी वह स्ट्रीम में एक ऑडियो ट्रैक डालता है — पूरी तरह मौन, जिसे पहचानना ट्रैक के बिल्कुल न होने से कहीं कठिन है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="431"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Sound</source>
        <translation>ध्वनि</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>leolink में</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="111"/>
        <source>In the camera</source>
        <translation>कैमरे में</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="127"/>
        <source>Try again</source>
        <translation>फिर कोशिश करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="331"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>कैमरा स्वयं (ONVIF)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="333"/>
        <source>leolink watches the picture</source>
        <translation>leolink चित्र देखकर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="335"/>
        <source>Either of the two</source>
        <translation>दोनों में से कोई भी</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="336"/>
        <source>Do not watch</source>
        <translation>निगरानी न करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="345"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;कैमरा स्वयं बताता है:&lt;/b&gt; कैमरे का अपना संसूचक तय करता है और एक ONVIF घटना भेजता है। वह क्या देखता है और कितनी आसानी से चलता है, यह नीचे «पहचान» में — कैमरे के भीतर ही — तय होता है।&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink चित्र देखता है:&lt;/b&gt; यह कंप्यूटर उप-स्ट्रीम से एक दूसरा संयोजन खोलकर चित्र का विश्लेषण करता है। हर कैमरे के साथ चलता है, उनके साथ भी जो कुछ नहीं बताते — और तब कैमरे के अपने संसूचक की कोई भूमिका नहीं रहती।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="356"/>
        <source>Choose what is watched…</source>
        <translation>चुनें कि किस पर नज़र रखी जाए…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="364"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>चित्र के किसी बिंदु को गिनती में आने के लिए कितना बदलना चाहिए। ऊँचा होने पर अधिक पकड़ में आता है, छाया और बारिश भी।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="369"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="372"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>देखे जा रहे क्षेत्र का कितना हिस्सा बदले कि वह गति गिनी जाए। 20 ‰ यानी चित्र का दो प्रतिशत — मोटे तौर पर मध्यम दूरी पर खड़ा एक व्यक्ति।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="377"/>
        <source>Motion comes from</source>
        <translation>गति की सूचना देता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="380"/>
        <source>How leolink learns of motion</source>
        <translation>leolink को गति का पता कैसे चलता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="386"/>
        <source>Minimum area</source>
        <translation>न्यूनतम क्षेत्रफल</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="388"/>
        <source>When leolink watches the picture</source>
        <translation>जब leolink चित्र देखता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="399"/>
        <source>Raise an event on sound</source>
        <translation>ध्वनि पर घटना दर्ज करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="402"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>माइक्रोफ़ोन वाला कैमरा चाहिए। उप-स्ट्रीम तक एक और संयोजन खोलता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="407"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="410"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 dB लगभग सन्नाटा है, -20 dB पास में ऊँची आवाज़।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="414"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="457"/>
        <source> s</source>
        <translation> से</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="417"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>शोर थमने के बाद भी घटना को बनाए रखता है, ताकि एक ही भौंक चार बार दर्ज न हो।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="428"/>
        <source>Sound above</source>
        <translation>इससे तेज़ ध्वनि</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="429"/>
        <source>Hold for</source>
        <translation>इतनी देर बनाए रखें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="442"/>
        <source>Detection by leolink</source>
        <translation>leolink द्वारा पहचान</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="449"/>
        <source>Record while motion lasts</source>
        <translation>जब तक गति रहे तब तक रिकॉर्ड करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="452"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>सीधे प्रसारण से इसी कंप्यूटर पर रिकॉर्ड करता है, इसलिए यह तब भी चलता है जब कैमरे में SD कार्ड न हो।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="468"/>
        <source>Recording on this computer</source>
        <translation>इस कंप्यूटर पर रिकॉर्डिंग</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="472"/>
        <source>Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>फ़ाइलें कहाँ जाती हैं, यह हर कैमरे के लिए एक ही है और सेटिंग ▸ रिकॉर्डिंग के नीचे तय होता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="479"/>
        <source>Follow the defaults under Settings</source>
        <translation>सेटिंग में दी गई प्रविष्टियों का पालन करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="480"/>
        <source>Use this camera&apos;s own</source>
        <translation>इस कैमरे की अपनी प्रविष्टियाँ लें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="493"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="504"/>
        <source>Reactions</source>
        <translation>प्रतिक्रियाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="495"/>
        <source>What happens on an event</source>
        <translation>किसी घटना पर क्या होता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="511"/>
        <source>Muted</source>
        <translation>मौन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="526"/>
        <source>Volume</source>
        <translation>ध्वनि-मात्रा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="528"/>
        <source>Sound in leolink</source>
        <translation>leolink में ध्वनि</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="532"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>यही दो नियंत्रण कैमरे की अपनी टाइल पर भी हैं, जहाँ वे जल्दी हाथ आते हैं। कैमरे मौन से शुरू होते हैं: कैमरों की एक पूरी दीवार खोलने पर कमरा हर एक की आवाज़ से नहीं भर जाना चाहिए।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="542"/>
        <source>Playback</source>
        <translation>प्लेबैक</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="602"/>
        <source>Main stream</source>
        <translation>मुख्य स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="603"/>
        <source>Sub stream</source>
        <translation>उप-स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="608"/>
        <source>Video</source>
        <translation>वीडियो</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="622"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2130"/>
        <source>Brightness</source>
        <translation>चमक</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="623"/>
        <source>Contrast</source>
        <translation>कंट्रास्ट</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="624"/>
        <source>Saturation</source>
        <translation>संतृप्ति</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="625"/>
        <source>Sharpness</source>
        <translation>तीक्ष्णता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="626"/>
        <source>Hue</source>
        <translation>रंगत</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="628"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>Picture</source>
        <translation>चित्र</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="638"/>
        <source>Exposure and orientation</source>
        <translation>एक्सपोज़र और दिशा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="640"/>
        <source>Day / night</source>
        <translation>दिन / रात</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="641"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>«स्वतः» रोशनी घटने के साथ इन्फ़्रारेड पर चला जाता है। रात में रंग की ज़िद करने पर चित्र इतना गहरा हो जाता है कि काम का नहीं रहता; दिन में श्वेत-श्याम की ज़िद रंग यूँ ही गँवा देती है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="646"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="676"/>
        <source>Automatic</source>
        <translation>स्वतः</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="647"/>
        <source>Always colour</source>
        <translation>हमेशा रंगीन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="648"/>
        <source>Always black and white</source>
        <translation>हमेशा श्वेत-श्याम</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="649"/>
        <source>Anti-flicker</source>
        <translation>टिमटिमाहट रोकें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="650"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>अपनी बिजली की आवृत्ति से मिलाएँ — यूरोप में 50 Hz — वरना भीतर की रोशनी शटर से टकराएगी और चित्र धड़केगा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="654"/>
        <source>Exposure</source>
        <translation>एक्सपोज़र</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="655"/>
        <source>Mirror</source>
        <translation>दर्पण</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="656"/>
        <source>Flip</source>
        <translation>उलटें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="657"/>
        <source>For a camera mounted upside down.</source>
        <translation>उल्टा लगाए गए कैमरे के लिए।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="658"/>
        <source>Backlight compensation</source>
        <translation>बैकलाइट क्षतिपूर्ति</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="659"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>तब काम आता है जब विषय किसी चमकीली खिड़की या आसमान के सामने खड़ा हो।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="661"/>
        <source>Noise reduction</source>
        <translation>शोर घटाना</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="662"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>गहरे चित्र को साफ़ करता है, पर हिलती हुई हर चीज़ धुँधली पड़ जाती है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="664"/>
        <source>Rotation</source>
        <translation>घुमाव</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="665"/>
        <source>Dynamic contrast</source>
        <translation>गतिशील कंट्रास्ट</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="669"/>
        <source>Infrared illumination</source>
        <translation>इन्फ़्रारेड रोशनी</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="671"/>
        <source>Infrared lamps</source>
        <translation>इन्फ़्रारेड लैंप</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="672"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>«स्वतः» अंधेरा होने पर उन्हें जला देता है। यदि कैमरा शीशे के पार देखता है तो उन्हें बंद कर दें — परावर्तन उसे अंधा कर देता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="677"/>
        <source>Always on</source>
        <translation>हमेशा चालू</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="678"/>
        <source>Always off</source>
        <translation>हमेशा बंद</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1793"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2072"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2084"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2100"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <source>User</source>
        <translation>उपयोक्ता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>Rights</source>
        <translation>अधिकार</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="699"/>
        <source>Add…</source>
        <translation>जोड़ें…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="700"/>
        <source>Change password…</source>
        <translation>पासवर्ड बदलें…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="701"/>
        <source>Delete</source>
        <translation>मिटाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="715"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>ये कैमरे के खाते हैं, leolink के नहीं। दर्शक खाता देख सकता है पर कुछ बदल नहीं सकता — जहाँ केवल चित्र देखना हो वहाँ इसका उपयोग करने लायक है, ताकि सहेजा हुआ पासवर्ड कैमरे की सेटिंग के विरुद्ध न मोड़ा जा सके।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="732"/>
        <source>Users</source>
        <translation>उपयोक्ता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>New user</source>
        <translation>नया उपयोक्ता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <source>User name</source>
        <translation>उपयोक्ता-नाम</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <source>Password for %1</source>
        <translation>%1 का पासवर्ड</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Creating %1…</source>
        <translation>%1 बनाया जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>Change password</source>
        <translation>पासवर्ड बदलें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>New password for %1</source>
        <translation>%1 का नया पासवर्ड</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>This is the account leolink uses</source>
        <translation>यही वह खाता है जिसे leolink इस्तेमाल करता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="781"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>इसे यहाँ बदलेंगे तो leolink तब तक बाहर रहेगा जब तक नया पासवर्ड कैमरे के नीचे भी दर्ज न कर दिया जाए।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="785"/>
        <source>Changing the password for %1…</source>
        <translation>%1 का पासवर्ड बदला जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="798"/>
        <source>Cannot delete this account</source>
        <translation>यह खाता मिटाया नहीं जा सकता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink «%1» के रूप में जुड़ा है। इसे मिटाने से इस कैमरे का संयोजन तुरंत टूट जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="804"/>
        <source>Delete user</source>
        <translation>उपयोक्ता मिटाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="805"/>
        <source>Delete “%1” from the camera?</source>
        <translation>«%1» को कैमरे से मिटाएँ?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="809"/>
        <source>Deleting %1…</source>
        <translation>%1 मिटाया जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="816"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1224"/>
        <source>Format the SD card</source>
        <translation>SD कार्ड फ़ॉर्मैट करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="818"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 के कार्ड पर मौजूद सब कुछ मिटा दें?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="821"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>कार्ड की हर रिकॉर्डिंग मिट जाएगी। इसे पलटा नहीं जा सकता, और जो पहले से उतारा नहीं गया उसे वापस नहीं पाया जा सकता।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="824"/>
        <source>Erase</source>
        <translation>मिटाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="831"/>
        <source>Formatting…</source>
        <translation>फ़ॉर्मैट हो रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="841"/>
        <source>Wi-Fi signal</source>
        <translation>वाई-फ़ाई संकेत</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="845"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1169"/>
        <source>Reading…</source>
        <translation>पढ़ा जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="849"/>
        <source>Connection</source>
        <translation>संयोजन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="862"/>
        <source>Scan</source>
        <translation>खंगालें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="866"/>
        <source>Join network</source>
        <translation>नेटवर्क से जुड़ें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="880"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="914"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1803"/>
        <source>Network</source>
        <translation>नेटवर्क</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="882"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1794"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2073"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2085"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2101"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <source>Password</source>
        <translation>पासवर्ड</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="885"/>
        <source>Wi-Fi</source>
        <translation>वाई-फ़ाई</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="891"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>खंगालता कैमरा है, यह कंप्यूटर नहीं — मायने वही रखता है जहाँ तक वह पहुँच सके। पासवर्ड सहेजने से पहले आज़माया जाता है, इसलिए टाइप की गलती ठुकरा दी जाती है, कैमरा किसी नेटवर्क के बिना नहीं रह जाता।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="899"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>पते और पोर्ट यहाँ पढ़े जाते हैं, पर बदले कैमरे के अपने वेब इंटरफ़ेस में जाते हैं। इनमें से एक भी गलत होने पर कैमरा नेटवर्क से पूरी तरह बाहर हो जाता है, और लौटने का एकमात्र रास्ता रीसेट पिन है — वहाँ कोई चेतावनी-संवाद निर्माता के अपने पर्दे की जगह नहीं ले सकता।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="944"/>
        <source>strong</source>
        <translation>मज़बूत</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="945"/>
        <source>good</source>
        <translation>अच्छा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="946"/>
        <source>fair</source>
        <translation>ठीक-ठाक</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="947"/>
        <source>weak</source>
        <translation>कमज़ोर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="948"/>
        <source>unknown</source>
        <translation>अज्ञात</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1002"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1007"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>, %n पहुँच-बिंदु</numerusform><numerusform>, %n पहुँच-बिंदु</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1012"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>कैमरे को जैसा सुनाई देता है वैसा संकेत: 4 में से %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1014"/>
        <source>Encryption: %1</source>
        <translation>एन्क्रिप्शन: %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1016"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>%n पहुँच-बिंदु से सुनाई दिया — एक नेटवर्क, कई नोड। सबसे मज़बूत वाला दिखाया गया है।</numerusform><numerusform>%n पहुँच-बिंदुओं से सुनाई दिया — एक नेटवर्क, कई नोड। सबसे मज़बूत वाला दिखाया गया है।</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1030"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>कुछ नाम कई पहुँच-बिंदुओं से सुनाई दिए — यह एक मेश नेटवर्क है। कैमरा नाम से जुड़ता है, किसी विशेष नोड से नहीं; किससे बात होगी यह मेश तय करता है और ज़रूरत पड़ने पर बदल देता है। सबसे अच्छी जगह खोजने के लिए कैमरा हिलाएँ और ऊपर «वाई-फ़ाई संकेत» देखें: असली कड़ी वही है।</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1040"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>%n नेटवर्क मिला, सबसे मज़बूत पहले।</numerusform><numerusform>%n नेटवर्क मिले, सबसे मज़बूत पहले।</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1048"/>
        <source>scanning…</source>
        <translation>खंगाला जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1051"/>
        <source>The camera is scanning for networks…</source>
        <translation>कैमरा नेटवर्क खोज रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>Change the camera&apos;s network</source>
        <translation>कैमरे का नेटवर्क बदलें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 को «%2» पर ले जाएँ?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1066"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>कैमरा पहले पासवर्ड आज़माता है और गलत होने पर मना कर देता है, इसलिए यह सुनने से अधिक सुरक्षित है।

फिर भी वह दोबारा जुड़ते समय एक मिनट के लिए गायब रहेगा, और यदि नया नेटवर्क उसे कोई दूसरा पता दे दे तो बाद में उसे यहाँ बदलना होगा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1072"/>
        <source>Join</source>
        <translation>जुड़ें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1080"/>
        <source>Testing the password on the camera…</source>
        <translation>कैमरे पर पासवर्ड आज़माया जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1098"/>
        <source>Link</source>
        <translation>कड़ी</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1099"/>
        <source>Address</source>
        <translation>पता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1100"/>
        <source>Netmask</source>
        <translation>नेटमास्क</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1101"/>
        <source>Gateway</source>
        <translation>गेटवे</translation>
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
        <translation>नेटवर्क का नाम</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1125"/>
        <source>Ports</source>
        <translation>पोर्ट</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1127"/>
        <source>The camera reported nothing.</source>
        <translation>कैमरे ने कुछ नहीं बताया।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1355"/>
        <source>Restart the camera</source>
        <translation>कैमरा दोबारा चालू करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1141"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>कैमरा करीब एक मिनट के लिए नेटवर्क से हट जाता है और अपने आप लौट आता है। उसके SD कार्ड की रिकॉर्डिंग पर कोई असर नहीं पड़ता और सेटिंग बनी रहती हैं।

जब कोई कैमरा उत्तर देना बंद कर दे, नए संयोजन ठुकराए, या फ़र्मवेयर अद्यतन के बाद बहकने लगे, तब आज़माने लायक है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1149"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1362"/>
        <source>Restart</source>
        <translation>पुनःआरंभ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1160"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>फ़ैक्ट्री रीसेट यहाँ नहीं दिया गया है। वह नेटवर्क सेटिंग भी मिटा देता है, और जो कैमरा अपना वाई-फ़ाई भूल चुका हो उसे उतारकर केबल से जोड़ना पड़ता है — यदि आप सचमुच यही चाहते हैं तो कैमरे का अपना वेब इंटरफ़ेस इस्तेमाल करें।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1171"/>
        <source>Condition</source>
        <translation>दशा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1176"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1244"/>
        <source>Not checked.</source>
        <translation>जाँचा नहीं गया।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1179"/>
        <source>Check for updates</source>
        <translation>अद्यतन देखें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1181"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>Reolink से कैमरा पूछता है, यह कंप्यूटर नहीं — इसलिए उसे इंटरनेट तक अपना रास्ता चाहिए।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1185"/>
        <source>Asking Reolink…</source>
        <translation>Reolink से पूछा जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1190"/>
        <source>Install update</source>
        <translation>अद्यतन स्थापित करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1194"/>
        <source>Install firmware</source>
        <translation>फ़र्मवेयर स्थापित करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 का फ़र्मवेयर अद्यतन करें?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1198"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>कैमरा अद्यतन स्वयं उतारता है और दोबारा चालू होता है। कई मिनट तक वह पहुँच से बाहर रहेगा।

अद्यतन के दौरान उसकी बिजली न काटें — फ़्लैश के बीच में रुका कैमरा आमतौर पर वापस भेजना पड़ता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1203"/>
        <source>Install</source>
        <translation>स्थापित करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1218"/>
        <source>Firmware</source>
        <translation>फ़र्मवेयर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1228"/>
        <source>Storage</source>
        <translation>भंडारण</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1231"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>फ़ॉर्मैट करने से कार्ड की हर रिकॉर्डिंग मिट जाती है। इसे पलटा नहीं जा सकता, और बाद में कैमरे से कोई पुष्टि भी नहीं आती।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1248"/>
        <source>Ask the camera</source>
        <translation>कैमरे से पूछें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1252"/>
        <source>Copy the list</source>
        <translation>सूची कॉपी करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1255"/>
        <source>Copied.</source>
        <translation>कॉपी हो गया।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1263"/>
        <source>What this camera supports</source>
        <translation>यह कैमरा क्या-क्या कर सकता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1266"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>Reolink का फ़र्मवेयर मॉडल-दर-मॉडल बहुत भिन्न है, और यह जानने का एकमात्र भरोसेमंद तरीका कि कोई कैमरा क्या कर सकता है, उसी से पूछना है। यदि leolink में कुछ ऐसा नहीं है जो आपके कैमरे में स्पष्ट रूप से मौजूद है, तो बग रिपोर्ट में दी गई यही सूची उसे जोड़ना संभव बनाती है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1283"/>
        <source>Maintenance</source>
        <translation>रखरखाव</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>%n आदेश के बारे में पूछा जा रहा है…</numerusform><numerusform>%n आदेशों के बारे में पूछा जा रहा है…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1331"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>समर्थित (%1):
%2

असमर्थित (%3):
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1357"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1 को दोबारा चालू करें?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1359"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>चित्र करीब एक मिनट के लिए चला जाएगा। इस समय जो कुछ रिकॉर्ड हो रहा है वह रुक जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>Asking %1 to restart…</source>
        <translation>%1 से दोबारा चालू होने को कहा जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1449"/>
        <source>On-screen text</source>
        <translation>पर्दे पर लिखा पाठ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1451"/>
        <source>Background</source>
        <translation>पृष्ठभूमि</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1452"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>पाठ के पीछे एक डिब्बा बनाता है ताकि वह चमकीले दृश्य पर भी पढ़ा जा सके।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1454"/>
        <source>Watermark</source>
        <translation>जलचिह्न</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1455"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>रिकॉर्डिंग में ही एक निशान गाड़ देता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1459"/>
        <source>Privacy areas…</source>
        <translation>निजी क्षेत्र…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1462"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>दृश्य के वे हिस्से जिन्हें कैमरा कुछ भी बाहर जाने से पहले काला कर देता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>Privacy</source>
        <translation>निजता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1477"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>कैमरे के भीतर ही काला किया जाता है, इसलिए ढका हुआ हिस्सा हर दर्शक और हर रिकॉर्डिंग में गायब रहता है — पड़ोसी की खिड़की, या कोई मेज़ जो वीडियो में नहीं आनी चाहिए।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1484"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>कैमरा इसे चित्र में ही जला देता है, इसलिए यह हर रिकॉर्डिंग और हर क्लाइंट में दिखता है — केवल यहाँ नहीं।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1492"/>
        <source>Overlay</source>
        <translation>ऊपरी परत</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1501"/>
        <source>Motion detection in the camera</source>
        <translation>कैमरे में गति-पहचान</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="385"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1503"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>Sensitivity</source>
        <translation>संवेदनशीलता</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1504"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>ऊँचा होने पर अधिक पकड़ में आता है, छाया और हेडलाइट भी।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1506"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1815"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2023"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2077"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2087"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2093"/>
        <source>Switched on</source>
        <translation>चालू</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1512"/>
        <source>Choose the area…</source>
        <translation>क्षेत्र चुनें…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1514"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>कैमरा चित्र के किन हिस्सों पर नज़र रखता है। क्षेत्र के बाहर की हर चीज़ अनदेखी रहती है — दृश्य के किनारे की सड़क, हवा में हिलता पेड़, पड़ोसी का दरवाज़ा।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1520"/>
        <source>Where it looks</source>
        <translation>वह कहाँ देखता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1524"/>
        <source>Choose the hours…</source>
        <translation>घंटे चुनें…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1529"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>घंटों का एक सप्ताह: जिन पर आप निशान लगाएँगे उनमें कैमरा गति की सूचना देगा, बाकी में चुप रहेगा। इसका उसकी संवेदनशीलता से कोई लेना-देना नहीं — वह नीचे तय होती है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1536"/>
        <source>When it reports at all</source>
        <translation>वह सूचना देता ही कब है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>From</source>
        <translation>से</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>To</source>
        <translation>तक</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1555"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>एक ही दिन में कैमरा कम या ज़्यादा आसानी से चल सकता है। इसी से रात में हेडलाइट सब कुछ नहीं छेड़तीं और दिन में वह अंधा भी नहीं होता। कितने खंड होंगे यह कैमरा तय करता है; उनके समय और संवेदनशीलता आपकी हैं।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1563"/>
        <source>How readily it triggers</source>
        <translation>यह कितनी आसानी से चलता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1571"/>
        <source>What it recognises</source>
        <translation>यह क्या पहचानता है</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1573"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1706"/>
        <source>People</source>
        <translation>व्यक्ति</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1574"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1707"/>
        <source>Vehicles</source>
        <translation>वाहन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1575"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1708"/>
        <source>Animals</source>
        <translation>जानवर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1576"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1709"/>
        <source>Faces</source>
        <translation>चेहरे</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1579"/>
        <source>Camera-side detection</source>
        <translation>कैमरे की ओर से पहचान</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1588"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>यह कैमरे की अपनी पहचान है, वही जिसकी सूचना वह ONVIF से देता है। leolink द्वारा चित्र का विश्लेषण अलग से, कैमरे → घटनाएँ के नीचे तय होता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1597"/>
        <source>Detection</source>
        <translation>पहचान</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1674"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — कैमरे का पहचान क्षेत्र</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1675"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>कैमरा किस पर नज़र रखे यह चुनने के लिए चित्र पर खींचें। गहरे किए गए क्षेत्र अनदेखे रहते हैं। यह कैमरे की अपनी जाली है, %1 × %2, इसलिए leolink की जाली से महीन है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <source>%1 — when to watch</source>
        <translation>%1 — कब निगरानी करे</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1693"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>वे घंटे जिनमें कैमरा गति की सूचना देता है। इनके बाहर वह देखता तो है, पर कुछ कहता नहीं।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1704"/>
        <source>Any movement</source>
        <translation>कोई भी हलचल</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1705"/>
        <source>Continuous</source>
        <translation>लगातार</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1737"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>यह कैमरा हर तरह की घटना के लिए अलग सप्ताह रखता है। कौन-सा?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1785"/>
        <source>SIM card</source>
        <translation>सिम कार्ड</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1787"/>
        <source>PIN</source>
        <translation>पिन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1788"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>केवल तभी चाहिए जब कार्ड माँगे। तीन गलत प्रयासों पर कार्ड बंद हो जाता है और फिर PUK चाहिए, जो केवल आपके ऑपरेटर के पास होता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1792"/>
        <source>Access point (APN)</source>
        <translation>पहुँच-बिंदु (APN)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1795"/>
        <source>Authentication</source>
        <translation>प्रमाणीकरण</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1796"/>
        <source>Use mobile data</source>
        <translation>मोबाइल डेटा इस्तेमाल करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1800"/>
        <source>Modem</source>
        <translation>मॉडेम</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1802"/>
        <source>Card</source>
        <translation>कार्ड</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1804"/>
        <source>Type</source>
        <translation>प्रकार</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1805"/>
        <source>Signal</source>
        <translation>संकेत</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1806"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1807"/>
        <source>Card number</source>
        <translation>कार्ड संख्या</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1811"/>
        <source>Mobile connection</source>
        <translation>मोबाइल संयोजन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1813"/>
        <source>Data used</source>
        <translation>खर्च हुआ डेटा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1814"/>
        <source>Monthly limit</source>
        <translation>मासिक सीमा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;असली हार्डवेयर पर परखा नहीं गया।&lt;/b&gt; leolink से जुड़े किसी भी व्यक्ति के पास मॉडेम वाला कैमरा नहीं है, इसलिए यह केवल प्रोटोकॉल के आधार पर लिखा गया है। यह कुछ भी बिगाड़ नहीं सकता — जिस आदेश को कैमरा नहीं जानता उसे वह बस ठुकरा देता है — पर उतनी ही आसानी से कुछ भी न दिखाए, यह भी हो सकता है।

यदि आपके कैमरे में सिम है, तो रखरखाव के नीचे «यह कैमरा क्या-क्या कर सकता है» उन आदेशों की सूची देता है जो उसके फ़र्मवेयर में सचमुच हैं। बग रिपोर्ट में दी गई वही सूची इसे ढंग से पूरा करने देगी।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1835"/>
        <source>Mobile data</source>
        <translation>मोबाइल डेटा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1852"/>
        <source>nothing blanked</source>
        <translation>कुछ भी काला नहीं</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1854"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>%n क्षेत्र काला किया गया</numerusform><numerusform>%n क्षेत्र काले किए गए</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1856"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n क्षेत्र, बंद</numerusform><numerusform>%n क्षेत्र, बंद</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1938"/>
        <source>%1 — when to record</source>
        <translation>%1 — कब रिकॉर्ड करे</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1939"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>वे घंटे जिनमें कैमरा अपने ही कार्ड पर रिकॉर्ड करता है। इसके लिए कार्ड लगा होना चाहिए; इस कंप्यूटर पर रिकॉर्डिंग कैमरे → घटनाएँ के नीचे तय होती है और बिना कार्ड के चलती है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2017"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2027"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>कैमरे के कार्ड पर रिकॉर्डिंग</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2019"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2029"/>
        <source>Overwrite when full</source>
        <translation>भर जाने पर ऊपर लिखें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2020"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2032"/>
        <source>Record before the event</source>
        <translation>घटना से पहले भी रिकॉर्ड करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="466"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2021"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2035"/>
        <source>Keep recording after</source>
        <translation>उसके बाद भी रिकॉर्ड करते रहें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2022"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2036"/>
        <source>File length</source>
        <translation>फ़ाइल की लंबाई</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2030"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>बंद का अर्थ है कि कार्ड भरते ही रिकॉर्डिंग बस रुक जाएगी।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2033"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>किसी घटना से ठीक पहले के सेकंड सहेजता है, जो अक्सर सबसे दिलचस्प हिस्सा होते हैं।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2039"/>
        <source>When to record…</source>
        <translation>कब रिकॉर्ड करे…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2042"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>सप्ताह के वे घंटे जिनमें कैमरा अपने आप अपने कार्ड पर रिकॉर्ड करता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2052"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>ये तय करते हैं कि कैमरा अपने SD कार्ड पर क्या लिखता है। इस कंप्यूटर पर रिकॉर्डिंग कैमरे → घटनाएँ के नीचे तय होती है और उसे कार्ड नहीं चाहिए।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2060"/>
        <source>Recording</source>
        <translation>रिकॉर्डिंग</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2068"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2096"/>
        <source>E-mail</source>
        <translation>ई-मेल</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2070"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2082"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2098"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <source>Server</source>
        <translation>सर्वर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2071"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2083"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2099"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2136"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <source>Port</source>
        <translation>पोर्ट</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2074"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2103"/>
        <source>Encrypted</source>
        <translation>एन्क्रिप्टेड</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2075"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2104"/>
        <source>Not more often than</source>
        <translation>इससे अधिक बार नहीं</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2076"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2105"/>
        <source>Attach</source>
        <translation>साथ भेजें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2080"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2133"/>
        <source>FTP upload</source>
        <translation>FTP अपलोड</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2086"/>
        <source>Folder</source>
        <translation>फ़ोल्डर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2091"/>
        <source>Push notifications</source>
        <translation>पुश सूचनाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2102"/>
        <source>Send to</source>
        <translation>यहाँ भेजें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2114"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2121"/>
        <source>Siren</source>
        <translation>सायरन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2116"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2123"/>
        <source>Sound on an alarm</source>
        <translation>अलार्म पर बजाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2117"/>
        <source>Times</source>
        <translation>समय</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2118"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2129"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2140"/>
        <source>Mode</source>
        <translation>ढंग</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2126"/>
        <source>Spotlight</source>
        <translation>स्पॉटलाइट</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2128"/>
        <source>On</source>
        <translation>चालू</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <source>Directory</source>
        <translation>निर्देशिका</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2144"/>
        <source>Push notification</source>
        <translation>पुश सूचना</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2146"/>
        <source>Schedule</source>
        <translation>समय-सारणी</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2152"/>
        <source>Send a test e-mail</source>
        <translation>एक जाँच ई-मेल भेजें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2155"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>कैमरे से जाँच ई-मेल भेजने को कहा जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2158"/>
        <source>Test the FTP upload</source>
        <translation>FTP अपलोड जाँचें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2161"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>कैमरे से FTP सर्वर आज़माने को कहा जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2172"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>इन्हें कैमरा स्वयं भेजता है, इसलिए ये तब भी चलती रहती हैं जब यह कंप्यूटर बंद हो। leolink की अपनी प्रतिक्रियाएँ — आदेश, वेबहुक, MQTT — कैमरे → घटनाएँ के नीचे हैं।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2181"/>
        <source>Alerts</source>
        <translation>सूचनाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <source>Time server</source>
        <translation>समय सर्वर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <source>Synchronise the clock</source>
        <translation>घड़ी मिलाएँ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2194"/>
        <source>Every</source>
        <translation>हर</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <source>Scheduled restart</source>
        <translation>निर्धारित पुनःआरंभ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <source>Restart regularly</source>
        <translation>नियमित रूप से दोबारा चालू करें</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>कुछ कैमरे हफ़्तों चलते रहने के बाद भरोसे लायक नहीं रहते; सप्ताह में एक बार दोबारा चालू करना सस्ता इलाज है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2204"/>
        <source>Day</source>
        <translation>दिन</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2205"/>
        <source>Hour</source>
        <translation>घंटा</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2206"/>
        <source>Minute</source>
        <translation>मिनट</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2210"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>गलत घड़ी वाला कैमरा अपनी रिकॉर्डिंग पर गलत समय अंकित करता है, और जब कोई एक रिकॉर्डिंग ढूँढ़नी हो तब यह सुनने से कहीं अधिक भारी पड़ता है।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Time</source>
        <translation>समय</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2340"/>
        <source>Ready.</source>
        <translation>तैयार।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2445"/>
        <source>Writing to the camera…</source>
        <translation>कैमरे पर लिखा जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2503"/>
        <source>Nothing to write.</source>
        <translation>लिखने को कुछ नहीं।</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2520"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>सहेजा गया। एन्कोडर बदलने पर स्ट्रीम फिर से शुरू होती है, इसलिए चित्र पल भर के लिए गायब हो सकता है।</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>निदान</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>केवल त्रुटियाँ</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>चेतावनियाँ और त्रुटियाँ</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>सामान्य गतिविधि</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>सब कुछ</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>सभी क्षेत्र</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>खोजें…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>विस्तृत लॉग</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>कैमरे को भेजा गया हर अनुरोध, डिकोडर का हर निर्णय और हर पुनःसंयोजन दर्ज करता है। रोज़मर्रा के उपयोग में इसे बंद ही रहने दें — कुछ गड़बड़ हो तो चालू करें, समस्या दोहराएँ, फिर रिपोर्ट भेजें।</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>नई पंक्तियों के साथ चलें</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>रिपोर्ट कॉपी करें</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>सिस्टम का विवरण और लॉग, बग रिपोर्ट में चिपकाने के लिए तैयार।</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>रिपोर्ट कॉपी हो गई।</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>रिपोर्ट सहेजें…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>रिपोर्ट सहेजें</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>पाठ फ़ाइलें (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>%1 लिखा नहीं जा सका।</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>%1 में सहेजा गया</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>लॉग फ़ोल्डर खोलें</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>पासवर्ड, सत्र-टोकन और इंटरनेट पते कुछ भी लिखे जाने से पहले हटा दिए जाते हैं, इसलिए इसे जस का तस साझा किया जा सकता है। आपके अपने नेटवर्क के पते बने रहते हैं — आमतौर पर वही पहला सुराग होते हैं।</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%2 में से %1 पंक्तियाँ</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>खोज के लिए UDP सॉकेट नहीं खुल सका।</translation>
    </message>
</context>
<context>
    <name>leolink::EventDispatcher</name>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <location filename="../src/EventActions.cpp" line="108"/>
        <source>Command</source>
        <translation>आदेश</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <source>could not be started</source>
        <translation>चालू नहीं हो सका</translation>
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
        <translation>अमान्य पता</translation>
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
        <translation>घटना लॉग</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>सभी कैमरे</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>सभी घटनाएँ</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>गति</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>रिकॉर्डिंग सहित</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>कैमरा:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>दिखाएँ:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>ताज़ा करें</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>कब</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>कैमरा</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>घटना</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>मीडिया</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>कोई झलक नहीं</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>रिकॉर्डिंग खोलें</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>लॉग खाली करें…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>वीडियो</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>चित्र</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + चित्र</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>अभी तक कोई घटना दर्ज नहीं हुई</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>केवल रिकॉर्डिंग</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>रिकॉर्डिंग: %1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation> (फ़ाइल गायब है)</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>चित्र: %1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>चित्र खोलें</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>खोलने को कुछ नहीं</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>इस घटना की फ़ाइल अब वहाँ नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>घटना लॉग खाली करें</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>पूरा घटना-इतिहास मिटा दें?

रिकॉर्ड किए गए वीडियो और चित्र डिस्क पर बने रहेंगे — केवल लॉग खाली होगा।</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>अनुप्रयोग</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>कैमरा इंटरफ़ेस</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>वीडियो</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>ONVIF घटनाएँ</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>पहचान</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>रिकॉर्डिंग</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>घटना पर कार्रवाई</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>नेटवर्क</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>उपयोक्ता इंटरफ़ेस</translation>
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
        <translation>%1 विफल: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="110"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>अभी तक कोई कैमरा सेट नहीं है।

एक जोड़ने के लिए «कैमरे…» का उपयोग करें।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="253"/>
        <source>&amp;File</source>
        <translation>फ़ाइल (&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;Cameras…</source>
        <translation>कैमरे (&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="260"/>
        <source>&amp;Settings…</source>
        <translation>&amp;सेटिंग…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="266"/>
        <source>&amp;Save snapshots…</source>
        <translation>स्नैपशॉट सहेजें (&amp;S)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="271"/>
        <source>&amp;Record all cameras</source>
        <translation>सभी कैमरे रिकॉर्ड करें (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="278"/>
        <source>&amp;Event log…</source>
        <translation>घटना लॉग (&amp;E)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="286"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>कैमरे में रखी रिकॉर्डिंग (&amp;C)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>देखें कि कैमरे के अपने SD कार्ड पर क्या रखा है।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="292"/>
        <location filename="../src/MainWindow.cpp" line="725"/>
        <location filename="../src/MainWindow.cpp" line="1654"/>
        <source>No cameras configured</source>
        <translation>कोई कैमरा सेट नहीं है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Which camera</source>
        <translation>कौन-सा कैमरा</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Show recordings from</source>
        <translation>इनकी रिकॉर्डिंग दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="315"/>
        <source>Open &amp;recordings folder</source>
        <translation>रिकॉर्डिंग फ़ोल्डर खोलें (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="323"/>
        <source>&amp;Quit</source>
        <translation>बाहर निकलें (&amp;Q)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="328"/>
        <source>&amp;View</source>
        <translation>दृश्य (&amp;V)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;Full screen</source>
        <translation>पूर्ण स्क्रीन (&amp;F)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="369"/>
        <source>Show &amp;menu bar</source>
        <translation>मेन्यू पट्टी दिखाएँ (&amp;M)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="383"/>
        <source>Show &amp;toolbar</source>
        <translation>औज़ार पट्टी दिखाएँ (&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="392"/>
        <source>Show status &amp;bar</source>
        <translation>स्थिति पट्टी दिखाएँ (&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="401"/>
        <source>Hide window &amp;decoration</source>
        <translation>खिड़की का ढाँचा छिपाएँ (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="413"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>खिड़की खिसकाने के लिए किसी कैमरे के नीचे की पट्टी खींचें। Ctrl+Shift+D ढाँचा लौटाता है, Ctrl+M मेन्यू।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="420"/>
        <source>&amp;Help</source>
        <translation>सहायता (&amp;H)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Online handbook</source>
        <translation>ऑनलाइन पुस्तिका (&amp;O)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="429"/>
        <source>&amp;Protocol notes</source>
        <translation>प्रोटोकॉल टिप्पणियाँ (&amp;P)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="435"/>
        <source>&amp;Diagnostics…</source>
        <translation>निदान (&amp;D)…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="438"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>leolink और कैमरों ने अब तक क्या किया — और एक रिपोर्ट जिसे बग रिपोर्ट के साथ भेजा जा सके।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="442"/>
        <source>&amp;Report a problem</source>
        <translation>समस्या की सूचना दें (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="447"/>
        <source>Report a problem</source>
        <translation>समस्या की सूचना दें</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;निदान रिपोर्ट संलग्न करें&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>यह दर्ज करती है कि आपकी मशीन क्या है, कैमरों ने क्या उत्तर दिया और गड़बड़ी कहाँ हुई — पासवर्ड और पते पहले ही हटाए जा चुके होते हैं। इसके बिना अधिकांश सूचनाओं पर आगे काम नहीं हो पाता।

यदि समस्या आप स्वयं पैदा कर सकते हैं, तो पहले निदान विंडो में विस्तृत लॉग चालू करें, उसे दोबारा घटित करें, और तब रिपोर्ट कॉपी करें।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="458"/>
        <source>Open diagnostics</source>
        <translation>निदान खोलें</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Go to the issue tracker</source>
        <translation>समस्या-सूची पर जाएँ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="471"/>
        <source>&amp;About leolink</source>
        <translation>leolink के बारे में (&amp;A)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="474"/>
        <source>About leolink</source>
        <translation>leolink के बारे में</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="475"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;Reolink कैमरों के लिए एक मूल Linux क्लाइंट।&lt;/p&gt;&lt;p&gt;कैमरे के अपने प्रोटोकॉल सीधे बोलता है: स्थानीय नेटवर्क पर HTTP इंटरफ़ेस, RTSP और ONVIF, तथा कहीं दूर से कैमरे तक पहुँचना हो तो Reolink की P2P सेवा।&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;पुस्तिका&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;स्रोत कोड&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Reolink से न कोई संबंध है, न उसका समर्थन प्राप्त है।&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="487"/>
        <source>Main</source>
        <translation>मुख्य</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="499"/>
        <source>Ready</source>
        <translation>तैयार</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="515"/>
        <source>Leave full screen</source>
        <translation>पूर्ण स्क्रीन से बाहर आएँ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="522"/>
        <location filename="../src/MainWindow.cpp" line="586"/>
        <source>Cameras…</source>
        <translation>कैमरे…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <source>Event log…</source>
        <translation>घटना लॉग…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="530"/>
        <location filename="../src/MainWindow.cpp" line="589"/>
        <source>Quit</source>
        <translation>बाहर निकलें</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="580"/>
        <source>Show window</source>
        <translation>खिड़की दिखाएँ</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="749"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n कैमरा सीधे प्रसारण में</numerusform><numerusform>%n कैमरे सीधे प्रसारण में</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="958"/>
        <source>Esc leaves full screen</source>
        <translation>Esc पूर्ण स्क्रीन से बाहर लाता है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="965"/>
        <location filename="../src/MainWindow.cpp" line="1004"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>जाली के लिए दो बार क्लिक करें · Esc पूर्ण स्क्रीन से बाहर लाता है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1002"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Esc पूर्ण स्क्रीन से बाहर लाता है · किसी कैमरे पर दो बार क्लिक करने से वह पूरी स्क्रीन भर देता है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1027"/>
        <source>Grid view</source>
        <translation>जाली दृश्य</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1209"/>
        <location filename="../src/MainWindow.cpp" line="1332"/>
        <source>Cannot create %1</source>
        <translation>%1 बनाया नहीं जा सकता</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1246"/>
        <source>Recording %1</source>
        <translation>%1 रिकॉर्ड हो रहा है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1254"/>
        <source>Saved %1</source>
        <translation>%1 सहेजा गया</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1260"/>
        <location filename="../src/MainWindow.cpp" line="1367"/>
        <source>Recording stopped</source>
        <translation>रिकॉर्डिंग रुक गई</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1267"/>
        <source>%1: %2</source>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1348"/>
        <source>Recording started</source>
        <translation>रिकॉर्डिंग शुरू हुई</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1366"/>
        <source>Recording all cameras</source>
        <translation>सभी कैमरे रिकॉर्ड हो रहे हैं</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1447"/>
        <source>%1 at %2</source>
        <translation>%2 पर %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1467"/>
        <source>Motion detected</source>
        <translation>गति पहचानी गई</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1479"/>
        <source>Sound detected</source>
        <translation>ध्वनि पहचानी गई</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1502"/>
        <source>Menu bar hidden</source>
        <translation>मेन्यू पट्टी छिपी है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1503"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>मेन्यू पट्टी और औज़ार पट्टी दोनों छिपी हों तो मेन्यू वापस लाने के लिए Ctrl+M दबाएँ।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1522"/>
        <source>Cannot save</source>
        <translation>सहेजा नहीं जा सकता</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1523"/>
        <source>Settings could not be written to %1.</source>
        <translation>सेटिंग %1 में नहीं लिखी जा सकीं।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1589"/>
        <source>Play through %1</source>
        <translation>%1 के ज़रिए बजाएँ</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1590"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>ध्वनि फ़ाइलें (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;सभी फ़ाइलें (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1602"/>
        <source>Speaking through the camera…</source>
        <translation>कैमरे के ज़रिए बोल रहे हैं…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1609"/>
        <source>Finished.</source>
        <translation>समाप्त।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1732"/>
        <source>Nothing to capture</source>
        <translation>लेने को कुछ नहीं</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1737"/>
        <source>Save snapshots to</source>
        <translation>स्नैपशॉट यहाँ सहेजें</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="1755"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>%n स्नैपशॉट सहेजा गया</numerusform><numerusform>%n स्नैपशॉट सहेजे गए</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1773"/>
        <source>Welcome to leolink</source>
        <translation>leolink में आपका स्वागत है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1775"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;अभी तक कोई कैमरा सेट नहीं किया गया है।&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1777"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>पता, उपयोक्ता-नाम और पासवर्ड देकर एक कैमरा जोड़ें। leolink आपके अपने नेटवर्क में कैमरे से सीधे बात करता है — किसी क्लाउड खाते की ज़रूरत नहीं।&lt;p&gt;हर विकल्प क्या करता है, यह पुस्तिका में लिखा है।</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1781"/>
        <source>Add camera…</source>
        <translation>कैमरा जोड़ें…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1782"/>
        <source>Open handbook</source>
        <translation>पुस्तिका खोलें</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1858"/>
        <source>leolink is still running</source>
        <translation>leolink अब भी चल रहा है</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1859"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>कैमरे रिकॉर्ड करते रहेंगे। लौटने के लिए सूचना क्षेत्र के चिह्न का उपयोग करें।</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>कोई चित्र उपलब्ध नहीं</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — निजी क्षेत्र</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>दृश्य के वे हिस्से खींचकर चुनें जिन्हें कैमरा काला करे। वह उन्हें उपकरण से कुछ भी बाहर जाने से पहले काला कर देता है, इसलिए वे सीधे प्रसारण में, रिकॉर्डिंग में और हर दूसरे प्रोग्राम में — निर्माता के ऐप में भी — गायब रहते हैं।</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>अंतिम हटाएँ</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>सभी हटाएँ</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>%1 से चित्र लिया जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>कोई चित्र नहीं: %1 — क्षेत्र फिर भी खींचे जा सकते हैं।</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%2 में से %1 क्षेत्र</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>ffmpeg स्थापित नहीं है, इसलिए गति-पहचान संभव नहीं।</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>%1 के लिए कोई स्ट्रीम पता नहीं।</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="129"/>
        <source>Motion detection stopped: %1</source>
        <translation>गति-पहचान रुक गई: %1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="154"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>गति-पहचान के लिए ffmpeg चालू नहीं हो सका।</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="157"/>
        <source>ONVIF subscription failed.</source>
        <translation>ONVIF सदस्यता विफल।</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>MQTT ब्रोकर या विषय दर्ज नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>MQTT ब्रोकर ने उत्तर नहीं दिया।</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>MQTT: %1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>MQTT: ब्रोकर से अप्रत्याशित उत्तर।</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>MQTT ने संयोजन ठुकरा दिया: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — कैमरे में रखी रिकॉर्डिंग</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>मुख्य स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>उप-स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>खोजें</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>से</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>तक</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>आरंभ</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>अवधि</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>आकार</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>फ़ाइल</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>चलाएँ</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>डाउनलोड करें…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>एक अवधि चुनें और «खोजें» दबाएँ। रिकॉर्डिंग तभी होती हैं जब कैमरे में SD कार्ड लगा हो।</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>%1 से पूछा जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>उस अवधि में कुछ नहीं मिला। या तो कुछ रिकॉर्ड ही नहीं हुआ, या कैमरे में SD कार्ड नहीं है।</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>%n रिकॉर्डिंग मिली।</numerusform><numerusform>%n रिकॉर्डिंग मिलीं।</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>कैमरे के साथ कोई सत्र नहीं — पहले खोजें।</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>कोई प्लेयर नहीं</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>mpv नहीं मिला। रिकॉर्डिंग यहाँ है:

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>रिकॉर्डिंग सहेजें</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>%1 में नहीं लिखा जा सकता।</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>%1 में सहेजा गया</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>डाउनलोड विफल: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>सेटिंग</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>खिड़की</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>गति होने पर</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>प्रतिक्रियाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>रिकॉर्डिंग</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>वीडियो</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>सामान्य</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>मेन्यू पट्टी दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>Ctrl+M इसे कभी भी बदल देता है।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>औज़ार पट्टी दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>स्थिति पट्टी दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>खिड़की का ढाँचा छिपाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>दीवार पर लगे पर्दों के लिए। Ctrl+Shift+D इसे बदलता है।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>रूप-रंग</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>सूचना क्षेत्र में एक चिह्न दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>खिड़की बंद करने पर बाहर निकलने के बजाय उसे छिपाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>छोटा करने पर खिड़की सूचना क्षेत्र में छिप जाए</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>सूचना क्षेत्र</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>टाइल को पल भर के लिए लाल रंगें</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>ताकि कैमरों की पूरी दीवार पर एक नज़र डालना ही यह जानने को काफ़ी हो कि कौन-सा था।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> ms</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>एक ध्वनि बजाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>खाली: डेस्कटॉप की अपनी सूचना-ध्वनि</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>ढूँढें…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>बजाई जाने वाली ध्वनि</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>ध्वनि फ़ाइलें (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;सभी फ़ाइलें (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>कितनी देर</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>ध्वनि फ़ाइल</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>पर्दे पर</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>गति पहचाने जाने पर खिड़की सामने लाएँ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>पिछला आकार</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>पूर्ण स्क्रीन</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>किस रूप में लौटें</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>खिड़की</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>कौन-से कैमरे घटना उठाते ही हैं और कैसे, यह हर कैमरे के लिए कैमरे ▸ सेटिंग ▸ leolink द्वारा पहचान के नीचे तय होता है।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>जब कोई कैमरा कुछ बताता है तो leolink क्या करता है। जब तक कैमरे का अपना संवाद कुछ और न कहे, वह इन्हीं का पालन करता है — या तो सब, या कुछ नहीं, कभी आधा नहीं: आंशिक रूप से विरासत में मिली प्रविष्टियाँ ही तब सबसे मुश्किल पड़ती हैं जब कुछ चलता ही नहीं।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>रिकॉर्डिंग फ़ोल्डर</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>रिकॉर्डिंग और स्नैपशॉट</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>रिकॉर्डिंग बिना दोबारा एन्कोड किए Matroska में लिखी जाती हैं: चित्र कैमरे की मूल गुणवत्ता बनाए रखता है और प्रोसेसर लगभग खाली रहता है।

कोई कैमरा रिकॉर्ड करता है या नहीं, यह उसकी अपनी प्रविष्टि है, कैमरे ▸ सेटिंग ▸ प्रतिक्रियाएँ के नीचे।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>हार्डवेयर (अनुशंसित)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>हार्डवेयर, ड्राइवर की पसंद</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>हार्डवेयर, फ़्रेम कॉपी के साथ</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="292"/>
        <source>Software only</source>
        <translation>केवल सॉफ़्टवेयर</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="294"/>
        <source>“Recommended” names the decoder explicitly so that decoding and drawing stay on the same graphics API. Left to itself, mpv may decode through one API and draw through another, which on some cards turns the picture solid green.

If the picture is broken, try the others in turn. “Software only” always works but costs a whole processor core at full resolution.</source>
        <translation>«अनुशंसित» डिकोडर का नाम स्पष्ट रूप से देता है ताकि डिकोडिंग और चित्रांकन एक ही ग्राफ़िक्स इंटरफ़ेस पर रहें। अपने भरोसे छोड़ने पर mpv एक इंटरफ़ेस से डिकोड और दूसरे से चित्रांकन कर सकता है, जिससे कुछ कार्डों पर चित्र पूरा हरा पड़ जाता है।

चित्र बिगड़ा हो तो बाकी विकल्प बारी-बारी आज़माएँ। «केवल सॉफ़्टवेयर» हमेशा चलता है, पर पूरे रिज़ॉल्यूशन पर प्रोसेसर का एक पूरा कोर खा जाता है।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>प्रवाह की जगह कम विलंब को वरीयता दें</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>बफ़रिंग को कम से कम रखता है। यदि ऊँची बिटरेट वाली स्ट्रीम व्यस्त नेटवर्क पर अटके तो इसे बंद कर दें।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>डिकोडिंग</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>तंत्र की भाषा</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>भाषा</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>leolink को दोबारा चालू करने पर लागू होता है।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>विस्तृत लॉग</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>कैमरे को भेजा गया हर अनुरोध, डिकोडर का हर निर्णय और हर पुनःसंयोजन ~/.local/share/leolink/leolink.log में दर्ज करता है।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>निदान खोलें…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>त्रुटियाँ और चेतावनियाँ हमेशा दर्ज होती हैं। विस्तृत लॉग कैमरे के साथ हुई बातचीत भी जोड़ देता है — कुछ गड़बड़ हो तो इसे चालू करें, समस्या दोहराएँ, फिर सहायता ▸ निदान से रिपोर्ट भेजें। पासवर्ड और सत्र-टोकन कुछ भी लिखे जाने से पहले हटा दिए जाते हैं।</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>निदान</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>ffmpeg स्थापित नहीं है, इसलिए रिकॉर्डिंग संभव नहीं।</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>%1 के लिए कोई स्ट्रीम पता नहीं।</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="99"/>
        <source>Recording failed: %1</source>
        <translation>रिकॉर्डिंग विफल: %1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="131"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>रिकॉर्डिंग में कोई डेटा नहीं आया (ffmpeg निकास %1)।</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="147"/>
        <source>Could not start ffmpeg.</source>
        <translation>ffmpeg चालू नहीं हो सका।</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="121"/>
        <source>File format not recognised.</source>
        <translation>फ़ाइल का प्रारूप पहचाना नहीं गया।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="122"/>
        <source>Invalid input.</source>
        <translation>अमान्य प्रविष्टि।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="123"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>कैमरे के पास कोई खाली सत्र नहीं है। वह एक बार में मुट्ठी भर ही चलने देता है, और वे फ़ोन ऐप तथा उसके वेब पन्ने के साथ साझा होते हैं। उन्हें बंद करें, या एक मिनट रुकें कि पुराने अपने आप समाप्त हो जाएँ।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="127"/>
        <source>Session expired.</source>
        <translation>सत्र समाप्त हो गया।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="128"/>
        <source>Wrong user name or password.</source>
        <translation>उपयोक्ता-नाम या पासवर्ड गलत है।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="129"/>
        <source>Timed out.</source>
        <translation>समय समाप्त।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="130"/>
        <source>This firmware does not support that command.</source>
        <translation>यह फ़र्मवेयर उस आदेश को नहीं जानता।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="131"/>
        <source>Could not read the configuration.</source>
        <translation>सेटिंग पढ़ी नहीं जा सकी।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="132"/>
        <source>Could not verify the configuration.</source>
        <translation>सेटिंग जाँची नहीं जा सकी।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="133"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>कैमरे के एक हिस्से ने उत्तर नहीं दिया। पूछे गए सवाल के अनुसार इसका अर्थ है कि कोई SD कार्ड लगा नहीं है, या कैमरे के पास इंटरनेट तक रास्ता नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="136"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>अनुमति नहीं — इस मॉडल में वह हार्डवेयर नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="137"/>
        <source>Account invalid, log in again.</source>
        <translation>खाता अमान्य, दोबारा लॉगिन करें।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="138"/>
        <source>User name already taken.</source>
        <translation>यह उपयोक्ता-नाम पहले से लिया जा चुका है।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="139"/>
        <source>Maximum number of users reached.</source>
        <translation>उपयोक्ताओं की अधिकतम संख्या पूरी हो गई।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="140"/>
        <source>Camera busy, try again shortly.</source>
        <translation>कैमरा व्यस्त है, थोड़ी देर बाद फिर आज़माएँ।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="141"/>
        <source>IP address conflict.</source>
        <translation>IP पते का टकराव।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="142"/>
        <source>Configuration test failed.</source>
        <translation>सेटिंग की जाँच विफल रही।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="143"/>
        <source>FTP login failed.</source>
        <translation>FTP लॉगिन विफल।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="144"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP निर्देशिका नहीं बना सका।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="145"/>
        <source>FTP upload failed.</source>
        <translation>FTP अपलोड विफल।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="146"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP सर्वर तक नहीं पहुँच सका।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="147"/>
        <source>Camera reported error %1.</source>
        <translation>कैमरे ने त्रुटि %1 बताई।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="348"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>कैमरा इस समय अनुरोधों का उत्तर नहीं दे रहा। जब उसे एक साथ बहुत अनुरोध मिल जाएँ तो वह ऐसा करता है; थोड़ी देर में वह अपने आप सँभल जाता है।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="355"/>
        <source>Cannot reach %1: %2</source>
        <translation>%1 तक नहीं पहुँच पा रहे: %2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="369"/>
        <source>Unexpected reply from %1.</source>
        <translation>%1 से अप्रत्याशित उत्तर।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="472"/>
        <source>Login returned no token.</source>
        <translation>लॉगिन से कोई टोकन नहीं मिला।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="511"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — फ़र्मवेयर %2, %3 चैनल</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="776"/>
        <source>The camera could not join that network: %1</source>
        <translation>कैमरा उस नेटवर्क से नहीं जुड़ सका: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="786"/>
        <source>E-mail</source>
        <translation>ई-मेल</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="796"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="836"/>
        <source>Update available: %1</source>
        <translation>अद्यतन उपलब्ध: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="837"/>
        <source>The firmware is up to date.</source>
        <translation>फ़र्मवेयर नया ही है।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="854"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>अद्यतन हो रहा है। कैमरा अपने आप दोबारा चालू होगा और कई मिनट तक पहुँच से बाहर रहेगा। उसकी बिजली न काटें।</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="987"/>
        <source>Snapshot failed.</source>
        <translation>स्नैपशॉट विफल।</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>पूरा सप्ताह</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>कभी नहीं</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>रात में</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>काम के घंटे</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>सप्ताहांत</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>उलटें</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>रोज़ 22:00 से 06:00 तक।</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>सोमवार से शुक्रवार, 08:00 से 17:00 तक।</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>कुछ भी चुना नहीं गया — यह कभी नहीं चलेगा।</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>हमेशा चालू।</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>सप्ताह में %n घंटा।</numerusform><numerusform>सप्ताह में %n घंटे।</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>इस कैमरे में ये सेटिंग नहीं हैं।</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="34"/>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <source>Cameras</source>
        <translation>कैमरे</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="41"/>
        <source>Layout</source>
        <translation>सज्जा</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="80"/>
        <source>Add</source>
        <translation>जोड़ें</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="81"/>
        <source>Remove</source>
        <translation>हटाएँ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="85"/>
        <source>Scan network…</source>
        <translation>नेटवर्क खंगालें…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="87"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>नेटवर्क से पूछता है कि कौन-से ONVIF कैमरे मौजूद हैं। इसमें एक ही मल्टीकास्ट पूछताछ जाती है; जो उपकरण चुप रहते हैं उनसे कभी संपर्क नहीं किया जाता।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="102"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 या camera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="107"/>
        <source>optional: pass show reolink/hall</source>
        <translation>वैकल्पिक: pass show reolink/dalan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="109"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>यदि दिया गया हो तो यह आदेश चलता है और उसका परिणाम पासवर्ड की तरह इस्तेमाल होता है। इससे रहस्य सेटिंग फ़ाइल से बाहर रहता है।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="112"/>
        <source>optional, for P2P access</source>
        <translation>वैकल्पिक, P2P पहुँच के लिए</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="117"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>कोई भी पता जिसे libmpv खोल सके। दूसरे निर्माताओं के कैमरों, किसी NVR स्ट्रीम या स्थानीय फ़ाइल के लिए इसका उपयोग करें।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="121"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>उप-स्ट्रीम (कम बैंडविड्थ)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="122"/>
        <source>Main stream (full resolution)</source>
        <translation>मुख्य स्ट्रीम (पूरा रिज़ॉल्यूशन)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="126"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV (कम विलंब)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan (कैमरे का अपना प्रोटोकॉल)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <location filename="../src/SettingsDialog.cpp" line="150"/>
        <source>Custom URL</source>
        <translation>अपना पता</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>RTSP अधिकांश कैमरों पर ठीक बैठता है और सबसे पहले यही आज़माना चाहिए।

HTTP-FLV को केवल पोर्ट 80 चाहिए, जो वहाँ काम आता है जहाँ RTSP रोका गया हो।

Baichuan वही है जो Reolink का अपना ऐप बोलता है। जो कैमरे RTSP बंद रखते हैं — बैटरी वाले मॉडल ऐसा करते हैं — उनके लिए यही उत्तर है, और यह कैमरे के गिने-चुने वेब सत्रों में से एक भी नहीं लेता। केवल वीडियो: ध्वनि अब भी RTSP से आती है।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="138"/>
        <source>Use HTTPS for the control API</source>
        <translation>नियंत्रण इंटरफ़ेस के लिए HTTPS इस्तेमाल करें</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="139"/>
        <source>Show this camera</source>
        <translation>यह कैमरा दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="142"/>
        <source>Name</source>
        <translation>नाम</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="143"/>
        <source>Host</source>
        <translation>पता</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="144"/>
        <source>User</source>
        <translation>उपयोक्ता</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="145"/>
        <source>Password</source>
        <translation>पासवर्ड</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="146"/>
        <source>Password command</source>
        <translation>पासवर्ड-आदेश</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="147"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="148"/>
        <source>Stream</source>
        <translation>स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="149"/>
        <source>Transport</source>
        <translation>परिवहन</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>Test connection</source>
        <translation>संयोजन जाँचें</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Settings for this camera…</source>
        <translation>इस कैमरे की सेटिंग…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>leolink की ओर से पहचान, प्रतिक्रियाएँ और रिकॉर्डिंग, तथा कैमरे का अपना एन्कोडर, चित्र और समय-सारणी।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>automatic</source>
        <translation>स्वतः</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="224"/>
        <source>Columns</source>
        <translation>स्तंभ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="225"/>
        <source>Rows</source>
        <translation>पंक्तियाँ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="227"/>
        <source>Grid size</source>
        <translation>जाली का आकार</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="252"/>
        <source>Row</source>
        <translation>पंक्ति</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="253"/>
        <source>Column</source>
        <translation>स्तंभ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="254"/>
        <source>Row span</source>
        <translation>कितनी पंक्तियाँ घेरे</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="255"/>
        <source>Column span</source>
        <translation>कितने स्तंभ घेरे</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="257"/>
        <source>Position of the selected camera</source>
        <translation>चुने हुए कैमरे की जगह</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="268"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>पंक्ति और स्तंभ को «स्वतः» पर छोड़ दें तो कैमरे क्रम से जाली भरते जाएँगे। कई खाने घेरकर एक कैमरा एक से अधिक खाने ले सकता है।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="421"/>
        <source>New camera</source>
        <translation>नया कैमरा</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="436"/>
        <source>Remove camera</source>
        <translation>कैमरा हटाएँ</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="437"/>
        <source>Remove “%1” from the list?</source>
        <translation>«%1» को सूची से हटाएँ?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="457"/>
        <source>Enter a host first.</source>
        <translation>पहले एक पता दर्ज करें।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="464"/>
        <source>Contacting %1…</source>
        <translation>%1 से संपर्क हो रहा है…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Looking for cameras…</source>
        <translation>कैमरे खोजे जा रहे हैं…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Stop</source>
        <translation>रोकें</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="488"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>%n उपकरण मिला…</numerusform><numerusform>%n उपकरण मिले…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="498"/>
        <source>No cameras found</source>
        <translation>कोई कैमरा नहीं मिला</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="499"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>किसी ONVIF उपकरण ने उत्तर नहीं दिया।

कैमरे तभी उत्तर देते हैं जब ONVIF चालू हो, और यह पूछताछ न राउटर पार करती है, न अधिकांश VPN। आप कैमरे का पता टाइप करके उसे फिर भी जोड़ सकते हैं।</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="525"/>
        <source>unnamed device</source>
        <translation>बिना नाम का उपकरण</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="526"/>
        <source> (Reolink)</source>
        <translation> (Reolink)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="527"/>
        <source>  · already added</source>
        <translation>  · पहले से जोड़ा जा चुका</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="533"/>
        <source>Cameras found</source>
        <translation>कैमरे मिले</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="534"/>
        <source>Add which one?</source>
        <translation>कौन-सा जोड़ें?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="577"/>
        <source>Incomplete camera</source>
        <translation>अधूरा कैमरा</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="578"/>
        <source>“%1” has no host address.</source>
        <translation>«%1» का कोई पता नहीं है।</translation>
    </message>
</context>
<context>
    <name>leolink::SignalIndicator</name>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="53"/>
        <source>Wi-Fi</source>
        <translation>वाई-फ़ाई</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="54"/>
        <source>Mobile data</source>
        <translation>मोबाइल डेटा</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>तार से</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>संयोजन</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — शक्ति अज्ञात</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %3 में से %2</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>कैमरे तक नहीं पहुँच पा रहे: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>कैमरे ने RTSP पोर्ट पर उत्तर नहीं दिया।</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="159"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>ध्वनि भेजने के लिए ffmpeg चाहिए और वह चालू नहीं हो सका।</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="272"/>
        <source>The camera rejected the user name or password.</source>
        <translation>कैमरे ने उपयोक्ता-नाम या पासवर्ड ठुकरा दिया।</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="281"/>
        <source>The camera refused: %1</source>
        <translation>कैमरे ने मना किया: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="316"/>
        <source>This camera does not offer a speaker.</source>
        <translation>इस कैमरे में लाउडस्पीकर नहीं है।</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>स्ट्रीम समाप्त (%1) — दोबारा जुड़ रहे हैं</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>कमज़ोर संकेत</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>खराब स्ट्रीम</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>पिछले दस सेकंड में %n फ़्रेम बिगड़ा।

आमतौर पर कमज़ोर वाई-फ़ाई संकेत, या रिज़ॉल्यूशन के हिसाब से बहुत कम रखी गई बिटरेट। leolink जो सुधार सकता है सुधारता है — यह वही है जो वह नहीं सुधार सका।</numerusform><numerusform>पिछले दस सेकंड में %n फ़्रेम बिगड़े।

आमतौर पर कमज़ोर वाई-फ़ाई संकेत, या रिज़ॉल्यूशन के हिसाब से बहुत कम रखी गई बिटरेट। leolink जो सुधार सकता है सुधारता है — यह वही है जो वह नहीं सुधार सका।</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>जुड़ रहे हैं…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="703"/>
        <source>Mute this camera</source>
        <translation>इस कैमरे को मौन करें</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="306"/>
        <source>Volume</source>
        <translation>ध्वनि-मात्रा</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <location filename="../src/VideoTile.cpp" line="1007"/>
        <source>Record this camera</source>
        <translation>यह कैमरा रिकॉर्ड करें</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="985"/>
        <source>Speak through the camera</source>
        <translation>कैमरे के ज़रिए बोलें</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>कैमरा सेटिंग</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="455"/>
        <source>no host configured</source>
        <translation>कोई पता दर्ज नहीं</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="529"/>
        <source>connecting over Baichuan…</source>
        <translation>Baichuan से जुड़ रहे हैं…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="552"/>
        <location filename="../src/VideoTile.cpp" line="938"/>
        <source>custom stream</source>
        <translation>अपनी स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="554"/>
        <location filename="../src/VideoTile.cpp" line="940"/>
        <source>main stream</source>
        <translation>मुख्य स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="555"/>
        <location filename="../src/VideoTile.cpp" line="941"/>
        <source>sub stream</source>
        <translation>उप-स्ट्रीम</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="702"/>
        <source>Unmute this camera</source>
        <translation>इस कैमरे का मौन हटाएँ</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="720"/>
        <source>MOTION</source>
        <translation>गति</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="838"/>
        <location filename="../src/VideoTile.cpp" line="858"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>कैमरा फिर से सज रहा है… %1 से</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="860"/>
        <source>camera is reconfiguring…</source>
        <translation>कैमरा फिर से सज रहा है…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="913"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>स्ट्रीम टूटी — दोबारा जुड़ रहे हैं (%1)</translation>
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
        <translation>बोलना बंद करें</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1006"/>
        <source>Stop recording</source>
        <translation>रिकॉर्डिंग रोकें</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — गति क्षेत्र</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>किस पर नज़र रखी जाए यह चुनने के लिए चित्र पर खींचें। गहरे किए गए क्षेत्र अनदेखे रहते हैं — दृश्य के किनारे की सड़क, हवा में हिलते पेड़ या पड़ोसी के दरवाज़े के लिए उपयोगी।</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>सब पर नज़र रखें</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>सब अनदेखा करें</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>उलटें</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>बनाएँ</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>एक आयत पर नज़र रखें</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>एक आयत अनदेखा करें</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>अलग-अलग खानों पर खींचें।</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>नज़र रखने के लिए एक आयत खींचें। Shift दबाकर खींचने से भी वही होता है, बिना औज़ार बदले।</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>अनदेखा करने के लिए एक आयत खींचें। Ctrl दबाकर खींचने से भी वही होता है, बिना औज़ार बदले।</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>%1 से चित्र लिया जा रहा है…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>कोई चित्र नहीं: %1 — क्षेत्र फिर भी तय किए जा सकते हैं।</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>कोई चित्र उपलब्ध नहीं</translation>
    </message>
</context>
</TS>
