// console.log("Hello, World")
function getComputerChoice(){
    if (Math.random()<= 0.34) {
        return "rock";
    } else if (Math.random()<= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

let choice = prompt("Enter choice here.");

function getHumanChoice(){
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

//console.log(getHumanChoice());

function checkWinner(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return "Tie";
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ){
        return "Player won";
    }
    else {
        return "Computer won";
    }
}

function playRound(humanChoice, computerChoice){
    const result = checkWinner(humanChoice, computerChoice);
    humanChoice.toLowerCase();
    if(result == "Tie"){
        return "It's a tie!"
    }
    else if(result == "Player won"){
        return `You Win! ${humanChoice} beats ${computerChoice}`
    }
    else{
        return `You Lose! ${computerChoice} beats ${humanChoice}`
    }
}

function game(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        if(checkWinner(humanChoice, computerChoice) == "Player won") {
            humanScore++;
        }
        else if(checkWinner(humanChoice, computerChoice) == "Computer won") {
            computerScore++;
        } 

    }
    console.log("Game Over")
    if(humanScore > computerScore){
        console.log("Player won");
    }
    else if(humanScore < computerScore){
        console.log("Computer won");
    }
    else{
        console.log("Tie");
    }
}

game()