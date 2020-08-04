'use strict';

let num = 20;

function showFirstMessage(text){
    console.log(text);
     num = 10;
}

showFirstMessage('Hello world!!!');

function calc(a,b,c){
    return +(a+b+c);
}

console.log(calc(1,'+',2));

let logger = function(){
  console.log("Hello!");  
};

logger();
const adder = function(a,b){
    return a+b;
};

let calc1 = (a,b,c) => c(a,b); 
return calc1(1,2,adder);