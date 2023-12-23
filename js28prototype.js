// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//     console.log(`${this.name} is eating`);
// }
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log(`${this.name} is barking`);
// }
// const max = new Dog("Max", "Husky");

// max.eat();
// max.bark();


class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    bark() {
        console.log(`${this.name} is barking`);
    }
}


const max = new Dog("Max", "Husky");

max.eat();
max.bark();



class Bird extends Animal {
     constructor(name){
        super(name);
        this.name = name;
     }
    fly() {
        console.log(`${this.name} is flying`);
    }
}

const charlie = new Bird("Charlie");

charlie.eat();
charlie.fly();