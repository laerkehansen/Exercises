// console.log("Math.random", Math.floor (Math.random()*(3 +1)));//

function GetRandomNumber() {
    let Number = Math.floor(Math.random() * (100+1));

    document.querySelector("h1").textContent= Number;
    console.log(Number);
}

GetRandomNumber();

// Generer et tilfældigt tal mellem 0 og 100
const randomNumber = Math.floor(Math.random() * 101);

function checkGuess() {
    // Hent brugerens gæt
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const feedbackElement = document.getElementById('feedback');
    const celebrationElement = document.getElementById('celebration');

    // Tjek om brugerens gæt er korrekt, for højt eller for lavt
    if (isNaN(userGuess)) {
        feedbackElement.textContent = "Indtast venligst et gyldigt tal.";
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = "For lavt! Prøv igen.";
    } else if (userGuess > randomNumber) {
        feedbackElement.textContent = "For højt! Prøv igen.";
    } else {
        feedbackElement.textContent = "Tillykke! Du gættede rigtigt!";
        celebrationElement.style.display = "block"; // Vis fejringsanimation
    }
}