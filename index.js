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
        console.log("Draw , no one wins");
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Lose, you chose rock computer chose scissors");
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You win , you chose rock computer chose paper");
    }

    if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose, you chose paper computer chose scissors");
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win , you chose paper computer chose rock");
    }

    if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win , you chose scissors computer chose paper");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose , you chose scissors computer chose rock");
    }
}

let playerSelection = userChoice();
let computerSelection = computerChoice();

playRound(playerSelection, computerSelection);