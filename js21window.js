console.log(window.innerHeight);
console.log(window.location.href);
console.log(location.href);
console.log(window.location);
// console.log(window.location.assign('https://google.com'));
// console.log(window.location.replace("https://127.0.0.1:5500"));
console.log(window.location.reload);
// console.log(window.confirm("Are you sure?"));
// console.log(window.open("https://google.com"));
// console.log(window.close());
window.history.back();
window.history.forward();
console.log(window.scrollX);
console.log(window.scrollY);


let loc = location.href;
let x = window.scrollX;
let y = window.scrollY;
window.alert(`${loc} x = ${x}; y = ${y};`);