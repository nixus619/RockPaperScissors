function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    if(choice == 0){
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return"scissors"
    }
}

function getHumanChoice() {
    let hChoice = prompt("Rock, Paper, Or Scissors?").toLowerCase();
    if((hChoice=='rock') || (hChoice=='paper') || (hChoice=='scissors')){
        return hChoice;
    } else {
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    /*console.log(humanChoice);
    console.log(computerChoice); */
    if(humanChoice==computerChoice){
        return "tie";
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        return "human";
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return "human";
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        return "human";
    } else {
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let games = prompt("how many games do you want to play?");
    let counter = 0;
    while (games > counter)
        {
            let computerChoice = getComputerChoice();
            let humanChoice = getHumanChoice();
            let result = playRound(humanChoice,computerChoice);
            if(result == 'human'){
                alert("You won");
                humanScore++;
            } else if (result == 'computer') {
                alert("You lost");
                computerScore++;
            } else {
                alert("Tie Game");
                tieScore++
            }
            counter++;
        }
    if(humanScore>computerScore){
        alert("The human won with a final score of human " + humanScore + ", computer "
        + computerScore + ". Number of ties: " + tieScore);
    } else if (computerScore > humanScore) {
        alert("The computer won with a final score of human " + humanScore + ", computer "
        + computerScore + ". Number of ties: " + tieScore);
    } else {
        alert("It was a tie with a final score of human " + humanScore + ", computer "
        + computerScore + ". Number of ties: " + tieScore);
    }
}

/*const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let result = playRound(humanChoice,computerChoice);
if(result == 'human'){
    console.log("You won");
    humanScore++;
} else if (result == 'computer') {
    console.log("You lost");
    computerScore++;
} else {
    console.log("Tie Game");
    tieScore++
}*/
playGame()