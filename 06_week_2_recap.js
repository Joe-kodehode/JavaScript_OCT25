// Functions

// Gjenbrukbar kode/logikk som vi kan bruke ved behov.

function testFunction() {
  console.log("Konsoll log fra funksjonen!");
}

/* testFunction();
testFunction();
testFunction(); */

const arrowFunction = () => {
  console.log("Log fra arrow function!");
};
//arrowFunction();

// parameters & return statement.

//console.log(adder(2, 3));

/* function adder(num1, num2) {
  //const result = num1 + num2;
  return num1 + num2;
} */

// implicit return
//const adder = (num1, num2) => num1 + num2;

// Methods

/* const myString = "små bokstaver";
console.log(myString.toUpperCase());

console.log(["Erik", "Lars", "Marianne"].reverse()); */

// Lage en funksjon som tar i mot et tall, og formaterer
// det til en pris. 129 -> kr. 129.00

/* function formatPrice(amount, currency = "kr. ") {
  if (amount < 0) return `Invalid amount: ${amount}`;
  return `${currency}${amount.toFixed(2)}`;
}

const price = formatPrice(149.7844625); // forventer å få "kr. 149.00"
console.log(price); */

// Lage en funksjon som tar i mot en string, og "rydder opp i den",
// returner den som et navn.

// "   joNAthaN " -> "Jonathan"

/* const nameCleaner = (name) => {
  if (typeof name !== "string") return "Name must be string.";
  const clean = name.trim();
  if (clean.length === 0) return "No name provided";
  return `${clean.charAt(0).toUpperCase()}${clean.slice(1).toLowerCase()}`;
};
const cleanName = nameCleaner(" strinGGGG "); //-> "iDa"-> "Ida"
console.log(cleanName); */

// Randomness
// Mål: Generere et tilfeldig tall mellom 1 og 10
// Math.random() -> Genererer et tall mellom 0 og 1 med masse desimaler

//console.log(Math.floor(Math.random() * 10));

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
];
//console.log(pokemon);
//const randomIndex = Math.floor(Math.random() * pokemon.length);
console.log(pokemon[Math.floor(Math.random() * pokemon.length)]);
