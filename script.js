document.querySelector('.menu').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
const fixedHeader=document.querySelector('.header');
if(fixedHeader){window.addEventListener('scroll',()=>fixedHeader.classList.toggle('is-scrolled',window.scrollY>8),{passive:true});}
