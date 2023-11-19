// variables

const generateButton = document.getElementById("generate-button");
const characterLength = document.getElementById("character-length");
const passwordField = document.getElementById("password");
const characterSlider = document.getElementById("character-slider");
const clipBoard = document.getElementById("clipboard");
const numberInputChecked = document.querySelectorAll("form input:checked");

// events

characterSlider.addEventListener("input", (event) => {
  characterLength.innerText = characterSlider.value;
});

generateButton.addEventListener("click", (event) => {
  let password = "";
  if (document.getElementById("uppercase").checked) {
    password += getRandomUppercase();
  }
  if (document.getElementById("lowercase").checked) {
    password += getRandomLowercase();
  }
  if (document.getElementById("numbers").checked) {
    password += getRandomNumber();
  }
  if (document.getElementById("symbols").checked) {
    password += getRandomSymbol();
  }
  document.getElementById("password").innerText = password;
});

generateButton.addEventListener("click", (event) => {
  console.log(numberInputChecked.length);
});

clipBoard.addEventListener("click", () => {
  navigator.clipboard.writeText(password.innerText);
});

// Functions

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//
