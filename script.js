var ini = document.getElementById("ini");
var inicio =document.getElementById("inicio");
var nav_header=document.getElementById("nav_header");
var nav= function(){
    nav_inicio=document.getElementById("nav_inicio");
    nav_sobre=document.getElementById("nav_sobre");
    nav_projetos=document.getElementById("nav_projetos");
    nav_contato=document.getElementById("nav_contato");
}
var logoface=document.getElementById("logoface");

//quando a tela descer o #inicio deixa de ser opaco lentamente, mas quando voltar ao topo deixa de ser inisivel
window.onscroll = function(){
    ini.style.opacity = 1 - window.scrollY / 230;
}

//quando a largura da pagina for maior ou menor que 290px todo o conteudeo de ini ficara 50% menor

window.onresize = function(){
    if(window.innerWidth < 290){
        logoface.style.width = "30%";
        nav_header.style.width = "97%";
    }else{
        ini.style.width = "auto";
    }

}