// DOM Manipulation with JavaScript

// --------------------------------------
// Section 1: What is the DOM?
// --------------------------------------

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// --------------------------------------
// Section 2: Targeting existing HTML Elements in JavaScript
// --------------------------------------

const heading = document.getElementById("my-heading"); // targets the element with id of my-heading
console.log(heading);

const paragraph = document.querySelector("p"); // Only targets the first paragraph on the page
console.log(paragraph);

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

const testParagraphs = document.querySelectorAll(".test");
console.log(testParagraphs);

const button = document.querySelector("#my-button");
console.log(button);

const welcomeMsg = document.querySelector("#welcome-msg");

// --------------------------------------
// Section 3: Changing Text or HTML Content
// --------------------------------------

// textContent sets or gets the plain text inside an element (no HTML tags)
welcomeMsg.textContent = "This is my updated welcome message";

// innerHTML sets or gets the HTML inside an element (can include tags)
heading.innerHTML = "<span style='color: red'>Updated Heading!</span>";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// --------------------------------------
// Section 4: Changing Styles using JS
// --------------------------------------

heading.style.fontSize = "36px";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";

// --------------------------------------
// Section 5: Creating and Adding Elements
// --------------------------------------

// Create a new <p> element
const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

newParagraph.textContent = "I'm a brand new paragraph!";
newParagraph2.textContent = "I'm a brand new paragraph also!";

newParagraph.classList.add("pretty-paragraph");
newParagraph2.classList.add("pretty-paragraph");

document.body.append(newParagraph, newParagraph2);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Creating an image element and adding attributes

const image = document.createElement("img");

// We can add an attriubte using setAttribute()
image.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg"
);

// We can also add an attribute using dot notation
image.alt = "A red apple laying on it's side";

document.body.append(image);

// 📌 setAttribute vs classList.add:
// setAttribute("class", "one two") → sets or replaces all classes
// classList.add("extra") → adds a class without removing others

// Prepend: Adds the element to the beginning of the parent
const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added at the top of the page!";
document.body.prepend(firstParagraph);

// Insert an element into the middle (before a specific element)
const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";

const target = document.querySelector("p:nth-of-type(5)");

document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to an existing list

// Step 1: Target the existing list
const ul = document.getElementById("our-list");

// Step 2: Create a new li element
const newLi = document.createElement("li");

// Step 3: Add text content and css class
newLi.textContent = "List item 4";
newLi.classList.add("list-item");

// Step 4: Append the new li to the ul
ul.append(newLi);

// --------------------------------------
// Section 6: Removing Elements
// --------------------------------------

ul.removeChild(document.querySelector("li"));

// --------------------------------------
// Section 7: Parent and Child Relationships
// --------------------------------------

console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// --------------------------------------
// Section 8: classList Methods
// --------------------------------------

const box = document.querySelector(".box");

// Add a class
box.classList.add("active");

// Remove a class
box.classList.remove("active");

// Toggle a class  (adds if missing, removes if present)

function toggleBoxColor() {
  box.classList.toggle("darkmode");
  // Check if an element has a class
  console.log(box.classList.contains("darkmode"));
}

// --------------------------------------
// Section 9: Creating a List in a Loop
// --------------------------------------

const favoriteMovies = [
  "The Matrix",
  "Kill Bill",
  "5th Element",
  "Inception",
  "Spirited Away",
  "Mamma Mia",
  "Equalizer",
  "Bee movie",
];

// Step 1: Create a new UL to hold our movie list

const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

for (let movie of favoriteMovies) {
  // Step 2: Create Li
  const movieLi = document.createElement("li");

  // Step 3: Add text to the li
  movieLi.textContent = movie;

  // Step 4: Append the li to the ul
  movieList.append(movieLi);
}

// --------------------------------------
// Summary
// --------------------------------------

// ✅ The DOM is how JavaScript connects to HTML
// ✅ Use querySelector, getElementById, etc. to select elements
// ✅ Use .textContent, .innerHTML, and .style to change content and appearance
// ✅ Use createElement + appendChild to add elements
// ✅ Use removeChild to delete elements
// ✅ DOM has a parent/child/sibling structure you can navigate
// ✅ classList helps manage CSS classes
