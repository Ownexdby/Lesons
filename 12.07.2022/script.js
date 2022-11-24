// let enimal ={
//     name: 'dog',
//     saund: 'bark',
//     age: 5,
//     showEnimalSaund: function () {
//         console.log(`The ${this.name} makes saund ${this.saund}`);
//     }
// }

// // enimal.showEnimalSaund();



// // the  __ makes saund __


// let cat = {
//     name: 'Cat',
//     saund: 'Mau',
//     age: 7
// }

// enimal.showEnimalSaund.call(cat);

// let mauci = {
//     name: 'Maus',
//     saund: 'pee',
//     age: 1
// }
// enimal.showEnimalSaund.call(mauci);

// console.log(cat);
// cat.showEnimalSaund();
////////////////////////////
// let mauci = {
//     name: 'Maus',
//     saund: 'pee',
//     age: 1
// }
// let mausSaund = enimal.showEnimalSaund.bind(mauci);

// console.log(mausSaund);
// mausSaund();

// let enimal2 = {
//     name: 'dog',
//     saund: 'bark',
//     age: 5,
//     showEnimalSaund: function (color, hasfuar) {
//         let forText = '';
//         if (hasfuar === true) {
//             forText = 'has fuar';
//         } else {
//             forText = 'dont have fuar';
//         }
//         console.log(`The ${this.name} makes saund ${this.saund} . Enimal is ${color} and ${forText}`);
//     }
// }

// let mauci = {
//     name: 'Maus',
//     saund: 'pee',
//     age: 1
// }
// // enimal2.showEnimalSaund('red', true);
// // enimal2.showEnimalSaund.apply(mauci, ['blue', true]); // тільки 2 парамитра ( обєкт і масив);
// enimal2.showEnimalSaund.call(mauci, 'red', true);// скільки хочеш парамитрів ...
// let saundMaus =  enimal2.showEnimalSaund.bind(mauci, 'yellow', false);
// saundMaus();

// фигма стилі макет 2 та третій блоки

// class в джава скрипті що це таке , як створювати , конструктор в класах.
// як створювати методи в класах та наслідування класів .
// деструктуризація масивів та обєктів.

// reakt// библіотека
// angular// фреймворк
// vueJS// фреймворк


// збірка проекту адаптивна верстка та препроцесори.



// ClASSSSSSS

// class Animal {
//     static type = 'Animal'
//     constructor(options) {
//         this.name = options.name,
//         this.age = options.age,
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am animal');
//     }
// }

// const animal = new Animal({
//     name: "Animal",
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal{

//     static type = 'Cat';

//     constructor(options) {
//         super(options);
//         this.color = options.color;
//     }

//     voice() {
//         super.voice()
//         console.log('I am Cat')
//     }

//     get ageInfo() {
//         return this.age * 7;
//     }

//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
//  }

// const cat = new Cat({
//     name: "Cat",
//         age: 7,
//     hasTail: true,
//         color: 'black'
// })


// Practik Class


class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }
    hide() {
        this.$el.style.display = 'none';
    }
    show() {
        this.$el.style.display = 'block';
    }
}

class Box extends Component {

    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
});
const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue'
});

class Cirkl extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%';
    }
}

const c = new Cirkl({
    selector: '#cirkle',
    size: 90,
    color: 'green'
})