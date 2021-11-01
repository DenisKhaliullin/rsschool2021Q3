import { showTime } from "./calendar.js";
import { setBg } from "./slider.js";
import { getWeather } from "./weather.js";
import { getQuotes } from "./quotes.js";
import { playAudio, playNext, playPrev } from "./player.js"
let playButton = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');

showTime();
setBg();
getWeather();
getQuotes();

playButton.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);


console.log(`"Самооценка:
- время выводится в 24-часовом формате, например: 21:01:00 +5
- время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5
- выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" +5
- текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5
с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
с 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень
с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач
- пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5
- Смена фонового изображения +20
- Виджет погоды +15
- Виджет цитата дня +10
- Аудиоплеер +15
- Продвинутый функционал:
     - добавлен прогресс-бар, при клике по прогресс бару изменяется время(отображение сломалось)  +2
     - над прогресс-баром отображается название трека +3
     - отображается текущее и общее время воспроизведения трека +3
     - есть кнопка звука при клике по которой можно включить/отключить звук +2"`)