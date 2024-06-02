const container = document.querySelector(".container");
const playerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const playerScore = document.getElementById("playerScore");
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
let result = document.getElementById("result");
let humanScore = 0
let computerScore = 0
let maxRound = 5

const choice = ["rock", "paper", "scissors"];

const computerSelection = choice[Math.floor(Math.random() * 3)];

rock.addEventListener('click', ()=>{
    if(computerSelection === 'rock'){
        displayMessage("it's a tie")
    } else if(computerSelection === 'paper') {
        displayMessage('Computer win because your selection was rock')
        computerScore++
    } else {
        displayMessage(`You win the game because computer selection was ${computerSelection}`)
        humanScore++
    }
    finalResult()

    endGame()
})
paper.addEventListener('click', ()=>{
    if(computerSelection === 'paper'){
        displayMessage("it's a tie")
    } else if(computerSelection === 'scissors') {
        displayMessage('Computer win because your selection was paper')
        computerScore++
    } else {
        displayMessage(`You win the game because computer selection was ${computerSelection}`)
        humanScore++
    }
    finalResult()

    endGame()
})
scissors.addEventListener('click', ()=>{
    if(computerSelection === 'scissors'){
        displayMessage("it's a tie")
    } else if(computerSelection === 'rock') {
        displayMessage('Computer win because your selection was scissors')
        computerScore++
    } else {
        displayMessage(`You win the game because computer selection was ${computerSelection}`)
        computerScore++
    }
    finalResult()
    endGame()
})
function finalResult() {
    if((humanScore + computerScore) === maxRound) {
        if(humanScore > computerScore) {
            result.textContent = 'You won the round'
        } else if(computerScore > humanScore) {
            result.textContent = 'You lose the round'
        } else {
            result.textContent = 'It is a tie'
        }
    }
}
function endGame() {
    if((humanScore + computerScore)=== maxRound) {
        humanScore = 0;
        computerScore = 0;
        displayMessage('Restart the game')
    }
}


function displayMessage(message) {
    playerDisplay.innerHTML = `${message}`
    ComputerDisplay.innerHTML = humanScore
    playerScore.innerHTML = computerScore
}

