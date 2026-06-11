const Players = {
    playerOne: {
        name: 'Player 1',
        mark: 'X'
    },
    playerTwo: {
        name: 'Player 2',
        mark: 'O'
    }
}
console.log(Players)

const gameBoard = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    
    gameplay: function play(player, boardSquare) {
        let i = boardSquare
        

        if (player == 'Player 1') {
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
            console.log('Player 1 wins')
        }
        else if(this.board[2] == 'X' && this.board[4] == 'X' && this.board[6] == 'X'){
            console.log('John wins')
        }
        else {
            return false
        }
        
    },

    WinnerPlayerTwo: function check() {
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

const gameController = {
    board: function generateBoard () {
        const gameBox = document.createElement('div')
        document.body.appendChild(gameBox)
        const board = document.createElement('div')
        board.classList.add('board')
        gameBox.appendChild(board)
        function createBoardCell () {
            for (let i=1; i<= 9; i++) {
                const square = document.createElement('div')
                board.appendChild(square)
            }
        }
        createBoardCell()
    },
}


let gameInitialization = gameController.board
gameInitialization()











// // WINNER PLAYER ONE SCENARIO
// gameBoard.gameplay('Player 1', 0)
// gameBoard.gameplay('Player 2', 3)
// gameBoard.gameplay('Player 1', 4)
// gameBoard.gameplay('Player 2', 5)
// gameBoard.gameplay('Player 1', 8)

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





