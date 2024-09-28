function getComputerChoice(){
    let max = 3
    let choiceNum = Math.ceil(Math.random()*max);
    switch(choiceNum){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "none";
        
    }

}

function getHumanChoice(){
    let choice = prompt("Enter rock/paper/scissors: ");
    let choiceNew = choice.toLowerCase();
    switch(choiceNew){
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            return "none";
        
    }
}



function playGame(rounds = 5){
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice){
        if ((humanChoice=="rock")&&(computerChoice=="paper")){
            
            computerScore += 1;
            console.log("You lose! Paper wraps Rock.");
        } else if ((humanChoice=="paper")&&(computerChoice=="scissors")){
            
            computerScore += 1;
            console.log("You lose! Scissors cut Paper.");
        } else if ((humanChoice=="scissors")&&(computerChoice=="rock")){
            
            computerScore += 1;
            console.log("You lose! Rock beats Scissors.");
        } else {
            humanScore += 1;
            console.log("You win!");
        }
    }

    for (let i=rounds; i>0; i--){
        playRound(getComputerChoice(), getHumanChoice());
        console.log(`Current score: \nYour Score = ${humanScore}\nComputer Score = ${computerScore}`);

    }


}

playGame();
