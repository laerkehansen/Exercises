"use strict";

// function RockPaperScissor(){   
// console.log(RockPaperScissor)
// }
// function rockFunction(){
    // }
    // RockPaperScissor()
    
    //Knapper//
    let userGuess;
    let computerGuess;
    let result;

    // tekst
    const draw = document.querySelector("#draw");
    const win = document.querySelector("#win");
    const lose = document.querySelector("#lose");

    //classes for .paper .scissor .rock
    const rock = document.querySelector(".rock"); 
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    //shake animation
    const players = document.querySelectorAll(".player");
    const playerHand = document.querySelector("#player1");
    const comHand = document.querySelector("#player2");
    const againButton = document.getElementById("again");

    //valg af udfald
    const choices = ["rock", "paper", "scissors"];

    // adventlistener for the rock, paper, scissor buttons
    rock.addEventListener("click", rockClicked);
    paper.addEventListener("click", paperClicked);
    scissors.addEventListener("click", scissorClicked);

    //lytter til loading af siden
    window.addEventListener("load", playAgain);

    function playAgain(){
        // console.log("hej")

        rock.addEventListener("click", rockClicked)
        paper.addEventListener("click", paperClicked)
        scissors.addEventListener("click", scissorClicked)

        //fjerner classerne
        playerHand.classList.remove("shake", "paper", "scissors");
        comHand.classList.remove("shake", "paper", "scissors");

        //tilføjer hidden ved nyt spil
        document.getElementById("draw").classList.add("hidden");
        document.getElementById("win").classList.add("hidden");
        document.getElementById("lose").classList.add("hidden");

        //tilføj play again knap og fjern
        againButton.classList.add("hidden");
    }
    
    
function rockClicked(){
      //for hver "spiller" tilføj animationen shake
      playerHand.classList.add("shake");
      //når animationen er færdig fjern classerne paper, scissor og shake, og efter tilføj rock
      playerHand.addEventListener("animationend", () => {
          playerHand.classList.remove("shake");
          playerHand.classList.add("rock");
  
      });
   
        userGuess = "rock";
        computerGuesses();
        // animationEnd();
        
    
}
function paperClicked(){
    //for hver "spiller" tilføj animationen shake
    playerHand.classList.add("shake");
    //når animationen er færdig fjern classerne paper, scissor og shake, og efter tilføj rock
    playerHand.addEventListener("animationend", () => {
        playerHand.classList.remove("shake");
        playerHand.classList.add("paper");

    });
 
        userGuess = "paper";
        computerGuesses();
}
function scissorClicked(){
    //for hver "spiller" tilføj animationen shake
    playerHand.classList.add("shake");
    //når animationen er færdig fjern classerne paper, scissor og shake, og efter tilføj rock
    playerHand.addEventListener("animationend", () => {
        playerHand.classList.remove("shake");
        playerHand.classList.add("scissors");
        // console.log("hej")

    });
 
    userGuess = "scissor";
    computerGuesses();
}

function computerGuesses(){
comHand.classList.add("shake");
//vælg random mellem mine 3 mulige
computerGuess = choices[Math.floor(Math.random() * choices.length)];
comHand.addEventListener("animationend", () => {
    comHand.classList.remove("shake");
    comHand.classList.add(computerGuess);
    // console.log("hej")

    
    determinWinner();
});

console.log("com gæt", computerGuess);
}

function determinWinner(){    
      // Bestem resultatet baseret på valg
  if (userGuess === computerGuess) {
    result = "draw";
  } else if (
    (userGuess === "rock" && computerGuess === "scissors") ||
    (userGuess === "paper" && computerGuess === "rock") ||
    (userGuess === "scissors" && computerGuess === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }
  // vigtigt for at det fungerer med draw
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
    
    
    //viser tekst og resultat
    if( result === "win"){
    win.classList.remove("hidden");
    }
    else if (result === "lose"){
    lose.classList.remove("hidden");
    }
    else if( result === "draw"){
    draw.classList.remove("hidden");
    }
    
    againButton.classList.remove("hidden");
    againButton.addEventListener("click", playAgain);

//DEN LANGSOMME MÅDE//
// if(userGuess === "rock"&& computerGuess === "rock"){
//     result ="draw";

// }
// if(userGuess === "rock"&& computerGuess === "paper"){
//     result ="computer";
// }
// if(userGuess === "rock"&& computerGuess === "scissor"){
//     result ="user";
// }



// if(userGuess === "paper" && computerGuess === "paper"){
//     result ="draw";
// }
// if(userGuess === "paper" && computerGuess === "scissor"){
//     result ="computer";
// }
// if(userGuess === "paper" && computerGuess === "rock"){
//     result ="user";
// }



// if(userGuess === "scissor" && computerGuess === "scissor"){
//     result ="draw";
    
// }
// if(userGuess === "scissor" && computerGuess === "rock"){
//     result ="computer";
// }
// if(userGuess === "paper" && computerGuess === "paper"){
//     result ="user";
// }
}
