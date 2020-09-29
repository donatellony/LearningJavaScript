'use strict';

function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return this.a+this.b;
    }
    console.log(sum());
}
showThis();

const obj = {
    a:20,
    b:15,
    sum: function(){
        console.log(this);
    }
};

// 1) this = window, but if strict is used -> undefined
// 2) Methods of the object use this as in Java
// 3) Functions inside object functions can't use this

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let Ivan = new User('Ivan', 23);

// 4) this is a new exemplar of the object in constructors and classes

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num){
    return this*num;
}

const double = count.bind(2);
console.log(double(3));

//=====================================

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
    console.log(this); //html-button code (event-target)
    //this code would not work with lambda instead of function()
    //because lambda does not have own context of this
    //this would be undefined

    //we can 'fix' it by using event object
    //event.target.style.backgroundColor = 'red';
    //would work
}); 

const objc = {
    num: 5,
    sayNumber: function(){
        const say = ()=>{
            console.log(this.num);
        };
        //lambda has no own context, it takes it's parent one
        say();
    }
};

objc.sayNumber();

const triple = a => a*3;