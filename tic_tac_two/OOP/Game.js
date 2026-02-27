let createGame = (table) => {
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

    return {
        table: table,
        currentPlayer: "X",
        winner: null,
        isGameOver: false,
        makeMove: function(index) {
            if (this.isGameOver) {
                return { valid: false, reason: "Game is over" };
            }

            if (index < 0 || index > 8) {
                return { valid: false, reason: "Invalid cell index" };
            }

            if (this.table.getCell(index) !== null) {
                return { valid: false, reason: "Cell already occupied" };
            }

            this.table.setCell(index, this.currentPlayer);

            if (this.checkWin(this.currentPlayer)) {
                this.winner = this.currentPlayer;
                this.isGameOver = true;
                return {
                    valid: true,
                    winner: this.winner,
                    isDraw: false,
                    currentPlayer: this.currentPlayer
                };
            }

            if (this.checkDraw()) {
                this.isGameOver = true;
                return {
                    valid: true,
                    winner: null,
                    isDraw: true,
                    currentPlayer: this.currentPlayer
                };
            }

            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";

            return {
                valid: true,
                winner: null,
                isDraw: false,
                currentPlayer: this.currentPlayer
            };
        },
        checkWin: function(playerSymbol) {
            return winningCombinations.some(([a, b, c]) => {
                return (
                    this.table.getCell(a) === playerSymbol &&
                    this.table.getCell(b) === playerSymbol &&
                    this.table.getCell(c) === playerSymbol
                );
            });
        },
        checkDraw: function() {
            return this.table.isFull() && this.winner === null;
        },
        resetGame: function() {
            this.table.reset();
            this.currentPlayer = "X";
            this.winner = null;
            this.isGameOver = false;
        },
        getCurrentPlayer: function() {
            return this.currentPlayer;
        }
    };
}