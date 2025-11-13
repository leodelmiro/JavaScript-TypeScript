class ValidaCpf {
  constructor(cpf) {
    this.cpf = cpf;
    this.cpfLimpo = this.limparCPF(cpf);
  }

  limparCPF(cpf) {
    return cpf.replace(/\D+/g, '');
  }

  calcularDigito(cpfArray, fator) {
    const total = cpfArray
      .slice(0, fator - 1)
      .reduce((ac, digit, idx) => ac + Number(digit) * (fator - idx), 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
  }

  validar() {
    if (this.cpfLimpo.length !== 11) return false;

    const cpfArray = Array.from(this.cpfLimpo);
    const primeiroDigito = this.calcularDigito(cpfArray, 10);
    const segundoDigito = this.calcularDigito([...cpfArray.slice(0, 9), primeiroDigito], 11);

    return (
      primeiroDigito === Number(cpfArray[9]) &&
      segundoDigito === Number(cpfArray[10])
    );
  }
}

const cpf = '705.484.450-52';
const validador = new ValidaCpf(cpf);
console.log(validador.validar());