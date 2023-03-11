// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const fontSizeControlEl = document.querySelector('#font-size-control');
const inputTextEl=document.querySelector('#text')
const handleFontSizeControlElInput = (event) => {
    event.preventDefault();
    const inputFontSizeValue = Number(fontSizeControlEl.value);
    console.log(inputFontSizeValue);
    
    inputTextEl.style.fontSize = `${inputFontSizeValue}px`; 
    // АБО ДРУГИЙ ВАРІАНТ 
    // inputTextEl.style.fontSize = inputFontSizeValue + 'px'; 
}
    


fontSizeControlEl.addEventListener('input', handleFontSizeControlElInput)