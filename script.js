var inicio =document.getElementById("inicio");
var nav_header=document.getElementsByClassName("nav_header");
var nav= function(){
    nav_inicio=document.getElementById("nav_inicio");
    nav_sobre=document.getElementById("nav_sobre");
    nav_projetos=document.getElementById("nav_projetos");
    nav_contato=document.getElementById("nav_contato");
}
window.addEventListener('scroll', function() {
    var posicao = inicio.getBoundingClientRect().top;
    var altura = window.innerHeight;

    if (posicao < altura) {
        inicio.classList.add('oculto');
    } else {
        inicio.classList.remove('oculto');
    }

    if (window.pageYOffset === 0) {
        inicio.classList.remove('oculto');
    }
    var nav = document.querySelector('.nav_header');
    var posicao = inicio.getBoundingClientRect().top;
    var altura = window.innerHeight;

    if (posicao < altura) {
        nav.classList.add('fixo');
    } else {
        nav.classList.remove('fixo');
    }

    if (window.pageYOffset === 0) {
        nav.classList.remove('fixo');
    }
    
});
