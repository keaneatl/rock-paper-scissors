
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

function checkScore () {
if (playerScore === 5){
    alert("Congratulations! You Win!")
    usrScore.textContent = 0;
    computerScore.textContent = 0;
}

else if (compScore === 5){
    alert("Sorry! You Lose!");
    usrScore.textContent = 0;
    computerScore.textContent = 0;
   
}
else{
    return
}
}
    // Testing
    // function game()    {
    // console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    // console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    // console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    // console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    // console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    // }