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


function calculate(num1, oper, num2) {

  switch ( oper ) {

    case "+":
      return num1 + num2;

      break;

    case "-":
      return num1 - num2;

      break;

    case "*":
      return num1 * num2;

      break;

    case "/":
      return num1 / num2;

      break;


    default:
      return NaN;

      break;

  }
}


module.exports = {
  // Export the add, subtract, multiply, divide and calculate functions here
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    calculate: calculate,
};
