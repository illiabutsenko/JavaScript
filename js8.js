let GlobalVar = 26;

function abc() {
  let LocalVar = 55;
  console.log("GlobalVar = " + GlobalVar);
  console.log("LocalVar = " + LocalVar);
}
abc();

console.log("GlobalVar = " + GlobalVar);
console.log("LocalVar = " + LocalVar);
