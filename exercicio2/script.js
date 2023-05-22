let velocidade = document.getElementById("velocidade")
let multa;
let subtracao;
let valorMulta = 5
let resultado = document.getElementById("resultado")
let multado = document.getElementById("multado")

function VELOCIMETRO(){
    if(velocidade.value >80){
        subtracao = velocidade.value - 80
        multa = subtracao * valorMulta
        resultado.innerHTML = ("Voce foi multado")
        multado.innerHTML = (" Voce deve pagar " + multa )
    }else{
        multado.innerHTML = ("")
        resultado.innerHTML = ("Voce está certo")
    }
    
    }