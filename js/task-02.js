// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ingredientList = document.querySelector('#ingredients')
// let ingredientItem

// ingredients.forEach(ingredient => {
//   ingredientList.append(ingredientItem = document.createElement('li'))
//   ingredientItem.textContent = ingredient
// })

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");

  ingredientItem.textContent = ingredient;

  return ingredientItem;
});

ingredientsList.append(...ingredientElements);
