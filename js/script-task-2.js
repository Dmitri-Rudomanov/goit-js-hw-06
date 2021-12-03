const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients")
let IngredientsArr=[]
ingredients.forEach(item => {
    const elem = document.createElement("li")
    elem.textContent = item
    elem.classList.add("item")
    IngredientsArr.push(elem)
})
ingredientsList.append(...IngredientsArr)
