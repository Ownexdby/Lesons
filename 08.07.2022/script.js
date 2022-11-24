// зробити валыдацыю в середины ымпута були тыльки числа при фокусі
// let valedationInput = document.querySelector('.valedation');

// valedationInput.addEventListener('focus', function () {
//     valedationInput.classList.add('color_green');
// })
// valedationInput.addEventListener('blur', function () {
    
//     if (Number(valedationInput.value)) {
//         valedationInput.classList.remove('color_green');
//         valedationInput.classList.remove('color_red');
//         console.log('ok');
//         let deleteText = document.querySelector('.text');
        
//         if (deleteText !== null) {
//             deleteText.remove();
//         }
//     } else {
//         let deleteText = document.querySelector('.text');
//         if (deleteText !== null) {
//             deleteText.remove();
//         }
//         valedationInput.classList.add('color_red');
//         console.log('not oK!');
//         let valedationInputInformText = document.createElement('p');
//         valedationInputInformText.classList.add('text');
//         valedationInputInformText.textContent = 'Введіть цифри!';
//         valedationInput.after(valedationInputInformText);
//     }
// })


// let buttonA = document.querySelector('#1');
// let buttonB = document.querySelector('#2');

let buttons = document.querySelectorAll('button');
console.log(buttons);
let arrayButons = [...buttons];
console.log(arrayButons);


document.addEventListener('keypress', function (e) {
    console.log(e);
    arrayButons.forEach(function (buton) {
        buton.classList.remove('red');
        if (buton.textContent.toLowerCase() === e.key) {
           buton.classList.add('red');
        }
       
    })
})

// Макет

// бай аплайн коул контекст зіс.
//  методи в середині обєктів
//  створення методу в обєктів