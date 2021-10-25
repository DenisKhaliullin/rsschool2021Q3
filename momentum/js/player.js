const playButton = document.querySelector('.play');

const audio = new Audio();
 
function playAudio() {
    if(audio.paused === true) {
        audio.src = '../assets/sounds/Aqua Caelestis.mp3';
        audio.currentTime = 0;
        audio.play();
    }else {
        audio.pause();
    }
    
}

playButton.addEventListener('click', playAudio)