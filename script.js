let playerScore = 0;
let computerScore = 0; // variables to keep score for player and computer

function getComputerChoice() {
    const computerSelection = ["rock", "paper", "scissors"];
    let computerChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return computerChoice;
} // function is for computer to automatically select its choice

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 

    if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You WIN, paper beats rock, your score has increased by 1"; 
    }  
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You WIN, scissors beats paper, your score has increased by 1";
    } 
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You WIN, rock beats scissors, your score has increased by 1";
    } 
    if (playerSelection === computerSelection) {
        return "It's a TIE, you and the computer selected the same choice";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You LOSE, scissors beats paper, computer's score has increased by 1";
    }  
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You LOSE, rock beats scissors, computer's score has increased by 1";
    } 
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You LOSE, paper beats rock, computer's score has increased by 1";
    }
} 

document.getElementById('rock').addEventListener('click', () => updateGame('rock'));
document.getElementById('paper').addEventListener('click', () => updateGame('paper'));
document.getElementById('scissors').addEventListener('click', () => updateGame('scissors'));

function updateGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    
    // Update the scores in the DOM
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    // Display the result of the current round
    document.getElementById('game-result').textContent = result;
}

document.getElementById('reset').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('game-result').textContent = 'Make your move!';

    // Re-enable the buttons if necessary
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
});
