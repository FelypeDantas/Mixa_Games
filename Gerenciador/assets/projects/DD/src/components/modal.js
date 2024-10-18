const fundo = document.getElementById('fundo-modal')
const modal = document.getElementById('modal');
const mensagemModal = modal.querySelector('.mensagem')
const botaoFechar = document.getElementById('fechar-botao');

const removerModal = () => {
    fundo.classList.remove('visivel');
    modal.classList.remove('visivel');
}

botaoFechar.addEventListener('click', removerModal);
fundo.addEventListener('click', removerModal);

export const mostrarModal = (mensagem = '') => {
    mensagemModal.innerText = mensagem;
    modal.classList.add('visivel');
    fundo.classList.add('visivel');
}