<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru" sourcelanguage="en">
<context>
    <name>leolink::ActionEditor</name>
    <message>
        <location filename="../src/ActionEditor.cpp" line="22"/>
        <source>%n camera name · %h host · %t time · %e event · %s on/off · %f recording · %p image</source>
        <translation>%n название камеры · %h адрес · %t время · %e событие · %s вкл/выкл · %f запись · %p изображение</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="35"/>
        <source>Run a command</source>
        <translation>Выполнить команду</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="41"/>
        <location filename="../src/ActionEditor.cpp" line="44"/>
        <source>Command</source>
        <translation>Команда</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="50"/>
        <source>Call a webhook</source>
        <translation>Вызвать вебхук</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="60"/>
        <source>Left empty, leolink sends a small JSON document describing the event.</source>
        <translation>Если оставить пустым, leolink отправит небольшой документ JSON с описанием события.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="67"/>
        <source>Address</source>
        <translation>Адрес</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="68"/>
        <source>Method</source>
        <translation>Метод</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="69"/>
        <source>Body</source>
        <translation>Тело</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="72"/>
        <source>Webhook</source>
        <translation>Webhook</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="83"/>
        <source>Publish an MQTT message</source>
        <translation>Опубликовать сообщение MQTT</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="100"/>
        <source>Left empty: the same JSON document as the webhook.</source>
        <translation>Если оставить пустым: тот же документ JSON, что и у вебхука.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="102"/>
        <source>Keep the last message on the broker</source>
        <translation>Хранить последнее сообщение на брокере</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="104"/>
        <source>A client connecting later is told the current state straight away, instead of waiting for the next event. This is what home automation usually wants.</source>
        <translation>Клиент, подключившийся позже, сразу узнаёт текущее состояние, а не ждёт следующего события. Обычно это и нужно домашней автоматизации.</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="110"/>
        <source>Broker</source>
        <translation>Брокер</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="111"/>
        <source>Port</source>
        <translation>Порт</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="112"/>
        <source>Topic</source>
        <translation>Тема</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="113"/>
        <source>User</source>
        <translation>Пользователь</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="114"/>
        <source>Password</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <location filename="../src/ActionEditor.cpp" line="115"/>
        <source>Payload</source>
        <translation>Полезная нагрузка</translation>
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
        <translation>ffmpeg не установлен, поэтому обнаружение звука недоступно.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="74"/>
        <source>No stream address for %1.</source>
        <translation>Нет адреса потока для %1.</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="101"/>
        <source>Sound detection stopped: %1</source>
        <translation>Обнаружение звука остановлено: %1</translation>
    </message>
    <message>
        <location filename="../src/AudioDetector.cpp" line="106"/>
        <source>Could not start ffmpeg for sound detection.</source>
        <translation>Не удалось запустить ffmpeg для обнаружения звука.</translation>
    </message>
</context>
<context>
    <name>leolink::BaichuanStream</name>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="52"/>
        <source>Cannot open a local port: %1</source>
        <translation>Не удаётся открыть локальный порт: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="64"/>
        <source>Baichuan login failed: %1</source>
        <translation>Не удалось войти по Baichuan: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="72"/>
        <source>The camera refused to send video: %1</source>
        <translation>Камера отказалась передавать видео: %1</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="80"/>
        <source>The player did not connect.</source>
        <translation>Проигрыватель не подключился.</translation>
    </message>
    <message>
        <location filename="../src/BaichuanStream.cpp" line="132"/>
        <source>The camera stopped sending.</source>
        <translation>Камера перестала передавать.</translation>
    </message>
</context>
<context>
    <name>leolink::CameraConfig</name>
    <message>
        <location filename="../src/Config.cpp" line="77"/>
        <source>Camera</source>
        <translation>Камера</translation>
    </message>
</context>
<context>
    <name>leolink::CameraSettingsDialog</name>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="124"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="132"/>
        <source>Reading settings from %1…</source>
        <translation>Читаем настройки с %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="137"/>
        <source>Apply to camera</source>
        <translation>Применить к камере</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="168"/>
        <source>Restarting. The camera will be back in about a minute.</source>
        <translation>Перезапускается. Камера вернётся примерно через минуту.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="184"/>
        <source>Saved. The camera is reconnecting and will be back shortly.</source>
        <translation>Сохранено. Камера переподключается и скоро вернётся.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="190"/>
        <source>%1: the camera reported success.</source>
        <translation>%1: камера сообщила об успехе.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="198"/>
        <source>Processor load %1 %</source>
        <translation>Загрузка процессора %1 %</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="203"/>
        <source>Encoder output %1 kbit/s</source>
        <translation>Поток кодировщика %1 кбит/с</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="205"/>
        <source>Network throughput %1 kbit/s</source>
        <translation>Сетевой трафик %1 кбит/с</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="207"/>
        <source>The camera is at its limit. Lowering the resolution or frame rate will steady it.</source>
        <translation>Камера на пределе. Снижение разрешения или частоты кадров её успокоит.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="227"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Administrator</source>
        <translation>Администратор</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="228"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="749"/>
        <source>Viewer</source>
        <translation>Наблюдатель</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="253"/>
        <source>Done.</source>
        <translation>Готово.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="258"/>
        <source>The card has been formatted.</source>
        <translation>Карта отформатирована.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="560"/>
        <source>Higher means better picture and more network traffic. The camera only offers the rates it can actually sustain.</source>
        <translation>Выше — лучше картинка и больше трафика. Камера предлагает только те значения, которые действительно способна выдержать.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="564"/>
        <source>Resolution</source>
        <translation>Разрешение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="565"/>
        <source>Frame rate</source>
        <translation>Частота кадров</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="566"/>
        <source>Bit rate (kbit/s)</source>
        <translation>Битрейт (кбит/с)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="567"/>
        <source>H.264 profile</source>
        <translation>Профиль H.264</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="575"/>
        <source>These change the camera itself, so every client sees the result. The choices come from the camera and differ per model.</source>
        <translation>Это меняет саму камеру, поэтому результат увидит любая программа. Список вариантов приходит от камеры и различается у разных моделей.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="588"/>
        <source>Send sound</source>
        <translation>Передавать звук</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="591"/>
        <source>The camera&apos;s microphone. With this off it still puts an audio track in the stream — an entirely silent one, which is much harder to recognise than no track at all.</source>
        <translation>Микрофон камеры. Даже выключенный, он всё равно кладёт в поток звуковую дорожку — совершенно немую, распознать которую куда труднее, чем полное её отсутствие.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="431"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="597"/>
        <source>Sound</source>
        <translation>Звук</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="106"/>
        <source>In leolink</source>
        <translation>В leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="111"/>
        <source>In the camera</source>
        <translation>В камере</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="127"/>
        <source>Try again</source>
        <translation>Повторить</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="331"/>
        <source>The camera reports it (ONVIF)</source>
        <translation>Сама камера (ONVIF)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="333"/>
        <source>leolink watches the picture</source>
        <translation>leolink, наблюдая за картинкой</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="335"/>
        <source>Either of the two</source>
        <translation>Любой из двух</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="336"/>
        <source>Do not watch</source>
        <translation>Не наблюдать</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="345"/>
        <source>&lt;b&gt;The camera reports it:&lt;/b&gt; the camera&apos;s own detector decides, and sends an ONVIF event. What it watches and how readily it triggers is set under “Detection” further down, in the camera itself.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink watches the picture:&lt;/b&gt; this computer opens a second sub-stream connection and analyses the picture. Works with any camera, including ones that report nothing — and the camera&apos;s own detector then plays no part.</source>
        <translation>&lt;b&gt;Камера сообщает сама:&lt;/b&gt; решает собственный детектор камеры, и он отправляет событие ONVIF. Что он наблюдает и насколько легко срабатывает, задаётся ниже, в разделе «Обнаружение», в самой камере.&lt;br&gt;&lt;br&gt;&lt;b&gt;leolink наблюдает за картинкой:&lt;/b&gt; этот компьютер открывает второе соединение к дополнительному потоку и анализирует изображение. Работает с любой камерой, в том числе с теми, что не сообщают ни о чём, — и тогда собственный детектор камеры ни при чём.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="356"/>
        <source>Choose what is watched…</source>
        <translation>Выбрать наблюдаемую область…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="364"/>
        <source>How much a spot in the picture must change to count. Higher notices more, including shadows and rain.</source>
        <translation>Насколько должна измениться точка изображения, чтобы это засчиталось. Выше — замечает больше, включая тени и дождь.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="369"/>
        <source> ‰</source>
        <translation> ‰</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="372"/>
        <source>How much of the watched area must change before it counts as motion. 20‰ is two percent of the picture — roughly a person at middle distance.</source>
        <translation>Какая доля наблюдаемой площади должна измениться, чтобы это считалось движением. 20 ‰ — это два процента кадра, примерно человек на средней дистанции.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="377"/>
        <source>Motion comes from</source>
        <translation>О движении сообщает</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="380"/>
        <source>How leolink learns of motion</source>
        <translation>Как leolink узнаёт о движении</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="386"/>
        <source>Minimum area</source>
        <translation>Минимальная площадь</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="388"/>
        <source>When leolink watches the picture</source>
        <translation>Когда leolink наблюдает за картинкой</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="399"/>
        <source>Raise an event on sound</source>
        <translation>Создавать событие по звуку</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="402"/>
        <source>Needs a camera with a microphone. Opens another connection to the sub stream.</source>
        <translation>Нужна камера с микрофоном. Открывает ещё одно соединение к дополнительному потоку.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="407"/>
        <source> dB</source>
        <translation> дБ</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="410"/>
        <source>-60 dB is close to silence, -20 dB a raised voice nearby.</source>
        <translation>-60 дБ — почти тишина, -20 дБ — повышенный голос рядом.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="414"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="457"/>
        <source> s</source>
        <translation> с</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="417"/>
        <source>Keeps the event up after the noise stops, so one bark is not reported four times.</source>
        <translation>Держит событие после того, как шум стих, чтобы один лай не сообщался четыре раза.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="428"/>
        <source>Sound above</source>
        <translation>Звук громче</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="429"/>
        <source>Hold for</source>
        <translation>Удерживать</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="442"/>
        <source>Detection by leolink</source>
        <translation>Обнаружение силами leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="449"/>
        <source>Record while motion lasts</source>
        <translation>Записывать, пока длится движение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="452"/>
        <source>Records on this computer from the live stream, so it works even when the camera has no SD card fitted.</source>
        <translation>Пишет на этот компьютер из живого потока, поэтому работает даже тогда, когда в камере нет карты SD.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="468"/>
        <source>Recording on this computer</source>
        <translation>Запись на этот компьютер</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="472"/>
        <source>Where the files go is the same for every camera and is set under Settings ▸ Recordings.</source>
        <translation>Куда попадают файлы — общее для всех камер и задаётся в «Настройки ▸ Записи».</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="479"/>
        <source>Follow the defaults under Settings</source>
        <translation>Следовать настройкам по умолчанию</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="480"/>
        <source>Use this camera&apos;s own</source>
        <translation>Использовать собственные для этой камеры</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="493"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="504"/>
        <source>Reactions</source>
        <translation>Реакции</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="495"/>
        <source>What happens on an event</source>
        <translation>Что происходит при событии</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="511"/>
        <source>Muted</source>
        <translation>Без звука</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="526"/>
        <source>Volume</source>
        <translation>Громкость</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="528"/>
        <source>Sound in leolink</source>
        <translation>Звук в leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="532"/>
        <source>The same two controls sit on the camera&apos;s own tile, where they are quicker to reach. Cameras start muted: opening a wall of them should not fill the room with sound from every one at once.</source>
        <translation>Те же две настройки есть на плитке самой камеры, где до них ближе. Камеры начинают без звука: открывая стену камер, не хочется наполнить комнату звуком от каждой сразу.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="542"/>
        <source>Playback</source>
        <translation>Воспроизведение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="602"/>
        <source>Main stream</source>
        <translation>Основной поток</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="603"/>
        <source>Sub stream</source>
        <translation>Дополнительный поток</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="608"/>
        <source>Video</source>
        <translation>Видео</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="622"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2130"/>
        <source>Brightness</source>
        <translation>Яркость</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="623"/>
        <source>Contrast</source>
        <translation>Контраст</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="624"/>
        <source>Saturation</source>
        <translation>Насыщенность</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="625"/>
        <source>Sharpness</source>
        <translation>Резкость</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="626"/>
        <source>Hue</source>
        <translation>Оттенок</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="628"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="683"/>
        <source>Picture</source>
        <translation>Изображение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="638"/>
        <source>Exposure and orientation</source>
        <translation>Экспозиция и ориентация</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="640"/>
        <source>Day / night</source>
        <translation>День / ночь</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="641"/>
        <source>“Auto” switches to infrared as the light goes. Forcing colour at night gives a picture too dark to use; forcing black and white by day loses colour for nothing.</source>
        <translation>«Авто» переходит в инфракрасный режим по мере убывания света. Принудительный цвет ночью даёт слишком тёмную и бесполезную картинку; принудительное чёрно-белое днём отнимает цвет впустую.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="646"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="676"/>
        <source>Automatic</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="647"/>
        <source>Always colour</source>
        <translation>Всегда цветное</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="648"/>
        <source>Always black and white</source>
        <translation>Всегда чёрно-белое</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="649"/>
        <source>Anti-flicker</source>
        <translation>Подавление мерцания</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="650"/>
        <source>Match your mains frequency — 50 Hz in Europe — or indoor lighting will beat against the shutter and the picture will pulse.</source>
        <translation>Подберите под частоту вашей электросети — 50 Гц в Европе — иначе комнатное освещение начнёт биться с затвором и картинка будет пульсировать.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="654"/>
        <source>Exposure</source>
        <translation>Экспозиция</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="655"/>
        <source>Mirror</source>
        <translation>Зеркально</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="656"/>
        <source>Flip</source>
        <translation>Перевернуть</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="657"/>
        <source>For a camera mounted upside down.</source>
        <translation>Для камеры, установленной вверх ногами.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="658"/>
        <source>Backlight compensation</source>
        <translation>Компенсация контрового света</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="659"/>
        <source>Helps when the subject stands against a bright window or sky.</source>
        <translation>Помогает, когда объект стоит на фоне яркого окна или неба.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="661"/>
        <source>Noise reduction</source>
        <translation>Шумоподавление</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="662"/>
        <source>Cleans up a dark picture, at the cost of smearing anything that moves.</source>
        <translation>Вычищает тёмную картинку ценой смазывания всего, что движется.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="664"/>
        <source>Rotation</source>
        <translation>Поворот</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="665"/>
        <source>Dynamic contrast</source>
        <translation>Динамический контраст</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="669"/>
        <source>Infrared illumination</source>
        <translation>Инфракрасная подсветка</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="671"/>
        <source>Infrared lamps</source>
        <translation>Инфракрасные лампы</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="672"/>
        <source>“Auto” turns them on when it gets dark. Switch them off if the camera looks through glass — the reflection blinds it.</source>
        <translation>«Авто» включает их с наступлением темноты. Выключите, если камера смотрит через стекло — отражение её ослепляет.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="677"/>
        <source>Always on</source>
        <translation>Всегда включены</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="678"/>
        <source>Always off</source>
        <translation>Всегда выключены</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1793"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2072"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2084"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2100"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2137"/>
        <source>User</source>
        <translation>Пользователь</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="692"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>Rights</source>
        <translation>Права</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="699"/>
        <source>Add…</source>
        <translation>Добавить…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="700"/>
        <source>Change password…</source>
        <translation>Сменить пароль…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="701"/>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="715"/>
        <source>These are accounts on the camera, not in leolink. A viewer account can watch but not change anything — worth using for anything that only needs to see the picture, so a stored password cannot be turned against the camera&apos;s settings.</source>
        <translation>Это учётные записи на камере, а не в leolink. Наблюдатель может смотреть, но ничего не менять — стоит использовать его везде, где нужно только видеть картинку, чтобы сохранённый пароль нельзя было обратить против настроек камеры.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="732"/>
        <source>Users</source>
        <translation>Пользователи</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="751"/>
        <source>New user</source>
        <translation>Новый пользователь</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="739"/>
        <source>User name</source>
        <translation>Имя пользователя</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="744"/>
        <source>Password for %1</source>
        <translation>Пароль для %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="756"/>
        <source>Creating %1…</source>
        <translation>Создаём %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>Change password</source>
        <translation>Сменить пароль</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="771"/>
        <source>New password for %1</source>
        <translation>Новый пароль для %1</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="780"/>
        <source>This is the account leolink uses</source>
        <translation>Это учётная запись, которой пользуется leolink</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="781"/>
        <source>Change it here and leolink will be locked out until the new password is entered under Cameras as well.</source>
        <translation>Смените её здесь — и leolink останется снаружи, пока новый пароль не будет введён ещё и в разделе «Камеры».</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="785"/>
        <source>Changing the password for %1…</source>
        <translation>Меняем пароль для %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="798"/>
        <source>Cannot delete this account</source>
        <translation>Эту учётную запись удалить нельзя</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="799"/>
        <source>leolink is signed in as “%1”. Deleting it would cut the connection to this camera immediately.</source>
        <translation>leolink вошёл как «%1». Её удаление тут же оборвало бы связь с этой камерой.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="804"/>
        <source>Delete user</source>
        <translation>Удалить пользователя</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="805"/>
        <source>Delete “%1” from the camera?</source>
        <translation>Удалить «%1» из камеры?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="809"/>
        <source>Deleting %1…</source>
        <translation>Удаляем %1…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="816"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1224"/>
        <source>Format the SD card</source>
        <translation>Форматировать карту SD</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="818"/>
        <source>&lt;b&gt;Erase everything on the card in %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Стереть всё, что есть на карте в %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="821"/>
        <source>Every recording on the card is deleted. This cannot be undone, and nothing that has not already been downloaded can be recovered.</source>
        <translation>Каждая запись на карте будет удалена. Отменить это нельзя, и всё, что не было скачано заранее, восстановить не удастся.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="824"/>
        <source>Erase</source>
        <translation>Стереть</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="831"/>
        <source>Formatting…</source>
        <translation>Форматирование…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="841"/>
        <source>Wi-Fi signal</source>
        <translation>Сигнал Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="845"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1169"/>
        <source>Reading…</source>
        <translation>Чтение…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="849"/>
        <source>Connection</source>
        <translation>Соединение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="862"/>
        <source>Scan</source>
        <translation>Поиск</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="866"/>
        <source>Join network</source>
        <translation>Подключиться к сети</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="880"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="914"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1803"/>
        <source>Network</source>
        <translation>Сеть</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="882"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1794"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2073"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2085"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2101"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2138"/>
        <source>Password</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="885"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="891"/>
        <source>The camera scans, not this computer — what it can reach is what counts. The password is tried before it is saved, so a typo is refused rather than leaving the camera on no network at all.</source>
        <translation>Ищет камера, а не этот компьютер — важно то, что доступно ей. Пароль проверяется до сохранения, поэтому опечатка будет отклонена, а не оставит камеру вовсе без сети.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="899"/>
        <source>Addresses and ports are read here but changed in the camera&apos;s own web interface. Getting one wrong takes the camera off the network entirely, and the only way back is the reset pin — a warning dialog is no substitute for the manufacturer&apos;s own screen there.</source>
        <translation>Адреса и порты здесь читаются, но меняются в собственном веб-интерфейсе камеры. Ошибка в одном из них полностью выведет камеру из сети, и единственный путь назад — кнопка сброса; предупреждающее окно здесь не заменит собственный экран производителя.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="944"/>
        <source>strong</source>
        <translation>сильный</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="945"/>
        <source>good</source>
        <translation>хороший</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="946"/>
        <source>fair</source>
        <translation>средний</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="947"/>
        <source>weak</source>
        <translation>слабый</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="948"/>
        <source>unknown</source>
        <translation>неизвестно</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1002"/>
        <source>%1 — %2 (%3/4)</source>
        <translation>%1 — %2 (%3/4)</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1007"/>
        <source>, %n access point(s)</source>
        <translation><numerusform>, %n точка доступа</numerusform><numerusform>, %n точки доступа</numerusform><numerusform>, %n точек доступа</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1012"/>
        <source>Signal as the camera hears it: %1 of 4</source>
        <translation>Сигнал так, как его слышит камера: %1 из 4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1014"/>
        <source>Encryption: %1</source>
        <translation>Шифрование: %1</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1016"/>
        <source>Heard from %n access point(s) — one network, several nodes. The strongest is what is shown.</source>
        <translation><numerusform>Слышно с %n точки доступа — одна сеть, несколько узлов. Показан самый сильный.</numerusform><numerusform>Слышно с %n точек доступа — одна сеть, несколько узлов. Показан самый сильный.</numerusform><numerusform>Слышно с %n точек доступа — одна сеть, несколько узлов. Показан самый сильный.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1030"/>
        <source>Some names were heard from several access points — that is a mesh. The camera joins the name, not a particular node; the mesh decides which one it talks to and hands it over as needed. To find the best spot, move the camera and watch “Wi-Fi signal” above: that is the link it actually has.</source>
        <translation>Некоторые имена были слышны с нескольких точек доступа — это mesh-сеть. Камера подключается к имени, а не к конкретному узлу; сеть сама решает, с каким из них говорить, и передаёт её по мере надобности. Чтобы найти лучшее место, перемещайте камеру и следите за «Сигналом Wi-Fi» выше: это и есть та связь, что у неё на самом деле.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1040"/>
        <source>%n network(s) found, strongest first.</source>
        <translation><numerusform>Найдена %n сеть, самая сильная первой.</numerusform><numerusform>Найдено %n сети, самая сильная первой.</numerusform><numerusform>Найдено %n сетей, самая сильная первой.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1048"/>
        <source>scanning…</source>
        <translation>поиск…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1051"/>
        <source>The camera is scanning for networks…</source>
        <translation>Камера ищет сети…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1062"/>
        <source>Change the camera&apos;s network</source>
        <translation>Сменить сеть камеры</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1064"/>
        <source>&lt;b&gt;Move %1 to “%2”?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Перевести %1 в «%2»?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1066"/>
        <source>The camera tests the password first and refuses if it is wrong, so this is safer than it sounds.

It will still disappear for a minute while it reconnects, and if the new network hands out a different address you will have to update it here afterwards.</source>
        <translation>Камера сначала проверяет пароль и отказывает, если он неверен, так что это безопаснее, чем кажется.

Она всё же пропадёт на минуту, пока переподключается, и если новая сеть выдаст ей другой адрес, его придётся потом обновить здесь.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1072"/>
        <source>Join</source>
        <translation>Подключиться</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1080"/>
        <source>Testing the password on the camera…</source>
        <translation>Проверяем пароль на камере…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1098"/>
        <source>Link</source>
        <translation>Подключение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1099"/>
        <source>Address</source>
        <translation>Адрес</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1100"/>
        <source>Netmask</source>
        <translation>Маска сети</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1101"/>
        <source>Gateway</source>
        <translation>Шлюз</translation>
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
        <translation>Имя сети</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1125"/>
        <source>Ports</source>
        <translation>Порты</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1127"/>
        <source>The camera reported nothing.</source>
        <translation>Камера ничего не сообщила.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1355"/>
        <source>Restart the camera</source>
        <translation>Перезапустить камеру</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1141"/>
        <source>The camera goes off the network for a minute or so and comes back on its own. Recordings on its SD card are not affected, and settings are kept.

Worth trying when a camera has stopped answering, is refusing new connections, or has drifted out of step after a firmware update.</source>
        <translation>Камера пропадёт из сети примерно на минуту и вернётся сама. Записи на её карте SD не пострадают, настройки сохранятся.

Стоит попробовать, когда камера перестала отвечать, отказывает в новых соединениях или разладилась после обновления прошивки.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1149"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1362"/>
        <source>Restart</source>
        <translation>Перезапуск</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1160"/>
        <source>Factory reset is not offered here. It clears the network settings too, and a camera that has forgotten its Wi-Fi has to be taken down and reached by cable — use the camera&apos;s own web interface if you really want that.</source>
        <translation>Сброса к заводским настройкам здесь нет. Он стирает и сетевые настройки, а камеру, забывшую свой Wi-Fi, придётся снимать и подключать кабелем — если вам это действительно нужно, воспользуйтесь её собственным веб-интерфейсом.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1171"/>
        <source>Condition</source>
        <translation>Состояние</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1176"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1244"/>
        <source>Not checked.</source>
        <translation>Не проверялось.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1179"/>
        <source>Check for updates</source>
        <translation>Проверить обновления</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1181"/>
        <source>The camera asks Reolink, not this computer — so it needs a way out to the internet of its own.</source>
        <translation>К Reolink обращается камера, а не этот компьютер — значит, ей нужен собственный выход в интернет.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1185"/>
        <source>Asking Reolink…</source>
        <translation>Спрашиваем Reolink…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1190"/>
        <source>Install update</source>
        <translation>Установить обновление</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1194"/>
        <source>Install firmware</source>
        <translation>Установить прошивку</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1196"/>
        <source>&lt;b&gt;Update the firmware on %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Обновить прошивку на %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1198"/>
        <source>The camera downloads the update itself and restarts. It will be unreachable for several minutes.

Do not cut its power during the update — a camera interrupted mid-flash usually needs sending back.</source>
        <translation>Камера скачивает обновление сама и перезапускается. Несколько минут она будет недоступна.

Не отключайте ей питание во время обновления — камеру, прерванную посреди записи прошивки, обычно приходится отправлять в ремонт.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1203"/>
        <source>Install</source>
        <translation>Установить</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1218"/>
        <source>Firmware</source>
        <translation>Прошивка</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1228"/>
        <source>Storage</source>
        <translation>Хранилище</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1231"/>
        <source>Formatting erases every recording on the card. There is no undo and no confirmation from the camera afterwards.</source>
        <translation>Форматирование стирает с карты все записи. Отменить это нельзя, и подтверждения от камеры потом не будет.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1248"/>
        <source>Ask the camera</source>
        <translation>Спросить камеру</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1252"/>
        <source>Copy the list</source>
        <translation>Скопировать список</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1255"/>
        <source>Copied.</source>
        <translation>Скопировано.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1263"/>
        <source>What this camera supports</source>
        <translation>Что умеет эта камера</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1266"/>
        <source>Reolink firmware differs enormously between models, and the only reliable way to know what a camera can do is to ask it. If something is missing from leolink that your camera clearly has, this list in a bug report is what makes it possible to add.</source>
        <translation>Прошивка Reolink сильно различается от модели к модели, и единственный надёжный способ узнать, что камера умеет, — спросить её саму. Если в leolink нет чего-то, что у вашей камеры явно есть, именно этот список в сообщении об ошибке позволяет это добавить.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1283"/>
        <source>Maintenance</source>
        <translation>Обслуживание</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1314"/>
        <source>Asking about %n command(s)…</source>
        <translation><numerusform>Спрашиваем про %n команду…</numerusform><numerusform>Спрашиваем про %n команды…</numerusform><numerusform>Спрашиваем про %n команд…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1331"/>
        <source>Supported (%1):
%2

Not supported (%3):
%4</source>
        <translation>Поддерживается (%1):
%2

Не поддерживается (%3):
%4</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1357"/>
        <source>&lt;b&gt;Restart %1?&lt;/b&gt;</source>
        <translation>&lt;b&gt;Перезапустить %1?&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1359"/>
        <source>The picture will be gone for about a minute. Anything being recorded right now will stop.</source>
        <translation>Изображение пропадёт примерно на минуту. Всё, что записывается прямо сейчас, остановится.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1371"/>
        <source>Asking %1 to restart…</source>
        <translation>Просим %1 перезапуститься…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1449"/>
        <source>On-screen text</source>
        <translation>Текст поверх изображения</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1451"/>
        <source>Background</source>
        <translation>Подложка</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1452"/>
        <source>Draws a box behind the text so it stays readable over a bright scene.</source>
        <translation>Рисует прямоугольник за текстом, чтобы он оставался читаемым на светлой сцене.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1454"/>
        <source>Watermark</source>
        <translation>Водяной знак</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1455"/>
        <source>Embeds a mark in the recording itself.</source>
        <translation>Встраивает метку в саму запись.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1459"/>
        <source>Privacy areas…</source>
        <translation>Приватные зоны…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1462"/>
        <source>Parts of the view the camera blanks before anything leaves it.</source>
        <translation>Части кадра, которые камера закрашивает, прежде чем что-либо покинет её.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1473"/>
        <source>Privacy</source>
        <translation>Приватность</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1477"/>
        <source>Blanked in the camera itself, so the covered part is missing from every viewer and every recording — a neighbour&apos;s window, or a desk that should not be on film.</source>
        <translation>Закрашивается в самой камере, поэтому закрытая часть отсутствует у любого зрителя и в любой записи — окно соседа или стол, которому не место на видео.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1484"/>
        <source>The camera burns this into the picture, so it appears in every recording and every client — not only here.</source>
        <translation>Камера впечатывает это прямо в изображение, поэтому оно появляется в каждой записи и в каждой программе — не только здесь.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1492"/>
        <source>Overlay</source>
        <translation>Наложение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1501"/>
        <source>Motion detection in the camera</source>
        <translation>Обнаружение движения в камере</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="385"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1503"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>Sensitivity</source>
        <translation>Чувствительность</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1504"/>
        <source>Higher notices more, including shadows and headlights.</source>
        <translation>Выше — замечает больше, включая тени и фары.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1506"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1815"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2023"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2077"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2087"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2093"/>
        <source>Switched on</source>
        <translation>Включено</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1512"/>
        <source>Choose the area…</source>
        <translation>Выбрать зону…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1514"/>
        <source>Which parts of the picture the camera watches. Everything outside the area is ignored — a road at the edge of view, a tree in the wind, a neighbour&apos;s door.</source>
        <translation>Какие части кадра камера наблюдает. Всё за пределами зоны игнорируется — дорога у края кадра, дерево на ветру, дверь соседа.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1520"/>
        <source>Where it looks</source>
        <translation>Куда она смотрит</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1524"/>
        <source>Choose the hours…</source>
        <translation>Выбрать часы…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1529"/>
        <source>A week of hours: in the ones you tick, the camera reports motion; in the rest it stays quiet. Nothing to do with how sensitive it is — that is set below.</source>
        <translation>Неделя по часам: в отмеченных камера сообщает о движении, в остальных молчит. К её чувствительности это отношения не имеет — она настраивается ниже.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1536"/>
        <source>When it reports at all</source>
        <translation>Когда она вообще сообщает</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>From</source>
        <translation>С</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1543"/>
        <source>To</source>
        <translation>До</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1555"/>
        <source>Within a day the camera can be more or less easily triggered. This is how you stop headlights at night setting everything off without making it deaf by day. The camera fixes how many periods there are; their times and sensitivities are yours.</source>
        <translation>В течение суток камера может срабатывать легче или труднее. Так фары ночью перестают срабатывать на всё подряд, а днём камера не слепнет. Сколько будет промежутков, задаёт камера; их время и чувствительность — за вами.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1563"/>
        <source>How readily it triggers</source>
        <translation>Насколько легко она срабатывает</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1571"/>
        <source>What it recognises</source>
        <translation>Что она распознаёт</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1573"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1706"/>
        <source>People</source>
        <translation>Люди</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1574"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1707"/>
        <source>Vehicles</source>
        <translation>Транспорт</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1575"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1708"/>
        <source>Animals</source>
        <translation>Животные</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1576"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="1709"/>
        <source>Faces</source>
        <translation>Лица</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1579"/>
        <source>Camera-side detection</source>
        <translation>Обнаружение в камере</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1588"/>
        <source>This is the camera&apos;s own detection, the one it reports over ONVIF. leolink&apos;s own analysis of the picture is set separately, under Cameras → Events.</source>
        <translation>Это собственное обнаружение камеры, то самое, о котором она сообщает по ONVIF. Анализ картинки силами leolink настраивается отдельно, в «Камеры → События».</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1597"/>
        <source>Detection</source>
        <translation>Обнаружение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1674"/>
        <source>%1 — the camera&apos;s detection area</source>
        <translation>%1 — зона обнаружения камеры</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1675"/>
        <source>Drag over the picture to choose what the camera watches. Darkened areas are ignored. This is the camera&apos;s own grid, %1 by %2, so it is finer than leolink&apos;s own.</source>
        <translation>Проведите по изображению, чтобы выбрать, что камера наблюдает. Затемнённые области игнорируются. Это собственная сетка камеры, %1 на %2, поэтому она мельче, чем у leolink.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1692"/>
        <source>%1 — when to watch</source>
        <translation>%1 — когда наблюдать</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1693"/>
        <source>Hours in which the camera raises motion events. Outside them it still sees, but says nothing.</source>
        <translation>Часы, в которые камера сообщает о движении. В остальное время она всё видит, но молчит.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1704"/>
        <source>Any movement</source>
        <translation>Любое движение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1705"/>
        <source>Continuous</source>
        <translation>Непрерывно</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1737"/>
        <source>This camera keeps a separate week for each kind of event. Which one?</source>
        <translation>Эта камера ведёт отдельную неделю для каждого типа событий. Какую?</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1785"/>
        <source>SIM card</source>
        <translation>SIM-карта</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1787"/>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1788"/>
        <source>Only needed if the card asks for one. Three wrong tries lock the card and it then needs a PUK, which only your operator has.</source>
        <translation>Нужен, только если карта его спрашивает. Три неверные попытки блокируют карту, и тогда потребуется PUK, который есть только у оператора.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1792"/>
        <source>Access point (APN)</source>
        <translation>Точка доступа (APN)</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1795"/>
        <source>Authentication</source>
        <translation>Аутентификация</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1796"/>
        <source>Use mobile data</source>
        <translation>Использовать мобильные данные</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1800"/>
        <source>Modem</source>
        <translation>Модем</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1802"/>
        <source>Card</source>
        <translation>Карта</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1804"/>
        <source>Type</source>
        <translation>Тип</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1805"/>
        <source>Signal</source>
        <translation>Сигнал</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1806"/>
        <source>IMEI</source>
        <translation>IMEI</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1807"/>
        <source>Card number</source>
        <translation>Номер карты</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1811"/>
        <source>Mobile connection</source>
        <translation>Мобильное соединение</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1813"/>
        <source>Data used</source>
        <translation>Израсходовано данных</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1814"/>
        <source>Monthly limit</source>
        <translation>Месячный лимит</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1822"/>
        <source>&lt;b&gt;Not tested on real hardware.&lt;/b&gt; Nobody involved in leolink owns a camera with a modem, so this was written from the protocol alone. It cannot damage anything — a command the camera does not know is simply refused — but it may equally show nothing at all.

If your camera has a SIM, “What this camera supports” under Maintenance lists the commands its firmware actually has. That list, in a bug report, is what would let this be finished properly.</source>
        <translation>&lt;b&gt;Не проверено на настоящем оборудовании.&lt;/b&gt; Ни у кого из причастных к leolink нет камеры с модемом, поэтому это написано по одному лишь протоколу. Испортить ничего нельзя — неизвестную камере команду она просто отклонит — но с тем же успехом может вообще ничего не показать.

Если в вашей камере есть SIM, пункт «Что умеет эта камера» в разделе «Обслуживание» перечисляет команды, которые её прошивка действительно знает. Именно такой список в сообщении об ошибке позволил бы довести это до ума.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1835"/>
        <source>Mobile data</source>
        <translation>Мобильные данные</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1852"/>
        <source>nothing blanked</source>
        <translation>ничего не закрашено</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1854"/>
        <source>%n area(s) blanked</source>
        <translation><numerusform>%n зона закрашена</numerusform><numerusform>%n зоны закрашены</numerusform><numerusform>%n зон закрашено</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/CameraSettingsDialog.cpp" line="1856"/>
        <source>%n area(s), switched off</source>
        <translation><numerusform>%n зона, выключено</numerusform><numerusform>%n зоны, выключено</numerusform><numerusform>%n зон, выключено</numerusform></translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1938"/>
        <source>%1 — when to record</source>
        <translation>%1 — когда записывать</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="1939"/>
        <source>Hours in which the camera records to its own card. This needs a card fitted; recording to this computer is set under Cameras → Events and works without one.</source>
        <translation>Часы, в которые камера пишет на собственную карту. Для этого нужна установленная карта; запись на этот компьютер настраивается в «Камеры → События» и обходится без неё.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2017"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2027"/>
        <source>Recording to the camera&apos;s card</source>
        <translation>Запись на карту камеры</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2019"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2029"/>
        <source>Overwrite when full</source>
        <translation>Перезаписывать при заполнении</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2020"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2032"/>
        <source>Record before the event</source>
        <translation>Записывать до события</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="466"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2021"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2035"/>
        <source>Keep recording after</source>
        <translation>Продолжать запись ещё</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2022"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2036"/>
        <source>File length</source>
        <translation>Длина файла</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2030"/>
        <source>Off means recording simply stops once the card fills up.</source>
        <translation>Выключено означает, что запись просто прекращается, как только карта заполнится.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2033"/>
        <source>Keeps the seconds leading up to a trigger, which is usually the interesting part.</source>
        <translation>Сохраняет секунды перед срабатыванием — обычно самое интересное.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2039"/>
        <source>When to record…</source>
        <translation>Когда записывать…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2042"/>
        <source>Hours of the week the camera records to its card by itself.</source>
        <translation>Часы недели, в которые камера сама пишет на свою карту.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2052"/>
        <source>These govern what the camera writes to its own SD card. Recording to this computer is set under Cameras → Events and needs no card.</source>
        <translation>Это управляет тем, что камера пишет на свою карту SD. Запись на этот компьютер настраивается в «Камеры → События» и карты не требует.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2060"/>
        <source>Recording</source>
        <translation>Запись</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2068"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2096"/>
        <source>E-mail</source>
        <translation>Эл. почта</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2070"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2082"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2098"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2135"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2192"/>
        <source>Server</source>
        <translation>Сервер</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2071"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2083"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2099"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2136"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2193"/>
        <source>Port</source>
        <translation>Порт</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2074"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2103"/>
        <source>Encrypted</source>
        <translation>Шифрование</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2075"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2104"/>
        <source>Not more often than</source>
        <translation>Не чаще, чем раз в</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2076"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2105"/>
        <source>Attach</source>
        <translation>Прикладывать</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2080"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2133"/>
        <source>FTP upload</source>
        <translation>Выгрузка по FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2086"/>
        <source>Folder</source>
        <translation>Папка</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2091"/>
        <source>Push notifications</source>
        <translation>Push-уведомления</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2102"/>
        <source>Send to</source>
        <translation>Отправлять на</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2114"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2121"/>
        <source>Siren</source>
        <translation>Сирена</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2116"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2123"/>
        <source>Sound on an alarm</source>
        <translation>Звучать при тревоге</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2117"/>
        <source>Times</source>
        <translation>Время</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2118"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2129"/>
        <location filename="../src/CameraSettingsDialog.cpp" line="2140"/>
        <source>Mode</source>
        <translation>Режим</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2126"/>
        <source>Spotlight</source>
        <translation>Прожектор</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2128"/>
        <source>On</source>
        <translation>Включён</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2139"/>
        <source>Directory</source>
        <translation>Каталог</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2144"/>
        <source>Push notification</source>
        <translation>Push-уведомление</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2146"/>
        <source>Schedule</source>
        <translation>Расписание</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2152"/>
        <source>Send a test e-mail</source>
        <translation>Отправить пробное письмо</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2155"/>
        <source>Asking the camera to send a test e-mail…</source>
        <translation>Просим камеру отправить пробное письмо…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2158"/>
        <source>Test the FTP upload</source>
        <translation>Проверить выгрузку по FTP</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2161"/>
        <source>Asking the camera to try the FTP server…</source>
        <translation>Просим камеру проверить сервер FTP…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2172"/>
        <source>Sent by the camera itself, so they keep working when this computer is switched off. leolink&apos;s own reactions — commands, webhooks, MQTT — are under Cameras → Events.</source>
        <translation>Их отправляет сама камера, поэтому они продолжают работать, когда этот компьютер выключен. Собственные реакции leolink — команды, вебхуки, MQTT — находятся в «Камеры → События».</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2181"/>
        <source>Alerts</source>
        <translation>Оповещения</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2189"/>
        <source>Time server</source>
        <translation>Сервер времени</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2191"/>
        <source>Synchronise the clock</source>
        <translation>Синхронизировать часы</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2194"/>
        <source>Every</source>
        <translation>Каждые</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2198"/>
        <source>Scheduled restart</source>
        <translation>Перезапуск по расписанию</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2200"/>
        <source>Restart regularly</source>
        <translation>Перезапускать регулярно</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2201"/>
        <source>Some cameras become unreliable after weeks of uptime; a weekly restart is a cheap cure.</source>
        <translation>Некоторые камеры начинают вести себя ненадёжно после недель работы; еженедельный перезапуск — дешёвое лекарство.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2204"/>
        <source>Day</source>
        <translation>День</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2205"/>
        <source>Hour</source>
        <translation>Час</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2206"/>
        <source>Minute</source>
        <translation>Минута</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2210"/>
        <source>A camera with the wrong clock stamps its recordings wrongly, which is worth more than it sounds when you need to find one.</source>
        <translation>Камера с неверными часами неправильно датирует записи, а это значит куда больше, чем кажется, когда нужную запись приходится искать.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2218"/>
        <source>Time</source>
        <translation>Время</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2340"/>
        <source>Ready.</source>
        <translation>Готово.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2445"/>
        <source>Writing to the camera…</source>
        <translation>Запись в камеру…</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2503"/>
        <source>Nothing to write.</source>
        <translation>Записывать нечего.</translation>
    </message>
    <message>
        <location filename="../src/CameraSettingsDialog.cpp" line="2520"/>
        <source>Saved. Changing the encoder restarts the stream, so the picture may drop out for a moment.</source>
        <translation>Сохранено. Смена кодировщика перезапускает поток, поэтому изображение может ненадолго пропасть.</translation>
    </message>
</context>
<context>
    <name>leolink::DiagnosticsDialog</name>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="59"/>
        <source>Diagnostics</source>
        <translation>Диагностика</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="64"/>
        <source>Errors only</source>
        <translation>Только ошибки</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="65"/>
        <source>Warnings and errors</source>
        <translation>Предупреждения и ошибки</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="66"/>
        <source>Normal activity</source>
        <translation>Обычная работа</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="67"/>
        <source>Everything</source>
        <translation>Всё</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="71"/>
        <source>All areas</source>
        <translation>Все области</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="78"/>
        <source>Search…</source>
        <translation>Поиск…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="82"/>
        <source>Show</source>
        <translation>Показывать</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="94"/>
        <source>Detailed logging</source>
        <translation>Подробный журнал</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="97"/>
        <source>Records every request to the camera, every decoder decision and every reconnect. Leave it off for everyday use — switch it on when something is wrong, reproduce the problem, then send the report.</source>
        <translation>Записывает каждый запрос к камере, каждое решение декодера и каждое переподключение. В повседневной работе держите выключенным — включите, когда что-то не так, воспроизведите проблему и лишь затем отправьте отчёт.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="105"/>
        <source>Follow new lines</source>
        <translation>Следовать за новыми строками</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="120"/>
        <source>Copy report</source>
        <translation>Скопировать отчёт</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="121"/>
        <source>System details and the log, ready to paste into a bug report.</source>
        <translation>Сведения о системе и журнал, готовые для вставки в сообщение об ошибке.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="125"/>
        <source>Report copied.</source>
        <translation>Отчёт скопирован.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="128"/>
        <source>Save report…</source>
        <translation>Сохранить отчёт…</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="131"/>
        <location filename="../src/DiagnosticsDialog.cpp" line="138"/>
        <source>Save report</source>
        <translation>Сохранить отчёт</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="133"/>
        <source>Text files (*.txt)</source>
        <translation>Текстовые файлы (*.txt)</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="139"/>
        <source>Could not write %1.</source>
        <translation>Не удалось записать %1.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="143"/>
        <source>Saved to %1</source>
        <translation>Сохранено в %1</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="147"/>
        <source>Open log folder</source>
        <translation>Открыть папку журнала</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="158"/>
        <source>Passwords, session tokens and internet addresses are removed before anything is written, so this can be shared as it is. Addresses inside your own network are kept — they are usually the first clue.</source>
        <translation>Пароли, сессионные ключи и интернет-адреса удаляются до записи, поэтому отчёт можно передавать как есть. Адреса внутри вашей сети сохраняются — обычно они и есть первая зацепка.</translation>
    </message>
    <message>
        <location filename="../src/DiagnosticsDialog.cpp" line="219"/>
        <source>%1 of %2 lines</source>
        <translation>%1 из %2 строк</translation>
    </message>
</context>
<context>
    <name>leolink::Discovery</name>
    <message>
        <location filename="../src/Discovery.cpp" line="66"/>
        <source>Cannot open a UDP socket for discovery.</source>
        <translation>Не удаётся открыть UDP-сокет для поиска.</translation>
    </message>
</context>
<context>
    <name>leolink::EventDispatcher</name>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <location filename="../src/EventActions.cpp" line="108"/>
        <source>Command</source>
        <translation>Команда</translation>
    </message>
    <message>
        <location filename="../src/EventActions.cpp" line="101"/>
        <source>could not be started</source>
        <translation>не удалось запустить</translation>
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
        <translation>неверный адрес</translation>
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
        <translation>Журнал событий</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="28"/>
        <source>All cameras</source>
        <translation>Все камеры</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="35"/>
        <source>All events</source>
        <translation>Все события</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="36"/>
        <source>Motion</source>
        <translation>Движение</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="37"/>
        <source>With recording</source>
        <translation>С записью</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="42"/>
        <source>Camera:</source>
        <translation>Камера:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="45"/>
        <source>Show:</source>
        <translation>Показывать:</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="49"/>
        <source>Refresh</source>
        <translation>Обновить</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>When</source>
        <translation>Когда</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Camera</source>
        <translation>Камера</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Event</source>
        <translation>Событие</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="57"/>
        <source>Media</source>
        <translation>Медиа</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="77"/>
        <location filename="../src/EventLogDialog.cpp" line="169"/>
        <source>no preview</source>
        <translation>нет предпросмотра</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="83"/>
        <location filename="../src/EventLogDialog.cpp" line="190"/>
        <source>Open recording</source>
        <translation>Открыть запись</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="99"/>
        <source>Clear log…</source>
        <translation>Очистить журнал…</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="140"/>
        <source>video</source>
        <translation>видео</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source>image</source>
        <translation>изображение</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="142"/>
        <source> + image</source>
        <translation> + изображение</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="147"/>
        <source>no events recorded yet</source>
        <translation>событий пока не записано</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="170"/>
        <source>recording only</source>
        <translation>только запись</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="174"/>
        <source>&lt;b&gt;%1&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="178"/>
        <source>Recording: %1%2</source>
        <translation>Запись: %1%2</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="180"/>
        <source> (file missing)</source>
        <translation> (файл отсутствует)</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="183"/>
        <source>Image: %1</source>
        <translation>Изображение: %1</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="189"/>
        <source>Open image</source>
        <translation>Открыть изображение</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="204"/>
        <source>Nothing to open</source>
        <translation>Открывать нечего</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="205"/>
        <source>The file for this event is no longer there.</source>
        <translation>Файла этого события больше нет.</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="214"/>
        <source>Clear event log</source>
        <translation>Очистить журнал событий</translation>
    </message>
    <message>
        <location filename="../src/EventLogDialog.cpp" line="215"/>
        <source>Delete the whole event history?

Recorded videos and images stay on disk — only the log is cleared.</source>
        <translation>Удалить всю историю событий?

Записанные видео и изображения останутся на диске — очищается только журнал.</translation>
    </message>
</context>
<context>
    <name>leolink::Log</name>
    <message>
        <location filename="../src/Log.cpp" line="283"/>
        <location filename="../src/Log.cpp" line="295"/>
        <source>Application</source>
        <translation>Приложение</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="284"/>
        <source>Camera API</source>
        <translation>Интерфейс камеры</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="285"/>
        <source>Video</source>
        <translation>Видео</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="286"/>
        <source>ONVIF events</source>
        <translation>События ONVIF</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="287"/>
        <source>Detection</source>
        <translation>Обнаружение</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="288"/>
        <source>Recording</source>
        <translation>Запись</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="289"/>
        <source>Event actions</source>
        <translation>Действия по событию</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="290"/>
        <source>Network</source>
        <translation>Сеть</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="291"/>
        <source>Baichuan</source>
        <translation>Baichuan</translation>
    </message>
    <message>
        <location filename="../src/Log.cpp" line="292"/>
        <source>User interface</source>
        <translation>Интерфейс пользователя</translation>
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
        <translation>%1 не удалось: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="110"/>
        <source>No cameras configured yet.

Use “Cameras…” to add one.</source>
        <translation>Пока не настроено ни одной камеры.

Добавьте её через «Камеры…».</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="253"/>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="255"/>
        <source>&amp;Cameras…</source>
        <translation>&amp;Камеры…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="260"/>
        <source>&amp;Settings…</source>
        <translation>&amp;Настройки…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="266"/>
        <source>&amp;Save snapshots…</source>
        <translation>&amp;Сохранить снимки…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="271"/>
        <source>&amp;Record all cameras</source>
        <translation>&amp;Записывать все камеры</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="278"/>
        <source>&amp;Event log…</source>
        <translation>&amp;Журнал событий…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="286"/>
        <source>Recordings on the &amp;camera…</source>
        <translation>Записи на &amp;камере…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="288"/>
        <source>Browse what is stored on the camera&apos;s own SD card.</source>
        <translation>Просмотрите то, что лежит на собственной карте SD камеры.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="292"/>
        <location filename="../src/MainWindow.cpp" line="725"/>
        <location filename="../src/MainWindow.cpp" line="1654"/>
        <source>No cameras configured</source>
        <translation>Камеры не настроены</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Which camera</source>
        <translation>Какая камера</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="303"/>
        <source>Show recordings from</source>
        <translation>Показать записи с</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="315"/>
        <source>Open &amp;recordings folder</source>
        <translation>Открыть папку &amp;записей</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="323"/>
        <source>&amp;Quit</source>
        <translation>В&amp;ыход</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="328"/>
        <source>&amp;View</source>
        <translation>&amp;Вид</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="330"/>
        <source>&amp;Full screen</source>
        <translation>&amp;Полный экран</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="369"/>
        <source>Show &amp;menu bar</source>
        <translation>Показывать строку &amp;меню</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="383"/>
        <source>Show &amp;toolbar</source>
        <translation>Показывать панель &amp;инструментов</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="392"/>
        <source>Show status &amp;bar</source>
        <translation>Показывать строку &amp;состояния</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="401"/>
        <source>Hide window &amp;decoration</source>
        <translation>Скрыть &amp;рамку окна</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="413"/>
        <source>Drag the strip under a camera to move the window. Ctrl+Shift+D brings the frame back, Ctrl+M the menu.</source>
        <translation>Чтобы передвинуть окно, потяните полосу под камерой. Ctrl+Shift+D возвращает рамку, Ctrl+M — меню.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="420"/>
        <source>&amp;Help</source>
        <translation>&amp;Справка</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="422"/>
        <source>&amp;Online handbook</source>
        <translation>Руководство в &amp;сети</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="429"/>
        <source>&amp;Protocol notes</source>
        <translation>Заметки о &amp;протоколе</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="435"/>
        <source>&amp;Diagnostics…</source>
        <translation>&amp;Диагностика…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="438"/>
        <source>What leolink and the cameras have been doing — and a report to attach to a bug report.</source>
        <translation>Чем занимались leolink и камеры — и отчёт, который можно приложить к сообщению об ошибке.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="442"/>
        <source>&amp;Report a problem</source>
        <translation>Сообщить о п&amp;роблеме</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="447"/>
        <source>Report a problem</source>
        <translation>Сообщить о проблеме</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="449"/>
        <source>&lt;b&gt;Attach a diagnostics report&lt;/b&gt;</source>
        <translation>&lt;b&gt;Приложите диагностический отчёт&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="451"/>
        <source>It records what your machine is, what the cameras answered and where things went wrong — with passwords and addresses already removed. Without it, most reports cannot be followed up.

If the problem is one you can trigger, switch on detailed logging in the diagnostics window first, make it happen again, then copy the report.</source>
        <translation>Он фиксирует, что у вас за машина, что ответили камеры и где всё пошло не так — пароли и адреса уже удалены. Без него большинство сообщений невозможно разобрать.

Если проблему удаётся вызвать самому, сначала включите подробный журнал в окне диагностики, повторите её и лишь затем скопируйте отчёт.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="458"/>
        <source>Open diagnostics</source>
        <translation>Открыть диагностику</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="460"/>
        <source>Go to the issue tracker</source>
        <translation>Перейти к трекеру задач</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="471"/>
        <source>&amp;About leolink</source>
        <translation>&amp;О leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="474"/>
        <source>About leolink</source>
        <translation>О leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="475"/>
        <source>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;A native Linux client for Reolink cameras.&lt;/p&gt;&lt;p&gt;Speaks the camera&apos;s own protocols directly: HTTP API, RTSP and ONVIF on the local network, and Reolink&apos;s P2P service when you want to reach a camera from elsewhere.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;Handbook&lt;/a&gt; · &lt;a href=&quot;https://github.com/tombueng/leolink&quot;&gt;Source&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Not affiliated with or endorsed by Reolink.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;leolink %1&lt;/h3&gt;&lt;p&gt;Родной клиент Linux для камер Reolink.&lt;/p&gt;&lt;p&gt;Говорит на собственных протоколах камеры напрямую: HTTP-интерфейс, RTSP и ONVIF в локальной сети, а также служба P2P от Reolink, когда до камеры нужно дотянуться извне.&lt;/p&gt;&lt;p&gt;&lt;a href="%2"&gt;Руководство&lt;/a&gt; · &lt;a href="https://github.com/tombueng/leolink"&gt;Исходный код&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Не связан с Reolink и не поддерживается ею.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="487"/>
        <source>Main</source>
        <translation>Основная</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="499"/>
        <source>Ready</source>
        <translation>Готово</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="515"/>
        <source>Leave full screen</source>
        <translation>Выйти из полного экрана</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="522"/>
        <location filename="../src/MainWindow.cpp" line="586"/>
        <source>Cameras…</source>
        <translation>Камеры…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="524"/>
        <source>Event log…</source>
        <translation>Журнал событий…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="530"/>
        <location filename="../src/MainWindow.cpp" line="589"/>
        <source>Quit</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="580"/>
        <source>Show window</source>
        <translation>Показать окно</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="749"/>
        <source>%n camera(s) live</source>
        <translation><numerusform>%n камера в эфире</numerusform><numerusform>%n камеры в эфире</numerusform><numerusform>%n камер в эфире</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="958"/>
        <source>Esc leaves full screen</source>
        <translation>Esc выходит из полного экрана</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="965"/>
        <location filename="../src/MainWindow.cpp" line="1004"/>
        <source>Double-click for the grid · Esc leaves full screen</source>
        <translation>Двойной щелчок — вернуться к сетке · Esc выходит из полного экрана</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1002"/>
        <source>Esc leaves full screen · double-click a camera to fill the screen</source>
        <translation>Esc выходит из полного экрана · двойной щелчок по камере разворачивает её на весь экран</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1027"/>
        <source>Grid view</source>
        <translation>Сетка</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1209"/>
        <location filename="../src/MainWindow.cpp" line="1332"/>
        <source>Cannot create %1</source>
        <translation>Не удаётся создать %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1246"/>
        <source>Recording %1</source>
        <translation>Запись %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1254"/>
        <source>Saved %1</source>
        <translation>Сохранено %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1260"/>
        <location filename="../src/MainWindow.cpp" line="1367"/>
        <source>Recording stopped</source>
        <translation>Запись остановлена</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1267"/>
        <source>%1: %2</source>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1348"/>
        <source>Recording started</source>
        <translation>Запись начата</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1366"/>
        <source>Recording all cameras</source>
        <translation>Идёт запись всех камер</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1447"/>
        <source>%1 at %2</source>
        <translation>%1 у %2</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1467"/>
        <source>Motion detected</source>
        <translation>Обнаружено движение</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1479"/>
        <source>Sound detected</source>
        <translation>Обнаружен звук</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1502"/>
        <source>Menu bar hidden</source>
        <translation>Строка меню скрыта</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1503"/>
        <source>With both the menu bar and the toolbar hidden, press Ctrl+M to bring the menu back.</source>
        <translation>Когда скрыты и строка меню, и панель инструментов, нажмите Ctrl+M, чтобы вернуть меню.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1522"/>
        <source>Cannot save</source>
        <translation>Не удаётся сохранить</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1523"/>
        <source>Settings could not be written to %1.</source>
        <translation>Настройки не удалось записать в %1.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1589"/>
        <source>Play through %1</source>
        <translation>Воспроизвести через %1</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1590"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>Звуковые файлы (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Все файлы (*)</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1602"/>
        <source>Speaking through the camera…</source>
        <translation>Говорим через камеру…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1609"/>
        <source>Finished.</source>
        <translation>Готово.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1732"/>
        <source>Nothing to capture</source>
        <translation>Снимать нечего</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1737"/>
        <source>Save snapshots to</source>
        <translation>Сохранять снимки в</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/MainWindow.cpp" line="1755"/>
        <source>Saved %n snapshot(s)</source>
        <translation><numerusform>Сохранён %n снимок</numerusform><numerusform>Сохранено %n снимка</numerusform><numerusform>Сохранено %n снимков</numerusform></translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1773"/>
        <source>Welcome to leolink</source>
        <translation>Добро пожаловать в leolink</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1775"/>
        <source>&lt;b&gt;No cameras are configured yet.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Пока не настроено ни одной камеры.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1777"/>
        <source>Add a camera with its address, user name and password. leolink talks to the camera directly on your network — no cloud account is involved.&lt;p&gt;The handbook covers what each option does.</source>
        <translation>Добавьте камеру с её адресом, именем пользователя и паролем. leolink говорит с камерой напрямую в вашей сети — никакой облачной учётной записи не требуется.&lt;p&gt;Что делает каждый параметр, описано в руководстве.</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1781"/>
        <source>Add camera…</source>
        <translation>Добавить камеру…</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1782"/>
        <source>Open handbook</source>
        <translation>Открыть руководство</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1858"/>
        <source>leolink is still running</source>
        <translation>leolink продолжает работать</translation>
    </message>
    <message>
        <location filename="../src/MainWindow.cpp" line="1859"/>
        <source>Cameras keep recording. Use the tray icon to come back.</source>
        <translation>Камеры продолжают запись. Чтобы вернуться, воспользуйтесь значком в области уведомлений.</translation>
    </message>
</context>
<context>
    <name>leolink::MaskCanvas</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="424"/>
        <source>no picture available</source>
        <translation>изображение недоступно</translation>
    </message>
</context>
<context>
    <name>leolink::MaskEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="461"/>
        <source>%1 — privacy areas</source>
        <translation>%1 — приватные зоны</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="468"/>
        <source>Drag out the parts of the view the camera should blank. It blacks them out before anything leaves the device, so they are missing from the live picture, from recordings and from every other client — including the manufacturer&apos;s app.</source>
        <translation>Выделите части кадра, которые камера должна закрасить. Она делает это до того, как что-либо покинет устройство, поэтому их нет ни в живой картинке, ни в записях, ни в любой другой программе — включая приложение производителя.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="475"/>
        <source>Remove the last</source>
        <translation>Удалить последнюю</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="476"/>
        <source>Remove all</source>
        <translation>Удалить все</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="492"/>
        <source>Fetching a picture from %1…</source>
        <translation>Получаем изображение с %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="514"/>
        <source>No picture: %1 — the areas can still be drawn.</source>
        <translation>Нет изображения: %1 — зоны всё равно можно нарисовать.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="524"/>
        <source>%1 of %2 areas</source>
        <translation>%1 из %2 зон</translation>
    </message>
</context>
<context>
    <name>leolink::MotionDetector</name>
    <message>
        <location filename="../src/MotionDetector.cpp" line="59"/>
        <source>ffmpeg is not installed, so motion detection is unavailable.</source>
        <translation>ffmpeg не установлен, поэтому обнаружение движения недоступно.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="100"/>
        <source>No stream address for %1.</source>
        <translation>Нет адреса потока для %1.</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="129"/>
        <source>Motion detection stopped: %1</source>
        <translation>Обнаружение движения остановлено: %1</translation>
    </message>
    <message>
        <location filename="../src/MotionDetector.cpp" line="154"/>
        <source>Could not start ffmpeg for motion detection.</source>
        <translation>Не удалось запустить ffmpeg для обнаружения движения.</translation>
    </message>
</context>
<context>
    <name>leolink::MotionWatcher</name>
    <message>
        <location filename="../src/MotionWatcher.cpp" line="157"/>
        <source>ONVIF subscription failed.</source>
        <translation>Не удалось оформить подписку ONVIF.</translation>
    </message>
</context>
<context>
    <name>leolink::MqttPublisher</name>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="46"/>
        <source>MQTT broker or topic not set.</source>
        <translation>Не задан брокер или тема MQTT.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="58"/>
        <source>MQTT broker did not respond.</source>
        <translation>Брокер MQTT не ответил.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="65"/>
        <source>MQTT: %1</source>
        <translation>MQTT: %1</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="106"/>
        <source>MQTT: unexpected reply from the broker.</source>
        <translation>MQTT: неожиданный ответ брокера.</translation>
    </message>
    <message>
        <location filename="../src/MqttPublisher.cpp" line="120"/>
        <source>MQTT refused the connection: %1</source>
        <translation>MQTT отклонил соединение: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PlaybackBrowser</name>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="28"/>
        <source>%1 — recordings on the camera</source>
        <translation>%1 — записи на камере</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="38"/>
        <source>Main stream</source>
        <translation>Основной поток</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="39"/>
        <source>Sub stream</source>
        <translation>Дополнительный поток</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="41"/>
        <source>Search</source>
        <translation>Найти</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="45"/>
        <source>From</source>
        <translation>С</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="47"/>
        <source>to</source>
        <translation>по</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Start</source>
        <translation>Начало</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Length</source>
        <translation>Длительность</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="58"/>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="69"/>
        <source>Play</source>
        <translation>Воспроизвести</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="70"/>
        <source>Download…</source>
        <translation>Скачать…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="81"/>
        <source>Pick a period and press Search. Recordings only exist if the camera has an SD card fitted.</source>
        <translation>Выберите период и нажмите «Найти». Записи существуют, только если в камеру вставлена карта SD.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="112"/>
        <source>Asking %1…</source>
        <translation>Спрашиваем %1…</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="151"/>
        <source>Nothing found in that period. Either nothing was recorded, or the camera has no SD card.</source>
        <translation>За этот период ничего не найдено. Либо ничего не записывалось, либо в камере нет карты SD.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/PlaybackBrowser.cpp" line="154"/>
        <source>%n recording(s) found.</source>
        <translation><numerusform>Найдена %n запись.</numerusform><numerusform>Найдено %n записи.</numerusform><numerusform>Найдено %n записей.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="182"/>
        <source>No session with the camera — search first.</source>
        <translation>Нет сессии с камерой — сначала выполните поиск.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="192"/>
        <source>No player</source>
        <translation>Нет проигрывателя</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="193"/>
        <source>mpv was not found. The recording is at:

%1</source>
        <translation>mpv не найден. Запись находится здесь:

%1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="212"/>
        <source>Save recording</source>
        <translation>Сохранить запись</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="218"/>
        <source>Cannot write to %1.</source>
        <translation>Не удаётся записать в %1.</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="260"/>
        <source>Saved to %1</source>
        <translation>Сохранено в %1</translation>
    </message>
    <message>
        <location filename="../src/PlaybackBrowser.cpp" line="263"/>
        <source>Download failed: %1</source>
        <translation>Не удалось скачать: %1</translation>
    </message>
</context>
<context>
    <name>leolink::PreferencesDialog</name>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="51"/>
        <source>Settings</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="55"/>
        <source>Window</source>
        <translation>Окно</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="56"/>
        <source>On motion</source>
        <translation>При движении</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="57"/>
        <source>Reactions</source>
        <translation>Реакции</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="58"/>
        <source>Recordings</source>
        <translation>Записи</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="59"/>
        <location filename="../src/PreferencesDialog.cpp" line="315"/>
        <source>Video</source>
        <translation>Видео</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="60"/>
        <source>General</source>
        <translation>Общее</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="79"/>
        <source>Show menu bar</source>
        <translation>Показывать строку меню</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="81"/>
        <source>Ctrl+M toggles this at any time.</source>
        <translation>Ctrl+M переключает это в любой момент.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="82"/>
        <source>Show toolbar</source>
        <translation>Показывать панель инструментов</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="84"/>
        <source>Show status bar</source>
        <translation>Показывать строку состояния</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="86"/>
        <source>Hide window decoration</source>
        <translation>Скрыть рамку окна</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="88"/>
        <source>For wall displays. Ctrl+Shift+D toggles it.</source>
        <translation>Для настенных экранов. Переключается по Ctrl+Shift+D.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="96"/>
        <source>Appearance</source>
        <translation>Внешний вид</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="99"/>
        <source>Show an icon in the notification area</source>
        <translation>Показывать значок в области уведомлений</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="102"/>
        <source>Closing the window hides it instead of quitting</source>
        <translation>Закрытие окна скрывает его, а не завершает программу</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="105"/>
        <source>Minimising hides the window to the tray</source>
        <translation>Сворачивание убирает окно в область уведомлений</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="122"/>
        <source>Notification area</source>
        <translation>Область уведомлений</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="138"/>
        <source>Tint the tile red for a moment</source>
        <translation>Ненадолго подсветить плитку красным</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="141"/>
        <source>So a glance at a wall of cameras is enough to see which one it was.</source>
        <translation>Чтобы одного взгляда на стену камер хватало понять, какая это была.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="147"/>
        <source> ms</source>
        <translation> мс</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="153"/>
        <source>Play a sound</source>
        <translation>Проиграть звук</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="159"/>
        <source>Empty: the desktop&apos;s own notification sound</source>
        <translation>Пусто: звук уведомления самой системы</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="161"/>
        <location filename="../src/PreferencesDialog.cpp" line="252"/>
        <source>Browse…</source>
        <translation>Обзор…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="164"/>
        <source>Sound to play</source>
        <translation>Какой звук проигрывать</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="165"/>
        <source>Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;All files (*)</source>
        <translation>Звуковые файлы (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;Все файлы (*)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="184"/>
        <source>For</source>
        <translation>В течение</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="186"/>
        <source>Sound file</source>
        <translation>Звуковой файл</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="188"/>
        <source>On the screen</source>
        <translation>На экране</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="192"/>
        <source>Bring the window up when motion is detected</source>
        <translation>Показывать окно, когда обнаружено движение</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="196"/>
        <source>Previous size</source>
        <translation>Прежний размер</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="197"/>
        <source>Full screen</source>
        <translation>Полный экран</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="206"/>
        <source>Come back as</source>
        <translation>Возвращаться как</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="208"/>
        <source>The window</source>
        <translation>Окно</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="215"/>
        <source>Which cameras raise an event at all, and how, is set for each camera under Cameras ▸ Settings ▸ Detection by leolink.</source>
        <translation>Какие камеры вообще создают события и как — задаётся для каждой в «Камеры ▸ Настройки ▸ Обнаружение силами leolink».</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="232"/>
        <source>What leolink does when a camera reports something. A camera follows these unless its own dialog says otherwise — all of them or none, never half: settings that are partly inherited are the hardest kind to reason about when something does not fire.</source>
        <translation>Что делает leolink, когда камера о чём-то сообщает. Камера следует этому, пока её собственный диалог не скажет иначе — всё или ничего, но не наполовину: частично унаследованные настройки труднее всего распутать, когда что-то не срабатывает.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="255"/>
        <location filename="../src/PreferencesDialog.cpp" line="265"/>
        <source>Recordings folder</source>
        <translation>Папка записей</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="267"/>
        <source>Recordings and stills</source>
        <translation>Записи и снимки</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="273"/>
        <source>Recordings are written as Matroska without re-encoding: the picture keeps the camera&apos;s original quality and the processor stays nearly idle.

Whether a camera records at all is its own setting, under Cameras ▸ Settings ▸ Reactions.</source>
        <translation>Записи пишутся в Matroska без перекодирования: изображение сохраняет исходное качество камеры, а процессор остаётся почти без нагрузки.

Записывает ли камера вообще — её собственная настройка, в «Камеры ▸ Настройки ▸ Реакции».</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="289"/>
        <source>Hardware (recommended)</source>
        <translation>Аппаратное (рекомендуется)</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="290"/>
        <source>Hardware, driver&apos;s choice</source>
        <translation>Аппаратное, на усмотрение драйвера</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="291"/>
        <source>Hardware, with frame copy</source>
        <translation>Аппаратное, с копированием кадров</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="292"/>
        <source>Software only</source>
        <translation>Только программное</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="294"/>
        <source>“Recommended” names the decoder explicitly so that decoding and drawing stay on the same graphics API. Left to itself, mpv may decode through one API and draw through another, which on some cards turns the picture solid green.

If the picture is broken, try the others in turn. “Software only” always works but costs a whole processor core at full resolution.</source>
        <translation>«Рекомендуется» задаёт декодер явно, чтобы декодирование и отрисовка остались в одном графическом интерфейсе. Предоставленный сам себе, mpv может декодировать через один, а рисовать через другой, отчего на некоторых картах изображение становится сплошь зелёным.

Если картинка разваливается, попробуйте остальные по очереди. «Только программное» работает всегда, но при полном разрешении съедает целое ядро процессора.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="305"/>
        <source>Favour low latency over smoothness</source>
        <translation>Предпочитать низкую задержку плавности</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="308"/>
        <source>Keeps buffering to a minimum. Turn this off if a high-bitrate stream stutters over a busy network.</source>
        <translation>Сводит буферизацию к минимуму. Выключите, если поток с высоким битрейтом дёргается в загруженной сети.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="312"/>
        <source>Decoding</source>
        <translation>Декодирование</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="331"/>
        <source>System language</source>
        <translation>Язык системы</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="358"/>
        <location filename="../src/PreferencesDialog.cpp" line="362"/>
        <source>Language</source>
        <translation>Язык</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="360"/>
        <source>Takes effect after restarting leolink.</source>
        <translation>Вступает в силу после перезапуска leolink.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="365"/>
        <source>Detailed logging</source>
        <translation>Подробный журнал</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="368"/>
        <source>Records every request to the camera, every decoder decision and every reconnect, in ~/.local/share/leolink/leolink.log.</source>
        <translation>Записывает каждый запрос к камере, каждое решение декодера и каждое переподключение в ~/.local/share/leolink/leolink.log.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="371"/>
        <source>Open diagnostics…</source>
        <translation>Открыть диагностику…</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="390"/>
        <source>Errors and warnings are always recorded. Detailed logging adds the conversation with the camera — switch it on when something is wrong, reproduce it, then send the report from Help ▸ Diagnostics. Passwords and tokens are removed before anything is written.</source>
        <translation>Ошибки и предупреждения записываются всегда. Подробный журнал добавляет переписку с камерой — включите его, когда что-то не так, воспроизведите проблему, затем отправьте отчёт из «Справка ▸ Диагностика». Пароли и сессионные ключи удаляются до записи.</translation>
    </message>
    <message>
        <location filename="../src/PreferencesDialog.cpp" line="397"/>
        <source>Diagnostics</source>
        <translation>Диагностика</translation>
    </message>
</context>
<context>
    <name>leolink::Recorder</name>
    <message>
        <location filename="../src/Recorder.cpp" line="55"/>
        <source>ffmpeg is not installed, so recording is unavailable.</source>
        <translation>ffmpeg не установлен, поэтому запись недоступна.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="61"/>
        <source>No stream address for %1.</source>
        <translation>Нет адреса потока для %1.</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="99"/>
        <source>Recording failed: %1</source>
        <translation>Запись не удалась: %1</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="131"/>
        <source>Recording produced no data (ffmpeg exit %1).</source>
        <translation>Запись не дала данных (ffmpeg завершился с кодом %1).</translation>
    </message>
    <message>
        <location filename="../src/Recorder.cpp" line="147"/>
        <source>Could not start ffmpeg.</source>
        <translation>Не удалось запустить ffmpeg.</translation>
    </message>
</context>
<context>
    <name>leolink::ReolinkClient</name>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="121"/>
        <source>File format not recognised.</source>
        <translation>Формат файла не распознан.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="122"/>
        <source>Invalid input.</source>
        <translation>Недопустимый ввод.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="123"/>
        <source>The camera has no free sessions. It allows only a handful at once, shared with the phone app and its web page. Close those, or wait a minute for the old ones to lapse.</source>
        <translation>У камеры нет свободных сессий. Она допускает лишь несколько одновременно, и они общие с мобильным приложением и её веб-страницей. Закройте их или подождите минуту, пока старые истекут.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="127"/>
        <source>Session expired.</source>
        <translation>Сессия истекла.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="128"/>
        <source>Wrong user name or password.</source>
        <translation>Неверное имя пользователя или пароль.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="129"/>
        <source>Timed out.</source>
        <translation>Время ожидания истекло.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="130"/>
        <source>This firmware does not support that command.</source>
        <translation>Эта прошивка не поддерживает такую команду.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="131"/>
        <source>Could not read the configuration.</source>
        <translation>Не удалось прочитать настройки.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="132"/>
        <source>Could not verify the configuration.</source>
        <translation>Не удалось проверить настройки.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="133"/>
        <source>Part of the camera did not answer. Depending on what was asked, that means no SD card is fitted, or the camera has no way out to the internet.</source>
        <translation>Часть камеры не ответила. В зависимости от того, о чём её спросили, это значит, что карта SD не установлена или у камеры нет выхода в интернет.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="136"/>
        <source>Not permitted — this model lacks the hardware.</source>
        <translation>Не разрешено — у этой модели нет нужного оборудования.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="137"/>
        <source>Account invalid, log in again.</source>
        <translation>Учётная запись недействительна, войдите снова.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="138"/>
        <source>User name already taken.</source>
        <translation>Такое имя пользователя уже занято.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="139"/>
        <source>Maximum number of users reached.</source>
        <translation>Достигнуто предельное число пользователей.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="140"/>
        <source>Camera busy, try again shortly.</source>
        <translation>Камера занята, повторите попытку чуть позже.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="141"/>
        <source>IP address conflict.</source>
        <translation>Конфликт IP-адресов.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="142"/>
        <source>Configuration test failed.</source>
        <translation>Проверка настроек не удалась.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="143"/>
        <source>FTP login failed.</source>
        <translation>Не удалось войти на FTP.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="144"/>
        <source>FTP could not create the directory.</source>
        <translation>FTP не смог создать каталог.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="145"/>
        <source>FTP upload failed.</source>
        <translation>Выгрузка по FTP не удалась.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="146"/>
        <source>FTP could not reach the server.</source>
        <translation>FTP не смог связаться с сервером.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="147"/>
        <source>Camera reported error %1.</source>
        <translation>Камера сообщила об ошибке %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="348"/>
        <source>The camera is not answering requests just now. It does this when it has had too many at once; it recovers on its own after a moment.</source>
        <translation>Сейчас камера не отвечает на запросы. Так бывает, когда их приходит слишком много сразу; через мгновение она приходит в себя сама.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="355"/>
        <source>Cannot reach %1: %2</source>
        <translation>Не удаётся связаться с %1: %2</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="369"/>
        <source>Unexpected reply from %1.</source>
        <translation>Неожиданный ответ от %1.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="472"/>
        <source>Login returned no token.</source>
        <translation>Вход не вернул ключа.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="511"/>
        <source>%1 — firmware %2, %3 channel(s)</source>
        <translation>%1 — прошивка %2, каналов: %3</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="776"/>
        <source>The camera could not join that network: %1</source>
        <translation>Камере не удалось подключиться к этой сети: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="786"/>
        <source>E-mail</source>
        <translation>Эл. почта</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="796"/>
        <source>FTP</source>
        <translation>FTP</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="836"/>
        <source>Update available: %1</source>
        <translation>Доступно обновление: %1</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="837"/>
        <source>The firmware is up to date.</source>
        <translation>Прошивка актуальна.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="854"/>
        <source>Upgrading. The camera will restart on its own and be unreachable for several minutes. Do not cut its power.</source>
        <translation>Идёт обновление. Камера перезапустится сама и несколько минут будет недоступна. Не отключайте ей питание.</translation>
    </message>
    <message>
        <location filename="../src/ReolinkClient.cpp" line="987"/>
        <source>Snapshot failed.</source>
        <translation>Не удалось сделать снимок.</translation>
    </message>
</context>
<context>
    <name>leolink::ScheduleDialog</name>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="222"/>
        <source>All week</source>
        <translation>Всю неделю</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="223"/>
        <source>Never</source>
        <translation>Никогда</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="224"/>
        <source>Nights</source>
        <translation>Ночью</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="225"/>
        <source>Working hours</source>
        <translation>Рабочее время</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="226"/>
        <source>Weekends</source>
        <translation>Выходные</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="227"/>
        <source>Invert</source>
        <translation>Обратить</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="229"/>
        <source>22:00 to 06:00, every day.</source>
        <translation>С 22:00 до 06:00, ежедневно.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="230"/>
        <source>08:00 to 17:00, Monday to Friday.</source>
        <translation>С 08:00 до 17:00, с понедельника по пятницу.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="276"/>
        <source>Nothing is selected — this will never run.</source>
        <translation>Ничего не выбрано — это никогда не сработает.</translation>
    </message>
    <message>
        <location filename="../src/SchedulePicker.cpp" line="279"/>
        <source>Always on.</source>
        <translation>Всегда включено.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SchedulePicker.cpp" line="282"/>
        <source>%n hour(s) a week.</source>
        <translation><numerusform>%n час в неделю.</numerusform><numerusform>%n часа в неделю.</numerusform><numerusform>%n часов в неделю.</numerusform></translation>
    </message>
</context>
<context>
    <name>leolink::SectionEditor</name>
    <message>
        <location filename="../src/SectionEditor.cpp" line="18"/>
        <location filename="../src/SectionEditor.cpp" line="108"/>
        <source>This camera does not offer these settings.</source>
        <translation>У этой камеры таких настроек нет.</translation>
    </message>
</context>
<context>
    <name>leolink::SettingsDialog</name>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="34"/>
        <location filename="../src/SettingsDialog.cpp" line="40"/>
        <source>Cameras</source>
        <translation>Камеры</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="41"/>
        <source>Layout</source>
        <translation>Расположение</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="80"/>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="81"/>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="85"/>
        <source>Scan network…</source>
        <translation>Просканировать сеть…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="87"/>
        <source>Ask the network which ONVIF cameras are present. This sends one multicast probe; devices that stay quiet are never contacted.</source>
        <translation>Спрашивает у сети, какие камеры ONVIF в ней есть. Отправляется один многоадресный запрос; с устройствами, которые молчат, связь не устанавливается.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="102"/>
        <source>192.168.1.10 or camera.lan</source>
        <translation>192.168.1.10 или camera.lan</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="107"/>
        <source>optional: pass show reolink/hall</source>
        <translation>не обязательно: pass show reolink/prihozhaya</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="109"/>
        <source>If set, this command runs and its output is used as the password. Keeps the secret out of the configuration file.</source>
        <translation>Если задана, выполняется эта команда, и её вывод используется как пароль. Так секрет не попадает в файл настроек.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="112"/>
        <source>optional, for P2P access</source>
        <translation>не обязательно, для доступа по P2P</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="117"/>
        <source>Any address libmpv can open. Use this for cameras from other makers, an NVR stream, or a local file.</source>
        <translation>Любой адрес, который умеет открыть libmpv. Подходит для камер других производителей, потока с видеорегистратора или локального файла.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="121"/>
        <source>Sub stream (low bandwidth)</source>
        <translation>Дополнительный поток (мало трафика)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="122"/>
        <source>Main stream (full resolution)</source>
        <translation>Основной поток (полное разрешение)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="125"/>
        <source>RTSP</source>
        <translation>RTSP</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="126"/>
        <source>HTTP-FLV (lower latency)</source>
        <translation>HTTP-FLV (меньше задержка)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="127"/>
        <source>Baichuan (the camera&apos;s own protocol)</source>
        <translation>Baichuan (собственный протокол камеры)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="129"/>
        <location filename="../src/SettingsDialog.cpp" line="150"/>
        <source>Custom URL</source>
        <translation>Свой адрес</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="131"/>
        <source>RTSP suits most cameras and is what to try first.

HTTP-FLV needs only port 80, which helps where RTSP is blocked.

Baichuan is what Reolink&apos;s own app speaks. It is the answer for cameras that keep RTSP switched off — battery models do — and it does not use the camera&apos;s small pool of web sessions. Video only: sound still comes over RTSP.</source>
        <translation>RTSP подходит большинству камер, и начинать стоит с него.

HTTP-FLV нужен только порт 80, что выручает там, где RTSP закрыт.

Baichuan — то, на чём говорит приложение Reolink. Это ответ для камер, у которых RTSP выключен — так делают модели на батарее — и он не занимает ни одной из немногочисленных веб-сессий камеры. Только видео: звук по-прежнему идёт по RTSP.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="138"/>
        <source>Use HTTPS for the control API</source>
        <translation>Использовать HTTPS для управляющего интерфейса</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="139"/>
        <source>Show this camera</source>
        <translation>Показывать эту камеру</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="142"/>
        <source>Name</source>
        <translation>Название</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="143"/>
        <source>Host</source>
        <translation>Адрес</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="144"/>
        <source>User</source>
        <translation>Пользователь</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="145"/>
        <source>Password</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="146"/>
        <source>Password command</source>
        <translation>Команда для пароля</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="147"/>
        <source>UID</source>
        <translation>UID</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="148"/>
        <source>Stream</source>
        <translation>Поток</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="149"/>
        <source>Transport</source>
        <translation>Транспорт</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="163"/>
        <source>Test connection</source>
        <translation>Проверить соединение</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="175"/>
        <source>Settings for this camera…</source>
        <translation>Настройки этой камеры…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="177"/>
        <source>Detection, reactions and recording in leolink, and the camera&apos;s own encoder, picture and schedules.</source>
        <translation>Обнаружение, реакции и запись в leolink, а также кодировщик, изображение и расписания самой камеры.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="207"/>
        <location filename="../src/SettingsDialog.cpp" line="216"/>
        <location filename="../src/SettingsDialog.cpp" line="235"/>
        <source>automatic</source>
        <translation>автоматически</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="224"/>
        <source>Columns</source>
        <translation>Столбцов</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="225"/>
        <source>Rows</source>
        <translation>Строк</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="227"/>
        <source>Grid size</source>
        <translation>Размер сетки</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="252"/>
        <source>Row</source>
        <translation>Строка</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="253"/>
        <source>Column</source>
        <translation>Столбец</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="254"/>
        <source>Row span</source>
        <translation>Занимает строк</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="255"/>
        <source>Column span</source>
        <translation>Занимает столбцов</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="257"/>
        <source>Position of the selected camera</source>
        <translation>Положение выбранной камеры</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="268"/>
        <source>Leave row and column on “automatic” to let cameras fill the grid in order. Spans let one camera cover several cells.</source>
        <translation>Оставьте строку и столбец на «автоматически», и камеры заполнят сетку по порядку. Занимая несколько ячеек, одна камера может покрыть сразу нескольких.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="421"/>
        <source>New camera</source>
        <translation>Новая камера</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="436"/>
        <source>Remove camera</source>
        <translation>Удалить камеру</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="437"/>
        <source>Remove “%1” from the list?</source>
        <translation>Удалить «%1» из списка?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="457"/>
        <source>Enter a host first.</source>
        <translation>Сначала укажите адрес.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="464"/>
        <source>Contacting %1…</source>
        <translation>Связываемся с %1…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Looking for cameras…</source>
        <translation>Поиск камер…</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="474"/>
        <source>Stop</source>
        <translation>Остановить</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/SettingsDialog.cpp" line="488"/>
        <source>Found %n device(s)…</source>
        <translation><numerusform>Найдено %n устройство…</numerusform><numerusform>Найдено %n устройства…</numerusform><numerusform>Найдено %n устройств…</numerusform></translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="498"/>
        <source>No cameras found</source>
        <translation>Камеры не найдены</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="499"/>
        <source>No ONVIF device answered.

Cameras only reply if ONVIF is switched on, and the probe does not cross routers or most VPNs. You can still add a camera by typing its address.</source>
        <translation>Ни одно устройство ONVIF не ответило.

Камеры отвечают, только если ONVIF включён, а запрос не проходит ни через маршрутизаторы, ни через большинство VPN. Камеру всё равно можно добавить, введя её адрес вручную.</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="525"/>
        <source>unnamed device</source>
        <translation>устройство без названия</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="526"/>
        <source> (Reolink)</source>
        <translation> (Reolink)</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="527"/>
        <source>  · already added</source>
        <translation>  · уже добавлена</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="533"/>
        <source>Cameras found</source>
        <translation>Найдены камеры</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="534"/>
        <source>Add which one?</source>
        <translation>Какую добавить?</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="577"/>
        <source>Incomplete camera</source>
        <translation>Камера заполнена не полностью</translation>
    </message>
    <message>
        <location filename="../src/SettingsDialog.cpp" line="578"/>
        <source>“%1” has no host address.</source>
        <translation>У «%1» нет адреса.</translation>
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
        <translation>Мобильные данные</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="55"/>
        <source>Wired</source>
        <translation>Проводное</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="56"/>
        <source>Connection</source>
        <translation>Соединение</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="62"/>
        <source>%1 — strength unknown</source>
        <translation>%1 — сила неизвестна</translation>
    </message>
    <message>
        <location filename="../src/SignalIndicator.cpp" line="64"/>
        <source>%1 — %2 of %3</source>
        <translation>%1 — %2 из %3</translation>
    </message>
</context>
<context>
    <name>leolink::TalkSession</name>
    <message>
        <location filename="../src/TalkSession.cpp" line="88"/>
        <source>Cannot reach the camera: %1</source>
        <translation>Не удаётся связаться с камерой: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="105"/>
        <source>The camera did not answer on the RTSP port.</source>
        <translation>Камера не ответила на порту RTSP.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="159"/>
        <source>ffmpeg is needed to send sound and could not be started.</source>
        <translation>Для передачи звука нужен ffmpeg, и запустить его не удалось.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="272"/>
        <source>The camera rejected the user name or password.</source>
        <translation>Камера отклонила имя пользователя или пароль.</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="281"/>
        <source>The camera refused: %1</source>
        <translation>Камера отказала: %1</translation>
    </message>
    <message>
        <location filename="../src/TalkSession.cpp" line="316"/>
        <source>This camera does not offer a speaker.</source>
        <translation>У этой камеры нет динамика.</translation>
    </message>
</context>
<context>
    <name>leolink::VideoTile</name>
    <message>
        <location filename="../src/VideoTile.cpp" line="144"/>
        <source>stream ended (%1) — reconnecting</source>
        <translation>поток завершился (%1) — переподключение</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>WEAK SIGNAL</source>
        <translation>СЛАБЫЙ СИГНАЛ</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="204"/>
        <source>BAD STREAM</source>
        <translation>ПЛОХОЙ ПОТОК</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/VideoTile.cpp" line="211"/>
        <source>%n damaged frame(s) in the last ten seconds.

Usually a weak Wi-Fi signal, or a bitrate set too low for the resolution. leolink repairs what it can — this is what it could not.</source>
        <translation><numerusform>%n повреждённый кадр за последние десять секунд.

Обычно это слабый сигнал Wi-Fi или битрейт, заниженный для такого разрешения. leolink исправляет что может — вот то, чего он исправить не смог.</numerusform><numerusform>%n повреждённых кадра за последние десять секунд.

Обычно это слабый сигнал Wi-Fi или битрейт, заниженный для такого разрешения. leolink исправляет что может — вот то, чего он исправить не смог.</numerusform><numerusform>%n повреждённых кадров за последние десять секунд.

Обычно это слабый сигнал Wi-Fi или битрейт, заниженный для такого разрешения. leolink исправляет что может — вот то, чего он исправить не смог.</numerusform></translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="223"/>
        <location filename="../src/VideoTile.cpp" line="234"/>
        <location filename="../src/VideoTile.cpp" line="280"/>
        <source>connecting…</source>
        <translation>подключение…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="295"/>
        <location filename="../src/VideoTile.cpp" line="703"/>
        <source>Mute this camera</source>
        <translation>Приглушить эту камеру</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="306"/>
        <source>Volume</source>
        <translation>Громкость</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="311"/>
        <location filename="../src/VideoTile.cpp" line="1007"/>
        <source>Record this camera</source>
        <translation>Записывать эту камеру</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="322"/>
        <location filename="../src/VideoTile.cpp" line="985"/>
        <source>Speak through the camera</source>
        <translation>Говорить через камеру</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="331"/>
        <source>Camera settings</source>
        <translation>Настройки камеры</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="455"/>
        <source>no host configured</source>
        <translation>адрес не задан</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="529"/>
        <source>connecting over Baichuan…</source>
        <translation>подключение через Baichuan…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="552"/>
        <location filename="../src/VideoTile.cpp" line="938"/>
        <source>custom stream</source>
        <translation>свой поток</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="554"/>
        <location filename="../src/VideoTile.cpp" line="940"/>
        <source>main stream</source>
        <translation>основной поток</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="555"/>
        <location filename="../src/VideoTile.cpp" line="941"/>
        <source>sub stream</source>
        <translation>дополнительный поток</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="702"/>
        <source>Unmute this camera</source>
        <translation>Вернуть звук этой камеры</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="720"/>
        <source>MOTION</source>
        <translation>ДВИЖЕНИЕ</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="838"/>
        <location filename="../src/VideoTile.cpp" line="858"/>
        <source>camera is reconfiguring… %1 s</source>
        <translation>камера перенастраивается… %1 с</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="860"/>
        <source>camera is reconfiguring…</source>
        <translation>камера перенастраивается…</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="913"/>
        <source>stream lost — reconnecting (%1)</source>
        <translation>поток потерян — переподключение (%1)</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="944"/>
        <source>%1 fps</source>
        <translation>%1 кадр/с</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="947"/>
        <source>%1 Mbit/s</source>
        <translation>%1 Мбит/с</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="948"/>
        <source>%1 kbit/s</source>
        <translation>%1 кбит/с</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="984"/>
        <source>Stop speaking</source>
        <translation>Прекратить говорить</translation>
    </message>
    <message>
        <location filename="../src/VideoTile.cpp" line="1006"/>
        <source>Stop recording</source>
        <translation>Остановить запись</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneEditor</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="232"/>
        <source>%1 — motion zones</source>
        <translation>%1 — зоны движения</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="241"/>
        <source>Drag over the picture to choose what is watched. Darkened areas are ignored — useful for a road at the edge of view, a tree that moves in the wind, or a neighbour&apos;s doorway.</source>
        <translation>Проведите по изображению, чтобы выбрать, что наблюдается. Затемнённые области игнорируются — удобно для дороги у края кадра, дерева на ветру или соседского порога.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="248"/>
        <source>Watch all</source>
        <translation>Наблюдать всё</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="249"/>
        <source>Ignore all</source>
        <translation>Игнорировать всё</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="250"/>
        <source>Invert</source>
        <translation>Обратить</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="256"/>
        <source>Draw</source>
        <translation>Рисовать</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="257"/>
        <source>Watch a rectangle</source>
        <translation>Наблюдать прямоугольник</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="258"/>
        <source>Ignore a rectangle</source>
        <translation>Игнорировать прямоугольник</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="262"/>
        <source>Drag over single cells.</source>
        <translation>Проведите по отдельным клеткам.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="264"/>
        <source>Drag out a rectangle to watch. Shift and drag does the same without changing tool.</source>
        <translation>Растяните прямоугольник для наблюдения. Shift с перетаскиванием делает то же самое, не меняя инструмент.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="267"/>
        <source>Drag out a rectangle to ignore. Ctrl and drag does the same without changing tool.</source>
        <translation>Растяните прямоугольник, который нужно игнорировать. Ctrl с перетаскиванием делает то же самое, не меняя инструмент.</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="301"/>
        <source>Fetching a picture from %1…</source>
        <translation>Получаем изображение с %1…</translation>
    </message>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="322"/>
        <source>No picture: %1 — the zones can still be set.</source>
        <translation>Нет изображения: %1 — зоны всё равно можно задать.</translation>
    </message>
</context>
<context>
    <name>leolink::ZoneGrid</name>
    <message>
        <location filename="../src/ZoneEditor.cpp" line="179"/>
        <source>no picture available</source>
        <translation>изображение недоступно</translation>
    </message>
</context>
</TS>
