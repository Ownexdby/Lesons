let buttonPlay = document.querySelector(".play");


let blocktexts = document.querySelectorAll('.text');

let arrayTexts = [...blocktexts];

let getVectors = document.querySelectorAll('.get_vectors');



buttonPlay.addEventListener('click', swichContent);

function swichContent() {

    let carentIndex = 0;
     arrayTexts.forEach((elem, index) => {
        // console.log(elem, 'Elem');
        if (elem.classList.contains('show-text')) {
            carentIndex = index;
            if (arrayTexts.length !== 1) {
                elem.classList.remove('show-text');
                getVectors[carentIndex].classList.remove('blue_vector');
            }

        }
         
     });
    
    if (arrayTexts.length === 1) {

    } else if (carentIndex + 1 < arrayTexts.length) {

        arrayTexts[carentIndex + 1].classList.add('show-text');
        getVectors[carentIndex + 1].classList.add('blue_vector');

    } else if (carentIndex + 1 === arrayTexts.length) {
        arrayTexts[0].classList.add('show-text');
        getVectors[0].classList.add('blue_vector');
    }

}

// BBBBBBBBBBBLLLLLLLLLLLLLLLOOOOOOOOOOOOOOGGGGGGGGGGGGGGGGGGGGG

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
