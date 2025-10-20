// Lesson 7: JavaScript Loops

// A loop is a way to repeat code without writing it multiple times.

// --------------------------------------
// Section 1: Why We Use Loops
// --------------------------------------

// Without a loop
// console.log(`Hei ${names[0]}`);
// console.log(`Hei ${names[1]}`);
// console.log(`Hei ${names[2]}`);
// console.log(`Hei ${names[3]}`);
// console.log(`Hei ${names[4]}`);
// console.log(`Hei ${names[5]}`);

// DRY - Don't Repeat Yourself

// With a loop. (Where do we start; When do we end; How much do we increment by each loop;)
// for (let i = 0; i < names.length; i++) {
//   console.log(`Hei ${names[i]}`);
// }

// --------------------------------------
// Section 2: The for Loop
// --------------------------------------

for (let i = 50; i >= 0; i -= 5) {
  console.log(`Counting ${i}`);
}

// --------------------------------------
// Section 3: Combining Loops with Functions and Methods
// --------------------------------------

// Create a function with a loop to greet names in an array

const names = ["Tom", "Erik", "Jessica", "Joe", "Endre", "Håkon", "Emil"];

const names2 = ["alice", " BOB ", "charlie", "dEbBy"];

const names3 = ["JoE   ", "heNrY", "   JiLL   "];

function greetEveryone(namesArray) {
  for (let i = 0; i < namesArray.length; i++) {
    console.log(`Hello ${namesArray[i].trim().toLowerCase()}`);
  }
}

greetEveryone(names);
greetEveryone(names2);
greetEveryone(names3);

// Creating a function with a loop to combine elements in an array to a string

let wordsArray = ["Loops", "are", "really", "useful"];

function makeSentenceWithLoop(stringArray) {
  let sentence = "";

  for (let i = 0; i < stringArray.length; i++) {
    sentence += stringArray[i];
    if (i < wordsArray.length - 1) {
      sentence += " ";
    }
  }

  return sentence;
}

console.log(makeSentenceWithLoop(wordsArray));

// Or just use .join....
console.log(wordsArray.join(" "));

// --------------------------------------
// Section 4: The for...of Loop
// --------------------------------------

// for of loop, loops over ALL elements in an array and stores it in a variable we can use inside the array. Not as many options as a regular for loop!

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// --------------------------------------
// Section 5: The while Loop
// --------------------------------------

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// Guessing game with math.random and a while loop

// Math.random() gives a number between 0.00000 - 0.99999

const secretNum = Math.floor(Math.random() * 100) + 1;
let guess = 0;

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing: ${guess}`);

  if (guess === secretNum) {
    console.log(`Correct, the secret number was: ${secretNum}`);
  }
}

// --------------------------------------
// Section 6: Creating Arrays with Loops
// --------------------------------------

// Create a function which returns an array of random numbers.   10 random numbers in the array, between 1-100

// Math.random()
// Loop

function makeRandomArray(times, max) {
  const result = [];

  for (let i = 0; i < times; i++) {
    result.push(Math.floor(Math.random() * max) + 1);
  }

  return result;
}

const randomNumbers = makeRandomArray(10, 50);
// console.log(makeRandomArray(5, 1000));
// console.log(makeRandomArray(1, 10000000));

// --------------------------------------
// Section 7: Finding the Biggest Number
// --------------------------------------
// loop over the array, check if the current element is a bigger number than what's stored in biggestNum, if yes, replace biggestNum with the current element. If no, do nothing.

function findMax(array) {
  let biggestNum = 0;

  for (let num of array) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  return `The biggest number is ${biggestNum}`;
}

console.log(randomNumbers);
console.log(findMax(randomNumbers));

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Patrick",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
];

// Skip the loop when we get to the names "Benny" and "Jenny"
for (let name of moreNames) {
  if (name === "Benny" || name === "Jenny") {
    continue;
  }
  //   console.log(name);
}

// Stop the loop when we get to Patrick
for (let name of moreNames) {
  if (name === "Patrick") {
    break;
  }
  console.log(name);
}
