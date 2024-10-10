
//********Farve med musen********//
const box = document.querySelector('.boxcolor');
box.addEventListener("mousemove", e => {
    const boxArea = e.target.getBoundingClientRect();
    const mouseX = e.clientX - boxArea.x;
    const halfWidth = boxArea.width/2;
    const percent = (mouseX - halfWidth) / 225;
    const red = Math.floor(Math.max(0, -percent*255));
    const blue = Math.floor(Math.max(0, percent*255));
    console.log(red);

    box.style.backgroundColor = `rgd(${red}, 0, ${blue})`;
});

box.addEventListener("mouseleave", () =>{
    box.style.backgroundColor = "#fff";
});
