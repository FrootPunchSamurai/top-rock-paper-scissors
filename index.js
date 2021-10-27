function userChoice() {
    const userChoice = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
    return userChoice
  }


function computerChoice() {
    let computerChoice = (Math.random()*3)

    if((computerChoice >= 0) && (computerChoice < 1)){
        return "rock";
    }
    else if((computerChoice >= 1) && (computerChoice < 2)){
        return "paper";
    }
    else{
        return "scissors";
    }
  }

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        // console.log("Draw , no one wins");
        return -1;
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        // console.log("You Lose, you chose rock computer chose scissors");
        return 0;
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        // console.log("You win , you chose rock computer chose paper");
        return 1;

    }

    if(playerSelection == "paper" && computerSelection == "scissors"){
        // console.log("You Lose, you chose paper computer chose scissors");
        return 0;

    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        // console.log("You win , you chose paper computer chose rock");
        return 1;

    }

    if(playerSelection == "scissors" && computerSelection == "paper"){
        // console.log("You win , you chose scissors computer chose paper");
        return 1;

    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        // console.log("You Lose , you chose scissors computer chose rock");
        return 0;

    }
}

function game(){

    let cscore = 0, pscore = 0;

    for (let i = 1; i <= 5; i++) {

        let playerSelection = userChoice();
        let computerSelection = computerChoice();
        let status = playRound(playerSelection, computerSelection);

        if(status == -1){
            console.log("Draw , no one wins");
        }

        if(status == 0){
            console.log("You Lost this round");
            cscore++;
        }

        if(status == 1){
            console.log("You won this round");
            pscore++;
        }

    }

    console.log("You Scored " + pscore + " Computer Scored " + cscore);

    if(pscore > cscore){
        console.log("You win");
    }

    else if(pscore == cscore){
        console.log("Draw");
    }

    else{
        console.log("You Lose");
    }

}

game();


