// let obj = {
//     name: 'Dmytro',
//     lastName: 'Soroka',
//     age: 29
// };
// Object.prototype.myMeset = function () { console.log("myPrototype")};
// console.log(obj);

// obj.isMarried = true;

// console.log(obj);

// let test = "Hello";
// obj[test] = test;
// console.log(obj);

// console.log(obj.name);

// for (let key in obj) {
//     if (key === "bum") {
//         console.log("ok!");
//     }
        
// }

// console.log(Object.hasOwn(obj, "name")); // Перевірка ключів обєкта чи є, виводить тру або фолс

// let objValues = Object.values(obj); // Бере значення обєкта і вертає новий масив
// console.log(objValues);

// let objKeys = Object.keys(obj); повертає новий масив з ключів обєкта

// console.log(objKeys);

// let objEntrees = Object.entries(obj); // Повертає з обєкта  масив масивів.
// console.log(objEntrees);


// Практика з обєктами


// Написати функцію яка запросить у користувача дані,
//     перше це назва товару
//     друге його ціна

// Наступне внести дані в обєкт який я отримаю від користувача і показати значення в консоль.

// function getInfoFromUser() {
//     let info = prompt(`Найменування товару`);
//     let price = prompt(`Вартість товару?`);
//     let objInfoUser = {
//         [info]: price
//     };
//     console.log(objInfoUser);
// }
// getInfoFromUser();


//функція рахує середнє значення оцінок цих студентів.



// let studets = [
//     {
//         name: "Kola",
//         score: 1
//     },
//     {
//         name: "Ola",
//         score: 2
//     },
//     {
//         name: "Sergei",
//         score: 5
//     },
//     {
//         name: "Jullia",
//         score: 3
//     }
// ];


    
// function getAverageScore(arrey) { //
//     let scores = 0;
    
// //     arrey.forEach(function (element) {
// //         scores += element.score;
        
// //     })
// //     let infoScores = scores / arrey.length;
// //     return infoScores;
// // }
// // console.log(getAverageScore(studets));

// //

// function getAverageScore(arrey) {
//     let scores = arrey.reduce(function (total, current) {
        
//         return total + current.score;
//     }, 0);
//     return scores/ arrey.length;
// }
// console.log(getAverageScore(studets));

// Через мап зробити в дома

// function getAverageScore(arrey) {
//     let scores = 0;
//         arrey.map(function (element) {
//         scores += element.score;
//         });
//     let totalScores = scores / arrey.length;
//     return totalScores;
// }
// console.log(getAverageScore(studets));


// Приходить обєкт , там є назва послуги (ключ), зправа є ціна у вигляді цифри плюс текст (значення).
// Функція буде приймати цей обєкт яка приймає цей обєкт і рахує суму яку людина витрачає на ці послуги(10 раз),
// З допомогою метод масиву веліус.

//   let services = {
//     cleaning: ' 10 eur',
//     shopping: '100 usd',
//     washing: ' 34 usd',
//     food: '25 usd',
//     ticket: '100usd'
// };

// function getTotalExpenses(obj) {
//     let array = Object.values(obj);
//     let arrayFilter = array.map(function (element) {
//        let trimStrW = element.trim();
//         return parseFloat(trimStrW);
        
//     });
//     // console.log(arrayFilter);
//     let totolExpenses = arrayFilter.reduce((total, curent) => total + curent, 0);
//     return totolExpenses;
// }
// console.log(getTotalExpenses(services));


//  Написати функцію яка буде робити наступне , запитувати у юзера назву послуги та її ціну окремо.
//  ціна цифрами
//  потрібно додати ці дані в обєкт і після цього запросити знову запустити ці пронти яби вона знову ввела ці дані в обєкт
//  можна вносити послуги та ціну доки не я натисну відміна ( То вивсети обєкт з послугами і якщо назва була введена
//  а ціна ні дані не зараховувати в загальний обєкт).
//  після цього потрібно порахувати загальну суму послуг і повернути цю суму з функції, та повернути окремо алертом суму.
//  і повернути дані з функції.

    
function getInformFromUser() {
        
        let titl = prompt(`Найменування товару`);
        let price = prompt(`Вартість в товару`);
        let inFormUser = {};
        
       
            while (titl != '' && price != '') {
                inFormUser[titl] = price;
                titl = prompt(`Найменування товару`);
                price = prompt(`Вартість в товару`);
            }
           

        
         console.log(inFormUser);
}
    getInformFromUser();



//  Повторити як створювати дом елемент.