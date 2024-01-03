//Internationalization, Localization
let date = new Date("Dec-31-1991");

let formatterUS = new Intl.DateTimeFormat("en-US");
let formatterFR = new Intl.DateTimeFormat("fr-FR");

console.log(formatterUS.format(date));
console.log(formatterFR.format(date));
