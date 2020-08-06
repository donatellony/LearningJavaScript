'use strict';

window.addEventListener('DOMContentLoaded',()=>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart',(e)=>{
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
        //touches
        //targetTouches
        //changedTouches
        //async, defer
    });
});