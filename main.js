const colorPalette = document.querySelector(".main__cont");
const btn = document.querySelector("#btn");
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Create a random color with #
let generateCol1 = () => {
  let hex = "#";
  let firstColor = document.querySelector(".first-col");
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomColor()];
  }
  firstColor.innerHTML = hex;
  firstColor.style.backgroundColor = hex;
};

let generateCol2 = () => {
  let hex = "#";
  let scndColor = document.querySelector(".scnd-col");
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomColor()];
  }
  scndColor.innerHTML = hex;
  scndColor.style.backgroundColor = hex;
};

let generateCol3 = () => {
  let hex = "#";
  let thrdColor = document.querySelector(".thrd-col");
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomColor()];
  }
  thrdColor.innerHTML = hex;
  thrdColor.style.backgroundColor = hex;
};

let generateCol4 = () => {
  let hex = "#";
  let fourthColor = document.querySelector(".fourth-col");
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomColor()];
  }
  fourthColor.innerHTML = hex;
  fourthColor.style.backgroundColor = hex;
};

let generateCol5 = () => {
  let hex = "#";
  let fifthColor = document.querySelector(".fifth-col");
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomColor()];
  }
  fifthColor.innerHTML = hex;
  fifthColor.style.backgroundColor = hex;
};

let generateCol6 = () => {
  let hex = "#";
  let sixthColor = document.querySelector(".sixth-col");
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomColor()];
  }
  sixthColor.innerHTML = hex;
  sixthColor.style.backgroundColor = hex;
};
// Get random color
let randomColor = () => {
  return Math.floor(Math.random() * hexColors.length);
};

// Activate functions
generateCol1();
generateCol2();
generateCol3();
generateCol4();
generateCol5();
generateCol6();
