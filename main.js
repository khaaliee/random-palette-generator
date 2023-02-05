const colorPalette = document.querySelector(".main__cont");
const btn = document.querySelector("#btn");
let hex = "#";
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let createElements = () => {
  for (let i = 0; i < 6; i++) {
    const colorElement = document.createElement("div");
    colorElement.classList.add("new-color");
    colorPalette.appendChild(colorElement);
    let randomColor = Math.floor(Math.random() * hexColors.length);
    hex += hexColors[randomColor];
  }
  let newColors = document.querySelectorAll(".new-color");
  newColors.forEach((elem) => {
    elem.innerHTML = hex;
    elem.style.backgroundColor = hex;
  });
};

function randomColors() {
  for (let i = 0; i < 6; i++) {
    hex += hexColors[Math.floor(Math.random() * hexColors.length)];
  }
}

btn.addEventListener("click", createElements);
