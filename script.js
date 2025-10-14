// Lesson 5: JavaScript Methods (Strings, Arrays, and Numbers)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// --------------------------------------
// Section 1: String Methods
// --------------------------------------

const text = "    Hello, JavaScript World World!   ";

console.log(text.trim()); // removes whitespace from both ends of the string
console.log(text.trim().toUpperCase()); // converts the entire string to uppercase
console.log(text.trim().toLowerCase()); // converts the entire string to lowercase
console.log(text.trim().indexOf("JavaScript")); // returns the starting index of "JavaScript" in the string
console.log(text.trim().slice(0, 5)); // extracts characters between starting index and an ending index parameters.  Doesn't alter the original string.
console.log(text.replace("World", "Universe")); // replaces the first instance of the word "World" with "Universe"
console.log(text.replaceAll("World", "Universe")); // replaces all instances of the word "World" with "Universe"
console.log(text.trim().charCodeAt(0)); // returns the Unicode value of the character at the specified index
console.log(text.length); // returns the length (amount of characters) in the sting. Starts from 1, not 0 as it's not about the index
console.log(text.repeat(3)); // repeats the string 3 times

// --------------------------------------
// Section 1.1: Converting a String to an Array
// --------------------------------------

console.log(text.trim().split(" ")); // splits the string into an array of substrings by spaces

// --------------------------------------
// Section 1.2: Converting a String to a Number
// --------------------------------------

let numericString = "123.45xyz";

console.log(Number(numericString)); // converts entire string into a number; returns NaN (not a number) if any part is invalid

console.log(parseInt(numericString)); // parses as an integer until an invalid character (decimal or alphabetical character)

console.log(parseFloat(numericString)); // parses as a float until an invalid character (alphabetical character)

// --------------------------------------
// Section 2: Array Methods
// --------------------------------------

const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array

colors.push("Yellow"); // adds a new element to the end of the array
console.log(colors);

colors.pop(); // remove the last element from the end of the array
console.log(colors);

colors.unshift("Purple"); // adds a new element to the beginning of the array
console.log(colors);

colors.shift(); // removes an element from the beginning of the array
console.log(colors);

console.log(colors.includes("Green")); // checks if "Green" is included in the colors array, comes back true
console.log(colors.includes("Violet")); // checks if "Violet" is included in the colors array, comes back false

const newColors = colors.toSpliced(0, 1, "Pink"); //Returns a new array with element(s) spliced out and new element(s) spliced in
console.log(newColors);

colors.splice(0, 1, "Pink"); // The same as toSpliced BUT doesn't return a new array, it affects the original array.
console.log(colors);

let unsortedNumArr = [3, 1, 4, 1, 5, 9, 3];

let sortedNumArr = unsortedNumArr.toSorted(); // Returns a NEW array that has been sorted
console.log(sortedNumArr);

unsortedNumArr.sort(); // Sorts the original array
console.log(unsortedNumArr);

const reversedArr = sortedNumArr.toReversed(); // Retruns a NEW array that has been reversed.
console.log(reversedArr);

sortedNumArr.reverse(); // Reverses the original array
console.log(sortedNumArr);

console.log(sortedNumArr.at(5)); // Returns the element at the given index
console.log(sortedNumArr[5]); // This does the same but it won't work going backwards with -

console.log(sortedNumArr.at(-5)); // Returns the element at the given index, from the end to the start

// --------------------------------------
// Section 2.1: Converting an Array into a String
// --------------------------------------

console.log(colors);

console.log(colors.join(" ")); // Joins array elements into a string seperated by the string in the parameter. (in this case a whitespace " ")

// --------------------------------------
// Section 3: Number Methods
// --------------------------------------

const myNum = 3.39457934;

console.log(myNum.toFixed(2)); // rounds decimals to the given number. Also turns it into a string data type!

console.log(myNum.toString()); // turns a number data type into a string

console.log(myNum.toExponential()); // returns a string as exponential notation

// --------------------------------------
// Section 4: Chaining Methods Together
// --------------------------------------

// Example 1: Chaining String Methods
const rawString = "   JavaScript is fun!   ";
const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();
console.log(processedString); // "JAVASCRIPT IS AWESOME!"

// Example 2: Chaining Array Methods
const words = ["hello", "world"];
const messageFromArray = words.join(" ").toUpperCase();
console.log(messageFromArray); // "HELLO WORLD"

// Example 3: Chaining with a Number (after converting to string)
// Take a number, round it to 2 decimals, convert to a string, and repeat it twice
const chainedNumber = myNum.toFixed(2).toString().repeat(2);
console.log(chainedNumber); // e.g., "3.143.14"
