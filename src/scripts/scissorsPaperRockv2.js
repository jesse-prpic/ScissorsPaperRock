// get elements

const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
const rockButton = document.getElementById("rock");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

const modeSelect = document.getElementById("mode");
const roundsInput = document.getElementById("rounds");
const startGameButton = document.getElementById("startGame")

// Initialise the scores to be 0.
let userScore = 0;
let computerScore = 0;

let rounds = 0;
let maxRounds = null;

// Show or hide the rounds input based on game mode selection
// Star the game and set up the selected mode
// Get the computer's choice of input
// Determine the winner based on user's choice and computer's choice
// Implement the Game Play logic
// Add Event Listeners
// Reset the game