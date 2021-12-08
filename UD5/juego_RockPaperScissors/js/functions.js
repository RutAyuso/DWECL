import {ROCK, PAPER, SCISSORS, TIE, WIN, LOST, rockBtn, paperBtn,scissorsBtn,resultText,userImg,machineImg} from './modules/constantes.js';



rockBtn.addEventListener("click", () => {
    play(ROCK);// llamamos a la funcion play() que hemos importado previamente
});
paperBtn.addEventListener("click", () => {
    play(PAPER);// llamamos a la funcion play() que hemos importado previamente
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);// llamamos a la funcion play() que hemos importado previamente
});

var isPlaying = false;

function play(userOption) {
    if(isPlaying) return;
    isPlaying = true;
    userImg.src = "img/" + userOption + ".png";
    resultText.innerHTML = "LA MAQUINA ESTÁ ELIGIENDO";
    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);//crear intervalo para que cambie la imagen

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".png";

        switch (result) {
            case TIE:
                resultText.innerHTML = "HAS EMPATADO!";
                break;
            case WIN:
                resultText.innerHTML = "HAS GANADOO!";
                break;
            case LOST:
                resultText.innerHTML = "HAS PERDIDO :(";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;

    }
}
export {play};