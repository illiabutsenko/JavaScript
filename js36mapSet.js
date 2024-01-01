//Map, Set
let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1'));
console.log(map.get('key2'));
const user = new Map([['name', 'John'], ['age', 30]]);
console.log(user);
console.log(user.get('name'));
user.set('city', 'New-York');
console.log(user);
console.log(user.keys());
console.log(user.values());
console.log(map.has('key1'));
console.log(user.has('key1'));

let set = new Set();
set.add("value1");
set.add("value2");
console.log(set);
const fruits = new Set(['apple', 'banana', 'orange', 'banana']);
console.log(fruits);
console.log(fruits.has('apple'));
console.log(fruits.has('mango'));
console.log(fruits.add('mango'));
console.log(fruits.add('apple'));

let array = [333, true, 'T', null, undefined];

const newSet = (a) => {
    let b = new Set();
    for(let i of a) {
        b.add(i);
    }
    return b;
}
console.log(newSet(array));

for(let value of fruits) {
    console.log(value);
}

for(let [key, value] of user) {
    console.log(`${key}: ${value}`);
}

console.log(user.size, fruits.size);
console.log(user);
console.log(` 111 user ${user.has()}`);
console.log(user.delete('city'));
console.log(user);
console.log(fruits);
console.log(fruits.delete('mango'));
console.log(fruits);
console.log(fruits.delete('lemon'));
fruits.clear();
console.log(fruits);
user.clear();
console.log(user);
