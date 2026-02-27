const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const createInitialState = () => ({
  board: [null, null, null, null, null, null, null, null, null],
  currentPlayer: 'X',
  winner: null,
  isGameOver: false
});

const isValidIndex = (index) => index >= 0 && index < 9;

const checkWin = (board, symbol) =>
  winningCombinations.some(([a, b, c]) =>
    board[a] === symbol && board[b] === symbol && board[c] === symbol
  );

const checkDraw = (board) => board.every((cell) => cell !== null);

const makeMove = (state, index) => {
  if (state.isGameOver) {
    return { state, result: { valid: false, reason: 'Game is over' } };
  }

  if (!isValidIndex(index)) {
    return { state, result: { valid: false, reason: 'Invalid cell index' } };
  }

  if (state.board[index] !== null) {
    return { state, result: { valid: false, reason: 'Cell already occupied' } };
  }

  const nextBoard = state.board.map((cell, cellIndex) =>
    cellIndex === index ? state.currentPlayer : cell
  );

  if (checkWin(nextBoard, state.currentPlayer)) {
    return {
      state: {
        board: nextBoard,
        currentPlayer: state.currentPlayer,
        winner: state.currentPlayer,
        isGameOver: true
      },
      result: { valid: true, winner: state.currentPlayer, isDraw: false }
    };
  }

  if (checkDraw(nextBoard)) {
    return {
      state: {
        board: nextBoard,
        currentPlayer: state.currentPlayer,
        winner: null,
        isGameOver: true
      },
      result: { valid: true, winner: null, isDraw: true }
    };
  }

  const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';

  return {
    state: {
      board: nextBoard,
      currentPlayer: nextPlayer,
      winner: null,
      isGameOver: false
    },
    result: { valid: true, winner: null, isDraw: false }
  };
};

const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

let state = createInitialState();
const cells = [];

const getStatusText = (currentState) => {
  if (currentState.winner) {
    return `Player ${currentState.winner} wins!`;
  }

  if (currentState.isGameOver) {
    return 'It is a draw!';
  }

  return `Current turn: ${currentState.currentPlayer}`;
};

const render = () => {
  for (let i = 0; i < 9; i++) {
    const value = state.board[i];
    cells[i].textContent = value ?? '';
    cells[i].disabled = value !== null || state.isGameOver;
  }

  statusEl.textContent = getStatusText(state);
};

const handleCellClick = (index) => {
  const next = makeMove(state, index);
  state = next.state;
  render();
};

const createBoard = () => {
  for (let i = 0; i < 9; i++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cell';
    button.addEventListener('click', () => handleCellClick(i));
    boardEl.appendChild(button);
    cells.push(button);
  }
};

resetBtn.addEventListener('click', () => {
  state = createInitialState();
  render();
});

createBoard();
render();
