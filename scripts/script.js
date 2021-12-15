"use strict";
// Methods and Selectors
const gridContainer = document.getElementById("grid-container");
// Grid Setup

gridContainer.style.gridTemplateColumns = "repeat(32, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(32, 1fr)";

function createElements(gridSize) {
    for (let i = 0; i <= gridSize * gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.addEventListener("mouseover", draw);
        gridContainer.appendChild(gridElement);
    }
}

// Grid Draw
function draw(e) {
    e.target.style.backgroundColor = "#17252a";
}

// Start Grid
createElements(32);
