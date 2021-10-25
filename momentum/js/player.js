import  playList from "./playList.js";

let playButton = document.querySelector('.play');
let myPlayList = document.querySelector('.play-list');
let trackName = document.querySelector('.track-name');
let volumeButton = document.querySelector('.volume-button');
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
      element[playNum].classList.add('item-active');
      trackName.textContent = playList[playNum].title;
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

//custom
console.log(playList[playNum].duration)
audio.addEventListener(
    "loadeddata",
    () => {
      document.querySelector(".audio-time .length").textContent = getTimeCodeFromNum(audio.duration || 0);

      audio.volume = .75;
    },
    false
  );

const timeline = document.querySelector(".audio-timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration || 0;
  audio.currentTime = timeToSeek;
}, false);


setInterval(() => {
    const progressBar = document.getElementById("audio-progress");
    progressBar.style.width = audio.currentTime / ((audio.duration * 100) || 0) + "%";
    document.querySelector(".audio-time .current").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);

  document.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = document.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  });

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
playButton.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);


console.dir(audio)
export { playAudio, playNext, playPrev }

