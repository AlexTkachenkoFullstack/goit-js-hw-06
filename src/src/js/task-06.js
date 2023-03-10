// Напиши скрипт, который при потере фокуса на инпуте 
// (событие blur), проверяет его содержимое на правильное количество 
// введённых символов.


// Сколько символов должно быть в инпуте, указывается 
// в его атрибуте data - length.
// Если введено подходящее количество символов, 
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

const validationInputEl = document.querySelector("#validation-input")

const handleValidationInputElBlur = () => {
    const validationInputElValueLength = validationInputEl.value.length;
    if (validationInputElValueLength !== Number(validationInputEl.dataset.length)){
        validationInputEl.value = ''
       return  validationInputEl.classList.add('invalid');
    }
    
     validationInputEl.classList.remove('invalid')
    validationInputEl.classList.add('valid');
}

validationInputEl.addEventListener('blur', handleValidationInputElBlur)