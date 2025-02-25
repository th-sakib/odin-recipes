// const getComputerChoice = () => {
//   const arr = ["rock", "paper", "scissors"];

//   const randomNum = Math.floor(Math.random()) * 3; // return random number between 0-2

//   return arr[randomNum];
// };

const selectionBtns = document.querySelectorAll("button");
const roundDiv = document.querySelector("#round");
const humanPick = document.querySelector("#humanPick");
const computerPick = document.querySelector("#computerPick");
const subResult = document.querySelector("#subResult");
const computerScoreDiv = document.querySelector("#computerScoreDiv");
const humanScoreDiv = document.querySelector("#humanScoreDiv");

let humanScore = 0;
let computerScore = 0;
let round = 0;

selectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", (e) => {
    if (e.target.id === "rockSelectionBtn") {
      playRound("rock");
    } else if (e.target.id === "scissorsSelectionBtn") {
      playRound("scissors");
    } else {
      playRound("paper");
    }
  });
});

const getComputerChoice = () => {
  const randomNum = Math.random();

  if (randomNum <= 0.3) {
    return "rock";
  } else if (randomNum <= 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = (choice) => {
  // const input = prompt("Choice Rock, Paper or scissors");

  // if (input === null) {
  //   return getHumanChoice();
  // }

  // const choice = input.toLowerCase();

  // if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
  //   return getHumanChoice();
  // }

  if (choice === "rock") {
    humanPick.innerText = "Rock";
  } else if (choice === "paper") {
    humanPick.innerText = "Paper";
  } else {
    humanPick.innerText = "Scissors";
  }

  return choice;
};

const playRound = (humanSelection) => {
  if (round < 5) {
    const humanChoice = getHumanChoice(humanSelection);
    const computerChoice = getComputerChoice();

    if (computerChoice === "rock") {
      computerPick.innerText = "Rock";
    } else if (computerChoice === "paper") {
      computerPick.innerText = "Paper";
    } else {
      computerPick.innerText = "Scissors";
    }

    if (humanChoice === computerChoice) {
      subResult.innerText = "Tie";
      round++;
      roundDiv.firstElementChild.innerText = round;
      humanScoreDiv.innerText = humanScore;
      computerScoreDiv.innerText = computerScore;
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      subResult.innerText = "Computer Won";
      computerScore += 1;
      round++;
      roundDiv.firstElementChild.innerText = round;
      humanScoreDiv.innerText = humanScore;
      computerScoreDiv.innerText = computerScore;
    } else {
      subResult.innerText = "Human won";
      humanScore++;
      round++;
      roundDiv.firstElementChild.innerText = round;
      humanScoreDiv.innerText = humanScore;
      computerScoreDiv.innerText = computerScore;
    }
  }

  if (round === 5) {
    playGame();
  }
};

const playGame = () => {
  if (humanScore > computerScore) {
    subResult.innerText = "Final Result: Human Won";
  } else if (humanScore < computerScore) {
    subResult.innerText = "Final Result: Compuer Won";
  } else {
    subResult.innerText = "Final Result: Tie";
  }
};
