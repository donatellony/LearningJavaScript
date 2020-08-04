"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function(){
        this.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
        }
    },

    rememberMyFilms: function(){
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
    },

    detectPersonalLevel: function(){
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
    },

    showMyDb: function(){
        if(!this.privat){
         console.log(personalMovieDB);
        }
    },

    writeYourGenres: function(){
        //for(let i = 0; i<3; i++){
            let genre;
            do{
            genre = prompt(`Введите Ваши любимые жанры через запятую`, '');
            }
            while(genre == null || genre.length == 0 || genre == '');
            this.genres = genre.toLowerCase().split(',');
            this.genres.sort();
        //}


        this.genres.forEach((e,i)=>console.log(`Любимый жанр #${i+1} - это ${e}`));
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// console.log(personalMovieDB);

// personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDb();