function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        clickBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(conta)
            } catch (error) {
                alert('Conta inválida')
                return
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()

