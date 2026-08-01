"""Italian. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Italian. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "Diagnostica",
    "&Diagnostics…": "&Diagnostica…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "Che cosa hanno fatto leolink e le telecamere — e un rapporto da "
        "allegare a una segnalazione di errore.",
    "Errors only": "Solo errori",
    "Warnings and errors": "Avvisi ed errori",
    "Normal activity": "Attività normale",
    "Everything": "Tutto",
    "All areas": "Tutte le aree",
    "Search…": "Cerca…",
    "Show": "Mostra",
    "Detailed logging": "Registrazione dettagliata",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "Annota ogni richiesta alla telecamera, ogni decisione del "
        "decodificatore e ogni riconnessione. Lasciala spenta nell'uso "
        "quotidiano — accendila quando qualcosa non va, riproduci il problema "
        "e invia poi il rapporto.",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "Annota ogni richiesta alla telecamera, ogni decisione del "
        "decodificatore e ogni riconnessione, in "
        "~/.local/share/leolink/leolink.log.",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "Errori e avvisi vengono sempre annotati. La registrazione dettagliata "
        "aggiunge il dialogo con la telecamera — accendila quando qualcosa non "
        "va, riproducilo e invia poi il rapporto da Aiuto ▸ Diagnostica. "
        "Password e token vengono rimossi prima di scrivere qualsiasi cosa.",
    "Open diagnostics…": "Apri la diagnostica…",
    "Open diagnostics": "Apri la diagnostica",
    "Follow new lines": "Segui le nuove righe",
    "Copy report": "Copia il rapporto",
    "System details and the log, ready to paste into a bug report.":
        "Dati di sistema e registro, pronti da incollare in una segnalazione "
        "di errore.",
    "Report copied.": "Rapporto copiato.",
    "Save report…": "Salva il rapporto…",
    "Save report": "Salva il rapporto",
    "Text files (*.txt)": "File di testo (*.txt)",
    "Could not write %1.": "Impossibile scrivere %1.",
    "Open log folder": "Apri la cartella del registro",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "Password, token di sessione e indirizzi internet vengono rimossi "
        "prima di scrivere qualsiasi cosa, quindi il rapporto può essere "
        "condiviso così com'è. Gli indirizzi della tua rete restano — di "
        "solito sono il primo indizio.",
    "%1 of %2 lines": "%1 di %2 righe",
    "Report a problem": "Segnala un problema",
    "<b>Attach a diagnostics report</b>":
        "<b>Allega un rapporto diagnostico</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "Registra che macchina hai, che cosa hanno risposto le telecamere e "
        "dove è andato storto — con password e indirizzi già rimossi. Senza di "
        "esso la maggior parte delle segnalazioni non può essere "
        "seguita.\n\nSe il problema sai provocarlo, accendi prima la "
        "registrazione dettagliata nella finestra della diagnostica, fallo "
        "succedere di nuovo e copia poi il rapporto.",
    "Go to the issue tracker": "Vai al tracciatore dei problemi",
    "Application": "Applicazione",
    "Camera API": "Interfaccia della telecamera",
    "ONVIF events": "Eventi ONVIF",
    "Event actions": "Azioni sugli eventi",
    "Baichuan": "Baichuan",
    "User interface": "Interfaccia utente",
    "Qt": "Qt",
    "strong": "forte",
    "good": "buono",
    "fair": "discreto",
    "weak": "debole",
    "unknown": "sconosciuto",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "Segnale come lo sente la telecamera: %1 su 4",
    "Encryption: %1": "Cifratura: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "Alcuni nomi sono stati sentiti da più punti di accesso — è una rete "
        "mesh. La telecamera si unisce al nome, non a un nodo preciso; è la "
        "mesh a decidere con quale parla e a passarla quando serve. Per "
        "trovare il punto migliore, sposta la telecamera e guarda sopra "
        "«Segnale Wi-Fi»: quello è il collegamento che ha davvero.",
    "What this camera supports": "Che cosa supporta questa telecamera",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "Il firmware Reolink cambia enormemente da modello a modello, e "
        "l'unico modo affidabile per sapere che cosa sa fare una telecamera è "
        "chiederglielo. Se a leolink manca qualcosa che la tua telecamera ha "
        "chiaramente, è questo elenco, in una segnalazione di errore, a "
        "rendere possibile aggiungerlo.",
    "Ask the camera": "Chiedi alla telecamera",
    "Copy the list": "Copia l'elenco",
    "Copied.": "Copiato.",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>Supportato (%1):</b> %2<br><br><b>Non supportato (%3):</b> %4",
    "Privacy": "Riservatezza",
    "Privacy areas…": "Aree private…",
    "Parts of the view the camera blanks before anything leaves it.":
        "Parti dell'inquadratura che la telecamera oscura prima che qualcosa "
        "ne esca.",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "Oscurato nella telecamera stessa, quindi la parte coperta manca in "
        "ogni visualizzatore e in ogni registrazione — la finestra di un "
        "vicino, o una scrivania che non deve finire in video.",
    "%1 — privacy areas": "%1 — aree private",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "Traccia le parti dell'inquadratura che la telecamera deve oscurare. "
        "Le annerisce prima che qualcosa lasci l'apparecchio, quindi mancano "
        "nell'immagine dal vivo, nelle registrazioni e in ogni altro programma "
        "— compresa l'app del produttore.",
    "Remove the last": "Rimuovi l'ultima",
    "Remove all": "Rimuovi tutte",
    "No picture: %1 — the areas can still be drawn.":
        "Nessuna immagine: %1 — le aree si possono disegnare lo stesso.",
    "%1 of %2 areas": "%1 di %2 aree",
    "nothing blanked": "niente oscurato",
    "Detection area…": "Area di rilevamento…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "Quali parti dell'immagine la telecamera sorveglia. Tutto ciò che sta "
        "fuori dall'area viene ignorato — una strada al bordo "
        "dell'inquadratura, un albero al vento, la porta di un vicino.",
    "%1 — the camera's detection area":
        "%1 — area di rilevamento della telecamera",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "Trascina sull'immagine per scegliere che cosa sorveglia la "
        "telecamera. Le aree scurite vengono ignorate. Questa è la griglia "
        "della telecamera stessa, %1 per %2, quindi più fitta di quella di "
        "leolink.",
    "When to watch…": "Quando sorvegliare…",
    "Hours of the week the camera raises motion events at all.":
        "Le ore della settimana in cui la telecamera segnala movimento.",
    "%1 — when to watch": "%1 — quando sorvegliare",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "Le ore in cui la telecamera segnala movimento. Fuori da quelle "
        "continua a vedere, ma non dice nulla.",
    "When to record…": "Quando registrare…",
    "Hours of the week the camera records to its card by itself.":
        "Le ore della settimana in cui la telecamera registra da sola sulla "
        "propria scheda.",
    "%1 — when to record": "%1 — quando registrare",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "Le ore in cui la telecamera registra sulla propria scheda. Serve una "
        "scheda inserita; la registrazione su questo computer si imposta in "
        "Telecamere → Eventi e ne fa a meno.",
    "Area, times and sensitivity": "Area, orari e sensibilità",
    "To": "A",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "Le telecamere ammettono una sensibilità diversa a seconda dell'ora, "
        "ed è così che si evita che i fari di notte facciano scattare tutto "
        "senza rendere la telecamera sorda di giorno.",
    "All week": "Tutta la settimana",
    "Never": "Mai",
    "Nights": "Di notte",
    "Working hours": "Orario di lavoro",
    "Weekends": "Fine settimana",
    "22:00 to 06:00, every day.": "Dalle 22:00 alle 06:00, tutti i giorni.",
    "08:00 to 17:00, Monday to Friday.":
        "Dalle 08:00 alle 17:00, dal lunedì al venerdì.",
    "Nothing is selected — this will never run.":
        "Non è selezionato nulla — così non verrà mai eseguito.",
    "Always on.": "Sempre attivo.",
    "Mobile data": "Dati mobili",
    "SIM card": "Scheda SIM",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "Serve solo se la scheda lo chiede. Tre tentativi sbagliati bloccano "
        "la scheda, che a quel punto vuole un PUK che ha solo il tuo "
        "operatore.",
    "Access point (APN)": "Punto di accesso (APN)",
    "Authentication": "Autenticazione",
    "Use mobile data": "Usa i dati mobili",
    "Modem": "Modem",
    "Card": "Scheda",
    "Type": "Tipo",
    "Signal": "Segnale",
    "IMEI": "IMEI",
    "Card number": "Numero della scheda",
    "Mobile connection": "Connessione mobile",
    "Data used": "Dati consumati",
    "Monthly limit": "Limite mensile",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>Non provato su hardware reale.</b> Nessuno fra chi lavora a "
        "leolink possiede una telecamera con modem, quindi questo è stato "
        "scritto solo a partire dal protocollo. Non può rovinare nulla — un "
        "comando che la telecamera non conosce viene semplicemente rifiutato — "
        "ma può altrettanto bene non mostrare proprio niente.\n\nSe la tua "
        "telecamera ha una SIM, «Che cosa supporta questa telecamera», sotto "
        "Manutenzione, elenca i comandi che il suo firmware ha davvero. "
        "Quell'elenco, in una segnalazione di errore, è ciò che permetterebbe "
        "di completare questa parte come si deve.",
    "Baichuan (the camera's own protocol)":
        "Baichuan (il protocollo proprio della telecamera)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP va bene per la maggior parte delle telecamere ed è la prima cosa "
        "da provare.\n\nHTTP-FLV richiede solo la porta 80, il che aiuta dove "
        "RTSP è bloccato.\n\nBaichuan è ciò che parla l'app di Reolink. È la "
        "risposta per le telecamere che tengono RTSP spento — i modelli a "
        "batteria lo fanno — e non occupa nessuna delle poche sessioni web "
        "della telecamera. Solo video: l'audio continua ad arrivare via RTSP.",
    "connecting over Baichuan…": "connessione via Baichuan…",
    "Cannot open a local port: %1": "Impossibile aprire una porta locale: %1",
    "Baichuan login failed: %1": "Accesso Baichuan non riuscito: %1",
    "The camera refused to send video: %1":
        "La telecamera ha rifiutato di inviare il video: %1",
    "The player did not connect.": "Il riproduttore non si è connesso.",
    "The camera stopped sending.": "La telecamera ha smesso di trasmettere.",
    "custom stream": "flusso personalizzato",
    "Speak through the camera": "Parla attraverso la telecamera",
    "Stop speaking": "Smetti di parlare",
    "Play through %1": "Riproduci attraverso %1",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "File audio (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Tutti i file (*)",
    "Speaking through the camera…": "Parlando attraverso la telecamera…",
    "Finished.": "Finito.",
    "Cannot reach the camera: %1": "Impossibile raggiungere la telecamera: %1",
    "The camera did not answer on the RTSP port.":
        "La telecamera non ha risposto sulla porta RTSP.",
    "ffmpeg is needed to send sound and could not be started.":
        "Per inviare audio serve ffmpeg e non è stato possibile avviarlo.",
    "The camera rejected the user name or password.":
        "La telecamera ha rifiutato il nome utente o la password.",
    "The camera refused: %1": "La telecamera ha rifiutato: %1",
    "This camera does not offer a speaker.":
        "Questa telecamera non offre un altoparlante.",
    "Sound": "Audio",
    "Send sound": "Trasmetti l'audio",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "Il microfono della telecamera. Con questo spento mette comunque una "
        "traccia audio nel flusso — del tutto muta, il che è molto più "
        "difficile da riconoscere di una traccia assente.",
    "What it recognises": "Che cosa riconosce",
    "People": "Persone",
    "Vehicles": "Veicoli",
    "Animals": "Animali",
    "Faces": "Volti",
    "Any movement": "Qualsiasi movimento",
    "Continuous": "Continuo",
    "This camera keeps a separate week for each kind of event. Which one?":
        "Questa telecamera tiene una settimana separata per ogni tipo di "
        "evento. Quale?",
    "Push notifications": "Notifiche push",
    "Folder": "Cartella",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "In questo momento la telecamera non risponde alle richieste. Lo fa "
        "quando ne ha ricevute troppe insieme; si riprende da sola dopo un "
        "attimo.",
    "Camera-side detection": "Rilevamento nella telecamera",
    "Where it looks": "Dove guarda",
    "Choose the area…": "Scegli l'area…",
    "When it reports at all": "Quando segnala qualcosa",
    "Choose the hours…": "Scegli le ore…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "Una settimana di ore: in quelle spuntate la telecamera segnala il "
        "movimento; nelle altre tace. Non ha nulla a che vedere con quanto è "
        "sensibile — quello si imposta più sotto.",
    "How readily it triggers": "Con quanta facilità scatta",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "Nell'arco della giornata la telecamera può scattare con più o meno "
        "facilità. È così che si evita che i fari di notte facciano scattare "
        "tutto senza renderla cieca di giorno. Quanti intervalli ci sono lo "
        "decide la telecamera; i loro orari e le loro sensibilità sono affar "
        "tuo.",
    "Siren": "Sirena",
    "Sound on an alarm": "Suona in caso di allarme",
    "Times": "Orari",
    "Spotlight": "Faretto",
    "On": "Acceso",
    "Draw": "Disegna",
    "Watch a rectangle": "Sorveglia un rettangolo",
    "Ignore a rectangle": "Ignora un rettangolo",
    "Drag over single cells.": "Trascina sulle singole celle.",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "Traccia un rettangolo da sorvegliare. Maiusc e trascina fa lo stesso "
        "senza cambiare strumento.",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "Traccia un rettangolo da ignorare. Ctrl e trascina fa lo stesso senza "
        "cambiare strumento.",
    "  · already added": "  · già aggiunta",
    "Processor load %1 %": "Carico del processore %1 %",
    "Encoder output %1 kbit/s": "Uscita del codificatore %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "Supportato (%1):\n%2\n\nNon supportato (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "È la telecamera a chiedere a Reolink, non questo computer — le serve "
        "quindi una via d'uscita verso internet tutta sua.",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "Una parte della telecamera non ha risposto. A seconda di che cosa è "
        "stato chiesto, significa che non c'è una scheda SD inserita, oppure "
        "che la telecamera non ha una via d'uscita verso internet.",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "Il ripristino di fabbrica non viene offerto qui. Cancella anche le "
        "impostazioni di rete, e una telecamera che ha dimenticato il suo "
        "Wi-Fi va tirata giù e raggiunta via cavo — se lo vuoi davvero, usa "
        "l'interfaccia web della telecamera stessa.",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "La telecamera non ha sessioni libere. Ne ammette solo una manciata "
        "alla volta, condivise con l'app del telefono e con la sua pagina web. "
        "Chiudile, oppure aspetta un minuto che le vecchie scadano.",
    "&File": "&File",
    "&View": "&Visualizza",
    "&Help": "&Aiuto",
    "&Cameras…": "&Telecamere…",
    "&Save snapshots…": "&Salva istantanee…",
    "&Event log…": "&Registro eventi…",
    "Open &recordings folder": "Apri la cartella delle re&gistrazioni",
    "&Quit": "&Esci",
    "&Full screen": "Schermo &intero",
    "Leave full screen": "Esci dallo schermo intero",
    "Show &menu bar": "Mostra la barra dei &menu",
    "Show &toolbar": "Mostra la barra degli s&trumenti",
    "Show status &bar": "Mostra la barra di s&tato",
    "Hide window &decoration": "Nascondi la &decorazione della finestra",
    "&Online handbook": "Manuale in &linea",
    "&Protocol notes": "Note sul &protocollo",
    "&Report a problem": "Segnala un &problema",
    "&About leolink": "&Informazioni su leolink",
    "Main": "Principale",
    "Ready": "Pronto",
    "Grid view": "Vista a griglia",
    "No cameras configured": "Nessuna telecamera configurata",
    "Nothing to capture": "Niente da catturare",
    "Save snapshots to": "Salva le istantanee in",
    "Esc leaves full screen": "Esc esce dallo schermo intero",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc esce dallo schermo intero · doppio clic su una telecamera per "
        "riempire lo schermo",
    "Double-click for the grid · Esc leaves full screen":
        "Doppio clic per la griglia · Esc esce dallo schermo intero",
    "Cannot save": "Impossibile salvare",
    "Settings could not be written to %1.":
        "Non è stato possibile scrivere le impostazioni in %1.",
    "Cannot create %1": "Impossibile creare %1",
    "Recording %1": "Registrazione di %1",
    "Saved %1": "Salvato %1",
    "Motion at %1": "Movimento presso %1",
    "Motion detected": "Movimento rilevato",
    "Could not run the motion command for %1":
        "Non è stato possibile eseguire il comando di movimento per %1",
    "leolink is still running": "leolink è ancora in esecuzione",
    "Cameras keep recording. Use the tray icon to come back.":
        "Le telecamere continuano a registrare. Usa l'icona nell'area di "
        "notifica per tornare.",
    "Show window": "Mostra la finestra",
    "Cameras…": "Telecamere…",
    "Quit": "Esci",
    "Welcome to leolink": "Benvenuto in leolink",
    "<b>No cameras are configured yet.</b>":
        "<b>Non è ancora configurata nessuna telecamera.</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "Aggiungi una telecamera con il suo indirizzo, nome utente e password. "
        "leolink parla con la telecamera direttamente sulla tua rete — non "
        "entra in gioco nessun account nel cloud.<p>Il manuale spiega che cosa "
        "fa ogni opzione.",
    "Add camera…": "Aggiungi una telecamera…",
    "Open handbook": "Apri il manuale",
    "About leolink": "Informazioni su leolink",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Un client Linux nativo per telecamere "
        "Reolink.</p><p>Parla direttamente i protocolli della telecamera: "
        "interfaccia HTTP, RTSP e ONVIF sulla rete locale, e il servizio P2P "
        "di Reolink quando vuoi raggiungere una telecamera da "
        "altrove.</p><p><a href=\"%2\">Manuale</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">Codice "
        "sorgente</a></p><p>Non collegato a Reolink né approvato da "
        "Reolink.</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "Non è ancora configurata nessuna telecamera.\n\nUsa «Telecamere…» per "
        "aggiungerne una.",
    "connecting…": "connessione…",
    "main stream": "flusso principale",
    "sub stream": "flusso secondario",
    "no host configured": "nessun indirizzo configurato",
    "cannot open stream": "impossibile aprire il flusso",
    "libmpv unavailable": "libmpv non disponibile",
    "player init failed": "avvio del riproduttore non riuscito",
    "MOTION": "MOVIMENTO",
    "Mute this camera": "Silenzia questa telecamera",
    "Unmute this camera": "Togli il silenzio a questa telecamera",
    "Volume": "Volume",
    "Camera settings": "Impostazioni della telecamera",
    "Settings": "Impostazioni",
    "Cameras": "Telecamere",
    "Layout": "Disposizione",
    "Events": "Eventi",
    "Window": "Finestra",
    "Add": "Aggiungi",
    "Remove": "Rimuovi",
    "Remove camera": "Rimuovi la telecamera",
    "Remove “%1” from the list?": "Rimuovere «%1» dall'elenco?",
    "New camera": "Nuova telecamera",
    "Name": "Nome",
    "Host": "Indirizzo",
    "User": "Utente",
    "Password": "Password",
    "Password command": "Comando per la password",
    "UID": "UID",
    "Stream": "Flusso",
    "Transport": "Trasporto",
    "192.168.1.10 or camera.lan": "192.168.1.10 oppure telecamera.lan",
    "optional, for P2P access": "facoltativo, per l'accesso P2P",
    "optional: pass show reolink/hall":
        "facoltativo: pass show reolink/ingresso",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "Se impostato, questo comando viene eseguito e la sua uscita viene "
        "usata come password. Tiene il segreto fuori dal file di "
        "configurazione.",
    "Sub stream (low bandwidth)": "Flusso secondario (poca banda)",
    "Main stream (full resolution)": "Flusso principale (risoluzione piena)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (latenza minore)",
    "Use HTTPS for the control API":
        "Usa HTTPS per l'interfaccia di controllo",
    "Show this camera": "Mostra questa telecamera",
    "Test connection": "Prova la connessione",
    "Contacting %1…": "Contatto con %1…",
    "Enter a host first.": "Indica prima un indirizzo.",
    "Incomplete camera": "Telecamera incompleta",
    "“%1” has no host address.": "«%1» non ha un indirizzo.",
    "%1 — firmware %2, %3 channel(s)": "%1 — firmware %2, %3 canali",
    "Scan network…": "Esplora la rete…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "Chiede alla rete quali telecamere ONVIF sono presenti. Manda una sola "
        "richiesta multicast; gli apparecchi che restano zitti non vengono mai "
        "contattati.",
    "Looking for cameras…": "Ricerca di telecamere…",
    "Stop": "Ferma",
    "Cameras found": "Telecamere trovate",
    "Add which one?": "Quale aggiungere?",
    "No cameras found": "Nessuna telecamera trovata",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "Nessun apparecchio ONVIF ha risposto.\n\nLe telecamere rispondono "
        "solo se ONVIF è acceso, e la richiesta non attraversa né i router né "
        "la maggior parte delle VPN. Puoi comunque aggiungere una telecamera "
        "scrivendone l'indirizzo.",
    "unnamed device": "apparecchio senza nome",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.":
        "Impossibile aprire un socket UDP per la ricerca.",
    "Grid size": "Dimensione della griglia",
    "Columns": "Colonne",
    "Rows": "Righe",
    "Column": "Colonna",
    "Row": "Riga",
    "Row span": "Righe occupate",
    "Column span": "Colonne occupate",
    "automatic": "automatico",
    "Position of the selected camera": "Posizione della telecamera scelta",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "Lascia riga e colonna su «automatico» per far riempire la griglia "
        "alle telecamere nell'ordine. Occupando più celle, una telecamera può "
        "coprirne diverse.",
    "Watch cameras for motion (ONVIF push)":
        "Sorveglia il movimento sulle telecamere (push ONVIF)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "La telecamera segnala il movimento quando accade, invece che leolink "
        "chieda una volta al secondo.",
    "Run command": "Esegui un comando",
    "notify-send \"Motion at %n\"": "notify-send \"Movimento presso %n\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "Viene eseguito quando questa telecamera segnala movimento.\n%n nome "
        "della telecamera · %h indirizzo · %t marca temporale · %f file della "
        "registrazione",
    "Record while motion lasts": "Registra finché dura il movimento",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "Registra su questo computer a partire dal flusso dal vivo, quindi "
        "funziona anche quando la telecamera non ha una scheda SD.",
    "Keep recording after": "Continua a registrare per altri",
    " s": " s",
    "Selected camera": "Telecamera scelta",
    "All cameras": "Tutte le telecamere",
    "Recordings folder": "Cartella delle registrazioni",
    "Browse…": "Sfoglia…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "Le registrazioni vengono scritte come Matroska senza ricodifica: "
        "l'immagine mantiene la qualità originale della telecamera e il "
        "processore resta quasi in riposo.",
    "Appearance": "Aspetto",
    "Show menu bar": "Mostra la barra dei menu",
    "Show toolbar": "Mostra la barra degli strumenti",
    "Show status bar": "Mostra la barra di stato",
    "Hide window decoration": "Nascondi la decorazione della finestra",
    "Ctrl+M toggles this at any time.":
        "Ctrl+M lo cambia in qualsiasi momento.",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "Per gli schermi a parete. Ctrl+Maiusc+D lo cambia.",
    "Notification area": "Area di notifica",
    "Show an icon in the notification area":
        "Mostra un'icona nell'area di notifica",
    "Closing the window hides it instead of quitting":
        "Chiudere la finestra la nasconde invece di uscire",
    "Minimising hides the window to the tray":
        "Ridurre a icona nasconde la finestra nell'area di notifica",
    "On motion": "In caso di movimento",
    "Bring the window up when motion is detected":
        "Porta in primo piano la finestra quando viene rilevato movimento",
    "Come back as": "Torna come",
    "Previous size": "Dimensione precedente",
    "Full screen": "Schermo intero",
    "Language": "Lingua",
    "System language": "Lingua di sistema",
    "Takes effect after restarting leolink.":
        "Ha effetto al riavvio di leolink.",
    "Menu bar hidden": "Barra dei menu nascosta",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "Con la barra dei menu e quella degli strumenti entrambe nascoste, "
        "premi Ctrl+M per riavere il menu.",
    "Event log": "Registro eventi",
    "Camera:": "Telecamera:",
    "Show:": "Mostra:",
    "All events": "Tutti gli eventi",
    "Motion": "Movimento",
    "With recording": "Con registrazione",
    "Refresh": "Aggiorna",
    "When": "Quando",
    "Camera": "Telecamera",
    "Event": "Evento",
    "Media": "Media",
    "video": "video",
    "image": "immagine",
    " + image": " + immagine",
    "no preview": "nessuna anteprima",
    "recording only": "solo registrazione",
    "no events recorded yet": "nessun evento registrato finora",
    "Recording: %1%2": "Registrazione: %1%2",
    " (file missing)": " (file mancante)",
    "Image: %1": "Immagine: %1",
    "Open recording": "Apri la registrazione",
    "Open image": "Apri l'immagine",
    "Nothing to open": "Niente da aprire",
    "The file for this event is no longer there.":
        "Il file di questo evento non c'è più.",
    "Clear log…": "Svuota il registro…",
    "Clear event log": "Svuota il registro eventi",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "Cancellare tutta la cronologia degli eventi?\n\nI video e le immagini "
        "registrati restano sul disco — viene svuotato solo il registro.",
    "Command": "Comando",
    "could not be started": "non è stato possibile avviarlo",
    "Webhook": "Webhook",
    "invalid URL": "indirizzo non valido",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 non riuscito: %2",
    "Event log…": "Registro eventi…",
    "MQTT broker or topic not set.": "Broker o topic MQTT non impostati.",
    "MQTT broker did not respond.": "Il broker MQTT non ha risposto.",
    "MQTT: %1": "MQTT: %1",
    "MQTT: unexpected reply from the broker.":
        "MQTT: risposta inattesa dal broker.",
    "MQTT refused the connection: %1": "MQTT ha rifiutato la connessione: %1",
    "Video": "Video",
    "Decoding": "Decodifica",
    "Hardware, fastest": "Hardware, la più veloce",
    "Hardware, with frame copy": "Hardware, con copia dei fotogrammi",
    "Software only": "Solo software",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "La decodifica hardware tiene libero il processore ed è la scelta "
        "giusta per le risoluzioni del flusso principale.\n\nSe l'immagine "
        "mostra blocchi verdi o si blocca, scegli «con copia dei fotogrammi»: "
        "decodifica ancora sulla GPU ma copia ogni fotogramma nella memoria "
        "centrale, cosa di cui alcuni driver hanno bisogno quando il video sta "
        "dentro un'altra finestra.",
    "Favour low latency over smoothness":
        "Preferisci la bassa latenza alla fluidità",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "Tiene il buffer al minimo. Spegnilo se un flusso ad alto bitrate "
        "scatta su una rete carica.",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "Trascina la striscia sotto una telecamera per spostare la finestra. "
        "Ctrl+Maiusc+D riporta la cornice, Ctrl+M il menu.",
    "%1 — camera settings": "%1 — impostazioni della telecamera",
    "Reading settings from %1…": "Lettura delle impostazioni da %1…",
    "Apply to camera": "Applica alla telecamera",
    "Main stream": "Flusso principale",
    "Sub stream": "Flusso secondario",
    "Resolution": "Risoluzione",
    "Frame rate": "Fotogrammi al secondo",
    "Bit rate (kbit/s)": "Bitrate (kbit/s)",
    "H.264 profile": "Profilo H.264",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "Più alto significa immagine migliore e più traffico di rete. La "
        "telecamera offre solo i valori che riesce davvero a reggere.",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "Questo cambia la telecamera stessa, quindi ogni programma ne vede il "
        "risultato. Le scelte vengono dalla telecamera e cambiano da modello a "
        "modello.",
    "Picture": "Immagine",
    "Brightness": "Luminosità",
    "Contrast": "Contrasto",
    "Saturation": "Saturazione",
    "Sharpness": "Nitidezza",
    "Hue": "Tonalità",
    "Ready.": "Pronto.",
    "Writing to the camera…": "Scrittura sulla telecamera…",
    "Nothing to write.": "Niente da scrivere.",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "Salvato. Cambiare il codificatore riavvia il flusso, quindi "
        "l'immagine può sparire per un attimo.",
    "&Record all cameras": "&Registra tutte le telecamere",
    "Record this camera": "Registra questa telecamera",
    "Stop recording": "Ferma la registrazione",
    "Recording all cameras": "Registrazione di tutte le telecamere",
    "Recording stopped": "Registrazione fermata",
    "Recording started": "Registrazione avviata",
    "Could not start recording %1":
        "Non è stato possibile avviare la registrazione di %1",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "ffmpeg non è installato, quindi la registrazione non è disponibile.",
    "No stream address for %1.": "Nessun indirizzo di flusso per %1.",
    "Recording failed: %1": "Registrazione non riuscita: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "La registrazione non ha prodotto dati (ffmpeg è uscito con %1).",
    "Could not start ffmpeg.": "Non è stato possibile avviare ffmpeg.",
    "Custom URL": "Indirizzo personalizzato",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "Qualsiasi indirizzo che libmpv sappia aprire. Usalo per telecamere di "
        "altre marche, un flusso da NVR o un file locale.",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "ffmpeg non è installato, quindi il rilevamento del movimento non è "
        "disponibile.",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "ffmpeg non è installato, quindi il rilevamento dei suoni non è "
        "disponibile.",
    "Motion detection stopped: %1": "Rilevamento del movimento fermato: %1",
    "Sound detection stopped: %1": "Rilevamento dei suoni fermato: %1",
    "Could not start ffmpeg for motion detection.":
        "Non è stato possibile avviare ffmpeg per il rilevamento del "
        "movimento.",
    "Could not start ffmpeg for sound detection.":
        "Non è stato possibile avviare ffmpeg per il rilevamento dei suoni.",
    "Sound detected": "Suono rilevato",
    "%1 at %2": "%1 presso %2",
    "Detection": "Rilevamento",
    "Motion comes from": "Il movimento lo segnala",
    "The camera reports it (ONVIF)": "La telecamera stessa (ONVIF)",
    "leolink watches the picture": "leolink guardando l'immagine",
    "Either of the two": "Uno dei due",
    "Do not watch": "Non sorvegliare",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "Le telecamere che segnalano il movimento da sole non costano nulla da "
        "sorvegliare.\n\nAnalizzare qui l'immagine funziona con qualsiasi "
        "telecamera, comprese quelle che non segnalano niente, ma per ognuna "
        "apre una seconda connessione al flusso secondario.",
    "Motion zones…": "Zone di movimento…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "Scegli quali parti dell'immagine vengono sorvegliate. Vale solo "
        "quando è leolink ad analizzare l'immagine.",
    "Sensitivity": "Sensibilità",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "Quanto deve cambiare un punto dell'immagine perché conti. Più alto "
        "nota di più, ombre e pioggia comprese.",
    "Minimum area": "Area minima",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "Quanta parte dell'area sorvegliata deve cambiare perché conti come "
        "movimento. 20 ‰ è il due per cento dell'immagine — all'incirca una "
        "persona a media distanza.",
    "Raise an event on sound": "Genera un evento sul suono",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "Richiede una telecamera con microfono. Apre un'altra connessione al "
        "flusso secondario.",
    "Sound above": "Suono sopra",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB è quasi silenzio, -20 dB una voce alzata lì vicino.",
    "Hold for": "Mantieni per",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "Tiene su l'evento dopo che il rumore è cessato, così un abbaio non "
        "viene segnalato quattro volte.",
    "%1 — motion zones": "%1 — zone di movimento",
    "no picture available": "nessuna immagine disponibile",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "Trascina sull'immagine per scegliere che cosa viene sorvegliato. Le "
        "aree scurite vengono ignorate — comodo per una strada al bordo "
        "dell'inquadratura, un albero che si muove al vento o il portone di un "
        "vicino.",
    "Watch all": "Sorveglia tutto",
    "Ignore all": "Ignora tutto",
    "Invert": "Inverti",
    "Fetching a picture from %1…": "Recupero di un'immagine da %1…",
    "No picture: %1 — the zones can still be set.":
        "Nessuna immagine: %1 — le zone si possono impostare lo stesso.",
    "Recordings on the &camera…": "Registrazioni sulla &telecamera…",
    "Browse what is stored on the camera's own SD card.":
        "Sfoglia quello che è conservato sulla scheda SD della telecamera.",
    "Which camera": "Quale telecamera",
    "Show recordings from": "Mostra le registrazioni di",
    "%1 — recordings on the camera": "%1 — registrazioni sulla telecamera",
    "Search": "Cerca",
    "From": "Dal",
    "to": "al",
    "Start": "Inizio",
    "Length": "Durata",
    "Size": "Dimensione",
    "File": "File",
    "Play": "Riproduci",
    "Download…": "Scarica…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "Scegli un periodo e premi Cerca. Le registrazioni esistono solo se la "
        "telecamera ha una scheda SD inserita.",
    "Asking %1…": "Interrogazione di %1…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "In quel periodo non è stato trovato nulla. O non è stato registrato "
        "niente, oppure la telecamera non ha una scheda SD.",
    "No session with the camera — search first.":
        "Nessuna sessione con la telecamera — cerca prima.",
    "No player": "Nessun riproduttore",
    "mpv was not found. The recording is at:\n\n%1":
        "mpv non è stato trovato. La registrazione si trova in:\n\n%1",
    "Save recording": "Salva la registrazione",
    "Cannot write to %1.": "Impossibile scrivere in %1.",
    "Saved to %1": "Salvato in %1",
    "Download failed: %1": "Scaricamento non riuscito: %1",
    "Maintenance": "Manutenzione",
    "Restart": "Riavvia",
    "Restart the camera": "Riavvia la telecamera",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "La telecamera esce dalla rete per un minuto circa e torna da sola. Le "
        "registrazioni sulla sua scheda SD non vengono toccate e le "
        "impostazioni restano.\n\nVale la pena provarci quando una telecamera "
        "ha smesso di rispondere, rifiuta nuove connessioni o si è scombinata "
        "dopo un aggiornamento del firmware.",
    "<b>Restart %1?</b>": "<b>Riavviare %1?</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "L'immagine sparirà per circa un minuto. Qualsiasi cosa si stia "
        "registrando ora si fermerà.",
    "Asking %1 to restart…": "Richiesta di riavvio a %1…",
    "Restarting. The camera will be back in about a minute.":
        "Riavvio in corso. La telecamera tornerà fra circa un minuto.",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "Il ripristino di fabbrica e la formattazione della scheda SD non "
        "vengono offerti qui. Sono entrambi irreversibili e conviene farli "
        "nell'interfaccia web della telecamera, dove gli avvisi sono quelli "
        "del produttore.",
    "Network": "Rete",
    "Connection": "Connessione",
    "Reading…": "Lettura…",
    "Wi-Fi signal": "Segnale Wi-Fi",
    "Wi-Fi signal unknown": "Segnale Wi-Fi sconosciuto",
    "Wi-Fi signal %1 of %2": "Segnale Wi-Fi %1 di %2",
    "Link": "Collegamento",
    "Address": "Indirizzo",
    "Netmask": "Maschera di rete",
    "Gateway": "Gateway",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "Nome della rete",
    "Ports": "Porte",
    "The camera reported nothing.": "La telecamera non ha segnalato nulla.",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "Mostrato a titolo informativo. Indirizzi, credenziali Wi-Fi e porte "
        "si cambiano nell'interfaccia web della telecamera — un errore qui "
        "metterebbe la telecamera fuori portata.",
    "Hardware, with frame copy (recommended)":
        "Hardware, con copia dei fotogrammi (consigliato)",
    "Hardware, zero copy (fastest)": "Hardware, senza copia (la più veloce)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "Tutte e tre decodificano sulla scheda grafica dove possono.\n\n«Con "
        "copia dei fotogrammi» fa passare ogni fotogramma dalla memoria "
        "centrale. È qualche punto percentuale più lenta ed è la scelta "
        "predefinita, perché la via senza copia produce blocchi verdi o "
        "un'immagine congelata su parecchi driver quando il video sta dentro "
        "un'altra finestra.\n\nProva «senza copia» se vuoi quell'ultimo pugno "
        "di percento; torna indietro se l'immagine si rompe.",
    "This camera does not offer these settings.":
        "Questa telecamera non offre queste impostazioni.",
    "Exposure and orientation": "Esposizione e orientamento",
    "Day / night": "Giorno / notte",
    "Automatic": "Automatico",
    "Always colour": "Sempre a colori",
    "Always black and white": "Sempre in bianco e nero",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "«Auto» passa all'infrarosso man mano che cala la luce. Forzare il "
        "colore di notte dà un'immagine troppo scura per servire; forzare il "
        "bianco e nero di giorno perde il colore per niente.",
    "Anti-flicker": "Anti-sfarfallio",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "Falla combaciare con la frequenza della tua rete elettrica — 50 Hz in "
        "Europa — altrimenti l'illuminazione interna batterà contro "
        "l'otturatore e l'immagine pulserà.",
    "Exposure": "Esposizione",
    "Mirror": "Specchio",
    "Flip": "Capovolgi",
    "For a camera mounted upside down.":
        "Per una telecamera montata sottosopra.",
    "Backlight compensation": "Compensazione del controluce",
    "Helps when the subject stands against a bright window or sky.":
        "Aiuta quando il soggetto sta davanti a una finestra o a un cielo "
        "luminosi.",
    "Noise reduction": "Riduzione del rumore",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "Pulisce un'immagine scura, al prezzo di sbavare tutto ciò che si "
        "muove.",
    "Rotation": "Rotazione",
    "Dynamic contrast": "Contrasto dinamico",
    "Infrared illumination": "Illuminazione a infrarossi",
    "Infrared lamps": "Lampade a infrarossi",
    "Always on": "Sempre accese",
    "Always off": "Sempre spente",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "«Auto» le accende quando fa buio. Spegnile se la telecamera guarda "
        "attraverso un vetro — il riflesso la acceca.",
    "Overlay": "Sovrimpressione",
    "On-screen text": "Testo sull'immagine",
    "Background": "Sfondo",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "Disegna un riquadro dietro al testo perché resti leggibile su una "
        "scena chiara.",
    "Watermark": "Filigrana",
    "Embeds a mark in the recording itself.":
        "Incorpora un marchio nella registrazione stessa.",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "La telecamera lo imprime nell'immagine, quindi compare in ogni "
        "registrazione e in ogni programma — non solo qui.",
    "Motion detection in the camera":
        "Rilevamento del movimento nella telecamera",
    "Switched on": "Acceso",
    "Higher notices more, including shadows and headlights.":
        "Più alto nota di più, ombre e fari compresi.",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "Questo è il rilevamento della telecamera stessa, quello che segnala "
        "via ONVIF. L'analisi dell'immagine fatta da leolink si imposta a "
        "parte, in Telecamere → Eventi.",
    "Recording": "Registrazione",
    "Recording to the camera's card":
        "Registrazione sulla scheda della telecamera",
    "Overwrite when full": "Sovrascrivi quando è piena",
    "Off means recording simply stops once the card fills up.":
        "Spento significa che la registrazione semplicemente si ferma quando "
        "la scheda si riempie.",
    "Record before the event": "Registra prima dell'evento",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "Conserva i secondi che precedono uno scatto, di solito la parte "
        "interessante.",
    "File length": "Durata dei file",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "Questo regola ciò che la telecamera scrive sulla propria scheda SD. "
        "La registrazione su questo computer si imposta in Telecamere → Eventi "
        "e non ha bisogno di scheda.",
    "Alerts": "Avvisi",
    "E-mail": "E-mail",
    "FTP": "FTP",
    "FTP upload": "Caricamento FTP",
    "Push notification": "Notifica push",
    "Server": "Server",
    "Port": "Porta",
    "Send to": "Invia a",
    "Encrypted": "Cifrato",
    "Not more often than": "Non più spesso di",
    "Attach": "Allega",
    "Directory": "Directory",
    "Mode": "Modo",
    "Schedule": "Programmazione",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "Li manda la telecamera stessa, quindi continuano a funzionare quando "
        "questo computer è spento. Le reazioni di leolink — comandi, webhook, "
        "MQTT — stanno in Telecamere → Eventi.",
    "Time": "Ora",
    "Time server": "Server dell'ora",
    "Synchronise the clock": "Sincronizza l'orologio",
    "Every": "Ogni",
    "Scheduled restart": "Riavvio programmato",
    "Restart regularly": "Riavvia con regolarità",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "Alcune telecamere diventano inaffidabili dopo settimane di "
        "accensione; un riavvio settimanale è una cura a buon mercato.",
    "Day": "Giorno",
    "Hour": "Ora",
    "Minute": "Minuto",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "Una telecamera con l'orologio sbagliato data male le sue "
        "registrazioni, il che pesa più di quanto sembri quando ne devi "
        "ritrovare una.",
    "Wi-Fi": "Wi-Fi",
    "Scan": "Esplora",
    "Join network": "Unisciti alla rete",
    "scanning…": "esplorazione…",
    "The camera is scanning for networks…": "La telecamera sta cercando reti…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "È la telecamera a esplorare, non questo computer — conta quello che "
        "raggiunge lei. La password viene provata prima di essere salvata, "
        "così un errore di battitura viene rifiutato invece di lasciare la "
        "telecamera senza alcuna rete.",
    "Change the camera's network": "Cambia la rete della telecamera",
    "<b>Move %1 to “%2”?</b>": "<b>Spostare %1 su «%2»?</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "La telecamera prova prima la password e rifiuta se è sbagliata, "
        "quindi la cosa è meno rischiosa di quanto sembri.\n\nSparirà comunque "
        "per un minuto mentre si riconnette, e se la rete nuova le assegna un "
        "altro indirizzo dovrai aggiornarlo qui dopo.",
    "Join": "Unisciti",
    "Testing the password on the camera…":
        "Prova della password sulla telecamera…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "Salvato. La telecamera si sta riconnettendo e tornerà a breve.",
    "The camera could not join that network: %1":
        "La telecamera non è riuscita a unirsi a quella rete: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "Indirizzi e porte si leggono qui ma si cambiano nell'interfaccia web "
        "della telecamera. Sbagliarne uno toglie del tutto la telecamera dalla "
        "rete, e l'unica via di ritorno è il pin di ripristino — lì una "
        "finestra di avviso non sostituisce lo schermo del produttore.",
    "%1 fps": "%1 fps",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)": "flusso perso — riconnessione (%1)",
    "Hardware (recommended)": "Hardware (consigliato)",
    "Hardware, driver's choice": "Hardware, a scelta del driver",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "«Consigliato» nomina il decodificatore esplicitamente perché "
        "decodifica e disegno restino sulla stessa interfaccia grafica. "
        "Lasciato a sé, mpv può decodificare con una e disegnare con l'altra, "
        "il che su alcune schede rende l'immagine di un verde pieno.\n\nSe "
        "l'immagine è rotta, prova le altre a turno. «Solo software» funziona "
        "sempre ma costa un intero core del processore a piena risoluzione.",
    "Wired": "Via cavo",
    "%1 — strength unknown": "%1 — intensità sconosciuta",
    "%1 — %2 of %3": "%1 — %2 di %3",
    "WEAK SIGNAL": "SEGNALE DEBOLE",
    "BAD STREAM": "FLUSSO DIFETTOSO",
    "stream ended (%1) — reconnecting":
        "flusso terminato (%1) — riconnessione",
    "Open the &log file": "Apri il file di &registro",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "Che cosa hanno riferito i riproduttori e le telecamere. Vale la pena "
        "allegarlo a una segnalazione di errore.",
    "Nothing logged yet.": "Non è ancora stato registrato nulla.",
    "Bit rate looks too low": "Il bitrate sembra troppo basso",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%1 kbit/s è pochissimo per %2.</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "Con questo rapporto il codificatore della telecamera tende a emettere "
        "fotogrammi danneggiati, che arrivano come blocchi verdi o come "
        "un'immagine che si congela — non è un guasto di rete, e non è una "
        "cosa che leolink possa riparare del tutto.\n\nO alzi il bitrate, o "
        "abbassi la risoluzione.",
    "Apply anyway": "Applica lo stesso",
    "camera is reconfiguring…": "la telecamera si sta riconfigurando…",
    "Send a test e-mail": "Manda un'e-mail di prova",
    "Test the FTP upload": "Prova il caricamento FTP",
    "Asking the camera to send a test e-mail…":
        "Richiesta alla telecamera di mandare un'e-mail di prova…",
    "Asking the camera to try the FTP server…":
        "Richiesta alla telecamera di provare il server FTP…",
    "%1: the camera reported success.":
        "%1: la telecamera ha riferito che è andata a buon fine.",
    "Condition": "Stato",
    "Processor load %1%": "Carico del processore %1 %",
    "Encoder load %1%": "Carico del codificatore %1 %",
    "Network throughput %1 kbit/s": "Traffico di rete %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "La telecamera è al limite. Abbassare la risoluzione o i fotogrammi al "
        "secondo la stabilizzerà.",
    "Firmware": "Firmware",
    "Not checked.": "Non controllato.",
    "Check for updates": "Cerca aggiornamenti",
    "Asking Reolink…": "Richiesta a Reolink…",
    "Install update": "Installa l'aggiornamento",
    "Update available: %1": "Aggiornamento disponibile: %1",
    "The firmware is up to date.": "Il firmware è aggiornato.",
    "Install firmware": "Installa il firmware",
    "<b>Update the firmware on %1?</b>":
        "<b>Aggiornare il firmware di %1?</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "La telecamera scarica l'aggiornamento da sola e si riavvia. Sarà "
        "irraggiungibile per parecchi minuti.\n\nNon toglierle corrente "
        "durante l'aggiornamento — una telecamera interrotta a metà scrittura "
        "di solito va rimandata indietro.",
    "Install": "Installa",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "Aggiornamento in corso. La telecamera si riavvierà da sola e sarà "
        "irraggiungibile per parecchi minuti. Non toglierle corrente.",
    "Storage": "Archiviazione",
    "Format the SD card": "Formatta la scheda SD",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "La formattazione cancella ogni registrazione sulla scheda. Non c'è "
        "modo di tornare indietro né una conferma dalla telecamera dopo.",
    "<b>Erase everything on the card in %1?</b>":
        "<b>Cancellare tutto quello che c'è sulla scheda di %1?</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "Ogni registrazione sulla scheda viene eliminata. Non si può "
        "annullare, e nulla che non sia già stato scaricato potrà essere "
        "recuperato.",
    "Erase": "Cancella",
    "Formatting…": "Formattazione…",
    "The card has been formatted.": "La scheda è stata formattata.",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "Il ripristino di fabbrica non viene offerto qui. Cancella anche le "
        "impostazioni di rete, e una telecamera che ha dimenticato il suo "
        "Wi-Fi va tirata giù e ripristinata a mano.",
    "Users": "Utenti",
    "Rights": "Diritti",
    "Administrator": "Amministratore",
    "Viewer": "Spettatore",
    "Add…": "Aggiungi…",
    "Change password…": "Cambia la password…",
    "Delete": "Elimina",
    "New user": "Nuovo utente",
    "User name": "Nome utente",
    "Password for %1": "Password di %1",
    "Creating %1…": "Creazione di %1…",
    "Change password": "Cambia la password",
    "New password for %1": "Nuova password di %1",
    "Changing the password for %1…": "Cambio della password di %1…",
    "This is the account leolink uses": "Questo è l'account che usa leolink",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "Cambiala qui e leolink resterà fuori finché la nuova password non "
        "sarà inserita anche in Telecamere.",
    "Cannot delete this account": "Impossibile eliminare questo account",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink è collegato come «%1». Eliminarlo taglierebbe subito la "
        "connessione con questa telecamera.",
    "Delete user": "Elimina l'utente",
    "Delete “%1” from the camera?": "Eliminare «%1» dalla telecamera?",
    "Deleting %1…": "Eliminazione di %1…",
    "Done.": "Fatto.",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "Sono account sulla telecamera, non in leolink. Un account spettatore "
        "può guardare ma non cambiare nulla — conviene usarlo per tutto ciò "
        "che deve solo vedere l'immagine, così una password conservata non può "
        "essere rivolta contro le impostazioni della telecamera.",
    "camera is reconfiguring… %1 s":
        "la telecamera si sta riconfigurando… %1 s",
    "File format not recognised.": "Formato del file non riconosciuto.",
    "Invalid input.": "Immissione non valida.",
    "No free connections — the camera allows only a few sessions at a time.":
        "Nessuna connessione libera — la telecamera ammette solo poche "
        "sessioni alla volta.",
    "Session expired.": "Sessione scaduta.",
    "Wrong user name or password.": "Nome utente o password errati.",
    "Timed out.": "Tempo scaduto.",
    "This firmware does not support that command.":
        "Questo firmware non supporta quel comando.",
    "Could not read the configuration.":
        "Non è stato possibile leggere la configurazione.",
    "Could not verify the configuration.":
        "Non è stato possibile verificare la configurazione.",
    "Subsystem unavailable — typically no SD card fitted.":
        "Sottosistema non disponibile — di solito perché non c'è una scheda "
        "SD.",
    "Not permitted — this model lacks the hardware.":
        "Non consentito — questo modello non ha l'hardware.",
    "Account invalid, log in again.": "Account non valido, accedi di nuovo.",
    "User name already taken.": "Nome utente già in uso.",
    "Maximum number of users reached.":
        "Raggiunto il numero massimo di utenti.",
    "Camera busy, try again shortly.":
        "Telecamera occupata, riprova fra poco.",
    "IP address conflict.": "Conflitto di indirizzi IP.",
    "Configuration test failed.": "Prova della configurazione non riuscita.",
    "FTP login failed.": "Accesso FTP non riuscito.",
    "FTP could not create the directory.":
        "FTP non è riuscito a creare la directory.",
    "FTP upload failed.": "Caricamento FTP non riuscito.",
    "FTP could not reach the server.":
        "FTP non è riuscito a raggiungere il server.",
    "Camera reported error %1.": "La telecamera ha segnalato l'errore %1.",
    "Cannot reach %1: %2": "Impossibile raggiungere %1: %2",
    "Unexpected reply from %1.": "Risposta inattesa da %1.",
    "Login returned no token.": "L'accesso non ha restituito alcun token.",
    "Snapshot failed.": "Istantanea non riuscita.",
    "ONVIF subscription failed.": "Sottoscrizione ONVIF non riuscita.",

    # ── the settings, split by reach ──
    "%n camera name · %h host · %t time · %e event · %s on/off · %f recording "
    "· %p image":
        "%n nome della telecamera · %h indirizzo · %t ora · %e evento · %s "
        "on/off · %f registrazione · %p immagine",
    "Run a command": "Esegui un comando",
    "Call a webhook": "Chiama un webhook",
    "Left empty, leolink sends a small JSON document describing the event.":
        "Lasciato vuoto, leolink manda un piccolo documento JSON che descrive "
        "l'evento.",
    "Method": "Metodo",
    "Body": "Corpo",
    "Publish an MQTT message": "Pubblica un messaggio MQTT",
    "Left empty: the same JSON document as the webhook.":
        "Lasciato vuoto: lo stesso documento JSON del webhook.",
    "Keep the last message on the broker":
        "Conserva l'ultimo messaggio sul broker",
    "A client connecting later is told the current state straight away, "
    "instead of waiting for the next event. This is what home automation "
    "usually wants.":
        "Un client che si collega più tardi conosce subito lo stato attuale, "
        "invece di aspettare l'evento successivo. È ciò che di solito serve "
        "alla domotica.",
    "Broker": "Broker",
    "Topic": "Argomento",
    "Payload": "Payload",
    "MQTT": "MQTT",
    "In leolink": "In leolink",
    "In the camera": "Nella telecamera",
    "Try again": "Riprova",
    "<b>The camera reports it:</b> the camera's own detector decides, and "
    "sends an ONVIF event. What it watches and how readily it triggers is set "
    "under “Detection” further down, in the camera itself.<br><br><b>leolink "
    "watches the picture:</b> this computer opens a second sub-stream "
    "connection and analyses the picture. Works with any camera, including "
    "ones that report nothing — and the camera's own detector then plays no "
    "part.":
        "<b>La telecamera lo segnala:</b> decide il rilevatore della "
        "telecamera stessa, che manda un evento ONVIF. Che cosa sorveglia e "
        "con quanta facilità scatta si imposta più sotto, in «Rilevamento», "
        "nella telecamera stessa.<br><br><b>leolink guarda l'immagine:</b> "
        "questo computer apre una seconda connessione al flusso secondario e "
        "analizza l'immagine. Funziona con qualsiasi telecamera, comprese "
        "quelle che non segnalano nulla — e il rilevatore della telecamera non "
        "c'entra più nulla.",
    "Choose what is watched…": "Scegli che cosa viene sorvegliato…",
    "How leolink learns of motion":
        "Come leolink viene a sapere del movimento",
    "When leolink watches the picture": "Quando leolink guarda l'immagine",
    "Detection by leolink": "Rilevamento da parte di leolink",
    "Recording on this computer": "Registrazione su questo computer",
    "Where the files go is the same for every camera and is set under Settings "
    "▸ Recordings.":
        "Dove finiscono i file vale per tutte le telecamere e si imposta in "
        "Impostazioni ▸ Registrazioni.",
    "Follow the defaults under Settings": "Segui le impostazioni predefinite",
    "Use this camera's own": "Usa quelle di questa telecamera",
    "Reactions": "Reazioni",
    "What happens on an event": "Che cosa succede a un evento",
    "Muted": "Silenziata",
    "Sound in leolink": "Audio in leolink",
    "The same two controls sit on the camera's own tile, where they are "
    "quicker to reach. Cameras start muted: opening a wall of them should not "
    "fill the room with sound from every one at once.":
        "Gli stessi due comandi stanno sul riquadro della telecamera, dove si "
        "raggiungono prima. Le telecamere partono silenziate: aprire una "
        "parete di telecamere non deve riempire la stanza dell'audio di "
        "ognuna.",
    "Playback": "Riproduzione",
    "&Settings…": "&Impostazioni…",
    "Reactions": "Reazioni",
    "Recordings": "Registrazioni",
    "General": "Generale",
    "Tint the tile red for a moment":
        "Tingi il riquadro di rosso per un attimo",
    "So a glance at a wall of cameras is enough to see which one it was.":
        "Così un'occhiata a una parete di telecamere basta a vedere quale è "
        "stata.",
    " ms": " ms",
    "Play a sound": "Riproduci un suono",
    "Empty: the desktop's own notification sound":
        "Vuoto: il suono di notifica del desktop",
    "Sound to play": "Suono da riprodurre",
    "For": "Per",
    "Sound file": "File audio",
    "On the screen": "Sullo schermo",
    "The window": "La finestra",
    "Which cameras raise an event at all, and how, is set for each camera "
    "under Cameras ▸ Settings ▸ Detection by leolink.":
        "Quali telecamere generano un evento, e come, si imposta per ciascuna "
        "in Telecamere ▸ Impostazioni ▸ Rilevamento da parte di leolink.",
    "What leolink does when a camera reports something. A camera follows these "
    "unless its own dialog says otherwise — all of them or none, never half: "
    "settings that are partly inherited are the hardest kind to reason about "
    "when something does not fire.":
        "Che cosa fa leolink quando una telecamera segnala qualcosa. Una "
        "telecamera segue queste impostazioni a meno che il suo dialogo non "
        "dica altro — tutte o nessuna, mai a metà: le impostazioni ereditate "
        "in parte sono le più difficili da districare quando qualcosa non "
        "scatta.",
    "Recordings and stills": "Registrazioni e istantanee",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the processor stays nearly "
    "idle.\n\nWhether a camera records at all is its own setting, under "
    "Cameras ▸ Settings ▸ Reactions.":
        "Le registrazioni vengono scritte come Matroska senza ricodifica: "
        "l'immagine mantiene la qualità originale della telecamera e il "
        "processore resta quasi in riposo.\n\nSe una telecamera registri o no "
        "è una sua impostazione, in Telecamere ▸ Impostazioni ▸ Reazioni.",
    "Settings for this camera…": "Impostazioni di questa telecamera…",
    "Detection, reactions and recording in leolink, and the camera's own "
    "encoder, picture and schedules.":
        "Rilevamento, reazioni e registrazione in leolink, e codificatore, "
        "immagine e programmazioni della telecamera stessa.",
}


# Plural forms — two forms, singular first.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        ", %n punto di accesso",
        ", %n punti di accesso"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "Sentito da %n punto di accesso — una rete, più nodi. Viene mostrato "
        "il più forte.",
        "Sentito da %n punti di accesso — una rete, più nodi. Viene mostrato "
        "il più forte."],
    "%n network(s) found, strongest first.": [
        "%n rete trovata, la più forte per prima.",
        "%n reti trovate, la più forte per prima."],
    "Asking about %n command(s)…": [
        "Richiesta di %n comando…",
        "Richiesta di %n comandi…"],
    "%n area(s) blanked": [
        "%n area oscurata",
        "%n aree oscurate"],
    "%n area(s), switched off": [
        "%n area, disattivata",
        "%n aree, disattivate"],
    "%n hour(s) a week.": [
        "%n ora alla settimana.",
        "%n ore alla settimana."],
    "%n camera(s) live": [
        "%n telecamera dal vivo",
        "%n telecamere dal vivo"],
    "Saved %n snapshot(s)": [
        "%n istantanea salvata",
        "%n istantanee salvate"],
    "Found %n device(s)…": [
        "%n apparecchio trovato…",
        "%n apparecchi trovati…"],
    "%n recording(s) found.": [
        "%n registrazione trovata.",
        "%n registrazioni trovate."],
    "%n network(s) found.": [
        "%n rete trovata.",
        "%n reti trovate."],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "%n fotogramma danneggiato negli ultimi dieci secondi.\n\nDi solito un "
        "segnale Wi-Fi debole, o un bitrate impostato troppo basso per la "
        "risoluzione. leolink ripara quello che può — questo è quello che non "
        "è riuscito a riparare.",
        "%n fotogrammi danneggiati negli ultimi dieci secondi.\n\nDi solito un "
        "segnale Wi-Fi debole, o un bitrate impostato troppo basso per la "
        "risoluzione. leolink ripara quello che può — questo è quello che non "
        "è riuscito a riparare."],
}
