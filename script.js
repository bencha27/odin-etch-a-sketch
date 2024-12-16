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

// Default grid
createSquares(16);




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




// 