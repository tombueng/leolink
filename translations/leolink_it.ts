<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it" sourcelanguage="en">
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n nome della telecamera · %h indirizzo · %t ora · %e evento · %s on/off · %f registrazione · %p immagine</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>Esegui un comando</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="41"/>
        <location filename="../src/ActionEditor.cpp" line="44"/>
        <source>Command</source>
        <translation>Comando</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="50"/>
        <source>Call a webhook</source>
        <translation>Chiama un webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>Lasciato vuoto, leolink manda un piccolo documento JSON che descrive l'evento.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>Indirizzo</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>Metodo</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>Corpo</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>Pubblica un messaggio MQTT</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>Lasciato vuoto: lo stesso documento JSON del webhook.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>Conserva l'ultimo messaggio sul broker</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>Un client che si collega più tardi conosce subito lo stato attuale, invece di aspettare l'evento successivo. È ciò che di solito serve alla domotica.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>Broker</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>Porta</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>Argomento</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>Utente</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>Password</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>Payload</translation>
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
        <translation>ffmpeg non è installato, quindi il rilevamento dei suoni non è disponibile.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>Nessun indirizzo di flusso per %1.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="101"/>
        <source>Sound detection stopped: %1</source>
        <translation>Rilevamento dei suoni fermato: %1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="106"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>Non è stato possibile avviare ffmpeg per il rilevamento dei suoni.</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="52"/>
        <source>Cannot open a local port: %1</source>
        <translation>Impossibile aprire una porta locale: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="64"/>
        <source>Baichuan login failed: %1</source>
        <translation>Accesso Baichuan non riuscito: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="72"/>
        <source>The camera refused to send video: %1</source>
        <translation>La telecamera ha rifiutato di inviare il video: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="80"/>
        <source>The player did not connect.</source>
        <translation>Il riproduttore non si è connesso.</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="132"/>
        <source>The camera stopped sending.</source>
        <translation>La telecamera ha smesso di trasmettere.</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="77"/>
        <source>Camera</source>
        <translation>Telecamera</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="124"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="132"/>
        <source>Reading settings from %1…</source>
        <translation>Lettura delle impostazioni da %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="137"/>
        <source>Apply to camera</source>
        <translation>Applica alla telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="168"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>Riavvio in corso. La telecamera tornerà fra circa un minuto.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="184"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>Salvato. La telecamera si sta riconnettendo e tornerà a breve.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="190"/>
        <source>%1: the camera reported success.</source>
        <translation>%1: la telecamera ha riferito che è andata a buon fine.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="198"/>
        <source>Processor load %1 %</source>
        <translation>Carico del processore %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="203"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>Uscita del codificatore %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="205"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>Traffico di rete %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="207"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>La telecamera è al limite. Abbassare la risoluzione o i fotogrammi al secondo la stabilizzerà.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="227"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Administrator</source>
        <translation>Amministratore</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Viewer</source>
        <translation>Spettatore</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="253"/>
        <source>Done.</source>
        <translation>Fatto.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="258"/>
        <source>The card has been formatted.</source>
        <translation>La scheda è stata formattata.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="560"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>Più alto significa immagine migliore e più traffico di rete. La telecamera offre solo i valori che riesce davvero a reggere.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="564"/>
        <source>Resolution</source>
        <translation>Risoluzione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="565"/>
        <source>Frame rate</source>
        <translation>Fotogrammi al secondo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="566"/>
        <source>Bit rate (kbit/s)</source>
        <translation>Bitrate (kbit/s)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="567"/>
        <source>H.264 profile</source>
        <translation>Profilo H.264</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="575"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>Questo cambia la telecamera stessa, quindi ogni programma ne vede il risultato. Le scelte vengono dalla telecamera e cambiano da modello a modello.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="588"/>
        <source>Send sound</source>
        <translation>Trasmetti l'audio</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="591"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>Il microfono della telecamera. Con questo spento mette comunque una traccia audio nel flusso — del tutto muta, il che è molto più difficile da riconoscere di una traccia assente.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="431"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Sound</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>In leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="111"/>
        <source>In the camera</source>
        <translation>Nella telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="127"/>
        <source>Try again</source>
        <translation>Riprova</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="331"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>La telecamera stessa (ONVIF)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="333"/>
        <source>leolink watches the picture</source>
        <translation>leolink guardando l'immagine</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="335"/>
        <source>Either of the two</source>
        <translation>Uno dei due</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="336"/>
        <source>Do not watch</source>
        <translation>Non sorvegliare</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="345"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;La telecamera lo segnala:&lt;/b&gt; decide il rilevatore della telecamera stessa, che manda un evento ONVIF. Che cosa sorveglia e con quanta facilità scatta si imposta più sotto, in «Rilevamento», nella telecamera stessa.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink guarda l'immagine:&lt;/b&gt; questo computer apre una seconda connessione al flusso secondario e analizza l'immagine. Funziona con qualsiasi telecamera, comprese quelle che non segnalano nulla — e il rilevatore della telecamera non c'entra più nulla.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="356"/>
        <source>Choose what is watched…</source>
        <translation>Scegli che cosa viene sorvegliato…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="364"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>Quanto deve cambiare un punto dell'immagine perché conti. Più alto nota di più, ombre e pioggia comprese.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="369"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="372"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>Quanta parte dell'area sorvegliata deve cambiare perché conti come movimento. 20 ‰ è il due per cento dell'immagine — all'incirca una persona a media distanza.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="377"/>
        <source>Motion comes from</source>
        <translation>Il movimento lo segnala</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="380"/>
        <source>How leolink learns of motion</source>
        <translation>Come leolink viene a sapere del movimento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="386"/>
        <source>Minimum area</source>
        <translation>Area minima</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="388"/>
        <source>When leolink watches the picture</source>
        <translation>Quando leolink guarda l'immagine</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="399"/>
        <source>Raise an event on sound</source>
        <translation>Genera un evento sul suono</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="402"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>Richiede una telecamera con microfono. Apre un'altra connessione al flusso secondario.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="407"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="410"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 dB è quasi silenzio, -20 dB una voce alzata lì vicino.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="414"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="457"/>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="417"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>Tiene su l'evento dopo che il rumore è cessato, così un abbaio non viene segnalato quattro volte.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="428"/>
        <source>Sound above</source>
        <translation>Suono sopra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="429"/>
        <source>Hold for</source>
        <translation>Mantieni per</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="442"/>
        <source>Detection by leolink</source>
        <translation>Rilevamento da parte di leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="449"/>
        <source>Record while motion lasts</source>
        <translation>Registra finché dura il movimento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="452"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>Registra su questo computer a partire dal flusso dal vivo, quindi funziona anche quando la telecamera non ha una scheda SD.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="468"/>
        <source>Recording on this computer</source>
        <translation>Registrazione su questo computer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="472"/>
        <source>Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>Dove finiscono i file vale per tutte le telecamere e si imposta in Impostazioni ▸ Registrazioni.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="479"/>
        <source>Follow the defaults under Settings</source>
        <translation>Segui le impostazioni predefinite</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="480"/>
        <source>Use this camera&apos;s own</source>
        <translation>Usa quelle di questa telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="493"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="504"/>
        <source>Reactions</source>
        <translation>Reazioni</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="495"/>
        <source>What happens on an event</source>
        <translation>Che cosa succede a un evento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="511"/>
        <source>Muted</source>
        <translation>Silenziata</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="526"/>
        <source>Volume</source>
        <translation>Volume</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="528"/>
        <source>Sound in leolink</source>
        <translation>Audio in leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="532"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>Gli stessi due comandi stanno sul riquadro della telecamera, dove si raggiungono prima. Le telecamere partono silenziate: aprire una parete di telecamere non deve riempire la stanza dell'audio di ognuna.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="542"/>
        <source>Playback</source>
        <translation>Riproduzione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="602"/>
        <source>Main stream</source>
        <translation>Flusso principale</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="603"/>
        <source>Sub stream</source>
        <translation>Flusso secondario</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="608"/>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="622"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2130"/>
        <source>Brightness</source>
        <translation>Luminosità</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="623"/>
        <source>Contrast</source>
        <translation>Contrasto</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="624"/>
        <source>Saturation</source>
        <translation>Saturazione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="625"/>
        <source>Sharpness</source>
        <translation>Nitidezza</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="626"/>
        <source>Hue</source>
        <translation>Tonalità</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="628"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>Picture</source>
        <translation>Immagine</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="638"/>
        <source>Exposure and orientation</source>
        <translation>Esposizione e orientamento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="640"/>
        <source>Day / night</source>
        <translation>Giorno / notte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="641"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>«Auto» passa all'infrarosso man mano che cala la luce. Forzare il colore di notte dà un'immagine troppo scura per servire; forzare il bianco e nero di giorno perde il colore per niente.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="646"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="676"/>
        <source>Automatic</source>
        <translation>Automatico</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="647"/>
        <source>Always colour</source>
        <translation>Sempre a colori</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="648"/>
        <source>Always black and white</source>
        <translation>Sempre in bianco e nero</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="649"/>
        <source>Anti-flicker</source>
        <translation>Anti-sfarfallio</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="650"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>Falla combaciare con la frequenza della tua rete elettrica — 50 Hz in Europa — altrimenti l'illuminazione interna batterà contro l'otturatore e l'immagine pulserà.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="654"/>
        <source>Exposure</source>
        <translation>Esposizione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="655"/>
        <source>Mirror</source>
        <translation>Specchio</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="656"/>
        <source>Flip</source>
        <translation>Capovolgi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="657"/>
        <source>For a camera mounted upside down.</source>
        <translation>Per una telecamera montata sottosopra.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="658"/>
        <source>Backlight compensation</source>
        <translation>Compensazione del controluce</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="659"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>Aiuta quando il soggetto sta davanti a una finestra o a un cielo luminosi.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="661"/>
        <source>Noise reduction</source>
        <translation>Riduzione del rumore</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="662"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>Pulisce un'immagine scura, al prezzo di sbavare tutto ciò che si muove.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="664"/>
        <source>Rotation</source>
        <translation>Rotazione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="665"/>
        <source>Dynamic contrast</source>
        <translation>Contrasto dinamico</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="669"/>
        <source>Infrared illumination</source>
        <translation>Illuminazione a infrarossi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="671"/>
        <source>Infrared lamps</source>
        <translation>Lampade a infrarossi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="672"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>«Auto» le accende quando fa buio. Spegnile se la telecamera guarda attraverso un vetro — il riflesso la acceca.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="677"/>
        <source>Always on</source>
        <translation>Sempre accese</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="678"/>
        <source>Always off</source>
        <translation>Sempre spente</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1793"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2072"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2084"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2100"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <source>User</source>
        <translation>Utente</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>Rights</source>
        <translation>Diritti</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="699"/>
        <source>Add…</source>
        <translation>Aggiungi…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="700"/>
        <source>Change password…</source>
        <translation>Cambia la password…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="701"/>
        <source>Delete</source>
        <translation>Elimina</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="715"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>Sono account sulla telecamera, non in leolink. Un account spettatore può guardare ma non cambiare nulla — conviene usarlo per tutto ciò che deve solo vedere l'immagine, così una password conservata non può essere rivolta contro le impostazioni della telecamera.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="732"/>
        <source>Users</source>
        <translation>Utenti</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>New user</source>
        <translation>Nuovo utente</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <source>User name</source>
        <translation>Nome utente</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <source>Password for %1</source>
        <translation>Password di %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Creating %1…</source>
        <translation>Creazione di %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>Change password</source>
        <translation>Cambia la password</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>New password for %1</source>
        <translation>Nuova password di %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>This is the account leolink uses</source>
        <translation>Questo è l'account che usa leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="781"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>Cambiala qui e leolink resterà fuori finché la nuova password non sarà inserita anche in Telecamere.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="785"/>
        <source>Changing the password for %1…</source>
        <translation>Cambio della password di %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="798"/>
        <source>Cannot delete this account</source>
        <translation>Impossibile eliminare questo account</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink è collegato come «%1». Eliminarlo taglierebbe subito la connessione con questa telecamera.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="804"/>
        <source>Delete user</source>
        <translation>Elimina l'utente</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="805"/>
        <source>Delete “%1” from the camera?</source>
        <translation>Eliminare «%1» dalla telecamera?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="809"/>
        <source>Deleting %1…</source>
        <translation>Eliminazione di %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="816"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1224"/>
        <source>Format the SD card</source>
        <translation>Formatta la scheda SD</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="818"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Cancellare tutto quello che c'è sulla scheda di %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="821"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>Ogni registrazione sulla scheda viene eliminata. Non si può annullare, e nulla che non sia già stato scaricato potrà essere recuperato.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="824"/>
        <source>Erase</source>
        <translation>Cancella</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="831"/>
        <source>Formatting…</source>
        <translation>Formattazione…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="841"/>
        <source>Wi-Fi signal</source>
        <translation>Segnale Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="845"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1169"/>
        <source>Reading…</source>
        <translation>Lettura…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="849"/>
        <source>Connection</source>
        <translation>Connessione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="862"/>
        <source>Scan</source>
        <translation>Esplora</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="866"/>
        <source>Join network</source>
        <translation>Unisciti alla rete</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="880"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="914"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1803"/>
        <source>Network</source>
        <translation>Rete</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="882"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1794"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2073"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2085"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2101"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <source>Password</source>
        <translation>Password</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="885"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="891"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>È la telecamera a esplorare, non questo computer — conta quello che raggiunge lei. La password viene provata prima di essere salvata, così un errore di battitura viene rifiutato invece di lasciare la telecamera senza alcuna rete.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="899"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>Indirizzi e porte si leggono qui ma si cambiano nell'interfaccia web della telecamera. Sbagliarne uno toglie del tutto la telecamera dalla rete, e l'unica via di ritorno è il pin di ripristino — lì una finestra di avviso non sostituisce lo schermo del produttore.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="944"/>
        <source>strong</source>
        <translation>forte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="945"/>
        <source>good</source>
        <translation>buono</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="946"/>
        <source>fair</source>
        <translation>discreto</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="947"/>
        <source>weak</source>
        <translation>debole</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="948"/>
        <source>unknown</source>
        <translation>sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1002"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1007"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>, %n punto di accesso</numerusform><numerusform>, %n punti di accesso</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1012"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>Segnale come lo sente la telecamera: %1 su 4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1014"/>
        <source>Encryption: %1</source>
        <translation>Cifratura: %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1016"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>Sentito da %n punto di accesso — una rete, più nodi. Viene mostrato il più forte.</numerusform><numerusform>Sentito da %n punti di accesso — una rete, più nodi. Viene mostrato il più forte.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1030"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>Alcuni nomi sono stati sentiti da più punti di accesso — è una rete mesh. La telecamera si unisce al nome, non a un nodo preciso; è la mesh a decidere con quale parla e a passarla quando serve. Per trovare il punto migliore, sposta la telecamera e guarda sopra «Segnale Wi-Fi»: quello è il collegamento che ha davvero.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1040"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>%n rete trovata, la più forte per prima.</numerusform><numerusform>%n reti trovate, la più forte per prima.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1048"/>
        <source>scanning…</source>
        <translation>esplorazione…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1051"/>
        <source>The camera is scanning for networks…</source>
        <translation>La telecamera sta cercando reti…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>Change the camera&apos;s network</source>
        <translation>Cambia la rete della telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Spostare %1 su «%2»?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1066"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>La telecamera prova prima la password e rifiuta se è sbagliata, quindi la cosa è meno rischiosa di quanto sembri.

Sparirà comunque per un minuto mentre si riconnette, e se la rete nuova le assegna un altro indirizzo dovrai aggiornarlo qui dopo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1072"/>
        <source>Join</source>
        <translation>Unisciti</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1080"/>
        <source>Testing the password on the camera…</source>
        <translation>Prova della password sulla telecamera…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1098"/>
        <source>Link</source>
        <translation>Collegamento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1099"/>
        <source>Address</source>
        <translation>Indirizzo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1100"/>
        <source>Netmask</source>
        <translation>Maschera di rete</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1101"/>
        <source>Gateway</source>
        <translation>Gateway</translation>
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
        <translation>Nome della rete</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1125"/>
        <source>Ports</source>
        <translation>Porte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1127"/>
        <source>The camera reported nothing.</source>
        <translation>La telecamera non ha segnalato nulla.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1355"/>
        <source>Restart the camera</source>
        <translation>Riavvia la telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1141"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>La telecamera esce dalla rete per un minuto circa e torna da sola. Le registrazioni sulla sua scheda SD non vengono toccate e le impostazioni restano.

Vale la pena provarci quando una telecamera ha smesso di rispondere, rifiuta nuove connessioni o si è scombinata dopo un aggiornamento del firmware.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1149"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1362"/>
        <source>Restart</source>
        <translation>Riavvia</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1160"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>Il ripristino di fabbrica non viene offerto qui. Cancella anche le impostazioni di rete, e una telecamera che ha dimenticato il suo Wi-Fi va tirata giù e raggiunta via cavo — se lo vuoi davvero, usa l'interfaccia web della telecamera stessa.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1171"/>
        <source>Condition</source>
        <translation>Stato</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1176"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1244"/>
        <source>Not checked.</source>
        <translation>Non controllato.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1179"/>
        <source>Check for updates</source>
        <translation>Cerca aggiornamenti</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1181"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>È la telecamera a chiedere a Reolink, non questo computer — le serve quindi una via d'uscita verso internet tutta sua.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1185"/>
        <source>Asking Reolink…</source>
        <translation>Richiesta a Reolink…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1190"/>
        <source>Install update</source>
        <translation>Installa l'aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1194"/>
        <source>Install firmware</source>
        <translation>Installa il firmware</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Aggiornare il firmware di %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1198"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>La telecamera scarica l'aggiornamento da sola e si riavvia. Sarà irraggiungibile per parecchi minuti.

Non toglierle corrente durante l'aggiornamento — una telecamera interrotta a metà scrittura di solito va rimandata indietro.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1203"/>
        <source>Install</source>
        <translation>Installa</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1218"/>
        <source>Firmware</source>
        <translation>Firmware</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1228"/>
        <source>Storage</source>
        <translation>Archiviazione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1231"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>La formattazione cancella ogni registrazione sulla scheda. Non c'è modo di tornare indietro né una conferma dalla telecamera dopo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1248"/>
        <source>Ask the camera</source>
        <translation>Chiedi alla telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1252"/>
        <source>Copy the list</source>
        <translation>Copia l'elenco</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1255"/>
        <source>Copied.</source>
        <translation>Copiato.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1263"/>
        <source>What this camera supports</source>
        <translation>Che cosa supporta questa telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1266"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>Il firmware Reolink cambia enormemente da modello a modello, e l'unico modo affidabile per sapere che cosa sa fare una telecamera è chiederglielo. Se a leolink manca qualcosa che la tua telecamera ha chiaramente, è questo elenco, in una segnalazione di errore, a rendere possibile aggiungerlo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1283"/>
        <source>Maintenance</source>
        <translation>Manutenzione</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>Richiesta di %n comando…</numerusform><numerusform>Richiesta di %n comandi…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1331"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>Supportato (%1):
%2

Non supportato (%3):
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1357"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Riavviare %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1359"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>L'immagine sparirà per circa un minuto. Qualsiasi cosa si stia registrando ora si fermerà.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>Asking %1 to restart…</source>
        <translation>Richiesta di riavvio a %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1449"/>
        <source>On-screen text</source>
        <translation>Testo sull'immagine</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1451"/>
        <source>Background</source>
        <translation>Sfondo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1452"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>Disegna un riquadro dietro al testo perché resti leggibile su una scena chiara.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1454"/>
        <source>Watermark</source>
        <translation>Filigrana</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1455"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>Incorpora un marchio nella registrazione stessa.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1459"/>
        <source>Privacy areas…</source>
        <translation>Aree private…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1462"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>Parti dell'inquadratura che la telecamera oscura prima che qualcosa ne esca.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>Privacy</source>
        <translation>Riservatezza</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1477"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>Oscurato nella telecamera stessa, quindi la parte coperta manca in ogni visualizzatore e in ogni registrazione — la finestra di un vicino, o una scrivania che non deve finire in video.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1484"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>La telecamera lo imprime nell'immagine, quindi compare in ogni registrazione e in ogni programma — non solo qui.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1492"/>
        <source>Overlay</source>
        <translation>Sovrimpressione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1501"/>
        <source>Motion detection in the camera</source>
        <translation>Rilevamento del movimento nella telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="385"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1503"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>Sensitivity</source>
        <translation>Sensibilità</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1504"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>Più alto nota di più, ombre e fari compresi.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1506"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1815"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2023"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2077"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2087"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2093"/>
        <source>Switched on</source>
        <translation>Acceso</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1512"/>
        <source>Choose the area…</source>
        <translation>Scegli l'area…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1514"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>Quali parti dell'immagine la telecamera sorveglia. Tutto ciò che sta fuori dall'area viene ignorato — una strada al bordo dell'inquadratura, un albero al vento, la porta di un vicino.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1520"/>
        <source>Where it looks</source>
        <translation>Dove guarda</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1524"/>
        <source>Choose the hours…</source>
        <translation>Scegli le ore…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1529"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>Una settimana di ore: in quelle spuntate la telecamera segnala il movimento; nelle altre tace. Non ha nulla a che vedere con quanto è sensibile — quello si imposta più sotto.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1536"/>
        <source>When it reports at all</source>
        <translation>Quando segnala qualcosa</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>From</source>
        <translation>Dal</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>To</source>
        <translation>A</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1555"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>Nell'arco della giornata la telecamera può scattare con più o meno facilità. È così che si evita che i fari di notte facciano scattare tutto senza renderla cieca di giorno. Quanti intervalli ci sono lo decide la telecamera; i loro orari e le loro sensibilità sono affar tuo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1563"/>
        <source>How readily it triggers</source>
        <translation>Con quanta facilità scatta</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1571"/>
        <source>What it recognises</source>
        <translation>Che cosa riconosce</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1573"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1706"/>
        <source>People</source>
        <translation>Persone</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1574"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1707"/>
        <source>Vehicles</source>
        <translation>Veicoli</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1575"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1708"/>
        <source>Animals</source>
        <translation>Animali</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1576"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1709"/>
        <source>Faces</source>
        <translation>Volti</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1579"/>
        <source>Camera-side detection</source>
        <translation>Rilevamento nella telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1588"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>Questo è il rilevamento della telecamera stessa, quello che segnala via ONVIF. L'analisi dell'immagine fatta da leolink si imposta a parte, in Telecamere → Eventi.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1597"/>
        <source>Detection</source>
        <translation>Rilevamento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1674"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — area di rilevamento della telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1675"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>Trascina sull'immagine per scegliere che cosa sorveglia la telecamera. Le aree scurite vengono ignorate. Questa è la griglia della telecamera stessa, %1 per %2, quindi più fitta di quella di leolink.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <source>%1 — when to watch</source>
        <translation>%1 — quando sorvegliare</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1693"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>Le ore in cui la telecamera segnala movimento. Fuori da quelle continua a vedere, ma non dice nulla.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1704"/>
        <source>Any movement</source>
        <translation>Qualsiasi movimento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1705"/>
        <source>Continuous</source>
        <translation>Continuo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1737"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>Questa telecamera tiene una settimana separata per ogni tipo di evento. Quale?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1785"/>
        <source>SIM card</source>
        <translation>Scheda SIM</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1787"/>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1788"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>Serve solo se la scheda lo chiede. Tre tentativi sbagliati bloccano la scheda, che a quel punto vuole un PUK che ha solo il tuo operatore.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1792"/>
        <source>Access point (APN)</source>
        <translation>Punto di accesso (APN)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1795"/>
        <source>Authentication</source>
        <translation>Autenticazione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1796"/>
        <source>Use mobile data</source>
        <translation>Usa i dati mobili</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1800"/>
        <source>Modem</source>
        <translation>Modem</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1802"/>
        <source>Card</source>
        <translation>Scheda</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1804"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1805"/>
        <source>Signal</source>
        <translation>Segnale</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1806"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1807"/>
        <source>Card number</source>
        <translation>Numero della scheda</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1811"/>
        <source>Mobile connection</source>
        <translation>Connessione mobile</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1813"/>
        <source>Data used</source>
        <translation>Dati consumati</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1814"/>
        <source>Monthly limit</source>
        <translation>Limite mensile</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;Non provato su hardware reale.&lt;/b&gt; Nessuno fra chi lavora a leolink possiede una telecamera con modem, quindi questo è stato scritto solo a partire dal protocollo. Non può rovinare nulla — un comando che la telecamera non conosce viene semplicemente rifiutato — ma può altrettanto bene non mostrare proprio niente.

Se la tua telecamera ha una SIM, «Che cosa supporta questa telecamera», sotto Manutenzione, elenca i comandi che il suo firmware ha davvero. Quell'elenco, in una segnalazione di errore, è ciò che permetterebbe di completare questa parte come si deve.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1835"/>
        <source>Mobile data</source>
        <translation>Dati mobili</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1852"/>
        <source>nothing blanked</source>
        <translation>niente oscurato</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1854"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>%n area oscurata</numerusform><numerusform>%n aree oscurate</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1856"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n area, disattivata</numerusform><numerusform>%n aree, disattivate</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1938"/>
        <source>%1 — when to record</source>
        <translation>%1 — quando registrare</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1939"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>Le ore in cui la telecamera registra sulla propria scheda. Serve una scheda inserita; la registrazione su questo computer si imposta in Telecamere → Eventi e ne fa a meno.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2017"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2027"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>Registrazione sulla scheda della telecamera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2019"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2029"/>
        <source>Overwrite when full</source>
        <translation>Sovrascrivi quando è piena</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2020"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2032"/>
        <source>Record before the event</source>
        <translation>Registra prima dell'evento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="466"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2021"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2035"/>
        <source>Keep recording after</source>
        <translation>Continua a registrare per altri</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2022"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2036"/>
        <source>File length</source>
        <translation>Durata dei file</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2030"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>Spento significa che la registrazione semplicemente si ferma quando la scheda si riempie.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2033"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>Conserva i secondi che precedono uno scatto, di solito la parte interessante.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2039"/>
        <source>When to record…</source>
        <translation>Quando registrare…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2042"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>Le ore della settimana in cui la telecamera registra da sola sulla propria scheda.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2052"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>Questo regola ciò che la telecamera scrive sulla propria scheda SD. La registrazione su questo computer si imposta in Telecamere → Eventi e non ha bisogno di scheda.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2060"/>
        <source>Recording</source>
        <translation>Registrazione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2068"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2096"/>
        <source>E-mail</source>
        <translation>E-mail</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2070"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2082"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2098"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <source>Server</source>
        <translation>Server</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2071"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2083"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2099"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2136"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <source>Port</source>
        <translation>Porta</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2074"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2103"/>
        <source>Encrypted</source>
        <translation>Cifrato</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2075"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2104"/>
        <source>Not more often than</source>
        <translation>Non più spesso di</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2076"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2105"/>
        <source>Attach</source>
        <translation>Allega</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2080"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2133"/>
        <source>FTP upload</source>
        <translation>Caricamento FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2086"/>
        <source>Folder</source>
        <translation>Cartella</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2091"/>
        <source>Push notifications</source>
        <translation>Notifiche push</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2102"/>
        <source>Send to</source>
        <translation>Invia a</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2114"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2121"/>
        <source>Siren</source>
        <translation>Sirena</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2116"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2123"/>
        <source>Sound on an alarm</source>
        <translation>Suona in caso di allarme</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2117"/>
        <source>Times</source>
        <translation>Orari</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2118"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2129"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2140"/>
        <source>Mode</source>
        <translation>Modo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2126"/>
        <source>Spotlight</source>
        <translation>Faretto</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2128"/>
        <source>On</source>
        <translation>Acceso</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <source>Directory</source>
        <translation>Directory</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2144"/>
        <source>Push notification</source>
        <translation>Notifica push</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2146"/>
        <source>Schedule</source>
        <translation>Programmazione</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2152"/>
        <source>Send a test e-mail</source>
        <translation>Manda un'e-mail di prova</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2155"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>Richiesta alla telecamera di mandare un'e-mail di prova…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2158"/>
        <source>Test the FTP upload</source>
        <translation>Prova il caricamento FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2161"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>Richiesta alla telecamera di provare il server FTP…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2172"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>Li manda la telecamera stessa, quindi continuano a funzionare quando questo computer è spento. Le reazioni di leolink — comandi, webhook, MQTT — stanno in Telecamere → Eventi.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2181"/>
        <source>Alerts</source>
        <translation>Avvisi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <source>Time server</source>
        <translation>Server dell'ora</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <source>Synchronise the clock</source>
        <translation>Sincronizza l'orologio</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2194"/>
        <source>Every</source>
        <translation>Ogni</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <source>Scheduled restart</source>
        <translation>Riavvio programmato</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <source>Restart regularly</source>
        <translation>Riavvia con regolarità</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>Alcune telecamere diventano inaffidabili dopo settimane di accensione; un riavvio settimanale è una cura a buon mercato.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2204"/>
        <source>Day</source>
        <translation>Giorno</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2205"/>
        <source>Hour</source>
        <translation>Ora</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2206"/>
        <source>Minute</source>
        <translation>Minuto</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2210"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>Una telecamera con l'orologio sbagliato data male le sue registrazioni, il che pesa più di quanto sembri quando ne devi ritrovare una.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Time</source>
        <translation>Ora</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2340"/>
        <source>Ready.</source>
        <translation>Pronto.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2445"/>
        <source>Writing to the camera…</source>
        <translation>Scrittura sulla telecamera…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2503"/>
        <source>Nothing to write.</source>
        <translation>Niente da scrivere.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2520"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>Salvato. Cambiare il codificatore riavvia il flusso, quindi l'immagine può sparire per un attimo.</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>Diagnostica</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>Solo errori</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>Avvisi ed errori</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>Attività normale</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>Tutto</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>Tutte le aree</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>Cerca…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>Mostra</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>Registrazione dettagliata</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>Annota ogni richiesta alla telecamera, ogni decisione del decodificatore e ogni riconnessione. Lasciala spenta nell'uso quotidiano — accendila quando qualcosa non va, riproduci il problema e invia poi il rapporto.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>Segui le nuove righe</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>Copia il rapporto</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>Dati di sistema e registro, pronti da incollare in una segnalazione di errore.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>Rapporto copiato.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>Salva il rapporto…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>Salva il rapporto</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>File di testo (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>Impossibile scrivere %1.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>Salvato in %1</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>Apri la cartella del registro</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>Password, token di sessione e indirizzi internet vengono rimossi prima di scrivere qualsiasi cosa, quindi il rapporto può essere condiviso così com'è. Gli indirizzi della tua rete restano — di solito sono il primo indizio.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%1 di %2 righe</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>Impossibile aprire un socket UDP per la ricerca.</translation>
    </message>
</context>
<context>
    <name>leolink::EventDispatcher</name>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <location filename="../src/EventActions.cpp" line="108"/>
        <source>Command</source>
        <translation>Comando</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <source>could not be started</source>
        <translation>non è stato possibile avviarlo</translation>
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
        <translation>indirizzo non valido</translation>
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
        <translation>Registro eventi</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>Tutte le telecamere</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>Tutti gli eventi</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>Movimento</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>Con registrazione</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>Telecamera:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>Mostra:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>Aggiorna</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>Quando</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>Telecamera</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>Evento</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>Media</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>nessuna anteprima</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>Apri la registrazione</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>Svuota il registro…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>video</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>immagine</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + immagine</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>nessun evento registrato finora</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>solo registrazione</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>Registrazione: %1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation> (file mancante)</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>Immagine: %1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>Apri l'immagine</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>Niente da aprire</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>Il file di questo evento non c'è più.</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>Svuota il registro eventi</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>Cancellare tutta la cronologia degli eventi?

I video e le immagini registrati restano sul disco — viene svuotato solo il registro.</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>Applicazione</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>Interfaccia della telecamera</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>Eventi ONVIF</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>Rilevamento</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>Registrazione</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>Azioni sugli eventi</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>Rete</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>Interfaccia utente</translation>
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
        <translation>%1 non riuscito: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="110"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>Non è ancora configurata nessuna telecamera.

Usa «Telecamere…» per aggiungerne una.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="253"/>
        <source>&amp;File</source>
        <translation>&amp;File</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;Cameras…</source>
        <translation>&amp;Telecamere…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="260"/>
        <source>&amp;Settings…</source>
        <translation>&amp;Impostazioni…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="266"/>
        <source>&amp;Save snapshots…</source>
        <translation>&amp;Salva istantanee…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="271"/>
        <source>&amp;Record all cameras</source>
        <translation>&amp;Registra tutte le telecamere</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="278"/>
        <source>&amp;Event log…</source>
        <translation>&amp;Registro eventi…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="286"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>Registrazioni sulla &amp;telecamera…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>Sfoglia quello che è conservato sulla scheda SD della telecamera.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="292"/>
        <location filename="../src/MainWindow.cpp" line="725"/>
        <location filename="../src/MainWindow.cpp" line="1654"/>
        <source>No cameras configured</source>
        <translation>Nessuna telecamera configurata</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Which camera</source>
        <translation>Quale telecamera</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Show recordings from</source>
        <translation>Mostra le registrazioni di</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="315"/>
        <source>Open &amp;recordings folder</source>
        <translation>Apri la cartella delle re&amp;gistrazioni</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="323"/>
        <source>&amp;Quit</source>
        <translation>&amp;Esci</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="328"/>
        <source>&amp;View</source>
        <translation>&amp;Visualizza</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;Full screen</source>
        <translation>Schermo &amp;intero</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="369"/>
        <source>Show &amp;menu bar</source>
        <translation>Mostra la barra dei &amp;menu</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="383"/>
        <source>Show &amp;toolbar</source>
        <translation>Mostra la barra degli s&amp;trumenti</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="392"/>
        <source>Show status &amp;bar</source>
        <translation>Mostra la barra di s&amp;tato</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="401"/>
        <source>Hide window &amp;decoration</source>
        <translation>Nascondi la &amp;decorazione della finestra</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="413"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>Trascina la striscia sotto una telecamera per spostare la finestra. Ctrl+Maiusc+D riporta la cornice, Ctrl+M il menu.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="420"/>
        <source>&amp;Help</source>
        <translation>&amp;Aiuto</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Online handbook</source>
        <translation>Manuale in &amp;linea</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="429"/>
        <source>&amp;Protocol notes</source>
        <translation>Note sul &amp;protocollo</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="435"/>
        <source>&amp;Diagnostics…</source>
        <translation>&amp;Diagnostica…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="438"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>Che cosa hanno fatto leolink e le telecamere — e un rapporto da allegare a una segnalazione di errore.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="442"/>
        <source>&amp;Report a problem</source>
        <translation>Segnala un &amp;problema</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="447"/>
        <source>Report a problem</source>
        <translation>Segnala un problema</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;Allega un rapporto diagnostico&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>Registra che macchina hai, che cosa hanno risposto le telecamere e dove è andato storto — con password e indirizzi già rimossi. Senza di esso la maggior parte delle segnalazioni non può essere seguita.

Se il problema sai provocarlo, accendi prima la registrazione dettagliata nella finestra della diagnostica, fallo succedere di nuovo e copia poi il rapporto.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="458"/>
        <source>Open diagnostics</source>
        <translation>Apri la diagnostica</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Go to the issue tracker</source>
        <translation>Vai al tracciatore dei problemi</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="471"/>
        <source>&amp;About leolink</source>
        <translation>&amp;Informazioni su leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="474"/>
        <source>About leolink</source>
        <translation>Informazioni su leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="475"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;Un client Linux nativo per telecamere Reolink.&lt;/p&gt;&lt;p&gt;Parla direttamente i protocolli della telecamera: interfaccia HTTP, RTSP e ONVIF sulla rete locale, e il servizio P2P di Reolink quando vuoi raggiungere una telecamera da altrove.&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;Manuale&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;Codice sorgente&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Non collegato a Reolink né approvato da Reolink.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="487"/>
        <source>Main</source>
        <translation>Principale</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="499"/>
        <source>Ready</source>
        <translation>Pronto</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="515"/>
        <source>Leave full screen</source>
        <translation>Esci dallo schermo intero</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="522"/>
        <location filename="../src/MainWindow.cpp" line="586"/>
        <source>Cameras…</source>
        <translation>Telecamere…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <source>Event log…</source>
        <translation>Registro eventi…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="530"/>
        <location filename="../src/MainWindow.cpp" line="589"/>
        <source>Quit</source>
        <translation>Esci</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="580"/>
        <source>Show window</source>
        <translation>Mostra la finestra</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="749"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n telecamera dal vivo</numerusform><numerusform>%n telecamere dal vivo</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="958"/>
        <source>Esc leaves full screen</source>
        <translation>Esc esce dallo schermo intero</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="965"/>
        <location filename="../src/MainWindow.cpp" line="1004"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>Doppio clic per la griglia · Esc esce dallo schermo intero</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1002"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Esc esce dallo schermo intero · doppio clic su una telecamera per riempire lo schermo</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1027"/>
        <source>Grid view</source>
        <translation>Vista a griglia</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1209"/>
        <location filename="../src/MainWindow.cpp" line="1332"/>
        <source>Cannot create %1</source>
        <translation>Impossibile creare %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1246"/>
        <source>Recording %1</source>
        <translation>Registrazione di %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1254"/>
        <source>Saved %1</source>
        <translation>Salvato %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1260"/>
        <location filename="../src/MainWindow.cpp" line="1367"/>
        <source>Recording stopped</source>
        <translation>Registrazione fermata</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1267"/>
        <source>%1: %2</source>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1348"/>
        <source>Recording started</source>
        <translation>Registrazione avviata</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1366"/>
        <source>Recording all cameras</source>
        <translation>Registrazione di tutte le telecamere</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1447"/>
        <source>%1 at %2</source>
        <translation>%1 presso %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1467"/>
        <source>Motion detected</source>
        <translation>Movimento rilevato</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1479"/>
        <source>Sound detected</source>
        <translation>Suono rilevato</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1502"/>
        <source>Menu bar hidden</source>
        <translation>Barra dei menu nascosta</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1503"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>Con la barra dei menu e quella degli strumenti entrambe nascoste, premi Ctrl+M per riavere il menu.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1522"/>
        <source>Cannot save</source>
        <translation>Impossibile salvare</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1523"/>
        <source>Settings could not be written to %1.</source>
        <translation>Non è stato possibile scrivere le impostazioni in %1.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1589"/>
        <source>Play through %1</source>
        <translation>Riproduci attraverso %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1590"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>File audio (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Tutti i file (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1602"/>
        <source>Speaking through the camera…</source>
        <translation>Parlando attraverso la telecamera…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1609"/>
        <source>Finished.</source>
        <translation>Finito.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1732"/>
        <source>Nothing to capture</source>
        <translation>Niente da catturare</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1737"/>
        <source>Save snapshots to</source>
        <translation>Salva le istantanee in</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="1755"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>%n istantanea salvata</numerusform><numerusform>%n istantanee salvate</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1773"/>
        <source>Welcome to leolink</source>
        <translation>Benvenuto in leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1775"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Non è ancora configurata nessuna telecamera.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1777"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>Aggiungi una telecamera con il suo indirizzo, nome utente e password. leolink parla con la telecamera direttamente sulla tua rete — non entra in gioco nessun account nel cloud.&lt;p&gt;Il manuale spiega che cosa fa ogni opzione.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1781"/>
        <source>Add camera…</source>
        <translation>Aggiungi una telecamera…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1782"/>
        <source>Open handbook</source>
        <translation>Apri il manuale</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1858"/>
        <source>leolink is still running</source>
        <translation>leolink è ancora in esecuzione</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1859"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>Le telecamere continuano a registrare. Usa l'icona nell'area di notifica per tornare.</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>nessuna immagine disponibile</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — aree private</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>Traccia le parti dell'inquadratura che la telecamera deve oscurare. Le annerisce prima che qualcosa lasci l'apparecchio, quindi mancano nell'immagine dal vivo, nelle registrazioni e in ogni altro programma — compresa l'app del produttore.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>Rimuovi l'ultima</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>Rimuovi tutte</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>Recupero di un'immagine da %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>Nessuna immagine: %1 — le aree si possono disegnare lo stesso.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%1 di %2 aree</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>ffmpeg non è installato, quindi il rilevamento del movimento non è disponibile.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>Nessun indirizzo di flusso per %1.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="129"/>
        <source>Motion detection stopped: %1</source>
        <translation>Rilevamento del movimento fermato: %1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="154"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>Non è stato possibile avviare ffmpeg per il rilevamento del movimento.</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="157"/>
        <source>ONVIF subscription failed.</source>
        <translation>Sottoscrizione ONVIF non riuscita.</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>Broker o topic MQTT non impostati.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>Il broker MQTT non ha risposto.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>MQTT: %1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>MQTT: risposta inattesa dal broker.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>MQTT ha rifiutato la connessione: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — registrazioni sulla telecamera</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>Flusso principale</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>Flusso secondario</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>Cerca</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>Dal</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>al</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>Inizio</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>Durata</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>File</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>Riproduci</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>Scarica…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>Scegli un periodo e premi Cerca. Le registrazioni esistono solo se la telecamera ha una scheda SD inserita.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>Interrogazione di %1…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>In quel periodo non è stato trovato nulla. O non è stato registrato niente, oppure la telecamera non ha una scheda SD.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>%n registrazione trovata.</numerusform><numerusform>%n registrazioni trovate.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>Nessuna sessione con la telecamera — cerca prima.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>Nessun riproduttore</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>mpv non è stato trovato. La registrazione si trova in:

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>Salva la registrazione</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>Impossibile scrivere in %1.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>Salvato in %1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>Scaricamento non riuscito: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>Impostazioni</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>Finestra</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>In caso di movimento</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>Reazioni</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>Registrazioni</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>Generale</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>Mostra la barra dei menu</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>Ctrl+M lo cambia in qualsiasi momento.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>Mostra la barra degli strumenti</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>Mostra la barra di stato</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>Nascondi la decorazione della finestra</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>Per gli schermi a parete. Ctrl+Maiusc+D lo cambia.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>Aspetto</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>Mostra un'icona nell'area di notifica</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>Chiudere la finestra la nasconde invece di uscire</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>Ridurre a icona nasconde la finestra nell'area di notifica</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>Area di notifica</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>Tingi il riquadro di rosso per un attimo</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>Così un'occhiata a una parete di telecamere basta a vedere quale è stata.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> ms</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>Riproduci un suono</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>Vuoto: il suono di notifica del desktop</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>Sfoglia…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>Suono da riprodurre</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>File audio (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Tutti i file (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>Per</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>File audio</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>Sullo schermo</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>Porta in primo piano la finestra quando viene rilevato movimento</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>Dimensione precedente</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>Schermo intero</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>Torna come</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>La finestra</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>Quali telecamere generano un evento, e come, si imposta per ciascuna in Telecamere ▸ Impostazioni ▸ Rilevamento da parte di leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>Che cosa fa leolink quando una telecamera segnala qualcosa. Una telecamera segue queste impostazioni a meno che il suo dialogo non dica altro — tutte o nessuna, mai a metà: le impostazioni ereditate in parte sono le più difficili da districare quando qualcosa non scatta.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>Cartella delle registrazioni</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>Registrazioni e istantanee</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>Le registrazioni vengono scritte come Matroska senza ricodifica: l'immagine mantiene la qualità originale della telecamera e il processore resta quasi in riposo.

Se una telecamera registri o no è una sua impostazione, in Telecamere ▸ Impostazioni ▸ Reazioni.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>Hardware (consigliato)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>Hardware, a scelta del driver</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>Hardware, con copia dei fotogrammi</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="292"/>
        <source>Software only</source>
        <translation>Solo software</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="294"/>
        <source>“Recommended” names the decoder explicitly so that decoding and drawing stay on the same graphics API. Left to itself, mpv may decode through one API and draw through another, which on some cards turns the picture solid green.

If the picture is broken, try the others in turn. “Software only” always works but costs a whole processor core at full resolution.</source>
        <translation>«Consigliato» nomina il decodificatore esplicitamente perché decodifica e disegno restino sulla stessa interfaccia grafica. Lasciato a sé, mpv può decodificare con una e disegnare con l'altra, il che su alcune schede rende l'immagine di un verde pieno.

Se l'immagine è rotta, prova le altre a turno. «Solo software» funziona sempre ma costa un intero core del processore a piena risoluzione.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>Preferisci la bassa latenza alla fluidità</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>Tiene il buffer al minimo. Spegnilo se un flusso ad alto bitrate scatta su una rete carica.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>Decodifica</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>Lingua di sistema</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>Lingua</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>Ha effetto al riavvio di leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>Registrazione dettagliata</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>Annota ogni richiesta alla telecamera, ogni decisione del decodificatore e ogni riconnessione, in ~/.local/share/leolink/leolink.log.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>Apri la diagnostica…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>Errori e avvisi vengono sempre annotati. La registrazione dettagliata aggiunge il dialogo con la telecamera — accendila quando qualcosa non va, riproducilo e invia poi il rapporto da Aiuto ▸ Diagnostica. Password e token vengono rimossi prima di scrivere qualsiasi cosa.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>Diagnostica</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>ffmpeg non è installato, quindi la registrazione non è disponibile.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>Nessun indirizzo di flusso per %1.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="99"/>
        <source>Recording failed: %1</source>
        <translation>Registrazione non riuscita: %1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="131"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>La registrazione non ha prodotto dati (ffmpeg è uscito con %1).</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="147"/>
        <source>Could not start ffmpeg.</source>
        <translation>Non è stato possibile avviare ffmpeg.</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="121"/>
        <source>File format not recognised.</source>
        <translation>Formato del file non riconosciuto.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="122"/>
        <source>Invalid input.</source>
        <translation>Immissione non valida.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="123"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>La telecamera non ha sessioni libere. Ne ammette solo una manciata alla volta, condivise con l'app del telefono e con la sua pagina web. Chiudile, oppure aspetta un minuto che le vecchie scadano.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="127"/>
        <source>Session expired.</source>
        <translation>Sessione scaduta.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="128"/>
        <source>Wrong user name or password.</source>
        <translation>Nome utente o password errati.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="129"/>
        <source>Timed out.</source>
        <translation>Tempo scaduto.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="130"/>
        <source>This firmware does not support that command.</source>
        <translation>Questo firmware non supporta quel comando.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="131"/>
        <source>Could not read the configuration.</source>
        <translation>Non è stato possibile leggere la configurazione.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="132"/>
        <source>Could not verify the configuration.</source>
        <translation>Non è stato possibile verificare la configurazione.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="133"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>Una parte della telecamera non ha risposto. A seconda di che cosa è stato chiesto, significa che non c'è una scheda SD inserita, oppure che la telecamera non ha una via d'uscita verso internet.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="136"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>Non consentito — questo modello non ha l'hardware.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="137"/>
        <source>Account invalid, log in again.</source>
        <translation>Account non valido, accedi di nuovo.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="138"/>
        <source>User name already taken.</source>
        <translation>Nome utente già in uso.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="139"/>
        <source>Maximum number of users reached.</source>
        <translation>Raggiunto il numero massimo di utenti.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="140"/>
        <source>Camera busy, try again shortly.</source>
        <translation>Telecamera occupata, riprova fra poco.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="141"/>
        <source>IP address conflict.</source>
        <translation>Conflitto di indirizzi IP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="142"/>
        <source>Configuration test failed.</source>
        <translation>Prova della configurazione non riuscita.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="143"/>
        <source>FTP login failed.</source>
        <translation>Accesso FTP non riuscito.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="144"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP non è riuscito a creare la directory.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="145"/>
        <source>FTP upload failed.</source>
        <translation>Caricamento FTP non riuscito.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="146"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP non è riuscito a raggiungere il server.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="147"/>
        <source>Camera reported error %1.</source>
        <translation>La telecamera ha segnalato l'errore %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="348"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>In questo momento la telecamera non risponde alle richieste. Lo fa quando ne ha ricevute troppe insieme; si riprende da sola dopo un attimo.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="355"/>
        <source>Cannot reach %1: %2</source>
        <translation>Impossibile raggiungere %1: %2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="369"/>
        <source>Unexpected reply from %1.</source>
        <translation>Risposta inattesa da %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="472"/>
        <source>Login returned no token.</source>
        <translation>L'accesso non ha restituito alcun token.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="511"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — firmware %2, %3 canali</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="776"/>
        <source>The camera could not join that network: %1</source>
        <translation>La telecamera non è riuscita a unirsi a quella rete: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="786"/>
        <source>E-mail</source>
        <translation>E-mail</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="796"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="836"/>
        <source>Update available: %1</source>
        <translation>Aggiornamento disponibile: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="837"/>
        <source>The firmware is up to date.</source>
        <translation>Il firmware è aggiornato.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="854"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>Aggiornamento in corso. La telecamera si riavvierà da sola e sarà irraggiungibile per parecchi minuti. Non toglierle corrente.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="987"/>
        <source>Snapshot failed.</source>
        <translation>Istantanea non riuscita.</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>Tutta la settimana</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>Mai</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>Di notte</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>Orario di lavoro</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>Fine settimana</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>Inverti</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>Dalle 22:00 alle 06:00, tutti i giorni.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>Dalle 08:00 alle 17:00, dal lunedì al venerdì.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>Non è selezionato nulla — così non verrà mai eseguito.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>Sempre attivo.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>%n ora alla settimana.</numerusform><numerusform>%n ore alla settimana.</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>Questa telecamera non offre queste impostazioni.</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="34"/>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <source>Cameras</source>
        <translation>Telecamere</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="41"/>
        <source>Layout</source>
        <translation>Disposizione</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="80"/>
        <source>Add</source>
        <translation>Aggiungi</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="81"/>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="85"/>
        <source>Scan network…</source>
        <translation>Esplora la rete…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="87"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>Chiede alla rete quali telecamere ONVIF sono presenti. Manda una sola richiesta multicast; gli apparecchi che restano zitti non vengono mai contattati.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="102"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 oppure telecamera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="107"/>
        <source>optional: pass show reolink/hall</source>
        <translation>facoltativo: pass show reolink/ingresso</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="109"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>Se impostato, questo comando viene eseguito e la sua uscita viene usata come password. Tiene il segreto fuori dal file di configurazione.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="112"/>
        <source>optional, for P2P access</source>
        <translation>facoltativo, per l'accesso P2P</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="117"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>Qualsiasi indirizzo che libmpv sappia aprire. Usalo per telecamere di altre marche, un flusso da NVR o un file locale.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="121"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>Flusso secondario (poca banda)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="122"/>
        <source>Main stream (full resolution)</source>
        <translation>Flusso principale (risoluzione piena)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="126"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV (latenza minore)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan (il protocollo proprio della telecamera)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <location filename="../src/SettingsDialog.cpp" line="150"/>
        <source>Custom URL</source>
        <translation>Indirizzo personalizzato</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>RTSP va bene per la maggior parte delle telecamere ed è la prima cosa da provare.

HTTP-FLV richiede solo la porta 80, il che aiuta dove RTSP è bloccato.

Baichuan è ciò che parla l'app di Reolink. È la risposta per le telecamere che tengono RTSP spento — i modelli a batteria lo fanno — e non occupa nessuna delle poche sessioni web della telecamera. Solo video: l'audio continua ad arrivare via RTSP.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="138"/>
        <source>Use HTTPS for the control API</source>
        <translation>Usa HTTPS per l'interfaccia di controllo</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="139"/>
        <source>Show this camera</source>
        <translation>Mostra questa telecamera</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="142"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="143"/>
        <source>Host</source>
        <translation>Indirizzo</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="144"/>
        <source>User</source>
        <translation>Utente</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="145"/>
        <source>Password</source>
        <translation>Password</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="146"/>
        <source>Password command</source>
        <translation>Comando per la password</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="147"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="148"/>
        <source>Stream</source>
        <translation>Flusso</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="149"/>
        <source>Transport</source>
        <translation>Trasporto</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>Test connection</source>
        <translation>Prova la connessione</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Settings for this camera…</source>
        <translation>Impostazioni di questa telecamera…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>Rilevamento, reazioni e registrazione in leolink, e codificatore, immagine e programmazioni della telecamera stessa.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>automatic</source>
        <translation>automatico</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="224"/>
        <source>Columns</source>
        <translation>Colonne</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="225"/>
        <source>Rows</source>
        <translation>Righe</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="227"/>
        <source>Grid size</source>
        <translation>Dimensione della griglia</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="252"/>
        <source>Row</source>
        <translation>Riga</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="253"/>
        <source>Column</source>
        <translation>Colonna</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="254"/>
        <source>Row span</source>
        <translation>Righe occupate</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="255"/>
        <source>Column span</source>
        <translation>Colonne occupate</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="257"/>
        <source>Position of the selected camera</source>
        <translation>Posizione della telecamera scelta</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="268"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>Lascia riga e colonna su «automatico» per far riempire la griglia alle telecamere nell'ordine. Occupando più celle, una telecamera può coprirne diverse.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="421"/>
        <source>New camera</source>
        <translation>Nuova telecamera</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="436"/>
        <source>Remove camera</source>
        <translation>Rimuovi la telecamera</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="437"/>
        <source>Remove “%1” from the list?</source>
        <translation>Rimuovere «%1» dall'elenco?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="457"/>
        <source>Enter a host first.</source>
        <translation>Indica prima un indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="464"/>
        <source>Contacting %1…</source>
        <translation>Contatto con %1…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Looking for cameras…</source>
        <translation>Ricerca di telecamere…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Stop</source>
        <translation>Ferma</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="488"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>%n apparecchio trovato…</numerusform><numerusform>%n apparecchi trovati…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="498"/>
        <source>No cameras found</source>
        <translation>Nessuna telecamera trovata</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="499"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>Nessun apparecchio ONVIF ha risposto.

Le telecamere rispondono solo se ONVIF è acceso, e la richiesta non attraversa né i router né la maggior parte delle VPN. Puoi comunque aggiungere una telecamera scrivendone l'indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="525"/>
        <source>unnamed device</source>
        <translation>apparecchio senza nome</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="526"/>
        <source> (Reolink)</source>
        <translation> (Reolink)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="527"/>
        <source>  · already added</source>
        <translation>  · già aggiunta</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="533"/>
        <source>Cameras found</source>
        <translation>Telecamere trovate</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="534"/>
        <source>Add which one?</source>
        <translation>Quale aggiungere?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="577"/>
        <source>Incomplete camera</source>
        <translation>Telecamera incompleta</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="578"/>
        <source>“%1” has no host address.</source>
        <translation>«%1» non ha un indirizzo.</translation>
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
        <translation>Dati mobili</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>Via cavo</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>Connessione</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — intensità sconosciuta</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %2 di %3</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>Impossibile raggiungere la telecamera: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>La telecamera non ha risposto sulla porta RTSP.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="159"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>Per inviare audio serve ffmpeg e non è stato possibile avviarlo.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="272"/>
        <source>The camera rejected the user name or password.</source>
        <translation>La telecamera ha rifiutato il nome utente o la password.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="281"/>
        <source>The camera refused: %1</source>
        <translation>La telecamera ha rifiutato: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="316"/>
        <source>This camera does not offer a speaker.</source>
        <translation>Questa telecamera non offre un altoparlante.</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>flusso terminato (%1) — riconnessione</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>SEGNALE DEBOLE</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>FLUSSO DIFETTOSO</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>%n fotogramma danneggiato negli ultimi dieci secondi.

Di solito un segnale Wi-Fi debole, o un bitrate impostato troppo basso per la risoluzione. leolink ripara quello che può — questo è quello che non è riuscito a riparare.</numerusform><numerusform>%n fotogrammi danneggiati negli ultimi dieci secondi.

Di solito un segnale Wi-Fi debole, o un bitrate impostato troppo basso per la risoluzione. leolink ripara quello che può — questo è quello che non è riuscito a riparare.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>connessione…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="703"/>
        <source>Mute this camera</source>
        <translation>Silenzia questa telecamera</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="306"/>
        <source>Volume</source>
        <translation>Volume</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <location filename="../src/VideoTile.cpp" line="1007"/>
        <source>Record this camera</source>
        <translation>Registra questa telecamera</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="985"/>
        <source>Speak through the camera</source>
        <translation>Parla attraverso la telecamera</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>Impostazioni della telecamera</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="455"/>
        <source>no host configured</source>
        <translation>nessun indirizzo configurato</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="529"/>
        <source>connecting over Baichuan…</source>
        <translation>connessione via Baichuan…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="552"/>
        <location filename="../src/VideoTile.cpp" line="938"/>
        <source>custom stream</source>
        <translation>flusso personalizzato</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="554"/>
        <location filename="../src/VideoTile.cpp" line="940"/>
        <source>main stream</source>
        <translation>flusso principale</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="555"/>
        <location filename="../src/VideoTile.cpp" line="941"/>
        <source>sub stream</source>
        <translation>flusso secondario</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="702"/>
        <source>Unmute this camera</source>
        <translation>Togli il silenzio a questa telecamera</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="720"/>
        <source>MOTION</source>
        <translation>MOVIMENTO</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="838"/>
        <location filename="../src/VideoTile.cpp" line="858"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>la telecamera si sta riconfigurando… %1 s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="860"/>
        <source>camera is reconfiguring…</source>
        <translation>la telecamera si sta riconfigurando…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="913"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>flusso perso — riconnessione (%1)</translation>
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
        <translation>Smetti di parlare</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1006"/>
        <source>Stop recording</source>
        <translation>Ferma la registrazione</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — zone di movimento</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>Trascina sull'immagine per scegliere che cosa viene sorvegliato. Le aree scurite vengono ignorate — comodo per una strada al bordo dell'inquadratura, un albero che si muove al vento o il portone di un vicino.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>Sorveglia tutto</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>Ignora tutto</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>Inverti</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>Disegna</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>Sorveglia un rettangolo</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>Ignora un rettangolo</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>Trascina sulle singole celle.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>Traccia un rettangolo da sorvegliare. Maiusc e trascina fa lo stesso senza cambiare strumento.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>Traccia un rettangolo da ignorare. Ctrl e trascina fa lo stesso senza cambiare strumento.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>Recupero di un'immagine da %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>Nessuna immagine: %1 — le zone si possono impostare lo stesso.</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>nessuna immagine disponibile</translation>
    </message>
</context>
</TS>
