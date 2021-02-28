let playerScore = 0;
let computerScore = 0;
let drawsNumber = 0;

function computerPlay() {
  const randomNumber = Math.round(Math.random() * 3);
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// computerPlay();

  function playRound() {
  const playerInput = prompt("Do you choose Rock, Paper or Scissors?");
  const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
  const computerSelection = computerPlay();
  let result;
  if (playerSelection === computerSelection) {
    drawsNumber++;
    result = "It's a tie!";
  }

  if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}!`;
  }

  if ((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }

  if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors"
  ) {
    result = `You have to choose Rock, Paper or Scissors!`;
  }
  console.log(`You played ${playerSelection}.`);
  console.log(`Computer played ${computerSelection}.`);
  console.log(result);
  return result;
  }

  function game() {
    for (let i = 0; i<5; i++ ) {
    playRound();
    console.log(`Your score is ${playerScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
    console.log(`Numbers of draws is ${drawsNumber}.`);
    }
  }


function finalResult() {
  if (playerScore < computerScore){
    console.log("You lose the game.");
  } else if (playerScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("You are tied.");
  }
}

game();
finalResult();