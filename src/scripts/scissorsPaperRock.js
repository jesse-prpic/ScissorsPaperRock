// get elements

const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const rockButton = document.getElementById("rock");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// Iniitalise the scores to be zero.
let userScore = 0;
let computerScore = 0;


// get the computer choice
function getComputerChoice(choice) {
    const choices = ["Scissors", "Paper", "Rock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}
function getPlayerChoice(choice) {
    const choices = ("Scissors", "Paper", "Rock");
}

// console.log(getComputerChoice());


// write the logic for the winner
function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return "It's a tie"
    } else if (
        (userChoice === "Scissors" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Rock" && computerChoice === "Scissors")
    ) {
        userScore++;
        scoreDiv.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`
        return "You win!";
    } else {
        computerScore++;
        scoreDiv.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`
        return "Computer wins!";
    }
}

// listen to the button click events
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('Scissors', computerChoice);
    resultDiv.textContent = `You chose Scissors. Computer chose ${computerChoice}. ${result}`
});
paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('Paper', computerChoice);
    resultDiv.textContent = `You chose Paper. Computer chose ${computerChoice}. ${result}`
});
rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('Rock', computerChoice);
    resultDiv.textContent = `You chose Rock. Computer chose ${computerChoice}. ${result}`
});