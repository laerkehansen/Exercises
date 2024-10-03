const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

function genererBreadcrumb(items){
    const breadcrumb = document.getElementById("breadCrumb");
    
    // Sørg for, at containeren er tom, før du tilføjer elementer
    breadcrumb.innerHTML = '';

    items.forEach((item, index) => {
        const li = document.createElement("li");
        
        if(index === items.length - 1){
            li.textContent = item.name; // Sidste element uden link
        } else {
            const a = document.createElement("a");
            a.textContent = item.name;
            a.href = item.link; // Tilføj link for ikke-sidste elementer
            li.appendChild(a);

             // Tilføj en separator "/"
             const separator = document.createTextNode(" / ");
             li.appendChild(separator);
        }

        breadcrumb.appendChild(li);
    });
}

//DET KODE JEG PRØVEDE OG LAVE*************************************///
// genererBreadcrumb(bc);
// const liste = document.querySelector("button");
// liste.addEventListener("click", showList);

// function showList(){
//     document.querySelector("ul").classList.remove("hidden");
//     liste.addEventListener("click", hideList);
// }

// function hideList(){
//     document.querySelector("ul").classList.add("hidden");
//     liste.addEventListener("click", showList);
//     console.log("hej");

// }
//     showList();


//DET KODE CHAT HAR LAVET*************************************///
genererBreadcrumb(bc);
const liste = document.querySelector("button");

// Lyt til klik på knappen og toggle "hidden" klassen på <ul>
liste.addEventListener("click", toggleList);

function toggleList() {
    const ul = document.querySelector("ul");

    // Skift mellem at tilføje og fjerne "hidden" klassen
    ul.classList.toggle("hidden");
}

// Fremgangsmåde:
//Start evt. med at lave en simpel HTML-struktur. Du skal have et navigationselement (<nav>) til at vise dine brødkrummepunkter, samt en knap til at udløse genereringen af brødkrummestien.
// Lav en funktion, der returnerer navnet på hvert punkt i brødkrummenavigationen i et liste-element med et tilhørende link. Det sidste punkt skal kun være tekst uden et link.
// Interaktion med knappen: Tilføj en event listener til din knap, så når den klikkes, vil din breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.
// Styling: Listeelementerne i brødkrummestien skal optræde på en række og være opdelt af en skråstreg (/) eller lignende symbol. Skråstregen skal ikke være en del af det klikbare link.

// nonbreakingspace