//pegando componetnes em telas e armazenando em variáveis
var botaoMenu = document.querySelector('#botaoMenu');
var menuLateral = document.querySelector('#menu-lateral-id')
var fundoMenu = document.querySelector('#fundo-menu-id')
var linksMenu = document.querySelectorAll("listaMenu a");

//função executa ação

function abrirFecharMenu(){
menuLateral.classList.toggle("aberto");
fundoMenu.classList.toggle("vísivel");
}

botaoMenu.addEventListener("click", abrirFecharMenu);
fundoMenu.addEventListener("click", abrirFecharMenu)
linksMenu.forEach(function(links){
links.addEventListener ("click",abrirFecharMenu);
});


