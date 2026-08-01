"""Brazilian Portuguese. See tools/fill_translations.py for how this is applied."""

from __future__ import annotations

# Source string -> Brazilian Portuguese. Plain text, no XML escaping: that is
# applied on write.
STRINGS: dict[str, str] = {
    "Diagnostics": "Diagnóstico",
    "&Diagnostics…": "&Diagnóstico…",
    "What leolink and the cameras have been doing — and a report to attach to "
    "a bug report.":
        "O que o leolink e as câmeras andaram fazendo — e um relatório para "
        "anexar a um relato de falha.",
    "Errors only": "Somente erros",
    "Warnings and errors": "Avisos e erros",
    "Normal activity": "Atividade normal",
    "Everything": "Tudo",
    "All areas": "Todas as áreas",
    "Search…": "Buscar…",
    "Show": "Mostrar",
    "Detailed logging": "Registro detalhado",
    "Records every request to the camera, every decoder decision and every "
    "reconnect. Leave it off for everyday use — switch it on when something is "
    "wrong, reproduce the problem, then send the report.":
        "Anota cada requisição à câmera, cada decisão do decodificador e cada "
        "reconexão. Deixe desligado no uso diário — ligue quando algo estiver "
        "errado, reproduza o problema e envie então o relatório.",
    "Records every request to the camera, every decoder decision and every "
    "reconnect, in ~/.local/share/leolink/leolink.log.":
        "Anota cada requisição à câmera, cada decisão do decodificador e cada "
        "reconexão, em ~/.local/share/leolink/leolink.log.",
    "Errors and warnings are always recorded. Detailed logging adds the "
    "conversation with the camera — switch it on when something is wrong, "
    "reproduce it, then send the report from Help ▸ Diagnostics. Passwords and "
    "tokens are removed before anything is written.":
        "Erros e avisos são sempre anotados. O registro detalhado acrescenta a "
        "conversa com a câmera — ligue quando algo estiver errado, reproduza e "
        "envie então o relatório em Ajuda ▸ Diagnóstico. Senhas e tokens são "
        "removidos antes de qualquer coisa ser escrita.",
    "Open diagnostics…": "Abrir o diagnóstico…",
    "Open diagnostics": "Abrir o diagnóstico",
    "Follow new lines": "Acompanhar as linhas novas",
    "Copy report": "Copiar o relatório",
    "System details and the log, ready to paste into a bug report.":
        "Dados do sistema e o registro, prontos para colar num relato de "
        "falha.",
    "Report copied.": "Relatório copiado.",
    "Save report…": "Salvar o relatório…",
    "Save report": "Salvar o relatório",
    "Text files (*.txt)": "Arquivos de texto (*.txt)",
    "Could not write %1.": "Não foi possível escrever %1.",
    "Open log folder": "Abrir a pasta do registro",
    "Passwords, session tokens and internet addresses are removed before "
    "anything is written, so this can be shared as it is. Addresses inside "
    "your own network are kept — they are usually the first clue.":
        "Senhas, tokens de sessão e endereços de internet são removidos antes "
        "de qualquer coisa ser escrita, então isto pode ser compartilhado como "
        "está. Endereços da sua própria rede são mantidos — costumam ser a "
        "primeira pista.",
    "%1 of %2 lines": "%1 de %2 linhas",
    "Report a problem": "Relatar um problema",
    "<b>Attach a diagnostics report</b>":
        "<b>Anexe um relatório de diagnóstico</b>",
    "It records what your machine is, what the cameras answered and where "
    "things went wrong — with passwords and addresses already removed. Without "
    "it, most reports cannot be followed up.\n\nIf the problem is one you can "
    "trigger, switch on detailed logging in the diagnostics window first, make "
    "it happen again, then copy the report.":
        "Ele registra que máquina é a sua, o que as câmeras responderam e onde "
        "as coisas deram errado — com senhas e endereços já removidos. Sem "
        "ele, a maioria dos relatos não pode ser investigada.\n\nSe o problema "
        "for algo que você consegue provocar, ligue antes o registro detalhado "
        "na janela de diagnóstico, faça acontecer de novo e copie então o "
        "relatório.",
    "Go to the issue tracker": "Ir ao rastreador de problemas",
    "Application": "Aplicativo",
    "Camera API": "Interface da câmera",
    "ONVIF events": "Eventos ONVIF",
    "Event actions": "Ações de evento",
    "Baichuan": "Baichuan",
    "User interface": "Interface do usuário",
    "Qt": "Qt",
    "strong": "forte",
    "good": "bom",
    "fair": "razoável",
    "weak": "fraco",
    "unknown": "desconhecido",
    "%1 — %2 (%3/4)": "%1 — %2 (%3/4)",
    "Signal as the camera hears it: %1 of 4":
        "Sinal como a câmera o escuta: %1 de 4",
    "Encryption: %1": "Criptografia: %1",
    "Some names were heard from several access points — that is a mesh. The "
    "camera joins the name, not a particular node; the mesh decides which one "
    "it talks to and hands it over as needed. To find the best spot, move the "
    "camera and watch “Wi-Fi signal” above: that is the link it actually has.":
        "Alguns nomes foram ouvidos de vários pontos de acesso — isso é uma "
        "malha. A câmera se junta ao nome, não a um nó específico; a malha "
        "decide com qual ela fala e a repassa quando preciso. Para achar o "
        "melhor lugar, mova a câmera e observe acima o «Sinal Wi-Fi»: é esse o "
        "enlace que ela tem de fato.",
    "What this camera supports": "O que esta câmera suporta",
    "Reolink firmware differs enormously between models, and the only reliable "
    "way to know what a camera can do is to ask it. If something is missing "
    "from leolink that your camera clearly has, this list in a bug report is "
    "what makes it possible to add.":
        "O firmware da Reolink varia enormemente entre modelos, e o único "
        "jeito confiável de saber o que uma câmera faz é perguntar a ela. Se "
        "falta ao leolink algo que a sua câmera claramente tem, é esta lista, "
        "num relato de falha, que torna possível acrescentar.",
    "Ask the camera": "Perguntar à câmera",
    "Copy the list": "Copiar a lista",
    "Copied.": "Copiado.",
    "<b>Supported (%1):</b> %2<br><br><b>Not supported (%3):</b> %4":
        "<b>Suportado (%1):</b> %2<br><br><b>Não suportado (%3):</b> %4",
    "Privacy": "Privacidade",
    "Privacy areas…": "Áreas privadas…",
    "Parts of the view the camera blanks before anything leaves it.":
        "Partes da cena que a câmera tapa antes que qualquer coisa saia dela.",
    "Blanked in the camera itself, so the covered part is missing from every "
    "viewer and every recording — a neighbour's window, or a desk that should "
    "not be on film.":
        "Tapado na própria câmera, então a parte coberta falta em todo "
        "visualizador e em toda gravação — a janela de um vizinho, ou uma "
        "escrivaninha que não deveria aparecer em vídeo.",
    "%1 — privacy areas": "%1 — áreas privadas",
    "Drag out the parts of the view the camera should blank. It blacks them "
    "out before anything leaves the device, so they are missing from the live "
    "picture, from recordings and from every other client — including the "
    "manufacturer's app.":
        "Arraste para marcar as partes da cena que a câmera deve tapar. Ela as "
        "escurece antes que qualquer coisa saia do aparelho, então elas faltam "
        "na imagem ao vivo, nas gravações e em qualquer outro programa — "
        "inclusive no aplicativo do fabricante.",
    "Remove the last": "Remover a última",
    "Remove all": "Remover todas",
    "No picture: %1 — the areas can still be drawn.":
        "Sem imagem: %1 — as áreas podem ser desenhadas mesmo assim.",
    "%1 of %2 areas": "%1 de %2 áreas",
    "nothing blanked": "nada tapado",
    "Detection area…": "Área de detecção…",
    "Which parts of the picture the camera watches. Everything outside the "
    "area is ignored — a road at the edge of view, a tree in the wind, a "
    "neighbour's door.":
        "Que partes da imagem a câmera vigia. Tudo fora da área é ignorado — "
        "uma rua na beira do enquadramento, uma árvore ao vento, a porta de um "
        "vizinho.",
    "%1 — the camera's detection area": "%1 — área de detecção da câmera",
    "Drag over the picture to choose what the camera watches. Darkened areas "
    "are ignored. This is the camera's own grid, %1 by %2, so it is finer than "
    "leolink's own.":
        "Arraste sobre a imagem para escolher o que a câmera vigia. Áreas "
        "escurecidas são ignoradas. Esta é a grade da própria câmera, %1 por "
        "%2, portanto mais fina que a do leolink.",
    "When to watch…": "Quando vigiar…",
    "Hours of the week the camera raises motion events at all.":
        "As horas da semana em que a câmera avisa movimento.",
    "%1 — when to watch": "%1 — quando vigiar",
    "Hours in which the camera raises motion events. Outside them it still "
    "sees, but says nothing.":
        "As horas em que a câmera avisa movimento. Fora delas ela continua "
        "vendo, mas não diz nada.",
    "When to record…": "Quando gravar…",
    "Hours of the week the camera records to its card by itself.":
        "As horas da semana em que a câmera grava sozinha no próprio cartão.",
    "%1 — when to record": "%1 — quando gravar",
    "Hours in which the camera records to its own card. This needs a card "
    "fitted; recording to this computer is set under Cameras → Events and "
    "works without one.":
        "As horas em que a câmera grava no próprio cartão. Para isso é preciso "
        "um cartão instalado; a gravação neste computador se ajusta em Câmeras "
        "→ Eventos e dispensa cartão.",
    "Area, times and sensitivity": "Área, horários e sensibilidade",
    "To": "Até",
    "Cameras allow a different sensitivity at different times of day, which is "
    "how you stop headlights at night triggering everything without going deaf "
    "during the day.":
        "As câmeras admitem sensibilidades diferentes conforme a hora do dia, "
        "e é assim que se evita que faróis à noite disparem tudo sem deixar a "
        "câmera surda de dia.",
    "All week": "A semana toda",
    "Never": "Nunca",
    "Nights": "À noite",
    "Working hours": "Horário comercial",
    "Weekends": "Fins de semana",
    "22:00 to 06:00, every day.": "Das 22:00 às 06:00, todos os dias.",
    "08:00 to 17:00, Monday to Friday.":
        "Das 08:00 às 17:00, de segunda a sexta.",
    "Nothing is selected — this will never run.":
        "Nada está selecionado — isto nunca será executado.",
    "Always on.": "Sempre ativo.",
    "Mobile data": "Dados móveis",
    "SIM card": "Cartão SIM",
    "PIN": "PIN",
    "Only needed if the card asks for one. Three wrong tries lock the card and "
    "it then needs a PUK, which only your operator has.":
        "Só é preciso se o cartão pedir. Três tentativas erradas bloqueiam o "
        "cartão, que passa a exigir um PUK que só a sua operadora tem.",
    "Access point (APN)": "Ponto de acesso (APN)",
    "Authentication": "Autenticação",
    "Use mobile data": "Usar dados móveis",
    "Modem": "Modem",
    "Card": "Cartão",
    "Type": "Tipo",
    "Signal": "Sinal",
    "IMEI": "IMEI",
    "Card number": "Número do cartão",
    "Mobile connection": "Conexão móvel",
    "Data used": "Dados consumidos",
    "Monthly limit": "Limite mensal",
    "<b>Not tested on real hardware.</b> Nobody involved in leolink owns a "
    "camera with a modem, so this was written from the protocol alone. It "
    "cannot damage anything — a command the camera does not know is simply "
    "refused — but it may equally show nothing at all.\n\nIf your camera has a "
    "SIM, “What this camera supports” under Maintenance lists the commands its "
    "firmware actually has. That list, in a bug report, is what would let this "
    "be finished properly.":
        "<b>Não testado em hardware real.</b> Ninguém envolvido no leolink tem "
        "uma câmera com modem, então isto foi escrito apenas a partir do "
        "protocolo. Não pode estragar nada — um comando que a câmera não "
        "conhece é simplesmente recusado — mas também pode não mostrar "
        "absolutamente nada.\n\nSe a sua câmera tem SIM, «O que esta câmera "
        "suporta», em Manutenção, lista os comandos que o firmware dela "
        "realmente tem. Essa lista, num relato de falha, é o que permitiria "
        "terminar isto direito.",
    "Baichuan (the camera's own protocol)":
        "Baichuan (o protocolo da própria câmera)",
    "RTSP suits most cameras and is what to try first.\n\nHTTP-FLV needs only "
    "port 80, which helps where RTSP is blocked.\n\nBaichuan is what Reolink's "
    "own app speaks. It is the answer for cameras that keep RTSP switched off "
    "— battery models do — and it does not use the camera's small pool of web "
    "sessions. Video only: sound still comes over RTSP.":
        "RTSP serve à maioria das câmeras e é o que se deve tentar "
        "primeiro.\n\nHTTP-FLV precisa apenas da porta 80, o que ajuda onde "
        "RTSP está bloqueado.\n\nBaichuan é o que o aplicativo da Reolink "
        "fala. É a resposta para as câmeras que deixam o RTSP desligado — os "
        "modelos a bateria fazem isso — e não ocupa nenhuma das poucas sessões "
        "web da câmera. Só vídeo: o som continua vindo por RTSP.",
    "connecting over Baichuan…": "conectando por Baichuan…",
    "Cannot open a local port: %1": "Não é possível abrir uma porta local: %1",
    "Baichuan login failed: %1": "Falha no login Baichuan: %1",
    "The camera refused to send video: %1":
        "A câmera se recusou a enviar vídeo: %1",
    "The player did not connect.": "O reprodutor não se conectou.",
    "The camera stopped sending.": "A câmera parou de enviar.",
    "custom stream": "fluxo personalizado",
    "Speak through the camera": "Falar pela câmera",
    "Stop speaking": "Parar de falar",
    "Play through %1": "Reproduzir por %1",
    "Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)":
        "Arquivos de som (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Todos os "
        "arquivos (*)",
    "Speaking through the camera…": "Falando pela câmera…",
    "Finished.": "Terminado.",
    "Cannot reach the camera: %1": "Não é possível alcançar a câmera: %1",
    "The camera did not answer on the RTSP port.":
        "A câmera não respondeu na porta RTSP.",
    "ffmpeg is needed to send sound and could not be started.":
        "Para enviar som é preciso o ffmpeg, e ele não pôde ser iniciado.",
    "The camera rejected the user name or password.":
        "A câmera recusou o usuário ou a senha.",
    "The camera refused: %1": "A câmera recusou: %1",
    "This camera does not offer a speaker.":
        "Esta câmera não oferece alto-falante.",
    "Sound": "Som",
    "Send sound": "Transmitir som",
    "The camera's microphone. With this off it still puts an audio track in "
    "the stream — an entirely silent one, which is much harder to recognise "
    "than no track at all.":
        "O microfone da câmera. Com isto desligado ela ainda coloca uma trilha "
        "de áudio no fluxo — completamente muda, o que é bem mais difícil de "
        "perceber do que trilha nenhuma.",
    "What it recognises": "O que ela reconhece",
    "People": "Pessoas",
    "Vehicles": "Veículos",
    "Animals": "Animais",
    "Faces": "Rostos",
    "Any movement": "Qualquer movimento",
    "Continuous": "Contínuo",
    "This camera keeps a separate week for each kind of event. Which one?":
        "Esta câmera mantém uma semana separada para cada tipo de evento. Qual "
        "delas?",
    "Push notifications": "Notificações push",
    "Folder": "Pasta",
    "The camera is not answering requests just now. It does this when it has "
    "had too many at once; it recovers on its own after a moment.":
        "A câmera não está respondendo a requisições no momento. Ela faz isso "
        "quando recebe demais de uma vez; recupera-se sozinha depois de um "
        "instante.",
    "Camera-side detection": "Detecção na câmera",
    "Where it looks": "Onde ela olha",
    "Choose the area…": "Escolher a área…",
    "When it reports at all": "Quando ela avisa alguma coisa",
    "Choose the hours…": "Escolher as horas…",
    "A week of hours: in the ones you tick, the camera reports motion; in the "
    "rest it stays quiet. Nothing to do with how sensitive it is — that is set "
    "below.":
        "Uma semana em horas: nas que você marcar, a câmera avisa o movimento; "
        "nas demais fica quieta. Nada a ver com o quanto ela é sensível — isso "
        "se ajusta abaixo.",
    "How readily it triggers": "Com que facilidade ela dispara",
    "Within a day the camera can be more or less easily triggered. This is how "
    "you stop headlights at night setting everything off without making it "
    "deaf by day. The camera fixes how many periods there are; their times and "
    "sensitivities are yours.":
        "Ao longo do dia a câmera pode disparar com mais ou menos facilidade. "
        "É assim que se evita que faróis à noite disparem tudo sem deixá-la "
        "cega de dia. Quantos períodos existem é a câmera que define; os "
        "horários e as sensibilidades são seus.",
    "Siren": "Sirene",
    "Sound on an alarm": "Tocar em um alarme",
    "Times": "Horários",
    "Spotlight": "Refletor",
    "On": "Ligado",
    "Draw": "Desenhar",
    "Watch a rectangle": "Vigiar um retângulo",
    "Ignore a rectangle": "Ignorar um retângulo",
    "Drag over single cells.": "Arraste sobre células isoladas.",
    "Drag out a rectangle to watch. Shift and drag does the same without "
    "changing tool.":
        "Arraste um retângulo a vigiar. Shift e arrastar faz o mesmo sem "
        "trocar de ferramenta.",
    "Drag out a rectangle to ignore. Ctrl and drag does the same without "
    "changing tool.":
        "Arraste um retângulo a ignorar. Ctrl e arrastar faz o mesmo sem "
        "trocar de ferramenta.",
    "  · already added": "  · já adicionada",
    "Processor load %1 %": "Carga do processador %1 %",
    "Encoder output %1 kbit/s": "Saída do codificador %1 kbit/s",
    "Supported (%1):\n%2\n\nNot supported (%3):\n%4":
        "Suportado (%1):\n%2\n\nNão suportado (%3):\n%4",
    "The camera asks Reolink, not this computer — so it needs a way out to the "
    "internet of its own.":
        "É a câmera que pergunta à Reolink, não este computador — ela precisa "
        "portanto de uma saída própria para a internet.",
    "Part of the camera did not answer. Depending on what was asked, that "
    "means no SD card is fitted, or the camera has no way out to the internet.":
        "Uma parte da câmera não respondeu. Conforme o que foi perguntado, "
        "isso significa que não há cartão SD instalado, ou que a câmera não "
        "tem saída para a internet.",
    "Factory reset is not offered here. It clears the network settings too, "
    "and a camera that has forgotten its Wi-Fi has to be taken down and "
    "reached by cable — use the camera's own web interface if you really want "
    "that.":
        "A restauração de fábrica não é oferecida aqui. Ela apaga também as "
        "configurações de rede, e uma câmera que esqueceu o Wi-Fi precisa ser "
        "tirada do lugar e alcançada por cabo — se você realmente quiser isso, "
        "use a interface web da própria câmera.",
    "The camera has no free sessions. It allows only a handful at once, shared "
    "with the phone app and its web page. Close those, or wait a minute for "
    "the old ones to lapse.":
        "A câmera não tem sessões livres. Ela admite apenas um punhado por "
        "vez, compartilhadas com o aplicativo do celular e com a página web "
        "dela. Feche-as, ou espere um minuto até as antigas expirarem.",
    "&File": "&Arquivo",
    "&View": "&Exibir",
    "&Help": "A&juda",
    "&Cameras…": "&Câmeras…",
    "&Save snapshots…": "&Salvar instantâneos…",
    "&Event log…": "&Registro de eventos…",
    "Open &recordings folder": "Abrir a pasta de &gravações",
    "&Quit": "Sai&r",
    "&Full screen": "Tela &cheia",
    "Leave full screen": "Sair da tela cheia",
    "Show &menu bar": "Mostrar a barra de &menus",
    "Show &toolbar": "Mostrar a barra de &ferramentas",
    "Show status &bar": "Mostrar a barra de &status",
    "Hide window &decoration": "Ocultar a &decoração da janela",
    "&Online handbook": "Manual &on-line",
    "&Protocol notes": "Notas do &protocolo",
    "&Report a problem": "Relatar um &problema",
    "&About leolink": "So&bre o leolink",
    "Main": "Principal",
    "Ready": "Pronto",
    "Grid view": "Visão em grade",
    "No cameras configured": "Nenhuma câmera configurada",
    "Nothing to capture": "Nada a capturar",
    "Save snapshots to": "Salvar os instantâneos em",
    "Esc leaves full screen": "Esc sai da tela cheia",
    "Esc leaves full screen · double-click a camera to fill the screen":
        "Esc sai da tela cheia · clique duplo numa câmera para preencher a "
        "tela",
    "Double-click for the grid · Esc leaves full screen":
        "Clique duplo para a grade · Esc sai da tela cheia",
    "Cannot save": "Não é possível salvar",
    "Settings could not be written to %1.":
        "As configurações não puderam ser escritas em %1.",
    "Cannot create %1": "Não é possível criar %1",
    "Recording %1": "Gravando %1",
    "Saved %1": "Salvo %1",
    "Motion at %1": "Movimento em %1",
    "Motion detected": "Movimento detectado",
    "Could not run the motion command for %1":
        "Não foi possível executar o comando de movimento de %1",
    "leolink is still running": "o leolink continua em execução",
    "Cameras keep recording. Use the tray icon to come back.":
        "As câmeras continuam gravando. Use o ícone da área de notificação "
        "para voltar.",
    "Show window": "Mostrar a janela",
    "Cameras…": "Câmeras…",
    "Quit": "Sair",
    "Welcome to leolink": "Bem-vindo ao leolink",
    "<b>No cameras are configured yet.</b>":
        "<b>Ainda não há nenhuma câmera configurada.</b>",
    "Add a camera with its address, user name and password. leolink talks to "
    "the camera directly on your network — no cloud account is involved.<p>The "
    "handbook covers what each option does.":
        "Adicione uma câmera com o endereço, o usuário e a senha. O leolink "
        "fala com a câmera diretamente na sua rede — nenhuma conta na nuvem "
        "entra em jogo.<p>O manual explica o que cada opção faz.",
    "Add camera…": "Adicionar uma câmera…",
    "Open handbook": "Abrir o manual",
    "About leolink": "Sobre o leolink",
    "<b>%1</b>": "<b>%1</b>",
    "<h3>leolink %1</h3><p>A native Linux client for Reolink "
    "cameras.</p><p>Speaks the camera's own protocols directly: HTTP API, RTSP "
    "and ONVIF on the local network, and Reolink's P2P service when you want "
    "to reach a camera from elsewhere.</p><p><a href=\"%2\">Handbook</a> · <a "
    "href=\"https://github.com/tombueng/leolink\">Source</a></p><p>Not "
    "affiliated with or endorsed by Reolink.</p>":
        "<h3>leolink %1</h3><p>Um cliente Linux nativo para câmeras "
        "Reolink.</p><p>Fala diretamente os protocolos da própria câmera: "
        "interface HTTP, RTSP e ONVIF na rede local, e o serviço P2P da "
        "Reolink quando você quiser alcançar uma câmera de outro "
        "lugar.</p><p><a href=\"%2\">Manual</a> · <a "
        "href=\"https://github.com/tombueng/leolink\">Código-fonte</a></p><p>Sem "
        "vínculo com a Reolink e sem apoio dela.</p>",
    "No cameras configured yet.\n\nUse “Cameras…” to add one.":
        "Ainda não há câmeras configuradas.\n\nUse «Câmeras…» para adicionar "
        "uma.",
    "connecting…": "conectando…",
    "main stream": "fluxo principal",
    "sub stream": "fluxo secundário",
    "no host configured": "nenhum endereço configurado",
    "cannot open stream": "não é possível abrir o fluxo",
    "libmpv unavailable": "libmpv indisponível",
    "player init failed": "falha ao iniciar o reprodutor",
    "MOTION": "MOVIMENTO",
    "Mute this camera": "Silenciar esta câmera",
    "Unmute this camera": "Tirar o silêncio desta câmera",
    "Volume": "Volume",
    "Camera settings": "Configurações da câmera",
    "Settings": "Configurações",
    "Cameras": "Câmeras",
    "Layout": "Disposição",
    "Events": "Eventos",
    "Window": "Janela",
    "Add": "Adicionar",
    "Remove": "Remover",
    "Remove camera": "Remover a câmera",
    "Remove “%1” from the list?": "Remover «%1» da lista?",
    "New camera": "Câmera nova",
    "Name": "Nome",
    "Host": "Endereço",
    "User": "Usuário",
    "Password": "Senha",
    "Password command": "Comando de senha",
    "UID": "UID",
    "Stream": "Fluxo",
    "Transport": "Transporte",
    "192.168.1.10 or camera.lan": "192.168.1.10 ou camera.lan",
    "optional, for P2P access": "opcional, para o acesso P2P",
    "optional: pass show reolink/hall": "opcional: pass show reolink/entrada",
    "If set, this command runs and its output is used as the password. Keeps "
    "the secret out of the configuration file.":
        "Se preenchido, este comando é executado e a saída dele é usada como "
        "senha. Mantém o segredo fora do arquivo de configuração.",
    "Sub stream (low bandwidth)": "Fluxo secundário (pouca banda)",
    "Main stream (full resolution)": "Fluxo principal (resolução total)",
    "RTSP": "RTSP",
    "HTTP-FLV (lower latency)": "HTTP-FLV (menor latência)",
    "Use HTTPS for the control API": "Usar HTTPS para a interface de controle",
    "Show this camera": "Mostrar esta câmera",
    "Test connection": "Testar a conexão",
    "Contacting %1…": "Contatando %1…",
    "Enter a host first.": "Informe antes um endereço.",
    "Incomplete camera": "Câmera incompleta",
    "“%1” has no host address.": "«%1» não tem endereço.",
    "%1 — firmware %2, %3 channel(s)": "%1 — firmware %2, %3 canais",
    "Scan network…": "Varrer a rede…",
    "Ask the network which ONVIF cameras are present. This sends one multicast "
    "probe; devices that stay quiet are never contacted.":
        "Pergunta à rede que câmeras ONVIF existem. Envia uma única sondagem "
        "multicast; aparelhos que ficam calados nunca são contatados.",
    "Looking for cameras…": "Procurando câmeras…",
    "Stop": "Parar",
    "Cameras found": "Câmeras encontradas",
    "Add which one?": "Qual adicionar?",
    "No cameras found": "Nenhuma câmera encontrada",
    "No ONVIF device answered.\n\nCameras only reply if ONVIF is switched on, "
    "and the probe does not cross routers or most VPNs. You can still add a "
    "camera by typing its address.":
        "Nenhum aparelho ONVIF respondeu.\n\nAs câmeras só respondem se o "
        "ONVIF estiver ligado, e a sondagem não atravessa roteadores nem a "
        "maioria das VPNs. Você ainda pode adicionar uma câmera digitando o "
        "endereço dela.",
    "unnamed device": "aparelho sem nome",
    " (Reolink)": " (Reolink)",
    "Cannot open a UDP socket for discovery.":
        "Não é possível abrir um socket UDP para a busca.",
    "Grid size": "Tamanho da grade",
    "Columns": "Colunas",
    "Rows": "Linhas",
    "Column": "Coluna",
    "Row": "Linha",
    "Row span": "Linhas ocupadas",
    "Column span": "Colunas ocupadas",
    "automatic": "automático",
    "Position of the selected camera": "Posição da câmera selecionada",
    "Leave row and column on “automatic” to let cameras fill the grid in "
    "order. Spans let one camera cover several cells.":
        "Deixe linha e coluna em «automático» para as câmeras preencherem a "
        "grade em ordem. Ocupando várias células, uma câmera pode cobrir mais "
        "de uma.",
    "Watch cameras for motion (ONVIF push)":
        "Vigiar movimento nas câmeras (push ONVIF)",
    "The camera reports motion when it happens, rather than leolink asking "
    "once a second.":
        "A câmera avisa o movimento na hora em que acontece, em vez de o "
        "leolink perguntar uma vez por segundo.",
    "Run command": "Executar um comando",
    "notify-send \"Motion at %n\"": "notify-send \"Movimento em %n\"",
    "Runs when this camera reports motion.\n%n camera name · %h host · %t "
    "timestamp · %f recording file":
        "Executado quando esta câmera avisa movimento.\n%n nome da câmera · %h "
        "endereço · %t marca de tempo · %f arquivo de gravação",
    "Record while motion lasts": "Gravar enquanto durar o movimento",
    "Records on this computer from the live stream, so it works even when the "
    "camera has no SD card fitted.":
        "Grava neste computador a partir do fluxo ao vivo, então funciona "
        "mesmo quando a câmera não tem cartão SD.",
    "Keep recording after": "Continuar gravando por",
    " s": " s",
    "Selected camera": "Câmera selecionada",
    "All cameras": "Todas as câmeras",
    "Recordings folder": "Pasta das gravações",
    "Browse…": "Procurar…",
    "Recordings are written as Matroska without re-encoding: the picture keeps "
    "the camera's original quality and the CPU stays nearly idle.":
        "As gravações são escritas como Matroska sem recodificar: a imagem "
        "mantém a qualidade original da câmera e o processador fica quase "
        "ocioso.",
    "Appearance": "Aparência",
    "Show menu bar": "Mostrar a barra de menus",
    "Show toolbar": "Mostrar a barra de ferramentas",
    "Show status bar": "Mostrar a barra de status",
    "Hide window decoration": "Ocultar a decoração da janela",
    "Ctrl+M toggles this at any time.":
        "Ctrl+M alterna isso a qualquer momento.",
    "For wall displays. Ctrl+Shift+D toggles it.":
        "Para telas de parede. Ctrl+Shift+D alterna.",
    "Notification area": "Área de notificação",
    "Show an icon in the notification area":
        "Mostrar um ícone na área de notificação",
    "Closing the window hides it instead of quitting":
        "Fechar a janela a oculta em vez de sair",
    "Minimising hides the window to the tray":
        "Minimizar oculta a janela na área de notificação",
    "On motion": "Ao detectar movimento",
    "Bring the window up when motion is detected":
        "Trazer a janela à frente quando houver movimento",
    "Come back as": "Voltar como",
    "Previous size": "Tamanho anterior",
    "Full screen": "Tela cheia",
    "Language": "Idioma",
    "System language": "Idioma do sistema",
    "Takes effect after restarting leolink.":
        "Passa a valer depois de reiniciar o leolink.",
    "Menu bar hidden": "Barra de menus oculta",
    "With both the menu bar and the toolbar hidden, press Ctrl+M to bring the "
    "menu back.":
        "Com a barra de menus e a de ferramentas ambas ocultas, pressione "
        "Ctrl+M para trazer o menu de volta.",
    "Event log": "Registro de eventos",
    "Camera:": "Câmera:",
    "Show:": "Mostrar:",
    "All events": "Todos os eventos",
    "Motion": "Movimento",
    "With recording": "Com gravação",
    "Refresh": "Atualizar",
    "When": "Quando",
    "Camera": "Câmera",
    "Event": "Evento",
    "Media": "Mídia",
    "video": "vídeo",
    "image": "imagem",
    " + image": " + imagem",
    "no preview": "sem prévia",
    "recording only": "só gravação",
    "no events recorded yet": "nenhum evento registrado ainda",
    "Recording: %1%2": "Gravação: %1%2",
    " (file missing)": " (arquivo faltando)",
    "Image: %1": "Imagem: %1",
    "Open recording": "Abrir a gravação",
    "Open image": "Abrir a imagem",
    "Nothing to open": "Nada a abrir",
    "The file for this event is no longer there.":
        "O arquivo deste evento não está mais lá.",
    "Clear log…": "Limpar o registro…",
    "Clear event log": "Limpar o registro de eventos",
    "Delete the whole event history?\n\nRecorded videos and images stay on "
    "disk — only the log is cleared.":
        "Apagar todo o histórico de eventos?\n\nOs vídeos e as imagens "
        "gravados continuam no disco — só o registro é limpo.",
    "Command": "Comando",
    "could not be started": "não pôde ser iniciado",
    "Webhook": "Webhook",
    "invalid URL": "endereço inválido",
    "Webhook → %1": "Webhook → %1",
    "%1 failed: %2": "%1 falhou: %2",
    "Event log…": "Registro de eventos…",
    "MQTT broker or topic not set.": "Broker ou tópico MQTT não definidos.",
    "MQTT broker did not respond.": "O broker MQTT não respondeu.",
    "MQTT: %1": "MQTT: %1",
    "MQTT: unexpected reply from the broker.":
        "MQTT: resposta inesperada do broker.",
    "MQTT refused the connection: %1": "O MQTT recusou a conexão: %1",
    "Video": "Vídeo",
    "Decoding": "Decodificação",
    "Hardware, fastest": "Hardware, a mais rápida",
    "Hardware, with frame copy": "Hardware, com cópia de quadros",
    "Software only": "Somente software",
    "Hardware decoding keeps the processor free and is the right choice for "
    "main-stream resolutions.\n\nIf the picture shows green blocks or stalls, "
    "pick “with frame copy”: it still decodes on the GPU but copies each frame "
    "to main memory, which some drivers need when the video sits inside "
    "another window.":
        "A decodificação por hardware deixa o processador livre e é a escolha "
        "certa para resoluções de fluxo principal.\n\nSe a imagem mostrar "
        "blocos verdes ou travar, escolha «com cópia de quadros»: continua "
        "decodificando na GPU, mas copia cada quadro para a memória principal, "
        "do que alguns drivers precisam quando o vídeo fica dentro de outra "
        "janela.",
    "Favour low latency over smoothness": "Preferir baixa latência à fluidez",
    "Keeps buffering to a minimum. Turn this off if a high-bitrate stream "
    "stutters over a busy network.":
        "Mantém o buffer no mínimo. Desligue se um fluxo de bitrate alto "
        "engasgar numa rede carregada.",
    "Drag the strip under a camera to move the window. Ctrl+Shift+D brings the "
    "frame back, Ctrl+M the menu.":
        "Arraste a faixa abaixo de uma câmera para mover a janela. "
        "Ctrl+Shift+D traz a moldura de volta, Ctrl+M o menu.",
    "%1 — camera settings": "%1 — configurações da câmera",
    "Reading settings from %1…": "Lendo as configurações de %1…",
    "Apply to camera": "Aplicar à câmera",
    "Main stream": "Fluxo principal",
    "Sub stream": "Fluxo secundário",
    "Resolution": "Resolução",
    "Frame rate": "Quadros por segundo",
    "Bit rate (kbit/s)": "Bitrate (kbit/s)",
    "H.264 profile": "Perfil H.264",
    "Higher means better picture and more network traffic. The camera only "
    "offers the rates it can actually sustain.":
        "Mais alto significa imagem melhor e mais tráfego de rede. A câmera só "
        "oferece as taxas que consegue de fato sustentar.",
    "These change the camera itself, so every client sees the result. The "
    "choices come from the camera and differ per model.":
        "Isto muda a própria câmera, então todo programa vê o resultado. As "
        "opções vêm da câmera e variam de modelo para modelo.",
    "Picture": "Imagem",
    "Brightness": "Brilho",
    "Contrast": "Contraste",
    "Saturation": "Saturação",
    "Sharpness": "Nitidez",
    "Hue": "Matiz",
    "Ready.": "Pronto.",
    "Writing to the camera…": "Escrevendo na câmera…",
    "Nothing to write.": "Nada a escrever.",
    "Saved. Changing the encoder restarts the stream, so the picture may drop "
    "out for a moment.":
        "Salvo. Mudar o codificador reinicia o fluxo, então a imagem pode "
        "sumir por um instante.",
    "&Record all cameras": "&Gravar todas as câmeras",
    "Record this camera": "Gravar esta câmera",
    "Stop recording": "Parar a gravação",
    "Recording all cameras": "Gravando todas as câmeras",
    "Recording stopped": "Gravação parada",
    "Recording started": "Gravação iniciada",
    "Could not start recording %1": "Não foi possível começar a gravar %1",
    "%1: %2": "%1: %2",
    "ffmpeg is not installed, so recording is unavailable.":
        "o ffmpeg não está instalado, então não é possível gravar.",
    "No stream address for %1.": "Nenhum endereço de fluxo para %1.",
    "Recording failed: %1": "Falha na gravação: %1",
    "Recording produced no data (ffmpeg exit %1).":
        "A gravação não produziu dados (o ffmpeg saiu com %1).",
    "Could not start ffmpeg.": "Não foi possível iniciar o ffmpeg.",
    "Custom URL": "Endereço personalizado",
    "Any address libmpv can open. Use this for cameras from other makers, an "
    "NVR stream, or a local file.":
        "Qualquer endereço que o libmpv consiga abrir. Use para câmeras de "
        "outros fabricantes, um fluxo de NVR ou um arquivo local.",
    "ffmpeg is not installed, so motion detection is unavailable.":
        "o ffmpeg não está instalado, então não é possível detectar movimento.",
    "ffmpeg is not installed, so sound detection is unavailable.":
        "o ffmpeg não está instalado, então não é possível detectar som.",
    "Motion detection stopped: %1": "Detecção de movimento parada: %1",
    "Sound detection stopped: %1": "Detecção de som parada: %1",
    "Could not start ffmpeg for motion detection.":
        "Não foi possível iniciar o ffmpeg para a detecção de movimento.",
    "Could not start ffmpeg for sound detection.":
        "Não foi possível iniciar o ffmpeg para a detecção de som.",
    "Sound detected": "Som detectado",
    "%1 at %2": "%1 em %2",
    "Detection": "Detecção",
    "Motion comes from": "Quem avisa o movimento",
    "The camera reports it (ONVIF)": "A própria câmera (ONVIF)",
    "leolink watches the picture": "o leolink observando a imagem",
    "Either of the two": "Qualquer um dos dois",
    "Do not watch": "Não vigiar",
    "Cameras that report motion themselves cost nothing to watch.\n\nAnalysing "
    "the picture here works with any camera, including ones that report "
    "nothing, but opens a second connection to the sub stream for each.":
        "Câmeras que avisam o movimento sozinhas não custam nada para "
        "vigiar.\n\nAnalisar a imagem aqui funciona com qualquer câmera, "
        "inclusive as que não avisam nada, mas abre para cada uma uma segunda "
        "conexão ao fluxo secundário.",
    "Motion zones…": "Zonas de movimento…",
    "Choose which parts of the picture are watched. Only applies when leolink "
    "analyses the picture itself.":
        "Escolha que partes da imagem são vigiadas. Só vale quando é o leolink "
        "que analisa a imagem.",
    "Sensitivity": "Sensibilidade",
    "How much a spot in the picture must change to count. Higher notices more, "
    "including shadows and rain.":
        "O quanto um ponto da imagem precisa mudar para contar. Mais alto nota "
        "mais, inclusive sombras e chuva.",
    "Minimum area": "Área mínima",
    " ‰": " ‰",
    "How much of the watched area must change before it counts as motion. 20‰ "
    "is two percent of the picture — roughly a person at middle distance.":
        "Quanto da área vigiada precisa mudar para contar como movimento. 20 ‰ "
        "é dois por cento da imagem — mais ou menos uma pessoa a média "
        "distância.",
    "Raise an event on sound": "Gerar um evento com som",
    "Needs a camera with a microphone. Opens another connection to the sub "
    "stream.":
        "Precisa de uma câmera com microfone. Abre mais uma conexão ao fluxo "
        "secundário.",
    "Sound above": "Som acima de",
    " dB": " dB",
    "-60 dB is close to silence, -20 dB a raised voice nearby.":
        "-60 dB é quase silêncio, -20 dB uma voz alta por perto.",
    "Hold for": "Manter por",
    "Keeps the event up after the noise stops, so one bark is not reported "
    "four times.":
        "Mantém o evento depois que o ruído cessa, para que um latido não seja "
        "avisado quatro vezes.",
    "%1 — motion zones": "%1 — zonas de movimento",
    "no picture available": "nenhuma imagem disponível",
    "Drag over the picture to choose what is watched. Darkened areas are "
    "ignored — useful for a road at the edge of view, a tree that moves in the "
    "wind, or a neighbour's doorway.":
        "Arraste sobre a imagem para escolher o que é vigiado. Áreas "
        "escurecidas são ignoradas — útil para uma rua na beira do "
        "enquadramento, uma árvore que balança ao vento ou a porta de um "
        "vizinho.",
    "Watch all": "Vigiar tudo",
    "Ignore all": "Ignorar tudo",
    "Invert": "Inverter",
    "Fetching a picture from %1…": "Buscando uma imagem de %1…",
    "No picture: %1 — the zones can still be set.":
        "Sem imagem: %1 — as zonas podem ser definidas mesmo assim.",
    "Recordings on the &camera…": "Gravações na &câmera…",
    "Browse what is stored on the camera's own SD card.":
        "Veja o que está guardado no cartão SD da própria câmera.",
    "Which camera": "Qual câmera",
    "Show recordings from": "Mostrar as gravações de",
    "%1 — recordings on the camera": "%1 — gravações na câmera",
    "Search": "Buscar",
    "From": "De",
    "to": "até",
    "Start": "Início",
    "Length": "Duração",
    "Size": "Tamanho",
    "File": "Arquivo",
    "Play": "Reproduzir",
    "Download…": "Baixar…",
    "Pick a period and press Search. Recordings only exist if the camera has "
    "an SD card fitted.":
        "Escolha um período e pressione Buscar. Só existem gravações se a "
        "câmera tiver um cartão SD instalado.",
    "Asking %1…": "Perguntando a %1…",
    "Nothing found in that period. Either nothing was recorded, or the camera "
    "has no SD card.":
        "Nada encontrado nesse período. Ou nada foi gravado, ou a câmera não "
        "tem cartão SD.",
    "No session with the camera — search first.":
        "Nenhuma sessão com a câmera — busque primeiro.",
    "No player": "Sem reprodutor",
    "mpv was not found. The recording is at:\n\n%1":
        "O mpv não foi encontrado. A gravação está em:\n\n%1",
    "Save recording": "Salvar a gravação",
    "Cannot write to %1.": "Não é possível escrever em %1.",
    "Saved to %1": "Salvo em %1",
    "Download failed: %1": "Falha no download: %1",
    "Maintenance": "Manutenção",
    "Restart": "Reiniciar",
    "Restart the camera": "Reiniciar a câmera",
    "The camera goes off the network for a minute or so and comes back on its "
    "own. Recordings on its SD card are not affected, and settings are "
    "kept.\n\nWorth trying when a camera has stopped answering, is refusing "
    "new connections, or has drifted out of step after a firmware update.":
        "A câmera sai da rede por mais ou menos um minuto e volta sozinha. As "
        "gravações no cartão SD dela não são afetadas e as configurações são "
        "mantidas.\n\nVale a tentativa quando uma câmera parou de responder, "
        "recusa conexões novas ou saiu do prumo depois de uma atualização de "
        "firmware.",
    "<b>Restart %1?</b>": "<b>Reiniciar %1?</b>",
    "The picture will be gone for about a minute. Anything being recorded "
    "right now will stop.":
        "A imagem sumirá por cerca de um minuto. O que estiver sendo gravado "
        "agora vai parar.",
    "Asking %1 to restart…": "Pedindo a %1 que reinicie…",
    "Restarting. The camera will be back in about a minute.":
        "Reiniciando. A câmera volta em mais ou menos um minuto.",
    "Factory reset and formatting the SD card are not offered here. Both are "
    "irreversible and are better done in the camera's own web interface, where "
    "the warnings are the manufacturer's.":
        "A restauração de fábrica e a formatação do cartão SD não são "
        "oferecidas aqui. Ambas são irreversíveis e é melhor fazê-las na "
        "interface web da própria câmera, onde os avisos são os do fabricante.",
    "Network": "Rede",
    "Connection": "Conexão",
    "Reading…": "Lendo…",
    "Wi-Fi signal": "Sinal Wi-Fi",
    "Wi-Fi signal unknown": "Sinal Wi-Fi desconhecido",
    "Wi-Fi signal %1 of %2": "Sinal Wi-Fi %1 de %2",
    "Link": "Enlace",
    "Address": "Endereço",
    "Netmask": "Máscara de rede",
    "Gateway": "Gateway",
    "MAC": "MAC",
    "DNS": "DNS",
    "Network name": "Nome da rede",
    "Ports": "Portas",
    "The camera reported nothing.": "A câmera não informou nada.",
    "Shown for reference. Addresses, Wi-Fi credentials and ports are changed "
    "in the camera's own web interface — a mistake here would put the camera "
    "out of reach.":
        "Mostrado a título de referência. Endereços, credenciais de Wi-Fi e "
        "portas se mudam na interface web da própria câmera — um erro aqui "
        "deixaria a câmera fora de alcance.",
    "Hardware, with frame copy (recommended)":
        "Hardware, com cópia de quadros (recomendado)",
    "Hardware, zero copy (fastest)": "Hardware, sem cópia (a mais rápida)",
    "All three decode on the graphics card where it can.\n\n“With frame copy” "
    "hands each frame through main memory. It is a few percent slower and it "
    "is the default, because the zero-copy path produces green blocks or a "
    "frozen picture on several drivers when the video sits inside another "
    "window.\n\nTry “zero copy” if you want the last few percent; go back if "
    "the picture breaks up.":
        "As três decodificam na placa de vídeo quando dá.\n\n«Com cópia de "
        "quadros» passa cada quadro pela memória principal. É alguns por cento "
        "mais lento e é o padrão, porque o caminho sem cópia produz blocos "
        "verdes ou uma imagem congelada em vários drivers quando o vídeo fica "
        "dentro de outra janela.\n\nExperimente «sem cópia» se quiser esses "
        "últimos por cento; volte atrás se a imagem se quebrar.",
    "This camera does not offer these settings.":
        "Esta câmera não oferece estas configurações.",
    "Exposure and orientation": "Exposição e orientação",
    "Day / night": "Dia / noite",
    "Automatic": "Automático",
    "Always colour": "Sempre colorido",
    "Always black and white": "Sempre preto e branco",
    "“Auto” switches to infrared as the light goes. Forcing colour at night "
    "gives a picture too dark to use; forcing black and white by day loses "
    "colour for nothing.":
        "«Auto» passa ao infravermelho conforme a luz cai. Forçar cor à noite "
        "dá uma imagem escura demais para servir; forçar preto e branco de dia "
        "perde a cor à toa.",
    "Anti-flicker": "Anticintilação",
    "Match your mains frequency — 50 Hz in Europe — or indoor lighting will "
    "beat against the shutter and the picture will pulse.":
        "Faça bater com a frequência da sua rede elétrica — 60 Hz no Brasil — "
        "ou a iluminação interna vai bater contra o obturador e a imagem vai "
        "pulsar.",
    "Exposure": "Exposição",
    "Mirror": "Espelhar",
    "Flip": "Inverter",
    "For a camera mounted upside down.":
        "Para uma câmera montada de cabeça para baixo.",
    "Backlight compensation": "Compensação de contraluz",
    "Helps when the subject stands against a bright window or sky.":
        "Ajuda quando o objeto está diante de uma janela ou de um céu claros.",
    "Noise reduction": "Redução de ruído",
    "Cleans up a dark picture, at the cost of smearing anything that moves.":
        "Limpa uma imagem escura, ao custo de borrar tudo o que se move.",
    "Rotation": "Rotação",
    "Dynamic contrast": "Contraste dinâmico",
    "Infrared illumination": "Iluminação infravermelha",
    "Infrared lamps": "Lâmpadas infravermelhas",
    "Always on": "Sempre ligadas",
    "Always off": "Sempre desligadas",
    "“Auto” turns them on when it gets dark. Switch them off if the camera "
    "looks through glass — the reflection blinds it.":
        "«Auto» as acende quando escurece. Desligue-as se a câmera olhar "
        "através de um vidro — o reflexo a cega.",
    "Overlay": "Sobreposição",
    "On-screen text": "Texto sobre a imagem",
    "Background": "Fundo",
    "Draws a box behind the text so it stays readable over a bright scene.":
        "Desenha uma caixa atrás do texto para ele continuar legível sobre uma "
        "cena clara.",
    "Watermark": "Marca-d'água",
    "Embeds a mark in the recording itself.":
        "Embute uma marca na própria gravação.",
    "The camera burns this into the picture, so it appears in every recording "
    "and every client — not only here.":
        "A câmera queima isto na imagem, então aparece em toda gravação e em "
        "todo programa — não só aqui.",
    "Motion detection in the camera": "Detecção de movimento na câmera",
    "Switched on": "Ligada",
    "Higher notices more, including shadows and headlights.":
        "Mais alto nota mais, inclusive sombras e faróis.",
    "This is the camera's own detection, the one it reports over ONVIF. "
    "leolink's own analysis of the picture is set separately, under Cameras → "
    "Events.":
        "Esta é a detecção da própria câmera, a que ela avisa por ONVIF. A "
        "análise da imagem feita pelo leolink se ajusta à parte, em Câmeras → "
        "Eventos.",
    "Recording": "Gravação",
    "Recording to the camera's card": "Gravação no cartão da câmera",
    "Overwrite when full": "Sobrescrever quando encher",
    "Off means recording simply stops once the card fills up.":
        "Desligado significa que a gravação simplesmente para assim que o "
        "cartão enche.",
    "Record before the event": "Gravar antes do evento",
    "Keeps the seconds leading up to a trigger, which is usually the "
    "interesting part.":
        "Guarda os segundos que antecedem um disparo, que costumam ser a parte "
        "interessante.",
    "File length": "Duração dos arquivos",
    "These govern what the camera writes to its own SD card. Recording to this "
    "computer is set under Cameras → Events and needs no card.":
        "Isto rege o que a câmera escreve no próprio cartão SD. A gravação "
        "neste computador se ajusta em Câmeras → Eventos e dispensa cartão.",
    "Alerts": "Alertas",
    "E-mail": "E-mail",
    "FTP": "FTP",
    "FTP upload": "Envio por FTP",
    "Push notification": "Notificação push",
    "Server": "Servidor",
    "Port": "Porta",
    "Send to": "Enviar para",
    "Encrypted": "Criptografado",
    "Not more often than": "Não mais que a cada",
    "Attach": "Anexar",
    "Directory": "Diretório",
    "Mode": "Modo",
    "Schedule": "Programação",
    "Sent by the camera itself, so they keep working when this computer is "
    "switched off. leolink's own reactions — commands, webhooks, MQTT — are "
    "under Cameras → Events.":
        "Enviados pela própria câmera, então continuam funcionando com este "
        "computador desligado. As reações do leolink — comandos, webhooks, "
        "MQTT — estão em Câmeras → Eventos.",
    "Time": "Hora",
    "Time server": "Servidor de horário",
    "Synchronise the clock": "Sincronizar o relógio",
    "Every": "A cada",
    "Scheduled restart": "Reinício programado",
    "Restart regularly": "Reiniciar com regularidade",
    "Some cameras become unreliable after weeks of uptime; a weekly restart is "
    "a cheap cure.":
        "Algumas câmeras ficam instáveis depois de semanas ligadas; um "
        "reinício semanal é uma cura barata.",
    "Day": "Dia",
    "Hour": "Hora",
    "Minute": "Minuto",
    "A camera with the wrong clock stamps its recordings wrongly, which is "
    "worth more than it sounds when you need to find one.":
        "Uma câmera com o relógio errado data mal as gravações, o que pesa "
        "mais do que parece quando você precisa achar uma.",
    "Wi-Fi": "Wi-Fi",
    "Scan": "Varrer",
    "Join network": "Entrar na rede",
    "scanning…": "varrendo…",
    "The camera is scanning for networks…": "A câmera está procurando redes…",
    "The camera scans, not this computer — what it can reach is what counts. "
    "The password is tried before it is saved, so a typo is refused rather "
    "than leaving the camera on no network at all.":
        "Quem varre é a câmera, não este computador — o que vale é o que ela "
        "alcança. A senha é testada antes de ser salva, então um erro de "
        "digitação é recusado em vez de deixar a câmera sem rede nenhuma.",
    "Change the camera's network": "Mudar a rede da câmera",
    "<b>Move %1 to “%2”?</b>": "<b>Mover %1 para «%2»?</b>",
    "The camera tests the password first and refuses if it is wrong, so this "
    "is safer than it sounds.\n\nIt will still disappear for a minute while it "
    "reconnects, and if the new network hands out a different address you will "
    "have to update it here afterwards.":
        "A câmera testa a senha primeiro e recusa se estiver errada, então "
        "isto é mais seguro do que parece.\n\nMesmo assim ela sumirá por um "
        "minuto enquanto se reconecta, e se a rede nova lhe der outro endereço "
        "você terá de atualizá-lo aqui depois.",
    "Join": "Entrar",
    "Testing the password on the camera…": "Testando a senha na câmera…",
    "Saved. The camera is reconnecting and will be back shortly.":
        "Salvo. A câmera está se reconectando e volta em breve.",
    "The camera could not join that network: %1":
        "A câmera não conseguiu entrar nessa rede: %1",
    "Addresses and ports are read here but changed in the camera's own web "
    "interface. Getting one wrong takes the camera off the network entirely, "
    "and the only way back is the reset pin — a warning dialog is no "
    "substitute for the manufacturer's own screen there.":
        "Endereços e portas são lidos aqui, mas mudados na interface web da "
        "própria câmera. Errar um deles tira a câmera inteiramente da rede, e "
        "o único caminho de volta é o pino de reinício — ali uma janela de "
        "aviso não substitui a tela do próprio fabricante.",
    "%1 fps": "%1 qps",
    "%1 Mbit/s": "%1 Mbit/s",
    "%1 kbit/s": "%1 kbit/s",
    "stream lost — reconnecting (%1)": "fluxo perdido — reconectando (%1)",
    "Hardware (recommended)": "Hardware (recomendado)",
    "Hardware, driver's choice": "Hardware, escolha do driver",
    "“Recommended” names the decoder explicitly so that decoding and drawing "
    "stay on the same graphics API. Left to itself, mpv may decode through one "
    "API and draw through another, which on some cards turns the picture solid "
    "green.\n\nIf the picture is broken, try the others in turn. “Software "
    "only” always works but costs a whole processor core at full resolution.":
        "«Recomendado» nomeia o decodificador explicitamente para que a "
        "decodificação e o desenho fiquem na mesma interface gráfica. Por "
        "conta própria, o mpv pode decodificar por uma e desenhar por outra, o "
        "que em algumas placas deixa a imagem de um verde maciço.\n\nSe a "
        "imagem sair quebrada, tente as outras uma a uma. «Somente software» "
        "sempre funciona, mas custa um núcleo inteiro do processador em "
        "resolução total.",
    "Wired": "Cabo",
    "%1 — strength unknown": "%1 — intensidade desconhecida",
    "%1 — %2 of %3": "%1 — %2 de %3",
    "WEAK SIGNAL": "SINAL FRACO",
    "BAD STREAM": "FLUXO COM DEFEITO",
    "stream ended (%1) — reconnecting": "o fluxo terminou (%1) — reconectando",
    "Open the &log file": "Abrir o arquivo de &registro",
    "What the players and the cameras reported. Worth attaching to a bug "
    "report.":
        "O que os reprodutores e as câmeras informaram. Vale a pena anexar a "
        "um relato de falha.",
    "Nothing logged yet.": "Nada registrado ainda.",
    "Bit rate looks too low": "O bitrate parece baixo demais",
    "<b>%1 kbit/s is very little for %2.</b>":
        "<b>%1 kbit/s é muito pouco para %2.</b>",
    "At this ratio the camera's encoder tends to emit damaged frames, which "
    "arrive as green blocks or a picture that freezes — not a network fault, "
    "and not something leolink can repair fully.\n\nEither raise the bit rate "
    "or lower the resolution.":
        "Nessa proporção o codificador da câmera tende a emitir quadros "
        "danificados, que chegam como blocos verdes ou uma imagem que congela "
        "— não é falha de rede, e não é algo que o leolink consiga reparar por "
        "inteiro.\n\nOu você aumenta o bitrate, ou diminui a resolução.",
    "Apply anyway": "Aplicar mesmo assim",
    "camera is reconfiguring…": "a câmera está se reconfigurando…",
    "Send a test e-mail": "Enviar um e-mail de teste",
    "Test the FTP upload": "Testar o envio por FTP",
    "Asking the camera to send a test e-mail…":
        "Pedindo à câmera que envie um e-mail de teste…",
    "Asking the camera to try the FTP server…":
        "Pedindo à câmera que teste o servidor FTP…",
    "%1: the camera reported success.": "%1: a câmera informou sucesso.",
    "Condition": "Estado",
    "Processor load %1%": "Carga do processador %1 %",
    "Encoder load %1%": "Carga do codificador %1 %",
    "Network throughput %1 kbit/s": "Tráfego de rede %1 kbit/s",
    "The camera is at its limit. Lowering the resolution or frame rate will "
    "steady it.":
        "A câmera está no limite. Baixar a resolução ou os quadros por segundo "
        "vai estabilizá-la.",
    "Firmware": "Firmware",
    "Not checked.": "Não verificado.",
    "Check for updates": "Procurar atualizações",
    "Asking Reolink…": "Perguntando à Reolink…",
    "Install update": "Instalar a atualização",
    "Update available: %1": "Atualização disponível: %1",
    "The firmware is up to date.": "O firmware está em dia.",
    "Install firmware": "Instalar o firmware",
    "<b>Update the firmware on %1?</b>": "<b>Atualizar o firmware de %1?</b>",
    "The camera downloads the update itself and restarts. It will be "
    "unreachable for several minutes.\n\nDo not cut its power during the "
    "update — a camera interrupted mid-flash usually needs sending back.":
        "A câmera baixa a atualização sozinha e reinicia. Ficará inalcançável "
        "por vários minutos.\n\nNão corte a energia dela durante a atualização "
        "— uma câmera interrompida no meio da gravação do firmware costuma "
        "precisar voltar para a assistência.",
    "Install": "Instalar",
    "Upgrading. The camera will restart on its own and be unreachable for "
    "several minutes. Do not cut its power.":
        "Atualizando. A câmera vai reiniciar sozinha e ficará inalcançável por "
        "vários minutos. Não corte a energia dela.",
    "Storage": "Armazenamento",
    "Format the SD card": "Formatar o cartão SD",
    "Formatting erases every recording on the card. There is no undo and no "
    "confirmation from the camera afterwards.":
        "Formatar apaga todas as gravações do cartão. Não há como desfazer nem "
        "confirmação da câmera depois.",
    "<b>Erase everything on the card in %1?</b>":
        "<b>Apagar tudo o que há no cartão de %1?</b>",
    "Every recording on the card is deleted. This cannot be undone, and "
    "nothing that has not already been downloaded can be recovered.":
        "Cada gravação do cartão é excluída. Isto não pode ser desfeito, e "
        "nada que ainda não tenha sido baixado poderá ser recuperado.",
    "Erase": "Apagar",
    "Formatting…": "Formatando…",
    "The card has been formatted.": "O cartão foi formatado.",
    "Factory reset is not offered here. It clears the network settings as "
    "well, and a camera that has forgotten its Wi-Fi has to be fetched down "
    "and reset by hand.":
        "A restauração de fábrica não é oferecida aqui. Ela apaga também as "
        "configurações de rede, e uma câmera que esqueceu o Wi-Fi precisa ser "
        "descida e reiniciada na mão.",
    "Users": "Usuários",
    "Rights": "Direitos",
    "Administrator": "Administrador",
    "Viewer": "Espectador",
    "Add…": "Adicionar…",
    "Change password…": "Mudar a senha…",
    "Delete": "Excluir",
    "New user": "Usuário novo",
    "User name": "Nome de usuário",
    "Password for %1": "Senha de %1",
    "Creating %1…": "Criando %1…",
    "Change password": "Mudar a senha",
    "New password for %1": "Nova senha de %1",
    "Changing the password for %1…": "Mudando a senha de %1…",
    "This is the account leolink uses": "Esta é a conta que o leolink usa",
    "Change it here and leolink will be locked out until the new password is "
    "entered under Cameras as well.":
        "Mude-a aqui e o leolink ficará de fora até a senha nova ser digitada "
        "também em Câmeras.",
    "Cannot delete this account": "Não é possível excluir esta conta",
    "leolink is signed in as “%1”. Deleting it would cut the connection to "
    "this camera immediately.":
        "O leolink está conectado como «%1». Excluí-la cortaria a ligação com "
        "esta câmera na hora.",
    "Delete user": "Excluir o usuário",
    "Delete “%1” from the camera?": "Excluir «%1» da câmera?",
    "Deleting %1…": "Excluindo %1…",
    "Done.": "Pronto.",
    "These are accounts on the camera, not in leolink. A viewer account can "
    "watch but not change anything — worth using for anything that only needs "
    "to see the picture, so a stored password cannot be turned against the "
    "camera's settings.":
        "São contas na câmera, não no leolink. Uma conta de espectador pode "
        "assistir mas não mudar nada — vale usá-la para tudo o que só precisa "
        "ver a imagem, para que uma senha guardada não possa ser voltada "
        "contra as configurações da câmera.",
    "camera is reconfiguring… %1 s": "a câmera está se reconfigurando… %1 s",
    "File format not recognised.": "Formato de arquivo não reconhecido.",
    "Invalid input.": "Entrada inválida.",
    "No free connections — the camera allows only a few sessions at a time.":
        "Sem conexões livres — a câmera admite apenas algumas sessões por vez.",
    "Session expired.": "Sessão expirada.",
    "Wrong user name or password.": "Usuário ou senha errados.",
    "Timed out.": "Tempo esgotado.",
    "This firmware does not support that command.":
        "Este firmware não suporta esse comando.",
    "Could not read the configuration.":
        "Não foi possível ler a configuração.",
    "Could not verify the configuration.":
        "Não foi possível verificar a configuração.",
    "Subsystem unavailable — typically no SD card fitted.":
        "Subsistema indisponível — normalmente por não haver cartão SD.",
    "Not permitted — this model lacks the hardware.":
        "Não permitido — este modelo não tem o hardware.",
    "Account invalid, log in again.": "Conta inválida, entre novamente.",
    "User name already taken.": "Esse nome de usuário já está em uso.",
    "Maximum number of users reached.": "Número máximo de usuários atingido.",
    "Camera busy, try again shortly.":
        "Câmera ocupada, tente de novo em instantes.",
    "IP address conflict.": "Conflito de endereços IP.",
    "Configuration test failed.": "O teste de configuração falhou.",
    "FTP login failed.": "Falha no login FTP.",
    "FTP could not create the directory.":
        "O FTP não conseguiu criar o diretório.",
    "FTP upload failed.": "Falha no envio por FTP.",
    "FTP could not reach the server.":
        "O FTP não conseguiu alcançar o servidor.",
    "Camera reported error %1.": "A câmera informou o erro %1.",
    "Cannot reach %1: %2": "Não é possível alcançar %1: %2",
    "Unexpected reply from %1.": "Resposta inesperada de %1.",
    "Login returned no token.": "O login não devolveu token algum.",
    "Snapshot failed.": "Falha ao capturar o instantâneo.",
    "ONVIF subscription failed.": "Falha na assinatura ONVIF.",
}


# Plural forms — two forms, singular first.
PLURALS: dict[str, list[str]] = {
    ", %n access point(s)": [
        ", %n ponto de acesso",
        ", %n pontos de acesso"],
    "Heard from %n access point(s) — one network, several nodes. The strongest "
    "is what is shown.": [
        "Ouvido de %n ponto de acesso — uma rede, vários nós. É mostrado o "
        "mais forte.",
        "Ouvido de %n pontos de acesso — uma rede, vários nós. É mostrado o "
        "mais forte."],
    "%n network(s) found, strongest first.": [
        "%n rede encontrada, a mais forte primeiro.",
        "%n redes encontradas, a mais forte primeiro."],
    "Asking about %n command(s)…": [
        "Perguntando sobre %n comando…",
        "Perguntando sobre %n comandos…"],
    "%n area(s) blanked": [
        "%n área tapada",
        "%n áreas tapadas"],
    "%n area(s), switched off": [
        "%n área, desligada",
        "%n áreas, desligadas"],
    "%n hour(s) a week.": [
        "%n hora por semana.",
        "%n horas por semana."],
    "%n camera(s) live": [
        "%n câmera ao vivo",
        "%n câmeras ao vivo"],
    "Saved %n snapshot(s)": [
        "%n instantâneo salvo",
        "%n instantâneos salvos"],
    "Found %n device(s)…": [
        "%n aparelho encontrado…",
        "%n aparelhos encontrados…"],
    "%n recording(s) found.": [
        "%n gravação encontrada.",
        "%n gravações encontradas."],
    "%n network(s) found.": [
        "%n rede encontrada.",
        "%n redes encontradas."],
    "%n damaged frame(s) in the last ten seconds.\n\nUsually a weak Wi-Fi "
    "signal, or a bitrate set too low for the resolution. leolink repairs what "
    "it can — this is what it could not.": [
        "%n quadro danificado nos últimos dez segundos.\n\nGeralmente um sinal "
        "Wi-Fi fraco, ou um bitrate baixo demais para a resolução. O leolink "
        "repara o que consegue — isto é o que ele não conseguiu.",
        "%n quadros danificados nos últimos dez segundos.\n\nGeralmente um "
        "sinal Wi-Fi fraco, ou um bitrate baixo demais para a resolução. O "
        "leolink repara o que consegue — isto é o que ele não conseguiu."],
}
