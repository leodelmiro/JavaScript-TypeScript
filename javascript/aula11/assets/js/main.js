const elementos = [
    { tag: 'p', text: 'Frase 1' },
    { tag: 'div', text: 'Frase 2' },
    { tag: 'footer', text: 'Frase 3' },
    { tag: 'section', text: 'Frase 4' }
];

function meuEscopo() {
    const container = document.body.querySelector('.container');
    const div = document.createElement('div')
    container.appendChild(div)

    for (let i = 0; i < elementos.length; i++) {
        let { tag, text } = elementos[i]
        const newElement = document.createElement(tag)
        newElement.innerText = text
        div.appendChild(newElement)
    }
}

meuEscopo();