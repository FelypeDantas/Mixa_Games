import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago("Antonio", 4, "Fogo", 4, 3);
const magaJulia = new Mago("Julia", 8, "Gelo", 7, 10);
const brunoArqueiro = new Arqueiro("Bruno", 7, 8);
const arqueiroMagoChico = new ArqueiroMago("Chico", 7, 10, "Ar", 4, 8);
const guerreiroJorge = new Guerreiro('Jorge', 8);

const magoFelype = new Mago("Felype", 3, "Ar", 9, 9);
const arqueiroDavi = new Arqueiro("Davi", 6, 10);
const magaByanca = new Mago("Byanca", 10, "Trovão", 6, 8);
const guerreiroJoao = new Guerreiro('João', 5);
const ArqueiraDuda = new Arqueiro("Duda", 8);

const magoFabio = new Mago("Fábio", 7, "Água", 5, 6);
const magoLuiz = new Mago("Luiz", 1, "Invocação espirita", 7, 2);
const magoHenrique = new Mago("Henrique", 4, "Ilusão", 8, 2);
const magaLarissa = new Mago("Larissa", 6, "Necromância", 9, 9);
const magoKamado = new Mago("Kamado", 2, "Luz", 7, 3);
const magoDedalo = new Mago("Dedalo", 9, "Cera",8, 5);
const magaRoberta = new Mago("Roberta", 7, "Tempo", 7, 7);
const magaSabrina = new Mago("Sabrina", 8, "Manipulação Astral", 4, 5);
const ArqueiroPascal = new Arqueiro("Pascal", 2);
const ArqueiroVidal = new Arqueiro("Vidal", 6);
const ArqueiraPatricia = new Arqueiro("Patricia", 9);
const VitorArqueiro = new Arqueiro("Vitor", 8);
const IgorArqueiro = new Arqueiro("Igor", 10);
const KarenArqueira = new Arqueiro("Karen", 1);
const SebastiaoArqueiro = new Arqueiro("Sebastião", 9);
const leandroArqueiro = new Arqueiro("Leandro", 7);
const ledaArqueira = new Arqueiro("Leda", 9);
const mariaArqueira = new Arqueiro("Maria", 6);
const magoLucas = new Mago("Lucas", 6, "Areia", 2, 4);



const personagens = [magoAntonio, magaJulia, brunoArqueiro, arqueiroMagoChico, guerreiroJorge, magoFelype, 
    arqueiroDavi, magaByanca, guerreiroJoao, magoLucas, ArqueiraDuda, magoFabio, magoLuiz, magoHenrique, magaLarissa, magoKamado,
    magoDedalo, magaRoberta, magaSabrina, ArqueiroPascal, ArqueiroVidal, ArqueiraPatricia, VitorArqueiro, IgorArqueiro,
    KarenArqueira, SebastiaoArqueiro, leandroArqueiro, ledaArqueira, mariaArqueira,];

new PersonagemView(personagens).render();

