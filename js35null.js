//Nullish Coalescing Operator
const getNameFromAPI = () => {
  const names = ["Alice", "Bob", "Charlie", null];
  const r1 = Math.random() * names.length;
  const randomIndex = Math.floor(r1);
  console.log(r1, randomIndex);
  return names[randomIndex];
};

console.log(getNameFromAPI());
let name = getNameFromAPI();
// if(name == null) {
//     name = "Anonymus";
// }
name = name || "Anonymus";
console.log(name);
const notTruthy = [false, 0, "", null, undefined, NaN];

const getAgeFromAPI = () => {
  const possibleAges = [0, "aa", true, 10, 20, 30, NaN, null, undefined];
  const r1 = Math.random() * possibleAges.length;
  const randomIndex = Math.floor(r1);
  console.log(r1, randomIndex);
  return possibleAges[randomIndex];
};

let age = getAgeFromAPI();
age = age || 18;
console.log(age);

let age2 = getAgeFromAPI();
age2 = age2 ?? 18;
console.log(age2);

// name = getNameFromAPI() ?? getNameFromDatabase() ?? "Anonymus";

const getUserFromAPI = () => {
  const users = [
    {name: "Alice", address: {city: "New-York"} },
    {name: "Bob", address: {city: "Paris"} },
    {name: "Charlie", address: {city: null} },
    null,
  ];
  const r1 = Math.random() * users.length;
  const randomIndex = Math.floor(r1);
  console.log(r1, randomIndex);
  return users[randomIndex];
}
let user = getUserFromAPI();
// let city = user.address.city;
let city;
if (user != null && user.address != null && user.address.city != null) {
  city = user.address.city;
} else {city = "Unknown";}
console.log(city);

city = user?.address?.city;
console.log(city);

console.log(user?.doSomething(1, 2) ?? "No result");

let users = [
  { firstName: "Illia", lastName: "Butsenko" },
  { firstName: "Brad", lastName: "Pitt" },
  { firstName: "Angelina", lastName: null },
  null,
];
const getUserDisplayName = (user) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  user = users[randomIndex];
  console.log(randomIndex);
  console.log("user: ", user);

  let firstName = user?.firstName ?? "Анонімний";
  let lastName = user?.lastName ?? "Анонімний";
  return `${firstName} ${lastName}`;
};
console.log(getUserDisplayName());

const getUserDisplayName2 = (user) => {
  const r1 = Math.random();
  let r2;
  console.log(
    "r1 = ", r1, "r2 = ",
    r1 <= 0.25 ? (r2 = 0)
      : r1 > 0.25 && r1 <= 0.5 ? (r2 = 1)
      : r1 > 0.5 && r1 <= 0.75 ? (r2 = 2)
      : (r2 = 3)
  );
    user = users[r2];
    console.log("user: ", user);
    
    let firstName = user?.firstName ?? "Анонімний";
    let lastName = user?.lastName ?? "Анонімний";
    return `${firstName} ${lastName}`;
  };
  console.log(getUserDisplayName2());
