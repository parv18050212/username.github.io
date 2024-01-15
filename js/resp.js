burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    nav.classList.toggle('h-nav-resp');
})