//Iterators, generators
const str = "Hello";
const iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* counter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const generatorObj = counter();
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

function* counter2() {
  for (let i = 0; i <= 100; i++) {
    yield i;
  }
}
// const generatorObj2 = counter2();
// for (const iterator of generatorObj2) {
//   console.log(iterator);
// }

function* generateEvenNumbers() {
  let i = 0;
  while (i <= 100) {
    if (i % 2 == 0) {
      yield i;
    } 
    i++;
  }
}

const generatorObj3 = generateEvenNumbers();
console.log(generatorObj3.next());
console.log(generatorObj3.next());
console.log(generatorObj3.next());
console.log(generatorObj3.next());
console.log(generatorObj3.next());
