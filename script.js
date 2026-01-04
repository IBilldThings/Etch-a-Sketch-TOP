const btn = document.querySelector(".btn")
const grid = document.querySelector(".container");
let response = 16;

function randomColor(){ //Randomize color for each square
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

function createGrid(response){ //Generate the grid based on the response number (default: 16)
    grid.innerHTML = "";

    const size = 100 / response;

    for (let i = 0; i < response * response; i++){
        let square = document.createElement("div");
        square.style.boxSizing = "border-box";
        square.style.backgroundColor = randomColor();

        square.style.flex = `0 0 ${size}%`;
        square.style.height = `${size}%`;

        square.classList.add('changingDiv');
        grid.appendChild(square);
    }
}

function gridColoring(){ //Color the grid through mouse entry
    let coloring = document.querySelectorAll(".changingDiv");

    coloring.forEach(div => {
        div.addEventListener("mouseenter", colorChange);
        let opacity = 0;
        div.style.opacity = opacity;

        function colorChange(){
            if (opacity != 1){ //Color by slowly increasing opacity
                opacity += 0.10;
                div.style.opacity = opacity;
            }
            
        }

    });
}

createGrid(response); // Init the grid with default 16 squares
gridColoring(); // Start event for mouse coloring

btn.addEventListener("click", () =>{ // Button to reset and get response
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