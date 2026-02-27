// thinking as a main.js file that ties everything together
const table = createTable();
const game = createGame(table);

const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

const cells = [];

function getStatusText() {
  if (game.winner) {
    return `Player ${game.winner} wins!`;
  }

  if (game.isGameOver && !game.winner) {
    return 'It is a draw!';
  }

  return `Current turn: ${game.getCurrentPlayer()}`;
}

function render() {
  for (let i = 0; i < 9; i++) {
    const value = table.getCell(i);
    cells[i].textContent = value ?? '';
    cells[i].disabled = value !== null || game.isGameOver;
  }

  statusEl.textContent = getStatusText();
}

function handleCellClick(index) {
  game.makeMove(index);
  render();
}

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cell';
    button.addEventListener('click', () => handleCellClick(i));
    boardEl.appendChild(button);
    cells.push(button);
  }
}

resetBtn.addEventListener('click', () => {
  game.resetGame();
  render();
});

createBoard();
render();
