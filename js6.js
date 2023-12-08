a = Number(prompt("a="));
b = Number(prompt("b="));

function sum(a, b) {
  return a + b;
}

console.log("a + b = " + sum(a, b));

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");


function add(a, b) {
  return a + b;
}
console.log(add(1, 2));
console.log(add(6, 21));
console.log(add(1111, 2222));


function square(x) {
  return x * x;
}
let result = square(3);
console.log(result * 2);


function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  } else return "You are a minor";
}

console.log(checkAge(16));


function aaa(n) {
  if (n % 2 === 0) {
    return n + " Парне";
  } else return n + " Непарне";
}

console.log(aaa(23));
console.log(aaa(4));