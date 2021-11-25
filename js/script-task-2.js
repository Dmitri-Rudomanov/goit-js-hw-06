const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
    'Condiments',
];
const ingredientsList=document.querySelector("#ingredients")
ingredients.forEach(item => {
    const elem = document.createElement("li")
    elem.textContent = item
    elem.classList.add("item")
    ingredientsList.append(elem)
})

