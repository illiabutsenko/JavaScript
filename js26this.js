console.log(this);
console.log(this === window);
var name = "Alice";
console.log(this.name);
console.log(window.name);
console.log(this.name === window.name);
function sayHello() {
  console.log(`Hello, ${this.name}`);
}
sayHello();
window.sayHello();
this.sayHello();
name = "Bob";
sayHello();

let person = {
  name: "Frank",
  age: 25,
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },
  getOlder: function () {
    this.age++;
    console.log(
      `Happy Birthday, ${this.name}! You are now ${this.age} years old.`
    );
  },
};
console.log(person.sayHello(), person.getOlder());
console.log(person.sayHello(), person.getOlder());

function Car(mark, model) {
  this.mark = mark;
  this.model = model;
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar);


function User(name, age) {
  this.name = name;
  this.age = age;
}

const showInfo = new User("Danny", 18);
console.log(showInfo);
