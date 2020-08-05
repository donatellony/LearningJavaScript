/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promos = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        addFolder = document.querySelector('.add'),
        addBtn = addFolder.querySelector('button'),
        addFolderInput = addFolder.querySelector('.adding__input'),
        addCheckbox = addFolder.querySelector('[type="checkbox"]');
        
    

        //   listItems = list.querySelectorAll('li');

    promos.forEach(e=>e.remove());

    genre.textContent = "Драма";

    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    list.innerHTML = "";
    movieDB.movies.sort();
    movieDB.movies.forEach((e, i)=>list.innerHTML += `
                        <li class="promo__interactive-item">${i+1}) ${e}
                            <div class="delete"></div>
                        </li>`
                        );
                        
    let deleteItemButtons = list.querySelectorAll('.delete'),
    items = list.querySelectorAll('.promo__interactive-item');

        deleteItemButtons.forEach((e,i)=>e.addEventListener('click', (event)=>{
        e.parentElement.remove();
        movieDB.movies.splice(i,1);
        console.log(movieDB);
    }));

    addBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        let movieName = addFolderInput.value;
        if(movieName.length == 0 || movieName == null){
            return;
        }
        if(movieName.length>21){
            movieName = movieName.substring(0,21) + '...';
        }
        if(addCheckbox.checked){
            console.log('Добавляем любимый фильм');
        }
        addFolderInput.value = "";
        addNewFilm(movieName);
    });


    function addNewFilm(movieName) {
        list.innerHTML = "";
        movieDB.movies.push(movieName);
        movieDB.movies.sort();
        movieDB.movies.forEach((e, i)=>list.innerHTML += `
                            <li class="promo__interactive-item">${i+1}) ${e}
                                <div class="delete"></div>
                            </li>`
                            );
        deleteItemButtons = list.querySelectorAll('.delete');
        deleteButtonsEL();
    }

    function removeFilm(index) {
        list.innerHTML = "";
        movieDB.movies[index] = null;
        movieDB.movies.sort();
        movieDB.movies.forEach((e, i)=>list.innerHTML += `
                            <li class="promo__interactive-item">${i+1}) ${e}
                                <div class="delete"></div>
                            </li>`
                            );
        deleteItemButtons = list.querySelectorAll('.delete');
        deleteButtonsEL();
        console.log(movieDB);
    }
}
);
