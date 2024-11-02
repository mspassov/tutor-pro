document.addEventListener('DOMContentLoaded', () =>{
    const hamBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-menu-items');

    hamBtn.addEventListener('click', () =>{
        mobileNav.classList.toggle('active');
    })
})

window.addEventListener('scroll', () =>{
    const nav = document.querySelector('.navbar');

    if(window.scrollY > 0){
        nav.classList.add('scroll');
    }

    if(window.scrollY == 0){
        nav.classList.remove('scroll');
    }
    
})