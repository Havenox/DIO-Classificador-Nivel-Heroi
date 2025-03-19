const nomeHeroi = "Havenox";
const xpHeroi = 10000;
let classificacaoHeroi = "Não Classificado";

switch(true){
    case xpHeroi <= 1000 :
        classificacaoHeroi = "Ferro";
        break;

    case xpHeroi <= 2000 :
        classificacaoHeroi = "Bronze";
        break;

    case xpHeroi <= 5000 :
        classificacaoHeroi = "Prata";
        break;

    case xpHeroi <= 7000 :
        classificacaoHeroi = "Ouro";
        break;
    
    case xpHeroi <= 8000 :
        classificacaoHeroi = "Platina";
        break;

    case xpHeroi <= 9000 :
        classificacaoHeroi = "Ascendente";
        break;

    case xpHeroi <= 10000 :
        classificacaoHeroi = "Imortal";
        break;       

    case xpHeroi > 10000 :
        classificacaoHeroi = "Radiante";
        break;
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + classificacaoHeroi);