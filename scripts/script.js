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
const darkModeBtn = document.getElementById("darkmode-btn");
const lightModeBtn = document.getElementById("lightmode-btn");
const liteBriteBtn = document.getElementById("litebrightmode-btn");
let mode = "light";
let gridSize = 16;
let elementShadowSize = 16;

//Event Listeners
lightModeBtn.onclick = () => setMode("light");
darkModeBtn.onclick = () => setMode("dark");
liteBriteBtn.onclick = () => setMode("liteBrite");

// Mode Switch

function setMode(modeClick) {
    modeSwitch(modeClick);
    mode = modeClick;
    createElements(gridSize);
}

function modeSwitch(modeClick) {
    gridContainer.classList.remove("dark-mode");
    gridContainer.classList.add("light-mode");
    if (mode === "light") {
        lightModeBtn.classList.remove("btn-active");
    } else if (mode === "dark") {
        darkModeBtn.classList.remove("btn-active");
    } else if (mode === "liteBrite") {
        liteBriteBtn.classList.remove("btn-active");
    }
    if (modeClick === "light") {
        gridContainer.classList.add("light-mode");
        lightModeBtn.classList.add("btn-active");
    } else if (modeClick === "dark") {
        gridContainer.classList.add("dark-mode");
        darkModeBtn.classList.add("btn-active");
    } else if (modeClick === "liteBrite") {
        gridContainer.classList.add("dark-mode");
        liteBriteBtn.classList.add("btn-active");
    }
}

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
        gridElement.style.transition = ".1s";
        gridElement.style.border = `.5px inset #3aafa9`;
        gridContainer.appendChild(gridElement);
        if (mode === "liteBrite") {
            gridElement.style.borderRadius = "50%";
            console.log(gridElement.style.fontSize);
            if (gridSize >= 16 && gridSize < 32) {
                gridElement.style.border = `4px inset #00000080`;
            } else if (gridSize >= 32 && gridSize <= 40) {
                gridElement.style.border = `2px inset #00000080`;
            } else if (gridSize > 40) {
                gridElement.style.border = `none`;
            }
        }
    }
}

// Grid Draw
function draw(e) {
    if (mode === "light") {
        e.target.style.backgroundColor = "#17252a";
    } else if (mode === "dark") {
        e.target.style.backgroundColor = "#3aafa9";
    } else if (mode === "liteBrite") {
        let randomColor = Math.floor(Math.random() * lbColors.length);
        e.target.style.backgroundColor = `${lbColors[randomColor]}`;
    }
}

//Grid Erase
function gridErase() {
    gridContainer.innerHTML = "";
}
// Starting Grid State
createElements(16);
gridContainer.classList.add("light-mode");
lightModeBtn.classList.add("btn-active");
