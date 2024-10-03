const list = document.querySelector("ul");
const valueArr = [];

setInterval(GenerateBars, 1000);

function GenerateBars(){
    const randomNum = Math.floor(Math.random() * 100);
     // Hvis der er mere end 19 elementer i arrayet, fjerner vi det ældste
    if (valueArr.length >= 19){
        valueArr.shift(); // Fjern det første element fra arrayet
        list.removeChild(list.firstChild); // Fjern det første <li> element fra DOM'en
        }
    
    valueArr.push(randomNum); // Tilføj det nye tal til arrayet

    // Opret en ny <li> og tilføj til listen
    const li = document.createElement("li");
    li.style.setProperty("--height", randomNum);
    list.appendChild(li);
    
    console.log(valueArr); // Udskriv arrayet i konsollen
}


