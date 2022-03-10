// Gets player's selection and makes it case-insensitive

function playerPlay() {
    const playerInput = prompt("Rock, Paper or Scissors?", "") + "";
    return playerInput.toLowerCase();
}

// Make computer picks randomly between Rock, Paper or Scissors

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

// Play a round and return the winner

function playRound() {
    const playerSelection = playerPlay();
    console.log(playerSelection);
    const computerSelection = computerPlay();
    console.log(computerSelection);
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper."
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else {
        return "Something went wrong! Try again."
    }
}

// Plays a 5 round game, keeping score and reporting the winner

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let round = playRound();
        console.log(round);
        alert(round);
        if (round.startsWith("You win")) {
            playerScore++
        } else if (round.startsWith("You lose")) {
            computerScore++
        } else {
            continue;
        }
    }
    console.log(playerScore, computerScore);
    if (playerScore > computerScore) {
        return `Congratulations, you won! The score was ${playerScore} to ${computerScore}.`
    }  else if (computerScore > playerScore) {
        return `Sorry, you lost! The Score was ${computerScore} to ${playerScore}.`
    } else {
        return `It's a tie! The score was ${playerScore} to ${computerScore}.`
    }
}

let result = game();
console.log(result);
alert(result);

// Adds replayability

let playAgain = confirm("Replay?");
replay(playAgain);

function replay(playAgain) {
    if (playAgain) {
        document.location.reload()
    }
}