
// PLAYER SELECTION

let playerSelection = document.querySelector('.playerOutput');

document.addEventListener('click', playerPicked);                   // Adds an event listener to the whole document looking for a click, then running the function if a click is found.

function playerPicked(btnclck) {                                    

    if (btnclck.target.classList.contains("btn")){                      // Only runs the function if the click is against a html class that contains 'btn'.
        
        if (btnclck.target.value === 'rock') {
            playerSelection.textContent = 'You selected: Rock';
            playRound("rock", compPicked());
        } else if (btnclck.target.value === 'paper') {
            playerSelection.textContent = 'You selected: Paper';
            playRound("paper", compPicked());
        } else if (btnclck.target.value === 'scissors') {
            playerSelection.textContent = 'You selected: Scissors';
            playRound("scissors", compPicked());
        } else {
            playerSelection.textContent = 'Player Selection Error'
        }
    }
}

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

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
}