// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login - form должна быть 
// по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert 
// с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
//  собери значения полей в обьект, где имя поля будет 
//  именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти 
// значения полей формы методом reset.

const loginFormEl = document.querySelector('.login-form');
console.log(loginFormEl.elements)
const handleLoginFormElSubmit = (event) => {
    event.preventDefault();
    if (loginFormEl.elements.email.value === '' || loginFormEl.elements.password.value === '') {
   return alert('Негодяй, заполни все поля!!!')
    }
    const formWithDataToSend = {};
    formWithDataToSend.email = loginFormEl.elements.email.value;
    formWithDataToSend.password = loginFormEl.elements.password.value;
    console.log(formWithDataToSend)
    loginFormEl.reset();
}

loginFormEl.addEventListener('submit', handleLoginFormElSubmit)