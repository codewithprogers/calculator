const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error" : a / b;

let firstNumber;
let operator;
let secondNumber;

const operate = (operator, a, b) => {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
};

let choice = "";
const display = function (){
  const keyPad = document.getElementById("keyPad");
  keyPad.addEventListener("click", (event) => {
    if (event.target.classList.contains("number")) {
      if (choice.length < 10) {
        choice += event.target.textContent;
      };
      document.getElementById("screenDisplay").textContent = choice
    };
  });
};

display();