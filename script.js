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
        title: "Número Secreto",
        imgSrc: "./assets/img/Numero_secreto.png",
        link: "./assets/projects/Jogo-do-numero-secreto/index.html",
        alt: "Projeto Número Secreto"
    },
    {
        title: "Alura Midi",
        imgSrc: "./assets/img/alura-midi.png",
        link: "./assets/projects/Alura-Midi/index.html",
        alt: "Projeto Alura Midi"
    },
    {
        title: "Detona Ralph",
        imgSrc: "./assets/img/Detona_Ralph.png",
        link: "./assets/projects/Detona_Ralph/index.html",
        alt: "Projeto Detona Ralph"
    },
    {
        title: "Jogo da Memória",
        imgSrc: "./assets/img/memoria.png",
        link: "./assets/projects/Jogo_Da_Memoria/index.html",
        alt: "Projeto Jogo da Memória"
    },
    {
        title: "Número Secreto por Voz",
        imgSrc: "./assets/img/Numero_voz.PNG",
        link: "https://numero-secreto-reconhecimento-voz-seven.vercel.app/",
        alt: "Projeto Número Secreto por Voz"
    },
    {
        title: "Pokédex",
        imgSrc: "./assets/img/pokedex.gif",
        link: "./assets/projects/pokedex/index.html",
        alt: "Pokédex"
    },
    {
        title: "Yu-Gi-Oh",
        imgSrc: "./assets/img/Yo-Gi-Oh.gif",
        link: "./assets/projects/js-yugioh/index.html",
        alt: "Yu-Gi-Oh"
    },
    {
        title: "Teclado Musical",
        imgSrc: "./assets/img/Teclado.gif",
        link: "./assets/projects/Teclado/index.html",
        alt: "Teclado Musical"
    },
    {
        title: "Mario Jump",
        imgSrc: "./assets/img/marioJump.gif",
        link: "./assets/projects/superMario/index.html",
        alt: "Mario Jump"
    },
    {
        title: "Jogo da Velha",
        imgSrc: "./assets/img/jogodavelha.png",
        link: "./assets/projects/jogodaVelha/index.html",
        alt: "Jogo da Velha"
    },
    {
        title: "Mini Paint",
        imgSrc: "./assets/img/MiniPaint.png",
        link: "https://mini-paint.vercel.app/",
        alt: "Mini Paint"
    },
    {
        title: "Jogo da Agulha",
        imgSrc: "./assets/img/jogo_da_agulha.png",
        link: "./assets/projects/Jogo_da_Agulha/index.html",
        alt: "Jogo da Agulha"
    }
];

/* =========================
   CRIAÇÃO DOS CARDS
========================= */

const container = document.getElementById('card-container');

function createCard(project) {
    const card = document.createElement('article');

    card.className = 'card shadow-lg';

    card.innerHTML = `
        <img 
            src="${project.imgSrc}" 
            class="card-img-top"
            alt="${project.alt}"
            loading="lazy"
        >

        <div class="card-body d-flex flex-column justify-content-between">
            
            <h5 class="card-title py-2 fw-bold">
                ${project.title}
            </h5>

            <a 
                href="${project.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn botao-padrao fw-bold mt-3"
            >
                🎮 Quero Jogar
            </a>

        </div>
    `;

    return card;
}

/* =========================
   RENDERIZAÇÃO
========================= */

function renderProjects() {
    if (!container) return;

    const fragment = document.createDocumentFragment();

    projects.forEach(project => {
        fragment.appendChild(createCard(project));
    });

    container.appendChild(fragment);
}

renderProjects();
