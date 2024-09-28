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

    function playRound() {
        let humanChoice;
        
        const divButton = document.querySelector('#buttons');

        divButton.addEventListener("click", function (e) {
            humanChoice = e.target.id;
            
            while (humanChoice == null){};
            if (humanChoice != null) {
                let computerChoice = getComputerChoice();

                // display div
                const divRead = document.querySelector(".result");
                const divNewHuman = document.createElement("h5");
                const divNewComputer = document.createElement("h5");
                divNewHuman.textContent = `Your Choice: ${humanChoice.toUpperCase()}`;
                divNewComputer.textContent = `Computer Choice: ${computerChoice.toUpperCase()}`;
                divRead.appendChild(divNewHuman);
                divRead.appendChild(divNewComputer);


                if (humanChoice == computerChoice){
                    console.log("Tie!");
                } else if ((humanChoice == "rock") && (computerChoice == "paper")) {

                    computerScore += 1;
                    console.log("You lose! Paper wraps Rock.");
                } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        
                    computerScore += 1;
                    console.log("You lose! Scissors cut Paper.");
                } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        
                    computerScore += 1;
                    console.log("You lose! Rock beats Scissors.");
                } else {
                    humanScore += 1;
                    console.log("You win!");
                }
                
            }

        });

        

        
    }
    playRound();

    

    


}



playGame();
