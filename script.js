let userDisplay = document.getElementById("user-choice");
let computerDisplay = document.getElementById("computer-choice");
let resultDisplay = document.getElementById("result");
let allButtons = document.querySelectorAll("button");
let userWonCount = document.getElementById("you-won");
let computerWonCount = document.getElementById("computer-won");

let userChoice;
let computerChoice;
let result;

let userCount = 0;
let computerCount = 0;

//User Value Displayed
allButtons.forEach((button) => {
  return button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    scoreCount();
  });
});

//C0mputer Respomnce;

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * allButtons.length)+1;

  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Scisssors";
  }
  if (randomNumber === 3) {
    computerChoice = "Paper";
  }

  computerDisplay.innerHTML = computerChoice;
}

//FInal Result :

function getResult() {
  if (computerChoice === userChoice) {
    result = "Match is Draw!";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Lost!";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You Lost!";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You won the match!";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Lost!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You won the match!";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You Lost!";
  }

  resultDisplay.innerHTML = result;
}

//Score Session;
function scoreCount() {
  if (result === "You won the match!") {
    userCount += 1;
  }
  if (result === "You Lost!") {
    computerCount += 1;
  }

  userWonCount.innerHTML = userCount;
  computerWonCount.innerHTML = computerCount;
}
