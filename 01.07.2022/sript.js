const BASE_URL = "https://jsonplaceholder.typicode.com/";

// fetch(BASE_URL + 'users')
//     .then(response => response.json())
//     .then(users => {
//         // console.log(users);
//         // let arrayIsMarried = [];
//         let getIsMarried = users.map(function (element, index) {
//             if (index % 2 === 0) {
//                 element.isMarried = true;
//                 return element;
//             } else {
//                 element.isMarried = false;
//                 return element;
                
//             }

//             // console.log();
//         })
        //     users.forEach(function (element, index) {
        //         if (index % 2 === 0) {
        //             element.isMarried = true;
        //             arrayIsMarried.push(element);
        //         } else {
        //             element.isMarried = false;
        //             arrayIsMarried.push(element);

        //         }

        //         // console.log();
        //     })


        //     console.log(arrayIsMarried);
        
        // let filterIsUsers = getIsMarried.filter(function (elem) {
        //    return elem.isMarried === true;
        // });
    //     let filterIsUsers = getIsMarried.filter(eleme => eleme.isMarried === true);
    //     console.log(filterIsUsers);


    //     let sumLng = filterIsUsers.reduce(function (carentuser, nextuser) {
    //       return  carentuser += parseFloat(nextuser.address.geo.lng);
    //     }, 0);
    //     console.log(sumLng);
    // })
// isMarried
    // повторити минуле
    // вибрати макет який зкине Сергій

    // 05/07/2022

fetch(BASE_URL + 'users')
    .then(response => response.json())
    .then(users => { 
  fetch(BASE_URL + 'todos')
         .then(response => response.json())
      .then(todos => {
          let arrayUsersInform = [];
                //  console.log(users, todos);
                 users.forEach(function (user) {
                     let filterTodosUser = todos.filter(function (todo) {
                        return user.id === todo.userId
                     })
                     let filterCompletedUserTodos = filterTodosUser.filter(function (comletedTodos) {
                         return comletedTodos.completed === true;
                     });
                     let filterUnCompletedUserTodos = filterTodosUser.filter(function (unComletedTodos) {
                         return unComletedTodos.completed === false;
                     })
                    //  console.log(filterCompletedUserTodos);
                     arrayUsersInform.push({
                         name: user.name,
                         todos: filterTodosUser.length,
                         completed: filterCompletedUserTodos.length,
                         unCompleted: filterUnCompletedUserTodos.length
                     })
                     
                 })
          console.log(arrayUsersInform);
             })
    })

// в кожному обєкті добавилися комплитет  фолс або тру  кількість цих комплітедів 