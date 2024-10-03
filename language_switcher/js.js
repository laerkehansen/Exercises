"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const locale = "de";
setTexts(locale)

function setTexts(locale){

  texts[locale].texts.forEach(element => {
    console.log(element)
    document.querySelector(element.location).textContent=element.text;
  });
}

const selectElement = document.querySelector(".language");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  // result.textContent = `Du har valgt ${event.target.value}`;
  setTexts(event.target.value);
});
