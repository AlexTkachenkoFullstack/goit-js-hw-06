const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// 1.Создаст отдельный элемент <li>. 
// Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
// 3.Добавит элементу класс item.
//4. После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredientsListEl = document.querySelector("#ingredients");
console.log(ingredientsListEl);
const ingredientsItemArrey = ingredients.map((ingredient) => {
  const ingredienItem = document.createElement("li");
  ingredienItem.classList = "item";
  ingredienItem.textContent = ingredient
  return ingredienItem
})
ingredientsListEl.append(...ingredientsItemArrey)
console.log(ingredientsListEl)