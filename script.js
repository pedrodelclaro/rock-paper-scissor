// When the user makes a selection
// Make the player's selection case-insensitive and stores in a variable called playerSelection
// script.js:9 Uncaught TypeError: Cannot read properties of null (reading 'toLowerCase')

const playerSelection = playerPlay();
function playerPlay() {
   return window.prompt("Rock, Paper or Scissors?", "").toLowerCase();
}
console.log(playerSelection)

// Make a funcition called computerPlay that Random picks between Rock Paper Scissor and store in a variable called computerSelection

const computerSelection = computerPlay();
function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}
console.log(computerSelection);

// Make a function called playRound with playerSelection and computerSelection as parameters that plays a round and returns the result

function playRound(playerSelection, computerSelection) {
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
        return "It's a tie! Try again."
    } else {
        return "Something went wrong! Try again."
    }
}
console.log(playRound(playerSelection, computerSelection));

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