// console.log("Math.random", Math.floor (Math.random()*(3 +1)));//

function GetRandomNumber() {
    let Number = Math.floor(Math.random() * (100+1));

    document.querySelector("h1").textContent= Number;
    console.log(Number);
}

GetRandomNumber();