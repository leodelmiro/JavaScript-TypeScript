function meuEscopo() {
    const SECONDS_PER_HOUR = 3600;
    const SECONDS_PER_MIN = 60;

    const timer = document.querySelector('#timer');
    const startBtn = document.querySelector('#start');
    const pauseBtn = document.querySelector('#pause');
    const clearBtn = document.querySelector('#clear');

    let timerDuration = 0;
    let intervalId = null;

    const render = () => {
        const hour = Math.floor(timerDuration / SECONDS_PER_HOUR);
        const minutes = Math.floor((timerDuration % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
        const seconds = timerDuration % SECONDS_PER_MIN;
        timer.textContent = `${formatNumberToDisplay(hour)}:${formatNumberToDisplay(minutes)}:${formatNumberToDisplay(seconds)}`;
    };

    const tick = () => {
        timerDuration++;
        render();
    };

    const startTimer = () => {
        if (intervalId !== null) return;
        intervalId = setInterval(tick, 1000);
        timer.style.color = '';
    };

    const stopTimer = () => {
        if (intervalId === null) return;
        clearInterval(intervalId);
        intervalId = null;
        timer.style.color = '#FF0000';
    };

    const resetTimer = () => {
        stopTimer();
        timerDuration = 0;
        render();
        timer.style.color = '';
    };

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', stopTimer);
    clearBtn.addEventListener('click', resetTimer);

    render();
}

const formatNumberToDisplay = n => String(n).padStart(2, '0');

meuEscopo();
