const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error" : a / b;

let firstNumber = null;
let operator = null;
let secondNumber = null;

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
};

let choice = "";

const display = function () {
  const keyPad = document.getElementById("keyPad");
  const screen = document.getElementById("screenDisplay");

  keyPad.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("number")) {
      if (choice.length < 9) {
        choice += target.textContent;
      }
      screen.textContent = Number(choice).toLocaleString();
    }

    else if (target.classList.contains("operator") && !target.classList.contains("equals")) {
      
      if (firstNumber !== null && operator !== null && choice !== "") {
        secondNumber = Number(choice);
        const result = operate (operator, firstNumber, secondNumber);
        screen.textContent = Number(result).toLocaleString();
        firstNumber = result;
      } else {
        firstNumber = Number(choice);
      }

      operator = target.dataset.op;
      choice = "";
    }

    else if (target.classList.contains("equals")) {
      if (operator === null || choice === "") return;

      secondNumber = Number(choice);
      const result = operate (operator, firstNumber, secondNumber);

      if (result === "Error" || result === null) {
        screen.textContent = "Error";
        choice = "";
        firstNumber = null;
        operator = null;
        return;
      }

      screen.textContent = Number(result).toLocaleString();
      choice = result.toString();
      firstNumber = result;
      operator = null;
    }

    else if (target.classList.contains("back")) {
      if (choice.length === 0) return;

      let back = choice.slice(0, -1);
      choice = back;
      screen.textContent = back === "" ? "0" : back;
    }

    else if (target.classList.contains("allClear")) {
      screen.textContent = "0";
      firstNumber = null;
      operator = null;
      secondNumber = null;
      choice = "";
    }
  });
};

display();