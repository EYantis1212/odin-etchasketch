"use strict";
// Colors
const lbColors = [
    "#27a5db",
    "#89c536",
    "#fcd504",
    "#f09615",
    "#e0165c",
    "#cc56a3",
];
// Methods and Selectors
const gridContainer = document.getElementById("grid-container");
const gridSlider = document.getElementById("grid-slider");
const sliderDisplay = document.getElementById("slider-display");
const drkModeBtn = document.getElementById("darkmode-btn");
const ltModeBtn = document.getElementById("lightmode-btn");
const liteBrightBtn = document.getElementById("litebrightmode-btn");
let mode = "ltMode";
let gridSize = 16;

//Event Listeners

// Dark Mode
drkModeBtn.addEventListener("click", function () {
    mode = "drkMode";
    drkModeBtn.classList.remove("button-inactive");
    drkModeBtn.classList.add("button-active");
    ltModeBtn.classList.remove("button-active");
    ltModeBtn.classList.add("button-inactive");
    liteBrightBtn.classList.add("button-inactive");
    liteBrightBtn.classList.remove("button-active");
    gridContainer.classList.remove("light-mode");
    gridContainer.classList.add("dark-mode");
    createElements(gridSize);
});

// Light Mode
ltModeBtn.addEventListener("click", function () {
    mode = "ltMode";
    drkModeBtn.classList.add("button-inactive");
    drkModeBtn.classList.remove("button-active");
    ltModeBtn.classList.add("button-active");
    ltModeBtn.classList.remove("button-inactive");
    liteBrightBtn.classList.add("button-inactive");
    liteBrightBtn.classList.remove("button-active");
    gridContainer.classList.add("light-mode");
    gridContainer.classList.remove("dark-mode");

    createElements(gridSize);
});
// Light Bright Mode
liteBrightBtn.addEventListener("click", function () {
    mode = "liteBrightMode";
    drkModeBtn.classList.add("button-inactive");
    drkModeBtn.classList.remove("button-active");
    ltModeBtn.classList.remove("button-active");
    ltModeBtn.classList.add("button-inactive");
    liteBrightBtn.classList.add("button-active");
    liteBrightBtn.classList.remove("button-inactive");
    gridContainer.classList.remove("light-mode");
    gridContainer.classList.add("dark-mode");
    createElements(gridSize);
});

// Slider Functionality
sliderDisplay.textContent = gridSlider.value;
gridSlider.oninput = function () {
    gridErase();
    sliderDisplay.textContent = this.value;
    createElements(this.value);
    gridSize = this.value;
    console.log(this.value);
};

// Grid Setup

function createElements(gridSize) {
    gridErase();
    for (let i = 0; i < gridSize * gridSize; i++) {
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        const gridElement = document.createElement("div");
        gridElement.addEventListener("mouseover", draw);
        gridContainer.appendChild(gridElement);
        if (mode === "liteBrightMode") {
            gridElement.style.borderRadius = "50%";
        }
    }
}

// Grid Draw
function draw(e) {
    if (mode === "ltMode") {
        e.target.style.backgroundColor = "#17252a";
    } else if (mode === "drkMode") {
        e.target.style.backgroundColor = "#3aafa9";
    } else if (mode === "liteBrightMode") {
        let randomColor = Math.floor(Math.random() * lbColors.length);
        e.target.style.backgroundColor = `${lbColors[randomColor]}`;
        e.target.style.border = `.3vw inset #00000080`;
    }
}

//Grid Erase
function gridErase() {
    gridContainer.innerHTML = "";
}
// Starting Grid State
createElements(16);
gridContainer.classList.add("light-mode");
ltModeBtn.classList.remove("button-inactive");
ltModeBtn.classList.add("button-active");
