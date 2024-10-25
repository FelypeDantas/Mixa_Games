const projects = [
    {
        title: "D&D",
        imgSrc: "./assets/img/DD.gif",
        link: "./assets/projects/DD/index.html",
        alt: "Projeto D&D"
    },
    {
        title: "Jogo da Cobrinha",
        imgSrc: "./assets/img/Snake.gif",
        link: "./assets/projects/JogoDaCobrinha/index.html",
        alt: "Projeto da Cobrinha"
    },
    {
        title: "Loteria",
        imgSrc: "./assets/img/Loteria.png",
        link: "./assets/projects/Loteria/index.html",
        alt: "Projeto Loteria"
    },
    {
        title: "Numero secreto",
        imgSrc: "./assets/img/Numero_secreto.png",
        link: "./assets/projects/Jogo-do-numero-secreto/index.html",
        alt: "Projeto Numero secreto"
    },
    {
        title: "Alura-Midi",
        imgSrc: "./assets/img/alura-midi.png",
        link: "./assets/projects/Alura-Midi/index.html",
        alt: "Projeto Alura-Midi"
    },
    {
        title: "Detona Ralph",
        imgSrc: "./assets/img/Detona_Ralph.png",
        link: "./assets/projects/Detona_Ralph/index.html",
        alt: "Projeto Detona Ralph"
    },
    {
        title: "Jogo da memoria",
        imgSrc: "./assets/img/memoria.png",
        link: "./assets/projects/Jogo_Da_Memoria/index.html",
        alt: "Projeto Jogo da memoria"
    },
    {
        title: "Jogo do numero secreto por voz",
        imgSrc: "./assets/img/Numero_voz.PNG",
        link: "https://numero-secreto-reconhecimento-voz-seven.vercel.app/",
        alt: "Projeto Jogo do numero secreto por voz"
    },
    {
        title: "Pokedex",
        imgSrc: "./assets/img/pokedex.gif",
        link: "./assets/projects/pokedex/index.html",
        alt: "Pokedex"
    },
    {
        title: "Yo-Gi-Oh",
        imgSrc: "./assets/img/Yo-Gi-Oh.gif",
        link: "./assets/projects/js-yugioh/index.html",
        alt: "Yo-Gi-Oh"
    },
    {
        title: "Teclado",
        imgSrc: "./assets/img/Teclado.gif",
        link: "./assets/projects/Teclado/index.html",
        alt: "Teclado"
    },
    {
        title: "Mario Jump",
        imgSrc: "./assets/img/marioJump.gif",
        link: "./assets/projects/superMario/index.html",
        alt: "Mario Jump"
    }
];

// Função para criar e adicionar os cards ao DOM
function createCards() {
    const container = document.getElementById('card-container');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card m-4';
        card.style.width = '20rem';

        card.innerHTML = `
            <img src="${project.imgSrc}" class="card-img-top" alt="${project.alt}">
            <div class="card-body">
                <h5 class="card-title py-2 fw-bold">${project.title}</h5>
                <a href="${project.link}" class="btn botao-padrao w-100 fw-bold" aria-controls="offcanvasRight">Quero Jogar</a>
            </div>
        `;

        container.appendChild(card);
    });
}

createCards();