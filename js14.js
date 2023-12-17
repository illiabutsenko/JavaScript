setTimeout(function () {
  console.log("TimeOut");
}, 3000);

setTimeout(() => {
  console.log("TimeOut");
}, 3000);

console.log("Before setTimeout");
let a = setTimeout(() => {
  console.log("Inside setTimeout");
}, 5500);
console.log("After setTimeout");
clearTimeout(a);

// setInterval(() => {
//     console.log("Interval");
// }, 1000);

console.log("Before setTimeout");
setInterval(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("After setTimeout");

let timer = document.getElementById("timer");
let seconds = 10;
timer.textContent = seconds;

function updateTimer() {
  seconds--;
  timer.textContent = seconds;
  if (seconds === 0) {
    timer.textContent = "Time is up!";
    clearInterval(timeout);
  }
}
let timeout = setInterval(updateTimer, 1000);

let clock = document.getElementById("clock");
function updateClock() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

let Interval = setInterval(updateClock, 1000);


let timer1 = document.getElementById("timer");
let second = 5;
timer1.textContent = second;

function count() {
  second--;
  timer1.textContent = second;
  if (second === 0) {
    timer1.textContent = "Лічильник завершено!";
    clearInterval(stop);
  }
}
let stop = setInterval(count, 1000);
