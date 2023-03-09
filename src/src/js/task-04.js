const counterValue = document.querySelector("#value")
let currentCounterValue = 0;


const decrementBtn = document.querySelector('button[data-action="decrement"]')
console.log(decrementBtn)
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn)

const handleDecrementBtnClick = () => {
    currentCounterValue-=1
   counterValue.textContent = currentCounterValue;
}
const handleIncrementBtnClick = () => {
     currentCounterValue+=1
    counterValue.textContent = currentCounterValue;
}

decrementBtn.addEventListener("click", handleDecrementBtnClick)
incrementBtn.addEventListener("click", handleIncrementBtnClick)


