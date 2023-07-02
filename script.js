var inicio =document.getElementById("inicio");
var nav_header=document.getElementsByClassName("nav_header");
var nav= function(){
    nav_inicio=document.getElementById("nav_inicio");
    nav_sobre=document.getElementById("nav_sobre");
    nav_projetos=document.getElementById("nav_projetos");
    nav_contato=document.getElementById("nav_contato");
}
var ini = document.getElementById("ini");

//quando a tela descer o #inicio deixa de ser opaco lentamente, mas quando voltar ao topo deixa de ser inisivel
window.onscroll = function(){
    inicio.style.opacity = 1 - window.scrollY / 90;
}

//quando a tela descer o 