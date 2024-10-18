import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
     elementoMagico;
     levelMagico;
     inteligencia;
     static tipo = 'Mago';
     static descricao = "O mago é implacável!"

     constructor(nome, elementoMagico, levelMagico, inteligencia){
        super(nome);
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
     }

     obterInsignia(){
        if(this.levelMagico >= 5 && this.inteligencia >= 5){
            return `Mestre do ${this.elementoMagico}`;
        } else {
            return super.obterInsignia();
        }
     }
}