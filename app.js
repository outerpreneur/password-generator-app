// variables

const generateButton = document.getElementById("generate-button");
const characterLength = document.getElementById("character-length");
const passwordField = document.getElementById("password");
const characterSlider = document.getElementById("character-slider");
const clipBoard = document.getElementById("clipboard");

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
  const numberInputChecked = document.querySelectorAll(
    'input[type="checkbox"]'
  );
  let checkedCount = 0;

  numberInputChecked.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  if (checkedCount <= 1) {
    document
      .getElementById("strength-bars")
      .querySelectorAll("div")
      .forEach((block) => {
        block.classList.remove("bg-green-300");
        block.classList.remove("bg-orange-300");
        block.classList.remove("bg-yellow-300");
      });
    document.getElementById("too-weak").classList.add("bg-red-500");
    document.getElementById("strenth-level").innerText = "TOO WEAK!";
  }

  if (checkedCount === 2) {
    document
      .getElementById("strength-bars")
      .querySelectorAll("div")
      .forEach((block) => {
        block.classList.remove("bg-green-300");
        block.classList.remove("bg-red-300");
        block.classList.remove("bg-yellow-300");
      });
    document.getElementById("too-weak").classList.add("bg-orange-300");
    document.getElementById("weak").classList.add("bg-orange-300");
    document.getElementById("strenth-level").innerText = "WEAK";
  }

  if (checkedCount === 3) {
    document
      .getElementById("strength-bars")
      .querySelectorAll("div")
      .forEach((block) => {
        block.classList.remove("bg-green-300");
        block.classList.remove("bg-red-300");
        block.classList.remove("bg-orange-300");
      });

    document.getElementById("too-weak").classList.add("bg-yellow-300");
    document.getElementById("weak").classList.add("bg-yellow-300");
    document.getElementById("medium").classList.add("bg-yellow-300");
    document.getElementById("strenth-level").innerText = "MEDIUM";
  }

  if (checkedCount === 4) {
    document
      .getElementById("strength-bars")
      .querySelectorAll("div")
      .forEach((block) => {
        block.classList.remove("bg-yellow-500");
        block.classList.remove("bg-red-300");
        block.classList.remove("bg-orange-300");
      });
    document.getElementById("too-weak").classList.add("bg-green-300");
    document.getElementById("weak").classList.add("bg-green-300");
    document.getElementById("medium").classList.add("bg-green-300");
    document.getElementById("strong").classList.add("bg-green-300");
    document.getElementById("strenth-level").innerText = "STRONG";
  }
  console.log(checkedCount);
});

clipBoard.addEventListener("click", () => {
  navigator.clipboard.writeText(password.innerText);
  document.getElementById("copy-text").classList.remove("hidden");
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

function updateSliderColor(slider) {
  // Get the current value of the slider
  const sliderValue = slider.value;

  // Calculate a percentage based on the slider's position
  const percentage =
    ((sliderValue - slider.min) / (slider.max - slider.min)) * 100;

  // Update the gradient color dynamically
  slider.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #fff ${percentage}%)`;
}

//
