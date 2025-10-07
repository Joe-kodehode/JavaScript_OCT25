// Variables and basic operators

// --------------------------------------
// Section 1: Commenting our code
// --------------------------------------

// single line comment = ctrl + *
// multi-line-comment = shift + alt + a
// shift + alt + down arrow = duplicate current line
// ctrl + enter = next line (even if cursor is in the middle of code)

/* 
sdfgsdfg
sdfgsdfggsd
sdfgsdfgsdfg
 */

// Used for testing our code and leaving comments

// --------------------------------------
// Section 2: console log
// --------------------------------------

console.log("hello world");

// --------------------------------------
// Section 3: Variables and Data Types
// --------------------------------------

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters of words in upper case. it's used for naming variables in JavaScript.

// string (text in JS)
let exampleText = "this is my text";

// reassigning our variable (works because we used let instead of const)
exampleText = "now THIS is my text";
console.log(exampleText);

// Integer (whole number)
const myNum = 5;
console.log(myNum);

// Float (numbrs with decimals)
const myFloat = 6.3454;
console.log(myFloat);

// Boolean (true or false)
const thisIsTrue = true;
const thisIsFalse = false;

console.log(thisIsTrue);
console.log(thisIsFalse);

// Array (list of values)
const exampleArray = [5, 10, 100, 43, 243];

console.log(exampleArray);
// targeting an element at a specific index in the array (remember indexes start at 0!)
console.log(exampleArray[2]);

// Object (hold key value pairs)

const user = {
  name: "Joe",
  town: "Stavanger",
  job: "Veileder",
};

console.log(user);

// Undefined
let undefinedExample;
console.log(undefinedExample);
console.log(exampleArray[5]);

// Null
nullExample = null;
console.log(nullExample);

// --------------------------------------
// Section 4: Declaring variables - Let and Const
// --------------------------------------

let changeableMessage = "I can change";
changeableMessage = "I've changed!";
console.log(changeableMessage);

const unchangeableMessage = "I can NOT change";
// unchangeableMessage = "Uh oh";
console.log(unchangeableMessage);

let healthPoints = 100;
healthPoints = 50;
console.log(healthPoints);

// use const if possible. use let if the variable has to change.

// Note: When you declare a variable with const, you can't reassign or redeclare it in the same scope. However, if the constant holds a mutable object (like an array or an object), the properties or elements of that object can be changed.

const numArray = [1, 2, 3];
numArray[1] = 4;
console.log(numArray);

// --------------------------------------
// Section 5: Basic Operators
// --------------------------------------

// Operators perform calculations or comparisons

let num1 = 3;
let num2 = 2;

console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multiplication
console.log(num1 / num2); // division
console.log(num1 % num2); // modulus (remainders)

// Using the + operator with strings to concatenate them

let firstName = "Jane";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log(fullName);

// incrementing and decrementing
let counter = 0;

// DRY - Don't repeat yourself
counter++;
counter++;
counter++;
counter--;
console.log(counter);

// The following two lines do the same thing, use the 2nd one!
// counter = counter + 50;
counter += 3;

console.log(counter + 50);
console.log(counter);

counter -= 100;
console.log(counter);

// Comparison operators - return true or false

console.log(counter == -95);
console.log(99 == 100);

// Comparison (doesnt take into account data types)
console.log("100" == 100);

// Strict comparison (does take into account data types)
console.log("100" === 100);

// Greater than
console.log(5 > 10);

// Less than
console.log(5 < 10);

// Greater than or equal to
console.log(10 >= 10);

// Less than or equal to
console.log(10 <= 10);
