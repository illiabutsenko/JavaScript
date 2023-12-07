let isRaining = false;
let isCloudy = true;
let temperature = 18;

if (isRaining) {
  console.log("Take an umbrella");
} else if (isCloudy) {
  console.log("Maybe take a light jacket");
} else {
  console.log("Enjoy the sunshine");
}

if (temperature <= 18) {
  console.log("It's a bit chilly outside");
}


let temperature2 = 12;
let isWindy = true;

if (temperature2 <= 15 && isWindy) {
  console.log("Вдягніться тепліше і візьміть шапку");
} else if (temperature2 <= 15 && !isWindy) {
  console.log("Вдягніться тепліше");
} else if (temperature2 > 15 && !isWindy) {
  console.log("Хороший день для прогулянки");
} else {
  console.log("Хороший день для прогулянки, але вітряно");
}
