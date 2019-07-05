
var computerSelection = document.querySelector('.compOutput');

function compSelection() {

    let randomNumber = Math.random() * 3;
    console.log(randomNumber);

    if (randomNumber < 1) {
        computerSelection.textContent = 'Rock';
        console.log('rock');
    } else if (randomNumber < 2) {
        computerSelection.textContent = 'Paper';
        console.log('paper');
    } else if (randomNumber <=3 ) {
        computerSelection.textContent = 'Scissors';
        console.log('scissors');
    } else {
        computerSelection.textContent = "Computer Selection Error"
    }

}
