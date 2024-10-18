import { Personagem } from "../modules/personagem.js";
import { mostrarModal } from "./modal.js";

export class PersonagemView {
    personagens;
    personagensSelecionados;

    constructor(personagens){
        this.ulPersonagens = document.querySelector('ul#personagens');
        this.personagens = personagens;
        this.personagensSelecionados = [];
        this.escutarEventoDuelo();
    }

    render() {
        this.ulPersonagens.innerHTML = ''
        this.personagens.forEach(personagem => {
            const personagemLI = this.criaPersonagem(personagem)
            this.ulPersonagens.appendChild(personagemLI)
        })
    }
    
    criaPersonagem = (personagem) => {
        const personagemLI = document.createElement('li')
        personagemLI.classList.add('personagem', personagem.constructor.tipo);
    
        const estaSelecionado = this.personagensSelecionados.indexOf(personagem) !== -1 //sintaxe para quando encontra no array
    
        if (estaSelecionado) personagemLI.classList.add('selecionado')
    
        personagemLI.innerHTML =
    
        `
        <div class="container-superior">
            <div class="cabecalho">
                <div class="combate"></div>
                <div class="level">
                    <button class="diminuir-level">-</button>
                    <p class="level-texto">Level ${personagem.level}</p>
                    <button class="aumentar-level">+</button>
                </div>
            </div>
            <div class="container-imagem">
                <div class="imagem"></div>
                <div class="container-tipo">
                    <h2 class="tipo">${personagem.constructor.tipo}</h2>
                </div>
            </div>
            <div class="container-nome">
                <h3 class="nome">${personagem.nome}</h3>
            </div>
            <div class="container-descricao">
                <p class="descricao">${personagem.constructor.descricao}</p>
            </div>
        </div>
        <div class="container-inferior">
            <img src="./src/assets/img/icone-mana.png" class="icone-mana">
            <p class="insignia">${personagem.obterInsignia()}</p>
            <img src="./src/assets/img/icone-vida.png" class="icone-vida">
            <h4 class="mana">${personagem.mana}</h4>
            <h4 class="vida">${personagem.vida}</h4>
        </div>
        `
    
        const containerLevel = personagemLI.querySelector('.level')
        containerLevel.onclick = (evt) => {
            evt.stopPropagation()
    
            if (evt.target.classList.contains('diminuir-level')) personagem.diminuirLevel()
    
            if (evt.target.classList.contains('aumentar-level')) personagem.aumentarLevel()
    
            this.render()
        }
    
    
        personagemLI.onclick = () => {
            const jaTem2Selecionados = this.personagensSelecionados.length === 2
            if (!jaTem2Selecionados || estaSelecionado) {
                personagemLI.classList.toggle('selecionado')
    
                if (!estaSelecionado) return this.adicionaSelecao(personagem)
    
                this.removeSelecao(personagem)
            }
        }
    
        return personagemLI
    }
    
    
    adicionaSelecao = (personagem) => {
        this.personagensSelecionados.push(personagem)
        this.render()
    }
    
    
    removeSelecao = (personagem) => {
        const indexDoPersonagemNoArray = this.personagensSelecionados.indexOf(personagem)
        this.personagensSelecionados.splice(indexDoPersonagemNoArray, 1)
        this.render()
    }
    
    escutarEventoDuelo() {
        const botaoDuelar = document.querySelector('.botao-duelar')
    
        botaoDuelar.addEventListener('click', () => {
            if (this.personagensSelecionados.length < 2) return mostrarModal('Selecione 2 personagens')
    
            const resultadoDuelo = Personagem.verificarVencedor(this.personagensSelecionados[0], this.personagensSelecionados[1])
    
            mostrarModal(resultadoDuelo)
    
            this.personagensSelecionados.splice(0, this.personagensSelecionados.length)
    
            this.render()
        })
    }
}

