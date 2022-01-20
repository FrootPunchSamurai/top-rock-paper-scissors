const buttons = document.querySelectorAll('button');
const stat = document.getElementById('status');
const pscore = document.getElementById('player-score');
const cscore = document.getElementById('computer-score');
const winner = document.getElementById('round-winner');

let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

pscore.textContent = `PLAYER: ${playerScore}`;
cscore.textContent = `COMPUTER: ${computerScore}`;

buttons.forEach(btn => {
    btn.addEventListener('click', getInput);
});

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
    buttons.forEach(btn => {
        btn.disabled = false;
    });
}

function getInput(e) {
    let player = e.target.value;
    let computer = computerChoice();
    playRound(player, computer);
    updateScore();

    if(computerScore == 5 || playerScore == 5){
        disableButtons();
    }

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
        computerScore++;
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






