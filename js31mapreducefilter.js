// Map Reduce Filter
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((a) => a * 2);
console.log(numbers);
console.log(doubled);

const filtered = doubled.filter((a) => a > 3);
console.log(filtered);

const sum = numbers.reduce((a, b) => a - b / 2, 0);
console.log(sum);

const combined = numbers
  .map((a) => a * 2)
  .filter((a) => a > 5)
  .reduce((a, b) => a + b, 0);
console.log(combined);


const result1 = numbers.map((a) => a * 3).filter((a) => a > 10);
console.log(result1);
const length = result1.length;
const result2 = result1.reduce((a, b) => (a + b), 0)/length;
console.log(`length = ${length}, result = ${result2}`);
