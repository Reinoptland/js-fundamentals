// Write the add, subtract, multiply, divide and calculate functions here
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);

    default:
      break;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
  // Export the add, subtract, multiply, divide and calculate functions here
};
