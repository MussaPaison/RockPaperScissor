const choices = ["rock","paper","scissors"]

function game () {
//play the game
//5 rounds
//console based
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice(){

}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}