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


function playRound (playerSelection, computerSelection)  {
    playerSelection = playerSelection.toUpperCase()
   
    computerSelection = computerSelection.toUpperCase()

    if (playerSelection == computerSelection)   {
        return "It's a TIE!"
    }

    else if (playerSelection == 'ROCK' && computerSelection === 'PAPER') {
        return 'You Lose!'
    }
    
    else if (playerSelection == "ROCK" && computerSelection === 'SCISSORS') {
        return 'You Win!'
    }

    else if (playerSelection == 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You Lose!'
    }

    else if (playerSelection == 'PAPER' && computerSelection === 'ROCK') {
        return 'You Win!'
    }

    else if (playerSelection == 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You Lose!'
    }

    else if (playerSelection == 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You Win!'
    }
}
    const computerSelection = computerPlay()
    
    
    function game()    {
    console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    console.log(playRound(prompt('Choose your weapon!', ''), computerSelection));
    }


