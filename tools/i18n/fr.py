"""French. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> French. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "Diagnostic",
    "&Diagnostics…": "&Diagnostic…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "Ce que leolink et les caméras ont fait — et un rapport à joindre à un "
        "signalement de bogue.",
    "Errors only": "Erreurs seulement",
    "Warnings and errors": "Avertissements et erreurs",
    "Normal activity": "Activité normale",
    "Everything": "Tout",
    "All areas": "Tous les domaines",
    "Search…": "Rechercher…",
    "Show": "Afficher",
    "Detailed logging": "Journalisation détaillée",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "Note chaque requête à la caméra, chaque décision du décodeur et "
        "chaque reconnexion. Laissez-la éteinte au quotidien — allumez-la "
        "quand quelque chose cloche, reproduisez le problème, puis envoyez le "
        "rapport.",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "Note chaque requête à la caméra, chaque décision du décodeur et "
        "chaque reconnexion, dans ~/.local/share/leolink/leolink.log.",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "Les erreurs et les avertissements sont toujours notés. La "
        "journalisation détaillée ajoute la conversation avec la caméra — "
        "allumez-la quand quelque chose cloche, reproduisez-le, puis envoyez "
        "le rapport depuis Aide ▸ Diagnostic. Les mots de passe et les jetons "
        "sont retirés avant toute écriture.",
    "Open diagnostics…": "Ouvrir le diagnostic…",
    "Open diagnostics": "Ouvrir le diagnostic",
    "Follow new lines": "Suivre les nouvelles lignes",
    "Copy report": "Copier le rapport",
    "System details and the log, ready to paste into a bug report.":
        "Les détails du système et le journal, prêts à coller dans un "
        "signalement de bogue.",
    "Report copied.": "Rapport copié.",
    "Save report…": "Enregistrer le rapport…",
    "Save report": "Enregistrer le rapport",
    "Text files (*.txt)": "Fichiers texte (*.txt)",
    "Could not write %1.": "Impossible d'écrire %1.",
    "Open log folder": "Ouvrir le dossier du journal",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "Les mots de passe, les jetons de session et les adresses internet "
        "sont retirés avant toute écriture : ce rapport peut donc être partagé "
        "tel quel. Les adresses de votre propre réseau sont conservées — ce "
        "sont d'habitude le premier indice.",
    "%1 of %2 lines": "%1 lignes sur %2",
    "Report a problem": "Signaler un problème",
    "<b>Attach a diagnostics report</b>":
        "<b>Joignez un rapport de diagnostic</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "Il consigne ce qu'est votre machine, ce que les caméras ont répondu "
        "et où les choses ont dérapé — mots de passe et adresses déjà retirés. "
        "Sans lui, la plupart des signalements ne peuvent pas être "
        "suivis.\n\nSi vous savez provoquer le problème, activez d'abord la "
        "journalisation détaillée dans la fenêtre de diagnostic, refaites-le "
        "survenir, puis copiez le rapport.",
    "Go to the issue tracker": "Aller au suivi des problèmes",
    "Application": "Application",
    "Camera API": "Interface de la caméra",
    "ONVIF events": "Événements ONVIF",
    "Event actions": "Actions sur événement",
    "Baichuan": "Baichuan",
    "User interface": "Interface utilisateur",
    "Qt": "Qt",
    "strong": "fort",
    "good": "bon",
    "fair": "moyen",
    "weak": "faible",
    "unknown": "inconnu",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "Signal tel que la caméra l'entend : %1 sur 4",
    "Encryption: %1": "Chiffrement : %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "Certains noms ont été entendus depuis plusieurs points d'accès — "
        "c'est un maillage. La caméra rejoint le nom, pas un nœud précis ; le "
        "maillage décide auquel elle parle et la transfère au besoin. Pour "
        "trouver le meilleur endroit, déplacez la caméra et surveillez « "
        "Signal Wi-Fi » ci-dessus : c'est la liaison qu'elle a réellement.",
    "What this camera supports": "Ce que cette caméra prend en charge",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "Le micrologiciel Reolink diffère énormément d'un modèle à l'autre, et "
        "le seul moyen fiable de savoir ce qu'une caméra sait faire est de le "
        "lui demander. S'il manque à leolink quelque chose que votre caméra "
        "possède manifestement, c'est cette liste, dans un signalement de "
        "bogue, qui rend l'ajout possible.",
    "Ask the camera": "Demander à la caméra",
    "Copy the list": "Copier la liste",
    "Copied.": "Copié.",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>Pris en charge (%1) :</b> %2<br><br><b>Non pris en charge (%3) "
        ":</b> %4",
    "Privacy": "Vie privée",
    "Privacy areas…": "Zones privées…",
    "Parts of the view the camera blanks before anything leaves it.":
        "Parties de la vue que la caméra masque avant que quoi que ce soit "
        "n'en sorte.",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "Masqué dans la caméra elle-même : la partie couverte manque donc dans "
        "tous les visionneurs et tous les enregistrements — la fenêtre d'un "
        "voisin, ou un bureau qui n'a rien à faire sur la vidéo.",
    "%1 — privacy areas": "%1 — zones privées",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "Tracez les parties de la vue que la caméra doit masquer. Elle les "
        "noircit avant que quoi que ce soit ne quitte l'appareil : elles "
        "manquent donc dans l'image en direct, dans les enregistrements et "
        "dans tout autre logiciel — y compris l'application du fabricant.",
    "Remove the last": "Retirer la dernière",
    "Remove all": "Tout retirer",
    "No picture: %1 — the areas can still be drawn.":
        "Pas d'image : %1 — les zones peuvent quand même être tracées.",
    "%1 of %2 areas": "%1 zones sur %2",
    "nothing blanked": "rien de masqué",
    "Detection area…": "Zone de détection…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "Les parties de l'image que la caméra surveille. Tout ce qui est hors "
        "de la zone est ignoré — une route au bord du champ, un arbre dans le "
        "vent, la porte d'un voisin.",
    "%1 — the camera's detection area": "%1 — zone de détection de la caméra",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "Faites glisser sur l'image pour choisir ce que la caméra surveille. "
        "Les zones assombries sont ignorées. C'est la grille propre à la "
        "caméra, %1 sur %2, donc plus fine que celle de leolink.",
    "When to watch…": "Quand surveiller…",
    "Hours of the week the camera raises motion events at all.":
        "Les heures de la semaine où la caméra signale un mouvement.",
    "%1 — when to watch": "%1 — quand surveiller",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "Les heures où la caméra signale un mouvement. En dehors, elle voit "
        "toujours, mais ne dit rien.",
    "When to record…": "Quand enregistrer…",
    "Hours of the week the camera records to its card by itself.":
        "Les heures de la semaine où la caméra enregistre d'elle-même sur sa "
        "carte.",
    "%1 — when to record": "%1 — quand enregistrer",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "Les heures où la caméra enregistre sur sa propre carte. Il faut pour "
        "cela qu'une carte soit installée ; l'enregistrement sur cet "
        "ordinateur se règle sous Caméras → Événements et s'en passe.",
    "Area, times and sensitivity": "Zone, horaires et sensibilité",
    "To": "À",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "Les caméras acceptent une sensibilité différente selon l'heure : "
        "c'est ainsi qu'on évite que des phares déclenchent tout la nuit sans "
        "rendre la caméra sourde le jour.",
    "All week": "Toute la semaine",
    "Never": "Jamais",
    "Nights": "La nuit",
    "Working hours": "Heures de bureau",
    "Weekends": "Week-ends",
    "22:00 to 06:00, every day.": "De 22:00 à 06:00, tous les jours.",
    "08:00 to 17:00, Monday to Friday.":
        "De 08:00 à 17:00, du lundi au vendredi.",
    "Nothing is selected — this will never run.":
        "Rien n'est sélectionné — cela ne s'exécutera jamais.",
    "Always on.": "Toujours actif.",
    "Mobile data": "Données mobiles",
    "SIM card": "Carte SIM",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "Nécessaire seulement si la carte en demande un. Trois essais faux "
        "bloquent la carte, qui réclame alors un PUK que seul votre opérateur "
        "détient.",
    "Access point (APN)": "Point d'accès (APN)",
    "Authentication": "Authentification",
    "Use mobile data": "Utiliser les données mobiles",
    "Modem": "Modem",
    "Card": "Carte",
    "Type": "Type",
    "Signal": "Signal",
    "IMEI": "IMEI",
    "Card number": "Numéro de carte",
    "Mobile connection": "Connexion mobile",
    "Data used": "Données consommées",
    "Monthly limit": "Limite mensuelle",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>Non testé sur du matériel réel.</b> Personne dans leolink ne "
        "possède de caméra à modem : ceci a donc été écrit d'après le seul "
        "protocole. Rien ne peut être abîmé — une commande que la caméra "
        "ignore est simplement refusée — mais il se peut tout aussi bien que "
        "rien ne s'affiche.\n\nSi votre caméra a une SIM, « Ce que cette "
        "caméra prend en charge », sous Maintenance, énumère les commandes que "
        "son micrologiciel possède réellement. Cette liste, dans un "
        "signalement de bogue, est ce qui permettrait d'achever ceci "
        "correctement.",
    "Baichuan (the camera's own protocol)":
        "Baichuan (le protocole propre à la caméra)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP convient à la plupart des caméras et c'est ce qu'il faut essayer "
        "en premier.\n\nHTTP-FLV n'a besoin que du port 80, ce qui aide là où "
        "RTSP est bloqué.\n\nBaichuan est ce que parle l'application de "
        "Reolink. C'est la réponse pour les caméras qui laissent RTSP éteint — "
        "les modèles sur batterie le font — et il n'occupe aucune des rares "
        "sessions web de la caméra. Vidéo seulement : le son passe toujours "
        "par RTSP.",
    "connecting over Baichuan…": "connexion via Baichuan…",
    "Cannot open a local port: %1": "Impossible d'ouvrir un port local : %1",
    "Baichuan login failed: %1": "Échec de la connexion Baichuan : %1",
    "The camera refused to send video: %1":
        "La caméra a refusé d'envoyer la vidéo : %1",
    "The player did not connect.": "Le lecteur ne s'est pas connecté.",
    "The camera stopped sending.": "La caméra a cessé d'émettre.",
    "custom stream": "flux personnalisé",
    "Speak through the camera": "Parler à travers la caméra",
    "Stop speaking": "Arrêter de parler",
    "Play through %1": "Diffuser via %1",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "Fichiers son (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Tous les "
        "fichiers (*)",
    "Speaking through the camera…": "Parole en cours à travers la caméra…",
    "Finished.": "Terminé.",
    "Cannot reach the camera: %1": "Impossible de joindre la caméra : %1",
    "The camera did not answer on the RTSP port.":
        "La caméra n'a pas répondu sur le port RTSP.",
    "ffmpeg is needed to send sound and could not be started.":
        "ffmpeg est nécessaire pour envoyer du son et n'a pas pu être lancé.",
    "The camera rejected the user name or password.":
        "La caméra a rejeté le nom d'utilisateur ou le mot de passe.",
    "The camera refused: %1": "La caméra a refusé : %1",
    "This camera does not offer a speaker.":
        "Cette caméra ne propose pas de haut-parleur.",
    "Sound": "Son",
    "Send sound": "Transmettre le son",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "Le microphone de la caméra. Éteint, elle place tout de même une piste "
        "audio dans le flux — entièrement muette, ce qui est bien plus "
        "difficile à reconnaître qu'une piste absente.",
    "What it recognises": "Ce qu'elle reconnaît",
    "People": "Personnes",
    "Vehicles": "Véhicules",
    "Animals": "Animaux",
    "Faces": "Visages",
    "Any movement": "Tout mouvement",
    "Continuous": "En continu",
    "This camera keeps a separate week for each kind of event. Which one?":
        "Cette caméra tient une semaine distincte pour chaque type "
        "d'événement. Laquelle ?",
    "Push notifications": "Notifications push",
    "Folder": "Dossier",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "La caméra ne répond pas aux requêtes en ce moment. Elle fait cela "
        "quand elle en a reçu trop d'un coup ; elle se remet d'elle-même après "
        "un instant.",
    "Camera-side detection": "Détection dans la caméra",
    "Where it looks": "Où elle regarde",
    "Choose the area…": "Choisir la zone…",
    "When it reports at all": "Quand elle signale quoi que ce soit",
    "Choose the hours…": "Choisir les heures…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "Une semaine en heures : dans celles que vous cochez, la caméra "
        "signale le mouvement ; dans les autres, elle se tait. Rien à voir "
        "avec sa sensibilité — cela se règle plus bas.",
    "How readily it triggers": "Avec quelle facilité elle se déclenche",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "Au fil d'une journée, la caméra peut se déclencher plus ou moins "
        "facilement. C'est ainsi qu'on évite que des phares déclenchent tout "
        "la nuit sans la rendre aveugle le jour. Le nombre de plages est fixé "
        "par la caméra ; leurs horaires et leurs sensibilités vous "
        "appartiennent.",
    "Siren": "Sirène",
    "Sound on an alarm": "Sonner en cas d'alarme",
    "Times": "Horaires",
    "Spotlight": "Projecteur",
    "On": "Allumé",
    "Draw": "Dessiner",
    "Watch a rectangle": "Surveiller un rectangle",
    "Ignore a rectangle": "Ignorer un rectangle",
    "Drag over single cells.": "Faites glisser sur des cases isolées.",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "Tracez un rectangle à surveiller. Maj et glisser fait la même chose "
        "sans changer d'outil.",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "Tracez un rectangle à ignorer. Ctrl et glisser fait la même chose "
        "sans changer d'outil.",
    "  · already added": "  · déjà ajoutée",
    "Processor load %1 %": "Charge du processeur %1 %",
    "Encoder output %1 kbit/s": "Débit du codeur %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "Pris en charge (%1) :\n%2\n\nNon pris en charge (%3) :\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "C'est la caméra qui interroge Reolink, pas cet ordinateur — il lui "
        "faut donc sa propre sortie vers internet.",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "Une partie de la caméra n'a pas répondu. Selon ce qui a été demandé, "
        "cela signifie qu'aucune carte SD n'est installée, ou que la caméra "
        "n'a pas de sortie vers internet.",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "La remise aux réglages d'usine n'est pas proposée ici. Elle efface "
        "aussi les réglages réseau, et une caméra qui a oublié son Wi-Fi doit "
        "être décrochée et rejointe par câble — si vous y tenez vraiment, "
        "passez par l'interface web de la caméra.",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "La caméra n'a plus de session libre. Elle n'en accepte qu'une poignée "
        "à la fois, partagées avec l'application mobile et sa page web. "
        "Fermez-les, ou attendez une minute que les anciennes expirent.",
    "&File": "&Fichier",
    "&View": "&Affichage",
    "&Help": "Aid&e",
    "&Cameras…": "&Caméras…",
    "&Save snapshots…": "&Enregistrer des captures…",
    "&Event log…": "&Journal des événements…",
    "Open &recordings folder": "Ouvrir le dossier des enre&gistrements",
    "&Quit": "&Quitter",
    "&Full screen": "&Plein écran",
    "Leave full screen": "Quitter le plein écran",
    "Show &menu bar": "Afficher la barre de &menu",
    "Show &toolbar": "Afficher la barre d'&outils",
    "Show status &bar": "Afficher la barre d'é&tat",
    "Hide window &decoration": "Masquer la &décoration de fenêtre",
    "&Online handbook": "Manuel en &ligne",
    "&Protocol notes": "Notes de &protocole",
    "&Report a problem": "&Signaler un problème",
    "&About leolink": "À &propos de leolink",
    "Main": "Principale",
    "Ready": "Prêt",
    "Grid view": "Vue en grille",
    "No cameras configured": "Aucune caméra configurée",
    "Nothing to capture": "Rien à capturer",
    "Save snapshots to": "Enregistrer les captures dans",
    "Esc leaves full screen": "Échap quitte le plein écran",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Échap quitte le plein écran · double-cliquez sur une caméra pour "
        "remplir l'écran",
    "Double-click for the grid · Esc leaves full screen":
        "Double-clic pour la grille · Échap quitte le plein écran",
    "Cannot save": "Enregistrement impossible",
    "Settings could not be written to %1.":
        "Les réglages n'ont pas pu être écrits dans %1.",
    "Cannot create %1": "Impossible de créer %1",
    "Recording %1": "Enregistrement de %1",
    "Saved %1": "%1 enregistré",
    "Motion at %1": "Mouvement chez %1",
    "Motion detected": "Mouvement détecté",
    "Could not run the motion command for %1":
        "Impossible d'exécuter la commande de mouvement pour %1",
    "leolink is still running": "leolink tourne toujours",
    "Cameras keep recording. Use the tray icon to come back.":
        "Les caméras continuent d'enregistrer. Utilisez l'icône de la zone de "
        "notification pour revenir.",
    "Show window": "Afficher la fenêtre",
    "Cameras…": "Caméras…",
    "Quit": "Quitter",
    "Welcome to leolink": "Bienvenue dans leolink",
    "<b>No cameras are configured yet.</b>":
        "<b>Aucune caméra n'est encore configurée.</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "Ajoutez une caméra avec son adresse, son nom d'utilisateur et son mot "
        "de passe. leolink parle à la caméra directement sur votre réseau — "
        "aucun compte dans le nuage n'intervient.<p>Le manuel explique ce que "
        "fait chaque option.",
    "Add camera…": "Ajouter une caméra…",
    "Open handbook": "Ouvrir le manuel",
    "About leolink": "À propos de leolink",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Un client Linux natif pour les caméras "
        "Reolink.</p><p>Parle directement les protocoles propres à la caméra : "
        "interface HTTP, RTSP et ONVIF sur le réseau local, et le service P2P "
        "de Reolink lorsque vous voulez joindre une caméra depuis "
        "ailleurs.</p><p><a href=\"%2\">Manuel</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">Code "
        "source</a></p><p>Sans lien avec Reolink, ni approuvé par Reolink.</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "Aucune caméra n'est encore configurée.\n\nUtilisez « Caméras… » pour "
        "en ajouter une.",
    "connecting…": "connexion…",
    "main stream": "flux principal",
    "sub stream": "flux secondaire",
    "no host configured": "aucune adresse configurée",
    "cannot open stream": "impossible d'ouvrir le flux",
    "libmpv unavailable": "libmpv indisponible",
    "player init failed": "échec de l'initialisation du lecteur",
    "MOTION": "MOUVEMENT",
    "Mute this camera": "Couper le son de cette caméra",
    "Unmute this camera": "Rétablir le son de cette caméra",
    "Volume": "Volume",
    "Camera settings": "Réglages de la caméra",
    "Settings": "Réglages",
    "Cameras": "Caméras",
    "Layout": "Disposition",
    "Events": "Événements",
    "Window": "Fenêtre",
    "Add": "Ajouter",
    "Remove": "Retirer",
    "Remove camera": "Retirer la caméra",
    "Remove “%1” from the list?": "Retirer « %1 » de la liste ?",
    "New camera": "Nouvelle caméra",
    "Name": "Nom",
    "Host": "Adresse",
    "User": "Utilisateur",
    "Password": "Mot de passe",
    "Password command": "Commande de mot de passe",
    "UID": "UID",
    "Stream": "Flux",
    "Transport": "Transport",
    "192.168.1.10 or camera.lan": "192.168.1.10 ou camera.lan",
    "optional, for P2P access": "facultatif, pour l'accès P2P",
    "optional: pass show reolink/hall":
        "facultatif : pass show reolink/entree",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "Si elle est indiquée, cette commande est exécutée et sa sortie sert "
        "de mot de passe. Le secret reste ainsi hors du fichier de "
        "configuration.",
    "Sub stream (low bandwidth)": "Flux secondaire (faible débit)",
    "Main stream (full resolution)": "Flux principal (pleine résolution)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (latence plus faible)",
    "Use HTTPS for the control API":
        "Utiliser HTTPS pour l'interface de commande",
    "Show this camera": "Afficher cette caméra",
    "Test connection": "Tester la connexion",
    "Contacting %1…": "Contact de %1…",
    "Enter a host first.": "Indiquez d'abord une adresse.",
    "Incomplete camera": "Caméra incomplète",
    "“%1” has no host address.": "« %1 » n'a pas d'adresse.",
    "%1 — firmware %2, %3 channel(s)": "%1 — micrologiciel %2, %3 canaux",
    "Scan network…": "Explorer le réseau…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "Demande au réseau quelles caméras ONVIF sont présentes. Une seule "
        "sonde multidiffusion est envoyée ; les appareils qui restent muets ne "
        "sont jamais contactés.",
    "Looking for cameras…": "Recherche de caméras…",
    "Stop": "Arrêter",
    "Cameras found": "Caméras trouvées",
    "Add which one?": "Laquelle ajouter ?",
    "No cameras found": "Aucune caméra trouvée",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "Aucun appareil ONVIF n'a répondu.\n\nLes caméras ne répondent que si "
        "ONVIF est activé, et la sonde ne franchit ni les routeurs ni la "
        "plupart des VPN. Vous pouvez toujours ajouter une caméra en "
        "saisissant son adresse.",
    "unnamed device": "appareil sans nom",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.":
        "Impossible d'ouvrir une socket UDP pour la recherche.",
    "Grid size": "Taille de la grille",
    "Columns": "Colonnes",
    "Rows": "Lignes",
    "Column": "Colonne",
    "Row": "Ligne",
    "Row span": "Lignes occupées",
    "Column span": "Colonnes occupées",
    "automatic": "automatique",
    "Position of the selected camera": "Position de la caméra sélectionnée",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "Laissez la ligne et la colonne sur « automatique » pour que les "
        "caméras remplissent la grille dans l'ordre. En occupant plusieurs "
        "cases, une caméra peut en couvrir plusieurs.",
    "Watch cameras for motion (ONVIF push)":
        "Surveiller le mouvement sur les caméras (push ONVIF)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "La caméra signale le mouvement au moment où il se produit, au lieu "
        "que leolink demande une fois par seconde.",
    "Run command": "Exécuter une commande",
    "notify-send \"Motion at %n\"": "notify-send \"Mouvement chez %n\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "S'exécute quand cette caméra signale un mouvement.\n%n nom de la "
        "caméra · %h adresse · %t horodatage · %f fichier d'enregistrement",
    "Record while motion lasts": "Enregistrer tant que le mouvement dure",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "Enregistre sur cet ordinateur à partir du flux en direct : cela "
        "fonctionne donc même quand la caméra n'a pas de carte SD.",
    "Keep recording after": "Continuer d'enregistrer pendant",
    " s": " s",
    "Selected camera": "Caméra sélectionnée",
    "All cameras": "Toutes les caméras",
    "Recordings folder": "Dossier des enregistrements",
    "Browse…": "Parcourir…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "Les enregistrements sont écrits en Matroska sans réencodage : l'image "
        "garde la qualité d'origine de la caméra et le processeur reste "
        "presque au repos.",
    "Appearance": "Apparence",
    "Show menu bar": "Afficher la barre de menu",
    "Show toolbar": "Afficher la barre d'outils",
    "Show status bar": "Afficher la barre d'état",
    "Hide window decoration": "Masquer la décoration de fenêtre",
    "Ctrl+M toggles this at any time.": "Ctrl+M bascule cela à tout moment.",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "Pour les écrans muraux. Ctrl+Maj+D bascule.",
    "Notification area": "Zone de notification",
    "Show an icon in the notification area":
        "Afficher une icône dans la zone de notification",
    "Closing the window hides it instead of quitting":
        "Fermer la fenêtre la masque au lieu de quitter",
    "Minimising hides the window to the tray":
        "Réduire masque la fenêtre dans la zone de notification",
    "On motion": "En cas de mouvement",
    "Bring the window up when motion is detected":
        "Ramener la fenêtre au premier plan quand un mouvement est détecté",
    "Come back as": "Revenir en",
    "Previous size": "Taille précédente",
    "Full screen": "Plein écran",
    "Language": "Langue",
    "System language": "Langue du système",
    "Takes effect after restarting leolink.":
        "Prend effet au redémarrage de leolink.",
    "Menu bar hidden": "Barre de menu masquée",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "La barre de menu et la barre d'outils étant toutes deux masquées, "
        "appuyez sur Ctrl+M pour ramener le menu.",
    "Event log": "Journal des événements",
    "Camera:": "Caméra :",
    "Show:": "Afficher :",
    "All events": "Tous les événements",
    "Motion": "Mouvement",
    "With recording": "Avec enregistrement",
    "Refresh": "Actualiser",
    "When": "Quand",
    "Camera": "Caméra",
    "Event": "Événement",
    "Media": "Média",
    "video": "vidéo",
    "image": "image",
    " + image": " + image",
    "no preview": "pas d'aperçu",
    "recording only": "enregistrement seul",
    "no events recorded yet": "aucun événement enregistré pour l'instant",
    "Recording: %1%2": "Enregistrement : %1%2",
    " (file missing)": " (fichier manquant)",
    "Image: %1": "Image : %1",
    "Open recording": "Ouvrir l'enregistrement",
    "Open image": "Ouvrir l'image",
    "Nothing to open": "Rien à ouvrir",
    "The file for this event is no longer there.":
        "Le fichier de cet événement n'est plus là.",
    "Clear log…": "Vider le journal…",
    "Clear event log": "Vider le journal des événements",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "Supprimer tout l'historique des événements ?\n\nLes vidéos et les "
        "images enregistrées restent sur le disque — seul le journal est vidé.",
    "Command": "Commande",
    "could not be started": "n'a pas pu être lancée",
    "Webhook": "Webhook",
    "invalid URL": "adresse non valide",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "Échec de %1 : %2",
    "Event log…": "Journal des événements…",
    "MQTT broker or topic not set.": "Courtier ou sujet MQTT non renseigné.",
    "MQTT broker did not respond.": "Le courtier MQTT n'a pas répondu.",
    "MQTT: %1": "MQTT : %1",
    "MQTT: unexpected reply from the broker.":
        "MQTT : réponse inattendue du courtier.",
    "MQTT refused the connection: %1": "MQTT a refusé la connexion : %1",
    "Video": "Vidéo",
    "Decoding": "Décodage",
    "Hardware, fastest": "Matériel, le plus rapide",
    "Hardware, with frame copy": "Matériel, avec copie des images",
    "Software only": "Logiciel uniquement",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "Le décodage matériel laisse le processeur libre et c'est le bon choix "
        "pour les résolutions du flux principal.\n\nSi l'image montre des "
        "blocs verts ou se fige, choisissez « avec copie des images » : le "
        "décodage reste sur le GPU mais chaque image est copiée en mémoire "
        "centrale, ce dont certains pilotes ont besoin quand la vidéo est "
        "logée dans une autre fenêtre.",
    "Favour low latency over smoothness":
        "Préférer la faible latence à la fluidité",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "Réduit la mise en tampon au minimum. Désactivez-le si un flux à haut "
        "débit saccade sur un réseau chargé.",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "Faites glisser la bande sous une caméra pour déplacer la fenêtre. "
        "Ctrl+Maj+D ramène le cadre, Ctrl+M le menu.",
    "%1 — camera settings": "%1 — réglages de la caméra",
    "Reading settings from %1…": "Lecture des réglages de %1…",
    "Apply to camera": "Appliquer à la caméra",
    "Main stream": "Flux principal",
    "Sub stream": "Flux secondaire",
    "Resolution": "Résolution",
    "Frame rate": "Fréquence d'images",
    "Bit rate (kbit/s)": "Débit (kbit/s)",
    "H.264 profile": "Profil H.264",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "Plus haut signifie une meilleure image et plus de trafic réseau. La "
        "caméra ne propose que les débits qu'elle peut réellement tenir.",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "Ceci modifie la caméra elle-même : tous les logiciels en voient le "
        "résultat. Les choix viennent de la caméra et diffèrent selon le "
        "modèle.",
    "Picture": "Image",
    "Brightness": "Luminosité",
    "Contrast": "Contraste",
    "Saturation": "Saturation",
    "Sharpness": "Netteté",
    "Hue": "Teinte",
    "Ready.": "Prêt.",
    "Writing to the camera…": "Écriture vers la caméra…",
    "Nothing to write.": "Rien à écrire.",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "Enregistré. Changer le codeur redémarre le flux : l'image peut donc "
        "disparaître un instant.",
    "&Record all cameras": "&Enregistrer toutes les caméras",
    "Record this camera": "Enregistrer cette caméra",
    "Stop recording": "Arrêter l'enregistrement",
    "Recording all cameras": "Enregistrement de toutes les caméras",
    "Recording stopped": "Enregistrement arrêté",
    "Recording started": "Enregistrement démarré",
    "Could not start recording %1":
        "Impossible de démarrer l'enregistrement de %1",
    "%1: %2": "%1 : %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "ffmpeg n'est pas installé : l'enregistrement est donc indisponible.",
    "No stream address for %1.": "Aucune adresse de flux pour %1.",
    "Recording failed: %1": "Échec de l'enregistrement : %1",
    "Recording produced no data (ffmpeg exit %1).":
        "L'enregistrement n'a produit aucune donnée (ffmpeg est sorti avec "
        "%1).",
    "Could not start ffmpeg.": "Impossible de lancer ffmpeg.",
    "Custom URL": "Adresse personnalisée",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "Toute adresse que libmpv sait ouvrir. À utiliser pour des caméras "
        "d'autres marques, un flux de NVR ou un fichier local.",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "ffmpeg n'est pas installé : la détection de mouvement est donc "
        "indisponible.",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "ffmpeg n'est pas installé : la détection sonore est donc "
        "indisponible.",
    "Motion detection stopped: %1": "Détection de mouvement arrêtée : %1",
    "Sound detection stopped: %1": "Détection sonore arrêtée : %1",
    "Could not start ffmpeg for motion detection.":
        "Impossible de lancer ffmpeg pour la détection de mouvement.",
    "Could not start ffmpeg for sound detection.":
        "Impossible de lancer ffmpeg pour la détection sonore.",
    "Sound detected": "Son détecté",
    "%1 at %2": "%1 chez %2",
    "Detection": "Détection",
    "Motion comes from": "Le mouvement vient de",
    "The camera reports it (ONVIF)": "La caméra le signale (ONVIF)",
    "leolink watches the picture": "leolink observe l'image",
    "Either of the two": "L'un ou l'autre",
    "Do not watch": "Ne pas surveiller",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "Les caméras qui signalent le mouvement elles-mêmes ne coûtent rien à "
        "surveiller.\n\nAnalyser l'image ici fonctionne avec n'importe quelle "
        "caméra, y compris celles qui ne signalent rien, mais ouvre pour "
        "chacune une seconde connexion au flux secondaire.",
    "Motion zones…": "Zones de mouvement…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "Choisissez quelles parties de l'image sont surveillées. Ne s'applique "
        "que lorsque leolink analyse lui-même l'image.",
    "Sensitivity": "Sensibilité",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "De combien un point de l'image doit changer pour compter. Plus haut "
        "remarque davantage, ombres et pluie comprises.",
    "Minimum area": "Surface minimale",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "Quelle part de la surface surveillée doit changer pour compter comme "
        "un mouvement. 20 ‰, c'est deux pour cent de l'image — à peu près une "
        "personne à distance moyenne.",
    "Raise an event on sound": "Déclencher un événement au son",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "Nécessite une caméra avec micro. Ouvre une connexion de plus au flux "
        "secondaire.",
    "Sound above": "Son au-dessus de",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB est proche du silence, -20 dB une voix élevée à proximité.",
    "Hold for": "Maintenir pendant",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "Maintient l'événement après la fin du bruit, pour qu'un aboiement ne "
        "soit pas signalé quatre fois.",
    "%1 — motion zones": "%1 — zones de mouvement",
    "no picture available": "aucune image disponible",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "Faites glisser sur l'image pour choisir ce qui est surveillé. Les "
        "zones assombries sont ignorées — pratique pour une route au bord du "
        "champ, un arbre qui bouge au vent ou le seuil d'un voisin.",
    "Watch all": "Tout surveiller",
    "Ignore all": "Tout ignorer",
    "Invert": "Inverser",
    "Fetching a picture from %1…": "Récupération d'une image depuis %1…",
    "No picture: %1 — the zones can still be set.":
        "Pas d'image : %1 — les zones peuvent quand même être définies.",
    "Recordings on the &camera…": "Enregistrements sur la &caméra…",
    "Browse what is stored on the camera's own SD card.":
        "Parcourez ce qui est stocké sur la carte SD de la caméra.",
    "Which camera": "Quelle caméra",
    "Show recordings from": "Afficher les enregistrements de",
    "%1 — recordings on the camera": "%1 — enregistrements sur la caméra",
    "Search": "Rechercher",
    "From": "Du",
    "to": "au",
    "Start": "Début",
    "Length": "Durée",
    "Size": "Taille",
    "File": "Fichier",
    "Play": "Lire",
    "Download…": "Télécharger…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "Choisissez une période et appuyez sur Rechercher. Il n'y a "
        "d'enregistrements que si la caméra a une carte SD installée.",
    "Asking %1…": "Interrogation de %1…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "Rien trouvé sur cette période. Soit rien n'a été enregistré, soit la "
        "caméra n'a pas de carte SD.",
    "No session with the camera — search first.":
        "Aucune session avec la caméra — lancez d'abord une recherche.",
    "No player": "Pas de lecteur",
    "mpv was not found. The recording is at:\n\n%1":
        "mpv est introuvable. L'enregistrement se trouve à :\n\n%1",
    "Save recording": "Enregistrer la vidéo",
    "Cannot write to %1.": "Impossible d'écrire dans %1.",
    "Saved to %1": "Enregistré dans %1",
    "Download failed: %1": "Échec du téléchargement : %1",
    "Maintenance": "Maintenance",
    "Restart": "Redémarrer",
    "Restart the camera": "Redémarrer la caméra",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "La caméra quitte le réseau pendant une minute environ et revient "
        "d'elle-même. Les enregistrements de sa carte SD ne sont pas touchés "
        "et les réglages sont conservés.\n\nCela vaut la peine d'essayer quand "
        "une caméra ne répond plus, refuse de nouvelles connexions ou s'est "
        "déréglée après une mise à jour du micrologiciel.",
    "<b>Restart %1?</b>": "<b>Redémarrer %1 ?</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "L'image disparaîtra environ une minute. Tout enregistrement en cours "
        "s'arrêtera.",
    "Asking %1 to restart…": "Demande de redémarrage à %1…",
    "Restarting. The camera will be back in about a minute.":
        "Redémarrage. La caméra sera de retour dans une minute environ.",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "La remise aux réglages d'usine et le formatage de la carte SD ne sont "
        "pas proposés ici. Les deux sont irréversibles et valent mieux depuis "
        "l'interface web de la caméra, où les avertissements sont ceux du "
        "fabricant.",
    "Network": "Réseau",
    "Connection": "Connexion",
    "Reading…": "Lecture…",
    "Wi-Fi signal": "Signal Wi-Fi",
    "Wi-Fi signal unknown": "Signal Wi-Fi inconnu",
    "Wi-Fi signal %1 of %2": "Signal Wi-Fi %1 sur %2",
    "Link": "Liaison",
    "Address": "Adresse",
    "Netmask": "Masque de sous-réseau",
    "Gateway": "Passerelle",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "Nom du réseau",
    "Ports": "Ports",
    "The camera reported nothing.": "La caméra n'a rien signalé.",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "Affiché à titre indicatif. Les adresses, les identifiants Wi-Fi et "
        "les ports se modifient dans l'interface web de la caméra — une erreur "
        "ici mettrait la caméra hors de portée.",
    "Hardware, with frame copy (recommended)":
        "Matériel, avec copie des images (recommandé)",
    "Hardware, zero copy (fastest)": "Matériel, sans copie (le plus rapide)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "Les trois décodent sur la carte graphique quand c'est possible.\n\n« "
        "Avec copie des images » fait passer chaque image par la mémoire "
        "centrale. C'est quelques pour cent plus lent, et c'est le réglage par "
        "défaut, parce que la voie sans copie produit des blocs verts ou une "
        "image figée sur plusieurs pilotes quand la vidéo est logée dans une "
        "autre fenêtre.\n\nEssayez « sans copie » si vous tenez à ces derniers "
        "pour-cent ; revenez en arrière si l'image se décompose.",
    "This camera does not offer these settings.":
        "Cette caméra ne propose pas ces réglages.",
    "Exposure and orientation": "Exposition et orientation",
    "Day / night": "Jour / nuit",
    "Automatic": "Automatique",
    "Always colour": "Toujours en couleur",
    "Always black and white": "Toujours en noir et blanc",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "« Auto » passe à l'infrarouge à mesure que la lumière baisse. Forcer "
        "la couleur la nuit donne une image trop sombre pour servir ; forcer "
        "le noir et blanc le jour perd la couleur pour rien.",
    "Anti-flicker": "Anti-scintillement",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "Faites correspondre à la fréquence de votre secteur — 50 Hz en Europe "
        "— sinon l'éclairage intérieur battra contre l'obturateur et l'image "
        "pulsera.",
    "Exposure": "Exposition",
    "Mirror": "Miroir",
    "Flip": "Retourner",
    "For a camera mounted upside down.": "Pour une caméra montée à l'envers.",
    "Backlight compensation": "Compensation de contre-jour",
    "Helps when the subject stands against a bright window or sky.":
        "Aide quand le sujet se détache sur une fenêtre ou un ciel lumineux.",
    "Noise reduction": "Réduction du bruit",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "Nettoie une image sombre, au prix d'un flou sur tout ce qui bouge.",
    "Rotation": "Rotation",
    "Dynamic contrast": "Contraste dynamique",
    "Infrared illumination": "Éclairage infrarouge",
    "Infrared lamps": "Lampes infrarouges",
    "Always on": "Toujours allumées",
    "Always off": "Toujours éteintes",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "« Auto » les allume à la tombée du jour. Éteignez-les si la caméra "
        "regarde à travers une vitre — le reflet l'aveugle.",
    "Overlay": "Incrustation",
    "On-screen text": "Texte à l'écran",
    "Background": "Fond",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "Dessine un cadre derrière le texte pour qu'il reste lisible sur une "
        "scène claire.",
    "Watermark": "Filigrane",
    "Embeds a mark in the recording itself.":
        "Incruste une marque dans l'enregistrement lui-même.",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "La caméra grave ceci dans l'image : cela apparaît donc dans chaque "
        "enregistrement et dans chaque logiciel — pas seulement ici.",
    "Motion detection in the camera": "Détection de mouvement dans la caméra",
    "Switched on": "Activée",
    "Higher notices more, including shadows and headlights.":
        "Plus haut remarque davantage, ombres et phares compris.",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "Il s'agit de la détection propre à la caméra, celle qu'elle signale "
        "par ONVIF. L'analyse de l'image faite par leolink se règle à part, "
        "sous Caméras → Événements.",
    "Recording": "Enregistrement",
    "Recording to the camera's card":
        "Enregistrement sur la carte de la caméra",
    "Overwrite when full": "Écraser une fois plein",
    "Off means recording simply stops once the card fills up.":
        "Désactivé signifie que l'enregistrement s'arrête simplement dès que "
        "la carte est pleine.",
    "Record before the event": "Enregistrer avant l'événement",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "Conserve les secondes qui précèdent un déclenchement, en général la "
        "partie intéressante.",
    "File length": "Durée des fichiers",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "Ceci régit ce que la caméra écrit sur sa propre carte SD. "
        "L'enregistrement sur cet ordinateur se règle sous Caméras → "
        "Événements et n'a besoin d'aucune carte.",
    "Alerts": "Alertes",
    "E-mail": "Courriel",
    "FTP": "FTP",
    "FTP upload": "Envoi FTP",
    "Push notification": "Notification push",
    "Server": "Serveur",
    "Port": "Port",
    "Send to": "Envoyer à",
    "Encrypted": "Chiffré",
    "Not more often than": "Pas plus souvent que",
    "Attach": "Joindre",
    "Directory": "Répertoire",
    "Mode": "Mode",
    "Schedule": "Programmation",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "Envoyées par la caméra elle-même : elles continuent donc de "
        "fonctionner quand cet ordinateur est éteint. Les réactions propres à "
        "leolink — commandes, webhooks, MQTT — sont sous Caméras → Événements.",
    "Time": "Heure",
    "Time server": "Serveur de temps",
    "Synchronise the clock": "Synchroniser l'horloge",
    "Every": "Tous les",
    "Scheduled restart": "Redémarrage programmé",
    "Restart regularly": "Redémarrer régulièrement",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "Certaines caméras deviennent capricieuses après des semaines allumées "
        "; un redémarrage hebdomadaire est un remède bon marché.",
    "Day": "Jour",
    "Hour": "Heure",
    "Minute": "Minute",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "Une caméra à l'horloge fausse date mal ses enregistrements, ce qui "
        "pèse plus qu'il n'y paraît le jour où il faut en retrouver un.",
    "Wi-Fi": "Wi-Fi",
    "Scan": "Explorer",
    "Join network": "Rejoindre le réseau",
    "scanning…": "exploration…",
    "The camera is scanning for networks…": "La caméra cherche des réseaux…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "C'est la caméra qui explore, pas cet ordinateur — ce qui compte, "
        "c'est ce qu'elle atteint. Le mot de passe est essayé avant d'être "
        "enregistré : une faute de frappe est donc refusée au lieu de laisser "
        "la caméra sans aucun réseau.",
    "Change the camera's network": "Changer le réseau de la caméra",
    "<b>Move %1 to “%2”?</b>": "<b>Déplacer %1 vers « %2 » ?</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "La caméra teste d'abord le mot de passe et refuse s'il est faux : "
        "c'est donc moins risqué qu'il n'y paraît.\n\nElle disparaîtra tout de "
        "même une minute le temps de se reconnecter, et si le nouveau réseau "
        "lui attribue une autre adresse, il faudra la mettre à jour ici "
        "ensuite.",
    "Join": "Rejoindre",
    "Testing the password on the camera…":
        "Test du mot de passe sur la caméra…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "Enregistré. La caméra se reconnecte et sera de retour sous peu.",
    "The camera could not join that network: %1":
        "La caméra n'a pas pu rejoindre ce réseau : %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "Les adresses et les ports se lisent ici mais se modifient dans "
        "l'interface web de la caméra. Se tromper sur l'un d'eux sort "
        "complètement la caméra du réseau, et le seul retour possible est la "
        "pointe de réinitialisation — une boîte d'avertissement ne remplace "
        "pas l'écran du fabricant sur ce point.",
    "%1 fps": "%1 ips",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)": "flux perdu — reconnexion (%1)",
    "Hardware (recommended)": "Matériel (recommandé)",
    "Hardware, driver's choice": "Matériel, au choix du pilote",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "« Recommandé » nomme le décodeur explicitement pour que le décodage "
        "et l'affichage restent sur la même interface graphique. Livré à "
        "lui-même, mpv peut décoder par l'une et dessiner par l'autre, ce qui, "
        "sur certaines cartes, rend l'image d'un vert uni.\n\nSi l'image est "
        "cassée, essayez les autres à tour de rôle. « Logiciel uniquement » "
        "marche toujours mais coûte un cœur de processeur entier en pleine "
        "résolution.",
    "Wired": "Filaire",
    "%1 — strength unknown": "%1 — puissance inconnue",
    "%1 — %2 of %3": "%1 — %2 sur %3",
    "WEAK SIGNAL": "SIGNAL FAIBLE",
    "BAD STREAM": "FLUX DÉFECTUEUX",
    "stream ended (%1) — reconnecting":
        "le flux s'est terminé (%1) — reconnexion",
    "Open the &log file": "Ouvrir le fichier &journal",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "Ce que les lecteurs et les caméras ont rapporté. Utile à joindre à un "
        "signalement de bogue.",
    "Nothing logged yet.": "Rien de consigné pour l'instant.",
    "Bit rate looks too low": "Le débit semble trop faible",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%1 kbit/s, c'est très peu pour %2.</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "À ce rapport, le codeur de la caméra a tendance à émettre des images "
        "abîmées, qui arrivent en blocs verts ou en image figée — ce n'est pas "
        "une panne de réseau, et ce n'est pas quelque chose que leolink puisse "
        "entièrement réparer.\n\nSoit vous montez le débit, soit vous baissez "
        "la résolution.",
    "Apply anyway": "Appliquer quand même",
    "camera is reconfiguring…": "la caméra se reconfigure…",
    "Send a test e-mail": "Envoyer un courriel de test",
    "Test the FTP upload": "Tester l'envoi FTP",
    "Asking the camera to send a test e-mail…":
        "Demande à la caméra d'envoyer un courriel de test…",
    "Asking the camera to try the FTP server…":
        "Demande à la caméra d'essayer le serveur FTP…",
    "%1: the camera reported success.":
        "%1 : la caméra a signalé une réussite.",
    "Condition": "État",
    "Processor load %1%": "Charge du processeur %1 %",
    "Encoder load %1%": "Charge du codeur %1 %",
    "Network throughput %1 kbit/s": "Débit réseau %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "La caméra est à sa limite. Baisser la résolution ou la fréquence "
        "d'images la stabilisera.",
    "Firmware": "Micrologiciel",
    "Not checked.": "Non vérifié.",
    "Check for updates": "Rechercher des mises à jour",
    "Asking Reolink…": "Interrogation de Reolink…",
    "Install update": "Installer la mise à jour",
    "Update available: %1": "Mise à jour disponible : %1",
    "The firmware is up to date.": "Le micrologiciel est à jour.",
    "Install firmware": "Installer le micrologiciel",
    "<b>Update the firmware on %1?</b>":
        "<b>Mettre à jour le micrologiciel de %1 ?</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "La caméra télécharge la mise à jour elle-même et redémarre. Elle sera "
        "injoignable plusieurs minutes.\n\nNe lui coupez pas le courant "
        "pendant la mise à jour — une caméra interrompue en pleine écriture "
        "doit en général repartir au service après-vente.",
    "Install": "Installer",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "Mise à jour en cours. La caméra redémarrera d'elle-même et sera "
        "injoignable plusieurs minutes. Ne lui coupez pas le courant.",
    "Storage": "Stockage",
    "Format the SD card": "Formater la carte SD",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "Le formatage efface tous les enregistrements de la carte. Il n'y a ni "
        "retour en arrière ni confirmation de la caméra ensuite.",
    "<b>Erase everything on the card in %1?</b>":
        "<b>Effacer tout ce qui est sur la carte de %1 ?</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "Chaque enregistrement de la carte est supprimé. C'est irréversible, "
        "et rien de ce qui n'a pas déjà été téléchargé ne pourra être "
        "récupéré.",
    "Erase": "Effacer",
    "Formatting…": "Formatage…",
    "The card has been formatted.": "La carte a été formatée.",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "La remise aux réglages d'usine n'est pas proposée ici. Elle efface "
        "aussi les réglages réseau, et une caméra qui a oublié son Wi-Fi doit "
        "être descendue et réinitialisée à la main.",
    "Users": "Utilisateurs",
    "Rights": "Droits",
    "Administrator": "Administrateur",
    "Viewer": "Spectateur",
    "Add…": "Ajouter…",
    "Change password…": "Changer le mot de passe…",
    "Delete": "Supprimer",
    "New user": "Nouvel utilisateur",
    "User name": "Nom d'utilisateur",
    "Password for %1": "Mot de passe de %1",
    "Creating %1…": "Création de %1…",
    "Change password": "Changer le mot de passe",
    "New password for %1": "Nouveau mot de passe de %1",
    "Changing the password for %1…": "Changement du mot de passe de %1…",
    "This is the account leolink uses": "C'est le compte qu'utilise leolink",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "Changez-le ici et leolink restera dehors jusqu'à ce que le nouveau "
        "mot de passe soit saisi sous Caméras également.",
    "Cannot delete this account": "Impossible de supprimer ce compte",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "leolink est connecté en tant que « %1 ». Le supprimer couperait "
        "immédiatement la liaison avec cette caméra.",
    "Delete user": "Supprimer l'utilisateur",
    "Delete “%1” from the camera?": "Supprimer « %1 » de la caméra ?",
    "Deleting %1…": "Suppression de %1…",
    "Done.": "Terminé.",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "Ce sont des comptes sur la caméra, pas dans leolink. Un compte "
        "spectateur peut regarder mais ne rien changer — utile pour tout ce "
        "qui n'a besoin que de voir l'image, afin qu'un mot de passe stocké ne "
        "puisse pas se retourner contre les réglages de la caméra.",
    "camera is reconfiguring… %1 s": "la caméra se reconfigure… %1 s",
    "File format not recognised.": "Format de fichier non reconnu.",
    "Invalid input.": "Saisie non valide.",
    "No free connections — the camera allows only a few sessions at a time.":
        "Plus de connexion libre — la caméra n'accepte que quelques sessions à "
        "la fois.",
    "Session expired.": "Session expirée.",
    "Wrong user name or password.":
        "Nom d'utilisateur ou mot de passe incorrect.",
    "Timed out.": "Délai dépassé.",
    "This firmware does not support that command.":
        "Ce micrologiciel ne prend pas en charge cette commande.",
    "Could not read the configuration.":
        "Impossible de lire la configuration.",
    "Could not verify the configuration.":
        "Impossible de vérifier la configuration.",
    "Subsystem unavailable — typically no SD card fitted.":
        "Sous-système indisponible — typiquement, aucune carte SD installée.",
    "Not permitted — this model lacks the hardware.":
        "Non autorisé — ce modèle n'a pas le matériel nécessaire.",
    "Account invalid, log in again.": "Compte non valide, reconnectez-vous.",
    "User name already taken.": "Ce nom d'utilisateur est déjà pris.",
    "Maximum number of users reached.":
        "Nombre maximal d'utilisateurs atteint.",
    "Camera busy, try again shortly.": "Caméra occupée, réessayez sous peu.",
    "IP address conflict.": "Conflit d'adresses IP.",
    "Configuration test failed.": "Échec du test de configuration.",
    "FTP login failed.": "Échec de la connexion FTP.",
    "FTP could not create the directory.":
        "FTP n'a pas pu créer le répertoire.",
    "FTP upload failed.": "Échec de l'envoi FTP.",
    "FTP could not reach the server.": "FTP n'a pas pu joindre le serveur.",
    "Camera reported error %1.": "La caméra a signalé l'erreur %1.",
    "Cannot reach %1: %2": "Impossible de joindre %1 : %2",
    "Unexpected reply from %1.": "Réponse inattendue de %1.",
    "Login returned no token.": "La connexion n'a renvoyé aucun jeton.",
    "Snapshot failed.": "Échec de la capture.",
    "ONVIF subscription failed.": "Échec de l'abonnement ONVIF.",
}


# Plural forms — two forms, singular first.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        ", %n point d'accès",
        ", %n points d'accès"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "Entendu depuis %n point d'accès — un réseau, plusieurs nœuds. C'est "
        "le plus fort qui est affiché.",
        "Entendu depuis %n points d'accès — un réseau, plusieurs nœuds. C'est "
        "le plus fort qui est affiché."],
    "%n network(s) found, strongest first.": [
        "%n réseau trouvé, le plus fort en premier.",
        "%n réseaux trouvés, le plus fort en premier."],
    "Asking about %n command(s)…": [
        "Interrogation sur %n commande…",
        "Interrogation sur %n commandes…"],
    "%n area(s) blanked": [
        "%n zone masquée",
        "%n zones masquées"],
    "%n area(s), switched off": [
        "%n zone, désactivée",
        "%n zones, désactivées"],
    "%n hour(s) a week.": [
        "%n heure par semaine.",
        "%n heures par semaine."],
    "%n camera(s) live": [
        "%n caméra en direct",
        "%n caméras en direct"],
    "Saved %n snapshot(s)": [
        "%n capture enregistrée",
        "%n captures enregistrées"],
    "Found %n device(s)…": [
        "%n appareil trouvé…",
        "%n appareils trouvés…"],
    "%n recording(s) found.": [
        "%n enregistrement trouvé.",
        "%n enregistrements trouvés."],
    "%n network(s) found.": [
        "%n réseau trouvé.",
        "%n réseaux trouvés."],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "%n image abîmée en dix secondes.\n\nD'habitude un signal Wi-Fi "
        "faible, ou un débit réglé trop bas pour la résolution. leolink répare "
        "ce qu'il peut — voici ce qu'il n'a pas pu.",
        "%n images abîmées en dix secondes.\n\nD'habitude un signal Wi-Fi "
        "faible, ou un débit réglé trop bas pour la résolution. leolink répare "
        "ce qu'il peut — voici ce qu'il n'a pas pu."],
}
