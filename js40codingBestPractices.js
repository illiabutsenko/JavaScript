//coding best practices and conventions

// function f(x) {
//     let y = x * 2;
//     return y;
// }

// function double(number) {
//     let result = number * 2;
//     return number;
// }

// let firstName, calculateArea; // camelCase

// class PascalCase;
// class PersonObject;

// const PI = 3.14; //UPPER_CASE
// const MAX_VALUE = 100;

// let getUserName; //+
// let isPrime; //+

// let getData; //-
// let check; //-

// let user; //іменник
// let name; //іменник для змінних

// function createUser() //дієслова для ф-й
// function getAge()

// const item;
// const name;
// const names = [];
// const items = [];

// //URL
// //i

// const class

//  let x = 1
//  let y = 2
//  console.log(x + y)

//  return //; => undefined
//     x + y //-

//     return x + y;


let arrayOfNumbers = [2, 3, 4, 5];

//the counter function of the sum of array numbers
const sumArray = (arr) => { 
  let sumOfNumbers = 0; 
  for (let i = 0; i < arr.length; i++) {
    sumOfNumbers += arr[i]; 
  }
  return sumOfNumbers;
};

const result = sumArray(arrayOfNumbers); 
console.log(result);
