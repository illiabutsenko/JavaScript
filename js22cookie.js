//Cookie, Local Storage
document.cookie = "ilya1990=Illia";
// console.log(document.cookie);
document.cookie = "username=John; expires=Thu, 27 Nov 2024 20:04:33 GMT";
// console.log(document.cookie);
document.cookie = "email=john@example.com";
console.log(document.cookie);

let cookies = document.cookie;
let name = cookies.split("; ")[1].split("=")[1];
console.log(name);

function getCookie(cookieName) {
  let cookies = document.cookie;
  let cookieArray = cookies.split("; ");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    if (cookie.indexOf(cookieName + "=") == 0) {
      return cookie.substring(cookieName.length + 1, cookie.length);
    }
  }  return "";
}
console.log(getCookie("email"));

//delete cookie:
document.cookie = "email=; expires=Thu Jan 01 1970 01:00:00 GMT";
console.log(document.cookie);
window.localStorage.setItem("color", "blue");
console.log(window.localStorage);
console.log(window.localStorage.getItem("color"));

//delete Local Storage:
// window.localStorage.removeItem("color");
console.log(window.localStorage);

//delete all Local Storage:
window.localStorage.clear();
console.log(window.localStorage);

let key = "username";
let value = "ABSOLUT";
function saveSettings(key, value){
    window.localStorage.setItem(key, value);
}
saveSettings(key, value);
console.log(window.localStorage);