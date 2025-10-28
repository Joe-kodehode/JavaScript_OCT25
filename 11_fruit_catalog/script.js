// prettier-ignore
const fruits = [
  { name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    origin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
  },
];

// create a fruit-container <section>  ✅
// append the fruit-container to the body ✅

// for of loop
// create each card <div>
// create each element that goes inside the card (h2, img, p, p ,p)
// give the elements inside the card attributes (src, textContent)
// append the elements to the card
// append the card to the fruit-container

// create the fruit-container section
const container = document.createElement("section");
container.classList.add("fruit-container");
document.body.append(container);

function refresh() {
  // Loop through the fruits array and create a card with content for each fruit object

  // Empties the container (removes all children)
  container.replaceChildren();

  // Repopulate the container with new fruits/
  for (let fruit of fruits) {
    // Create a card
    const card = document.createElement("div");
    card.classList.add("fruit-card");

    //Create a title and give it textContent
    const title = document.createElement("h2");
    title.classList.add("fruit-title");
    title.textContent = fruit.name;

    // Create an image, give it src/alt
    const image = document.createElement("img");
    image.src = `images/${fruit.name}.jpg`;
    image.classList.add("fruit-image");

    // Create p for info. set textContent
    const info = document.createElement("p");
    info.classList.add("fruit-info");
    info.textContent = `Color: ${fruit.color}, Origin: ${fruit.origin}`;

    // Create p for calories. set textContent
    const calories = document.createElement("p");
    calories.classList.add("fruit-calories");
    calories.textContent = `calories ${fruit.calories} per 100g`;

    // Create p for price. set textContent
    const price = document.createElement("p");
    price.classList.add("fruit-price");
    price.textContent = `Price: ${fruit.pricePerKg}kr/kg`;

    // Append all elements to the card
    card.append(title, image, info, calories, price);

    // Append the card to the container
    const sale = Math.random() > 0.5;

    if (sale) {
      price.classList.add("strikethrough");

      const salePrice = document.createElement("p");
      salePrice.classList.add("sale");
      salePrice.textContent = `Sale Price: ${fruit.pricePerKg / 2} kr/kg`;
      card.append(salePrice);
    }
    container.append(card);
  }
}

// Randomly decide if a fruit is on sale. ✅
// If it is on sale, strikethough the old price and create a new <p> with the sale price ✅

// What do we want to happen when the button is clicked?
