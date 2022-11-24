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
                    let cardDisplay = new UserPosts(person.name, myPosts);
                    cardDisplay.renderCards();

                    
                });
            });
        
    });

let proekt = document.createElement('div');
proekt.classList.add('proekt');

class Modal {
    constructor(textPost) {
        this.editHendal = this.editHendal.bind(this);
        this.textPost = textPost;
        
    }

    renderPopup() {
        console.log(this.textPost, 'ok2');
        let popupBody = document.createElement('div');
        popupBody.classList.add('popup');


        let popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');

        let popupEdit = document.createElement('textarea');
        popupEdit.classList.add('popup-edit');
        popupEdit.textContent = this.textPost.textContent;
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

        // const currentThis = this;

        // popupConfirm.addEventListener('click', function() {
        //     console.log(currentThis, 'What?');
        //     currentThis.textPost.textContent = popupEdit.value;
        //     popupBody.remove();
        // });


        popupConfirm.addEventListener('click', () => this.editHendal(popupEdit, popupBody));
        

            popupCansel.addEventListener('click', function () {
            popupBody.remove();
        });

            popupBody.addEventListener('click', (e) => {
           
            if (e.target === popupContent) {
                popupBody.classList.toggle('remuve-edit');
                console.log(e.target);
                 console.log(popupBody);
            }
        });


        popupButtons.append(popupCansel, popupConfirm);
        popupContent.append(popupEdit, popupButtons);
        popupBody.append(popupContent);
        proekt.append(popupBody);

        
        // console.log(popupEdit, 'okEdit');
    }

    editHendal(popupEdit, popupBody) {
        console.log('ok3');
        this.textPost.textContent = popupEdit.value;
        popupBody.remove();
}
}





class Post {
    constructor(title) {
        
        this.title = title;

    }
    renderPost() {

        this.divPost = document.createElement('div');
        this.divPost.classList.add('div-title');


        this.textPost = document.createElement('p');
        this.textPost.classList.add('text-card');
        this.textPost.textContent = this.title;


        this.remuveButton = document.createElement('button');
        this.remuveButton.classList.add('remuve-button');
        this.remuveButton.textContent = 'X';
        
        this.remuvePost(this.remuveButton);

        // remuveButton.remuvePost();

        this.editButton = document.createElement('img');
        this.editButton.classList.add('edit-button');
        this.editButton.src = "./img/Без названия.png";
        this.editButton.alt = 'Картинка олівця';
        this.editButton.addEventListener('click', () => {

            this.editPost(this.textPost);
            console.log(this.textPost, 'ok');
        });


        this.divPost.append(this.textPost, this.remuveButton, this.editButton);
        // console.log(this.divPost);
        // console.log(this.textPost);
        return this.divPost;
    }
    remuvePost() {
        this.remuveButton.addEventListener('click', () => {
            this.divPost.classList.toggle('remuve');
        });

    }
    editPost() {
            const modalPop = new Modal(this.textPost);
        modalPop.renderPopup(this.textPost);
        console.log(this.textPost, 'ok1');
    }
}

class UserPosts extends Post {
    constructor(name, title) {
        super(title);
        this.title = title;
        this.name = name;
    }

    renderCards() {
        let card = document.createElement('div');
        card.classList.add('card');
        let nameTitle = document.createElement('h1');
        nameTitle.classList.add('name-title');
        nameTitle.textContent = this.name;
        card.append(nameTitle);

        this.title.forEach(elem => {
            let renderPosts = new Post(elem.title);

            card.append(renderPosts.renderPost());
        })


        // console.log(divPost);
        proekt.append(card);
        document.body.append(proekt);





    }


}