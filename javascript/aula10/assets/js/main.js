function meuEscopo() {
    const h1 = document.body.querySelector('.container h1')
    h1.innerHTML = new Date().toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'short'
    });
    // h1.innerText = dayFormat(new Date())


    // function getWeekday(date) {
    //     switch (date.getDay()) {
    //         case 0:
    //             return "Segunda-feira"
    //         case 1:
    //             return "Terça-feira"
    //         case 2:
    //             return "Quarta-feira"
    //         case 3:
    //             return "Quinta-feira"
    //         case 4:
    //             return "Sexta-feira"
    //         case 5:
    //             return "Sábado"
    //         case 6:
    //             return "Domingo"
    //     }
    // }

    // function getMonth(date) {
    //     switch (date.getDay()) {
    //         case 0:
    //             return "Janeiro"
    //         case 1:
    //             return "Fevereiro"
    //         case 2:
    //             return "Março"
    //         case 3:
    //             return "Abril"
    //         case 4:
    //             return "Maio"
    //         case 5:
    //             return "Junho"
    //         case 6:
    //             return "Julho"
    //         case 7:
    //             return "Agosto"
    //         case 8:
    //             return "Setembro"
    //         case 9:
    //             return "Outubro"
    //         case 10:
    //             return "Novembro"
    //         case 11:
    //             return "Dezembro"
    //     }
    // }

    // function dayFormat(date) {
    //     const weekday = getWeekday(date)
    //     const month = getMonth(date)
    //     return `${weekday}, ${date.getDate()} de ${month} de ${date.getFullYear()} ${leftZeroFormat(date.getHours())}:${leftZeroFormat(date.getMinutes())}`
    // }

    // function leftZeroFormat(number) {
    //     return number >= 10 ? number : `0${number}`
    // }
}

meuEscopo()