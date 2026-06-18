function Player(name, mark) {
    this.name = name;
    this.mark = mark;
}

const scoreDisplay = document.createElement('div')
scoreDisplay.classList.add('score')
scoreDisplay.textContent = ''
document.body.appendChild(scoreDisplay)

function check(arr, counter) {

    let playerOneWon = false
    let playerTwoWon = false
    let draw = false

    if (arr[0].textContent == arr[1].textContent && arr[0].textContent == arr[2].textContent && arr[0].textContent != '' && arr[1].textContent != '' && arr[2].textContent != '') {

        let mark = arr[0].textContent
        if (mark == 'X') {

            console.log(gameController.playerOne.name)
            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else if (mark == 'O') {
            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }
    }
    else if (arr[3].textContent == arr[4].textContent && arr[4].textContent == arr[5].textContent && arr[3].textContent != '' && arr[4].textContent != '' && arr[5].textContent != '') {

        let mark = arr[3].textContent

        if (mark == 'X') {

            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else {

            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }
    }
    else if (arr[6].textContent == arr[7].textContent && arr[7].textContent == arr[8].textContent && arr[6].textContent != '' && arr[7].textContent != '' && arr[8].textContent != '') {

        let mark = arr[6].textContent

        if (mark == 'X') {

            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else {

            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }
    }
    else if (arr[0].textContent == arr[3].textContent && arr[3].textContent == arr[6].textContent && arr[0].textContent != '' && arr[3].textContent != '' && arr[6].textContent != '') {

        let mark = arr[0].textContent
        if (mark == 'X') {

            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else {

            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }
    }
    else if (arr[1].textContent == arr[4].textContent && arr[4].textContent == arr[7].textContent && arr[1].textContent != '' && arr[4].textContent != '' && arr[7].textContent != '') {

        let mark = arr[4].textContent
        if (mark == 'X') {

            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else {

            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }
    }
    else if (arr[2].textContent == arr[5].textContent && arr[5].textContent == arr[8].textContent && arr[2].textContent != '' && arr[5].textContent != '' && arr[8].textContent != '') {

        let mark = arr[2].textContent
        if (mark == 'X') {

            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else {

            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }

    }
    else if (arr[0].textContent == arr[4].textContent && arr[4].textContent == arr[8].textContent && arr[0].textContent != '' && arr[4].textContent != '' && arr[8].textContent != '') {

        let mark = arr[0].textContent

        if (mark == 'X') {

            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else {

            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }
    }
    else if (arr[2].textContent == arr[4].textContent && arr[4].textContent == arr[6].textContent && arr[2].textContent != '' && arr[4].textContent != '' && arr[6].textContent != '') {

        let mark = arr[2].textContent

        if (mark == 'X') {

            scoreDisplay.textContent = gameController.playerOne.name + ' has won'
            return playerOneWon = true
        }
        else {

            scoreDisplay.textContent = gameController.playerTwo.name + ' has won'
            return playerTwoWon = true
        }
    }
    else if (counter == 9 && playerOneWon == false && playerTwoWon == false) {

        scoreDisplay.textContent = ' Draw, reset the game and try again'
    }
}


const gameController = {

    playerOne: new Player('', 'X'),

    playerTwo: new Player('', '0'),


    board: function generateBoard() {
        const gameBox = document.createElement('div')
        document.body.appendChild(gameBox)
        const board = document.createElement('div')
        board.classList.add('board')
        gameBox.appendChild(board)

        function createBoardCell() {

            for (let i = 0; i <= 8; i++) {
                const square = document.createElement('div')
                board.appendChild(square)
                square.classList.add('square')
                square.style.width = `${680 / 3}px`
                square.style.height = `${680 / 3}px`
                square.style.border = '1px solid black'
                square.style.fontSize = '150px'
            }

        }
        createBoardCell()
    },

    boardCell: function groupSquares(arg) {

        let playerOnePlayed = 0;
        let playerTwoPlayed = 0;
        let drawCounter = 0;

        const allSquares = document.querySelectorAll('.square')

        if (arg == 'start') {
            allSquares.forEach((square) => {
            square.addEventListener('click', () => {
                let boardToArray = Array.from(allSquares)
                
                    if (square.textContent === '') {
                        if (playerOnePlayed == playerTwoPlayed) {
                            square.textContent = 'X'
                            drawCounter++
                            playerOnePlayed++
                            check(boardToArray, drawCounter)


                        } else if (playerOnePlayed > playerTwoPlayed && square.textContent != 'X' || square.textContent != 'O') {
                            square.textContent = 'O'
                            drawCounter++
                            playerTwoPlayed++
                            check(boardToArray, drawCounter)
                        }
                    }
                    else {
                        console.log('Invalid Action')
                    }
                })
                
            })}
            else if (arg == 'reset') {
                console.log('check')
            allSquares.forEach((square) => {
                
                window.location.reload()

            })    
            }
        },

    form: function startGame(boardCellArg) {

        let gameInitialization = gameController.board
        gameInitialization()

        let playerOneInput = document.getElementById('playerNameOne')
        let playerTwoInput = document.getElementById('playerNameTwo')
        scoreDisplay.innerHTML = playerOneInput.value + ' VS ' + playerTwoInput.value
        return gameController.playerOne.name = playerOneInput.value, gameController.playerTwo.name = playerTwoInput.value
    },

}

const startBtn = document.createElement('button')
startBtn.classList.add('start')
startBtn.textContent = 'Start'
startBtn.addEventListener('click', () => {
    let startForm = gameController.form
    let startGame = gameController.boardCell
    startForm()
    startGame('start')
})

document.body.appendChild(startBtn)

const reset = document.createElement('button')
reset.textContent = 'Reset'
reset.addEventListener('click', () => {
    let resetGame = gameController.boardCell
    resetGame('reset')
})
document.body.appendChild(reset)



