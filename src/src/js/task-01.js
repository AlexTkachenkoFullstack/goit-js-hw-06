// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// 1.Посчитает и выведет в консоль количество категорий 
// в ul#categories, то есть элементов li.item.
const categoriesEl = document.querySelector("#categories");
const childrenArrey=categoriesEl.children
console.log(`Number of categories:${childrenArrey.length}`)

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).
// Для выполнения этой задачи нужно использовать метод forEach()
// и свойства навигации по DOM.
// const nameTitle = categoriesEl.children.forEach(child = {
//     return
// })
const arreyItemsEl = document.querySelectorAll(".item")

arreyItemsEl.forEach(item => {
    const itemName = item.firstElementChild.textContent;
    const itemListLength = item.lastElementChild.children.length;
    return console.log(`Category: ${itemName}
Elements: ${itemListLength}`)
})