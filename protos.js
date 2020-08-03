"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const jonh = {
    health: 100
};

//jonh.__proto__ = soldier; // old variant

Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();

const alex = Object.create(soldier);