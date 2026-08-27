<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr" sourcelanguage="en">
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/Keyring.cpp" line="43"/>
        <source>The keyring did not answer.</source>
        <translation>Le trousseau n'a pas répondu.</translation>
    </message>
    <message>
        <location filename="../src/Keyring.cpp" line="113"/>
        <location filename="../src/Keyring.cpp" line="129"/>
        <location filename="../src/Keyring.cpp" line="150"/>
        <source>This build has no keyring support.</source>
        <translation>Cette version ne gère pas le trousseau.</translation>
    </message>
</context>
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n nom de la caméra · %h adresse · %t heure · %e événement · %s on/off · %f enregistrement · %p image</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>Exécuter une commande</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="41"/>
        <location filename="../src/ActionEditor.cpp" line="44"/>
        <source>Command</source>
        <translation>Commande</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="50"/>
        <source>Call a webhook</source>
        <translation>Appeler un webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>Laissé vide, leolink envoie un petit document JSON décrivant l'événement.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>Méthode</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>Corps</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>Publier un message MQTT</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>Laissé vide : le même document JSON que le webhook.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>Conserver le dernier message sur le courtier</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>Un client qui se connecte plus tard connaît aussitôt l'état courant, au lieu d'attendre l'événement suivant. C'est ce que veut d'ordinaire la domotique.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>Courtier</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>Sujet</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>Utilisateur</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>Charge utile</translation>
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
        <translation>ffmpeg n'est pas installé : la détection sonore est donc indisponible.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>Aucune adresse de flux pour %1.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="103"/>
        <source>Sound detection stopped: %1</source>
        <translation>Détection sonore arrêtée : %1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="108"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>Impossible de lancer ffmpeg pour la détection sonore.</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="75"/>
        <source>Cannot open a local port: %1</source>
        <translation>Impossible d'ouvrir un port local : %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="87"/>
        <source>Baichuan login failed: %1</source>
        <translation>Échec de la connexion Baichuan : %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="96"/>
        <source>The camera refused to send video: %1</source>
        <translation>La caméra a refusé d'envoyer la vidéo : %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="230"/>
        <source>The player did not connect.</source>
        <translation>Le lecteur ne s'est pas connecté.</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="240"/>
        <source>The camera stopped sending.</source>
        <translation>La caméra a cessé d'émettre.</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="80"/>
        <source>%1 channel %2</source>
        <translation>%1 canal %2</translation>
    </message>
    <message>
        <location filename="../src/Config.cpp" line="87"/>
        <source>Camera</source>
        <translation>Caméra</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="125"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="133"/>
        <source>Reading settings from %1…</source>
        <translation>Lecture des réglages de %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="138"/>
        <source>Apply to camera</source>
        <translation>Appliquer à la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="169"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>Redémarrage. La caméra sera de retour dans une minute environ.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="185"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>Enregistré. La caméra se reconnecte et sera de retour sous peu.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="191"/>
        <source>%1: the camera reported success.</source>
        <translation>%1 : la caméra a signalé une réussite.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="199"/>
        <source>Processor load %1 %</source>
        <translation>Charge du processeur %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="204"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>Débit du codeur %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="206"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>Débit réseau %1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="208"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>La caméra est à sa limite. Baisser la résolution ou la fréquence d'images la stabilisera.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>Administrator</source>
        <translation>Administrateur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="229"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="867"/>
        <source>Viewer</source>
        <translation>Spectateur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="254"/>
        <source>Done.</source>
        <translation>Terminé.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="259"/>
        <source>The card has been formatted.</source>
        <translation>La carte a été formatée.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="678"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>Plus haut signifie une meilleure image et plus de trafic réseau. La caméra ne propose que les débits qu'elle peut réellement tenir.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="682"/>
        <source>Resolution</source>
        <translation>Résolution</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>Frame rate</source>
        <translation>Fréquence d'images</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="684"/>
        <source>Bit rate (kbit/s)</source>
        <translation>Débit (kbit/s)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="685"/>
        <source>H.264 profile</source>
        <translation>Profil H.264</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="693"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>Ceci modifie la caméra elle-même : tous les logiciels en voient le résultat. Les choix viennent de la caméra et diffèrent selon le modèle.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="706"/>
        <source>Send sound</source>
        <translation>Transmettre le son</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="709"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>Le microphone de la caméra. Éteint, elle place tout de même une piste audio dans le flux — entièrement muette, ce qui est bien plus difficile à reconnaître qu'une piste absente.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="438"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="715"/>
        <source>Sound</source>
        <translation>Son</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>Dans leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="112"/>
        <source>In the camera</source>
        <translation>Dans la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="128"/>
        <source>Try again</source>
        <translation>Réessayer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="338"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>La caméra le signale (ONVIF)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="340"/>
        <source>leolink watches the picture</source>
        <translation>leolink observe l'image</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="342"/>
        <source>Either of the two</source>
        <translation>L'un ou l'autre</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="343"/>
        <source>Do not watch</source>
        <translation>Ne pas surveiller</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="352"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;La caméra le signale :&lt;/b&gt; c'est le détecteur de la caméra qui décide, et il envoie un événement ONVIF. Ce qu'il surveille et avec quelle facilité il se déclenche se règle plus bas, sous « Détection », dans la caméra elle-même.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink observe l'image :&lt;/b&gt; cet ordinateur ouvre une seconde connexion au flux secondaire et analyse l'image. Fonctionne avec n'importe quelle caméra, y compris celles qui ne signalent rien — et le détecteur de la caméra n'y joue alors aucun rôle.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="363"/>
        <source>Choose what is watched…</source>
        <translation>Choisir ce qui est surveillé…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="371"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>De combien un point de l'image doit changer pour compter. Plus haut remarque davantage, ombres et pluie comprises.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="376"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="379"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>Quelle part de la surface surveillée doit changer pour compter comme un mouvement. 20 ‰, c'est deux pour cent de l'image — à peu près une personne à distance moyenne.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="384"/>
        <source>Motion comes from</source>
        <translation>Le mouvement vient de</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="387"/>
        <source>How leolink learns of motion</source>
        <translation>Comment leolink apprend le mouvement</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="393"/>
        <source>Minimum area</source>
        <translation>Surface minimale</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="395"/>
        <source>When leolink watches the picture</source>
        <translation>Quand leolink observe l'image</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="406"/>
        <source>Raise an event on sound</source>
        <translation>Déclencher un événement au son</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="409"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>Nécessite une caméra avec micro. Ouvre une connexion de plus au flux secondaire.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="414"/>
        <source> dB</source>
        <translation> dB</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="417"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 dB est proche du silence, -20 dB une voix élevée à proximité.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="421"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="465"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="476"/>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="424"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>Maintient l'événement après la fin du bruit, pour qu'un aboiement ne soit pas signalé quatre fois.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="435"/>
        <source>Sound above</source>
        <translation>Son au-dessus de</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="436"/>
        <source>Hold for</source>
        <translation>Maintenir pendant</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="449"/>
        <source>Detection by leolink</source>
        <translation>Détection par leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="457"/>
        <source>Record while motion lasts</source>
        <translation>Enregistrer tant que le mouvement dure</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="460"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>Enregistre sur cet ordinateur à partir du flux en direct : cela fonctionne donc même quand la caméra n'a pas de carte SD.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="598"/>
        <source>Follow the defaults under Settings</source>
        <translation>Suivre les réglages par défaut</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="599"/>
        <source>Use this camera&apos;s own</source>
        <translation>Utiliser ceux de cette caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="612"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="622"/>
        <source>Reactions</source>
        <translation>Réactions</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="614"/>
        <source>What happens on an event</source>
        <translation>Ce qui se passe lors d'un événement</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="629"/>
        <source>Muted</source>
        <translation>Muette</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="644"/>
        <source>Volume</source>
        <translation>Volume</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="646"/>
        <source>Sound in leolink</source>
        <translation>Son dans leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="650"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>Les deux mêmes commandes se trouvent sur la tuile de la caméra, où elles sont plus vite atteintes. Les caméras démarrent muettes : ouvrir un mur de caméras ne doit pas remplir la pièce du son de chacune d'elles.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="660"/>
        <source>Playback</source>
        <translation>Lecture</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="720"/>
        <source>Main stream</source>
        <translation>Flux principal</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="721"/>
        <source>Sub stream</source>
        <translation>Flux secondaire</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="726"/>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="740"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2248"/>
        <source>Brightness</source>
        <translation>Luminosité</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="741"/>
        <source>Contrast</source>
        <translation>Contraste</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="742"/>
        <source>Saturation</source>
        <translation>Saturation</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="743"/>
        <source>Sharpness</source>
        <translation>Netteté</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <source>Hue</source>
        <translation>Teinte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="746"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="801"/>
        <source>Picture</source>
        <translation>Image</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Exposure and orientation</source>
        <translation>Exposition et orientation</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="758"/>
        <source>Day / night</source>
        <translation>Jour / nuit</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="759"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>« Auto » passe à l'infrarouge à mesure que la lumière baisse. Forcer la couleur la nuit donne une image trop sombre pour servir ; forcer le noir et blanc le jour perd la couleur pour rien.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="764"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="794"/>
        <source>Automatic</source>
        <translation>Automatique</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="765"/>
        <source>Always colour</source>
        <translation>Toujours en couleur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="766"/>
        <source>Always black and white</source>
        <translation>Toujours en noir et blanc</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="767"/>
        <source>Anti-flicker</source>
        <translation>Anti-scintillement</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="768"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>Faites correspondre à la fréquence de votre secteur — 50 Hz en Europe — sinon l'éclairage intérieur battra contre l'obturateur et l'image pulsera.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="772"/>
        <source>Exposure</source>
        <translation>Exposition</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="773"/>
        <source>Mirror</source>
        <translation>Miroir</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="774"/>
        <source>Flip</source>
        <translation>Retourner</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="775"/>
        <source>For a camera mounted upside down.</source>
        <translation>Pour une caméra montée à l'envers.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="776"/>
        <source>Backlight compensation</source>
        <translation>Compensation de contre-jour</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="777"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>Aide quand le sujet se détache sur une fenêtre ou un ciel lumineux.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="779"/>
        <source>Noise reduction</source>
        <translation>Réduction du bruit</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>Nettoie une image sombre, au prix d'un flou sur tout ce qui bouge.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="782"/>
        <source>Rotation</source>
        <translation>Rotation</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="783"/>
        <source>Dynamic contrast</source>
        <translation>Contraste dynamique</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="787"/>
        <source>Infrared illumination</source>
        <translation>Éclairage infrarouge</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="789"/>
        <source>Infrared lamps</source>
        <translation>Lampes infrarouges</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="790"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>« Auto » les allume à la tombée du jour. Éteignez-les si la caméra regarde à travers une vitre — le reflet l'aveugle.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="795"/>
        <source>Always on</source>
        <translation>Toujours allumées</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="796"/>
        <source>Always off</source>
        <translation>Toujours éteintes</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="810"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1911"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2190"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2202"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2255"/>
        <source>User</source>
        <translation>Utilisateur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="810"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="869"/>
        <source>Rights</source>
        <translation>Droits</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="817"/>
        <source>Add…</source>
        <translation>Ajouter…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="818"/>
        <source>Change password…</source>
        <translation>Changer le mot de passe…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="819"/>
        <source>Delete</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="833"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>Ce sont des comptes sur la caméra, pas dans leolink. Un compte spectateur peut regarder mais ne rien changer — utile pour tout ce qui n'a besoin que de voir l'image, afin qu'un mot de passe stocké ne puisse pas se retourner contre les réglages de la caméra.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="850"/>
        <source>Users</source>
        <translation>Utilisateurs</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="857"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="862"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="869"/>
        <source>New user</source>
        <translation>Nouvel utilisateur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="857"/>
        <source>User name</source>
        <translation>Nom d'utilisateur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="862"/>
        <source>Password for %1</source>
        <translation>Mot de passe de %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="874"/>
        <source>Creating %1…</source>
        <translation>Création de %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="889"/>
        <source>Change password</source>
        <translation>Changer le mot de passe</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="889"/>
        <source>New password for %1</source>
        <translation>Nouveau mot de passe de %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="898"/>
        <source>This is the account leolink uses</source>
        <translation>C'est le compte qu'utilise leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="899"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>Changez-le ici et leolink restera dehors jusqu'à ce que le nouveau mot de passe soit saisi sous Caméras également.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="903"/>
        <source>Changing the password for %1…</source>
        <translation>Changement du mot de passe de %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="916"/>
        <source>Cannot delete this account</source>
        <translation>Impossible de supprimer ce compte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="917"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink est connecté en tant que « %1 ». Le supprimer couperait immédiatement la liaison avec cette caméra.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="922"/>
        <source>Delete user</source>
        <translation>Supprimer l'utilisateur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="923"/>
        <source>Delete “%1” from the camera?</source>
        <translation>Supprimer « %1 » de la caméra ?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="927"/>
        <source>Deleting %1…</source>
        <translation>Suppression de %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="934"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1342"/>
        <source>Format the SD card</source>
        <translation>Formater la carte SD</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="936"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Effacer tout ce qui est sur la carte de %1 ?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="939"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>Chaque enregistrement de la carte est supprimé. C'est irréversible, et rien de ce qui n'a pas déjà été téléchargé ne pourra être récupéré.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="942"/>
        <source>Erase</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="949"/>
        <source>Formatting…</source>
        <translation>Formatage…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="959"/>
        <source>Wi-Fi signal</source>
        <translation>Signal Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="963"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1287"/>
        <source>Reading…</source>
        <translation>Lecture…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="967"/>
        <source>Connection</source>
        <translation>Connexion</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="980"/>
        <source>Scan</source>
        <translation>Explorer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="984"/>
        <source>Join network</source>
        <translation>Rejoindre le réseau</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="998"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1032"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1921"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1000"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1912"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2203"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2219"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2256"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1003"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1009"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>C'est la caméra qui explore, pas cet ordinateur — ce qui compte, c'est ce qu'elle atteint. Le mot de passe est essayé avant d'être enregistré : une faute de frappe est donc refusée au lieu de laisser la caméra sans aucun réseau.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1017"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>Les adresses et les ports se lisent ici mais se modifient dans l'interface web de la caméra. Se tromper sur l'un d'eux sort complètement la caméra du réseau, et le seul retour possible est la pointe de réinitialisation — une boîte d'avertissement ne remplace pas l'écran du fabricant sur ce point.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>strong</source>
        <translation>fort</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1063"/>
        <source>good</source>
        <translation>bon</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>fair</source>
        <translation>moyen</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1065"/>
        <source>weak</source>
        <translation>faible</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1066"/>
        <source>unknown</source>
        <translation>inconnu</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1120"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1125"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>, %n point d'accès</numerusform><numerusform>, %n points d'accès</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1130"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>Signal tel que la caméra l'entend : %1 sur 4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1132"/>
        <source>Encryption: %1</source>
        <translation>Chiffrement : %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1134"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>Entendu depuis %n point d'accès — un réseau, plusieurs nœuds. C'est le plus fort qui est affiché.</numerusform><numerusform>Entendu depuis %n points d'accès — un réseau, plusieurs nœuds. C'est le plus fort qui est affiché.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1148"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>Certains noms ont été entendus depuis plusieurs points d'accès — c'est un maillage. La caméra rejoint le nom, pas un nœud précis ; le maillage décide auquel elle parle et la transfère au besoin. Pour trouver le meilleur endroit, déplacez la caméra et surveillez « Signal Wi-Fi » ci-dessus : c'est la liaison qu'elle a réellement.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1158"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>%n réseau trouvé, le plus fort en premier.</numerusform><numerusform>%n réseaux trouvés, le plus fort en premier.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1166"/>
        <source>scanning…</source>
        <translation>exploration…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1169"/>
        <source>The camera is scanning for networks…</source>
        <translation>La caméra cherche des réseaux…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1180"/>
        <source>Change the camera&apos;s network</source>
        <translation>Changer le réseau de la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1182"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Déplacer %1 vers « %2 » ?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1184"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>La caméra teste d'abord le mot de passe et refuse s'il est faux : c'est donc moins risqué qu'il n'y paraît.

Elle disparaîtra tout de même une minute le temps de se reconnecter, et si le nouveau réseau lui attribue une autre adresse, il faudra la mettre à jour ici ensuite.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1190"/>
        <source>Join</source>
        <translation>Rejoindre</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1198"/>
        <source>Testing the password on the camera…</source>
        <translation>Test du mot de passe sur la caméra…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1216"/>
        <source>Link</source>
        <translation>Liaison</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1217"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1218"/>
        <source>Netmask</source>
        <translation>Masque de sous-réseau</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1219"/>
        <source>Gateway</source>
        <translation>Passerelle</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1220"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1221"/>
        <source>DNS</source>
        <translation>DNS</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1222"/>
        <source>Network name</source>
        <translation>Nom du réseau</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1243"/>
        <source>Ports</source>
        <translation>Ports</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1245"/>
        <source>The camera reported nothing.</source>
        <translation>La caméra n'a rien signalé.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1253"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>Restart the camera</source>
        <translation>Redémarrer la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1259"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>La caméra quitte le réseau pendant une minute environ et revient d'elle-même. Les enregistrements de sa carte SD ne sont pas touchés et les réglages sont conservés.

Cela vaut la peine d'essayer quand une caméra ne répond plus, refuse de nouvelles connexions ou s'est déréglée après une mise à jour du micrologiciel.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1267"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1480"/>
        <source>Restart</source>
        <translation>Redémarrer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1278"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>La remise aux réglages d'usine n'est pas proposée ici. Elle efface aussi les réglages réseau, et une caméra qui a oublié son Wi-Fi doit être décrochée et rejointe par câble — si vous y tenez vraiment, passez par l'interface web de la caméra.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1289"/>
        <source>Condition</source>
        <translation>État</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1294"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1362"/>
        <source>Not checked.</source>
        <translation>Non vérifié.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1297"/>
        <source>Check for updates</source>
        <translation>Rechercher des mises à jour</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1299"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>C'est la caméra qui interroge Reolink, pas cet ordinateur — il lui faut donc sa propre sortie vers internet.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1303"/>
        <source>Asking Reolink…</source>
        <translation>Interrogation de Reolink…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1308"/>
        <source>Install update</source>
        <translation>Installer la mise à jour</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1312"/>
        <source>Install firmware</source>
        <translation>Installer le micrologiciel</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Mettre à jour le micrologiciel de %1 ?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1316"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>La caméra télécharge la mise à jour elle-même et redémarre. Elle sera injoignable plusieurs minutes.

Ne lui coupez pas le courant pendant la mise à jour — une caméra interrompue en pleine écriture doit en général repartir au service après-vente.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1321"/>
        <source>Install</source>
        <translation>Installer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1336"/>
        <source>Firmware</source>
        <translation>Micrologiciel</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1346"/>
        <source>Storage</source>
        <translation>Stockage</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1349"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>Le formatage efface tous les enregistrements de la carte. Il n'y a ni retour en arrière ni confirmation de la caméra ensuite.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1366"/>
        <source>Ask the camera</source>
        <translation>Demander à la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1370"/>
        <source>Copy the list</source>
        <translation>Copier la liste</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1373"/>
        <source>Copied.</source>
        <translation>Copié.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1381"/>
        <source>What this camera supports</source>
        <translation>Ce que cette caméra prend en charge</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1384"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>Le micrologiciel Reolink diffère énormément d'un modèle à l'autre, et le seul moyen fiable de savoir ce qu'une caméra sait faire est de le lui demander. S'il manque à leolink quelque chose que votre caméra possède manifestement, c'est cette liste, dans un signalement de bogue, qui rend l'ajout possible.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1401"/>
        <source>Maintenance</source>
        <translation>Maintenance</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1432"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>Interrogation sur %n commande…</numerusform><numerusform>Interrogation sur %n commandes…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1449"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>Pris en charge (%1) :
%2

Non pris en charge (%3) :
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1475"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Redémarrer %1 ?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1477"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>L'image disparaîtra environ une minute. Tout enregistrement en cours s'arrêtera.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1489"/>
        <source>Asking %1 to restart…</source>
        <translation>Demande de redémarrage à %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1567"/>
        <source>On-screen text</source>
        <translation>Texte à l'écran</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1569"/>
        <source>Background</source>
        <translation>Fond</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1570"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>Dessine un cadre derrière le texte pour qu'il reste lisible sur une scène claire.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1572"/>
        <source>Watermark</source>
        <translation>Filigrane</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1573"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>Incruste une marque dans l'enregistrement lui-même.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1577"/>
        <source>Privacy areas…</source>
        <translation>Zones privées…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1580"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>Parties de la vue que la caméra masque avant que quoi que ce soit n'en sorte.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1591"/>
        <source>Privacy</source>
        <translation>Vie privée</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1595"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>Masqué dans la caméra elle-même : la partie couverte manque donc dans tous les visionneurs et tous les enregistrements — la fenêtre d'un voisin, ou un bureau qui n'a rien à faire sur la vidéo.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1602"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>La caméra grave ceci dans l'image : cela apparaît donc dans chaque enregistrement et dans chaque logiciel — pas seulement ici.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1610"/>
        <source>Overlay</source>
        <translation>Incrustation</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1619"/>
        <source>Motion detection in the camera</source>
        <translation>Détection de mouvement dans la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="392"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1621"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1661"/>
        <source>Sensitivity</source>
        <translation>Sensibilité</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="466"/>
        <source>nothing</source>
        <translation>rien</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="469"/>
        <source>The seconds leading up to the trigger — usually the part that shows how someone got there. The past cannot be recorded after the fact, so anything above zero keeps the stream running into a buffer: one more connection to the camera, and a little disk.</source>
        <translation>Les secondes qui précèdent le déclenchement — en général la partie qui montre comment quelqu'un est arrivé là. Le passé ne s'enregistre pas après coup : toute valeur supérieure à zéro fait donc couler le flux en continu dans un tampon, soit une connexion de plus à la caméra et un peu de disque.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="479"/>
        <source>So an event does not stop mid-scene. Motion that resumes within this time continues the same file instead of starting a second.</source>
        <translation>Pour qu'un événement ne s'arrête pas au milieu d'une scène. Un mouvement qui reprend dans ce délai continue le même fichier au lieu d'en ouvrir un second.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="491"/>
        <source>Include before</source>
        <translation>Inclure avant</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="494"/>
        <source>When something happens</source>
        <translation>Quand il se passe quelque chose</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="498"/>
        <source>Record without stopping</source>
        <translation>Enregistrer sans interruption</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="503"/>
        <source> h</source>
        <translation> h</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="506"/>
        <source>How far back the archive reaches. Once it is this old, a file is deleted to make room for the newest one.</source>
        <translation>Jusqu'où remonte l'archive. Un fichier de cet âge est supprimé pour faire place au plus récent.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="511"/>
        <source> min</source>
        <translation> min</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="514"/>
        <source>The archive is a run of files, not one — a file cannot be trimmed at the front, so keeping a day in one of them would mean rewriting it every minute. Shorter files find a moment more precisely; longer ones are fewer to scroll past.</source>
        <translation>L'archive est une suite de fichiers, pas un seul — un fichier ne se coupe pas par l'avant, garder une journée dans un seul obligerait à le réécrire chaque minute. Des fichiers courts retrouvent un instant plus précisément ; des longs sont moins nombreux à parcourir.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="535"/>
        <source>Keep the last</source>
        <translation>Conserver</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="536"/>
        <source>One file per</source>
        <translation>Un fichier toutes les</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="539"/>
        <source>Round the clock</source>
        <translation>Vingt-quatre heures sur vingt-quatre</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="543"/>
        <source>With both switched on, one buffer serves both: the recording of an event is cut out of the archive, so nothing extra is opened to the camera.

Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>Les deux activés, un seul tampon sert aux deux : l'enregistrement d'un événement est découpé dans l'archive, donc rien de plus n'est ouvert vers la caméra.

Où vont les fichiers est le même pour toutes les caméras et se règle sous Réglages ▸ Enregistrements.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="579"/>
        <source>%1 hours of video. How much disk that is depends on the bit rate, which this camera has not reported yet.</source>
        <translation>%1 heures de vidéo. Ce que cela fait en disque dépend du débit, que cette caméra n'a pas encore indiqué.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="587"/>
        <source>About %1 GB at the %2 kbit/s this stream is set to. Make sure the recordings folder has that much to spare.</source>
        <translation>Environ %1 Go au débit de %2 kbit/s réglé sur ce flux. Le dossier des enregistrements devrait avoir cette place libre.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1622"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>Plus haut remarque davantage, ombres et phares compris.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1624"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1933"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2141"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2195"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2205"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2211"/>
        <source>Switched on</source>
        <translation>Activée</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1630"/>
        <source>Choose the area…</source>
        <translation>Choisir la zone…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1632"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>Les parties de l'image que la caméra surveille. Tout ce qui est hors de la zone est ignoré — une route au bord du champ, un arbre dans le vent, la porte d'un voisin.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1638"/>
        <source>Where it looks</source>
        <translation>Où elle regarde</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1642"/>
        <source>Choose the hours…</source>
        <translation>Choisir les heures…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1647"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>Une semaine en heures : dans celles que vous cochez, la caméra signale le mouvement ; dans les autres, elle se tait. Rien à voir avec sa sensibilité — cela se règle plus bas.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1654"/>
        <source>When it reports at all</source>
        <translation>Quand elle signale quoi que ce soit</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1661"/>
        <source>From</source>
        <translation>Du</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1661"/>
        <source>To</source>
        <translation>À</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1673"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>Au fil d'une journée, la caméra peut se déclencher plus ou moins facilement. C'est ainsi qu'on évite que des phares déclenchent tout la nuit sans la rendre aveugle le jour. Le nombre de plages est fixé par la caméra ; leurs horaires et leurs sensibilités vous appartiennent.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1681"/>
        <source>How readily it triggers</source>
        <translation>Avec quelle facilité elle se déclenche</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1689"/>
        <source>What it recognises</source>
        <translation>Ce qu'elle reconnaît</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1691"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1824"/>
        <source>People</source>
        <translation>Personnes</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1825"/>
        <source>Vehicles</source>
        <translation>Véhicules</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1693"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1826"/>
        <source>Animals</source>
        <translation>Animaux</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1694"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1827"/>
        <source>Faces</source>
        <translation>Visages</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1697"/>
        <source>Camera-side detection</source>
        <translation>Détection dans la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1706"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>Il s'agit de la détection propre à la caméra, celle qu'elle signale par ONVIF. L'analyse de l'image faite par leolink se règle à part, sous Caméras → Événements.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1715"/>
        <source>Detection</source>
        <translation>Détection</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1792"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — zone de détection de la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1793"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>Faites glisser sur l'image pour choisir ce que la caméra surveille. Les zones assombries sont ignorées. C'est la grille propre à la caméra, %1 sur %2, donc plus fine que celle de leolink.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1810"/>
        <source>%1 — when to watch</source>
        <translation>%1 — quand surveiller</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1811"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>Les heures où la caméra signale un mouvement. En dehors, elle voit toujours, mais ne dit rien.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>Any movement</source>
        <translation>Tout mouvement</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1823"/>
        <source>Continuous</source>
        <translation>En continu</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1855"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>Cette caméra tient une semaine distincte pour chaque type d'événement. Laquelle ?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1903"/>
        <source>SIM card</source>
        <translation>Carte SIM</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1905"/>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1906"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>Nécessaire seulement si la carte en demande un. Trois essais faux bloquent la carte, qui réclame alors un PUK que seul votre opérateur détient.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1910"/>
        <source>Access point (APN)</source>
        <translation>Point d'accès (APN)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1913"/>
        <source>Authentication</source>
        <translation>Authentification</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1914"/>
        <source>Use mobile data</source>
        <translation>Utiliser les données mobiles</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1918"/>
        <source>Modem</source>
        <translation>Modem</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1920"/>
        <source>Card</source>
        <translation>Carte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1922"/>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1923"/>
        <source>Signal</source>
        <translation>Signal</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1924"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1925"/>
        <source>Card number</source>
        <translation>Numéro de carte</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1929"/>
        <source>Mobile connection</source>
        <translation>Connexion mobile</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1931"/>
        <source>Data used</source>
        <translation>Données consommées</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1932"/>
        <source>Monthly limit</source>
        <translation>Limite mensuelle</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1940"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;Non testé sur du matériel réel.&lt;/b&gt; Personne dans leolink ne possède de caméra à modem : ceci a donc été écrit d'après le seul protocole. Rien ne peut être abîmé — une commande que la caméra ignore est simplement refusée — mais il se peut tout aussi bien que rien ne s'affiche.

Si votre caméra a une SIM, « Ce que cette caméra prend en charge », sous Maintenance, énumère les commandes que son micrologiciel possède réellement. Cette liste, dans un signalement de bogue, est ce qui permettrait d'achever ceci correctement.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1953"/>
        <source>Mobile data</source>
        <translation>Données mobiles</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1970"/>
        <source>nothing blanked</source>
        <translation>rien de masqué</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1972"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>%n zone masquée</numerusform><numerusform>%n zones masquées</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1974"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n zone, désactivée</numerusform><numerusform>%n zones, désactivées</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2056"/>
        <source>%1 — when to record</source>
        <translation>%1 — quand enregistrer</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2057"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>Les heures où la caméra enregistre sur sa propre carte. Il faut pour cela qu'une carte soit installée ; l'enregistrement sur cet ordinateur se règle sous Caméras → Événements et s'en passe.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2145"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>Enregistrement sur la carte de la caméra</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2147"/>
        <source>Overwrite when full</source>
        <translation>Écraser une fois plein</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2150"/>
        <source>Record before the event</source>
        <translation>Enregistrer avant l'événement</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="492"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2153"/>
        <source>Keep recording after</source>
        <translation>Continuer d'enregistrer pendant</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2140"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2154"/>
        <source>File length</source>
        <translation>Durée des fichiers</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2148"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>Désactivé signifie que l'enregistrement s'arrête simplement dès que la carte est pleine.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2151"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>Conserve les secondes qui précèdent un déclenchement, en général la partie intéressante.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2157"/>
        <source>When to record…</source>
        <translation>Quand enregistrer…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2160"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>Les heures de la semaine où la caméra enregistre d'elle-même sur sa carte.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2170"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>Ceci régit ce que la caméra écrit sur sa propre carte SD. L'enregistrement sur cet ordinateur se règle sous Caméras → Événements et n'a besoin d'aucune carte.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="556"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2178"/>
        <source>Recording</source>
        <translation>Enregistrement</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2186"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2214"/>
        <source>E-mail</source>
        <translation>Courriel</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2188"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2216"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2253"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2310"/>
        <source>Server</source>
        <translation>Serveur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2217"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2254"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2311"/>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2221"/>
        <source>Encrypted</source>
        <translation>Chiffré</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2222"/>
        <source>Not more often than</source>
        <translation>Pas plus souvent que</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2194"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2223"/>
        <source>Attach</source>
        <translation>Joindre</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2251"/>
        <source>FTP upload</source>
        <translation>Envoi FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2204"/>
        <source>Folder</source>
        <translation>Dossier</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2209"/>
        <source>Push notifications</source>
        <translation>Notifications push</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2220"/>
        <source>Send to</source>
        <translation>Envoyer à</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2232"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2239"/>
        <source>Siren</source>
        <translation>Sirène</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2234"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2241"/>
        <source>Sound on an alarm</source>
        <translation>Sonner en cas d'alarme</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2235"/>
        <source>Times</source>
        <translation>Horaires</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2236"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2247"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2258"/>
        <source>Mode</source>
        <translation>Mode</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2244"/>
        <source>Spotlight</source>
        <translation>Projecteur</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2246"/>
        <source>On</source>
        <translation>Allumé</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2257"/>
        <source>Directory</source>
        <translation>Répertoire</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2262"/>
        <source>Push notification</source>
        <translation>Notification push</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2264"/>
        <source>Schedule</source>
        <translation>Programmation</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2270"/>
        <source>Send a test e-mail</source>
        <translation>Envoyer un courriel de test</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2273"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>Demande à la caméra d'envoyer un courriel de test…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2276"/>
        <source>Test the FTP upload</source>
        <translation>Tester l'envoi FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2279"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>Demande à la caméra d'essayer le serveur FTP…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2290"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>Envoyées par la caméra elle-même : elles continuent donc de fonctionner quand cet ordinateur est éteint. Les réactions propres à leolink — commandes, webhooks, MQTT — sont sous Caméras → Événements.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2299"/>
        <source>Alerts</source>
        <translation>Alertes</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2307"/>
        <source>Time server</source>
        <translation>Serveur de temps</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2309"/>
        <source>Synchronise the clock</source>
        <translation>Synchroniser l'horloge</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2312"/>
        <source>Every</source>
        <translation>Tous les</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2316"/>
        <source>Scheduled restart</source>
        <translation>Redémarrage programmé</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2318"/>
        <source>Restart regularly</source>
        <translation>Redémarrer régulièrement</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2319"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>Certaines caméras deviennent capricieuses après des semaines allumées ; un redémarrage hebdomadaire est un remède bon marché.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2322"/>
        <source>Day</source>
        <translation>Jour</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2323"/>
        <source>Hour</source>
        <translation>Heure</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2324"/>
        <source>Minute</source>
        <translation>Minute</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2328"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>Une caméra à l'horloge fausse date mal ses enregistrements, ce qui pèse plus qu'il n'y paraît le jour où il faut en retrouver un.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2336"/>
        <source>Time</source>
        <translation>Heure</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2460"/>
        <source>Ready.</source>
        <translation>Prêt.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2565"/>
        <source>Writing to the camera…</source>
        <translation>Écriture vers la caméra…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2623"/>
        <source>Nothing to write.</source>
        <translation>Rien à écrire.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2640"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>Enregistré. Changer le codeur redémarre le flux : l'image peut donc disparaître un instant.</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>Diagnostic</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>Erreurs seulement</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>Avertissements et erreurs</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>Activité normale</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>Tout</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>Tous les domaines</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>Rechercher…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>Afficher</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>Journalisation détaillée</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>Note chaque requête à la caméra, chaque décision du décodeur et chaque reconnexion. Laissez-la éteinte au quotidien — allumez-la quand quelque chose cloche, reproduisez le problème, puis envoyez le rapport.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>Suivre les nouvelles lignes</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>Copier le rapport</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>Les détails du système et le journal, prêts à coller dans un signalement de bogue.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>Rapport copié.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>Enregistrer le rapport…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>Enregistrer le rapport</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>Fichiers texte (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>Impossible d'écrire %1.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>Enregistré dans %1</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>Ouvrir le dossier du journal</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>Les mots de passe, les jetons de session et les adresses internet sont retirés avant toute écriture : ce rapport peut donc être partagé tel quel. Les adresses de votre propre réseau sont conservées — ce sont d'habitude le premier indice.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%1 lignes sur %2</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>Impossible d'ouvrir une socket UDP pour la recherche.</translation>
    </message>
</context>
<context>
    <name>leolink::EventDispatcher</name>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <location filename="../src/EventActions.cpp" line="108"/>
        <source>Command</source>
        <translation>Commande</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <source>could not be started</source>
        <translation>n'a pas pu être lancée</translation>
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
        <translation>adresse non valide</translation>
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
        <translation>Journal des événements</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>Toutes les caméras</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>Tous les événements</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>Mouvement</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>Avec enregistrement</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>Caméra :</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>Afficher :</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>Actualiser</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>Quand</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>Caméra</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>Événement</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>Média</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>pas d'aperçu</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>Ouvrir l'enregistrement</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>Vider le journal…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>vidéo</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>image</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + image</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>aucun événement enregistré pour l'instant</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>enregistrement seul</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>Enregistrement : %1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation> (fichier manquant)</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>Image : %1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>Ouvrir l'image</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>Rien à ouvrir</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>Le fichier de cet événement n'est plus là.</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>Vider le journal des événements</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>Supprimer tout l'historique des événements ?

Les vidéos et les images enregistrées restent sur le disque — seul le journal est vidé.</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>Application</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>Interface de la caméra</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>Événements ONVIF</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>Détection</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>Enregistrement</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>Actions sur événement</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>Interface utilisateur</translation>
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
        <translation>Échec de %1 : %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="111"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>Aucune caméra n'est encore configurée.

Utilisez « Caméras… » pour en ajouter une.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;File</source>
        <translation>&amp;Fichier</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="257"/>
        <source>&amp;Cameras…</source>
        <translation>&amp;Caméras…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="262"/>
        <source>&amp;Settings…</source>
        <translation>&amp;Réglages…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="268"/>
        <source>&amp;Save snapshots…</source>
        <translation>&amp;Enregistrer des captures…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="273"/>
        <source>&amp;Record all cameras</source>
        <translation>&amp;Enregistrer toutes les caméras</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="280"/>
        <source>&amp;Event log…</source>
        <translation>&amp;Journal des événements…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>Enregistrements sur la &amp;caméra…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="290"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>Parcourez ce qui est stocké sur la carte SD de la caméra.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="294"/>
        <location filename="../src/MainWindow.cpp" line="727"/>
        <location filename="../src/MainWindow.cpp" line="1925"/>
        <source>No cameras configured</source>
        <translation>Aucune caméra configurée</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Which camera</source>
        <translation>Quelle caméra</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="305"/>
        <source>Show recordings from</source>
        <translation>Afficher les enregistrements de</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="317"/>
        <source>Open &amp;recordings folder</source>
        <translation>Ouvrir le dossier des enre&amp;gistrements</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="325"/>
        <source>&amp;Quit</source>
        <translation>&amp;Quitter</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;View</source>
        <translation>&amp;Affichage</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="332"/>
        <source>&amp;Full screen</source>
        <translation>&amp;Plein écran</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="371"/>
        <source>Show &amp;menu bar</source>
        <translation>Afficher la barre de &amp;menu</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="385"/>
        <source>Show &amp;toolbar</source>
        <translation>Afficher la barre d'&amp;outils</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="394"/>
        <source>Show status &amp;bar</source>
        <translation>Afficher la barre d'é&amp;tat</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="403"/>
        <source>Hide window &amp;decoration</source>
        <translation>Masquer la &amp;décoration de fenêtre</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="415"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>Faites glisser la bande sous une caméra pour déplacer la fenêtre. Ctrl+Maj+D ramène le cadre, Ctrl+M le menu.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Help</source>
        <translation>Aid&amp;e</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="424"/>
        <source>&amp;Online handbook</source>
        <translation>Manuel en &amp;ligne</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="431"/>
        <source>&amp;Protocol notes</source>
        <translation>Notes de &amp;protocole</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="437"/>
        <source>&amp;Diagnostics…</source>
        <translation>&amp;Diagnostic…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="440"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>Ce que leolink et les caméras ont fait — et un rapport à joindre à un signalement de bogue.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="444"/>
        <source>&amp;Report a problem</source>
        <translation>&amp;Signaler un problème</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>Report a problem</source>
        <translation>Signaler un problème</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;Joignez un rapport de diagnostic&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="453"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>Il consigne ce qu'est votre machine, ce que les caméras ont répondu et où les choses ont dérapé — mots de passe et adresses déjà retirés. Sans lui, la plupart des signalements ne peuvent pas être suivis.

Si vous savez provoquer le problème, activez d'abord la journalisation détaillée dans la fenêtre de diagnostic, refaites-le survenir, puis copiez le rapport.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Open diagnostics</source>
        <translation>Ouvrir le diagnostic</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="462"/>
        <source>Go to the issue tracker</source>
        <translation>Aller au suivi des problèmes</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="473"/>
        <source>&amp;About leolink</source>
        <translation>À &amp;propos de leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="476"/>
        <source>About leolink</source>
        <translation>À propos de leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="477"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;Un client Linux natif pour les caméras Reolink.&lt;/p&gt;&lt;p&gt;Parle directement les protocoles propres à la caméra : interface HTTP, RTSP et ONVIF sur le réseau local, et le service P2P de Reolink lorsque vous voulez joindre une caméra depuis ailleurs.&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;Manuel&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;Code source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Sans lien avec Reolink, ni approuvé par Reolink.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="489"/>
        <source>Main</source>
        <translation>Principale</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="501"/>
        <source>Ready</source>
        <translation>Prêt</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="517"/>
        <source>Leave full screen</source>
        <translation>Quitter le plein écran</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <location filename="../src/MainWindow.cpp" line="588"/>
        <source>Cameras…</source>
        <translation>Caméras…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="526"/>
        <source>Event log…</source>
        <translation>Journal des événements…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="532"/>
        <location filename="../src/MainWindow.cpp" line="591"/>
        <source>Quit</source>
        <translation>Quitter</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="582"/>
        <source>Show window</source>
        <translation>Afficher la fenêtre</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="751"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n caméra en direct</numerusform><numerusform>%n caméras en direct</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1045"/>
        <source>Esc leaves full screen</source>
        <translation>Échap quitte le plein écran</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1052"/>
        <location filename="../src/MainWindow.cpp" line="1091"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>Double-clic pour la grille · Échap quitte le plein écran</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1089"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Échap quitte le plein écran · double-cliquez sur une caméra pour remplir l'écran</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1114"/>
        <source>Grid view</source>
        <translation>Vue en grille</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1300"/>
        <location filename="../src/MainWindow.cpp" line="1318"/>
        <location filename="../src/MainWindow.cpp" line="1556"/>
        <source>Cannot create %1</source>
        <translation>Impossible de créer %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1446"/>
        <source>Recording %1</source>
        <translation>Enregistrement de %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1368"/>
        <location filename="../src/MainWindow.cpp" line="1454"/>
        <source>Saved %1</source>
        <translation>%1 enregistré</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1460"/>
        <location filename="../src/MainWindow.cpp" line="1591"/>
        <source>Recording stopped</source>
        <translation>Enregistrement arrêté</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1467"/>
        <source>%1: %2</source>
        <translation>%1 : %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1572"/>
        <source>Recording started</source>
        <translation>Enregistrement démarré</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1590"/>
        <source>Recording all cameras</source>
        <translation>Enregistrement de toutes les caméras</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1671"/>
        <source>%1 at %2</source>
        <translation>%1 chez %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1691"/>
        <source>Motion detected</source>
        <translation>Mouvement détecté</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1703"/>
        <source>Sound detected</source>
        <translation>Son détecté</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1726"/>
        <source>Menu bar hidden</source>
        <translation>Barre de menu masquée</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1727"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>La barre de menu et la barre d'outils étant toutes deux masquées, appuyez sur Ctrl+M pour ramener le menu.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1746"/>
        <source>Cannot save</source>
        <translation>Enregistrement impossible</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1747"/>
        <source>Settings could not be written to %1.</source>
        <translation>Les réglages n'ont pas pu être écrits dans %1.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1860"/>
        <source>Play through %1</source>
        <translation>Diffuser via %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1861"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>Fichiers son (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Tous les fichiers (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1873"/>
        <source>Speaking through the camera…</source>
        <translation>Parole en cours à travers la caméra…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1880"/>
        <source>Finished.</source>
        <translation>Terminé.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2015"/>
        <source>Nothing to capture</source>
        <translation>Rien à capturer</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2020"/>
        <source>Save snapshots to</source>
        <translation>Enregistrer les captures dans</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="2038"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>%n capture enregistrée</numerusform><numerusform>%n captures enregistrées</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2056"/>
        <source>Welcome to leolink</source>
        <translation>Bienvenue dans leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2058"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Aucune caméra n'est encore configurée.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2060"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>Ajoutez une caméra avec son adresse, son nom d'utilisateur et son mot de passe. leolink parle à la caméra directement sur votre réseau — aucun compte dans le nuage n'intervient.&lt;p&gt;Le manuel explique ce que fait chaque option.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2064"/>
        <source>Add camera…</source>
        <translation>Ajouter une caméra…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2065"/>
        <source>Open handbook</source>
        <translation>Ouvrir le manuel</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2141"/>
        <source>leolink is still running</source>
        <translation>leolink tourne toujours</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="2142"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>Les caméras continuent d'enregistrer. Utilisez l'icône de la zone de notification pour revenir.</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>aucune image disponible</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — zones privées</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>Tracez les parties de la vue que la caméra doit masquer. Elle les noircit avant que quoi que ce soit ne quitte l'appareil : elles manquent donc dans l'image en direct, dans les enregistrements et dans tout autre logiciel — y compris l'application du fabricant.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>Retirer la dernière</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>Tout retirer</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>Récupération d'une image depuis %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>Pas d'image : %1 — les zones peuvent quand même être tracées.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%1 zones sur %2</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>ffmpeg n'est pas installé : la détection de mouvement est donc indisponible.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>Aucune adresse de flux pour %1.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="131"/>
        <source>Motion detection stopped: %1</source>
        <translation>Détection de mouvement arrêtée : %1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="156"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>Impossible de lancer ffmpeg pour la détection de mouvement.</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="168"/>
        <source>ONVIF subscription failed.</source>
        <translation>Échec de l'abonnement ONVIF.</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>Courtier ou sujet MQTT non renseigné.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>Le courtier MQTT n'a pas répondu.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>MQTT : %1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>MQTT : réponse inattendue du courtier.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>MQTT a refusé la connexion : %1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — enregistrements sur la caméra</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>Flux principal</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>Flux secondaire</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>Rechercher</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>Du</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>au</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>Début</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>Fichier</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>Lire</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>Télécharger…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>Choisissez une période et appuyez sur Rechercher. Il n'y a d'enregistrements que si la caméra a une carte SD installée.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>Interrogation de %1…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>Rien trouvé sur cette période. Soit rien n'a été enregistré, soit la caméra n'a pas de carte SD.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>%n enregistrement trouvé.</numerusform><numerusform>%n enregistrements trouvés.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>Aucune session avec la caméra — lancez d'abord une recherche.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>Pas de lecteur</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>mpv est introuvable. L'enregistrement se trouve à :

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>Enregistrer la vidéo</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>Impossible d'écrire dans %1.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>Enregistré dans %1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>Échec du téléchargement : %1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>Réglages</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>Fenêtre</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>En cas de mouvement</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>Réactions</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>Enregistrements</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>Général</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>Afficher la barre de menu</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>Ctrl+M bascule cela à tout moment.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>Afficher la barre d'outils</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>Afficher la barre d'état</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>Masquer la décoration de fenêtre</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>Pour les écrans muraux. Ctrl+Maj+D bascule.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>Apparence</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>Afficher une icône dans la zone de notification</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>Fermer la fenêtre la masque au lieu de quitter</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>Réduire masque la fenêtre dans la zone de notification</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>Zone de notification</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>Teinter la tuile en rouge un instant</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>Pour qu'un coup d'œil à un mur de caméras suffise à voir laquelle c'était.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> ms</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>Jouer un son</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>Vide : le son de notification du bureau</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>Parcourir…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>Son à jouer</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>Fichiers son (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Tous les fichiers (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>Pendant</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>Fichier son</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>À l'écran</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>Ramener la fenêtre au premier plan quand un mouvement est détecté</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>Taille précédente</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>Plein écran</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>Revenir en</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>La fenêtre</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>Quelles caméras déclenchent un événement, et comment, se règle pour chacune sous Caméras ▸ Réglages ▸ Détection par leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>Ce que fait leolink quand une caméra signale quelque chose. Une caméra suit ces réglages sauf si son propre dialogue en décide autrement — tous ou aucun, jamais à moitié : les réglages hérités en partie sont les plus difficiles à démêler quand quelque chose ne se déclenche pas.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>Dossier des enregistrements</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>Enregistrements et captures</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>Les enregistrements sont écrits en Matroska sans réencodage : l'image garde la qualité d'origine de la caméra et le processeur reste presque au repos.

Qu'une caméra enregistre ou non est son propre réglage, sous Caméras ▸ Réglages ▸ Réactions.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>Matériel (recommandé)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>Matériel, au choix du pilote</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>Matériel, avec copie des images</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="292"/>
        <source>Software only</source>
        <translation>Logiciel uniquement</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="294"/>
        <source>“Recommended” names the decoder explicitly so that decoding and drawing stay on the same graphics API. Left to itself, mpv may decode through one API and draw through another, which on some cards turns the picture solid green.

If the picture is broken, try the others in turn. “Software only” always works but costs a whole processor core at full resolution.</source>
        <translation>« Recommandé » nomme le décodeur explicitement pour que le décodage et l'affichage restent sur la même interface graphique. Livré à lui-même, mpv peut décoder par l'une et dessiner par l'autre, ce qui, sur certaines cartes, rend l'image d'un vert uni.

Si l'image est cassée, essayez les autres à tour de rôle. « Logiciel uniquement » marche toujours mais coûte un cœur de processeur entier en pleine résolution.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>Préférer la faible latence à la fluidité</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>Réduit la mise en tampon au minimum. Désactivez-le si un flux à haut débit saccade sur un réseau chargé.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>Décodage</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>Langue du système</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>Prend effet au redémarrage de leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>Journalisation détaillée</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>Note chaque requête à la caméra, chaque décision du décodeur et chaque reconnexion, dans ~/.local/share/leolink/leolink.log.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>Ouvrir le diagnostic…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>Les erreurs et les avertissements sont toujours notés. La journalisation détaillée ajoute la conversation avec la caméra — allumez-la quand quelque chose cloche, reproduisez-le, puis envoyez le rapport depuis Aide ▸ Diagnostic. Les mots de passe et les jetons sont retirés avant toute écriture.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>Diagnostic</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>ffmpeg n'est pas installé : l'enregistrement est donc indisponible.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>Aucune adresse de flux pour %1.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="102"/>
        <source>Recording failed: %1</source>
        <translation>Échec de l'enregistrement : %1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="134"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>L'enregistrement n'a produit aucune donnée (ffmpeg est sorti avec %1).</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="150"/>
        <source>Could not start ffmpeg.</source>
        <translation>Impossible de lancer ffmpeg.</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="255"/>
        <source>File format not recognised.</source>
        <translation>Format de fichier non reconnu.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="256"/>
        <source>Invalid input.</source>
        <translation>Saisie non valide.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="257"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>La caméra n'a plus de session libre. Elle n'en accepte qu'une poignée à la fois, partagées avec l'application mobile et sa page web. Fermez-les, ou attendez une minute que les anciennes expirent.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="261"/>
        <source>Session expired.</source>
        <translation>Session expirée.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="262"/>
        <source>Wrong user name or password.</source>
        <translation>Nom d'utilisateur ou mot de passe incorrect.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="263"/>
        <source>Timed out.</source>
        <translation>Délai dépassé.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="264"/>
        <source>This firmware does not support that command.</source>
        <translation>Ce micrologiciel ne prend pas en charge cette commande.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="265"/>
        <source>Could not read the configuration.</source>
        <translation>Impossible de lire la configuration.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="266"/>
        <source>Could not verify the configuration.</source>
        <translation>Impossible de vérifier la configuration.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="267"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>Une partie de la caméra n'a pas répondu. Selon ce qui a été demandé, cela signifie qu'aucune carte SD n'est installée, ou que la caméra n'a pas de sortie vers internet.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="270"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>Non autorisé — ce modèle n'a pas le matériel nécessaire.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="271"/>
        <source>Account invalid, log in again.</source>
        <translation>Compte non valide, reconnectez-vous.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="272"/>
        <source>User name already taken.</source>
        <translation>Ce nom d'utilisateur est déjà pris.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="273"/>
        <source>Maximum number of users reached.</source>
        <translation>Nombre maximal d'utilisateurs atteint.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="274"/>
        <source>Camera busy, try again shortly.</source>
        <translation>Caméra occupée, réessayez sous peu.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="275"/>
        <source>IP address conflict.</source>
        <translation>Conflit d'adresses IP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="276"/>
        <source>Configuration test failed.</source>
        <translation>Échec du test de configuration.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="277"/>
        <source>FTP login failed.</source>
        <translation>Échec de la connexion FTP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="278"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP n'a pas pu créer le répertoire.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="279"/>
        <source>FTP upload failed.</source>
        <translation>Échec de l'envoi FTP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="280"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP n'a pas pu joindre le serveur.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="281"/>
        <source>Camera reported error %1.</source>
        <translation>La caméra a signalé l'erreur %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="537"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>La caméra ne répond pas aux requêtes en ce moment. Elle fait cela quand elle en a reçu trop d'un coup ; elle se remet d'elle-même après un instant.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="544"/>
        <source>Cannot reach %1: %2</source>
        <translation>Impossible de joindre %1 : %2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="558"/>
        <source>Unexpected reply from %1.</source>
        <translation>Réponse inattendue de %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="661"/>
        <source>Login returned no token.</source>
        <translation>La connexion n'a renvoyé aucun jeton.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="701"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — micrologiciel %2, %3 canaux</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="989"/>
        <source>The camera could not join that network: %1</source>
        <translation>La caméra n'a pas pu rejoindre ce réseau : %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="999"/>
        <source>E-mail</source>
        <translation>Courriel</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1009"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1049"/>
        <source>Update available: %1</source>
        <translation>Mise à jour disponible : %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1050"/>
        <source>The firmware is up to date.</source>
        <translation>Le micrologiciel est à jour.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1067"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>Mise à jour en cours. La caméra redémarrera d'elle-même et sera injoignable plusieurs minutes. Ne lui coupez pas le courant.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="1201"/>
        <source>Snapshot failed.</source>
        <translation>Échec de la capture.</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>Toute la semaine</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>Jamais</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>La nuit</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>Heures de bureau</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>Week-ends</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>Inverser</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>De 22:00 à 06:00, tous les jours.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>De 08:00 à 17:00, du lundi au vendredi.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>Rien n'est sélectionné — cela ne s'exécutera jamais.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>Toujours actif.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>%n heure par semaine.</numerusform><numerusform>%n heures par semaine.</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>Cette caméra ne propose pas ces réglages.</translation>
    </message>
</context>
<context>
    <name>leolink::SegmentBuffer</name>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="81"/>
        <source>ffmpeg is not installed, so continuous recording is unavailable.</source>
        <translation>ffmpeg n'est pas installé : l'enregistrement continu est donc indisponible.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="86"/>
        <source>No stream address for %1.</source>
        <translation>Aucune adresse de flux pour %1.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="90"/>
        <location filename="../src/SegmentBuffer.cpp" line="279"/>
        <source>Cannot write to %1.</source>
        <translation>Impossible d'écrire dans %1.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="255"/>
        <source>Nothing had been buffered yet.</source>
        <translation>Rien n'avait encore été mis en tampon.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="270"/>
        <source>That moment is no longer in the buffer.</source>
        <translation>Ce moment n'est plus dans le tampon.</translation>
    </message>
    <message>
        <location filename="../src/SegmentBuffer.cpp" line="325"/>
        <source>The recording could not be cut out of the buffer.</source>
        <translation>L'enregistrement n'a pas pu être découpé dans le tampon.</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="38"/>
        <location filename="../src/SettingsDialog.cpp" line="44"/>
        <source>Cameras</source>
        <translation>Caméras</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="45"/>
        <source>Layout</source>
        <translation>Disposition</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="96"/>
        <source>Add</source>
        <translation>Ajouter</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="97"/>
        <source>Remove</source>
        <translation>Retirer</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="101"/>
        <source>Scan network…</source>
        <translation>Explorer le réseau…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="103"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>Demande au réseau quelles caméras ONVIF sont présentes. Une seule sonde multidiffusion est envoyée ; les appareils qui restent muets ne sont jamais contactés.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="118"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 ou camera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="123"/>
        <source>optional: pass show reolink/hall</source>
        <translation>facultatif : pass show reolink/entree</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>Si elle est indiquée, cette commande est exécutée et sa sortie sert de mot de passe. Le secret reste ainsi hors du fichier de configuration.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <source>This configuration file</source>
        <translation>Ce fichier de configuration</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>A command</source>
        <translation>Une commande</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="132"/>
        <source>The system keyring</source>
        <translation>Le trousseau du système</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="135"/>
        <source>Where this camera&apos;s password is kept.

The configuration file holds it in clear text, readable only by you (mode 600). A command — pass, secret-tool, anything that prints the password — keeps it out of the file. The system keyring stores it in the desktop&apos;s own secret service.

The keyring is usually locked until somebody logs in, so a machine that starts unattended and shows cameras on a wall is better served by the file or by a command.</source>
        <translation>Où le mot de passe de cette caméra est conservé.

Le fichier de configuration le garde en clair, lisible par vous seul (mode 600). Une commande — pass, secret-tool, tout ce qui affiche le mot de passe — le laisse hors du fichier. Le trousseau du système le range dans le service de secrets du bureau.

Un trousseau est habituellement verrouillé jusqu'à ce que quelqu'un ouvre une session : une machine qui démarre sans surveillance pour afficher des caméras sur un mur est mieux servie par le fichier ou par une commande.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="161"/>
        <source>optional, for P2P access</source>
        <translation>facultatif, pour l'accès P2P</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="166"/>
        <source>Which input of the device this is. Leave at 0 for a camera.

An NVR answers for all of its cameras on one address, one login and one port, and the channel is the only thing that tells them apart. Testing the connection to a recorder offers to add them all, so this rarely has to be set by hand.</source>
        <translation>De quelle entrée de l'appareil il s'agit. Laissez 0 pour une caméra.

Un NVR répond pour toutes ses caméras sur une seule adresse, un seul identifiant et un seul port, et le canal est la seule chose qui les distingue. Tester la connexion à un enregistreur propose de les ajouter toutes : il est donc rarement nécessaire de le régler à la main.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>Toute adresse que libmpv sait ouvrir. À utiliser pour des caméras d'autres marques, un flux de NVR ou un fichier local.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="179"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>Flux secondaire (faible débit)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="180"/>
        <source>Main stream (full resolution)</source>
        <translation>Flux principal (pleine résolution)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="183"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="184"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV (latence plus faible)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="185"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan (le protocole propre à la caméra)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="187"/>
        <location filename="../src/SettingsDialog.cpp" line="210"/>
        <source>Custom URL</source>
        <translation>Adresse personnalisée</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="189"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>RTSP convient à la plupart des caméras et c'est ce qu'il faut essayer en premier.

HTTP-FLV n'a besoin que du port 80, ce qui aide là où RTSP est bloqué.

Baichuan est ce que parle l'application de Reolink. C'est la réponse pour les caméras qui laissent RTSP éteint — les modèles sur batterie le font — et il n'occupe aucune des rares sessions web de la caméra. Vidéo seulement : le son passe toujours par RTSP.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="196"/>
        <source>Use HTTPS for the control API</source>
        <translation>Utiliser HTTPS pour l'interface de commande</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="197"/>
        <source>Show this camera</source>
        <translation>Afficher cette caméra</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="200"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="201"/>
        <source>Host</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="202"/>
        <source>User</source>
        <translation>Utilisateur</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="203"/>
        <source>Password kept in</source>
        <translation>Mot de passe conservé dans</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="204"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="205"/>
        <source>Password command</source>
        <translation>Commande de mot de passe</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="206"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <source>Channel</source>
        <translation>Canal</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="208"/>
        <source>Stream</source>
        <translation>Flux</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="209"/>
        <source>Transport</source>
        <translation>Transport</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="223"/>
        <source>Test connection</source>
        <translation>Tester la connexion</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>Settings for this camera…</source>
        <translation>Réglages de cette caméra…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="237"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>Détection, réactions et enregistrement dans leolink, ainsi que le codeur, l'image et les horaires de la caméra elle-même.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="267"/>
        <location filename="../src/SettingsDialog.cpp" line="276"/>
        <location filename="../src/SettingsDialog.cpp" line="295"/>
        <source>automatic</source>
        <translation>automatique</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="284"/>
        <source>Columns</source>
        <translation>Colonnes</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="285"/>
        <source>Rows</source>
        <translation>Lignes</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="287"/>
        <source>Grid size</source>
        <translation>Taille de la grille</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="312"/>
        <source>Row</source>
        <translation>Ligne</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="313"/>
        <source>Column</source>
        <translation>Colonne</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="314"/>
        <source>Row span</source>
        <translation>Lignes occupées</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="315"/>
        <source>Column span</source>
        <translation>Colonnes occupées</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="317"/>
        <source>Position of the selected camera</source>
        <translation>Position de la caméra sélectionnée</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="328"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>Laissez la ligne et la colonne sur « automatique » pour que les caméras remplissent la grille dans l'ordre. En occupant plusieurs cases, une caméra peut en couvrir plusieurs.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="487"/>
        <location filename="../src/SettingsDialog.cpp" line="688"/>
        <source>New camera</source>
        <translation>Nouvelle caméra</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="502"/>
        <source>Remove camera</source>
        <translation>Retirer la caméra</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="503"/>
        <source>Remove “%1” from the list?</source>
        <translation>Retirer « %1 » de la liste ?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="531"/>
        <source>type it once; it moves to the keyring when you save</source>
        <translation>saisissez-le une fois ; il ira au trousseau à l'enregistrement</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="532"/>
        <source>no keyring is answering — it will stay in the file</source>
        <translation>aucun trousseau ne répond — il restera dans le fichier</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="546"/>
        <source>Enter a host first.</source>
        <translation>Indiquez d'abord une adresse.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="553"/>
        <source>Contacting %1…</source>
        <translation>Contact de %1…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="612"/>
        <source>Cameras on this recorder</source>
        <translation>Caméras sur cet enregistreur</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="615"/>
        <source>%1 answers for %n channel(s). Which of them should be added?</source>
        <translation><numerusform>%1 répond pour %n canal. Faut-il l'ajouter ?</numerusform><numerusform>%1 répond pour %n canaux. Lesquels faut-il ajouter ?</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="634"/>
        <location filename="../src/SettingsDialog.cpp" line="705"/>
        <source>Channel %1</source>
        <translation>Canal %1</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="636"/>
        <source>%1 — %2</source>
        <translation>%1 — %2</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="638"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="640"/>
        <source>%1 — already in the list</source>
        <translation>%1 — déjà dans la liste</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="642"/>
        <source>%1 — nothing connected</source>
        <translation>%1 — rien de connecté</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="654"/>
        <source>All</source>
        <translation>Tout</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="655"/>
        <source>None</source>
        <translation>Aucune</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="733"/>
        <source>Added %n camera(s) from this recorder.</source>
        <translation><numerusform>%n caméra ajoutée depuis cet enregistreur.</numerusform><numerusform>%n caméras ajoutées depuis cet enregistreur.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="742"/>
        <source>Looking for cameras…</source>
        <translation>Recherche de caméras…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="742"/>
        <source>Stop</source>
        <translation>Arrêter</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="756"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>%n appareil trouvé…</numerusform><numerusform>%n appareils trouvés…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="766"/>
        <source>No cameras found</source>
        <translation>Aucune caméra trouvée</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="767"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>Aucun appareil ONVIF n'a répondu.

Les caméras ne répondent que si ONVIF est activé, et la sonde ne franchit ni les routeurs ni la plupart des VPN. Vous pouvez toujours ajouter une caméra en saisissant son adresse.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="793"/>
        <source>unnamed device</source>
        <translation>appareil sans nom</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="794"/>
        <source> (Reolink)</source>
        <translation> (Reolink)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="795"/>
        <source>  · already added</source>
        <translation>  · déjà ajoutée</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="801"/>
        <source>Cameras found</source>
        <translation>Caméras trouvées</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="802"/>
        <source>Add which one?</source>
        <translation>Laquelle ajouter ?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="845"/>
        <source>Incomplete camera</source>
        <translation>Caméra incomplète</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="846"/>
        <source>“%1” has no host address.</source>
        <translation>« %1 » n'a pas d'adresse.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="862"/>
        <source>The keyring would not take it</source>
        <translation>Le trousseau n'en a pas voulu</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="863"/>
        <source>“%1” could not be saved in the system keyring: %2

Its password has been left in the configuration file.</source>
        <translation>« %1 » n'a pas pu être enregistré dans le trousseau du système : %2

Son mot de passe est resté dans le fichier de configuration.</translation>
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
        <translation>Données mobiles</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>Filaire</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>Connexion</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — puissance inconnue</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %2 sur %3</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>Impossible de joindre la caméra : %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>La caméra n'a pas répondu sur le port RTSP.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="165"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>ffmpeg est nécessaire pour envoyer du son et n'a pas pu être lancé.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="278"/>
        <source>The camera rejected the user name or password.</source>
        <translation>La caméra a rejeté le nom d'utilisateur ou le mot de passe.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="287"/>
        <source>The camera refused: %1</source>
        <translation>La caméra a refusé : %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="322"/>
        <source>This camera does not offer a speaker.</source>
        <translation>Cette caméra ne propose pas de haut-parleur.</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>le flux s'est terminé (%1) — reconnexion</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>SIGNAL FAIBLE</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>FLUX DÉFECTUEUX</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>%n image abîmée en dix secondes.

D'habitude un signal Wi-Fi faible, ou un débit réglé trop bas pour la résolution. leolink répare ce qu'il peut — voici ce qu'il n'a pas pu.</numerusform><numerusform>%n images abîmées en dix secondes.

D'habitude un signal Wi-Fi faible, ou un débit réglé trop bas pour la résolution. leolink répare ce qu'il peut — voici ce qu'il n'a pas pu.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>connexion…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="727"/>
        <source>Mute this camera</source>
        <translation>Couper le son de cette caméra</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="306"/>
        <source>Volume</source>
        <translation>Volume</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <location filename="../src/VideoTile.cpp" line="1031"/>
        <source>Record this camera</source>
        <translation>Enregistrer cette caméra</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="1009"/>
        <source>Speak through the camera</source>
        <translation>Parler à travers la caméra</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>Réglages de la caméra</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="462"/>
        <source>no host configured</source>
        <translation>aucune adresse configurée</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="553"/>
        <source>connecting over Baichuan…</source>
        <translation>connexion via Baichuan…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="576"/>
        <location filename="../src/VideoTile.cpp" line="962"/>
        <source>custom stream</source>
        <translation>flux personnalisé</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="578"/>
        <location filename="../src/VideoTile.cpp" line="964"/>
        <source>main stream</source>
        <translation>flux principal</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="579"/>
        <location filename="../src/VideoTile.cpp" line="965"/>
        <source>sub stream</source>
        <translation>flux secondaire</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="726"/>
        <source>Unmute this camera</source>
        <translation>Rétablir le son de cette caméra</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="744"/>
        <source>MOTION</source>
        <translation>MOUVEMENT</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="862"/>
        <location filename="../src/VideoTile.cpp" line="882"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>la caméra se reconfigure… %1 s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="884"/>
        <source>camera is reconfiguring…</source>
        <translation>la caméra se reconfigure…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="937"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>flux perdu — reconnexion (%1)</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="968"/>
        <source>%1 fps</source>
        <translation>%1 ips</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="971"/>
        <source>%1 Mbit/s</source>
        <translation>%1 Mbit/s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="972"/>
        <source>%1 kbit/s</source>
        <translation>%1 kbit/s</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1008"/>
        <source>Stop speaking</source>
        <translation>Arrêter de parler</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1030"/>
        <source>Stop recording</source>
        <translation>Arrêter l'enregistrement</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — zones de mouvement</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>Faites glisser sur l'image pour choisir ce qui est surveillé. Les zones assombries sont ignorées — pratique pour une route au bord du champ, un arbre qui bouge au vent ou le seuil d'un voisin.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>Tout surveiller</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>Tout ignorer</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>Inverser</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>Dessiner</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>Surveiller un rectangle</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>Ignorer un rectangle</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>Faites glisser sur des cases isolées.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>Tracez un rectangle à surveiller. Maj et glisser fait la même chose sans changer d'outil.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>Tracez un rectangle à ignorer. Ctrl et glisser fait la même chose sans changer d'outil.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>Récupération d'une image depuis %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>Pas d'image : %1 — les zones peuvent quand même être définies.</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>aucune image disponible</translation>
    </message>
</context>
</TS>
