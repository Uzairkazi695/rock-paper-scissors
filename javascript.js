const container = document.querySelector(".container");
const playerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const playerScore = document.getElementById("playerScore");
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
let result = document.getElementById("result");
const btn = document.querySelectorAll('button')
let humanScore = 0
let computerScore = 0
let maxRound = 5

const choice = ["rock", "paper", "scissors"];

let computerSelection;
rock.addEventListener('click', ()=>{
    computerSelection = choice[Math.floor(Math.random() * 3)];
    if(computerSelection === 'rock'){
        displayMessage("it's a tie")
    } else if(computerSelection === 'paper') {
        computerScore++
        displayMessage(`Computer win because computer selection was ${computerSelection}`)
    } else {
        humanScore++
        displayMessage(`You win the game because computer selection was ${computerSelection}`)
    }
    finalResult()
    endGame()
})
paper.addEventListener('click', ()=>{
    computerSelection = choice[Math.floor(Math.random() * 3)];
    if(computerSelection === 'paper'){
        displayMessage("it's a tie")
    } else if(computerSelection === 'scissors') {
        computerScore++
        displayMessage(`Computer win because computer selection was ${computerSelection}`)
    } else {
        humanScore++
        displayMessage(`You win the game because computer selection was ${computerSelection}`)
    }
    finalResult()
    endGame()
        
    
})
scissors.addEventListener('click', ()=>{
    computerSelection = choice[Math.floor(Math.random() * 3)];
    if(computerSelection === 'scissors'){
        displayMessage("it's a tie")
    } else if(computerSelection === 'rock') {
        computerScore++
        displayMessage(`Computer win because computer selection was ${computerSelection}`)
    } else {
        humanScore++
        displayMessage(`You win the game because computer selection was ${computerSelection}`)
    }
    finalResult()
    endGame()
    
    
})
function finalResult() {
    if((humanScore + computerScore) === maxRound) {
        btn.forEach((e)=>{
            e.disabled = true
            setTimeout(()=>{
                e.disabled = false
            },2000)
        })
        if(humanScore > computerScore) {
            result.textContent = 'You won the round best out of 5'
        } else if(computerScore > humanScore) {
            result.textContent = 'You lose the round best out of 5'
        } else {
            result.textContent = 'It is a tie'
        }
    }  
}
function endGame() {
    if((humanScore + computerScore)=== maxRound) {
        setTimeout(()=>{
            humanScore = 0;
            computerScore = 0;
            displayMessage('Restart the game')
            result.textContent = ''
        },2000)
    }
    
}


function displayMessage(message) {
    playerDisplay.innerHTML = `<p>${message}</P>`
    ComputerDisplay.innerHTML = computerScore
    playerScore.innerHTML = humanScore
}

