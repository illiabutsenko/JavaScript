// Destructuring Assignment
// let numbers = [1, 2, 3];
// let x = numbers[0];
// let y = numbers[1];
// let z = numbers[2];
// let [x, y, z] = numbers;
// console.log(x, y, z, numbers);

// let [x, , z] = numbers;
// console.log(x, z);

let numbers = [1, 2];
let [x, y, z = 0] = numbers;
console.log(x, y, z, numbers);

let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);

let person = {
  name: "Alice",
  age: 25,
  gender: "female",
  occupation: "software engineer",
};
// let name = person.name;
// let age = person.age;
// let gender = person.gender;
// let occupation = person.occupation;
// let {name, age, occupation, gender} = person;
// console.log(age, name, gender, occupation);

let {name: firsname, age, occupation: job} = person;
console.log(firsname, age, job);

let person2 = {
    name: "Alice",
    age1: 26,
    occupation: "software engineer",
};
let {name: firsname1, age1, occupation: job1, eyes = "blue"} = person2;
console.log(firsname1, age1, job1, eyes);

let person3 = {
  name: "John",
  age: 25,
  occupation: "software engineer",
  address: {
    city: "New-York",
    country: "USA",
  },
};
let { name, address:{city, country} } = person3;
console.log(city, country);

const sumAndProduct = (a, b) => {
    return [a + b, a * b];
};
// let result = sumAndProduct(3, 2);
// sum = result[0];
// product = result[1];
let [sum, product] = sumAndProduct(3, 2);
 console.log(sum, product);


let person4 = {
  name: "Alice",
  age: 30,
  occupation: "developer",
};

function extractInfo(a, b, c) {
    console.log(`${a} is a ${c}`);
}

let { name: aa, age: bb, occupation: cc } = person4;
extractInfo(aa, bb, cc);
