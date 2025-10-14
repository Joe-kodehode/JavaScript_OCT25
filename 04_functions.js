// Lesson 4: Functions in JavaScript

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// ---------------------------------------------------
// Section 1: Function Declarations (aka function statements) and Hoisting
// ---------------------------------------------------

sayHello();

// This function prints a simple greeting.
function sayHello() {
  console.log("Hello world!");
}

sayHello();
// Calling the function before its declaration demonstrates hoisting.

// ---------------------------------------------------
// Section 2: Arrow Functions (introduced in ES6, great for short, inline functions)
// ---------------------------------------------------

// An arrow function expression. Can't use hoisting (must be called after being created).
const arrowFunctionExample = () => {
  console.log("Hello from the arrow function");
};

arrowFunctionExample();

// ---------------------------------------------------
// Section 3: Return Statements and Scope
// ---------------------------------------------------

function one() {
  console.log("This function logs a message. It does not return any data");
}

one();

function two() {
  const myMessage = "This function returns data";
  return myMessage;
}

const returnedMessage = two();

// You can only return once from a function, then we exit the function.
// Returned data gets sent to the function call.
// We can store the returned data in a new variable

// ---------------------------------------------------
// Section 4: Functions with Parameters
// ---------------------------------------------------

// Example 1
// This function is 'hard coded' to always return 3 + 4.
function add() {
  return 3 + 4;
}

console.log(add());

// Example 2
// This function is not 'hard coded', it is dynamic - we can reuse it with different values in the parameters.
function minus(num1, num2) {
  return num1 - num2;
}

console.log(minus(3, 4));
console.log(minus(50, 34));

// Example 3
// A greeter function that uses parameters and template literal

const greeter = (name, time) => {
  return `Good ${time} ${name}`;
};

console.log(greeter("Joe", "evening"));
console.log(greeter("Henry", "afternoon"));

// Implicit return lets us remove the {} and 'return' keyword. Only works with a simple one-liner that goes directly into a return.
const multiplier = (num1, num2) => num1 * num2;

console.log(multiplier(5, 10));
console.log(multiplier(7, 3));

// ---------------------------------------------------
// Section 6: Calculator Function Using Switch Statement
// ---------------------------------------------------

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num1 === 0 || num2 === 0) {
        return "You shouldnt divide with 0!";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(5, 7, "+"));
console.log(calculator(50, 3, "*"));
console.log(calculator(104, 1, "-"));
console.log(calculator(10, 2, "/"));
console.log(calculator(10, 2, "$"));
console.log(calculator(10, 0, "/"));

// ---------------------------------------------------
// Section 7: Updating a Global Variable via a Function
// ---------------------------------------------------

let hp = 100;

// arrow function to update global hp variable
const updateHp = (change, value) => {
  if (change === "up") {
    hp += value;
    if (hp > 200) {
      hp = 200;
    }
  } else if (change === "down") {
    hp -= value;
    if (hp <= 0) {
      console.log("Game over!");
      hp = 100;
    }
  }
};

console.log(hp);
updateHp("up", 50);
console.log(hp);
updateHp("down", 20);
console.log(hp);
updateHp("down", 300);
console.log(hp);

// ---------------------------------------------------
// Section 8: Using Template Literals and Ternary Operator in a Function
// ---------------------------------------------------

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];
const games = [
  "Silksong",
  "Hello Kitty Island Adventure",
  "Animal Crossing",
  "Gears of War",
];

// Make a function which checks if a fruit is in the fruits array and console logs either "The array does include the fruit" or "The array doesn't include the fruit"

// const checkItem = (fruit) => {
//   if (fruits.includes(fruit)) {
//     return `The array does include ${fruit}`;
//   } else {
//     return `The array doesn't include ${fruit}`;
//   }
// };

// function with a ternary to determine if the fruit is in the array
const checkItem = (item, array) =>
  `The array ${array.includes(item) ? "does" : "doesn't"} include ${item}`;

console.log(checkItem("Apple", fruits));
console.log(checkItem("Grape", fruits));
console.log(checkItem("Kiwi", fruits));
console.log(checkItem("Animal Crossing", games));
console.log(checkItem("Silksong", games));
