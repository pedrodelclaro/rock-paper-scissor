// When the user makes a selection
// Make the player's selection case-insensitive

function playerPlay() {
    const playerInput = prompt("Rock, Paper or Scissors?", "") + "";
    return playerInput.toLowerCase();
}

// Make a funcition called computerPlay that Random picks between Rock Paper Scissor and store in a variable called computerSelection

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

// Make a function called playRound with playerSelection and computerSelection as parameters that plays a round and returns the result

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

// Make a function called game that uses loop, calss plaRound to play a 5 round game, keeps score and returns a winner
/* Criar uma variavel para armazenar o score do jogador = 0
Criar uma variavel para armazenar o score do pc = 0
Cria uma variavel game com um loop que:
    Por 5 vezes:
        Joga um round
        console.log(playRound(playerSelection, computerSelection));
        Se playRound === .startWith(You win) add +1 player score
        Caso contrário add +1 computer score
    Após a 5 vez:
        Compara o score do Player com o do Computer
        Se Player > Computer print You Win. The score is {Player} vs. {Computer}
        Caso contrário > YOu lose
        Restart?        
*/


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound();
        console.log(round);
        if (round.startsWith("You win")) {
            playerScore++
        } else if (round.startsWith("You lose")) {
            computerScore++
        } else {
            continue;
        }
    }
    console.log(playerScore, computerScore);
}

let result = game();