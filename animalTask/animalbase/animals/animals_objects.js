"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
    name: "-default name",
    desc: "-no description",
    type: "_unknown",
    age: 0

}

const allAnimals = [
    // {
    //     name: "Mandu",
    //     type: "cat",
    //     desc: "the amazing",
    //     age: 10
    // },
    // {
    //     name: "Mia",
    //     type: "cat",
    //     desc: "the black" ,
    //     age: 10
    // },
    // {
    //     name: "Leeloo",
    //     type: "dog",
    //     desc: "the growing", 
    //     age: 3
    // },
    // {
    //     name: "Toothless",
    //     type: "dragon",
    //     desc: "the trained",
    //     age: 14
    // },
    // {
    //     name: "ScoobyDoo",
    //     type: "dog",
    //     desc: "the wondering",
    //     age: 58
    // },
    // {
    //     name: "Horsey",
    //     type: "horse",
    //     desc: "the horsing",
    //     age: 10
    // }
];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        const animal = Object.create(Animal);

        //exstract data from json Object
        const fullname = jsonObject.fullname;
        
        const firstSpace = fullname.indexOf(" ");
        const secondSpace = fullname.indexOf(" ", firstSpace + 1);
        const lastSpace = fullname.lastIndexOf(" ");

        const name = fullname.substring(0, firstSpace);
        const desc = fullname.substring(secondSpace, lastSpace);
        const type = fullname.substring(lastSpace + 1);

        // console.log(`name: _${name}_ 
        //     desc: _${desc}_ 
        //     type: _${type}_`);

            //put cleaned data into newly created object
            animal.name = name;
            animal.desc = desc;
            animal.type = type;
            animal.age = jsonObject.age;

            //add object to the global array
            allAnimals.push(animal);
        // TODO: MISSING CODE HERE !!!
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


