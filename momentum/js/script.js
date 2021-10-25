import { showTime } from "./calendar.js";
import { setBg } from "./slider.js";
import { getWeather } from "./weather.js";
import { getQuotes } from "./quotes.js";
import  playList from "./playList.js";


showTime();
setBg();
getWeather();
getQuotes();

const playButton = document.querySelector('.play');
let myPlayList = document.querySelector('.play-list');
let isPlay = false;
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
let playNum = 0;
const audio = new Audio();

for(let i = 0; i < playList.length; i++){
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = `${playList[i].title}`;
  myPlayList.append(li)
};
let element = document.querySelectorAll('.play-item')

function playAudio() {
    if(!isPlay) {
      audio.src = playList[playNum].src;
      audio.currentTime = 0;
      audio.play();
      isPlay = true;
      playButton.classList.remove('play');
      playButton.classList.add('pause');
      element[playNum].classList.add('item-active')
    }else {
      isPlay = false;
      audio.pause();
      playButton.classList.remove('pause');
      playButton.classList.add('play');
    }
}

function playNext() {
  element[playNum].classList.remove('item-active')
  isPlay = false;
  if(playNum === 3){
    playNum = 0;
  }else{
    playNum = playNum + 1;
  }
  playAudio(playNum);
}

function playPrev() {
  isPlay = false;
  element[playNum].classList.remove('item-active')
  if(playNum === 0){
    playNum = playList.length;
  }
  playNum = playNum - 1;
  playAudio(playNum);
}

audio.addEventListener('ended',function(){
  playNext()
});

playButton.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);
