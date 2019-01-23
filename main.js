let playerScore = 0;
let computerScore = 0;
let round = 0;

document.getElementById("message").textContent = 'Wanna play with me?';
document.getElementById("round").textContent = round;
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;

function computerPlay(){
    let compNum = Math.floor(Math.random() * 3);
    const compPick = ["Rock", "Paper", "Scissors"];
    return compPick[compNum];
}

function playRound(playerSelection, computerSelection){
    let playerWins = 'Well played, you win this round!';
    let computerWins = 'Sorry, you lost this round.';
    let tie = 'Looks like it\'s a draw! Try again.';
    if(playerSelection === 'Rock' && computerSelection !== 'Paper'){
        playerScore++;
        round++;
        return playerWins;
    }else if(playerSelection === 'Paper' && computerSelection !== 'Scissors'){
        playerScore++;
        round++;
        return playerWins;
    }else if(playerSelection === 'Scissors' && computerSelection !== 'Rock'){
        playerScore++;
        round++;
        return playerWins;
    }else if(playerSelection === computerSelection){
        round++;
        return tie;
    }else{
        computerScore++;
        round++;
        return computerWins;
    }
}

function game(player){
    if(playerScore < 5 && computerScore < 5){
        var playerSelection = player
        const computerSelection = computerPlay();
        let roundText = playRound(playerSelection, computerSelection);
        document.getElementById("message").textContent = roundText;
        document.getElementById("round").textContent = round;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    }
    if(playerScore === 5){
        document.getElementById("message").textContent = 'Congratulations!\n You\'ve won the game!';
        document.getElementById("message").setAttribute('style', 'color: green;');
    }
    if(computerScore === 5){
        document.getElementById("message").textContent = 'Computer wins this time!';
        document.getElementById("message").setAttribute('style', 'color: blue;');
    }
}

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector('#paper-btn');
let scissorsBtn = document.querySelector('#scissors-btn');
restartBtn = document.querySelector('#restart-btn');

rockBtn.addEventListener('click', ()=>{
    game('Rock');
});

paperBtn.addEventListener('click', ()=>{
    game('Paper');
});

scissorsBtn.addEventListener('click', ()=>{
    game('Scissors');
});

restartBtn.addEventListener('click', ()=>{
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById("message").setAttribute('style', 'color: black;');
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("message").textContent = 'Wanna play with me?';
})

