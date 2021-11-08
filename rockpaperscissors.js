function computerPlay() {
    let randomNumber=(Math.floor(Math.random()*3));

    switch(randomNumber) {
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    case 2:
        return "scissors";
        break;
}
}

    let playerSelection1=prompt("Rock,Paper or Scissor?");
    let playerSelection=playerSelection1.toLowerCase();
    let computerSelection= computerPlay();
function playRound() {
    if (playerSelection=='rock') {
        if (computerSelection=='rock') {
            return "It's a tie!";
        }
        else if(computerSelection=='paper') {
            return "You lose! Paper beats rock.";
        }
        else {
            return "You win! Rock beats Scissors.";
        }
    }

    else if (playerSelection=='paper') {
        if (computerSelection=='rock') {
            return "You win! Paper beats Rock.";
        }
        else if (computerSelection=='paper') {
            return "It's a tie!";
        }
        else {
            "You lose! Scissors beats paper.";
        }
    }

    else if (playerSelection=='scissors') {
        if (computerSelection=='rock') {
            return "You lose! Rock beats Scissors.";
        }
        else if (computerSelection=='paper') {
            return "You win! Scissors beats paper.";
        }
        else {
            return "It's a tie!";
        }
    }

    else {
        return "Please input correctly.";
    }
}

function game(){

playRound();
playRound();
playRound();
playRound();
playRound();

}