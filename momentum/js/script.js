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

