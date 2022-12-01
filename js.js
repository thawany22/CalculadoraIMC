let campoAltura = null;
let campoMassa = null;
let botaoQueCalcula = null;
let paragrafoExibeIMC = null;
let paragrafoExibeSituacao = null;
let divExibeResultado = null;

let dadosUsuario = {
    altura: null,
    massa: null
}


document.addEventListener("DOMContentLoaded", setup);

function setup() {
    campoAltura = document.getElementById("alturaUsuario");
    campoMassa = document.getElementById("massaUsuario");
    botaoQueCalcula = document.getElementById("botaoCalcular");
    paragrafoExibeIMC = document.getElementById("exibeIMC");
    paragrafoExibeSituacao = document.getElementById("exibeSituacao");
    divExibeResultado = document.getElementById("exibeCalculos");

   
    campoAltura.addEventListener("change", () => dadosUsuario.altura = Number(campoAltura.value));

    
    campoMassa.addEventListener("change", () => dadosUsuario.massa = Number(campoMassa.value));

   
    botaoQueCalcula.addEventListener("click", () => {
        const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
        const situacaoUsuario = testaSituacao(valorIMC);

        paragrafoExibeIMC.innerText = `${valorIMC} kg/m².`;
        paragrafoExibeSituacao.innerText = `${situacaoUsuario}`;
        divExibeResultado.hidden = 0;
    });
}

function testaSituacao(valorIMC) {
  
    let IMC = Number(valorIMC)

    switch (true) {
        case (IMC < 17):
            return "Muito abaixo do peso.";

        case (IMC < 18.5):
            return "Abaixo do peso."
        
        case (IMC < 25):
            return "Peso normal.";

        case (IMC < 30):
            return "Acima do peso.";

        case (IMC < 35):
            return "Obesidade.";

        case (IMC < 40):
            return "Obesidade severa.";

        case (IMC >= 40):
            return "Obesidade mórbida.";

        default:
            return "Erro.";
    }
}