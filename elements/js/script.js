'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns); // Это массив, даже если есть всего 1 такой элемент

const circles = document.getElementsByClassName('circle');
console.log(circles);
// ОКОНЧАНИЕ БОЛЕЕ СТАРЫХ

// НАЧАЛО БОЛЕЕ НОВЫХ
const hearts = document.querySelectorAll('.heart'); //Работает с CSS селекторами
console.log(hearts);
// hearts.forEach(item => console.log(item));

const oneHeart = document.querySelector(".heart"); //('div');
console.log(oneHeart); // Первое сердечко

