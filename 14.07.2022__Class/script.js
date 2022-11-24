// class Animal {
//     constructor(name, age, saund) {
//         this.name = name,
//             this.age = age,
//             this.saund = saund
//     }
//      getName() {
//          console.log(`The name this animal ${this.name}!`);
//          console.log(this.name, this.age, this.saund);
//     }
// }

// let dog = new Animal('Dog', 8, 'bark');

// dog.getName();

// class AnimalWhithKopyta extends Animal {
//     constructor(name, age, saund, hooves) {
//         super(name, age, saund);
//         this.hooves = hooves;
//     }
//     getName() {
//         super.getName();
//         console.log(this.hooves ? `have hooves` : `dont have hooves`);
//     }
// }

// let cow = new AnimalWhithKopyta('Cow', 18, 'mu', false);

// cow.getName();



//написати клас Card (){
// renderCard // відмальовка(прийматиме параметри тайтел текст хрестик та кнопка Едіт)
// ремувкард  - видалення карт(при натисканні на кнопку картка видаляється)
// едіткард  - редагування кард( при натисканні має випасти вікно модальне)
// } ///////////////ЗРОБИТИИИИИИИИИИИИИИИИИИИИИИИ!!!!!!!!!!!!!!!!!!!!!!!

//Принципи ООП ДЗ
//Припроцесор SCSS and Sass

//Методи текста
// let textHello = 'Hi , my name is. And you?';
// let priseText = 'The price of prodact is $40';

// let arrayTextHello = textHello.split('.');

// let arrayPriceText = priseText.split(' ');

// let lengthPrice = arrayPriceText.length;
// console.log(arrayPriceText);
// console.log(arrayPriceText[lengthPrice - 1]);

//Розібрати методи масивів які не розбирали :слайс сплайс індекс оф , реверс, сорт.

//------------------------------------DZ

const BASE_URL = "https://jsonplaceholder.typicode.com/";


fetch(BASE_URL + 'users')
    .then(response => response.json())
    .then(users => {
        fetch(BASE_URL + 'posts')
            .then(response => response.json())
            .then(usersPosts => {
                users.forEach(person => {
                    let myPosts = usersPosts.filter(post => post.userId === person.id);
                    
                    // console.log(person.name = new PostUser(person.name, myPosts));
                    let cardDisplay = new PostUser(person.name, myPosts);
                    cardDisplay.renderCard();
                });
                
                });
    });



                   let proekt = document.createElement('div');
                   proekt.classList.add('proekt');
           class PostUser {
                        constructor(name, title) {
                            this.name = name
                                this.title = title

               }
               
               renderCard() {
                   
                   let card = document.createElement('div');
                   card.classList.add('card');
                   let nameTitle = document.createElement('h1');
                   nameTitle.classList.add('name-title');
                   nameTitle.textContent = this.name;
                   card.append(nameTitle);
                

                   this.title.forEach(elem => {
                       let spanTitle = document.createElement('div');
                       let textCard = document.createElement('p');
                       let remuveButton = document.createElement('button');
                       let editButton = document.createElement('img');
                       
                       textCard.classList.add('text-card');
                       editButton.classList.add('edit-button');
                       spanTitle.classList.add('span-title');
                       remuveButton.classList.add('remuve-button');
                       
                    //    spanTitle.textContent = elem.title;  
                       textCard.textContent = elem.title;
                       
                       remuveButton.textContent = 'X';
                       editButton.src = "./img/Без названия.png";
                       editButton.alt = 'Картинка олівця';


                    //    
                       remuveButton.addEventListener('click', function () {
                           spanTitle.classList.toggle('remuve');
                          
                       });
                    //    Popup
                       
                       
                       
                       
//
                       editButton.addEventListener('click', );

                       
                       
                    //    console.log(popupBody);
                       spanTitle.append(textCard);
                       spanTitle.append(remuveButton, editButton);

                       

                       card.append(spanTitle);
                    //    console.log(spanTitle);
                        // let remuveButtons = document.querySelectorAll('remuve-button');
                        // let textContents = document.querySelectorAll('span-title');
                       
                       
                   })
                   proekt.append(card);
                   document.body.append(proekt);
               }
               editCard() {
                   
                   let popupBody = document.createElement('div');
                   
                   let popupContent = document.createElement('div');
                   let popupEdit = document.createElement('textarea');
                   popupBody.classList.add('popup');
                   popupContent.classList.add('popup-content');

                   
                   popupEdit.classList.add('popup-edit');
                   popupEdit.value = this.title;
                   popupEdit.rows = '4';
                   popupEdit.cols = '40';

                   let popupButtons = document.createElement('div');
                   popupButtons.classList.add('popup-buttons');

                   let popupConfirm = document.createElement('button');
                   popupConfirm.classList.add('popup-confirm');
                   popupConfirm.textContent = 'Confirm';
                   let popupCansel = document.createElement('button');
                   popupCansel.classList.add('popup-cansel');
                   popupCansel.textContent = 'Cansel'; 
                   
                   
                   
                   popupConfirm.addEventListener('click', function () {
                    textCard.textContent = popupEdit.value;
                    popupBody.classList.toggle('remuve-edit');
                        });



                      
                    popupCansel.addEventListener('click', function () {
                        popupBody.classList.toggle('remuve-edit');
                    });
                   
                    popupBody.addEventListener('click', (e) => {
                           console.log(e.target); 
                           if (e.target === popupContent) {
                               popupBody.classList.toggle('remuve-edit');
                           }
                    });
                   
                   function togglePopap() {
                       popupBody.classList.toggle('remuve-edit');
                   }
                   
                   popupButtons.append(popupCansel, popupConfirm);
                   popupContent.append(popupEdit, popupButtons);
                   popupBody.append(popupContent);
               }
               
                
               
            
}


         

//         let dog = new PostUser(myPosts);

// console.log(document.body);