// Write the add, subtract, multiply, divide and calculate functions here
add = (num1,num2) => {
  const total =  num1 + num2;
  return total;
}
subtract = (num1,num2) => {
  const total = num1 - num2;
  return total;
}
multiply = (num1,num2) => {
  const total = num1 * num2;
  return total;
}
divide = (num1,num2) =>{
  const total = num1 / num2;
  return total;
}
calculate = (num1,opp,num2) =>{

  switch(opp) {
    case '+':
      return add(num1,num2);
      break;
    case '-':
      return subtract(num1,num2);
      break;
    case '*':
      return multiply(num1,num2);
      break;
    case '/':
      return divide(num1,num2);
      break;
    default:
      return NaN;
  } 
}



module.exports = {
  add:add,
  subtract:subtract,
  multiply:multiply,
  divide:divide,
  calculate:calculate,
  // Export the add, subtract, multiply, divide and calculate functions here
};
