const num = Number(prompt('Digite um número:'))
const titleNumber = document.getElementById('title-number')
const text = document.getElementById('text')

titleNumber.innerHTML = num
text.innerHTML += `<p>Raiz quadrada: ${num ** 0.5}</p>`
text.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`
text.innerHTML += `<p>${num} é NaN: ${Number.isNaN(num)}</p>`
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`
text.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`