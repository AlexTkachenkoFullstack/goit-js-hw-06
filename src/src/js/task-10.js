
// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире 
// и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает 
// содержимое div#boxes, тем самым удаляя все созданные элементы.

const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector('#boxes');
const inputNumberEl = controlsEl.firstElementChild;
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (event) => {
 const inputNumberElValue = Number(inputNumberEl.value);
  let arreyOfDiv = [];
   let width = 30;
  let height = 30;
  for (let i = 1; i <= inputNumberElValue; i += 1){
    const divEl = document.createElement('div');
     
    divEl.style.width = `${width}px`
    divEl.style.height = `${height}px`
    divEl.style.backgroundColor = getRandomHexColor();
    arreyOfDiv.push(divEl)
    width += 10;
    height += 10;
  }

  buttonCreateEl.addEventListener("click", () => {
    inputNumberEl.value= '';
    
    boxesEl.append(...arreyOfDiv)
    arreyOfDiv = []
  })
  }

inputNumberEl.addEventListener("blur", createBoxes);
buttonDestroyEl.addEventListener("click", function destroyBoxes() {
  boxesEl.innerHTML = ''
})

