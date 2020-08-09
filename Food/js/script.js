'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsPatent = document.querySelector(".tabheader__items");
    
          function hideTabContent() {
            tabsContent.forEach(e=>{
                e.style.display = 'none';
            });
            
            tabs.forEach(tab=>{
                tab.classList.remove('tabheader__item_active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].style.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
        }

    
    hideTabContent();
    showTabContent();

    tabsPatent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});
