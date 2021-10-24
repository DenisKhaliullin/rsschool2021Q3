const greet = document.querySelector('.greeting');

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDays = "";
    if((hours/6)>=1 && (hours/6) < 2){
        timeOfDays = 'morning';
        
    } else if((hours/6) >= 2 && (hours/6) < 3){
        timeOfDays = 'afternoon';
       
    }else if((hours/6)>=3 && (hours/6) < 4){
        timeOfDays = 'evening';
       
    }else  {
        timeOfDays = "night";
       
    }
    return timeOfDays;
    
}

function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay},`;
    greet.innerHTML = greetingText;
}

const name = document.querySelector('.name');
name.placeholder = '[Enter name]';

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

export {showGreeting, getTimeOfDay};