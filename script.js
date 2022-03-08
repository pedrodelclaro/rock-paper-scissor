console.log("HelloWorld")

// When the user makes a selection

// Make the player's selection case-insensitive and stores in a variable called playerSelection

const playerSelection = playerPlay();
function playerPlay() {
   return window.prompt("Rock, Paper or Scissor?", "").toLowerCase();
}
console.log(playerSelection)

// Make a funcition called computerPlay that Random picks between Rock Paper Scissor and store in a variable called computerSelection

const computerSelection = computerPlay();
function computerPlay() {
    const choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random() * choice.length)];
}
console.log(computerSelection);

// Make a function called playRound with playerSelection and computerSelection as parameters that plays a round and returns the result
/* se pS = scissor and cS = paper print You win! Scissor beats Paper!
   se pS = paper and cS = rock print You win, paper beats Rock!
   se pS = rock and cS = scissor print You win! Rock beats Scissor.
   se pS = scissor and cS = rock print You lose! Rock beats Scissor!
   se pS = rock and cS = paper print You lose! Paper beats Rock!
   se pS = paper and cS = scissor print You lose! Scissor beats Paper!
   Se ps = cS print It'sa tie
   else prints something wrong
*/


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "scissor" && computerSelection === "paper") {
        return "You win! Scissor beats paper."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "You win! Rock beats scissor."
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "You lose! Rock beats scissor."
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "You lose! Scissor beats paper."
    } else if (playerSelection === computerSelection) {
        return "It's a tie! Try again."
    } else {
        return "Something went wrong! Try again."
    }
}
console.log(playRound(playerSelection, computerSelection));

// Make a function called game that uses loop, calss plaRound to play a 5 round game, keeps score and returns a winner