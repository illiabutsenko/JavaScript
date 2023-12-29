//Module, Export, Import
// const math = require("./math.js");
// result1 = math.add(2, 3);
// result2 = math.substract(5, 2);
// console.log(result1);
// console.log(result2);
//                             Node.js


// import { add, substract } from "./math.js";
// const result1 = add(2, 3);
// const result2 = substract(5, 2);
// console.log(result1);
// console.log(result2);    - Варіант запису 1


// import math from "./math.js";
// const result1 = math.add(2, 3);
// const result2 = math.substract(5, 2);
// console.log(result1);
// console.log(result2);


async function doMath() {
  const calc = await import("./calculator.js");
  const r1 = calc.addition(12, 33);
  const r2 = calc.substraction(15, 12);
  const r3 = calc.multiplication(7, 8);
  const r4 = calc.division(21, 3);

  console.log(r1);
  console.log(r2);
  console.log(r3);
  console.log(r4);
}
doMath();