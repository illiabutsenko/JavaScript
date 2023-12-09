let phone = {
  brand: "Motorola",
  color: "Black",
  weight: 198,
};

let keys = Object.keys(phone);
console.log("Object.keys(phone):");
console.log(keys);

let value = Object.values(phone);
console.log("Object.values(phone):");
console.log(value);

phone.screenSize = "6 inches";
phone.color = "White";
console.log(phone);

delete phone.weight;
console.log(phone);

let person = {
  name: "Alice",
  age: 33,
  hobbies: ["reading", "cooking", "traveling"],
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  "1st": 1,
  "last name": "Smith",
  greet: function () {
    console.log("Hello, my name is " + person.name);
  },
};

console.log(person);
person.greet();
console.log("person.name: " + person.name);
console.log('person["name"]: ' + person["name"]);

console.log('person["1st"]: ' + person["1st"]);
console.log('person["last name"]: ' + person["last name"]);

let key1 = "address";
console.log(person[key1]);

console.log("person.address.street: " + person.address.street);
console.log('person["address"]["street"]: ' + person["address"]["street"]);

let person2 = {
  name: "Bob",
  year: 1970,
  calculateAge: function (year_now) {
    return year_now - this.year;
  },
};

let age2 = person2.calculateAge(2050);
console.log(age2);

for (let key in person2) {
  console.log(key + " : " + person2[key]);
}

let student = {
  name: "ILLIA",
  age: 33,
  subjects: ["programming", "physical education", "languages"],
  displayInfo: function () {
    console.log(
      `Student [${this.name}] [${this.age}] years old, studies: [${this.subjects}]`
    );
  },
};
student.displayInfo();
