"""Spanish. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Spanish. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "Diagnóstico",
    "&Diagnostics…": "&Diagnóstico…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "Lo que han estado haciendo leolink y las cámaras — y un informe para "
        "adjuntar a un aviso de fallo.",
    "Errors only": "Solo errores",
    "Warnings and errors": "Avisos y errores",
    "Normal activity": "Actividad normal",
    "Everything": "Todo",
    "All areas": "Todas las áreas",
    "Search…": "Buscar…",
    "Show": "Mostrar",
    "Detailed logging": "Registro detallado",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "Anota cada petición a la cámara, cada decisión del decodificador y "
        "cada reconexión. Déjelo apagado para el uso diario — enciéndalo "
        "cuando algo falle, reproduzca el problema y envíe entonces el "
        "informe.",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "Anota cada petición a la cámara, cada decisión del decodificador y "
        "cada reconexión, en ~/.local/share/leolink/leolink.log.",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "Los errores y los avisos se anotan siempre. El registro detallado "
        "añade la conversación con la cámara — enciéndalo cuando algo falle, "
        "reprodúzcalo y envíe el informe desde Ayuda ▸ Diagnóstico. Las "
        "contraseñas y los testigos de sesión se eliminan antes de escribir "
        "nada.",
    "Open diagnostics…": "Abrir el diagnóstico…",
    "Open diagnostics": "Abrir el diagnóstico",
    "Follow new lines": "Seguir las líneas nuevas",
    "Copy report": "Copiar el informe",
    "System details and the log, ready to paste into a bug report.":
        "Datos del sistema y el registro, listos para pegar en un aviso de "
        "fallo.",
    "Report copied.": "Informe copiado.",
    "Save report…": "Guardar el informe…",
    "Save report": "Guardar el informe",
    "Text files (*.txt)": "Archivos de texto (*.txt)",
    "Could not write %1.": "No se pudo escribir %1.",
    "Open log folder": "Abrir la carpeta del registro",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "Las contraseñas, los testigos de sesión y las direcciones de internet "
        "se eliminan antes de escribir nada, así que esto puede compartirse "
        "tal cual. Las direcciones de su propia red se conservan — suelen ser "
        "la primera pista.",
    "%1 of %2 lines": "%1 de %2 líneas",
    "Report a problem": "Informar de un problema",
    "<b>Attach a diagnostics report</b>":
        "<b>Adjunte un informe de diagnóstico</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "Recoge qué máquina es la suya, qué respondieron las cámaras y dónde "
        "se torció la cosa — con las contraseñas y las direcciones ya "
        "eliminadas. Sin él, la mayoría de los avisos no pueden "
        "seguirse.\n\nSi el problema puede provocarlo usted, encienda antes el "
        "registro detallado en la ventana de diagnóstico, hágalo ocurrir de "
        "nuevo y copie entonces el informe.",
    "Go to the issue tracker": "Ir al gestor de incidencias",
    "Application": "Aplicación",
    "Camera API": "Interfaz de la cámara",
    "ONVIF events": "Eventos ONVIF",
    "Event actions": "Acciones de evento",
    "Baichuan": "Baichuan",
    "User interface": "Interfaz de usuario",
    "Qt": "Qt",
    "strong": "fuerte",
    "good": "buena",
    "fair": "regular",
    "weak": "débil",
    "unknown": "desconocida",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "Señal tal como la oye la cámara: %1 de 4",
    "Encryption: %1": "Cifrado: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "Algunos nombres se oyeron desde varios puntos de acceso — eso es una "
        "malla. La cámara se une al nombre, no a un nodo concreto; la malla "
        "decide con cuál habla y lo traspasa cuando hace falta. Para encontrar "
        "el mejor sitio, mueva la cámara y observe arriba «Señal wifi»: ese es "
        "el enlace que tiene de verdad.",
    "What this camera supports": "Qué admite esta cámara",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "El firmware de Reolink varía enormemente entre modelos, y la única "
        "forma fiable de saber qué puede hacer una cámara es preguntárselo. Si "
        "a leolink le falta algo que su cámara claramente tiene, esta lista en "
        "un aviso de fallo es lo que hace posible añadirlo.",
    "Ask the camera": "Preguntar a la cámara",
    "Copy the list": "Copiar la lista",
    "Copied.": "Copiado.",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>Admitido (%1):</b> %2<br><br><b>No admitido (%3):</b> %4",
    "Privacy": "Privacidad",
    "Privacy areas…": "Áreas privadas…",
    "Parts of the view the camera blanks before anything leaves it.":
        "Partes de la vista que la cámara tapa antes de que nada salga de "
        "ella.",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "Tapado en la propia cámara, así que la parte cubierta falta en todos "
        "los visores y en todas las grabaciones — la ventana de un vecino, o "
        "un escritorio que no debería salir en vídeo.",
    "%1 — privacy areas": "%1 — áreas privadas",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "Arrastre para marcar las partes de la vista que la cámara debe tapar. "
        "Las ennegrece antes de que nada salga del aparato, así que faltan en "
        "la imagen en directo, en las grabaciones y en cualquier otro programa "
        "— incluida la aplicación del fabricante.",
    "Remove the last": "Quitar la última",
    "Remove all": "Quitar todas",
    "No picture: %1 — the areas can still be drawn.":
        "Sin imagen: %1 — las áreas pueden dibujarse igualmente.",
    "%1 of %2 areas": "%1 de %2 áreas",
    "nothing blanked": "nada tapado",
    "Detection area…": "Área de detección…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "Qué partes de la imagen vigila la cámara. Todo lo que quede fuera del "
        "área se ignora — una carretera al borde de la vista, un árbol al "
        "viento, la puerta de un vecino.",
    "%1 — the camera's detection area": "%1 — área de detección de la cámara",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "Arrastre sobre la imagen para elegir qué vigila la cámara. Las áreas "
        "oscurecidas se ignoran. Esta es la cuadrícula propia de la cámara, de "
        "%1 por %2, así que es más fina que la de leolink.",
    "When to watch…": "Cuándo vigilar…",
    "Hours of the week the camera raises motion events at all.":
        "Horas de la semana en que la cámara notifica movimiento.",
    "%1 — when to watch": "%1 — cuándo vigilar",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "Horas en que la cámara notifica movimiento. Fuera de ellas sigue "
        "viendo, pero no dice nada.",
    "When to record…": "Cuándo grabar…",
    "Hours of the week the camera records to its card by itself.":
        "Horas de la semana en que la cámara graba en su tarjeta por su "
        "cuenta.",
    "%1 — when to record": "%1 — cuándo grabar",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "Horas en que la cámara graba en su propia tarjeta. Para esto hace "
        "falta una tarjeta puesta; la grabación en este ordenador se ajusta en "
        "Cámaras → Eventos y funciona sin ella.",
    "Area, times and sensitivity": "Área, horarios y sensibilidad",
    "To": "Hasta",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "Las cámaras admiten distinta sensibilidad según la hora del día, que "
        "es como se evita que los faros de noche lo disparen todo sin quedarse "
        "sorda de día.",
    "All week": "Toda la semana",
    "Never": "Nunca",
    "Nights": "Por la noche",
    "Working hours": "Horario laboral",
    "Weekends": "Fines de semana",
    "22:00 to 06:00, every day.": "De 22:00 a 06:00, todos los días.",
    "08:00 to 17:00, Monday to Friday.":
        "De 08:00 a 17:00, de lunes a viernes.",
    "Nothing is selected — this will never run.":
        "No hay nada seleccionado — esto no se ejecutará nunca.",
    "Always on.": "Siempre activo.",
    "Mobile data": "Datos móviles",
    "SIM card": "Tarjeta SIM",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "Solo hace falta si la tarjeta lo pide. Tres intentos fallidos "
        "bloquean la tarjeta, que necesitará entonces un PUK que solo tiene su "
        "operadora.",
    "Access point (APN)": "Punto de acceso (APN)",
    "Authentication": "Autenticación",
    "Use mobile data": "Usar datos móviles",
    "Modem": "Módem",
    "Card": "Tarjeta",
    "Type": "Tipo",
    "Signal": "Señal",
    "IMEI": "IMEI",
    "Card number": "Número de tarjeta",
    "Mobile connection": "Conexión móvil",
    "Data used": "Datos consumidos",
    "Monthly limit": "Límite mensual",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>No probado con hardware real.</b> Nadie involucrado en leolink "
        "tiene una cámara con módem, así que esto se escribió solo a partir "
        "del protocolo. No puede estropear nada — un comando que la cámara no "
        "conoce simplemente se rechaza — pero igual de bien puede no mostrar "
        "nada en absoluto.\n\nSi su cámara lleva SIM, «Qué admite esta cámara» "
        "en Mantenimiento enumera los comandos que su firmware tiene de "
        "verdad. Esa lista, en un aviso de fallo, es lo que permitiría "
        "terminar esto como es debido.",
    "Baichuan (the camera's own protocol)":
        "Baichuan (el protocolo propio de la cámara)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP le va bien a la mayoría de las cámaras y es lo primero que hay "
        "que probar.\n\nHTTP-FLV solo necesita el puerto 80, lo que ayuda allí "
        "donde RTSP está bloqueado.\n\nBaichuan es lo que habla la aplicación "
        "de Reolink. Es la respuesta para las cámaras que dejan RTSP apagado — "
        "los modelos con batería lo hacen — y no consume ninguna de las pocas "
        "sesiones web de la cámara. Solo vídeo: el sonido sigue llegando por "
        "RTSP.",
    "connecting over Baichuan…": "conectando por Baichuan…",
    "Cannot open a local port: %1": "No se puede abrir un puerto local: %1",
    "Baichuan login failed: %1": "Falló el inicio de sesión de Baichuan: %1",
    "The camera refused to send video: %1":
        "La cámara se negó a enviar vídeo: %1",
    "The player did not connect.": "El reproductor no se conectó.",
    "The camera stopped sending.": "La cámara dejó de enviar.",
    "custom stream": "flujo propio",
    "Speak through the camera": "Hablar a través de la cámara",
    "Stop speaking": "Dejar de hablar",
    "Play through %1": "Reproducir a través de %1",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "Archivos de sonido (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Todos los "
        "archivos (*)",
    "Speaking through the camera…": "Hablando a través de la cámara…",
    "Finished.": "Terminado.",
    "Cannot reach the camera: %1": "No se puede contactar con la cámara: %1",
    "The camera did not answer on the RTSP port.":
        "La cámara no respondió en el puerto RTSP.",
    "ffmpeg is needed to send sound and could not be started.":
        "Para enviar sonido hace falta ffmpeg y no se pudo iniciar.",
    "The camera rejected the user name or password.":
        "La cámara rechazó el usuario o la contraseña.",
    "The camera refused: %1": "La cámara se negó: %1",
    "This camera does not offer a speaker.": "Esta cámara no ofrece altavoz.",
    "Sound": "Sonido",
    "Send sound": "Enviar sonido",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "El micrófono de la cámara. Con esto apagado sigue poniendo una pista "
        "de audio en el flujo — una completamente muda, que es mucho más "
        "difícil de reconocer que la falta de pista.",
    "What it recognises": "Qué reconoce",
    "People": "Personas",
    "Vehicles": "Vehículos",
    "Animals": "Animales",
    "Faces": "Rostros",
    "Any movement": "Cualquier movimiento",
    "Continuous": "Continuo",
    "This camera keeps a separate week for each kind of event. Which one?":
        "Esta cámara lleva una semana aparte para cada tipo de evento. ¿Cuál?",
    "Push notifications": "Notificaciones push",
    "Folder": "Carpeta",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "La cámara no está respondiendo peticiones ahora mismo. Lo hace cuando "
        "ha recibido demasiadas de golpe; se recupera sola en un momento.",
    "Camera-side detection": "Detección en la cámara",
    "Where it looks": "Dónde mira",
    "Choose the area…": "Elegir el área…",
    "When it reports at all": "Cuándo avisa siquiera",
    "Choose the hours…": "Elegir las horas…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "Una semana por horas: en las que marque, la cámara avisa del "
        "movimiento; en el resto se calla. Nada que ver con lo sensible que es "
        "— eso se ajusta más abajo.",
    "How readily it triggers": "Con qué facilidad se dispara",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "A lo largo del día la cámara puede dispararse con más o menos "
        "facilidad. Así se evita que los faros de noche lo disparen todo sin "
        "dejarla ciega de día. Cuántos tramos hay lo fija la cámara; sus "
        "horarios y sensibilidades son cosa suya.",
    "Siren": "Sirena",
    "Sound on an alarm": "Sonar en una alarma",
    "Times": "Horarios",
    "Spotlight": "Foco",
    "On": "Encendido",
    "Draw": "Dibujar",
    "Watch a rectangle": "Vigilar un rectángulo",
    "Ignore a rectangle": "Ignorar un rectángulo",
    "Drag over single cells.": "Arrastre sobre celdas sueltas.",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "Arrastre para trazar un rectángulo que se vigile. Mayús y arrastrar "
        "hace lo mismo sin cambiar de herramienta.",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "Arrastre para trazar un rectángulo que se ignore. Ctrl y arrastrar "
        "hace lo mismo sin cambiar de herramienta.",
    "  · already added": "  · ya añadida",
    "Processor load %1 %": "Carga del procesador %1 %",
    "Encoder output %1 kbit/s": "Salida del codificador %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "Admitido (%1):\n%2\n\nNo admitido (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "La cámara pregunta a Reolink, no este ordenador — así que necesita "
        "una salida a internet propia.",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "Una parte de la cámara no respondió. Según lo que se preguntara, eso "
        "significa que no hay tarjeta SD puesta, o que la cámara no tiene "
        "salida a internet.",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "El restablecimiento de fábrica no se ofrece aquí. Borra también los "
        "ajustes de red, y una cámara que ha olvidado su wifi hay que "
        "descolgarla y alcanzarla por cable — si de verdad quiere eso, use la "
        "interfaz web de la propia cámara.",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "La cámara no tiene sesiones libres. Solo admite un puñado a la vez, "
        "compartidas con la aplicación del móvil y su página web. Ciérrelas, o "
        "espere un minuto a que caduquen las antiguas.",
    "&File": "&Archivo",
    "&View": "&Ver",
    "&Help": "A&yuda",
    "&Cameras…": "&Cámaras…",
    "&Save snapshots…": "&Guardar instantáneas…",
    "&Event log…": "&Registro de eventos…",
    "Open &recordings folder": "Abrir la carpeta de &grabaciones",
    "&Quit": "&Salir",
    "&Full screen": "&Pantalla completa",
    "Leave full screen": "Salir de la pantalla completa",
    "Show &menu bar": "Mostrar la barra de &menú",
    "Show &toolbar": "Mostrar la barra de &herramientas",
    "Show status &bar": "Mostrar la barra de &estado",
    "Hide window &decoration": "Ocultar el &marco de la ventana",
    "&Online handbook": "Manual en &línea",
    "&Protocol notes": "Notas del &protocolo",
    "&Report a problem": "&Informar de un problema",
    "&About leolink": "&Acerca de leolink",
    "Main": "Principal",
    "Ready": "Listo",
    "Grid view": "Vista de cuadrícula",
    "No cameras configured": "No hay cámaras configuradas",
    "Nothing to capture": "Nada que capturar",
    "Save snapshots to": "Guardar las instantáneas en",
    "Esc leaves full screen": "Esc sale de la pantalla completa",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc sale de la pantalla completa · doble clic en una cámara para "
        "llenar la pantalla",
    "Double-click for the grid · Esc leaves full screen":
        "Doble clic para la cuadrícula · Esc sale de la pantalla completa",
    "Cannot save": "No se puede guardar",
    "Settings could not be written to %1.":
        "Los ajustes no pudieron escribirse en %1.",
    "Cannot create %1": "No se puede crear %1",
    "Recording %1": "Grabando %1",
    "Saved %1": "Guardado %1",
    "Motion at %1": "Movimiento en %1",
    "Motion detected": "Movimiento detectado",
    "Could not run the motion command for %1":
        "No se pudo ejecutar el comando de movimiento de %1",
    "leolink is still running": "leolink sigue en marcha",
    "Cameras keep recording. Use the tray icon to come back.":
        "Las cámaras siguen grabando. Use el icono de la bandeja para volver.",
    "Show window": "Mostrar la ventana",
    "Cameras…": "Cámaras…",
    "Quit": "Salir",
    "Welcome to leolink": "Bienvenido a leolink",
    "<b>No cameras are configured yet.</b>":
        "<b>Todavía no hay ninguna cámara configurada.</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "Añada una cámara con su dirección, usuario y contraseña. leolink "
        "habla con la cámara directamente en su red — no interviene ninguna "
        "cuenta en la nube.<p>El manual explica qué hace cada opción.",
    "Add camera…": "Añadir una cámara…",
    "Open handbook": "Abrir el manual",
    "About leolink": "Acerca de leolink",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Un cliente nativo de Linux para cámaras "
        "Reolink.</p><p>Habla directamente los protocolos propios de la "
        "cámara: interfaz HTTP, RTSP y ONVIF en la red local, y el servicio "
        "P2P de Reolink cuando quiera alcanzar una cámara desde otro "
        "sitio.</p><p><a href=\"%2\">Manual</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">Código "
        "fuente</a></p><p>Sin relación con Reolink ni respaldo por su "
        "parte.</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "Todavía no hay cámaras configuradas.\n\nUse «Cámaras…» para añadir "
        "una.",
    "connecting…": "conectando…",
    "main stream": "flujo principal",
    "sub stream": "flujo secundario",
    "no host configured": "sin dirección configurada",
    "cannot open stream": "no se puede abrir el flujo",
    "libmpv unavailable": "libmpv no disponible",
    "player init failed": "falló el arranque del reproductor",
    "MOTION": "MOVIMIENTO",
    "Mute this camera": "Silenciar esta cámara",
    "Unmute this camera": "Quitar el silencio a esta cámara",
    "Volume": "Volumen",
    "Camera settings": "Ajustes de la cámara",
    "Settings": "Ajustes",
    "Cameras": "Cámaras",
    "Layout": "Disposición",
    "Events": "Eventos",
    "Window": "Ventana",
    "Add": "Añadir",
    "Remove": "Quitar",
    "Remove camera": "Quitar la cámara",
    "Remove “%1” from the list?": "¿Quitar «%1» de la lista?",
    "New camera": "Cámara nueva",
    "Name": "Nombre",
    "Host": "Dirección",
    "User": "Usuario",
    "Password": "Contraseña",
    "Password command": "Comando de contraseña",
    "UID": "UID",
    "Stream": "Flujo",
    "Transport": "Transporte",
    "192.168.1.10 or camera.lan": "192.168.1.10 o camara.lan",
    "optional, for P2P access": "opcional, para el acceso P2P",
    "optional: pass show reolink/hall": "opcional: pass show reolink/entrada",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "Si se indica, se ejecuta este comando y su salida se usa como "
        "contraseña. Mantiene el secreto fuera del archivo de configuración.",
    "Sub stream (low bandwidth)": "Flujo secundario (poco ancho de banda)",
    "Main stream (full resolution)": "Flujo principal (resolución completa)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (menos latencia)",
    "Use HTTPS for the control API": "Usar HTTPS para la interfaz de control",
    "Show this camera": "Mostrar esta cámara",
    "Test connection": "Probar la conexión",
    "Contacting %1…": "Contactando con %1…",
    "Enter a host first.": "Indique antes una dirección.",
    "Incomplete camera": "Cámara incompleta",
    "“%1” has no host address.": "«%1» no tiene dirección.",
    "%1 — firmware %2, %3 channel(s)": "%1 — firmware %2, %3 canal(es)",
    "Scan network…": "Explorar la red…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "Pregunta a la red qué cámaras ONVIF hay. Envía una sola consulta "
        "multidifusión; con los aparatos que callan no se contacta nunca.",
    "Looking for cameras…": "Buscando cámaras…",
    "Stop": "Detener",
    "Cameras found": "Cámaras encontradas",
    "Add which one?": "¿Cuál añadir?",
    "No cameras found": "No se encontraron cámaras",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "Ningún aparato ONVIF respondió.\n\nLas cámaras solo contestan si "
        "ONVIF está encendido, y la consulta no atraviesa los routers ni la "
        "mayoría de las VPN. Aún puede añadir una cámara escribiendo su "
        "dirección.",
    "unnamed device": "aparato sin nombre",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.":
        "No se puede abrir un socket UDP para la búsqueda.",
    "Grid size": "Tamaño de la cuadrícula",
    "Columns": "Columnas",
    "Rows": "Filas",
    "Column": "Columna",
    "Row": "Fila",
    "Row span": "Filas que ocupa",
    "Column span": "Columnas que ocupa",
    "automatic": "automático",
    "Position of the selected camera": "Posición de la cámara seleccionada",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "Deje la fila y la columna en «automático» para que las cámaras llenen "
        "la cuadrícula por orden. Ocupando varias celdas, una cámara puede "
        "cubrir más de una.",
    "Watch cameras for motion (ONVIF push)":
        "Vigilar el movimiento en las cámaras (push ONVIF)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "La cámara avisa del movimiento cuando ocurre, en vez de que leolink "
        "pregunte una vez por segundo.",
    "Run command": "Ejecutar un comando",
    "notify-send \"Motion at %n\"": "notify-send \"Movimiento en %n\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "Se ejecuta cuando esta cámara avisa de movimiento.\n%n nombre de la "
        "cámara · %h dirección · %t marca de tiempo · %f archivo de grabación",
    "Record while motion lasts": "Grabar mientras dure el movimiento",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "Graba en este ordenador a partir del flujo en directo, así que "
        "funciona incluso cuando la cámara no lleva tarjeta SD.",
    "Keep recording after": "Seguir grabando otros",
    " s": " s",
    "Selected camera": "Cámara seleccionada",
    "All cameras": "Todas las cámaras",
    "Recordings folder": "Carpeta de grabaciones",
    "Browse…": "Examinar…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "Las grabaciones se escriben como Matroska sin recodificar: la imagen "
        "conserva la calidad original de la cámara y el procesador se queda "
        "casi ocioso.",
    "Appearance": "Aspecto",
    "Show menu bar": "Mostrar la barra de menú",
    "Show toolbar": "Mostrar la barra de herramientas",
    "Show status bar": "Mostrar la barra de estado",
    "Hide window decoration": "Ocultar el marco de la ventana",
    "Ctrl+M toggles this at any time.":
        "Ctrl+M lo cambia en cualquier momento.",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "Para pantallas de pared. Ctrl+Mayús+D lo cambia.",
    "Notification area": "Área de notificación",
    "Show an icon in the notification area":
        "Mostrar un icono en el área de notificación",
    "Closing the window hides it instead of quitting":
        "Cerrar la ventana la oculta en vez de salir",
    "Minimising hides the window to the tray":
        "Minimizar oculta la ventana en la bandeja",
    "On motion": "Con movimiento",
    "Bring the window up when motion is detected":
        "Traer la ventana al frente cuando se detecte movimiento",
    "Come back as": "Volver como",
    "Previous size": "Tamaño anterior",
    "Full screen": "Pantalla completa",
    "Language": "Idioma",
    "System language": "Idioma del sistema",
    "Takes effect after restarting leolink.":
        "Surte efecto al reiniciar leolink.",
    "Menu bar hidden": "Barra de menú oculta",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "Con la barra de menú y la de herramientas ocultas, pulse Ctrl+M para "
        "recuperar el menú.",
    "Event log": "Registro de eventos",
    "Camera:": "Cámara:",
    "Show:": "Mostrar:",
    "All events": "Todos los eventos",
    "Motion": "Movimiento",
    "With recording": "Con grabación",
    "Refresh": "Actualizar",
    "When": "Cuándo",
    "Camera": "Cámara",
    "Event": "Evento",
    "Media": "Medios",
    "video": "vídeo",
    "image": "imagen",
    " + image": " + imagen",
    "no preview": "sin vista previa",
    "recording only": "solo grabación",
    "no events recorded yet": "aún no hay eventos registrados",
    "Recording: %1%2": "Grabación: %1%2",
    " (file missing)": " (falta el archivo)",
    "Image: %1": "Imagen: %1",
    "Open recording": "Abrir la grabación",
    "Open image": "Abrir la imagen",
    "Nothing to open": "Nada que abrir",
    "The file for this event is no longer there.":
        "El archivo de este evento ya no está.",
    "Clear log…": "Vaciar el registro…",
    "Clear event log": "Vaciar el registro de eventos",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "¿Borrar todo el historial de eventos?\n\nLos vídeos y las imágenes "
        "grabados se quedan en el disco — solo se vacía el registro.",
    "Command": "Comando",
    "could not be started": "no se pudo iniciar",
    "Webhook": "Webhook",
    "invalid URL": "dirección no válida",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 falló: %2",
    "Event log…": "Registro de eventos…",
    "MQTT broker or topic not set.": "Falta el bróker o el tema MQTT.",
    "MQTT broker did not respond.": "El bróker MQTT no respondió.",
    "MQTT: %1": "MQTT: %1",
    "MQTT: unexpected reply from the broker.":
        "MQTT: respuesta inesperada del bróker.",
    "MQTT refused the connection: %1": "MQTT rechazó la conexión: %1",
    "Video": "Vídeo",
    "Decoding": "Decodificación",
    "Hardware, fastest": "Hardware, lo más rápido",
    "Hardware, with frame copy": "Hardware, con copia de fotograma",
    "Software only": "Solo software",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "La decodificación por hardware deja libre el procesador y es la "
        "elección correcta para resoluciones de flujo principal.\n\nSi la "
        "imagen muestra bloques verdes o se atasca, elija «con copia de "
        "fotograma»: sigue decodificando en la GPU pero copia cada fotograma a "
        "la memoria principal, algo que algunos controladores necesitan cuando "
        "el vídeo va dentro de otra ventana.",
    "Favour low latency over smoothness":
        "Preferir la baja latencia a la fluidez",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "Reduce el búfer al mínimo. Apáguelo si un flujo de bitrate alto se "
        "entrecorta en una red cargada.",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "Arrastre la franja de debajo de una cámara para mover la ventana. "
        "Ctrl+Mayús+D devuelve el marco, Ctrl+M el menú.",
    "%1 — camera settings": "%1 — ajustes de la cámara",
    "Reading settings from %1…": "Leyendo los ajustes de %1…",
    "Apply to camera": "Aplicar a la cámara",
    "Main stream": "Flujo principal",
    "Sub stream": "Flujo secundario",
    "Resolution": "Resolución",
    "Frame rate": "Fotogramas por segundo",
    "Bit rate (kbit/s)": "Bitrate (kbit/s)",
    "H.264 profile": "Perfil H.264",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "Más alto significa mejor imagen y más tráfico de red. La cámara solo "
        "ofrece las tasas que puede sostener de verdad.",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "Esto cambia la cámara en sí, así que todos los programas ven el "
        "resultado. Las opciones vienen de la cámara y varían según el modelo.",
    "Picture": "Imagen",
    "Brightness": "Brillo",
    "Contrast": "Contraste",
    "Saturation": "Saturación",
    "Sharpness": "Nitidez",
    "Hue": "Tono",
    "Ready.": "Listo.",
    "Writing to the camera…": "Escribiendo en la cámara…",
    "Nothing to write.": "Nada que escribir.",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "Guardado. Cambiar el codificador reinicia el flujo, así que la imagen "
        "puede caerse un momento.",
    "&Record all cameras": "&Grabar todas las cámaras",
    "Record this camera": "Grabar esta cámara",
    "Stop recording": "Detener la grabación",
    "Recording all cameras": "Grabando todas las cámaras",
    "Recording stopped": "Grabación detenida",
    "Recording started": "Grabación iniciada",
    "Could not start recording %1": "No se pudo empezar a grabar %1",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "ffmpeg no está instalado, así que no se puede grabar.",
    "No stream address for %1.": "No hay dirección de flujo para %1.",
    "Recording failed: %1": "Falló la grabación: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "La grabación no produjo datos (ffmpeg salió con %1).",
    "Could not start ffmpeg.": "No se pudo iniciar ffmpeg.",
    "Custom URL": "Dirección propia",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "Cualquier dirección que libmpv pueda abrir. Úsela para cámaras de "
        "otros fabricantes, un flujo de un NVR o un archivo local.",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "ffmpeg no está instalado, así que no se puede detectar movimiento.",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "ffmpeg no está instalado, así que no se puede detectar sonido.",
    "Motion detection stopped: %1": "Detección de movimiento detenida: %1",
    "Sound detection stopped: %1": "Detección de sonido detenida: %1",
    "Could not start ffmpeg for motion detection.":
        "No se pudo iniciar ffmpeg para la detección de movimiento.",
    "Could not start ffmpeg for sound detection.":
        "No se pudo iniciar ffmpeg para la detección de sonido.",
    "Sound detected": "Sonido detectado",
    "%1 at %2": "%1 en %2",
    "Detection": "Detección",
    "Motion comes from": "El movimiento lo avisa",
    "The camera reports it (ONVIF)": "La cámara misma (ONVIF)",
    "leolink watches the picture": "leolink observando la imagen",
    "Either of the two": "Cualquiera de los dos",
    "Do not watch": "No vigilar",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "Vigilar las cámaras que avisan del movimiento por su cuenta no cuesta "
        "nada.\n\nAnalizar aquí la imagen funciona con cualquier cámara, "
        "incluidas las que no avisan de nada, pero abre por cada una una "
        "segunda conexión al flujo secundario.",
    "Motion zones…": "Zonas de movimiento…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "Elija qué partes de la imagen se vigilan. Solo se aplica cuando es "
        "leolink quien analiza la imagen.",
    "Sensitivity": "Sensibilidad",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "Cuánto debe cambiar un punto de la imagen para contar. Más alto nota "
        "más, incluidas las sombras y la lluvia.",
    "Minimum area": "Área mínima",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "Cuánto del área vigilada debe cambiar para que cuente como "
        "movimiento. 20 ‰ es el dos por ciento de la imagen — más o menos una "
        "persona a media distancia.",
    "Raise an event on sound": "Lanzar un evento con el sonido",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "Necesita una cámara con micrófono. Abre otra conexión al flujo "
        "secundario.",
    "Sound above": "Sonido por encima de",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB es casi silencio, -20 dB una voz alzada cerca.",
    "Hold for": "Mantener durante",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "Mantiene el evento después de que cese el ruido, para que un ladrido "
        "no se avise cuatro veces.",
    "%1 — motion zones": "%1 — zonas de movimiento",
    "no picture available": "no hay imagen disponible",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "Arrastre sobre la imagen para elegir qué se vigila. Las áreas "
        "oscurecidas se ignoran — útil para una carretera al borde de la "
        "vista, un árbol que se mueve con el viento o el portal de un vecino.",
    "Watch all": "Vigilarlo todo",
    "Ignore all": "Ignorarlo todo",
    "Invert": "Invertir",
    "Fetching a picture from %1…": "Obteniendo una imagen de %1…",
    "No picture: %1 — the zones can still be set.":
        "Sin imagen: %1 — las zonas pueden fijarse igualmente.",
    "Recordings on the &camera…": "Grabaciones en la &cámara…",
    "Browse what is stored on the camera's own SD card.":
        "Explore lo que hay guardado en la tarjeta SD de la propia cámara.",
    "Which camera": "Qué cámara",
    "Show recordings from": "Mostrar las grabaciones de",
    "%1 — recordings on the camera": "%1 — grabaciones en la cámara",
    "Search": "Buscar",
    "From": "Desde",
    "to": "hasta",
    "Start": "Comienzo",
    "Length": "Duración",
    "Size": "Tamaño",
    "File": "Archivo",
    "Play": "Reproducir",
    "Download…": "Descargar…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "Elija un periodo y pulse Buscar. Solo hay grabaciones si la cámara "
        "lleva puesta una tarjeta SD.",
    "Asking %1…": "Preguntando a %1…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "No se encontró nada en ese periodo. O no se grabó nada, o la cámara "
        "no tiene tarjeta SD.",
    "No session with the camera — search first.":
        "No hay sesión con la cámara — busque primero.",
    "No player": "Sin reproductor",
    "mpv was not found. The recording is at:\n\n%1":
        "No se encontró mpv. La grabación está en:\n\n%1",
    "Save recording": "Guardar la grabación",
    "Cannot write to %1.": "No se puede escribir en %1.",
    "Saved to %1": "Guardado en %1",
    "Download failed: %1": "Falló la descarga: %1",
    "Maintenance": "Mantenimiento",
    "Restart": "Reiniciar",
    "Restart the camera": "Reiniciar la cámara",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "La cámara se cae de la red durante un minuto más o menos y vuelve por "
        "su cuenta. Las grabaciones de su tarjeta SD no se ven afectadas y los "
        "ajustes se conservan.\n\nVale la pena probarlo cuando una cámara ha "
        "dejado de responder, rechaza conexiones nuevas o se ha descolocado "
        "tras una actualización de firmware.",
    "<b>Restart %1?</b>": "<b>¿Reiniciar %1?</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "La imagen desaparecerá alrededor de un minuto. Lo que se esté "
        "grabando ahora mismo se detendrá.",
    "Asking %1 to restart…": "Pidiendo a %1 que se reinicie…",
    "Restarting. The camera will be back in about a minute.":
        "Reiniciando. La cámara volverá en un minuto aproximadamente.",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "El restablecimiento de fábrica y el formateo de la tarjeta SD no se "
        "ofrecen aquí. Ambos son irreversibles y es mejor hacerlos en la "
        "interfaz web de la propia cámara, donde los avisos son los del "
        "fabricante.",
    "Network": "Red",
    "Connection": "Conexión",
    "Reading…": "Leyendo…",
    "Wi-Fi signal": "Señal wifi",
    "Wi-Fi signal unknown": "Señal wifi desconocida",
    "Wi-Fi signal %1 of %2": "Señal wifi %1 de %2",
    "Link": "Enlace",
    "Address": "Dirección",
    "Netmask": "Máscara de red",
    "Gateway": "Puerta de enlace",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "Nombre de la red",
    "Ports": "Puertos",
    "The camera reported nothing.": "La cámara no informó de nada.",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "Se muestra a título informativo. Las direcciones, las credenciales "
        "wifi y los puertos se cambian en la interfaz web de la propia cámara "
        "— un error aquí dejaría la cámara fuera de alcance.",
    "Hardware, with frame copy (recommended)":
        "Hardware, con copia de fotograma (recomendado)",
    "Hardware, zero copy (fastest)": "Hardware, sin copia (lo más rápido)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "Las tres decodifican en la tarjeta gráfica siempre que "
        "pueden.\n\n«Con copia de fotograma» pasa cada fotograma por la "
        "memoria principal. Es un pequeño porcentaje más lento y es la opción "
        "por defecto, porque la vía sin copia produce bloques verdes o una "
        "imagen congelada en varios controladores cuando el vídeo va dentro de "
        "otra ventana.\n\nPruebe «sin copia» si quiere ese último puñado de "
        "por ciento; vuelva atrás si la imagen se rompe.",
    "This camera does not offer these settings.":
        "Esta cámara no ofrece estos ajustes.",
    "Exposure and orientation": "Exposición y orientación",
    "Day / night": "Día / noche",
    "Automatic": "Automático",
    "Always colour": "Siempre en color",
    "Always black and white": "Siempre en blanco y negro",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "«Auto» pasa al infrarrojo según se va la luz. Forzar el color de "
        "noche da una imagen demasiado oscura para servir de nada; forzar el "
        "blanco y negro de día pierde el color para nada.",
    "Anti-flicker": "Antiparpadeo",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "Haga que coincida con la frecuencia de su red eléctrica — 50 Hz en "
        "Europa — o la luz de interior batirá contra el obturador y la imagen "
        "pulsará.",
    "Exposure": "Exposición",
    "Mirror": "Espejo",
    "Flip": "Voltear",
    "For a camera mounted upside down.": "Para una cámara montada boca abajo.",
    "Backlight compensation": "Compensación de contraluz",
    "Helps when the subject stands against a bright window or sky.":
        "Ayuda cuando el sujeto está delante de una ventana o un cielo "
        "brillantes.",
    "Noise reduction": "Reducción de ruido",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "Limpia una imagen oscura, a costa de emborronar lo que se mueva.",
    "Rotation": "Rotación",
    "Dynamic contrast": "Contraste dinámico",
    "Infrared illumination": "Iluminación infrarroja",
    "Infrared lamps": "Lámparas infrarrojas",
    "Always on": "Siempre encendidas",
    "Always off": "Siempre apagadas",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "«Auto» las enciende cuando oscurece. Apáguelas si la cámara mira a "
        "través de un cristal — el reflejo la ciega.",
    "Overlay": "Superposición",
    "On-screen text": "Texto sobre la imagen",
    "Background": "Fondo",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "Dibuja un recuadro detrás del texto para que siga legible sobre una "
        "escena clara.",
    "Watermark": "Marca de agua",
    "Embeds a mark in the recording itself.":
        "Incrusta una marca en la propia grabación.",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "La cámara graba esto a fuego en la imagen, así que aparece en todas "
        "las grabaciones y en todos los programas — no solo aquí.",
    "Motion detection in the camera": "Detección de movimiento en la cámara",
    "Switched on": "Encendida",
    "Higher notices more, including shadows and headlights.":
        "Más alto nota más, incluidas las sombras y los faros.",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "Esta es la detección propia de la cámara, la que avisa por ONVIF. El "
        "análisis de la imagen que hace leolink se ajusta aparte, en Cámaras → "
        "Eventos.",
    "Recording": "Grabación",
    "Recording to the camera's card": "Grabación en la tarjeta de la cámara",
    "Overwrite when full": "Sobrescribir cuando se llene",
    "Off means recording simply stops once the card fills up.":
        "Apagado significa que la grabación simplemente se detiene cuando la "
        "tarjeta se llena.",
    "Record before the event": "Grabar antes del evento",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "Conserva los segundos previos a un disparo, que suelen ser la parte "
        "interesante.",
    "File length": "Duración del archivo",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "Esto rige lo que la cámara escribe en su propia tarjeta SD. La "
        "grabación en este ordenador se ajusta en Cámaras → Eventos y no "
        "necesita tarjeta.",
    "Alerts": "Alertas",
    "E-mail": "Correo electrónico",
    "FTP": "FTP",
    "FTP upload": "Subida por FTP",
    "Push notification": "Notificación push",
    "Server": "Servidor",
    "Port": "Puerto",
    "Send to": "Enviar a",
    "Encrypted": "Cifrado",
    "Not more often than": "No más a menudo de",
    "Attach": "Adjuntar",
    "Directory": "Directorio",
    "Mode": "Modo",
    "Schedule": "Horario",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "Las envía la propia cámara, así que siguen funcionando con este "
        "ordenador apagado. Las reacciones de leolink — comandos, webhooks, "
        "MQTT — están en Cámaras → Eventos.",
    "Time": "Hora",
    "Time server": "Servidor de hora",
    "Synchronise the clock": "Sincronizar el reloj",
    "Every": "Cada",
    "Scheduled restart": "Reinicio programado",
    "Restart regularly": "Reiniciar con regularidad",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "Algunas cámaras se vuelven poco fiables tras semanas encendidas; un "
        "reinicio semanal es una cura barata.",
    "Day": "Día",
    "Hour": "Hora",
    "Minute": "Minuto",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "Una cámara con el reloj mal fecha mal sus grabaciones, lo que pesa "
        "más de lo que parece cuando hay que encontrar una.",
    "Wi-Fi": "Wifi",
    "Scan": "Explorar",
    "Join network": "Unirse a la red",
    "scanning…": "explorando…",
    "The camera is scanning for networks…": "La cámara está buscando redes…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "Explora la cámara, no este ordenador — lo que cuenta es lo que ella "
        "alcanza. La contraseña se prueba antes de guardarla, así que una "
        "errata se rechaza en vez de dejar la cámara sin ninguna red.",
    "Change the camera's network": "Cambiar la red de la cámara",
    "<b>Move %1 to “%2”?</b>": "<b>¿Mover %1 a «%2»?</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "La cámara prueba antes la contraseña y se niega si es incorrecta, así "
        "que esto es más seguro de lo que parece.\n\nAun así desaparecerá un "
        "minuto mientras se reconecta, y si la red nueva le da otra dirección "
        "tendrá que actualizarla aquí después.",
    "Join": "Unirse",
    "Testing the password on the camera…":
        "Probando la contraseña en la cámara…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "Guardado. La cámara se está reconectando y volverá en breve.",
    "The camera could not join that network: %1":
        "La cámara no pudo unirse a esa red: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "Las direcciones y los puertos se leen aquí pero se cambian en la "
        "interfaz web de la propia cámara. Equivocarse en uno deja la cámara "
        "del todo fuera de la red, y la única vuelta atrás es el pin de "
        "reinicio — un diálogo de aviso no sustituye ahí a la propia pantalla "
        "del fabricante.",
    "%1 fps": "%1 fps",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)": "flujo perdido — reconectando (%1)",
    "Hardware (recommended)": "Hardware (recomendado)",
    "Hardware, driver's choice": "Hardware, a elección del controlador",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "«Recomendado» nombra el decodificador explícitamente para que la "
        "decodificación y el dibujado se queden en la misma interfaz gráfica. "
        "A su aire, mpv puede decodificar por una y dibujar por otra, lo que "
        "en algunas tarjetas deja la imagen de un verde macizo.\n\nSi la "
        "imagen sale rota, pruebe las otras por turno. «Solo software» siempre "
        "funciona pero cuesta un núcleo entero del procesador a resolución "
        "completa.",
    "Wired": "Por cable",
    "%1 — strength unknown": "%1 — intensidad desconocida",
    "%1 — %2 of %3": "%1 — %2 de %3",
    "WEAK SIGNAL": "SEÑAL DÉBIL",
    "BAD STREAM": "FLUJO DEFECTUOSO",
    "stream ended (%1) — reconnecting": "el flujo terminó (%1) — reconectando",
    "Open the &log file": "Abrir el archivo de &registro",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "Lo que informaron los reproductores y las cámaras. Vale la pena "
        "adjuntarlo a un aviso de fallo.",
    "Nothing logged yet.": "Todavía no hay nada registrado.",
    "Bit rate looks too low": "El bitrate parece demasiado bajo",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%1 kbit/s es muy poco para %2.</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "Con esta proporción el codificador de la cámara tiende a emitir "
        "fotogramas dañados, que llegan como bloques verdes o una imagen que "
        "se congela — no es un fallo de red, ni algo que leolink pueda reparar "
        "del todo.\n\nO sube el bitrate, o baja la resolución.",
    "Apply anyway": "Aplicar de todos modos",
    "camera is reconfiguring…": "la cámara se está reconfigurando…",
    "Send a test e-mail": "Enviar un correo de prueba",
    "Test the FTP upload": "Probar la subida por FTP",
    "Asking the camera to send a test e-mail…":
        "Pidiendo a la cámara que envíe un correo de prueba…",
    "Asking the camera to try the FTP server…":
        "Pidiendo a la cámara que pruebe el servidor FTP…",
    "%1: the camera reported success.":
        "%1: la cámara informó de que salió bien.",
    "Condition": "Estado",
    "Processor load %1%": "Carga del procesador %1 %",
    "Encoder load %1%": "Carga del codificador %1 %",
    "Network throughput %1 kbit/s": "Tráfico de red %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "La cámara está al límite. Bajar la resolución o los fotogramas por "
        "segundo la estabilizará.",
    "Firmware": "Firmware",
    "Not checked.": "Sin comprobar.",
    "Check for updates": "Buscar actualizaciones",
    "Asking Reolink…": "Preguntando a Reolink…",
    "Install update": "Instalar la actualización",
    "Update available: %1": "Actualización disponible: %1",
    "The firmware is up to date.": "El firmware está al día.",
    "Install firmware": "Instalar el firmware",
    "<b>Update the firmware on %1?</b>":
        "<b>¿Actualizar el firmware de %1?</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "La cámara se descarga la actualización ella sola y se reinicia. "
        "Estará inalcanzable varios minutos.\n\nNo le corte la corriente "
        "durante la actualización — una cámara interrumpida a media escritura "
        "suele haber que devolverla.",
    "Install": "Instalar",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "Actualizando. La cámara se reiniciará por su cuenta y estará "
        "inalcanzable varios minutos. No le corte la corriente.",
    "Storage": "Almacenamiento",
    "Format the SD card": "Formatear la tarjeta SD",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "Formatear borra todas las grabaciones de la tarjeta. No hay vuelta "
        "atrás ni confirmación de la cámara después.",
    "<b>Erase everything on the card in %1?</b>":
        "<b>¿Borrar todo lo que hay en la tarjeta de %1?</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "Se elimina cada grabación de la tarjeta. Esto no puede deshacerse, y "
        "no se podrá recuperar nada que no se haya descargado ya.",
    "Erase": "Borrar",
    "Formatting…": "Formateando…",
    "The card has been formatted.": "La tarjeta se ha formateado.",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "El restablecimiento de fábrica no se ofrece aquí. Borra también los "
        "ajustes de red, y una cámara que ha olvidado su wifi hay que bajarla "
        "y reiniciarla a mano.",
    "Users": "Usuarios",
    "Rights": "Permisos",
    "Administrator": "Administrador",
    "Viewer": "Espectador",
    "Add…": "Añadir…",
    "Change password…": "Cambiar la contraseña…",
    "Delete": "Eliminar",
    "New user": "Usuario nuevo",
    "User name": "Nombre de usuario",
    "Password for %1": "Contraseña de %1",
    "Creating %1…": "Creando %1…",
    "Change password": "Cambiar la contraseña",
    "New password for %1": "Contraseña nueva de %1",
    "Changing the password for %1…": "Cambiando la contraseña de %1…",
    "This is the account leolink uses": "Esta es la cuenta que usa leolink",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "Cámbiela aquí y leolink se quedará fuera hasta que se introduzca la "
        "contraseña nueva también en Cámaras.",
    "Cannot delete this account": "No se puede eliminar esta cuenta",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink ha entrado como «%1». Eliminarla cortaría la conexión con "
        "esta cámara de inmediato.",
    "Delete user": "Eliminar el usuario",
    "Delete “%1” from the camera?": "¿Eliminar «%1» de la cámara?",
    "Deleting %1…": "Eliminando %1…",
    "Done.": "Hecho.",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "Son cuentas de la cámara, no de leolink. Una cuenta de espectador "
        "puede mirar pero no cambiar nada — vale la pena usarla para todo lo "
        "que solo necesite ver la imagen, para que una contraseña guardada no "
        "pueda volverse contra los ajustes de la cámara.",
    "camera is reconfiguring… %1 s": "la cámara se está reconfigurando… %1 s",
    "File format not recognised.": "Formato de archivo no reconocido.",
    "Invalid input.": "Entrada no válida.",
    "No free connections — the camera allows only a few sessions at a time.":
        "No hay conexiones libres — la cámara solo admite unas pocas sesiones "
        "a la vez.",
    "Session expired.": "La sesión ha caducado.",
    "Wrong user name or password.": "Usuario o contraseña incorrectos.",
    "Timed out.": "Se agotó el tiempo de espera.",
    "This firmware does not support that command.":
        "Este firmware no admite ese comando.",
    "Could not read the configuration.": "No se pudo leer la configuración.",
    "Could not verify the configuration.":
        "No se pudo verificar la configuración.",
    "Subsystem unavailable — typically no SD card fitted.":
        "Subsistema no disponible — normalmente por no llevar tarjeta SD.",
    "Not permitted — this model lacks the hardware.":
        "No permitido — este modelo no tiene el hardware.",
    "Account invalid, log in again.":
        "Cuenta no válida, vuelva a iniciar sesión.",
    "User name already taken.": "Ese nombre de usuario ya está cogido.",
    "Maximum number of users reached.":
        "Se ha alcanzado el número máximo de usuarios.",
    "Camera busy, try again shortly.":
        "Cámara ocupada, inténtelo de nuevo en breve.",
    "IP address conflict.": "Conflicto de direcciones IP.",
    "Configuration test failed.": "Falló la prueba de configuración.",
    "FTP login failed.": "Falló el inicio de sesión FTP.",
    "FTP could not create the directory.": "FTP no pudo crear el directorio.",
    "FTP upload failed.": "Falló la subida por FTP.",
    "FTP could not reach the server.": "FTP no pudo alcanzar el servidor.",
    "Camera reported error %1.": "La cámara informó del error %1.",
    "Cannot reach %1: %2": "No se puede alcanzar %1: %2",
    "Unexpected reply from %1.": "Respuesta inesperada de %1.",
    "Login returned no token.":
        "El inicio de sesión no devolvió ningún testigo.",
    "Snapshot failed.": "Falló la instantánea.",
    "ONVIF subscription failed.": "Falló la suscripción ONVIF.",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n nombre de la cámara · %h dirección · %t hora · %e evento · %s "
        "on/off · %f grabación · %p imagen",
    "Run a command": "Ejecutar un comando",
    "Call a webhook": "Llamar a un webhook",
    "Left empty, leolink sends a small JSON document describing the event.":
        "Si se deja vacío, leolink envía un pequeño documento JSON que "
        "describe el evento.",
    "Method": "Método",
    "Body": "Cuerpo",
    "Publish an MQTT message": "Publicar un mensaje MQTT",
    "Left empty: the same JSON document as the webhook.":
        "Si se deja vacío: el mismo documento JSON que el webhook.",
    "Keep the last message on the broker":
        "Conservar el último mensaje en el bróker",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "Un cliente que se conecte más tarde conoce el estado actual de "
        "inmediato, en vez de esperar al siguiente evento. Es lo que suele "
        "querer la domótica.",
    "Broker": "Bróker",
    "Topic": "Tema",
    "Payload": "Carga útil",
    "MQTT": "MQTT",
    "In leolink": "En leolink",
    "In the camera": "En la cámara",
    "Try again": "Reintentar",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>La cámara lo avisa:</b> decide el detector de la propia cámara y "
        "envía un evento ONVIF. Qué vigila y con qué facilidad se dispara se "
        "ajusta más abajo, en «Detección», dentro de la cámara "
        "misma.<br><br><b>leolink observa la imagen:</b> este ordenador abre "
        "una segunda conexión al flujo secundario y analiza la imagen. "
        "Funciona con cualquier cámara, incluidas las que no avisan de nada — "
        "y entonces el detector de la cámara no interviene.",
    "Choose what is watched…": "Elegir lo que se vigila…",
    "How leolink learns of motion": "Cómo se entera leolink del movimiento",
    "When leolink watches the picture": "Cuando leolink observa la imagen",
    "Detection by leolink": "Detección por leolink",
    "Recording on this computer": "Grabación en este ordenador",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "A dónde van los archivos es igual para todas las cámaras y se ajusta "
        "en Ajustes ▸ Grabaciones.",
    "Follow the defaults under Settings": "Seguir lo indicado en Ajustes",
    "Use this camera's own": "Usar lo propio de esta cámara",
    "Reactions": "Reacciones",
    "What happens on an event": "Qué ocurre con un evento",
    "Muted": "Silenciada",
    "Sound in leolink": "Sonido en leolink",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "Los mismos dos controles están en la propia tarjeta de la cámara, "
        "donde se alcanzan antes. Las cámaras empiezan silenciadas: abrir una "
        "pared de ellas no debe llenar la habitación con el sonido de todas a "
        "la vez.",
    "Playback": "Reproducción",
    "&Settings…": "&Ajustes…",
    "Reactions": "Reacciones",
    "Recordings": "Grabaciones",
    "General": "General",
    "Tint the tile red for a moment": "Teñir la tarjeta de rojo un momento",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "Para que un vistazo a una pared de cámaras baste para ver cuál fue.",
    " ms": " ms",
    "Play a sound": "Reproducir un sonido",
    "Empty: the desktop's own notification sound":
        "Vacío: el sonido de notificación del escritorio",
    "Sound to play": "Sonido a reproducir",
    "For": "Durante",
    "Sound file": "Archivo de sonido",
    "On the screen": "En la pantalla",
    "The window": "La ventana",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "Qué cámaras lanzan un evento y cómo se ajusta en cada una, en Cámaras "
        "▸ Ajustes ▸ Detección por leolink.",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "Lo que hace leolink cuando una cámara avisa de algo. Una cámara sigue "
        "esto salvo que su propio diálogo diga otra cosa — todo o nada, nunca "
        "a medias: los ajustes heredados en parte son los más difíciles de "
        "razonar cuando algo no se dispara.",
    "Recordings and stills": "Grabaciones e instantáneas",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "Las grabaciones se escriben como Matroska sin recodificar: la imagen "
        "conserva la calidad original de la cámara y el procesador se queda "
        "casi ocioso.\n\nSi una cámara graba o no es su propio ajuste, en "
        "Cámaras ▸ Ajustes ▸ Reacciones.",
    "Settings for this camera…": "Ajustes de esta cámara…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "Detección, reacciones y grabación en leolink, y el codificador, la "
        "imagen y los horarios de la propia cámara.",
}


# Plural forms — two forms, singular first.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        ", %n punto de acceso",
        ", %n puntos de acceso"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "Oído desde %n punto de acceso — una red, varios nodos. Se muestra el "
        "más fuerte.",
        "Oído desde %n puntos de acceso — una red, varios nodos. Se muestra el "
        "más fuerte."],
    "%n network(s) found, strongest first.": [
        "%n red encontrada, la más fuerte primero.",
        "%n redes encontradas, la más fuerte primero."],
    "Asking about %n command(s)…": [
        "Preguntando por %n comando…",
        "Preguntando por %n comandos…"],
    "%n area(s) blanked": [
        "%n área tapada",
        "%n áreas tapadas"],
    "%n area(s), switched off": [
        "%n área, apagada",
        "%n áreas, apagadas"],
    "%n hour(s) a week.": [
        "%n hora a la semana.",
        "%n horas a la semana."],
    "%n camera(s) live": [
        "%n cámara en directo",
        "%n cámaras en directo"],
    "Saved %n snapshot(s)": [
        "%n instantánea guardada",
        "%n instantáneas guardadas"],
    "Found %n device(s)…": [
        "%n aparato encontrado…",
        "%n aparatos encontrados…"],
    "%n recording(s) found.": [
        "%n grabación encontrada.",
        "%n grabaciones encontradas."],
    "%n network(s) found.": [
        "%n red encontrada.",
        "%n redes encontradas."],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "%n fotograma dañado en los últimos diez segundos.\n\nNormalmente es "
        "una señal wifi débil, o un bitrate demasiado bajo para la resolución. "
        "leolink repara lo que puede — esto es lo que no pudo.",
        "%n fotogramas dañados en los últimos diez segundos.\n\nNormalmente es "
        "una señal wifi débil, o un bitrate demasiado bajo para la resolución. "
        "leolink repara lo que puede — esto es lo que no pudo."],
}
