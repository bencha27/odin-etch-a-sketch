// On load
function loadPage() {
  createSquares(16);
  const blackButtonElement = document.querySelector("#black-button");
  blackButtonElement.className += "selected";
}

loadPage();




// Create grid of specified size
function createSquares(number) {
  const gridElement = document.querySelector("#grid-container");

  // Create initial row
  const gridRowElement = document.createElement("div");
  gridRowElement.className += "grid-row";
  const gridSquareElement = document.createElement("div");
  gridSquareElement.className += "grid-square";
  gridRowElement.appendChild(gridSquareElement);
  gridElement.appendChild(gridRowElement);

  for (let i = 1; i < number; i++) {
    const cloneSquare = gridSquareElement.cloneNode();
    gridRowElement.appendChild(cloneSquare);
  }

  // Copy subsequent rows
  for (let i = 1; i < number; i++) {
    const cloneRow = gridRowElement.cloneNode(true);
    gridElement.appendChild(cloneRow);
  }
}




// New grid button
const newGridButtonElement = document.querySelector("#new-grid-button");
newGridButtonElement.addEventListener("click", createNewGrid);

function createNewGrid() {
  const input = prompt("Enter grid size (number of squares per side). The maximum is 60.", 16);
  if (input > 60) input = 60;
  
  // Remove existing grid, create new grid
  const gridSectionElement = document.querySelector("#grid-section");
  const gridContainerElement = document.querySelector("#grid-container");
  gridSectionElement.removeChild(gridContainerElement);
  const newGridContainerElement = document.createElement("div");
  newGridContainerElement.id = "grid-container";
  gridSectionElement.appendChild(newGridContainerElement);

  createSquares(input);
}




// Set color from palette
let currentColor = "black";
const paletteElement = document.querySelector("#palette");
paletteElement.addEventListener("click", setCurrentColor)

function setCurrentColor(event) {
  const currentColorElement = event.target;
  if (!currentColorElement.value) return;
  
  // Unselect previous color 
  const previousColorElement = document.querySelector(".selected");
  previousColorElement.classList.remove("selected");
  
  // Update current color
  currentColorElement.className += "selected";
  currentColor = currentColorElement.value;
}




// Set grid square color when clicked
const gridElement = document.querySelector("#grid-container");
gridElement.addEventListener("click", handleGridClick);

function handleGridClick(event) {
  event.target.style.backgroundColor = currentColor;
  event.target.dataset.color = currentColor;
}




// Temporarily change grid square color while hovering
gridElement.addEventListener("mouseover", handleGridMouseover);
gridElement.addEventListener("mouseout", handleGridMouseout);

function handleGridMouseover(event) {
  event.target.style.backgroundColor = currentColor;
}

function handleGridMouseout(event) {
  const squareElement = event.target;
  const squareElementColor = squareElement.dataset.color;
  squareElement.style.backgroundColor = squareElementColor || "white";
}