
function computerPlay()    {
    let randomnum = Math.floor(Math.random() * 3)

    if (randomnum === 0)    {
        return 'Rock' 
    }

    else if (randomnum === 1)   {
        return 'Paper'
    }

    else if (randomnum === 2)   {
        return 'Scissors'
    }
}
let playerScore = 0;
let compScore = 0;


const usrScore = document.querySelector('#usrscore');
const computerScore = document.querySelector('#compscore');

function checkScore () {
    if (playerScore === 5){
        alert("Congratulations! You Win!")
        playerScore -= playerScore;
        usrScore.textContent = playerScore;
        compScore -= compScore;
        computerScore.textContent = compScore;
        roundWinner.textContent = "";
    }
    
    else if (compScore === 5){
        alert("Sorry! You Lose!");
        playerScore -= playerScore;
        usrScore.textContent = playerScore;
        compScore -= compScore;
        computerScore.textContent = compScore;
        roundWinner.textContent = "";
    }
    else{
        return
    }
    }

function playRound (playerSelection, computerSelection = computerPlay())  {
    playerSelection = playerSelection.toUpperCase()
    
    computerSelection = computerSelection.toUpperCase()

    if (playerSelection === computerSelection)   {
        roundWinner.textContent = "It's a tie!";
    }

    else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        roundWinner.textContent = "You Lose!";
        compScore += 1;
        computerScore.textContent = compScore;
    }
    
    else if (playerSelection === "ROCK" && computerSelection === 'SCISSORS') {
        roundWinner.textContent = "You Win!";
        playerScore += 1;
        usrScore.textContent = playerScore;
    }

    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        roundWinner.textContent = "You Lose!";
        compScore += 1;
        computerScore.textContent = compScore;
    }

    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        roundWinner.textContent = "You Win!";
        playerScore += 1;
        usrScore.textContent = playerScore;
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        roundWinner.textContent = "You Lose!";
        compScore += 1;
        computerScore.textContent = compScore;
    }

    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        roundWinner.textContent = "You Win!";
        playerScore += 1;
        usrScore.textContent = playerScore;
    }
    checkScore()
}


const playRock = document.querySelector('.rockimg');
playRock.addEventListener('click', () => playRound('rock'));

const playPaper = document.querySelector('.paperimg');
playPaper.addEventListener('click', () => playRound('paper'));

const playScissors = document.querySelector('.scissorsimg');
playScissors.addEventListener('click', () => playRound('scissors'));

const roundWinner = document.querySelector('#roundwinner');
