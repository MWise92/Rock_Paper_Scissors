// console.log("Hello, World")
function getComputerChoice() {
    if (Math.random()<= 0.34) {
        return "rock";
    } else if (Math.random()<= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice());

let choice = prompt("Enter choice here.");

function getHumanChoice() {
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getHumanChoice());

let humanScore = 0;

let computerScore = 0;