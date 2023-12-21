let element = document.getElementById("animation");
let position = 0;
let a = 0;

function animate() {
  if (position <= window.innerHeight - 110 && a == 0) {
    position += 4;
  } else {
    a = 1;
  }
  if (position >= 0 && a == 1) {
    position -= 4;
  } else {
    a = 0;
  }
  //   let x = Math.cos(position*3);
  let y = position;
  element.style.transform = `translateY(${y}px)`;
  console.log(`y = ${y};`);
  //   if (position >= window.innerWidth - element.offsetWidth - 10) {
  //     return;
  //   }
  requestAnimationFrame(animate);
}
animate();
