const choice = ['rock', 'paper', 'scissors'];

// computer choice

function getComputerChoice() {
    const option = choice[Math.floor(Math.random() *choice.length)];
    return option;
}
getComputerChoice();

// human choice

function getHumanChoice() {
    let validateInput = false;
    while(validateInput == false) {
        const newOption = prompt("rock,paper,scissors");
        if (newOption == null) {
            continue;
        } 
        const choiceInLower = newOption.toLowerCase();
        if(choice.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
}
getHumanChoice();

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
      return 'tie'
    } else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        return "player";
    } else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result === "tie") {
        return "It's draw";
    } else if(result === "player") {
        return `You won. ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose.${computerSelection} beats ${playerSelection}`
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)  {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "player"){
            humanScore++
        } else if(checkWinner(playerSelection, computerSelection)== "computer") {
            computerScore++
        }
    }
    console.log("Game over");
    if(humanScore > computerScore) {
        alert("You win the Match :)");
    } else if(computerScore > humanScore) {
        alert("You lost the match :(");
    } else {
        alert("it's a tie!");
    }
}

playGame();