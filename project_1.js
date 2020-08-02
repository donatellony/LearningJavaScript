"use strict";

let numberOfFilms;
function start(){
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        let a;
        let b;
        do{
        a = prompt('Один из последних просмотренных фильмов?','');
        b = prompt('На сколько оцените его?','');
        }
        while(a.length>50 || a.length===0 || 
            b.length>50 || b.length===0 || a==null || b == null);
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

// console.log(personalMovieDB);

function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    }
    else{
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

let showMyDb = function(privat){
    if(!privat){
     console.log(personalMovieDB);
    }
};

function writeYourGenres(){
    for(let i = 0; i<3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
    }
}

writeYourGenres();
showMyDb(personalMovieDB.privat);