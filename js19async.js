//Promise, async/await
let checkWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Sunny");
    } else {
      reject("Failed to get weather data");
    }
  }, 1000);
});

checkWeather
  .then(weather => console.log(`Weather is: ${weather}`))
  .catch((error) => console.log(`Error: ${error}`));

async function getWeather() {
  try {
    let weather = await checkWeather;
    console.log(`Weather is: ${weather}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
