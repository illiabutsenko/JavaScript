let numbers1 = [1, 2, 3];
console.log(...numbers1);
console.log(numbers1);

let fruits = ["apple", "banana", "orange"];
let fruitsCopy = [...fruits];
fruitsCopy.push("pear");
console.log(fruits);
console.log(fruitsCopy);

let cars = [
  {
    model: "Tesla",
    color: "white",
  },
  {
    model: "Toyota",
    color: "blue",
  },
];
console.log(cars);
let carsCopy = [...cars];
carsCopy[0].color = "black";
console.log(carsCopy);

let colors = ["red", "green", "blue"];
let shapes = ["circle", "square", "triangle"];
let colorsAndShapes = [...shapes, ...colors];

console.log(colorsAndShapes);
console.log(colors);
console.log(shapes);

let person1 = {
  name: "Alice",
  age: 25,
};
let person2 = {
  name: "Bob",
  hobbies: ["gaming", "coding"],
};

let person3 = { ...person1, ...person2 };

console.log(person3);

let person4 = {
  ...person3,
  name: "Alice",
  hobbies: [...person3.hobbies, "running"],
};
person4.name = "AAA";

console.log(person4);
console.log(person3);

let numbers2 = [1, 2, 3, 4, 5];
let newNumbers1 = [0, ...numbers2];
let newNumbers2 = [...numbers2, 6];

newNumbers1[2] = 55;
console.log(newNumbers1);
console.log(newNumbers2);
console.log(numbers2);

let newNumbers3 = [...numbers2.slice(0, 2), 6, 7, ...numbers2.slice(2)];
console.log(newNumbers3);

let person5 = { name: "Frank", age: 35 };

let newPerson = {
  id: 1,
  ...person5,
  hobbies: ["jumping", "drawing"],
};

console.log(newPerson);
console.log(person5);


let mynumbers = [11, 22, 33, 44, 55];

function newArray(){
let mynumbers2 = [...mynumbers.slice(0,2), 6,7, ...mynumbers.slice(2)];
return console.log(mynumbers2);
}

newArray();