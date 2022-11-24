// let userArray = [];
// let userForm = document.forms.userForm;
// console.log(userForm, 'userForm');
// console.log(userForm.elements.name.value);


// userForm.elements.submit.addEventListener('click', addUser);

// function addUser() {
//     let objUser = {
//         id: userArray.length + 1,
//         name: userForm.elements.name.value,
//         age: userForm.elements.age.value
//     };
    
//     userArray.push(objUser);

//     console.log(userArray);
// }


let usersArray = [
    {
        id:1,
        name: "Jon",
        age: 32
    },
     {
         id: 2,
         name: "Pen",
         age: 35
    },
      {
          id: 3,
          name: "Bob",
          age: 25
      }
]

let nameArray = usersArray.map(item => item.name);
console.log(nameArray.toString());

let sumAge = usersArray.reduce((sum, current) => sum + current.age, 0);
let mediumAge = sumAge / usersArray.length;
console.log(+mediumAge.toFixed(2));
