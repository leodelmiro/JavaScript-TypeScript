const confirmSomething = confirm('Deseja confirmar?');
const typeNum1 = prompt('Digite algum número')
const typeNum2 = prompt('Digite algum outro número para ser somado')
console.log(confirmSomething)
console.log(typeNum1)
console.log(typeNum2)

const sum = Number(typeNum1) + Number(typeNum2)
alert(`A soma é ${sum}`);
