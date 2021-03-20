const buttonContainer = document.getElementById("button-container");
const buttonClear = document.createElement("button");
buttonClear.textContent = "Click to clear screen";
buttonContainer.append(buttonClear);
const container = document.getElementById("screen-container");


function createScreen(columns, rows) {
  for (i = 0; i < (columns * rows); i++) {
    const div = document.createElement("div");
    // div.style.backgroundColor = "lightblue";
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.append(div);
    div.classList.add("square");
  }
}

createScreen(16, 16);

function colourScreen() {
    const squares = container.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    }))

}

colourScreen();

function clearScreen() {
    const squares = container.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}


buttonClear.addEventListener("click", () => {
    clearScreen();
    let input = prompt("What size do you want your grid to be?");
    if(input === null || input < 1) {
        createScreen(16, 16);
        colourScreen();
    } else {
        createScreen(input, input);
        colourScreen();
    }
})


