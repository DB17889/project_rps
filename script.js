
// COMPUTER SELECTION

let computerSelection = document.querySelector('.compOutput');

function compPicked() {

    let randomNumber = Math.random() * 3;
    console.log(randomNumber);

    if (randomNumber < 1) {
        computerSelection.textContent = 'Computer selected: Rock';
        console.log('rock');
    } else if (randomNumber < 2) {
        computerSelection.textContent = 'Computer selected: Paper';
        console.log('paper');
    } else if (randomNumber <=3 ) {
        computerSelection.textContent = 'Computer selected: Scissors';
        console.log('scissors');
    } else {
        computerSelection.textContent = "Computer Selection Error"
    }

}

// PLAYER SELECTION

let playerSelection = document.querySelector('.playerOutput');
let selected = document.querySelector('button');

selected.addEventListener('click', playerPicked);

function playerPicked() {
    
    let choice = selected.value;

    if (choice === 'rock') {
        playerSelection.textContent = 'You selected: Rock';
    } else if (choice === 'paper') {
        playerSelection.textContent = 'You selected: Paper';
    } else if (choice === 'scissors') {
        playerSelection.textContent = 'You selected: Scissors';
    } else {
        playerSelection.textContent = "Player Selection Error"
    }

}