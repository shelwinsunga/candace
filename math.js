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

function parse(s) {
  let num = "";
  let arr = [];
  let operand = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "+") {
      arr.push(num);
      num = "";
    } else if (s[i] != "+") {
      num += s[i];
    }
  }
  arr.push(num);
  let firstNum = parseInt(arr[0]);
  let secondNum = parseInt(arr[1]);
  return firstNum + secondNum;
}

function updateDisplay(input, output) {
  inputDisplay.innerHTML = input;
  outputDisplay.innerHTML = output;
}

function main() {
  let input = "";
  let numberSequence = "";
  let secondNumSequence = "";

  numberPad.forEach((number) => {
    number.addEventListener("click", () => {
      input = number.innerHTML;
      numberSequence = numberSequence + `${input}`;

      // inputDisplay.innerHTML = numberSequence;
      updateDisplay(numberSequence);
    });

    clearBtn.addEventListener("click", () => {
      input = "";
      numberSequence = "";
      updateDisplay("", "");
    });
  });
}

main();

// function displayCalc() {
//   let input = "";
//   let numberSequence = "";
//   let secondSequence = "";

//   numberPad.forEach((number) => {
//     number.addEventListener("click", () => {
//       input = number.innerHTML;
//       numberSequence = numberSequence + `${input}`;

//       if(number.id == "add" ||
//       number.id == "subtract" ||
//       number.id == "multiply" ||
//       number.id == "divide" ){
//         //TODO: Keep track of second numbers
//         //Stop taking input from other operations

//       }
//       if(number.id == "equals"){

//       }

//         inputDisplay.innerHTML = numberSequence;

//     });

//     clearBtn.addEventListener("click", () => {
//       input = "";
//       numberSequence = "";
//       inputDisplay.innerHTML = numberSequence;
//     });
//   });
// }

// displayCalc();
