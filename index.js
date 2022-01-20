const buttons = document.querySelectorAll('button.btn');
const stat = document.getElementById('status');
const pscore = document.getElementById('player-score');
const cscore = document.getElementById('computer-score');
const winner = document.getElementById('round-winner');
const restart = document.getElementById('reset');

let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

pscore.textContent = `PLAYER: ${playerScore}`;
cscore.textContent = `COMPUTER: ${computerScore}`;

buttons.forEach(btn => {
    btn.addEventListener('click', getInput);
});

restart.addEventListener('click', restartGame)

function updateScore(){
    pscore.textContent = `PLAYER: ${playerScore}`;
    cscore.textContent = `COMPUTER: ${computerScore}`;
}

function disableButtons(){
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

function enableButtons(){
    restart.classList.add('hide');
    buttons.forEach(btn => {
        btn.disabled = false;
    });
}

function getInput(e) {
    stat.removeAttribute('class');
    let player = e.target.value;
    let computer = computerChoice();
    let result = playRound(player, computer);
    updateScore();

    if(result == 1){
        stat.classList.add('win');
    }

    if(result == 0){
        stat.classList.add('lose');
    }

    if(result == -1){
        stat.classList.add('draw');
    }

    if(computerScore == 5 || playerScore == 5){
        disableButtons();
        restart.removeAttribute('class');

        if(computerScore > playerScore){
            winner.textContent = "COMPUTER WON THIS ROUND";
        }

        else{
            winner.textContent = "PLAYER WON THIS ROUND";
        }
    }

}

function restartGame(){
    enableButtons();
    playerScore = 0;
    computerScore = 0;
    updateScore();
    winner.textContent = '';
    stat.textContent = '';
}

function computerChoice() {
    let computerChoice = (Math.random() * 3)

    if ((computerChoice >= 0) && (computerChoice < 1)) {
        return "rock";
    }
    else if ((computerChoice >= 1) && (computerChoice < 2)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        stat.textContent = "draw";
        return -1;
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        stat.textContent = "You Lose, you chose rock computer chose scissors";
        computerScore++;
        return 0;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        stat.textContent = "You win , you chose rock computer chose paper";
        playerScore++;
        return 1;

    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
        stat.textContent = "You Lose, you chose paper computer chose scissors";
        return 0;

    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        stat.textContent = "You win , you chose paper computer chose rock";
        playerScore++;
        return 1;

    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        stat.textContent = "You win , you chose scissors computer chose paper";
        playerScore++;
        return 1;

    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        stat.textContent = "You Lose , you chose scissors computer chose rock";
        computerScore++;
        return 0;

    }
}






