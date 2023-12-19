document.getElementById("myButton").addEventListener("click", function () {
  try {
    console.log(foo.bar);
  } catch (error) {
    console.log("We've got an error:", error.name);
    console.log(error.message);
  } finally {
    console.log("Thanks for using our app");
  }
  console.log("Text");
});

function checkPositive(number) {
  if (number <= 0) {
    throw new Error("The number must be positive");
  }
  console.log("The number is positive", number);
}

let a = 10;
let b = -5;
try {
  checkPositive(a);
//   debugger
  checkPositive(b);
} catch (err) {
  console.log("Warning:", err.message);
}
