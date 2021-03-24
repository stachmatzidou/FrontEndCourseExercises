const buttonContainer = document.getElementById("button-container");
const buttonClear = document.createElement("button");
buttonClear.textContent = "Clear screen";
buttonContainer.append(buttonClear);
const container = document.getElementById("screen-container");


function createScreen(columns, rows) {
  for (let i = 0, size = columns * rows; i < size; i++) {
    const div = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    div.style.backgroundColor = "lightGray";
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
    let input = prompt("How many squares per side?");
    console.log(input);
    if(input === null || input < 1 || input > 200) {
        createScreen(16, 16);
        colourScreen();
    } else {
        createScreen(input, input);
        colourScreen();
    }
})


