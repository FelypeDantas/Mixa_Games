let tabuleiro = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let jogadorAtual = -2; // -2 para X, -3 para O
  let contador = 0;
  const board = document.getElementById("game-board");
  const status = document.getElementById("status");
  
  function criarTabuleiro() {
    board.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const valor = tabuleiro[i][j];
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.linha = i;
        cell.dataset.coluna = j;
        cell.textContent = simbolo(valor);
        cell.onclick = () => jogar(i, j);
        board.appendChild(cell);
      }
    }
  }
  
  function simbolo(valor) {
    if (valor === -2) return "X";
    if (valor === -3) return "O";
    return "";
  }
  
  function jogar(linha, coluna) {
    if (typeof tabuleiro[linha][coluna] !== "number") return;
  
    tabuleiro[linha][coluna] = jogadorAtual;
    contador++;
    criarTabuleiro();
  
    if (verificarVitoria()) {
      status.textContent = jogadorAtual === -2 ? "1º Jogador (X) venceu!" : "2º Jogador (O) venceu!";
      desativarTabuleiro();
      return;
    }
  
    if (contador === 9) {
      status.textContent = "Empate!";
      return;
    }
  
    jogadorAtual = jogadorAtual === -2 ? -3 : -2;
    status.textContent = jogadorAtual === -2 ? "Vez do Jogador X" : "Vez do Jogador O";
  }
  
  function verificarVitoria() {
    const soma = (a, b, c) => a + b + c;
  
    const linhas = tabuleiro;
    const colunas = [0, 1, 2].map(i => [tabuleiro[0][i], tabuleiro[1][i], tabuleiro[2][i]]);
    const diagonais = [
      [tabuleiro[0][0], tabuleiro[1][1], tabuleiro[2][2]],
      [tabuleiro[0][2], tabuleiro[1][1], tabuleiro[2][0]]
    ];
  
    const todas = [...linhas, ...colunas, ...diagonais];
    return todas.some(linha => soma(...linha) === -6 || soma(...linha) === -9);
  }
  
  function desativarTabuleiro() {
    document.querySelectorAll(".cell").forEach(cell => {
      cell.onclick = null;
    });
  }
  
  function reiniciarJogo() {
    tabuleiro = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    jogadorAtual = -2;
    contador = 0;
    status.textContent = "Vez do Jogador X";
    criarTabuleiro();
  }
  
  criarTabuleiro();
  status.textContent = "Vez do Jogador X";
  