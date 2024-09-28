function getComputerChoice() {
    let max = 3
    let choiceNum = Math.ceil(Math.random() * max);
    switch (choiceNum) {
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



function getHumanChoice() {
    let humanChoice;
    const divButton = document.querySelector('#buttons');

    divButton.addEventListener("click", function (e) {
        humanChoice = e.target.id;
        if (humanChoice != null) {
            // console.log(humanChoice);
            return humanChoice;
        }

    });


};



function playGame(rounds = 5) {
    let computerScore = 0;
    let humanScore = 0;
    let roundNum = 0;

    function playRound() {
        let humanChoice;
        
        const divButton = document.querySelector('#buttons');

        divButton.addEventListener("click", function (e) {
            humanChoice = e.target.id;
            
            while (humanChoice == null){};
            if (humanChoice != null) {
                let computerChoice = getComputerChoice();

                // display div
                const divOuter = document.querySelector(".result");
                const divRead = document.createElement("div");
                const divNewHuman = document.createElement("p");
                const divNewComputer = document.createElement("p");
                divNewHuman.textContent = `Your Choice: ${humanChoice.toUpperCase()}`;
                divNewComputer.textContent = `Computer Choice: ${computerChoice.toUpperCase()}`;
                divRead.appendChild(divNewHuman);
                divRead.appendChild(divNewComputer);

                const divScore = document.createElement("p");
                divRead.appendChild(divScore);


                if (humanChoice == computerChoice){
                    console.log("Tie!");
                    divScore.textContent = `Tie! Your Score: ${humanScore}    Computer Score: ${computerScore}`;
                } else if ((humanChoice == "rock") && (computerChoice == "paper")) {

                    computerScore += 1;
                    divScore.textContent = `You lose! Paper wraps Rock! Your Score: ${humanScore}    Computer Score: ${computerScore}`;
                    console.log("You lose! Paper wraps Rock.");
                } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        
                    computerScore += 1;
                    divScore.textContent = `You lose! Scissors cut Paper! Your Score: ${humanScore}    Computer Score: ${computerScore}`;
                    console.log("You lose! Scissors cut Paper.");
                } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        
                    computerScore += 1;
                    divScore.textContent = `You lose! Rock beats Scissors! Your Score: ${humanScore}    Computer Score: ${computerScore}`;
                    console.log("You lose! Rock beats Scissors.");
                } else {
                    humanScore += 1;
                    divScore.textContent = `You win! Your Score: ${humanScore}    Computer Score: ${computerScore}`;
                    console.log("You win!");
                }

                // divOuter.appendChild(divRead);
                divOuter.insertBefore(divRead, divOuter.firstChild);

                roundNum += 1;
                if ((humanScore == 5) || (computerScore == 5)){
                    const divResult = document.createElement("h1");
                    if(humanScore>computerScore){
                        
                        divResult.textContent = `You win!`;
                        
                        
                        
                    } else if (computerScore>humanScore){
                        
                        divResult.textContent = `You Lose!`;
                        
                        
                    } else {
                        
                        divResult.textContent = `Tie!`;
                        
                        
                    }
                    divOuter.insertBefore(divResult, divOuter.firstChild);
                    
                }
                
            }

        });

        

        
    }
    playRound();

    

    


}



playGame();
