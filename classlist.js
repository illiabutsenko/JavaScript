let p = document.querySelector("p");
console.log(p.classList);
console.log(p.classList.length);
p.classList.add("bold");
console.log(p.classList);
console.log(p.classList.length);
p.classList.remove("blue");
console.log(p.classList);
console.log(p.classList.length);
p.classList.toggle("red");
console.log(p.classList);
console.log(p.classList.length);
console.log(p.classList.contains("example"));
console.log(p.classList.contains("red"));
document.getElementById("myButton").addEventListener("click", function () {
  this.classList.toggle("red");
  this.classList.toggle("highlight");
});


console.log(myElement.classList.contains("highlighted"));
if (!myElement.classList.contains("highlighted")) {
  myElement.addEventListener("click", function () {
    myElement.classList.add("highlighted");
  });
}
