// let text = document.querySelector('#text');
// let button = document.querySelector('#button');
// let list = document.createElement('ul');
// let taskList = [];
// list.classList.add('list');
// let lsitFromLocalStorage = JSON.parse(localStorage.getItem('taskList'));
// console.log(lsitFromLocalStorage);
// if (lsitFromLocalStorage !== null) {
//     lsitFromLocalStorage.forEach(function (element) {
//         createCard(element);
//     });
// }

// function createCard(taskName) {
//     let li = document.createElement('li');
//     let title = document.createElement('h2');
//     let task = document.createElement('p');
//     let deleteBtn = document.createElement('button');
//     title.classList.add('card_title');
//     task.classList.add('card_task');
//     li.classList.add('card');
//     deleteBtn.classList.add('btn');
//     title.textContent = 'Назва завдання : ';
//     deleteBtn.textContent = 'X';

//     deleteBtn.addEventListener('click', function () {
//         let getActualList = JSON.parse(localStorage.getItem('taskList'));
//         let filterList = getActualList.filter(function (element) {
//             return element !== taskName;
//         });
//         localStorage.setItem('taskList', JSON.stringify(filterList));
//         li.remove();
//     });

//     task.textContent = taskName;
//     li.append(title, task, deleteBtn);
//     list.append(li);
//     taskList.push(taskName);
//     localStorage.setItem('taskList', JSON.stringify(taskList));

// }

// button.addEventListener('click', () => {
//     createCard(text.value);

//     text.value = '';
// });



// document.body.append(list);

// console.log(taskList);


// localStorage.removeItem('taskList');

// і якщо видаляю картку то її не має бути при перезапуску

// а якщо додаєш вона залишається
// стилізувати картку текст центер, кнопка зправа зверху Х.
// має бути врядок не більше  4 картки (ширина 150 px , і висота 150 px) (flex (justify-content, align-items, flex-wrap), grid (grid-template-columns))
// http requests and fetch requests (post, get methods)


// const listForLocaleStorage = [{id: 1, text: 'text'}, {id: 2, text: 'text'}, {id: 3, text: 'text'}]
// .push({
//     id: listForLocaleStorage.length + 1,
//     text: ''
// })
// listForLocaleStorage.length + 1


// let text = document.querySelector('#text');
// let button = document.querySelector('#button');
// let list = document.createElement('ul');
// let taskList = [];
// list.classList.add('list');
// let lsitFromLocalStorage = JSON.parse(localStorage.getItem('taskList'));
// console.log(lsitFromLocalStorage);
// if (lsitFromLocalStorage !== null) {
//     lsitFromLocalStorage.forEach(function (element) {
//         // let varib = 'text'
//         createCard(element.text); //Автоматично робить значення пілся крапки строкою. якщо в [] мушу написати змінну яка має містити також строку.
//         taskList = lsitFromLocalStorage;
//     });
// }

// function createCard(taskName) {
//     let li = document.createElement('li');
//     let title = document.createElement('h2');
//     let task = document.createElement('p');
//     let deleteBtn = document.createElement('button');

//     title.classList.add('card_title');
//     task.classList.add('card_task');
//     li.classList.add('card');
//     deleteBtn.classList.add('btn');
//     title.textContent = 'Назва завдання : ';
//     deleteBtn.textContent = 'X';

//     deleteBtn.addEventListener('click', function () {
//         let getActualList = JSON.parse(localStorage.getItem('taskList'));
//         let filterList = getActualList.filter(function (element) {
//             return element.text !== taskName;
//         });
//         localStorage.setItem('taskList', JSON.stringify(filterList));
//         li.remove();
//     });

//     task.textContent = taskName;
//     li.append(title, task, deleteBtn);
//     list.append(li);
//     // taskList.push(taskName);
//     // let newId = 0;
//     // if (lsitFromLocalStorage === null) {
//     //     newId = 1;
//     // } else {
//     //     newId = lsitFromLocalStorage.length + 1;
//     // }



// }

// button.addEventListener('click', () => {
//     createCard(text.value);
//     let listObj = {};
//     // listObj.id = lsitFromLocalStorage? lsitFromLocalStorage.length + 1 : 1;
//     listObj.id = taskList.length + 1;
//     listObj.text = text.value;
//     taskList.push(listObj);
//     localStorage.setItem('taskList', JSON.stringify(taskList));
//     text.value = '';
// });



// document.body.append(list);

// console.log(taskList);


// //


let cars = [{
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
}, {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 6
},
{
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
},
{
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 7
},
{
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 4
}, {
    "color": "yellow",
    "type": "station wagon",
    "registration": new Date('2018-03-02'),
    "capacity": 5
}, {    
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 4
}
];


let ul = document.createElement('ul');
ul.classList.add('list');

function carsFilter(element) {
    element.forEach(function (element) {
        if (element.capacity === 5) {
        let li = document.createElement('li');
        li.classList.add('card');
        let colorText = document.createElement('p');
            colorText.classList.add('titlle');
            let typeText = document.createElement('p');
            typeText.classList.add('tittle');
            

            colorText.textContent = `Колір: ${element.color}`;
            typeText.textContent = `Тип: ${element.type}`;
            // elemArrey.toString()
            // li.insertAdjacentText('afterbegin', elemArrey);
    li.append(colorText, typeText);
        ul.append(li);
}
    });
}
document.body.append(ul);
carsFilter(cars);

// `${element}, ${element.type}, ${element.registration}, ${element.capacity}`

// cars.map(function (item) {
//     if (item.capacity === 5) {
//         console.log(item);
//     };
// });
// console.log(cars);