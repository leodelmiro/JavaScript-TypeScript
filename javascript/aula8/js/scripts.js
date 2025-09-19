function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault()

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        const pessoa = criaPessoa(nome, sobrenome, peso, altura)
        pessoas.push(pessoa)

        pessoas.forEach( p => {
            resultado.innerHTML += `<p>${p.nome} ${p.sobrenome} ${p.peso} ${p.altura}</p></br>`
        })
    }

    function criaPessoa(nome, sobrenome, peso, altura) {
        return {
            nome,
            sobrenome,
            peso,
            altura
        }
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();