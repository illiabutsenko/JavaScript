let name = 'Alice';
let greeting = "Hello, " + name + "!";

console.log(greeting);

let greeting2 = `Hello, ${name}!`;
console.log(greeting2);

let x = 5;
let y = 10;
let sum = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sum);

let age = 25;
let birthday = `Happy ${age}th birthday!`;
console.log(birthday);

let person = {
  name: "Bob",
  age: 30,
  occupation: "teacher",
};

let introduction = `My name is ${person.name}, I am ${person.age} years 
old, and I work as a ${person.occupation}.`;
console.log(introduction);

let isEven = n => n % 2 === 0;
let number = 42;
let parity = `The number ${number} is ${isEven(number) ? "even" : "odd"}.`;
console.log(parity);

const message = `Escape a backtick: \` inside a template literal.`;
console.log(message);

let poem = `And I never fail to be surprised
by the gift of an odd remainder,
footloose at the end:
forty-seven divided by eleven equals four,
with three remaining.`;

let poem2 = "And I never fail to be surprised \n" +
"by the gift of an odd remainder,\n" +
"footloose at the end:\n" +
"forty-seven divided by eleven equals four,\n" +
"with three remaining.";
console.log(poem);
console.log(poem2);

let s = false;
console.log(`Text ${(!s) ? "yes" : "no"} text`);


let student = {
  name: "ILLIA",
  age: 33,
  occupation: "programmer",
};
const stud = (a, b, c) =>
  console.log(`Student ${a}, ${b} years old, has an occupation: ${c}.`);
stud(student.name, student.age, student.occupation);
