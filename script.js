var ini = document.getElementById("ini");
var inicio =document.getElementById("inicio");
var nav_header=document.getElementById("nav_header");
var nav= function(){
    nav_inicio=document.getElementById("nav_inicio");
    nav_sobre=document.getElementById("nav_sobre");
    nav_projetos=document.getElementById("nav_projetos");
    nav_contato=document.getElementById("nav_contato");
}
var sticky = nav_header.offsetTop;

nav_inicio.addEventListener("click", function(){
    inicio.style.opacity = 1;
})

//quando a tela descer o #inicio deixa de ser opaco lentamente, mas quando voltar ao topo deixa de ser inisivel
window.onscroll = function(){
    inicio.style.opacity = 1 - window.scrollY / 25;
    if(window.pageYOffset >= sticky){
        nav_header.classList.add("sticky");}
    else{
        nav_header.classList.remove("sticky");
}}