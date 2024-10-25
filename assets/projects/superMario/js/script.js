const mario = document.querySelector(".player");
const pipe = document.querySelector(".pipe");
let score = 0;
const scoreNumberElement = document.querySelector('.score-number');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        clearInterval(loop);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    } else if(pipePosition <= 120 && pipePosition > 0 && marioPosition >= 80){
        score += 1; // Aumenta o score em 1
        scoreNumberElement.textContent = score.toString().padStart(2, '0');
    }

},10)

document.addEventListener("keydown", jump);