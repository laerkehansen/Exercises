// const curseWords = [  
//   { bad: "var", good: "const" },
//   { bad: "float", good: "grid" },  
//   { bad: "marquee", good: "just don't" }
// ];

// // Variabel til at holde styr på nuværende tilstand (om vi viser "bad" eller "good" ord)
// let isShowingBadWords = true; // Starter med de dårlige ord

// // Find knappen og tilføj en event listener til den
// document.getElementById("replaceButton").addEventListener("click", function() {
//   toggleTexts(curseWords);
// });

// function toggleTexts(curseWords) {
//   const textElement = document.getElementById("text");  // Elementet med tekst der skal ændres
//   let updatedText = textElement.textContent; // Få den aktuelle tekst
  
//   // Skift mellem "dårlige" og "gode" ord baseret på tilstanden
//   curseWords.forEach(element => {
//     if (isShowingBadWords) {
//       // Hvis vi viser dårlige ord, skift til gode ord
//       updatedText = updatedText.replaceAll(element.bad, element.good);
//     } else {
//       // Hvis vi viser gode ord, skift tilbage til de dårlige ord
//       updatedText = updatedText.replaceAll(element.good, element.bad);
//     }
//   });

//   // Opdater teksten i elementet
//   textElement.textContent = updatedText;

//   // Vend tilstanden, så næste klik skifter det tilbage
//   isShowingBadWords = !isShowingBadWords;
// }   

// Forklaring af ændringer:
// Tilstandsflag: Jeg tilføjede en variabel isShowingBadWords, som starter med værdien true, hvilket betyder, at vi i starten viser de "dårlige" ord.

// Toggling af ord: Funktionen toggleTexts() tjekker værdien af isShowingBadWords. Hvis den er true, erstatter vi de "dårlige" ord med de "gode" ord. Hvis den er false, skifter vi tilbage fra "gode" til "dårlige" ord.

// Toggling af tilstand: Efter hver udskiftning vendes værdien af isShowingBadWords ved at bruge isShowingBadWords = !isShowingBadWords. Det betyder, at næste gang brugeren klikker, vil teksten ændres den modsatte vej.

// Resultat:
// Når brugeren klikker på knappen, vil teksten skifte mellem at vise de "dårlige" ord og de "gode" ord frem og tilbage.


const curseWords = [  
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },  
  { bad: "marquee", good: "just don't" }
];

let flagIsSafe = false;

let theText = document.querySelector("p").textContent;
document.querySelector("button").addEventListener("click", replaceBadwords);

function replaceBadwords (){

  if (flagIsSafe === false){
    curseWords.forEach((curseWord) => {
      theText = theText.replaceAll(curseWord.bad, `<span>${curseWord.good}</span>`);
    });
    console.log("theTExt", theText);
    document.querySelector("p").innerHTML = theText;
    flagIsSafe = true;
  }else{
    document.querySelector("dialog").showModal();
    }
  }

// console.log("theText", theText);
// }

// function isItSafe(){
//   return false; 
// }