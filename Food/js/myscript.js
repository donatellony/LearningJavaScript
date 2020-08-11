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
    
});