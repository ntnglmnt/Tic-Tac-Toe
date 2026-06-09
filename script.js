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
    },
    WinnerPlayerOne: function check(){
        if(this.board[0] == 'X' && this.board[1] == 'X' && this.board[2] == 'X'){
            console.log('John wins')
        }
        else if(this.board[3] == 'X' && this.board[4] == 'X' && this.board[5] == 'X'){
            console.log('John wins')
        }
        else if(this.board[6] == 'X' && this.board[7] == 'X' && this.board[8] == 'X'){
            console.log('John wins')
        }
        else if(this.board[0] == 'X' && this.board[3] == 'X' && this.board[6] == 'X'){
            console.log('John wins')
        }
        else if(this.board[1] == 'X' && this.board[4] == 'X' && this.board[7] == 'X'){
            console.log('John wins')
        }
        else if(this.board[2] == 'X' && this.board[5] == 'X' && this.board[8] == 'X'){
            console.log('John wins')
        }
        else if(this.board[0] == 'X' && this.board[4] == 'X' && this.board[8] == 'X'){
            console.log('John wins')
        }
        else if(this.board[2] == 'X' && this.board[4] == 'X' && this.board[6] == 'X'){
            console.log('John wins')
        }
        else {
            return false
        }
        
    },

    WinnerPlayerTwo: function check(){
        if(this.board[0] == 'O' && this.board[1] == 'O' && this.board[2] == 'O'){
            console.log('Doe wins')
        }
        else if(this.board[3] == 'O' && this.board[4] == 'O' && this.board[5] == 'O'){
            console.log('Doe wins')
        }
        else if(this.board[6] == 'O' && this.board[7] == 'O' && this.board[8] == '0'){
            console.log('Doe wins')
        }
        else if(this.board[0] == 'O' && this.board[3] == 'O' && this.board[6] == 'O'){
            console.log('Doe wins')
        }
        else if(this.board[1] == 'O' && this.board[4] == 'O' && this.board[7] == 'O'){
            console.log('Doe wins')
        }
        else if(this.board[2] == 'O' && this.board[5] == 'O' && this.board[8] == 'O'){
            console.log('Doe wins')
        }
        else if(this.board[0] == 'O' && this.board[4] == 'O' && this.board[8] == 'O'){
            console.log('Doe wins')
        }
        else if(this.board[2] == 'O' && this.board[4] == 'O' && this.board[6] == 'O'){
            console.log('Doe wins')
        }
        else {
            return false
        }
    },
    drawGame: function check() {
        let playerOneCondition = gameBoard.WinnerPlayerOne()
        let playerTwoCondition = gameBoard.WinnerPlayerTwo()

        if (playerOneCondition === false & playerTwoCondition === false){
            console.log('Draw')
        }
    }};

const checkResult = () => {
    return gameBoard.WinnerPlayerOne(), gameBoard.WinnerPlayerTwo(), gameBoard.drawGame()
}

// WINNER PLAYER ONE SCENARIO

gameBoard.gameplay('John', 0)
gameBoard.gameplay('Doe', 3)
gameBoard.gameplay('John', 4)
gameBoard.gameplay('Doe', 5)
gameBoard.gameplay('John', 8)

//DRAW SCENARIO
// gameBoard.gameplay('John', 0)
// gameBoard.gameplay('Doe', 1)
// gameBoard.gameplay('John', 2)
// gameBoard.gameplay('Doe', 3)
// gameBoard.gameplay('John', 5)
// gameBoard.gameplay('Doe', 4)
// gameBoard.gameplay('John', 6)
// gameBoard.gameplay('Doe', 8)
// gameBoard.gameplay('John', 7)
checkResult()





