document.querySelector(`[data-action="set"]`).addEventListener(("click", setAndGet));
document.querySelector(`[data-action="get"]`).addEventListener(("click", setAndGet));
const setText = document.querySelector(".set");
const getText = document.querySelector(".get");

function setAndGet(){
const target = evt.target;
const action = target.dataset. action;

console.log("target", target);
console.log("action", action);

if (action === "set"){
    localStorage.setItem("myDog", setText.value);
}
if (action === "get"){
    getText.value = localStorage.getItem("myDog");
}
}