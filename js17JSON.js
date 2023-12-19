let json_persons = `[
{
    "name": "Alice",
    "age": 25,
    "hobbies": ["reading", "coocing", "gaming"],
    "active": true
},
{
    "name": "Charlie",
    "age": 35,
    "hobbies": ["cooding", "photography", "biking"],
    "active": false
},
{
    "name": "David",
    "age": 40,
    "hobbies": ["gardening", "painting", "writing"],
    "active": null
}
]`;

let obj = JSON.parse(json_persons);
console.log(json_persons);
console.log(obj);
console.log(obj[1].name, obj[1].hobbies[2]);

let json = JSON.stringify(obj[1]);
console.log(json);
console.log(json[2]);
console.log(json[3]);


//Практичне завдання:

let person2 = {
    name: "John", 
    age: 28, 
    hobbies: ["swimming", "reading"]
};
let json2 = JSON.stringify(person2);
console.log(person2);
console.log(json2);