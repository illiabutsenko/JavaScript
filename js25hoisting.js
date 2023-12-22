// console.log(message);
// var message = "Hello, World";
// console.log(message);

// var message;
// console.log(message);
// message = "Hello, World";
// console.log(message);

// console.log(message);
// message = "Hello, World";
// var message;
// console.log(message);

// message = "Hello, World";
// let message;
// console.log(message);

// let message;
// message = "Hello, World";
// console.log(message);

//
// function sayHello() {
//   console.log("Hello, World");
// };
// const sayHello = function () {
//   console.log("Hello, World");
// };
// const sayHello = function hello() {
//   console.log("Hello, World");
// };

//
// sayHello();
// function sayHello() {
//   console.log("Hello, World");
// };

// function sayHello() {
//   console.log("Hello, World");
// };
// sayHello();
//

//
// sayHello();
// var sayHello = function () {
//   console.log("Hello, World");
// };

// var sayHello;
// sayHello();
// sayHello = function () {
//   console.log("Hello, World");
// };
//

//
// sayHello();
// var sayHello = function hello() {
//   console.log("Hello, World");
// }
// var sayHello;
// sayHello();
// sayHello = function hello() {
//   console.log("Hello, World");
// }
//

//
// var sayHello;
// sayHello = function hello() {
//     console.log("Hello, World");
// }
// sayHello();
// hello(); - невидиме в глобальній області видимості
//

// const sayHello = () => { //recommended way to define
//   console.log("Hi everyone!");
// };


// В першому випадку буде помилка типу, тому що 
// це функціональний вираз(а вони не піднімаються),
// тут піднімається тільки значення undefined;

showMessage();

var showMessage = function () {
  console.log("Hello, world!");
};


// В другому випадку виводиться результат ф-ї, тому що вона 
// викликається після її оброблення, і змінна вже має якесь значення,
// навідміну від першого випадку, де вона мала значення undefined;


var showMessage = function () {
    console.log("Hello, world!");
};

showMessage();