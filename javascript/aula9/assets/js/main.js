function meuEscopo() {
    const form = document.body.querySelector('.form');
    const resultado = document.body.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault()

        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;

        const imc = calculaImc(peso, altura)
        formataTextoResultado(imc)
    }

    function calculaImc(peso, altura) {
        if (peso === "") return undefined
        if (altura === "") return Infinity
        return peso / (altura ** 2)
    }

    function formataTextoResultado(imc) {
        if (isNaN(imc) || imc === undefined) {
            resultado.innerHTML = `<p>Peso inválido</p>`
            resultado.style.backgroundColor = "indianred";
            return
        }
        if (imc == Infinity) {
            resultado.innerHTML = `<p>Altura Inválida</p>`
            resultado.style.backgroundColor = "indianred";
            return
        }

        let resultadoAvalicao
        if (imc < 18.5) {
            resultadoAvalicao = "Abaixo do Peso"
        } else if (imc >= 18.5 && imc < 24.9) {
            resultadoAvalicao = "Peso Normal"
        } else if (imc >= 25 && imc < 29.9) {
            resultadoAvalicao = "Sobrepeso"
        } else if (imc >= 30 && imc < 34.9) {
            resultadoAvalicao = "Obesidade grau 1"
        } else if (imc >= 35 && imc < 39.9) {
            resultadoAvalicao = "Obesidade grau 2"
        } else {
            resultadoAvalicao = "Obesidade grau 3"
        }

        resultado.innerHTML = `Seu IMC é ${imc} (${resultadoAvalicao})`
        resultado.style.backgroundColor = "aqua";
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();