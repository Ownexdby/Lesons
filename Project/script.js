let buttonPlay = document.querySelector(".get-started__play-button");
// let blockText1 = document.querySelector('.block-text__text1');
// let blockText2 = document.querySelector('.block-text__text2');
// let blockText3 = document.querySelector('.block-text__text3');
// console.log(buttonPlay);



// buttonPlay.addEventListener('click', getTexstContent);
// function getTexstContent() {
//     if (blockText3.classList.contains('delet-text') && blockText2.classList.contains('delet-text')) {
//         blockText1.classList.toggle('delet-text');//+
//         blockText2.classList.toggle('delet-text'); //-
//         console.log('ok');
//     } else if (blockText1.classList.contains('delet-text') && blockText3.classList.contains('delet-text')) {
//         blockText2.classList.toggle('delet-text');//+
//         blockText3.classList.toggle('delet-text');//-
//     } else if (blockText1.classList.contains('delet-text') && blockText2.classList.contains('delet-text')) {
//         blockText3.classList.toggle('delet-text'); //+
//         blockText1.classList.toggle('delet-text');//-
//     }
// }
let blocktexts = document.querySelectorAll('.text');

let arrayTexts = [...blocktexts];

buttonPlay.addEventListener('click', swichContent);

function swichContent() {
    let carentIndex = 0;
    let indexOfActivText = arrayTexts.forEach((elem, index) => {
        // console.log(elem, 'Elem');
        if (elem.classList.contains('show-text')) {
            carentIndex = index;
            if (arrayTexts.length !== 1) {
                elem.classList.remove('show-text');
            }

            // console.log(carentIndex + 1);

        }

    });
    if (arrayTexts.length === 1) {


    } else if (carentIndex + 1 < arrayTexts.length) {

        arrayTexts[carentIndex + 1].classList.add('show-text');

    } else if (carentIndex + 1 === arrayTexts.length) {
        arrayTexts[0].classList.add('show-text');
    }



    // console.log(indexOfActivText);
}





// console.log(arrayTexts);
// ------------------------------------------------------______________________________________________


let buttonArrowPlus = document.querySelector('.button-arrow-plus');

let arrayBlogTexts = document.querySelectorAll('.blog-box-text');

let blogTexts = [...arrayBlogTexts];

buttonArrowPlus.addEventListener('click', showBlogText);

function showBlogText() {

    let carentIndex = 0;
    let indexOfActivText = blogTexts.forEach((elem, index) => {
        // console.log(elem, 'Elem');
        if (elem.classList.contains('show-blog-text')) {
            carentIndex = index;
            if (blogTexts.length !== 1) {
                elem.classList.remove('show-blog-text');
            }

            // console.log(carentIndex + 1);

        }

    });
    if (blogTexts.length === 1) {


    } else if (carentIndex + 1 < blogTexts.length) {

        blogTexts[carentIndex + 1].classList.add('show-blog-text');

    } else if (carentIndex + 1 === blogTexts.length) {
        blogTexts[0].classList.add('show-blog-text');
    }


}


let buttonMinus = document.querySelector('.button-arrow-minus');
// console.log(buttonMinus);


buttonMinus.addEventListener('click', showButtonMinus);

function showButtonMinus() {
    let carentIndex = 0;
    let indexOfActivText = blogTexts.forEach((elem, index) => {
        if (elem.classList.contains('show-blog-text')) {
            carentIndex = index;
            if (blogTexts.length !== 1) {
                elem.classList.remove('show-blog-text');
            }
        }

    });

    // if (blogTexts.length === 1) {


    // }
    // else
    if (carentIndex !== 0) {

        blogTexts[carentIndex - 1].classList.add('show-blog-text');

    } else if (carentIndex === 0) {
        blogTexts[blogTexts.length - 1].classList.add('show-blog-text');
    }

}
// console.log(blogTexts);




new Swiper('.image-slider', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// ------------------------------------------

let listitems = document.querySelectorAll('.list-items-text');
let markerShow = document.querySelectorAll('.arrow-list');

let wrapper = document.querySelector('.list-items');



   function showTabContent(i = 0) {
    listitems[i].classList.toggle('list-items-text-show');
    markerShow[i].classList.toggle('img-rotate');

}

wrapper.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('arrow-list')) {
        markerShow.forEach((item, i) => {
            if (target === item) {
                showTabContent(i);
            }
        })
    }
});
// --------------------------------------------------ПРИКЛАД!!!!!!!!!!!!!!!
// function hideTabContent() {
//     listitems.forEach(item => {
//         item.style.display = 'none';
//     });
//     markerShow.forEach(item => {
//         item.classList.remove('img-rotate');
//     })
// }
// function showTabContent(i = 0) {
//     listitems[i].style.display = 'flex';
//      markerShow[i].classList.add('img-rotate');
         
// }

// hideTabContent();
// showTabContent();

// wrapper.addEventListener('click', (event) => {
//     const target = event.target;
//     if (target && target.classList.contains('arrow-list')) {
//         markerShow.forEach((item, i) => {
//             if (target === item) {
//                 hideTabContent();
//                 showTabContent(i);
//             }
//         })
//     }
// });

// -----------------------------------------------------------------------


// listitems.forEach((elem) => {
//     wrapper.addEventListener('click', (event) => {
//         // console.dir(event.target);
//         if (event.target && event.target.tagName == 'IMG') {
//             elem[0].classList.toggle('list-items-text-show');
//         };
//     });
// });

// Без цикла!-------------!!!!!!!!!!!!!!!!!!!!!1
// markerShow[0].addEventListener('click', showArrowText);


// function showArrowText() {
//     listitems[0].classList.toggle('list-items-text-show');
//     markerShow[0].classList.toggle('img-rotate');
// }

// markerShow[1].addEventListener('click', showArrowText1);


// function showArrowText1() {
//     listitems[1].classList.toggle('list-items-text-show');
//     markerShow[1].classList.toggle('img-rotate');
// }

// markerShow[2].addEventListener('click', showArrowText2);


// function showArrowText2() {
//     listitems[2].classList.toggle('list-items-text-show');
//     markerShow[2].classList.toggle('img-rotate');
// }

// markerShow[3].addEventListener('click', showArrowText3);


// function showArrowText3() {
//     listitems[3].classList.toggle('list-items-text-show');
//     markerShow[3].classList.toggle('img-rotate');
// }


// markerShow[4].addEventListener('click', showArrowText4);


// function showArrowText4() {
//     listitems[4].classList.toggle('list-items-text-show');
//     markerShow[4].classList.toggle('img-rotate');
// }