const grid = document.querySelector(".container");

for (i = 0; i < 16; i++){
    let square = document.createElement("div");
    square.style.borderStyle = "solid";
    square.style.borderColor = "black";
    square.style.borderWidth = "2px";
    square.style.flex = "0 0 25%";
    square.style.height = "25%";
    square.style.boxSizing = "border-box";
    square.classList.add('changingDiv');
    grid.appendChild(square);
}

let coloring = document.querySelectorAll(".changingDiv");

coloring.forEach(div => {
    div.addEventListener("mouseenter", colorChange);

    function colorChange(){
        div.style.backgroundColor = "black";
    }

});