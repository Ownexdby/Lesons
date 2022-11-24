// function sayHello(){
//     alert("Hello")
// }
// let  button = document.querySelector("button")
// console.log(button)
// console.log(button)
// button.onclick = sayHello
// button.onclick = function (){alert("buy")}
// button.('click', sayHello)// добавлять событие
//button.addEventListener('click', sayHello)
//button.removeEventListener('click', sayHello)  // удалять событие

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    event.target.value++;

    if (event.target.value == 1) {
      event.target.style.backgroundColor = "blue";
    } else if (event.target.value == 2) {
      event.target.style.backgroundColor = "green";
    } else if (event.target.value == 3) {
      event.target.style.backgroundColor = "yellow";
    } else {
      event.target.style.backgroundColor = "white";
      event.target.value = 0;
    }
  }
});

// Напишите функцию, которая тоглит класс. Ф-ия должна принимать два аргумента: элемент и класс, который нужно добавить/убрать из набора классов. Решить нужно без использования classList. Ф-ия должна работать со свойством className элемента.

let span = document.querySelector("span");
span.addEventListener("click", (event) => {
  event.target = toggle(span, "two");
});

function toggle(element, klass) {
  let classes = element.className.match(/\S+/g) || [],
    index = classes.indexOf(klass);

  index >= 0 ? classes.splice(index, 1) : classes.push(klass);
  element.className = classes.join(" ");
}
