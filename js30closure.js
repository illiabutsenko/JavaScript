//Closures
const makeCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
let counter = makeCounter();
// console.log(counter);
console.log(counter());
console.log(counter());


const makeBankAccount = (initialBalance) => {
  let balance = initialBalance;
  return {
    getBalance: () => {
      return balance;
    },
    deposit: (amount) => {
      balance += amount;
    },
    withdraw: (amount) => {
      balance -= amount;
    },
  };
};
let account = makeBankAccount(100);
console.log(account.getBalance());
account.deposit(50);
console.log(account.getBalance());
account.withdraw(25);
console.log(account.getBalance());
console.log(account.balance);
account.balance = 1000000;
console.log(account);
console.log(account.getBalance());


const makeGreeting = (language) => {
  return (name) => {
    switch (language) {
      case "English":
        return `Hello, ${name}!`;
      case "French":
        return `Bonjour, ${name}!`;
      case "Spanish":
        return `Hola, ${name}!`;
      default:
        return "Unknown language";
    }
  };
};
let greetEnglish = makeGreeting("English");
console.log(greetEnglish("Alice"));
let greetFrench = makeGreeting("French");
console.log(greetFrench("Bob"));
let greetSpanish = makeGreeting("Spanish");
console.log(greetSpanish("Charlie"));


window.onload = () => {
  let counter = 0;
  let button = document.getElementById("myButton");
  let display = document.getElementById("list");

  button.onclick = () => {
    counter++;
    display.innerHTML = counter;
  };
};


const a = (count) => {
    let initCount = count;
    return {
      increase: (b) => {
        initCount += b;
      },
      decrease: (b) => {
        initCount -= b;
      },
      currentCount: () => {
        return initCount;
      }
    };
  };
  let c = a(1000);
  c.increase(500);
  console.log(c.currentCount());
  c.decrease(900);
  console.log(c.currentCount());
  c.decrease(700);
  c.initCount = 1000000;
  console.log(c.currentCount());