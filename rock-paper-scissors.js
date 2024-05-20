var userChoice = prompt("Would you like to play a game of rock,paper,scissors? [y/n]",'');
if(userChoice === 'y'){
  playGame()
} else if(userChoice === 'n'){
    console.log("Reload the page and type in y in case you change your mind");
} else{
    console.log("I hope you change your mind!");
}




function getComputerChoice(){
   var computerChoice;
   let computerRndNum = Math.floor(Math.random()*3); 
     if (computerRndNum === 0){
        return computerChoice = "rock";
    } else if(computerRndNum === 1){
        return computerChoice = "paper";
    } else if(computerRndNum === 2){
        return computerChoice = "scissors";
    }}

function getHumanChoice(){
    var humanChoice = prompt('rock, paper or scissors?', ''); 
    return humanChoice;
}     






function playGame(){
    var humanScore = 0;
    var computerScore = 0;

    let playRound = function(humanChoice, computerChoice){
    let HC = humanChoice.toUpperCase();
    let CC = computerChoice.toUpperCase(); 
      if (HC === "ROCK" && CC === "PAPER"){
        console.log( "%cYou lose! Paper beats Rock.","color: red;");
        return computerScore ++;
      } else if (HC === "PAPER" && CC === "SCISSORS"){
        console.log( "%cYou lose! Scissors beats Paper.","color: red;");
        return computerScore ++;
      } else if (HC === "SCISSORS" && CC === "ROCK"){
        console.log( "%cYou lose! Rock beats Scissors.","color: red;");
        return computerScore ++;
      } else if (CC === "ROCK" && HC === "PAPER"){
        console.log( "%cYou win! Paper beats Rock.","color: green; font-weight: bold;");
        return humanScore ++;
      } else if (CC === "PAPER" && HC === "SCISSORS"){
        console.log( "%cYou win! Scissors beats Paper.","color: green; font-weight: bold;");
        return humanScore ++;
      } else if (CC === "SCISSORS" && HC === "ROCK"){
        console.log( "%cYou win! Rock beats Scissors.","color: green; font-weight: bold;");
        return humanScore ++;
      } else if(CC === HC){
        console.log( `%cNo Winner this time!\nYou both chose ${humanChoice}.`,"color: blue;");
      } else {
        console.log( `%cInvalid choice!\n${humanChoice} is not an option.`,"color: purple;");
      }
    };  

    for(var rounds = 1; rounds < 6; rounds ++){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    playRound(human, computer);
    }
    if(computerScore > humanScore){
        console.log(`%cWinner: Computer with a total score of ${computerScore} while Human lost with a score of ${humanScore}`,"color: blue; font-weight: bold;");
    } else if(computerScore < humanScore){
        console.log(`%cWinner: Human with a total score of ${humanScore} while Computer lost with a score of ${computerScore}`,"color: green; font-weight: bolder;");
    } else if(computerScore === humanScore){
        console.log(`%cNo Winner this time, You both had a score of ${humanScore}!`,"color: brown;");
        userChoice;
    } 
}


