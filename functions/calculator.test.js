const { add, subtract, multiply, divide, calculate } = require("./calculator");

describe("add()", () => {
  test("should be defined and a function", () => {
    expect(add).toBeDefined();
    expect(add).toBeInstanceOf(Function);
  });

  test("should take two numbers as arguments and return the sum", () => {
    const number1 = 4;
    const number2 = 7;

    const sum1 = add(number1, number2);
    expect(sum1).toBe(11);

    const number3 = 5;
    const number4 = 11;

    const sum2 = add(number3, number4);
    expect(sum2).toBe(16);
  });
});

describe("subtract()", () => {
  test("should be defined and a function", () => {
    expect(subtract).toBeDefined();
    expect(subtract).toBeInstanceOf(Function);
  });

  test(`should take two numbers as arguments and return 
      the result of subtracting the second from the first`, () => {
    const number1 = 11;
    const number2 = 9;

    const result1 = subtract(number1, number2);
    expect(result1).toBe(2);

    const number3 = 10;
    const number4 = 6;

    const result2 = subtract(number3, number4);
    expect(result2).toBe(4);
  });
});

describe("multiply()", () => {
  test("should be defined and a function", () => {
    expect(multiply).toBeDefined();
    expect(multiply).toBeInstanceOf(Function);
  });

  test(`should take two numbers as arguments and return 
      the product of multiplying the first times the second`, () => {
    const number1 = 2;
    const number2 = 5;

    const product1 = multiply(number1, number2);
    expect(product1).toBe(10);

    const number3 = 3;
    const number4 = 4;

    const product2 = multiply(number3, number4);
    expect(product2).toBe(12);
  });
});

describe("divide()", () => {
  test("should be defined and a function", () => {
    expect(divide).toBeDefined();
    expect(divide).toBeInstanceOf(Function);
  });

  test(`should take two numbers as arguments and return 
      the result of dividing the first by second`, () => {
    const number1 = 15;
    const number2 = 3;

    const result1 = divide(number1, number2);
    expect(result1).toBe(5);

    const number3 = 14;
    const number4 = 7;

    const result2 = divide(number3, number4);
    expect(result2).toBe(2);
  });
});

describe("calculate()", () => {
  test("should be defined and a function", () => {
    expect(calculate).toBeDefined();
    expect(calculate).toBeInstanceOf(Function);
  });

  test(`should take a number, an operator and another number as arguments 
      and return the result applying the operation`, () => {
    const number1 = 12;
    const number2 = 4;
    const operationAdd = "+";
    const operationSubtract = "-";
    const operationMultiply = "*";
    const operationDivide = "/";

    // 12 + 4
    const result1 = calculate(number1, operationAdd, number2);
    expect(result1).toBe(16);

    // 12 - 4
    const result2 = calculate(number1, operationSubtract, number2);
    expect(result2).toBe(8);

    // 12 * 4
    const result3 = calculate(number1, operationMultiply, number2);
    expect(result3).toBe(48);

    // 12 / 4
    const result4 = calculate(number1, operationDivide, number2);
    expect(result4).toBe(3);
  });

  test(`should return NaN when the operator is not +, -, * or /`, () => {
    const number1 = 12;
    const number2 = 4;
    const operationWhichDoesNotExist = "bla";

    const result1 = calculate(number1, operationWhichDoesNotExist, number2);
    expect(result1).toBe(NaN);
  });
});
