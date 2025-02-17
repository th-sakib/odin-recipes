// const getComputerChoice = () => {
//   const arr = ["rock", "paper", "scissors"];

//   const randomNum = Math.floor(Math.random()) * 3; // return random number between 0-2

//   return arr[randomNum];
// };

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

const getHumanChoice = () => {
  const input = prompt("Choice Rock, Paper or scissors");

  if (input === null) {
    return getHumanChoice();
  }

  const choice = input.toLowerCase();

  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    return getHumanChoice();
  }

  return choice;
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log("tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log("Computer won");
      computerScore += 1;
    } else {
      console.log("Human won");
      humanScore++;
    }
  };

  for (let round = 1; round <= 5; round++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    playRound(computerChoice, humanChoice);
  }

  if (humanScore > computerScore) {
    console.log("Final Result: Human Won");
  } else if (humanScore < computerScore) {
    console.log("Final Result: Compuer Won");
  } else {
    console.log("Final Result: Tie");
  }
};

playGame();
