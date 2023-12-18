let currentDate = new Date();
console.log("currentDate = " + currentDate);

let Date1 = new Date("2000-11-15T17:35:21");
console.log("Date1 = " + Date1);

let epoch = new Date(0);
console.log("epoch = " + epoch);

let anniversary = new Date(2000, 10, 16, 17, 35, 2);
console.log("anniversary = " + anniversary);

let copy = new Date(epoch);
console.log("copy = " + copy);

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());

console.log(anniversary.getFullYear());
console.log(currentDate.setFullYear(2025), currentDate);
console.log(anniversary.setMonth(0), anniversary);

let Date2 = new Date(958044552000);
console.log("Date2 = ", Date2);

console.log(anniversary.getHours());
console.log(anniversary.getUTCHours());
console.log(anniversary.getTimezoneOffset());

console.log(anniversary.toDateString());
console.log(anniversary.toLocaleDateString());
console.log(anniversary.toTimeString());
console.log(anniversary.toLocaleTimeString());

console.log(anniversary.toUTCString());
console.log(anniversary.toISOString());

const nextWeek = new Date();
console.log(nextWeek.setDate(nextWeek.getDate() + 7), nextWeek);

const d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());

let myBirthday = new Date(2023, 7, 2);
console.log("My birthday is on: " + myBirthday.toLocaleDateString("UK"));

let Calendar = new Date();
let c3 = document.getElementById("timer");

for (let i = 0; i < 30; i++) {
  c2 = Calendar.getDate();
  Calendar.setDate(c2 + 1);
  c3.textContent += " \n" + c2;
}
