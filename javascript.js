function getComputerChoice(a) {
    Math.random(Math.floor() * 3) +1;
    if(a === 1) {
        a="Rock";
    } else if(a === 2) {
        a ==="Paper";
    } else {
        a === "Scissors"
    }
}
let choose = prompt("Rocs, Paper, Scissors")

function getHumanChoice(b) {
    if(b === 1) {
        b="Rock";
    } else if(b === 2) {
        b ==="Paper";
    } else {
        b === "Scissors"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'Rock' && computerChoice === 'Rock') {
        return ''
    }
}