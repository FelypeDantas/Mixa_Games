const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input")
let mapedKey = [];
let audio = new Audio("./src/tunes/a.wav");
const keysCheck = document.querySelector(".keys-check input")

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKey.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if(mapedKey.includes(e.key)){
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hidde"));
}

keysCheck.addEventListener("input", showHideKeys);

volume.addEventListener("input", handleVolume);