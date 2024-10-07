const curseWords = [  
      {    bad: "var",    good: "const",  },
      {    bad: "float",    good: "grid",  },  
      {    bad: "marquee",    good: "just don't",  },
    ];

setTexts(curseWords)

function setTexts(curseWords){

  curseWords[curseWords].texts.forEach(element => {
    console.log(element)
    document.querySelector(element.bad).textContent=element.good;
  });
}

const selectElement = document.querySelector(".language");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  // result.textContent = `Du har valgt ${event.target.value}`;
  setTexts(event.target.value);
});
