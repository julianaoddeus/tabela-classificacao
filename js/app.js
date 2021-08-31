let pontoJogador1 = 0, pontoJogador2 = 0;


let btvitoriaJogador1 = document.querySelector('#vitoriaJogador1');
btvitoriaJogador1.onclick = () => {
    pontoJogador1 += CalcularPontos("vitoria");
    AtualizaTabelaPontos("jogador1");
};

let btvitoriaJogador2 = document.querySelector('#vitoriaJogador2');
btvitoriaJogador2.onclick = () => {
    pontoJogador2 += CalcularPontos("vitoria");
    AtualizaTabelaPontos("jogador2");
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