// Lesson 8: JavaScript Objects

// --------------------------------------
// Section 1: What is an Object?
// --------------------------------------

// An object stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "designer",
};

console.log(person); // logging the entire object
console.log(person.age); // access using dot notation
console.log(person["name"]); // access using bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

// --------------------------------------
// Section 2: Creating, Modifying and Deleting Objects
// --------------------------------------

person.country = "Norway"; // Adding a new key value pair to an existing object
person.age++; // modify an existing key's value
person.job = "Web developer"; // modify an existing key's value
delete person.job; // remove existing key

console.log(person);

// --------------------------------------
// Section 3: Looping Through an Object using 'for in' loop
// --------------------------------------

const user = {
  name: "Joe",
  age: 37,
  location: "Stavanger",
  hobbies: "gaming",
};

// for in loop

// for loop - gives lots of settings of the loop
// for OF loop - loops over an ENTIRE array, giving access to each element
// for IN loop - loops over an ENTIRE object, giving access to the key

for (let key in user) {
  console.log(key); // logs the current key

  console.log(user[key]); // logs the current value (uses bracket notation)
}

// Dynamic key access is useful when you don’t know the property name in advance, like when looping through an object or handling user input.

// --------------------------------------
// Section 4: Nested Objects and Arrays
// --------------------------------------

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMale: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
};

console.log(userData.hobbies[0]);
console.log(userData.address.postCode);

// --------------------------------------
// Section 5: Arrays of Objects  (object arrays)
// --------------------------------------

const products = [
  { productName: "Shirt", productId: 746352, stock: 32 },
  { productName: "Pants", productId: 745642, stock: 5 },
  { productName: "Socks", productId: 749345, stock: 22 },
];

// We can target the values in productNames, but if we want all of them it gets repetative, we can fix this by using a loop.
console.log(products[0].productName);
console.log(products[1].productName);
console.log(products[2].productName);

for (let product of products) {
  console.log(
    `The product ${product.productName} has an ID of ${product.productId} and has ${product.stock} in stock`
  );
}

// --------------------------------------
// Section 6: Descriptive Sentences with Objects
// --------------------------------------

const people = [
  {
    name: "Thomas",
    isMale: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMale: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMale: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMale: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMale: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    isMale: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    isMale: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping", "gaming", "fishing"],
  },
  {
    name: "Cathy",
    isMale: false,
    age: 18,
    hobbies: ["design", "drawing"],
  },
];

for (let person of people) {
  //   let gender = "";

  //   if (person.isMale) {
  //     gender = "man";
  //   } else {
  //     gender = "woman";
  //   }

  let randomNum = Math.floor(Math.random() * person.hobbies.length);

  console.log(
    `${person.name} is a ${person.age}-year-old ${
      person.isMale ? "man" : "woman"
    } who enjoys ${person.hobbies[randomNum]}`
  );
}

// --------------------------------------
// Section 7: Working with Object Data
// --------------------------------------

// Calculate total age of all people

let totalAge = 0;

for (let person of people) {
  totalAge += person.age;
  console.log(totalAge);
}

let averageAge = totalAge / people.length;

console.log(averageAge);

// --------------------------------------
// Section 8: Combining Hobbies with Spread Syntax
// --------------------------------------

const allHobbies = [];

for (let person of people) {
  allHobbies.push(...person.hobbies);
}

console.log(allHobbies);

// --------------------------------------
// Section 9: Adding New Properties to Objects in an Array
// --------------------------------------

for (let person of people) {
  person.title = person.isMale ? "Mr" : "Ms";
}

console.log(people);

// --------------------------------------
// Summary
// --------------------------------------

// ✅ Objects use key-value pairs to store data.
// ✅ Dot and bracket notation let you access or update values.
// ✅ Objects can contain arrays, other objects, or even functions.
// ✅ You can loop through objects with for...in.
// ✅ Arrays can contain objects and be used with loops.
// ✅ Spread syntax can flatten nested arrays.
// ✅ You can dynamically add or modify object properties.
