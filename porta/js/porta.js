var radioVermelho = document.querySelector("#vermelho");
var radioBranca = document.querySelector("#branca");
var radioAzul = document.querySelector("#azul");

var imagem = document.querySelector("#imagem");

const abrir = new Audio('music/porta_abrindo.mp3');
const fechar = new Audio('music/porta_fechando.mp3');

function abrirEFechar(src){
    imagem.src = src;
}

function portaAberta(){
    if(radioAzul.checked){
        abrirEFechar('img/porta-azul-aberta.jpg')
        radioAzul.checked = false;
    }
    if(radioVermelho.checked){
        abrirEFechar('img/porta-vermelha-aberta.jpg')
        radioVermelho.checked = false;
    }
    if(radioBranca.checked){
        abrirEFechar('img/porta-branca-aberta.jpg')
        radioBranca.checked = false;
    }
    abrir.play();
}

function portaFechada(){

    if(radioAzul.checked){
        abrirEFechar('img/porta-azul-fechada.jpg')
        radioAzul.checked = false;
    }
        if(radioVermelho.checked){
        abrirEFechar('img/porta-vermelha-fechada.jpg')
        radioVermelho.checked = false;
    }
        if(radioBranca.checked){
        abrirEFechar('img/porta-branca-fechada.jpg')
        radioBranca.checked = false;
    }
    fechar.play();
}
