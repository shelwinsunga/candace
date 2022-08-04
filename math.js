const inputDisplay = document.getElementById("input-display");
const outputDisplay = document.getElementById("output-display");
const numberPad = document.querySelectorAll(".num");
const clearBtn = document.getElementById("clear");

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, operator, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if ((operator = "*")) {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  }
}

function displayCalc() {
  let prevNum = "";
  let numberSequence = "";
  numberPad.forEach((number) => {
    number.addEventListener("click", () => {
      prevNum = number.innerHTML;
      numberSequence = numberSequence + `${prevNum}`;
      inputDisplay.innerHTML = numberSequence;
      console.log(numberSequence);
    });

    clearBtn.addEventListener("click", () => {
      prevNum = "";
      numberSequence = "";
      inputDisplay.innerHTML = numberSequence;
    });
  });
}

displayCalc();

let a = "5";
let b = "10";
console.log(a + b);
