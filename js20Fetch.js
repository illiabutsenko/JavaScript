fetch("https://dummyjson.com/users/1")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const newUser = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  email: "johndoe@example.com",
};
fetch("https://dummyjson.com/users/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


const newUser2 = {
  firstName: "Ivan",
  lastName: "Ivanov",
  username: "ivanivanov",
  age: 101,
  eyeColor: "blue",
  email: "ivanivanov@example.com",
};


async function createUser() {
  try {
    let response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser2),
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
}
createUser();