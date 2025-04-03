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

function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnleiamais=document.getElementById("btnleiamais")

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnleiamais.innerHTML="Leia mais";

    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnleiamais.innerHTML="Leia Menos";
    }
}
