let playerScore = 0;
let computerScore = 0; // variables to keep score for player and computer

function getComputerChoice () {
    const computerSelection= ["rock", "paper", "scissors"]
    let computerChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return computerChoice
    } // function is for computer to automatically select its choice

    
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 

    if (playerSelection === "paper" && computerSelection === "rock")  {
        playerScore++
        return  "You WIN, paper beats rock, your score has increased by 1"; 
        }  
        if  (playerSelection === "scissors" && computerSelection === "paper")  {
            playerScore++
        return  "You WIN, scissors beats paper, your score has increased by 1";
        } 
        if (playerSelection === "rock" && computerSelection === "scissors")  {
            playerScore++
        return  "You WIN, rock beats scissors, your score has increased by 1";
        } 
        if (playerSelection ===  computerSelection)  {
        return "Its a TIE, you and the computer selected the same choice"
        }
        if (playerSelection === "paper" && computerSelection === "scissors")  {
            computerScore++
        return  "You LOSE, scissors beats paper, computers score has increased by 1";
        }  
        if  (playerSelection === "scissors" && computerSelection === "rock")  {
            computerScore++
        return  "You LOSE, rock beats scissors, computers score has increased by 1";
        } 
        if (playerSelection === "rock" && computerSelection === "paper")  {
            computerScore++
        return  "You LOSE, paper beats rock, computers score has increased by 1";
        }
    } 
    let result;
    function game() {
        let userChoice = prompt("select rock,paper or scissors")
       result = playRound (userChoice, getComputerChoice()) ;
       console.log(result);
       result = playRound (userChoice, getComputerChoice()) ;
       console.log(result);
       result = playRound (userChoice, getComputerChoice()) ;
       console.log(result);
       result = playRound (userChoice, getComputerChoice());
       console.log(result);
       result = playRound (userChoice, getComputerChoice());
       console.log(result)
       if (playerScore > computerScore) {
       console.log("Player wins")
       }
       if (computerScore > playerScore) {
       console.log ("Computer wins")
       }
       if (playerScore === computerScore) {
       console.log ("Tie");
       }
       } //plays 5 rounds of the game and determines winner, loser or tie game

    