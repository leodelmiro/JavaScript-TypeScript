function limparCPF(cpf) {
  return cpf.replace(/\D+/g, '');
}

function calcularDigito(cpfArray, fator) {
  const total = cpfArray
    .slice(0, fator - 1)
    .reduce((ac, digit, idx) => ac + Number(digit) * (fator - idx), 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? 0 : digito;
}

function validarCPF(cpf) {
  const cpfLimpo = limparCPF(cpf);
  if (cpfLimpo.length !== 11) return false;

  const cpfArray = Array.from(cpfLimpo);
  const primeiroDigito = calcularDigito(cpfArray, 10);
  const segundoDigito = calcularDigito([...cpfArray.slice(0, 9), primeiroDigito], 11);

  return (
    primeiroDigito === Number(cpfArray[9]) &&
    segundoDigito === Number(cpfArray[10])
  );
}

// Exemplo de uso:
const cpf = '705.484.450-52';
console.log(validarCPF(cpf)); // true