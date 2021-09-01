let pontoJogador1 = 0, pontoJogador2 = 0;

// Calculando pontos de acordo com cada button
let btvitoriaJogador1 = document.querySelector('#vitoriaJogador1');
btvitoriaJogador1.onclick = () => {
    pontoJogador1 += CalcularPontos("vitoria");
    AtualizaTabelaPontos("jogador1");
};

let btempateJogador1 = document.querySelector('#empateJogador1');
btempateJogador1.onclick = () => {
    pontoJogador1 += CalcularPontos("empate");
    AtualizaTabelaPontos("jogador1");
};

let btderrotaJogador1 = document.querySelector('#derrotaJogador1');
btderrotaJogador1.onclick = () => {
    pontoJogador1 += CalcularPontos("derrota");
    AtualizaTabelaPontos("jogador2");
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