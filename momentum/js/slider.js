import {getTimeOfDay} from "./greeting.js"
const body = document.querySelector("body")
let randomNum = mathRandom(1, 20);
let slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function mathRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function setBg(){
    let timeOfDay = getTimeOfDay();
    let bgNum = randomNum;
    
    bgNum = bgNum.toString();
    if (bgNum.length===1){
        bgNum = bgNum.padStart(2, '0')
    }

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/DenisKhaliullin/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {      
      body.style.backgroundImage = `url(${img.src})`;
      body.style.backgroundSize = 'cover';
    }; 
    
    
}

function getSlideNext() {
    if(randomNum===20){
        randomNum = randomNum - 20;
    };
    randomNum = randomNum + 1;
    setBg(randomNum);
}

function getSlidePrev() {
    if(randomNum===1){
        randomNum = randomNum + 20;
    };
    randomNum = randomNum - 1;
    setBg(randomNum);
}
slideNext.addEventListener('click', getSlideNext);

slidePrev.addEventListener('click', getSlidePrev);

export {setBg, getSlideNext, getSlidePrev};