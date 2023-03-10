// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color 
//   и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color")

const hendleBodyElClick = () => {
  const colorName = getRandomHexColor();
  bodyEl.style.backgroundColor = colorName;
  colorEl.textContent = colorName;
}

changeColorBtn.addEventListener("click", hendleBodyElClick)