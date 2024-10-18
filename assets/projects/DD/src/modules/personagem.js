export class Personagem {
    nome
    vida
    mana
    #level
    tipo
    descricao

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
        this.vida = 100;
        this.mana = 100;
    }

    aumentarLevel() {
        this.level += 1;
    }

    diminuirLevel() {
        this.level -= 1;
    }

    get level() {
        return this.#level;
    }

    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel;
        }
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacavel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        const resultado1 = personagem1.destreza || personagem1.forca || personagem1.inteligencia || 0;
        const resultado2 = personagem2.destreza || personagem2.forca || personagem2.inteligencia || 0;
    
        if (resultado1 === resultado2) {
            return 'Empate';
        }
        if (resultado1 > resultado2) {
            personagem1.adicionarVitoria();
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`;
        }
        personagem2.adicionarVitoria();
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`;
    }

    adicionarVitoria() {
        this.vitorias = (this.vitorias || 0) + 1;
        this.verificarNivel();
        this.salvarEstado();
    }
    
    verificarNivel() {
        if (this.vitorias >= 3) {
            this.aumentarLevel();
            this.vitorias = 0; // Reiniciar vitórias após aumentar nível
        }
    }
    
    salvarEstado() {
        localStorage.setItem(this.nome, JSON.stringify(this));
    }
    
    static carregarEstado(nome) {
        const dados = JSON.parse(localStorage.getItem(nome));
        if (dados) {
            const personagem = new this(dados.nome);
            personagem.vitorias = dados.vitorias || 0;
            personagem.level = dados.level || 1;
            // Defina atributos adicionais conforme necessário
            return personagem;
        }
        return null; // Retornar null se não houver estado salvo
    }

    static verificarReinicio() {
        const todosOsPersonagens = Object.keys(localStorage);
        const nivelBaixo = todosOsPersonagens.every(nome => {
            const personagem = Personagem.carregarEstado(nome);
            return personagem && personagem.level <= 2; // Defina seu critério de "baixo nível"
        });
    
        if (nivelBaixo) {
            todosOsPersonagens.forEach(nome => {
                const personagem = Personagem.carregarEstado(nome);
                personagem.level = 1; // Reiniciar nível
                personagem.vitorias = 0; // Reiniciar vitórias
                personagem.salvarEstado();
            });
        }
    }    
    
}    