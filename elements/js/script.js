'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns); // Это массив, даже если есть всего 1 такой элемент

const circles = document.getElementsByClassName('circle');
console.log(circles);
// ОКОНЧАНИЕ БОЛЕЕ СТАРЫХ

// НАЧАЛО БОЛЕЕ НОВЫХ
const wrapper = document.querySelector('.wrapper');

const hearts = document.querySelectorAll('.heart'); //Работает с CSS селекторами
console.log(hearts);
// hearts.forEach(item => console.log(item));

const oneHeart = wrapper.querySelector(".heart"); //('div');
console.log(oneHeart); // Первое сердечко



box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

box.style.cssText = "background-color: blue; width: 500px";

// for(let i = 0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'purple';
// }

hearts.forEach(item => item.style.backgroundColor = 'purple');

const div = document.createElement('div');
// const text = document.createTextNode('I was here'); // OLD
div.classList.add('black');

document.querySelector('.wrapper').append(div);
// wrapper.appendChild(div); // OLD

// wrapper.prepend(div);

// hearts[0].before(div); //after(div)
// wrapper.insertBefore(div, hearts[1]); // OLD

// circles[0].remove();
// wrapper.removeChild(hearts[1]); // OLD

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // OLD

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');