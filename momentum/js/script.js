import { showTime } from "./calendar.js";
import { setBg, getSlideNext, getSlidePrev } from "./slider.js";

let slideNext = document.querySelector('.slide-next');
const name = document.querySelector('.name');
name.value = '[Enter name]';
function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)

showTime();
setBg();

