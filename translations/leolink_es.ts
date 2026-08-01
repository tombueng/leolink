<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es" sourcelanguage="en">
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n nombre de la cámara · %h dirección · %t hora · %e evento · %s on/off · %f grabación · %p imagen</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>Ejecutar un comando</translation>
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
        <translation>Llamar a un webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>Si se deja vacío, leolink envía un pequeño documento JSON que describe el evento.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>Dirección</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>Método</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>Cuerpo</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>Publicar un mensaje MQTT</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>Si se deja vacío: el mismo documento JSON que el webhook.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>Conservar el último mensaje en el bróker</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>Un cliente que se conecte más tarde conoce el estado actual de inmediato, en vez de esperar al siguiente evento. Es lo que suele querer la domótica.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>Bróker</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>Puerto</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>Tema</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>Usuario</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>Contraseña</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>Carga útil</translation>
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
        <translation>ffmpeg no está instalado, así que no se puede detectar sonido.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>No hay dirección de flujo para %1.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="103"/>
        <source>Sound detection stopped: %1</source>
        <translation>Detección de sonido detenida: %1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="108"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>No se pudo iniciar ffmpeg para la detección de sonido.</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="52"/>
        <source>Cannot open a local port: %1</source>
        <translation>No se puede abrir un puerto local: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="64"/>
        <source>Baichuan login failed: %1</source>
        <translation>Falló el inicio de sesión de Baichuan: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="72"/>
        <source>The camera refused to send video: %1</source>
        <translation>La cámara se negó a enviar vídeo: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="80"/>
        <source>The player did not connect.</source>
        <translation>El reproductor no se conectó.</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="132"/>
        <source>The camera stopped sending.</source>
        <translation>La cámara dejó de enviar.</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="77"/>
        <source>Camera</source>
        <translation>Cámara</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="125"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="133"/>
        <source>Reading settings from %1…</source>
        <translation>Leyendo los ajustes de %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="138"/>
        <source>Apply to camera</source>
        <translation>Aplicar a la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="169"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>Reiniciando. La cámara volverá en un minuto aproximadamente.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="185"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>Guardado. La cámara se está reconectando y volverá en breve.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="191"/>
        <source>%1: the camera reported success.</source>
        <translation>%1: la cámara informó de que salió bien.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="199"/>
        <source>Processor load %1 %</source>
        <translation>Carga del procesador %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="204"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>Salida del codificador %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="206"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>Tráfico de red %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="208"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>La cámara está al límite. Bajar la resolución o los fotogramas por segundo la estabilizará.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="865"/>
        <source>Administrator</source>
        <translation>Administrador</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="229"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="865"/>
        <source>Viewer</source>
        <translation>Espectador</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="254"/>
        <source>Done.</source>
        <translation>Hecho.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="259"/>
        <source>The card has been formatted.</source>
        <translation>La tarjeta se ha formateado.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="676"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>Más alto significa mejor imagen y más tráfico de red. La cámara solo ofrece las tasas que puede sostener de verdad.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="680"/>
        <source>Resolution</source>
        <translation>Resolución</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="681"/>
        <source>Frame rate</source>
        <translation>Fotogramas por segundo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="682"/>
        <source>Bit rate (kbit/s)</source>
        <translation>Bitrate (kbit/s)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>H.264 profile</source>
        <translation>Perfil H.264</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="691"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>Esto cambia la cámara en sí, así que todos los programas ven el resultado. Las opciones vienen de la cámara y varían según el modelo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="704"/>
        <source>Send sound</source>
        <translation>Enviar sonido</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="707"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>El micrófono de la cámara. Con esto apagado sigue poniendo una pista de audio en el flujo — una completamente muda, que es mucho más difícil de reconocer que la falta de pista.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="436"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="713"/>
        <source>Sound</source>
        <translation>Sonido</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>En leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="112"/>
        <source>In the camera</source>
        <translation>En la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="128"/>
        <source>Try again</source>
        <translation>Reintentar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="336"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>La cámara misma (ONVIF)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="338"/>
        <source>leolink watches the picture</source>
        <translation>leolink observando la imagen</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="340"/>
        <source>Either of the two</source>
        <translation>Cualquiera de los dos</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="341"/>
        <source>Do not watch</source>
        <translation>No vigilar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="350"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;La cámara lo avisa:&lt;/b&gt; decide el detector de la propia cámara y envía un evento ONVIF. Qué vigila y con qué facilidad se dispara se ajusta más abajo, en «Detección», dentro de la cámara misma.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink observa la imagen:&lt;/b&gt; este ordenador abre una segunda conexión al flujo secundario y analiza la imagen. Funciona con cualquier cámara, incluidas las que no avisan de nada — y entonces el detector de la cámara no interviene.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="361"/>
        <source>Choose what is watched…</source>
        <translation>Elegir lo que se vigila…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="369"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>Cuánto debe cambiar un punto de la imagen para contar. Más alto nota más, incluidas las sombras y la lluvia.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="374"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="377"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>Cuánto del área vigilada debe cambiar para que cuente como movimiento. 20 ‰ es el dos por ciento de la imagen — más o menos una persona a media distancia.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="382"/>
        <source>Motion comes from</source>
        <translation>El movimiento lo avisa</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="385"/>
        <source>How leolink learns of motion</source>
        <translation>Cómo se entera leolink del movimiento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="391"/>
        <source>Minimum area</source>
        <translation>Área mínima</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="393"/>
        <source>When leolink watches the picture</source>
        <translation>Cuando leolink observa la imagen</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="404"/>
        <source>Raise an event on sound</source>
        <translation>Lanzar un evento con el sonido</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="407"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>Necesita una cámara con micrófono. Abre otra conexión al flujo secundario.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="412"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="415"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 dB es casi silencio, -20 dB una voz alzada cerca.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="419"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="463"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="474"/>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="422"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>Mantiene el evento después de que cese el ruido, para que un ladrido no se avise cuatro veces.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="433"/>
        <source>Sound above</source>
        <translation>Sonido por encima de</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="434"/>
        <source>Hold for</source>
        <translation>Mantener durante</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="447"/>
        <source>Detection by leolink</source>
        <translation>Detección por leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="455"/>
        <source>Record while motion lasts</source>
        <translation>Grabar mientras dure el movimiento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="458"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>Graba en este ordenador a partir del flujo en directo, así que funciona incluso cuando la cámara no lleva tarjeta SD.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="596"/>
        <source>Follow the defaults under Settings</source>
        <translation>Seguir lo indicado en Ajustes</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Use this camera&apos;s own</source>
        <translation>Usar lo propio de esta cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="610"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="620"/>
        <source>Reactions</source>
        <translation>Reacciones</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="612"/>
        <source>What happens on an event</source>
        <translation>Qué ocurre con un evento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="627"/>
        <source>Muted</source>
        <translation>Silenciada</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="642"/>
        <source>Volume</source>
        <translation>Volumen</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="644"/>
        <source>Sound in leolink</source>
        <translation>Sonido en leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="648"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>Los mismos dos controles están en la propia tarjeta de la cámara, donde se alcanzan antes. Las cámaras empiezan silenciadas: abrir una pared de ellas no debe llenar la habitación con el sonido de todas a la vez.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="658"/>
        <source>Playback</source>
        <translation>Reproducción</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="718"/>
        <source>Main stream</source>
        <translation>Flujo principal</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="719"/>
        <source>Sub stream</source>
        <translation>Flujo secundario</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="724"/>
        <source>Video</source>
        <translation>Vídeo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="738"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2246"/>
        <source>Brightness</source>
        <translation>Brillo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <source>Contrast</source>
        <translation>Contraste</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="740"/>
        <source>Saturation</source>
        <translation>Saturación</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="741"/>
        <source>Sharpness</source>
        <translation>Nitidez</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="742"/>
        <source>Hue</source>
        <translation>Tono</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>Picture</source>
        <translation>Imagen</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="754"/>
        <source>Exposure and orientation</source>
        <translation>Exposición y orientación</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Day / night</source>
        <translation>Día / noche</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="757"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>«Auto» pasa al infrarrojo según se va la luz. Forzar el color de noche da una imagen demasiado oscura para servir de nada; forzar el blanco y negro de día pierde el color para nada.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="762"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="792"/>
        <source>Automatic</source>
        <translation>Automático</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="763"/>
        <source>Always colour</source>
        <translation>Siempre en color</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="764"/>
        <source>Always black and white</source>
        <translation>Siempre en blanco y negro</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="765"/>
        <source>Anti-flicker</source>
        <translation>Antiparpadeo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="766"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>Haga que coincida con la frecuencia de su red eléctrica — 50 Hz en Europa — o la luz de interior batirá contra el obturador y la imagen pulsará.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="770"/>
        <source>Exposure</source>
        <translation>Exposición</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>Mirror</source>
        <translation>Espejo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="772"/>
        <source>Flip</source>
        <translation>Voltear</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="773"/>
        <source>For a camera mounted upside down.</source>
        <translation>Para una cámara montada boca abajo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="774"/>
        <source>Backlight compensation</source>
        <translation>Compensación de contraluz</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="775"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>Ayuda cuando el sujeto está delante de una ventana o un cielo brillantes.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="777"/>
        <source>Noise reduction</source>
        <translation>Reducción de ruido</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="778"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>Limpia una imagen oscura, a costa de emborronar lo que se mueva.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>Rotation</source>
        <translation>Rotación</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="781"/>
        <source>Dynamic contrast</source>
        <translation>Contraste dinámico</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="785"/>
        <source>Infrared illumination</source>
        <translation>Iluminación infrarroja</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="787"/>
        <source>Infrared lamps</source>
        <translation>Lámparas infrarrojas</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="788"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>«Auto» las enciende cuando oscurece. Apáguelas si la cámara mira a través de un cristal — el reflejo la ciega.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="793"/>
        <source>Always on</source>
        <translation>Siempre encendidas</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="794"/>
        <source>Always off</source>
        <translation>Siempre apagadas</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="808"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1909"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2188"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2216"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2253"/>
        <source>User</source>
        <translation>Usuario</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="808"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>Rights</source>
        <translation>Permisos</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="815"/>
        <source>Add…</source>
        <translation>Añadir…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="816"/>
        <source>Change password…</source>
        <translation>Cambiar la contraseña…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="817"/>
        <source>Delete</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="831"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>Son cuentas de la cámara, no de leolink. Una cuenta de espectador puede mirar pero no cambiar nada — vale la pena usarla para todo lo que solo necesite ver la imagen, para que una contraseña guardada no pueda volverse contra los ajustes de la cámara.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="848"/>
        <source>Users</source>
        <translation>Usuarios</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="855"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="860"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>New user</source>
        <translation>Usuario nuevo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="855"/>
        <source>User name</source>
        <translation>Nombre de usuario</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="860"/>
        <source>Password for %1</source>
        <translation>Contraseña de %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="872"/>
        <source>Creating %1…</source>
        <translation>Creando %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="887"/>
        <source>Change password</source>
        <translation>Cambiar la contraseña</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="887"/>
        <source>New password for %1</source>
        <translation>Contraseña nueva de %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="896"/>
        <source>This is the account leolink uses</source>
        <translation>Esta es la cuenta que usa leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="897"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>Cámbiela aquí y leolink se quedará fuera hasta que se introduzca la contraseña nueva también en Cámaras.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="901"/>
        <source>Changing the password for %1…</source>
        <translation>Cambiando la contraseña de %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="914"/>
        <source>Cannot delete this account</source>
        <translation>No se puede eliminar esta cuenta</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="915"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink ha entrado como «%1». Eliminarla cortaría la conexión con esta cámara de inmediato.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="920"/>
        <source>Delete user</source>
        <translation>Eliminar el usuario</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="921"/>
        <source>Delete “%1” from the camera?</source>
        <translation>¿Eliminar «%1» de la cámara?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="925"/>
        <source>Deleting %1…</source>
        <translation>Eliminando %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="932"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1340"/>
        <source>Format the SD card</source>
        <translation>Formatear la tarjeta SD</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="934"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;¿Borrar todo lo que hay en la tarjeta de %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="937"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>Se elimina cada grabación de la tarjeta. Esto no puede deshacerse, y no se podrá recuperar nada que no se haya descargado ya.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="940"/>
        <source>Erase</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="947"/>
        <source>Formatting…</source>
        <translation>Formateando…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="957"/>
        <source>Wi-Fi signal</source>
        <translation>Señal wifi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="961"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1285"/>
        <source>Reading…</source>
        <translation>Leyendo…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="965"/>
        <source>Connection</source>
        <translation>Conexión</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="978"/>
        <source>Scan</source>
        <translation>Explorar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="982"/>
        <source>Join network</source>
        <translation>Unirse a la red</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="996"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1030"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1919"/>
        <source>Network</source>
        <translation>Red</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="998"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1910"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2217"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2254"/>
        <source>Password</source>
        <translation>Contraseña</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1001"/>
        <source>Wi-Fi</source>
        <translation>Wifi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1007"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>Explora la cámara, no este ordenador — lo que cuenta es lo que ella alcanza. La contraseña se prueba antes de guardarla, así que una errata se rechaza en vez de dejar la cámara sin ninguna red.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1015"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>Las direcciones y los puertos se leen aquí pero se cambian en la interfaz web de la propia cámara. Equivocarse en uno deja la cámara del todo fuera de la red, y la única vuelta atrás es el pin de reinicio — un diálogo de aviso no sustituye ahí a la propia pantalla del fabricante.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1060"/>
        <source>strong</source>
        <translation>fuerte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1061"/>
        <source>good</source>
        <translation>buena</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>fair</source>
        <translation>regular</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1063"/>
        <source>weak</source>
        <translation>débil</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>unknown</source>
        <translation>desconocida</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1118"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1123"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>, %n punto de acceso</numerusform><numerusform>, %n puntos de acceso</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1128"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>Señal tal como la oye la cámara: %1 de 4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1130"/>
        <source>Encryption: %1</source>
        <translation>Cifrado: %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1132"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>Oído desde %n punto de acceso — una red, varios nodos. Se muestra el más fuerte.</numerusform><numerusform>Oído desde %n puntos de acceso — una red, varios nodos. Se muestra el más fuerte.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1146"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>Algunos nombres se oyeron desde varios puntos de acceso — eso es una malla. La cámara se une al nombre, no a un nodo concreto; la malla decide con cuál habla y lo traspasa cuando hace falta. Para encontrar el mejor sitio, mueva la cámara y observe arriba «Señal wifi»: ese es el enlace que tiene de verdad.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1156"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>%n red encontrada, la más fuerte primero.</numerusform><numerusform>%n redes encontradas, la más fuerte primero.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1164"/>
        <source>scanning…</source>
        <translation>explorando…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1167"/>
        <source>The camera is scanning for networks…</source>
        <translation>La cámara está buscando redes…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1178"/>
        <source>Change the camera&apos;s network</source>
        <translation>Cambiar la red de la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1180"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;¿Mover %1 a «%2»?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1182"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>La cámara prueba antes la contraseña y se niega si es incorrecta, así que esto es más seguro de lo que parece.

Aun así desaparecerá un minuto mientras se reconecta, y si la red nueva le da otra dirección tendrá que actualizarla aquí después.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1188"/>
        <source>Join</source>
        <translation>Unirse</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>Testing the password on the camera…</source>
        <translation>Probando la contraseña en la cámara…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1214"/>
        <source>Link</source>
        <translation>Enlace</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1215"/>
        <source>Address</source>
        <translation>Dirección</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1216"/>
        <source>Netmask</source>
        <translation>Máscara de red</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1217"/>
        <source>Gateway</source>
        <translation>Puerta de enlace</translation>
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
        <translation>Nombre de la red</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1241"/>
        <source>Ports</source>
        <translation>Puertos</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1243"/>
        <source>The camera reported nothing.</source>
        <translation>La cámara no informó de nada.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1251"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1471"/>
        <source>Restart the camera</source>
        <translation>Reiniciar la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1257"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>La cámara se cae de la red durante un minuto más o menos y vuelve por su cuenta. Las grabaciones de su tarjeta SD no se ven afectadas y los ajustes se conservan.

Vale la pena probarlo cuando una cámara ha dejado de responder, rechaza conexiones nuevas o se ha descolocado tras una actualización de firmware.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1265"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1478"/>
        <source>Restart</source>
        <translation>Reiniciar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1276"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>El restablecimiento de fábrica no se ofrece aquí. Borra también los ajustes de red, y una cámara que ha olvidado su wifi hay que descolgarla y alcanzarla por cable — si de verdad quiere eso, use la interfaz web de la propia cámara.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1287"/>
        <source>Condition</source>
        <translation>Estado</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1292"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1360"/>
        <source>Not checked.</source>
        <translation>Sin comprobar.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1295"/>
        <source>Check for updates</source>
        <translation>Buscar actualizaciones</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1297"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>La cámara pregunta a Reolink, no este ordenador — así que necesita una salida a internet propia.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1301"/>
        <source>Asking Reolink…</source>
        <translation>Preguntando a Reolink…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1306"/>
        <source>Install update</source>
        <translation>Instalar la actualización</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1310"/>
        <source>Install firmware</source>
        <translation>Instalar el firmware</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1312"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;¿Actualizar el firmware de %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>La cámara se descarga la actualización ella sola y se reinicia. Estará inalcanzable varios minutos.

No le corte la corriente durante la actualización — una cámara interrumpida a media escritura suele haber que devolverla.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1319"/>
        <source>Install</source>
        <translation>Instalar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1334"/>
        <source>Firmware</source>
        <translation>Firmware</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1344"/>
        <source>Storage</source>
        <translation>Almacenamiento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1347"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>Formatear borra todas las grabaciones de la tarjeta. No hay vuelta atrás ni confirmación de la cámara después.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1364"/>
        <source>Ask the camera</source>
        <translation>Preguntar a la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1368"/>
        <source>Copy the list</source>
        <translation>Copiar la lista</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>Copied.</source>
        <translation>Copiado.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1379"/>
        <source>What this camera supports</source>
        <translation>Qué admite esta cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1382"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>El firmware de Reolink varía enormemente entre modelos, y la única forma fiable de saber qué puede hacer una cámara es preguntárselo. Si a leolink le falta algo que su cámara claramente tiene, esta lista en un aviso de fallo es lo que hace posible añadirlo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1399"/>
        <source>Maintenance</source>
        <translation>Mantenimiento</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1430"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>Preguntando por %n comando…</numerusform><numerusform>Preguntando por %n comandos…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1447"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>Admitido (%1):
%2

No admitido (%3):
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;¿Reiniciar %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1475"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>La imagen desaparecerá alrededor de un minuto. Lo que se esté grabando ahora mismo se detendrá.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1487"/>
        <source>Asking %1 to restart…</source>
        <translation>Pidiendo a %1 que se reinicie…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1565"/>
        <source>On-screen text</source>
        <translation>Texto sobre la imagen</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1567"/>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1568"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>Dibuja un recuadro detrás del texto para que siga legible sobre una escena clara.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1570"/>
        <source>Watermark</source>
        <translation>Marca de agua</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1571"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>Incrusta una marca en la propia grabación.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1575"/>
        <source>Privacy areas…</source>
        <translation>Áreas privadas…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1578"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>Partes de la vista que la cámara tapa antes de que nada salga de ella.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1589"/>
        <source>Privacy</source>
        <translation>Privacidad</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1593"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>Tapado en la propia cámara, así que la parte cubierta falta en todos los visores y en todas las grabaciones — la ventana de un vecino, o un escritorio que no debería salir en vídeo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1600"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>La cámara graba esto a fuego en la imagen, así que aparece en todas las grabaciones y en todos los programas — no solo aquí.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1608"/>
        <source>Overlay</source>
        <translation>Superposición</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1617"/>
        <source>Motion detection in the camera</source>
        <translation>Detección de movimiento en la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="390"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1619"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>Sensitivity</source>
        <translation>Sensibilidad</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="464"/>
        <source>nothing</source>
        <translation>nada</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="467"/>
        <source>The seconds leading up to the trigger — usually the part that shows how someone got there. The past cannot be recorded after the fact, so anything above zero keeps the stream running into a buffer: one more connection to the camera, and a little disk.</source>
        <translation>Los segundos previos al disparo — normalmente la parte que muestra cómo llegó alguien hasta allí. El pasado no puede grabarse después, así que cualquier valor por encima de cero mantiene el flujo entrando en un búfer: una conexión más a la cámara, y algo de disco.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="477"/>
        <source>So an event does not stop mid-scene. Motion that resumes within this time continues the same file instead of starting a second.</source>
        <translation>Para que un evento no acabe a media escena. El movimiento que vuelve dentro de este tiempo continúa el mismo archivo en vez de empezar otro.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="489"/>
        <source>Include before</source>
        <translation>Incluir antes</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="492"/>
        <source>When something happens</source>
        <translation>Cuando ocurre algo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="496"/>
        <source>Record without stopping</source>
        <translation>Grabar sin parar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="501"/>
        <source> h</source>
        <translation> h</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="504"/>
        <source>How far back the archive reaches. Once it is this old, a file is deleted to make room for the newest one.</source>
        <translation>Hasta dónde llega hacia atrás el archivo. Cuando un fichero alcanza esa edad se borra para dejar sitio al más reciente.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="509"/>
        <source> min</source>
        <translation> min</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="512"/>
        <source>The archive is a run of files, not one — a file cannot be trimmed at the front, so keeping a day in one of them would mean rewriting it every minute. Shorter files find a moment more precisely; longer ones are fewer to scroll past.</source>
        <translation>El archivo es una serie de ficheros, no uno — un fichero no se puede recortar por delante, así que guardar un día entero en uno solo obligaría a reescribirlo cada minuto. Los ficheros cortos localizan mejor un momento; los largos son menos que recorrer.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="533"/>
        <source>Keep the last</source>
        <translation>Conservar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="534"/>
        <source>One file per</source>
        <translation>Un fichero cada</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="537"/>
        <source>Round the clock</source>
        <translation>Las veinticuatro horas</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="541"/>
        <source>With both switched on, one buffer serves both: the recording of an event is cut out of the archive, so nothing extra is opened to the camera.

Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>Con ambos activados, un solo búfer sirve para los dos: la grabación de un evento se recorta del archivo, así que no se abre nada más a la cámara.

A dónde van los ficheros es igual para todas las cámaras y se ajusta en Ajustes ▸ Grabaciones.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="577"/>
        <source>%1 hours of video. How much disk that is depends on the bit rate, which this camera has not reported yet.</source>
        <translation>%1 horas de vídeo. Cuánto disco es eso depende de la tasa de bits, que esta cámara todavía no ha informado.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="585"/>
        <source>About %1 GB at the %2 kbit/s this stream is set to. Make sure the recordings folder has that much to spare.</source>
        <translation>Unos %1 GB a los %2 kbit/s a los que está ajustado este flujo. Conviene que la carpeta de grabaciones tenga ese espacio libre.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1620"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>Más alto nota más, incluidas las sombras y los faros.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1622"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1931"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2203"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2209"/>
        <source>Switched on</source>
        <translation>Encendida</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1628"/>
        <source>Choose the area…</source>
        <translation>Elegir el área…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1630"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>Qué partes de la imagen vigila la cámara. Todo lo que quede fuera del área se ignora — una carretera al borde de la vista, un árbol al viento, la puerta de un vecino.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1636"/>
        <source>Where it looks</source>
        <translation>Dónde mira</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1640"/>
        <source>Choose the hours…</source>
        <translation>Elegir las horas…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1645"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>Una semana por horas: en las que marque, la cámara avisa del movimiento; en el resto se calla. Nada que ver con lo sensible que es — eso se ajusta más abajo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1652"/>
        <source>When it reports at all</source>
        <translation>Cuándo avisa siquiera</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>From</source>
        <translation>Desde</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1659"/>
        <source>To</source>
        <translation>Hasta</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1671"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>A lo largo del día la cámara puede dispararse con más o menos facilidad. Así se evita que los faros de noche lo disparen todo sin dejarla ciega de día. Cuántos tramos hay lo fija la cámara; sus horarios y sensibilidades son cosa suya.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1679"/>
        <source>How readily it triggers</source>
        <translation>Con qué facilidad se dispara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1687"/>
        <source>What it recognises</source>
        <translation>Qué reconoce</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1689"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>People</source>
        <translation>Personas</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1690"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1823"/>
        <source>Vehicles</source>
        <translation>Vehículos</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1691"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1824"/>
        <source>Animals</source>
        <translation>Animales</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1825"/>
        <source>Faces</source>
        <translation>Rostros</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1695"/>
        <source>Camera-side detection</source>
        <translation>Detección en la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1704"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>Esta es la detección propia de la cámara, la que avisa por ONVIF. El análisis de la imagen que hace leolink se ajusta aparte, en Cámaras → Eventos.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1713"/>
        <source>Detection</source>
        <translation>Detección</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1790"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — área de detección de la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1791"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>Arrastre sobre la imagen para elegir qué vigila la cámara. Las áreas oscurecidas se ignoran. Esta es la cuadrícula propia de la cámara, de %1 por %2, así que es más fina que la de leolink.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1808"/>
        <source>%1 — when to watch</source>
        <translation>%1 — cuándo vigilar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1809"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>Horas en que la cámara notifica movimiento. Fuera de ellas sigue viendo, pero no dice nada.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1820"/>
        <source>Any movement</source>
        <translation>Cualquier movimiento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1821"/>
        <source>Continuous</source>
        <translation>Continuo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1853"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>Esta cámara lleva una semana aparte para cada tipo de evento. ¿Cuál?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1901"/>
        <source>SIM card</source>
        <translation>Tarjeta SIM</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1903"/>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1904"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>Solo hace falta si la tarjeta lo pide. Tres intentos fallidos bloquean la tarjeta, que necesitará entonces un PUK que solo tiene su operadora.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1908"/>
        <source>Access point (APN)</source>
        <translation>Punto de acceso (APN)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1911"/>
        <source>Authentication</source>
        <translation>Autenticación</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1912"/>
        <source>Use mobile data</source>
        <translation>Usar datos móviles</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1916"/>
        <source>Modem</source>
        <translation>Módem</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1918"/>
        <source>Card</source>
        <translation>Tarjeta</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1920"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1921"/>
        <source>Signal</source>
        <translation>Señal</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1922"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1923"/>
        <source>Card number</source>
        <translation>Número de tarjeta</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1927"/>
        <source>Mobile connection</source>
        <translation>Conexión móvil</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1929"/>
        <source>Data used</source>
        <translation>Datos consumidos</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1930"/>
        <source>Monthly limit</source>
        <translation>Límite mensual</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1938"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;No probado con hardware real.&lt;/b&gt; Nadie involucrado en leolink tiene una cámara con módem, así que esto se escribió solo a partir del protocolo. No puede estropear nada — un comando que la cámara no conoce simplemente se rechaza — pero igual de bien puede no mostrar nada en absoluto.

Si su cámara lleva SIM, «Qué admite esta cámara» en Mantenimiento enumera los comandos que su firmware tiene de verdad. Esa lista, en un aviso de fallo, es lo que permitiría terminar esto como es debido.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1951"/>
        <source>Mobile data</source>
        <translation>Datos móviles</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1968"/>
        <source>nothing blanked</source>
        <translation>nada tapado</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1970"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>%n área tapada</numerusform><numerusform>%n áreas tapadas</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1972"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n área, apagada</numerusform><numerusform>%n áreas, apagadas</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2054"/>
        <source>%1 — when to record</source>
        <translation>%1 — cuándo grabar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2055"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>Horas en que la cámara graba en su propia tarjeta. Para esto hace falta una tarjeta puesta; la grabación en este ordenador se ajusta en Cámaras → Eventos y funciona sin ella.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2133"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2143"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>Grabación en la tarjeta de la cámara</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2145"/>
        <source>Overwrite when full</source>
        <translation>Sobrescribir cuando se llene</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2136"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2148"/>
        <source>Record before the event</source>
        <translation>Grabar antes del evento</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="490"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2151"/>
        <source>Keep recording after</source>
        <translation>Seguir grabando otros</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2152"/>
        <source>File length</source>
        <translation>Duración del archivo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2146"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>Apagado significa que la grabación simplemente se detiene cuando la tarjeta se llena.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2149"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>Conserva los segundos previos a un disparo, que suelen ser la parte interesante.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2155"/>
        <source>When to record…</source>
        <translation>Cuándo grabar…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2158"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>Horas de la semana en que la cámara graba en su tarjeta por su cuenta.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2168"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>Esto rige lo que la cámara escribe en su propia tarjeta SD. La grabación en este ordenador se ajusta en Cámaras → Eventos y no necesita tarjeta.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="554"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2176"/>
        <source>Recording</source>
        <translation>Grabación</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2184"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2212"/>
        <source>E-mail</source>
        <translation>Correo electrónico</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2186"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2214"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2251"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2308"/>
        <source>Server</source>
        <translation>Servidor</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2187"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2199"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2215"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2252"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2309"/>
        <source>Port</source>
        <translation>Puerto</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2190"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2219"/>
        <source>Encrypted</source>
        <translation>Cifrado</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2220"/>
        <source>Not more often than</source>
        <translation>No más a menudo de</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2221"/>
        <source>Attach</source>
        <translation>Adjuntar</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2196"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2249"/>
        <source>FTP upload</source>
        <translation>Subida por FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2202"/>
        <source>Folder</source>
        <translation>Carpeta</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2207"/>
        <source>Push notifications</source>
        <translation>Notificaciones push</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Send to</source>
        <translation>Enviar a</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2230"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2237"/>
        <source>Siren</source>
        <translation>Sirena</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2232"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2239"/>
        <source>Sound on an alarm</source>
        <translation>Sonar en una alarma</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2233"/>
        <source>Times</source>
        <translation>Horarios</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2234"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2245"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2256"/>
        <source>Mode</source>
        <translation>Modo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2242"/>
        <source>Spotlight</source>
        <translation>Foco</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2244"/>
        <source>On</source>
        <translation>Encendido</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2255"/>
        <source>Directory</source>
        <translation>Directorio</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2260"/>
        <source>Push notification</source>
        <translation>Notificación push</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2262"/>
        <source>Schedule</source>
        <translation>Horario</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2268"/>
        <source>Send a test e-mail</source>
        <translation>Enviar un correo de prueba</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2271"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>Pidiendo a la cámara que envíe un correo de prueba…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2274"/>
        <source>Test the FTP upload</source>
        <translation>Probar la subida por FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2277"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>Pidiendo a la cámara que pruebe el servidor FTP…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2288"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>Las envía la propia cámara, así que siguen funcionando con este ordenador apagado. Las reacciones de leolink — comandos, webhooks, MQTT — están en Cámaras → Eventos.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2297"/>
        <source>Alerts</source>
        <translation>Alertas</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2305"/>
        <source>Time server</source>
        <translation>Servidor de hora</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2307"/>
        <source>Synchronise the clock</source>
        <translation>Sincronizar el reloj</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2310"/>
        <source>Every</source>
        <translation>Cada</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2314"/>
        <source>Scheduled restart</source>
        <translation>Reinicio programado</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2316"/>
        <source>Restart regularly</source>
        <translation>Reiniciar con regularidad</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2317"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>Algunas cámaras se vuelven poco fiables tras semanas encendidas; un reinicio semanal es una cura barata.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2320"/>
        <source>Day</source>
        <translation>Día</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2321"/>
        <source>Hour</source>
        <translation>Hora</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2322"/>
        <source>Minute</source>
        <translation>Minuto</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2326"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>Una cámara con el reloj mal fecha mal sus grabaciones, lo que pesa más de lo que parece cuando hay que encontrar una.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2334"/>
        <source>Time</source>
        <translation>Hora</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2458"/>
        <source>Ready.</source>
        <translation>Listo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2563"/>
        <source>Writing to the camera…</source>
        <translation>Escribiendo en la cámara…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2621"/>
        <source>Nothing to write.</source>
        <translation>Nada que escribir.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2638"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>Guardado. Cambiar el codificador reinicia el flujo, así que la imagen puede caerse un momento.</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>Diagnóstico</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>Solo errores</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>Avisos y errores</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>Actividad normal</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>Todo</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>Todas las áreas</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>Buscar…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>Mostrar</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>Registro detallado</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>Anota cada petición a la cámara, cada decisión del decodificador y cada reconexión. Déjelo apagado para el uso diario — enciéndalo cuando algo falle, reproduzca el problema y envíe entonces el informe.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>Seguir las líneas nuevas</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>Copiar el informe</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>Datos del sistema y el registro, listos para pegar en un aviso de fallo.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>Informe copiado.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>Guardar el informe…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>Guardar el informe</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>Archivos de texto (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>No se pudo escribir %1.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>Guardado en %1</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>Abrir la carpeta del registro</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>Las contraseñas, los testigos de sesión y las direcciones de internet se eliminan antes de escribir nada, así que esto puede compartirse tal cual. Las direcciones de su propia red se conservan — suelen ser la primera pista.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%1 de %2 líneas</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>No se puede abrir un socket UDP para la búsqueda.</translation>
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
        <translation>no se pudo iniciar</translation>
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
        <translation>dirección no válida</translation>
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
        <translation>Registro de eventos</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>Todas las cámaras</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>Todos los eventos</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>Movimiento</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>Con grabación</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>Cámara:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>Mostrar:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>Cuándo</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>Cámara</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>Evento</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>Medios</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>sin vista previa</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>Abrir la grabación</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>Vaciar el registro…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>vídeo</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>imagen</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + imagen</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>aún no hay eventos registrados</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>solo grabación</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>Grabación: %1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation> (falta el archivo)</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>Imagen: %1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>Abrir la imagen</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>Nada que abrir</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>El archivo de este evento ya no está.</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>Vaciar el registro de eventos</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>¿Borrar todo el historial de eventos?

Los vídeos y las imágenes grabados se quedan en el disco — solo se vacía el registro.</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>Aplicación</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>Interfaz de la cámara</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>Vídeo</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>Eventos ONVIF</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>Detección</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>Grabación</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>Acciones de evento</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>Red</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>Interfaz de usuario</translation>
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
        <translation>%1 falló: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="111"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>Todavía no hay cámaras configuradas.

Use «Cámaras…» para añadir una.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;File</source>
        <translation>&amp;Archivo</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="257"/>
        <source>&amp;Cameras…</source>
        <translation>&amp;Cámaras…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="262"/>
        <source>&amp;Settings…</source>
        <translation>&amp;Ajustes…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="268"/>
        <source>&amp;Save snapshots…</source>
        <translation>&amp;Guardar instantáneas…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="273"/>
        <source>&amp;Record all cameras</source>
        <translation>&amp;Grabar todas las cámaras</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="280"/>
        <source>&amp;Event log…</source>
        <translation>&amp;Registro de eventos…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>Grabaciones en la &amp;cámara…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="290"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>Explore lo que hay guardado en la tarjeta SD de la propia cámara.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="294"/>
        <location filename="../src/MainWindow.cpp" line="727"/>
        <location filename="../src/MainWindow.cpp" line="1794"/>
        <source>No cameras configured</source>
        <translation>No hay cámaras configuradas</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Which camera</source>
        <translation>Qué cámara</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Show recordings from</source>
        <translation>Mostrar las grabaciones de</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="317"/>
        <source>Open &amp;recordings folder</source>
        <translation>Abrir la carpeta de &amp;grabaciones</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="325"/>
        <source>&amp;Quit</source>
        <translation>&amp;Salir</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;View</source>
        <translation>&amp;Ver</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="332"/>
        <source>&amp;Full screen</source>
        <translation>&amp;Pantalla completa</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="371"/>
        <source>Show &amp;menu bar</source>
        <translation>Mostrar la barra de &amp;menú</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="385"/>
        <source>Show &amp;toolbar</source>
        <translation>Mostrar la barra de &amp;herramientas</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="394"/>
        <source>Show status &amp;bar</source>
        <translation>Mostrar la barra de &amp;estado</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="403"/>
        <source>Hide window &amp;decoration</source>
        <translation>Ocultar el &amp;marco de la ventana</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="415"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>Arrastre la franja de debajo de una cámara para mover la ventana. Ctrl+Mayús+D devuelve el marco, Ctrl+M el menú.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Help</source>
        <translation>A&amp;yuda</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="424"/>
        <source>&amp;Online handbook</source>
        <translation>Manual en &amp;línea</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="431"/>
        <source>&amp;Protocol notes</source>
        <translation>Notas del &amp;protocolo</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="437"/>
        <source>&amp;Diagnostics…</source>
        <translation>&amp;Diagnóstico…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="440"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>Lo que han estado haciendo leolink y las cámaras — y un informe para adjuntar a un aviso de fallo.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="444"/>
        <source>&amp;Report a problem</source>
        <translation>&amp;Informar de un problema</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>Report a problem</source>
        <translation>Informar de un problema</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;Adjunte un informe de diagnóstico&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="453"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>Recoge qué máquina es la suya, qué respondieron las cámaras y dónde se torció la cosa — con las contraseñas y las direcciones ya eliminadas. Sin él, la mayoría de los avisos no pueden seguirse.

Si el problema puede provocarlo usted, encienda antes el registro detallado en la ventana de diagnóstico, hágalo ocurrir de nuevo y copie entonces el informe.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Open diagnostics</source>
        <translation>Abrir el diagnóstico</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="462"/>
        <source>Go to the issue tracker</source>
        <translation>Ir al gestor de incidencias</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="473"/>
        <source>&amp;About leolink</source>
        <translation>&amp;Acerca de leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="476"/>
        <source>About leolink</source>
        <translation>Acerca de leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="477"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;Un cliente nativo de Linux para cámaras Reolink.&lt;/p&gt;&lt;p&gt;Habla directamente los protocolos propios de la cámara: interfaz HTTP, RTSP y ONVIF en la red local, y el servicio P2P de Reolink cuando quiera alcanzar una cámara desde otro sitio.&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;Manual&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;Código fuente&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Sin relación con Reolink ni respaldo por su parte.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="489"/>
        <source>Main</source>
        <translation>Principal</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="501"/>
        <source>Ready</source>
        <translation>Listo</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="517"/>
        <source>Leave full screen</source>
        <translation>Salir de la pantalla completa</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <location filename="../src/MainWindow.cpp" line="588"/>
        <source>Cameras…</source>
        <translation>Cámaras…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="526"/>
        <source>Event log…</source>
        <translation>Registro de eventos…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="532"/>
        <location filename="../src/MainWindow.cpp" line="591"/>
        <source>Quit</source>
        <translation>Salir</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="582"/>
        <source>Show window</source>
        <translation>Mostrar la ventana</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="751"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n cámara en directo</numerusform><numerusform>%n cámaras en directo</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="960"/>
        <source>Esc leaves full screen</source>
        <translation>Esc sale de la pantalla completa</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="967"/>
        <location filename="../src/MainWindow.cpp" line="1006"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>Doble clic para la cuadrícula · Esc sale de la pantalla completa</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1004"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Esc sale de la pantalla completa · doble clic en una cámara para llenar la pantalla</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1029"/>
        <source>Grid view</source>
        <translation>Vista de cuadrícula</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1215"/>
        <location filename="../src/MainWindow.cpp" line="1233"/>
        <location filename="../src/MainWindow.cpp" line="1471"/>
        <source>Cannot create %1</source>
        <translation>No se puede crear %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1361"/>
        <source>Recording %1</source>
        <translation>Grabando %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1283"/>
        <location filename="../src/MainWindow.cpp" line="1369"/>
        <source>Saved %1</source>
        <translation>Guardado %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1375"/>
        <location filename="../src/MainWindow.cpp" line="1506"/>
        <source>Recording stopped</source>
        <translation>Grabación detenida</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1382"/>
        <source>%1: %2</source>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1487"/>
        <source>Recording started</source>
        <translation>Grabación iniciada</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1505"/>
        <source>Recording all cameras</source>
        <translation>Grabando todas las cámaras</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1586"/>
        <source>%1 at %2</source>
        <translation>%1 en %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1606"/>
        <source>Motion detected</source>
        <translation>Movimiento detectado</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1618"/>
        <source>Sound detected</source>
        <translation>Sonido detectado</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1641"/>
        <source>Menu bar hidden</source>
        <translation>Barra de menú oculta</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1642"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>Con la barra de menú y la de herramientas ocultas, pulse Ctrl+M para recuperar el menú.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1661"/>
        <source>Cannot save</source>
        <translation>No se puede guardar</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1662"/>
        <source>Settings could not be written to %1.</source>
        <translation>Los ajustes no pudieron escribirse en %1.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1729"/>
        <source>Play through %1</source>
        <translation>Reproducir a través de %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1730"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>Archivos de sonido (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Todos los archivos (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1742"/>
        <source>Speaking through the camera…</source>
        <translation>Hablando a través de la cámara…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1749"/>
        <source>Finished.</source>
        <translation>Terminado.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1872"/>
        <source>Nothing to capture</source>
        <translation>Nada que capturar</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1877"/>
        <source>Save snapshots to</source>
        <translation>Guardar las instantáneas en</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="1895"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>%n instantánea guardada</numerusform><numerusform>%n instantáneas guardadas</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1913"/>
        <source>Welcome to leolink</source>
        <translation>Bienvenido a leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1915"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Todavía no hay ninguna cámara configurada.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1917"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>Añada una cámara con su dirección, usuario y contraseña. leolink habla con la cámara directamente en su red — no interviene ninguna cuenta en la nube.&lt;p&gt;El manual explica qué hace cada opción.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1921"/>
        <source>Add camera…</source>
        <translation>Añadir una cámara…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1922"/>
        <source>Open handbook</source>
        <translation>Abrir el manual</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1998"/>
        <source>leolink is still running</source>
        <translation>leolink sigue en marcha</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1999"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>Las cámaras siguen grabando. Use el icono de la bandeja para volver.</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>no hay imagen disponible</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — áreas privadas</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>Arrastre para marcar las partes de la vista que la cámara debe tapar. Las ennegrece antes de que nada salga del aparato, así que faltan en la imagen en directo, en las grabaciones y en cualquier otro programa — incluida la aplicación del fabricante.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>Quitar la última</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>Quitar todas</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>Obteniendo una imagen de %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>Sin imagen: %1 — las áreas pueden dibujarse igualmente.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%1 de %2 áreas</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>ffmpeg no está instalado, así que no se puede detectar movimiento.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>No hay dirección de flujo para %1.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="131"/>
        <source>Motion detection stopped: %1</source>
        <translation>Detección de movimiento detenida: %1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="156"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>No se pudo iniciar ffmpeg para la detección de movimiento.</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="157"/>
        <source>ONVIF subscription failed.</source>
        <translation>Falló la suscripción ONVIF.</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>Falta el bróker o el tema MQTT.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>El bróker MQTT no respondió.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>MQTT: %1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>MQTT: respuesta inesperada del bróker.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>MQTT rechazó la conexión: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — grabaciones en la cámara</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>Flujo principal</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>Flujo secundario</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>Buscar</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>Desde</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>hasta</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>Comienzo</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>Duración</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>Reproducir</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>Descargar…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>Elija un periodo y pulse Buscar. Solo hay grabaciones si la cámara lleva puesta una tarjeta SD.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>Preguntando a %1…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>No se encontró nada en ese periodo. O no se grabó nada, o la cámara no tiene tarjeta SD.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>%n grabación encontrada.</numerusform><numerusform>%n grabaciones encontradas.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>No hay sesión con la cámara — busque primero.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>Sin reproductor</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>No se encontró mpv. La grabación está en:

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>Guardar la grabación</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>No se puede escribir en %1.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>Guardado en %1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>Falló la descarga: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>Ajustes</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>Ventana</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>Con movimiento</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>Reacciones</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>Grabaciones</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>Vídeo</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>Mostrar la barra de menú</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>Ctrl+M lo cambia en cualquier momento.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>Mostrar la barra de herramientas</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>Mostrar la barra de estado</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>Ocultar el marco de la ventana</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>Para pantallas de pared. Ctrl+Mayús+D lo cambia.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>Aspecto</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>Mostrar un icono en el área de notificación</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>Cerrar la ventana la oculta en vez de salir</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>Minimizar oculta la ventana en la bandeja</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>Área de notificación</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>Teñir la tarjeta de rojo un momento</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>Para que un vistazo a una pared de cámaras baste para ver cuál fue.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> ms</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>Reproducir un sonido</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>Vacío: el sonido de notificación del escritorio</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>Examinar…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>Sonido a reproducir</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>Archivos de sonido (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Todos los archivos (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>Durante</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>Archivo de sonido</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>En la pantalla</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>Traer la ventana al frente cuando se detecte movimiento</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>Tamaño anterior</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>Pantalla completa</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>Volver como</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>La ventana</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>Qué cámaras lanzan un evento y cómo se ajusta en cada una, en Cámaras ▸ Ajustes ▸ Detección por leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>Lo que hace leolink cuando una cámara avisa de algo. Una cámara sigue esto salvo que su propio diálogo diga otra cosa — todo o nada, nunca a medias: los ajustes heredados en parte son los más difíciles de razonar cuando algo no se dispara.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>Carpeta de grabaciones</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>Grabaciones e instantáneas</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>Las grabaciones se escriben como Matroska sin recodificar: la imagen conserva la calidad original de la cámara y el procesador se queda casi ocioso.

Si una cámara graba o no es su propio ajuste, en Cámaras ▸ Ajustes ▸ Reacciones.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>Hardware (recomendado)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>Hardware, a elección del controlador</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>Hardware, con copia de fotograma</translation>
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
        <translation>«Recomendado» nombra el decodificador explícitamente para que la decodificación y el dibujado se queden en la misma interfaz gráfica. A su aire, mpv puede decodificar por una y dibujar por otra, lo que en algunas tarjetas deja la imagen de un verde macizo.

Si la imagen sale rota, pruebe las otras por turno. «Solo software» siempre funciona pero cuesta un núcleo entero del procesador a resolución completa.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>Preferir la baja latencia a la fluidez</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>Reduce el búfer al mínimo. Apáguelo si un flujo de bitrate alto se entrecorta en una red cargada.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>Decodificación</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>Idioma del sistema</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>Surte efecto al reiniciar leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>Registro detallado</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>Anota cada petición a la cámara, cada decisión del decodificador y cada reconexión, en ~/.local/share/leolink/leolink.log.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>Abrir el diagnóstico…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>Los errores y los avisos se anotan siempre. El registro detallado añade la conversación con la cámara — enciéndalo cuando algo falle, reprodúzcalo y envíe el informe desde Ayuda ▸ Diagnóstico. Las contraseñas y los testigos de sesión se eliminan antes de escribir nada.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>Diagnóstico</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>ffmpeg no está instalado, así que no se puede grabar.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>No hay dirección de flujo para %1.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="102"/>
        <source>Recording failed: %1</source>
        <translation>Falló la grabación: %1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="134"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>La grabación no produjo datos (ffmpeg salió con %1).</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="150"/>
        <source>Could not start ffmpeg.</source>
        <translation>No se pudo iniciar ffmpeg.</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="121"/>
        <source>File format not recognised.</source>
        <translation>Formato de archivo no reconocido.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="122"/>
        <source>Invalid input.</source>
        <translation>Entrada no válida.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="123"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>La cámara no tiene sesiones libres. Solo admite un puñado a la vez, compartidas con la aplicación del móvil y su página web. Ciérrelas, o espere un minuto a que caduquen las antiguas.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="127"/>
        <source>Session expired.</source>
        <translation>La sesión ha caducado.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="128"/>
        <source>Wrong user name or password.</source>
        <translation>Usuario o contraseña incorrectos.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="129"/>
        <source>Timed out.</source>
        <translation>Se agotó el tiempo de espera.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="130"/>
        <source>This firmware does not support that command.</source>
        <translation>Este firmware no admite ese comando.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="131"/>
        <source>Could not read the configuration.</source>
        <translation>No se pudo leer la configuración.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="132"/>
        <source>Could not verify the configuration.</source>
        <translation>No se pudo verificar la configuración.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="133"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>Una parte de la cámara no respondió. Según lo que se preguntara, eso significa que no hay tarjeta SD puesta, o que la cámara no tiene salida a internet.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="136"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>No permitido — este modelo no tiene el hardware.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="137"/>
        <source>Account invalid, log in again.</source>
        <translation>Cuenta no válida, vuelva a iniciar sesión.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="138"/>
        <source>User name already taken.</source>
        <translation>Ese nombre de usuario ya está cogido.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="139"/>
        <source>Maximum number of users reached.</source>
        <translation>Se ha alcanzado el número máximo de usuarios.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="140"/>
        <source>Camera busy, try again shortly.</source>
        <translation>Cámara ocupada, inténtelo de nuevo en breve.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="141"/>
        <source>IP address conflict.</source>
        <translation>Conflicto de direcciones IP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="142"/>
        <source>Configuration test failed.</source>
        <translation>Falló la prueba de configuración.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="143"/>
        <source>FTP login failed.</source>
        <translation>Falló el inicio de sesión FTP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="144"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP no pudo crear el directorio.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="145"/>
        <source>FTP upload failed.</source>
        <translation>Falló la subida por FTP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="146"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP no pudo alcanzar el servidor.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="147"/>
        <source>Camera reported error %1.</source>
        <translation>La cámara informó del error %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="348"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>La cámara no está respondiendo peticiones ahora mismo. Lo hace cuando ha recibido demasiadas de golpe; se recupera sola en un momento.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="355"/>
        <source>Cannot reach %1: %2</source>
        <translation>No se puede alcanzar %1: %2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="369"/>
        <source>Unexpected reply from %1.</source>
        <translation>Respuesta inesperada de %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="472"/>
        <source>Login returned no token.</source>
        <translation>El inicio de sesión no devolvió ningún testigo.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="511"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — firmware %2, %3 canal(es)</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="776"/>
        <source>The camera could not join that network: %1</source>
        <translation>La cámara no pudo unirse a esa red: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="786"/>
        <source>E-mail</source>
        <translation>Correo electrónico</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="796"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="836"/>
        <source>Update available: %1</source>
        <translation>Actualización disponible: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="837"/>
        <source>The firmware is up to date.</source>
        <translation>El firmware está al día.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="854"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>Actualizando. La cámara se reiniciará por su cuenta y estará inalcanzable varios minutos. No le corte la corriente.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="987"/>
        <source>Snapshot failed.</source>
        <translation>Falló la instantánea.</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>Toda la semana</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>Nunca</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>Por la noche</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>Horario laboral</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>Fines de semana</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>Invertir</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>De 22:00 a 06:00, todos los días.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>De 08:00 a 17:00, de lunes a viernes.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>No hay nada seleccionado — esto no se ejecutará nunca.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>Siempre activo.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>%n hora a la semana.</numerusform><numerusform>%n horas a la semana.</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>Esta cámara no ofrece estos ajustes.</translation>
    </message>
</context>
<context>
    <name>leolink::SegmentBuffer</name>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="81"/>
        <source>ffmpeg is not installed, so continuous recording is unavailable.</source>
        <translation>ffmpeg no está instalado, así que no se puede grabar sin parar.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="86"/>
        <source>No stream address for %1.</source>
        <translation>No hay dirección de flujo para %1.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="90"/>
        <location filename="../src/SegmentBuffer.cpp" line="279"/>
        <source>Cannot write to %1.</source>
        <translation>No se puede escribir en %1.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="255"/>
        <source>Nothing had been buffered yet.</source>
        <translation>Todavía no había nada en el búfer.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="270"/>
        <source>That moment is no longer in the buffer.</source>
        <translation>Ese momento ya no está en el búfer.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="325"/>
        <source>The recording could not be cut out of the buffer.</source>
        <translation>La grabación no se pudo recortar del búfer.</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="34"/>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <source>Cameras</source>
        <translation>Cámaras</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="41"/>
        <source>Layout</source>
        <translation>Disposición</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="80"/>
        <source>Add</source>
        <translation>Añadir</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="81"/>
        <source>Remove</source>
        <translation>Quitar</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="85"/>
        <source>Scan network…</source>
        <translation>Explorar la red…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="87"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>Pregunta a la red qué cámaras ONVIF hay. Envía una sola consulta multidifusión; con los aparatos que callan no se contacta nunca.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="102"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 o camara.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="107"/>
        <source>optional: pass show reolink/hall</source>
        <translation>opcional: pass show reolink/entrada</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="109"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>Si se indica, se ejecuta este comando y su salida se usa como contraseña. Mantiene el secreto fuera del archivo de configuración.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="112"/>
        <source>optional, for P2P access</source>
        <translation>opcional, para el acceso P2P</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="117"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>Cualquier dirección que libmpv pueda abrir. Úsela para cámaras de otros fabricantes, un flujo de un NVR o un archivo local.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="121"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>Flujo secundario (poco ancho de banda)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="122"/>
        <source>Main stream (full resolution)</source>
        <translation>Flujo principal (resolución completa)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="126"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV (menos latencia)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan (el protocolo propio de la cámara)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <location filename="../src/SettingsDialog.cpp" line="150"/>
        <source>Custom URL</source>
        <translation>Dirección propia</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>RTSP le va bien a la mayoría de las cámaras y es lo primero que hay que probar.

HTTP-FLV solo necesita el puerto 80, lo que ayuda allí donde RTSP está bloqueado.

Baichuan es lo que habla la aplicación de Reolink. Es la respuesta para las cámaras que dejan RTSP apagado — los modelos con batería lo hacen — y no consume ninguna de las pocas sesiones web de la cámara. Solo vídeo: el sonido sigue llegando por RTSP.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="138"/>
        <source>Use HTTPS for the control API</source>
        <translation>Usar HTTPS para la interfaz de control</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="139"/>
        <source>Show this camera</source>
        <translation>Mostrar esta cámara</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="142"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="143"/>
        <source>Host</source>
        <translation>Dirección</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="144"/>
        <source>User</source>
        <translation>Usuario</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="145"/>
        <source>Password</source>
        <translation>Contraseña</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="146"/>
        <source>Password command</source>
        <translation>Comando de contraseña</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="147"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="148"/>
        <source>Stream</source>
        <translation>Flujo</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="149"/>
        <source>Transport</source>
        <translation>Transporte</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>Test connection</source>
        <translation>Probar la conexión</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Settings for this camera…</source>
        <translation>Ajustes de esta cámara…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>Detección, reacciones y grabación en leolink, y el codificador, la imagen y los horarios de la propia cámara.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>automatic</source>
        <translation>automático</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="224"/>
        <source>Columns</source>
        <translation>Columnas</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="225"/>
        <source>Rows</source>
        <translation>Filas</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="227"/>
        <source>Grid size</source>
        <translation>Tamaño de la cuadrícula</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="252"/>
        <source>Row</source>
        <translation>Fila</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="253"/>
        <source>Column</source>
        <translation>Columna</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="254"/>
        <source>Row span</source>
        <translation>Filas que ocupa</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="255"/>
        <source>Column span</source>
        <translation>Columnas que ocupa</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="257"/>
        <source>Position of the selected camera</source>
        <translation>Posición de la cámara seleccionada</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="268"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>Deje la fila y la columna en «automático» para que las cámaras llenen la cuadrícula por orden. Ocupando varias celdas, una cámara puede cubrir más de una.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="421"/>
        <source>New camera</source>
        <translation>Cámara nueva</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="436"/>
        <source>Remove camera</source>
        <translation>Quitar la cámara</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="437"/>
        <source>Remove “%1” from the list?</source>
        <translation>¿Quitar «%1» de la lista?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="457"/>
        <source>Enter a host first.</source>
        <translation>Indique antes una dirección.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="464"/>
        <source>Contacting %1…</source>
        <translation>Contactando con %1…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Looking for cameras…</source>
        <translation>Buscando cámaras…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Stop</source>
        <translation>Detener</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="488"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>%n aparato encontrado…</numerusform><numerusform>%n aparatos encontrados…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="498"/>
        <source>No cameras found</source>
        <translation>No se encontraron cámaras</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="499"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>Ningún aparato ONVIF respondió.

Las cámaras solo contestan si ONVIF está encendido, y la consulta no atraviesa los routers ni la mayoría de las VPN. Aún puede añadir una cámara escribiendo su dirección.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="525"/>
        <source>unnamed device</source>
        <translation>aparato sin nombre</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="526"/>
        <source> (Reolink)</source>
        <translation> (Reolink)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="527"/>
        <source>  · already added</source>
        <translation>  · ya añadida</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="533"/>
        <source>Cameras found</source>
        <translation>Cámaras encontradas</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="534"/>
        <source>Add which one?</source>
        <translation>¿Cuál añadir?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="577"/>
        <source>Incomplete camera</source>
        <translation>Cámara incompleta</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="578"/>
        <source>“%1” has no host address.</source>
        <translation>«%1» no tiene dirección.</translation>
    </message>
</context>
<context>
    <name>leolink::SignalIndicator</name>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="53"/>
        <source>Wi-Fi</source>
        <translation>Wifi</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="54"/>
        <source>Mobile data</source>
        <translation>Datos móviles</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>Por cable</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>Conexión</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — intensidad desconocida</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %2 de %3</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>No se puede contactar con la cámara: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>La cámara no respondió en el puerto RTSP.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="159"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>Para enviar sonido hace falta ffmpeg y no se pudo iniciar.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="272"/>
        <source>The camera rejected the user name or password.</source>
        <translation>La cámara rechazó el usuario o la contraseña.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="281"/>
        <source>The camera refused: %1</source>
        <translation>La cámara se negó: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="316"/>
        <source>This camera does not offer a speaker.</source>
        <translation>Esta cámara no ofrece altavoz.</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>el flujo terminó (%1) — reconectando</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>SEÑAL DÉBIL</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>FLUJO DEFECTUOSO</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>%n fotograma dañado en los últimos diez segundos.

Normalmente es una señal wifi débil, o un bitrate demasiado bajo para la resolución. leolink repara lo que puede — esto es lo que no pudo.</numerusform><numerusform>%n fotogramas dañados en los últimos diez segundos.

Normalmente es una señal wifi débil, o un bitrate demasiado bajo para la resolución. leolink repara lo que puede — esto es lo que no pudo.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>conectando…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="703"/>
        <source>Mute this camera</source>
        <translation>Silenciar esta cámara</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="306"/>
        <source>Volume</source>
        <translation>Volumen</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <location filename="../src/VideoTile.cpp" line="1007"/>
        <source>Record this camera</source>
        <translation>Grabar esta cámara</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="985"/>
        <source>Speak through the camera</source>
        <translation>Hablar a través de la cámara</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>Ajustes de la cámara</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="455"/>
        <source>no host configured</source>
        <translation>sin dirección configurada</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="529"/>
        <source>connecting over Baichuan…</source>
        <translation>conectando por Baichuan…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="552"/>
        <location filename="../src/VideoTile.cpp" line="938"/>
        <source>custom stream</source>
        <translation>flujo propio</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="554"/>
        <location filename="../src/VideoTile.cpp" line="940"/>
        <source>main stream</source>
        <translation>flujo principal</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="555"/>
        <location filename="../src/VideoTile.cpp" line="941"/>
        <source>sub stream</source>
        <translation>flujo secundario</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="702"/>
        <source>Unmute this camera</source>
        <translation>Quitar el silencio a esta cámara</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="720"/>
        <source>MOTION</source>
        <translation>MOVIMIENTO</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="838"/>
        <location filename="../src/VideoTile.cpp" line="858"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>la cámara se está reconfigurando… %1 s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="860"/>
        <source>camera is reconfiguring…</source>
        <translation>la cámara se está reconfigurando…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="913"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>flujo perdido — reconectando (%1)</translation>
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
        <translation>Dejar de hablar</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1006"/>
        <source>Stop recording</source>
        <translation>Detener la grabación</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — zonas de movimiento</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>Arrastre sobre la imagen para elegir qué se vigila. Las áreas oscurecidas se ignoran — útil para una carretera al borde de la vista, un árbol que se mueve con el viento o el portal de un vecino.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>Vigilarlo todo</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>Ignorarlo todo</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>Invertir</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>Dibujar</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>Vigilar un rectángulo</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>Ignorar un rectángulo</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>Arrastre sobre celdas sueltas.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>Arrastre para trazar un rectángulo que se vigile. Mayús y arrastrar hace lo mismo sin cambiar de herramienta.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>Arrastre para trazar un rectángulo que se ignore. Ctrl y arrastrar hace lo mismo sin cambiar de herramienta.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>Obteniendo una imagen de %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>Sin imagen: %1 — las zonas pueden fijarse igualmente.</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>no hay imagen disponible</translation>
    </message>
</context>
</TS>
