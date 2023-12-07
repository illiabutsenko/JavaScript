let fruits = ["apple", "banana", "cherry"];

let firsFruit = fruits[0];

fruits.push("orange"); //add an element to the end of the array

let removedlastFruit = fruits.pop();

let removedfirstFruit = fruits.shift();

fruits.unshift("grape"); //add an element to the beginning of the array

console.log(fruits);
console.log("firsFruit: " + firsFruit);
console.log("removedlastFruit: " + removedlastFruit);
console.log("removedfirstFruit: " + removedfirstFruit);

let vegetables = ["carrot", "potato", "cucumber"];
vegetables.push("tomato");
console.log(vegetables);

vegetables.shift();
console.log(vegetables);
