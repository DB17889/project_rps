
// BUTTON CLICK EVENT LISTENER

document.addEventListener('click', playerPicked);       // Adds an event listener to the whole document looking for a click, then running the function if a click is found.
document.addEventListener('click', resetScores);        // ...as above but for reset scores only.

// DEFAULT VARIABLES

let PScore = 0;
let CScore = 0;


// PLAYER SELECTION

let playerSelection = document.querySelector('.playerOutput');

function playerPicked(btnclck) {                                    

    if (btnclck.target.classList.contains("btn") && (PScore < 5 && CScore < 5)){                      // Only runs the function if the click is against a html class that contains 'btn'.
        
        if (btnclck.target.value === 'rock') {
            playerSelection.textContent = 'You selected: Rock';
            playRound("rock", compPicked());
            updateScores(PScore, CScore);
            finishGame(PScore, CScore);
        } else if (btnclck.target.value === 'paper') {
            playerSelection.textContent = 'You selected: Paper';
            playRound("paper", compPicked());
            finishGame(PScore, CScore);
            updateScores(PScore, CScore);
        } else if (btnclck.target.value === 'scissors') {
            playerSelection.textContent = 'You selected: Scissors';
            playRound("scissors", compPicked());
            updateScores(PScore, CScore);
            finishGame(PScore, CScore);
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
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);

        if (playerSelection === 'rock') {
            if (computerSelection === 'rock') {
                roundOutput.textContent = 'It\'s a draw';
            } else if (computerSelection === 'paper') {
                roundOutput.textContent = 'Paper beats Rock! You Lose!';
                CScore ++;
            } else if (computerSelection === 'scissors') {
                roundOutput.textContent = 'Rock beats Scissors! You Win!';
                PScore ++;
            } else {
                console.log('Error 3');
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                roundOutput.textContent = 'Paper beats Rock! You Win!';
                PScore ++;
            } else if (computerSelection === 'paper') {
                roundOutput.textContent = 'It\'s a draw';
            } else if (computerSelection === 'scissors') {
                roundOutput.textContent = 'Scissors beats Paper! You Lose!';
                CScore ++;
            } else {
                console.log('Error 4');
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                roundOutput.textContent = 'Rock beats Scissors! You Lose!';
                CScore ++;
            } else if (computerSelection === 'paper') {
                roundOutput.textContent = 'Scissors beats Paper! You Win!';
                PScore ++;
            } else if (computerSelection === 'scissors') {
                roundOutput.textContent = 'It\'s a draw';
            } else {
                console.log('Error 5');
            }
        }
    }

let roundOutput = document.querySelector('.roundOutput');


// UPDATES SCORES

let playerScore = document.querySelector('.playerScore');
let compScore = document.querySelector('.compScore');

function updateScores(PScore, CScore) { 

    if (PScore >= 0 || CScore >= 0) { 

        playerScore.textContent = 'Players Score: ' + PScore;
        compScore.textContent = 'Computer Score: ' + CScore;
    }
}


// FINISH THE GAME

let gameStatus = document.querySelector('.gameStatus');

function finishGame(PScore, CScore) {

    if (PScore === 5 && CScore < 5) {
        gameStatus.textContent = 'Player Wins';
        console.log('Player Wins');
    } else if (PScore <5 && CScore === 5) {
        gameStatus.textContent = 'Computer Wins';
        console.log('Computer Wins');
    }
}


// RESET SCORES 

function resetScores(resetclck) {

    if (resetclck.target.classList.contains("resetGame")) {    
        console.log('clicked');
        PScore = 0;
        CScore = 0;
        playerSelection.textContent = '';
        computerSelection.textContent = '';
        roundOutput.textContent = '';
        playerScore.textContent = '';
        compScore.textContent = '';
    } 
}