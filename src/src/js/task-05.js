const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");


const handleNameInputElInput = () => {
    if (event.currentTarget.value === "") {
     return nameOutputEl.textContent = "Anonymous";
    }
    nameOutputEl.textContent = event.currentTarget.value;
   
}

nameInputEl.addEventListener("input", handleNameInputElInput)

console.log(nameOutputEl.textContent)