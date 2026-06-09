function Player(name, mark) {
    this.name = name;
    this.mark = mark;
}

const gameBoard = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    playerOne: new Player('John', 'X'),
    playerTwo: new Player('Doe', 'O'),
    gameplay: function play(player, boardSquare) {
        let i = boardSquare

        if (player == 'John') {
            this.board[i] = 'X'
            console.log(gameBoard.board)
        } else {
            this.board[i] = 'O'
            console.log(gameBoard.board)
        }
    }
};

gameBoard.gameplay('John', 0)
gameBoard.gameplay('Doe', 4)
gameBoard.gameplay('John', 6)
gameBoard.gameplay('Doe', 3)
gameBoard.gameplay('John', 5)
gameBoard.gameplay('Doe', 1)
gameBoard.gameplay('John', 7)
gameBoard.gameplay('Doe', 8)
gameBoard.gameplay('John', 2)





