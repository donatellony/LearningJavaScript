'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsPatent = document.querySelector(".tabheader__items");
    
          function hideTabContent() {
            tabsContent.forEach(e=>{
                e.getElementsByClassName.display = 'none';
            });
            
            tabs.forEach(tab=>{
                tab.classList.remove('tabheader__item_active');
            });
        }
    
        function showTabContent(i) {
            tabsContent[i].getElementsByClassName.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
        }

    
    hideTabContent();
    showTabContent(0);
});
