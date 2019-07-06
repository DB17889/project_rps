

document.addEventListener('click', playerPicked);                       // Adds an event listener to the whole document looking for a click, then running the function if a click is found.

// PLAYER SELECTION

let playerSelection = document.querySelector('.playerOutput');

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
            console.log('Error 1');
        }
    }
}


// COMPUTER SELECTION

let computerSelection = document.querySelector('.compOutput');

function compPicked() {

    let randomNumber = Math.random() * 3;
    //console.log(randomNumber);  - remove after testing

    if (randomNumber < 1) {
        computerSelection.textContent = 'Computer selected: Rock';
        return 'rock';
        //console.log('rock'); - remove after testing
    } else if (randomNumber < 2) {
        computerSelection.textContent = 'Computer selected: Paper';
        return 'paper';
        //console.log('paper'); - remove after testing
    } else if (randomNumber <=3 ) {
        computerSelection.textContent = 'Computer selected: Scissors';
        return 'scissors'
        //console.log('scissors'); - remove after testing
    } else {
        console.log('Error 2');
    }

}






// PLAY ONE ROUND

function startRound(btnclck) {
    if (btnclck.target.classList.contains("btn")){  
        playRound;
        scores;
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);

        if (playerSelection === 'rock') {
            if (computerSelection === 'rock') {
                roundOutput.textContent = 'It\'s a draw';
            } else if (computerSelection === 'paper') {
                roundOutput.textContent = 'Paper beats Rock! You Lose!';
            } else if (computerSelection === 'scissors') {
                roundOutput.textContent = 'Rock beats Scissors! You Win!';
            } else {
                console.log('Error 3');
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                roundOutput.textContent = 'Paper beats Rock! You Win!'
            } else if (computerSelection === 'paper') {
                roundOutput.textContent = 'It\'s a draw';
            } else if (computerSelection === 'scissors') {
                roundOutput.textContent = 'Scissors beats Paper! You Lose!'
            } else {
                console.log('Error 4');
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                roundOutput.textContent = 'Rock beats Scissors! You Lose!'
            } else if (computerSelection === 'paper') {
                roundOutput.textContent = 'Scissors beats Paper! You Win!'
            } else if (computerSelection === 'scissors') {
                roundOutput.textContent = 'It\'s a draw';
            } else {
                console.log('Error 5');
            }
        }
    }

let roundOutput = document.querySelector('.roundOutput');
let playerScore = document.querySelector('.playerScore');
let compScore = document.querySelector('.compScore');



// KEEPING SCORE - CANT GET THIS TO WORK!

let PScore = '1';
let CScore = '0';

function scores() {
    if (PScore > 1 || CScore > 1) {  
        playerScore.textContent = 'Player Score: ' + PScore;
        compScore.textContent = 'Computer Score: ' + CScore;
    }
}

