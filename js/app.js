let pontoJogador1 = 0, pontoJogador2 = 0;

// Calculando pontos de acordo com cada button
let btvitoriaJogador1 = document.querySelector('#vitoriaJogador1');
btvitoriaJogador1.onclick = () => {
    pontoJogador1 += CalcularPontos("vitoria");
    AtualizaTabelaPontos("jogador1");
    SomaVitorias();
    
};



let btempateJogador1 = document.querySelector('#empateJogador1');
btempateJogador1.onclick = () => {
    pontoJogador1 += CalcularPontos("empate");
    AtualizaTabelaPontos("jogador1");
    SomaEmpates();
};

let btderrotaJogador1 = document.querySelector('#derrotaJogador1');
btderrotaJogador1.onclick = () => {
    pontoJogador1 += CalcularPontos("derrota");
    AtualizaTabelaPontos("jogador2");
    SomaDerrotas();
}


let btvitoriaJogador2 = document.querySelector('#vitoriaJogador2');
btvitoriaJogador2.onclick = () => {
    pontoJogador2 += CalcularPontos("vitoria");
    AtualizaTabelaPontos("jogador2");
}

let btempateJogador2 = document.querySelector('#empateJogador2');
btempateJogador2.onclick = () => {
    pontoJogador2 += CalcularPontos("empate");
    AtualizaTabelaPontos("jogador2");
   
}

let btderrotaJogador2 = document.querySelector('#derrotaJogador2');
btderrotaJogador2.onclick = () => {
    pontoJogador2 += CalcularPontos("derrota");
    AtualizaTabelaPontos("jogador2");
}



// Funções para atualizar a contagem de pontos
let vitoria = 0, empate = 0, derrota = 0;
function SomaVitorias() {
    vitoria += 1;
    document.querySelector('.vitorias-jogador1').innerHTML = vitoria;
}


function SomaEmpates() {
    empate += 1;
    document.querySelector('.empates-jogador1').innerHTML = empate;
}

function SomaDerrotas() {
    derrota += 1;
    document.querySelector('.derrotas-jogador1').innerHTML = derrota;
}


function AtualizaTabelaPontos(time) {
    if(time == "jogador1") {
        document.querySelector(".pontos-jogador1").innerText = pontoJogador1;
    }
    else if (time == "jogador2") {
        document.querySelector(".pontos-jogador2").innerText = pontoJogador2;
    }
}

function CalcularPontos(resultado){
    if (resultado == "vitoria") {
        return 3;
    }   else if(resultado == "empate") {
        return 1;
    }else{
        return 0;
    }
}