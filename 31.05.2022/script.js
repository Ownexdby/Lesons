// let ul = document.createElement('ul');
// ul.classList.add('list');


// for (let i = 1; i <= 9; i++) {
//     let li = document.createElement('li');
//     li.classList.add('list_item');
//     li.innerHTML = `item ${i}`;
//     let buttonX = document.createElement('button');
//     buttonX.classList.add('button_cancel');
//     buttonX.textContent = 'X';
//     buttonX.addEventListener('click', function () {
//         li.remove();
//     });
//     li.prepend(buttonX);
//     ul.appendChild(li);
// }
// document.body.prepend(ul);
// length

// коли я ввів якусь інфор в імя , та перейшов на інший імпут або збоку натиснув ,
//  якщо імя менше 5 був зробити так щоб імпут засвітився червоним якщо все добре  то нічого не робити.

let informUser = {};

let name = document.querySelector('.name');
let nameError = document.createElement('p');
nameError.classList.add('p_name');
nameError.textContent = 'І`мя не може бути менше пяти, також поле не може бути пустим';
document.body.prepend(nameError);

let emeil = document.querySelector('.emeil');
let emeilError = document.createElement('p');
emeilError.classList.add('p_emeil');
emeilError.textContent = 'Поле не може бути пустим і мати не менше 10 символів';
document.body.prepend(emeilError);

let age = document.querySelector('.age');
let ageError = document.createElement('p');
ageError.classList.add('p_age');
ageError.textContent = 'Ведіть числом, та поле не може бути пустим';
document.body.prepend(ageError);




// name.addEventListener('focus', function () {
//     name.classList.add('focust_input');
// });

// name.addEventListener('blur', function () {
//     name.classList.remove('focust_input');
// })

name.addEventListener('blur', function () {
    if (name.value.length < 5) {
        name.classList.add('blur_input');
        nameError.classList.add('error');
    } else {
        name.classList.remove('blur_input');
        nameError.classList.remove('error');
        informUser.name = name.value;
    }
    
});

emeil.addEventListener('blur', function () {
    if (emeil.value.length < 10) {
        emeil.classList.add('blur_input');
        emeilError.classList.add('error');
    } else {
        emeil.classList.remove('blur_input');
        emeilError.classList.remove('error');
        informUser.emeil = emeil.value;
    }
    
});

age.addEventListener('blur', function () {
    if (isNaN(age.value) || age.value === '') {
        age.classList.add('blur_input');
        ageError.classList.add('error');
    } else {
        age.classList.remove('blur_input');
        ageError.classList.remove('error');
        informUser.age = age.value;
    }
    
});


let submit = document.querySelector('#submit');



submit.addEventListener('click', function (e) {
    e.preventDefault();
   if (name.value.length < 5 || name.value != '' || emeil.value.length < 10 || emeil.value != '' || isNaN(age.value) || age.value === '') {
       name.value = '';
       emeil.value = '';
       age.value = '';
        console.log(informUser);
   } else { 
       alert('Заповніть всі пол');
    }
})



// ці три інпути , коли я переходжу на інше місце має спрацьовувати перевірка якщо імя засвітиться
// червоним і під імпутом висвітиться текст помилка  і імя має бути не менше пяти букв,
// не має бути пустим

// з поштою така сама перевірка  не менше 10 символів , не має бути пустим
// і перевірка віку , не пусте поле та перевірка на числа . червоним світеться і текст введіть число.

// зробити логіку на відновлення інпута , зникають помилки та червоний колір також.
// якщо поля коректно введені то сабміт виводить в консоль обєкт з даними з усіх імпутів .


//прочитати локал  сторедж.  Імпути .