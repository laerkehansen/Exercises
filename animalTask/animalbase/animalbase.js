"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0,
    star: false
};

const settings = {
    filter: "all",
    sortBy: "name",
    sortDir: "asc"
}
let filterBy = "all";

function start( ) {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons   
    registerButtons();
    loadJSON();
}

function registerButtons(){
    document.querySelectorAll("[data-action='filter']")
    .forEach(button => button.addEventListener("click", selectFilter));

    document.querySelectorAll("[data-action='sort']")
    .forEach(button => button.addEventListener("click", selectSort));
}


async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    
    // when loaded, prepare data objects
    
    prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    allAnimals = jsonData.map( prepareObject );
    
    // TODO: This might not be the function we want to call first
    //fixed so we filter and sort on the first load
   buildList();
}

function prepareObject( jsonObject ) {
    const animal = Object.create(Animal);
    
    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;
    
    return animal;
}

function selectFilter( event ){
    const filter = event.target.dataset.filter;
    console.log(`user selected ${filter}`);
    // filterList(filter);
    setFilter(filter);
}

function setFilter(filter){
    settings.filterBy = filter;
buildList()
}

function filterList (filteredList){
    // let filteredList = allAnimals;
    if (settings.filterBy === "cat"){
        //lav en liste af kun katte
        filteredList = allAnimals.filter(isCat);
    } else if ( settings.filterBy === "dog"){
        //lav en liste af kun hunde
        filteredList = allAnimals.filter(isDog);
    }

    return filteredList;
}

function isCat (animal){
    return animal.type === "cat";
}

function isDog (animal){
    return animal.type === "dog";
}
function selectSort( event ){
    const sortBy = event.target.dataset.sort;
    const sortDir = event.target.dataset.sortDirection;
    
    //findo the "old" sortBy element
    const oldElement = document.querySelector(`[data-sort='${settings.sortBy}']`);
    oldElement.classList.remove("sortby");

    //indicate active sort
    event.target.classList.add("sortby");

    //toggle the direction
    if(sortDir === "asc"){
        event.target.dataset.sortDirection = "desc";
    }else {
        event.target.dataset.sortDirection = "asc";
    }
    console.log(`user selected ${sortBy} - ${sortDir}`);
    setSort(sortBy, sortDir);
}

function setSort (sortBy, sortDir){
settings.sortBy = sortBy;
settings.sortDir = sortDir;
buildList();
}

function sortList(sortedList){
    // let sortedList = allAnimals;
    let direction = 1;
    if(settings.sortDir === "desc"){
        direction = -1;
    } else {
        settings.direction = 1;
    }

    sortedList = sortedList.sort(sortByProperty);
   

    function sortByProperty ( animalA, animalB){
        if (animalA[settings.sortBy] < animalB[settings.sortBy]){
            return -1 * direction;
        } else {return 1 * direction;}
    }

    return (sortedList);
}

// function sortByType ( animalA, animalB){
//     if (animalA.type < animalB.type){
//         return -1;
//     } else {return 1;}
// }

function buildList(){
    const currentList = filterList(allAnimals);
    const sortedList = sortList( currentList);

    displayList(sortedList);
}

function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    if (animal.star === true){
        clone.querySelector("[data-field=star]").textContent = "⭐️";
    } else {
        clone.querySelector("[data-field=star]").textContent = "☆";
    }
    clone.querySelector("[data-field=star]").addEventListener("click", clickStar);

    function clickStar(){
        if (animal.star === true){
            animal.star = false;
        } else {
            animal.star = true;
    }

    buildList();
}

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


// "use strict";

// window.addEventListener("DOMContentLoaded", start);

// let allAnimals = [];

// // Prototypen for alle dyr
// const Animal = {
//     name: "",
//     desc: "-unknown animal-",
//     type: "",
//     age: 0
// };

// function start() {
//     console.log("ready");

//     // Tilføj event listeners til filter-knapperne
//     const allButtons = document.querySelectorAll(".filter");

//     allButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             // Få værdien af data-filter (f.eks. 'dog', 'cat' eller '*')
//             const filter = this.getAttribute("data-filter");
//             console.log(`Filtrerer efter: ${filter}`);

//             // Kald filter-funktionen med den valgte filterværdi
//             filterList(filter);
//         });
//     });

//     // Hent JSON-data
//     loadJSON();
// }

// async function loadJSON() {
//     const response = await fetch("animals.json");
//     const jsonData = await response.json();
    
//     // Når data er indlæst, forbered objekterne
//     prepareObjects(jsonData);
// }

// function prepareObjects(jsonData) {
//     allAnimals = jsonData.map(prepareObject);

//     // Vis alle dyr til at starte med
//     displayList(allAnimals);
// }

// function prepareObject(jsonObject) {
//     const animal = Object.create(Animal);

//     const texts = jsonObject.fullname.split(" ");
//     animal.name = texts[0];
//     animal.desc = texts[2];
//     animal.type = texts[3];
//     animal.age = jsonObject.age;

//     return animal;
// }

// function filterList(filter) {
//     let filteredAnimals;

//     if (filter === "*") {
//         // Hvis filteret er '*', skal alle dyr vises
//         filteredAnimals = allAnimals;
//     } else {
//         // Filtrer listen baseret på dyretype (f.eks. 'dog' eller 'cat')
//         filteredAnimals = allAnimals.filter(animal => animal.type === filter);
//     }

//     // Vis de filtrerede dyr
//     displayList(filteredAnimals);
// }

// function displayList(animals) {
//     // Ryd listen
//     document.querySelector("#list tbody").innerHTML = "";

//     // Byg en ny liste med de filtrerede dyr
//     animals.forEach(displayAnimal);
// }

// function displayAnimal(animal) {
//     // Opret en klon af skabelonen
//     const clone = document.querySelector("template#animal").content.cloneNode(true);

//     // Sæt data i klonen
//     clone.querySelector("[data-field=name]").textContent = animal.name;
//     clone.querySelector("[data-field=desc]").textContent = animal.desc;
//     clone.querySelector("[data-field=type]").textContent = animal.type;
//     clone.querySelector("[data-field=age]").textContent = animal.age;

//     // Tilføj klonen til listen
//     document.querySelector("#list tbody").appendChild(clone);
// }
