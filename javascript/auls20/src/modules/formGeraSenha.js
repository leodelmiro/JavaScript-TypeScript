import geraSenha from "./geradores";

const senhaGeradaEl = document.querySelector('.senha-gerada');
const qtdCaracteresEl = document.querySelector('.qtd-caracteres');
const chkMaiusculasEl = document.querySelector('.chk-maisculas');
const chkMinusculasEl = document.querySelector('.chk-minusculas');
const chkNumerosEl = document.querySelector('.chk-numeros');
const chkSimbolosEl = document.querySelector('.chk-simbolos');
const btnGerarSenhaEl = document.querySelector('.gerar-senha');

export default () => {
    btnGerarSenhaEl.addEventListener('click', () => {
        senhaGeradaEl.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteresEl.value,
        chkMaiusculasEl.checked,
        chkMinusculasEl.checked,
        chkNumerosEl.checked,
        chkSimbolosEl.checked
    );

    return senha || 'Nada selecionado';
}