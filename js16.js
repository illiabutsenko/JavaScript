let button = document.querySelector("#myButton");

let printMouse = (event) => {
  //   alert("Button clicked");
  //   console.log(event);
  console.log("Mouse X:", event.clientX);
  console.log("Mouse Y:", event.clientY);
};
button.addEventListener("click", printMouse);
button.removeEventListener("click", printMouse);

button.addEventListener("mousemove", () => {
  document.body.style.backgroundColor = "grey";
});

const dd = (event) => {
  for (let i of items) {
    i.style.color = "red";
  }
};
let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", dd);
}

//Практичне завдання:

let b = document.getElementById("myButton");
b.addEventListener("click", () => {
  document.body.style.color = "blue";
});
