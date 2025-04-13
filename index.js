let nome = "Limasfray"
let nivel = 8.002

function xp(nivel){
    if(nivel <= 1.000){
        return "Ferro"
    }
        
    else if(nivel >= 1.001 && nivel <= 2.000){
        return "Bronze"
    }

    else if(nivel >= 2.001 && nivel <= 5.000){
        return "Prata"
    }

    else if(nivel >= 5.001 && nivel <= 7.000){
        return "Ouro"
    }
   
    else if(nivel >= 7.001 && nivel <= 8.000){
        return "Platina"
    }

    else if(nivel >= 8.001 && nivel <= 9.000){
        return "Ascendente"
    }

    else if(nivel >= 9.001 && nivel <= 10.000){
        return "Imortal"
    }

    else if(nivel > 10.000){
        return "Radiante"
    }
}

console.log("O herói de nome " + nome + " está no nível " + xp(nivel))