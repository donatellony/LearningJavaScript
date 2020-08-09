'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const tabItems = document.querySelector('.tabheader__items'),
          tabs = tabItems.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent');

    function hideAllTabs(){
        tabs.forEach(e=>{
            e.classList.remove('tabheader__item_active');
        });
        tabContent.forEach(e=>{
            e.style.display = 'none';
        });
    }

    function showTab(i = 0){
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideAllTabs();
    showTab();

    tabItems.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((e, i)=>{
                if(target == e){
                    hideAllTabs();
                    showTab(i);
                }
            });
        }
    });
});