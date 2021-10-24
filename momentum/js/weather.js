const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
city.addEventListener('change', () => getWeather(city.value));


async function getWeather() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=82556107dd4f49ea556b1249e74c3877&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.weather[0].id, data.weather[0].description, data.main.temp)

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherDescription.textContent = data.weather[0].description;
}


function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
}

function setLocalStorage() {
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
  }
  window.addEventListener('load', getLocalStorage)
  

city.addEventListener('keypress', setCity);

export { getWeather, setCity }