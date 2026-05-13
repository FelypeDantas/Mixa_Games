function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento instanceof HTMLAudioElement) {

        elemento.currentTime = 0;
        elemento.play();

    } else {

        console.warn(`Áudio não encontrado: ${seletorAudio}`);

    }
}

const teclas = document.querySelectorAll('.tecla');

teclas.forEach((tecla) => {

    const instrumento = tecla.classList[1];
    const seletorAudio = `#som_${instrumento}`;

    /* CLIQUE */

    tecla.addEventListener('click', () => {
        tocaSom(seletorAudio);
    });

    /* TECLADO */

    tecla.addEventListener('keydown', (evento) => {

        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');

        }

    });

    tecla.addEventListener('keyup', () => {
        tecla.classList.remove('ativa');
    });

});
