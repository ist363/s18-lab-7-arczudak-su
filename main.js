//Element nodes
const buttons = document.getElementsByClassName('btn-choice');
const playerScoreText = document.getElementById('playerScoreText');
const computerScoreText = document.getElementById('computerScoreText');

//Event Listeners
for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
        let playerChoice = event.currentTarget.getAttribute('data-option');
        // console.log(playerChoice);
        playRound(playerChoice)
    });
}




//Variables for the game
const choices =["Rock", "Paper", "Scissors"]
var playerScore = 0;
var computerScore =0;
const winningScore =10;




//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    var computerScore = choices[randomIndex];


    if (playerChoice == computerChoice){
        console.log('Tie game')
        return;
    }

    if (playerChoice == 'Rock'){
        if(computerChoice == "Scissors"){
            playerScore++;
            console.log('Player 1 Wins');
            return;
        }else if (computerChoice=='Paper'){
            computerScore++;
            console.log('Computer Wins');
            return;
        }

    }


    if(playerChoice == 'Scissors'){
        if(computerChoice == 'Paper'){
            playerScore++;
            console.log('Player Won');
        }else if (computerChoice=='Rock') {
            computerScore++;
            console.log('Computer Won');
            return;
        }
    }

    if(playerChoice == 'Paper'){
        if(computerChoice == 'Rock'){
            playerScore++;
            console.log('Player Won');
        }else if (computerChoice=='Scissors') {
            computerScore++;
            console.log('Computer Won');
            return;
        }
    }

    let playerScoreText = playerScore;
    let computerScoreText = computerScore;


        

    
 
}


//Update the text between the scores with the result of the round and with what each player played
function resultText(playerChoice,playerScore) {
    
}


//Reset scores and text elements to 0
function resetGame(playerScore, computerScore) {
    let playerScore = 0;
    let computerScore =0;
    let playerScoreText ='';
    let computerScoreText='';
    
}


//Alert the player whether they won or not after someone reaches 10 points
function gameOver(playerScore, computerScore) {
    if(playerScore > computerScore) {
        alert("Congragulations, you have won.")
    }else if(playerScore < computerScore){
        alert("You've lost. Better luck next time.")
    }

function resetGame(playerScore, computerScore)
}





