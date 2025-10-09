// Lesson 3: Recap of JavaScript Basics with New Examples

// ------------------------------
// Section 1: Variables, Data Types, and Operators
// ------------------------------

// Scenario: An online store managing product details.
const storeName = "Tech Haven"; // String
const productName = "Wireless Earbuds"; // String
let productPrice = 90; // Number
let productQuantity = 4; // Number
const isInStock = true; // Boolean
const productTags = ["audio", "wireless", "accessory"]; // Array
let discount; // Undefined

// Display variable values using console.log()
console.log("Store Name:", storeName);
console.log("Product Name:", productName);
console.log("Product Price:", productPrice);
console.log("Product Quantity:", productQuantity);
console.log("In Stock?", isInStock);
console.log("Product Tags:", productTags);
console.log("Discount:", discount); // Expected to be undefined

// Arithmetic operations: Calculate the total cost for the available quantity.
const totalValue = productPrice * productQuantity; // Multiplication
console.log("Total Cost:", totalValue);

// Compound assignment: Increase the product price by 10.
productPrice += 10; // Equivalent to productPrice = productPrice + 10
console.log("New Product Price:", productPrice);

// Increment and decrement operators:
// Increase the quantity by 1.
productQuantity++;
console.log("Increased Quantity:", productQuantity);

// Then decrease it by 1.
productQuantity--;
console.log("Restored Quantity:", productQuantity);

// Using the modulus operator:
// Find the remainder when total cost is divided by 50.
const remainder = totalValue % 50;
console.log("Remainder of Total Cost divided by 50:", remainder);

// ------------------------------
// Section 2: Conditionals and Logical Operators
// ------------------------------

const basketSize = 450;

// Example: Decide promotion messages based on total cost.
if (basketSize > 300) {
  console.log("Congratulations! You qualify for a premium discount.");
} else if (basketSize >= 200 && basketSize <= 300) {
  console.log(
    "You're close to a premium discount. Consider adding more products."
  );
} else {
  console.log("Keep shopping to unlock special offers!");
}

// Logical operators: Using AND (&&) and OR (||)
// Scenario: Show a special message if the product is in stock and either it's on sale or the quantity is high.

discount = true;

if (isInStock && (discount || productQuantity > 10)) {
  console.log("Special offer! 15% discount!");
} else {
  console.log("Special offer not applied.");
}

// Ternary operator: Determine shipping cost based on total cost.
let shippingCost = basketSize >= 250 ? "Free Shipping" : "$15 Shipping Fee";
console.log("Shipping Cost:", shippingCost);

// Switch statement: Display messages based on the product category.
let category = "accessory"; // Possible values: "audio", "accessory", "gadget"
switch (category) {
  case "audio":
    console.log("This product is in our Audio department.");
    break;
  case "accessory":
    console.log("This product is in our Accessories section.");
    break;
  case "gadget":
    console.log("This product is in our Gadgets collection.");
    break;
  default:
    console.log("This product belongs to a general category.");
}

// ------------------------------
// Section 3: typeof Operator and Truthy/Falsey Values
// ------------------------------

// Using the typeof operator to check data types:
console.log(typeof storeName); // "string"
console.log(typeof productPrice); // "number"
console.log(typeof isInStock); // "boolean"
console.log(typeof productTags); // "object" (arrays are objects in JavaScript)

// Demonstrating Truthy and Falsey values:

// Example with an empty string (falsey)
// Example with a non-empty string (truthy)
const greeting = "Welcome!";
if (greeting) {
  console.log("Greeting detected");
} else {
  console.log("No greeting detected");
}

// Example with the number 0 (falsey)
// Example with any other number (truthy)
const testNumber = 0;
if (testNumber) {
  console.log("this number is truthy.");
} else {
  console.log("this number is falsey.");
}

// --------------------------------------------------
// Section 4: Template Literals Recap
// --------------------------------------------------
const firstName = "Alex";
const lastName = "Miller";
const city = "London";
const country = "England";

// const welcomeMessage = "Welcome," + " " + firstName + " " + lastName + "! Enjoy shopping with us."
const welcomeMessage = `Welcome, ${firstName} ${lastName} from ${city}, ${country}! We hope you enjoy shopping with us.`;
console.log(welcomeMessage);

const productInfo = `We currently have ${productQuantity} ${productName} in stock. The department tags for this product are: ${productTags}.`;
console.log(productInfo);

// --------------------------------------------------
// Section 5: Mixing ternary and template strings
// --------------------------------------------------

const basketMessage = `You ${
  basketSize > 250 ? "are" : "aren't"
} eligible for free delivery`;

console.log(basketMessage);
