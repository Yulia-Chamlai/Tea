const menuBtn = document.querySelector('.header__menu-btn');
const closeBtn = document.querySelector('.header__menu-close');
const navList = document.querySelector('.nav');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.add('active');
    navList.classList.add('active');
});
closeBtn.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    navList.classList.remove('active');
});
