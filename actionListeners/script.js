const btn = document.querySelectorAll('button')[0],
      overlay = document.querySelector('.overlay');

// btn.addEventListener('click', ()=>{
//     alert('CLICK!');
// });

// btn.addEventListener('click', ()=>{
//     alert('SECOND CLICK!');
// });
let i = 0;
const deleteElement = (e)=>{
    console.log(e.target);//TYPE and TARGET - VALUABLE ONES
    console.log(e.type);//Таргет работает изначально на самом глубоком "ребенке"
    // i++;
    // if(i==1){
    //     btn.removeEventListener('click', deleteElement);
    // }
    // e.target.remove();
    // console.log('Hover');
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
});