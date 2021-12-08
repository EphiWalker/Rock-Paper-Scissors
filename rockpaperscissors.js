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
    let playerSelection1, playerSelection, computerSelection;
    
function userInput(){
        playerSelection1=prompt("Rock,Paper or Scissors?");
        playerSelection=playerSelection1.toLowerCase();
        computerSelection= computerPlay();

    if (playerSelection!='rock' && playerSelection!='paper' && playerSelection!='scissors') {
        alert ("Please input correctly.");
    }
}



function playRound() {
    let status;

    if ((playerSelection=='paper' && computerSelection=='rock')
                || (playerSelection=='scissors' && computerSelection=='paper')
                || (playerSelection=='rock' && computerSelection=='scissors'))      {
              
            status='win';    
         }
    
        else if ((computerSelection=='paper' && playerSelection=='rock')
                || (computerSelection=='scissors' && playerSelection=='paper')
                || (computerSelection=='rock' && playerSelection=='scissors')) {
            status='lose';
        }

        return status;
    }

function capitalize(string) {
    return string.charAt(0).toUpperCase()+string.slice(1);
}

function announce() {

    let winner,loser;
    let winLose=playRound();

    if (winLose=='win' || winLose=='lose') {

    if (winLose=='win') {
       winner=playerSelection;
       loser=computerSelection;
    }
    
    else if (winLose='lose') {
        winner=computerSelection;
        loser=playerSelection;
    }

    let message= "You " + winLose + "! " + capitalize(winner) + " beats " + capitalize(loser) + ".";
    alert(message);
    }

    else if (playerSelection==computerSelection) {
        alert ("It's a tie!");
    }

}

function keepScore() {
        let playerScore=0 ,computerScore=0;
       
    for (i=0;i<5;i++) {
        userInput();
        announce();
        let scorer=playRound();
         if (scorer=='win')  ++playerScore;
         else if (scorer=='lose')  ++computerScore;

    }

         let scoresArray=[playerScore,computerScore];
         console.log(scoresArray); 
         return scoresArray;

}

function finalWinner() {
    let scoreBoard=keepScore();
    console.log(scoreBoard);
    if (scoreBoard[0]>scoreBoard[1]) {
        alert ("You are the final winner!");
    }

    else if (scoreBoard[0]<scoreBoard[1]) {
        alert ("Computer is the final winner!");
    }

    else {
        alert ("The final result is a tie.")
    }
}

finalWinner();