// get elements

const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const rockButton = document.getElementById("rock");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

const modeSelect = document.getElementById("mode");
const roundsInput = document.getElementById("rounds");
const startGameButton = document.getElementById("startGame");
const gameContentDiv = document.getElementById("gameContent");

// Initialise the scores to be 0.
let userScore = 0;
let computerScore = 0;

let rounds = 0;
let maxRounds = null;

// Show or hide the rounds input based on game mode selection
modeSelect.addEventListener('change', ()=> {
    if(modeSelect.value == 'best-of') {
        //changing the css property
        roundsInput.style.display = 'inline';
    } else {
        roundsInput.style.display = 'none';
        roundsInput.value = '';
    }
});

// Start the game and set up the selected mode
startGameButton.addEventListener('click', () => {
    //Reset the values to the starting value when the game starts
    resetGame();
    if (modeSelect.value === 'best-of') {
        maxRounds = parseInt(roundsInput.value);
        if (isNaN(maxRounds) || maxRounds < 1 ) {
            alert("Please enter a valid number of rounds.");
        return;
        }

    } else {
        maxRounds = null; //endless mode
    }

    gameContentDiv.style.display = 'block';

    resultDiv.textContent = `Game started in ${modeSelect.value === 'best-of' ? `Best-of-${maxRounds}`: 'Endless'} mode`;
    
});

// Get the computer's choice of input
function getComputerChoice(choice) {
    const choices = ["Scissors", "Paper", "Rock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

// Determine the winner based on user's choice and computer's choice
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

// Implement the Game Play logic

// Handle the button clocks, Scissors, Paper and Rock
function playGame(userChoice) {
    // check if the maxRounds is entered and if the rounds are over
    if (maxRounds && rounds >=maxRounds) {
        if (userScore === computerScore) {
            resultDiv.textContent = `Game Over! It's a draw!`;
            gameContentDiv.style.display = 'none';
        }
        else {
            resultDiv.textContent = `Game Over! ${userScore > computerScore ? 'You win the game!' : 'Computer wins the game!'}`;
            gameContentDiv.style.display = 'none';
            return;
        }
    }


    // display the result of the play
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `You chose ${userChoice}. Computer Chose ${computerChoice}. ${result}`;

    rounds++;

    // check if the game should end in best-of-x mode
    if (maxRounds && rounds >= maxRounds) {
        if (userScore === computerScore) {
            resultDiv.textContent += ` Game Over! ${finalResult}`;
            return;
        }
        else {
            const finalResult = userScore > computerScore ? `You are the overall winnner!` : `Computer is the overall winner!`;
            gameContentDiv.style.display = 'none';
        }
    }
    
}

// Add Event Listeners
scissorsButton.addEventListener('click', () => playGame('Scissors'));
paperButton.addEventListener('click', () => playGame('Paper'));
rockButton.addEventListener('click', () => playGame('Rock'));

// Reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    scoreDiv.textContent = `Your score: ${userScore} | Computer Score: ${computerScore}`;
    resultDiv.textContent = '';
}