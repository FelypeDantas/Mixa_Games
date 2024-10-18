let isHistoryVisible = false;
const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        life: document.querySelector("#life")
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        lifeValues: 3
    },
    actions: {
        timeId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timeId);
        saveRoundToHistory(state.values.result, "Tempo esgotado");
        alert("Game Over! o seu resultado foi: "+ state.values.result);
    }
}

function playSound(audioNome){
    let audio = new Audio(`./src/audios/${audioNome}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
       square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            } else {
                state.values.lifeValues--;
                state.view.life.textContent = `x${state.values.lifeValues}`;
                if(state.values.lifeValues === 0){
                    saveRoundToHistory(state.values.result, "Sem vidas restantes");
                    alert("Game Over! voce obteve a pontuacao: " + state.values.result);
                    location.reload(true);
                }
            } 
       })
    })
}

function saveRoundToHistory(score, reason) {
    const roundData = {
        score: score,
        reason: reason,
        timestamp: new Date().toISOString()
    };

    const history = JSON.parse(localStorage.getItem('gameHistory')) || [];
    history.push(roundData);
    localStorage.setItem('gameHistory', JSON.stringify(history));
}

function displayHistory() {
    const historyContainer = document.getElementById('history');
    const history = JSON.parse(localStorage.getItem('gameHistory')) || [];
    const button = document.getElementById('show-history');

    if (isHistoryVisible) {
        historyContainer.innerHTML = '';
        button.textContent = 'Mostrar Histórico'; 
        isHistoryVisible = false;
    } else {
        historyContainer.innerHTML = '';
        history.forEach(round => {
            const roundElement = document.createElement('div');
            roundElement.textContent = `Pontuação: ${round.score}, Razão: ${round.reason}, Data: ${round.timestamp}`;
            historyContainer.appendChild(roundElement);
        });
        button.textContent = 'Ocultar Histórico'; 
        isHistoryVisible = true;
    }
}


document.getElementById('show-history').addEventListener('click', displayHistory);

function init(){
    addListenerHitBox();
}

init();