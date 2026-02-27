let createTable = () => {
    return {
        board: [null, null, null, null, null, null, null, null, null],
        getCell: function(index) {
            return this.board[index];
        },
        setCell: function(index, value) {
            this.board[index] = value;
        },
        reset: function() {
            this.board = [null, null, null, null, null, null, null, null, null];
        },
        isFull: function() {
            return this.board.every(cell => cell !== null);
        }
    }
}