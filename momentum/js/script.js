const time = document.querySelector('time')
const dateInfo = document.querySelector('date')

function showTime() {
  const date = new Date()
  let currentdate = date.toLocaleTimeString()
  time.innerHTML = currentdate
  showDate()
  setTimeout(showTime, 1000);
}
showTime()

function showDate() {
  const date = new Date()
  const options  = {weekday: 'long', month: 'long', day: 'numeric'};
  let currentdate = date.toLocaleDateString('en-Br', options)
  console.log(currentdate)
  dateInfo.innerHTML = currentdate
}
