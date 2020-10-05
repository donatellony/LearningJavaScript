'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    //TABS
    const tabItems = document.querySelector('.tabheader__items'),
          tabs = tabItems.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
    //SLIDERS
          slider = document.querySelector('.offer__slider'),
          sliderWrapper = slider.querySelector('.offer__slider-wrapper'),
          sliderWrapperItems = sliderWrapper.querySelectorAll('.offer__slide'),
          currentSlideNum = slider.querySelector('#current'),
          totalSlideNum = slider.querySelector('#total'),
          prevSlideBtn = slider.querySelector('.offer__slider-prev'),
          nextSlideBtn = slider.querySelector('.offer__slider-next');
    // alert(currentSlideNum.innerHTML);
    let currentSlide = +currentSlideNum.textContent,
        totalSlide = sliderWrapperItems.length;
    function hideAllTabs(){
        tabs.forEach(e=>{
            e.classList.remove('tabheader__item_active');
        });
        tabContent.forEach(e=>{
            e.style.display = 'none';
        });
    }

    function showTab(i = 0){
        hideAllTabs();
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    function hideAllSlides(){
        sliderWrapperItems.forEach(e=>e.style.display = 'none');
    }

    function showCurrentSlide(){
        hideAllSlides();
        sliderWrapperItems[currentSlide-1].style.display = 'block';
    }

    // hideAllTabs();
    showTab();
    // hideAllSlides();
    showCurrentSlide();
    tabItems.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((e, i)=>{
                if(target == e){
                    // hideAllTabs();
                    showTab(i);
                }
            });
        }
    });

    prevSlideBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        const target = event.currentTarget;
        // console.log(target);
        if(target && target.classList.contains('offer__slider-prev') && currentSlide>1){
            // hideAllSlides();
            currentSlideNum.textContent = "0"+--currentSlide;
            showCurrentSlide();
        }
    });
    prevSlideBtn.addEventListener('dblclick', (event) => event.preventDefault());

    nextSlideBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        const target = event.currentTarget;
        // console.log(target);
        if(target && target.classList.contains('offer__slider-next') && currentSlide<+totalSlide){
            // hideAllSlides();
            currentSlide++;
            currentSlideNum.textContent = "0"+currentSlide;
            showCurrentSlide();
        }
    });
    nextSlideBtn.addEventListener('dblclick', (event) => event.preventDefault());

    totalSlideNum.textContent = "0" + totalSlide;

    //TIME

    const deadline = '2020-09-27';
    
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60) % 60)),
              seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function addZeroIfNeeded(num){
        if(num>=0 && num<10){
            return "0"+num;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
          seconds = timer.querySelector('#seconds'),
          minutes = timer.querySelector('#minutes'),
          hours = timer.querySelector('#hours'),
          days = timer.querySelector('#days'),
          timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.textContent = addZeroIfNeeded(t.days);
            hours.textContent = addZeroIfNeeded(t.hours);
            minutes.textContent = addZeroIfNeeded(t.minutes);
            seconds.textContent = addZeroIfNeeded(t.seconds);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock('.timer', deadline);

    //MODAL WINDOWS
    function showModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function hideModal(){
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = 'visible';
    }

    const modalBtns = document.querySelectorAll("[data-modal]"),
          modalCloseBtn = document.querySelector("[data-close]"),
          modal = document.querySelector('.modal');
    
    modalBtns.forEach(e=>e.addEventListener('click', (event)=>{
                         event.preventDefault();
                         showModal();
        }));

    modalCloseBtn.addEventListener('click', hideModal);

    modal.addEventListener('click', (e)=>{
        e.preventDefault();
        // console.log("TG: "+e.target.classList);
        // console.log("CTG: "+ e.currentTarget.classList);
        if(e.target === modal){
            hideModal();
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code === "Escape" && modal.classList.contains('show')){
            hideModal();
        }
    });

    //Opening modal window with time

    const modalTimerId = setTimeout(showModal, 15000);

    //Opening modal window while scrolling

    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    

    window.addEventListener('scroll', showModalByScroll);

    //RECREATING MENU ITEMS USING CLASSES

    const menuItems = document.querySelectorAll('.menu__item');

    class MenuCard{
        constructor(imgSrc, alt, name, descr, price, parentSelector, ...classes){
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.name = name;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.classes = classes;
        }
        
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
            this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
            <img src="img/tabs/vegy.jpg" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.name}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
        this.parent.append(element);
        }
    }
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        "JS Added",
        "Test menu",
        2000,
         '.menu .container',
         'menu__item'
         ).render();

}); 
