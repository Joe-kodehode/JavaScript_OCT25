// Lesson 2: Conditionals and Related Operators in JavaScript

// --------------------------------------
// Section 1: The typeof Operator
// --------------------------------------

const myString = "Hello, World!";
console.log(typeof myString);

const myNum = 100;
console.log(typeof myNum);

// --------------------------------------
// Section 2: Comparison Operators
// --------------------------------------

// These operators compare values and return a boolean (true or false).

console.log(15 > 20); // Greater than (>) operator

console.log(15 < 20); // Less than (<) operator

console.log(15 >= 20); // Greater than or equal to (>=) operator
console.log(15 >= 15);

console.log(15 <= 20); // Less than or equal to (<=) operator
console.log(15 <= 15);

// The equality (==) operator checks if values are equal (with type conversion):
console.log(15 == "15"); // true due to type coercion

// Strict equality (===) operator checks for both value and type:
console.log(15 === "15"); // false, because the types differ (number vs string)

console.log(20 != "20"); // Not equal (!=) operator

console.log(20 !== "20"); // Strict not equal (!==) operator

// --------------------------------------
// Section 3: Conditionals with if, if...else, if...else if...else
// --------------------------------------

// Basic 'if / else if / else' statement

let temperature = 30;

if (temperature > 25) {
  console.log("It's a very hot day");
} else if (temperature > 15) {
  console.log("It's a warm day");
} else if (temperature > 0) {
  console.log("It's a cold day");
} else {
  console.log("It's a freezing day");
}

// --------------------------------------
// Section 4: Logical Operators: AND (&&) and OR (||)
// --------------------------------------

// AND (&&) requires both conditions to be true.

let age = 17;
let hasLicence = true;
// if (age >= 18) {
//   console.log("The user is over 18 and can drive");
// }

// if (hasLicence === true) {
//   console.log("The user has their licence and can drive");
// }

if (age >= 18 && hasLicence === true) {
  console.log(
    "The user is 18 or over AND has their licence, have a nice drive"
  );
} else {
  console.log("You can't drive, sorry!");
}

let day = "dog";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend! yay!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday");
} else {
  console.log("That's not a day!");
}

// --------------------------------------
// Section 5: Ternary Operator
// --------------------------------------

let isMember = true;

// if (isMember) {
//   console.log("Your fee is $5");
// } else {
//   console.log("Your fee is $10");
// }

// The same but using ternary
let fee = isMember ? "$5" : "$10";
console.log("Your fee is:", fee);

// We can 'nest' ternarys but it's usually better to use if/else if for readability

let isVipMember = false;
// let fee = isMember ? "$5" : isVipMember ? "$0" : "$10";

// --------------------------------------
// Section 6: Switch Statement
// --------------------------------------

let fruit = "shoe";

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "banana":
    console.log("The fruit is a banana");
    break;
  case "grapes":
    console.log("grapes were the fruit");
    break;
  default:
    console.log("Unrecognized fruit");
}

// --------------------------------------
// Section 7: Truthy and Falsey Values
// --------------------------------------

// In JavaScript, some values are automatically considered "truthy" (true) or "falsey" (false) when used in conditions.

let value = "";

if (value) {
  console.log("This value is truthy");
} else {
  console.log("This value is falsey");
}

// A string with value is truthy
// A positive number is truthy
// A negative number is truthy
// An array with data is truthy
// An empty array is truthy
// An object with data is truthy
// An object with no data is truthy

// An empty string is falsey
// 0 is falsey
// Undefined is falsey
// Null is falsey

// --------------------------------------
// Section 8: Template literal // Template string
// --------------------------------------

const firstName = "Joe";
const lastName = "Hansen";
const city = "Oslo";
const role = "window cleaner";
/* const fullName = firstName + " " + lastName + " " + "is a" + " " + role + " " + "from" + " " + city; */
const fullName = `${firstName} ${lastName} is a ${role} from ${city}`;

console.log(fullName);
