function greeting(name) {
  console.log(`Hello, ${name}`);
}

function greetWithAlert(name) {
  alert(name);
}

function processUserInput(callback) {
  let name = prompt("Please enter your name: ");
  console.log(name);
  callback(name);
}
processUserInput(greeting);
processUserInput(greetWithAlert);

function greaterThan(n) {
  return function (m) {
    return m > n;
  };
}

let greaterThan10 = greaterThan(10);
let greaterThan20 = greaterThan(20);
console.log(greaterThan10(12));
console.log(greaterThan20(6));


let array = [2, 3, 4, 5];

function modifyArray(mult) {
  mult(array);
}

function multiply(ar) {
    let b = new Array();
    for (let i = 0; i < ar.length; i++) {
      b[i] = ar[i] * 2;
    }
    console.log(b);
  }

modifyArray(multiply);
