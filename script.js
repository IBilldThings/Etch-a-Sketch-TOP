const btn = document.querySelector(".btn")
const grid = document.querySelector(".container");
let response = 16;

function createGrid(response){
    grid.innerHTML = "";

    const size = 100 / response;

    for (let i = 0; i < response * response; i++){
        let square = document.createElement("div");
        square.style.border = "1px solid black";
        square.style.boxSizing = "border-box";

        square.style.flex = `0 0 ${size}%`;
        square.style.height = `${size}%`;

        square.classList.add('changingDiv');
        grid.appendChild(square);
    }
}

function gridColoring(){
    let coloring = document.querySelectorAll(".changingDiv");

    coloring.forEach(div => {
        div.addEventListener("mouseenter", colorChange);

        function colorChange(){
            div.style.backgroundColor = "black";
        }

    });
}

createGrid(response); // Init the grid with 16 squares
gridColoring();

btn.addEventListener("click", () =>{ // retrieve response
    response = prompt("What size do you want for the grid? (Max: 100) (Min: 1)", 16);
    while (true){
        if (response > 100 || response < 1){
            response = prompt("Value too high or too low, please try again.")
        }else {
            break;
        }
    }
    createGrid(response);
    gridColoring();
});