function square1(num) {
  return num * num;
}

const square2 = function (num) {
  return num * num;
};

const square3 = (num) => {
  return num * num;
};

const square4 = (num) => {
  return num * num;
};

const square5 = (num) => num * num;

() => {
  console.log();
};

const multiply = (a, b) => a * b;
console.log(multiply(3, 5));

const square6 = (a, b, c, d) => [a * a, b * b, c * c, d * d];
console.log(square6(3, 4, 5, 6));

let aaa = [3, 4, 5];
const square7 = aaa.map((c) => c ** 2);
console.log(square7);

// const ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );
