const time = document.querySelector('time');
const dateInfo = document.querySelector('date');

function showTime() {
  const date = new Date();
  let currentdate = date.toLocaleTimeString();
  time.innerHTML = currentdate;
  showDate();
  showGreetings();
  setTimeout(showTime, 1000);
}

function showDate() {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  let currentdate = date.toLocaleDateString('en-Br', options);
  dateInfo.innerHTML = currentdate;
}

function getTimeOfDay() {
  let date = new Date();
  let hours = date.getHours();
  let timeOfDay;
  if (hours < 6) {
    timeOfDay = 'night';
  } else if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }
  return timeOfDay;
}

function showGreetings() {
  const greeting = document.querySelector('.greeting-container span');
  greeting.innerHTML = `Good ${getTimeOfDay()}`;
}
showTime();

// ***********Greetings**************

const name = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('city', weatherCity.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
  if (localStorage.getItem('city')) {
    weatherCity.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocalStorage);

// ************Slider**************

let randomNumber = getRandomNumber();
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function setBg(timeOfDay, bgNum) {
  const img = new Image();
  let num = String(bgNum).padStart(2, '0');
  const url = `https://raw.githubusercontent.com/Mideli37/stage1-tasks/assets/images/${timeOfDay}/${num}.jpg`;
  img.src = url;
  img.onload = () => {
    document.body.style.backgroundImage = `url('${url}')`;
  };
}

function getSlideNext() {
  if (randomNumber == 20) {
    randomNumber = 1;
  } else {
    randomNumber++;
  }
  setBg(getTimeOfDay(), randomNumber);
}

function getSlidePrev() {
  if (randomNumber == 1) {
    randomNumber = 20;
  } else {
    randomNumber--;
  }
  setBg(getTimeOfDay(), randomNumber);
}

setBg(getTimeOfDay(), randomNumber);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

//********Weather*********

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherCity = document.querySelector('.city');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=en&appid=1f16eaabae79b2548078d0ce50b0f6de&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.cod == 200) {
    weatherError.textContent = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherWind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    weatherHumidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
  } else {
    weatherIcon.className = 'weather-icon owf';
    weatherError.textContent = 'Error: city not found';
    temperature.textContent = ``;
    weatherDescription.textContent = '';
    weatherWind.textContent = '';
    weatherHumidity.textContent = '';
  }
}
getWeather();
