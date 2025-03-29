/*transformando o menu mobile em x */

const menuMobile = document.querySelector('.menu-mobile')
menuMobile.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuMobile.classList.toggle('change');

    if(menuMobile.classList.contains('change')) {
        nav.style.display = 'block';
    }
    else{
        nav.style.display = 'none';
    }
    
}