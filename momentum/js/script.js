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
    timeOfDay = 'Good night';
  } else if (hours < 12) {
    timeOfDay = 'Good morning';
  } else if (hours < 18) {
    timeOfDay = 'Good afternoon';
  } else {
    timeOfDay = 'Good evening';
  }
  return timeOfDay;
}

function showGreetings() {
  const greeting = document.querySelector('.greeting-container span');
  greeting.innerHTML = getTimeOfDay();
}
showTime();

// ***********Greetings**************

const name = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);
