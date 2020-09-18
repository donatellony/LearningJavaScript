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

    const deadline = '2020-09-07';
    
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
                         modal.classList.add('show');
                         modal.classList.remove('hide');
                         document.body.style.overflow = 'hidden';
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
});