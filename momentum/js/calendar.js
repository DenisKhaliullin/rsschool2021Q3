const time = document.querySelector('.time');
const date = document.querySelector('.date')

function showTime() {    
    const day = new Date();
    time.textContent = day.toLocaleTimeString();
    showDate();
    setTimeout(showTime, 1000)
}

function showDate() {
    const day = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    date.textContent = day.toLocaleDateString('en-US', options);
}

export {showTime};