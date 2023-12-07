for (let i = 0; i < 5; i++) {
  console.log("i = " + i);
}

let count = 0;

while (count < 5) {
  console.log("count = " + count);
  count++;
}

let num = 0;

do {
  console.log("num = " + num);
  num++;
} while (num <= 5);

let str = " ";
for (i = 1; i <= 5; i++) {
  str = " ";
  for (let j = 1; j <= 5; j++) {
    str += j + " ";
  }
  console.log("i = " + i + ";  j = " + str);
}
