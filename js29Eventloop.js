//Event loop
console.log("Time1");
setTimeout(() => {
    console.log("Time2");
}, 3000);
setTimeout(() => {
    console.log("Time3");
}, 2000);
console.log("Time4");

//Після виконання Time1 JavaScript зареєстрував
//callback на виконання ф-ї(Time2 і Time3), та продовжує
//виконувати інші завдання(Time4);





//lexical environment
let a = 3;
function f1() {
  let b = 2;
  return function f2() {
    console.log(a, b);
  };
}
let c = f1();
console.log(c());
