const menu = document.querySelector('.nav-links');

const navBtn = document.querySelector('.menu-btn');
navBtn.addEventListener('click', toggleMenu);

let showMenu = false;
function toggleMenu(){
    
        if(!showMenu){
            menu.classList.remove('nav-links')
            menu.classList.add('mobile-nav');
            showMenu = true;
        }else{
            menu.classList.remove('mobile-nav');
            menu.classList.add('nav-links')

            showMenu = false;
}
}