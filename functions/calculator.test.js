const { add, subtract, multiply, divide, calculate } = require("./calculator");

describe("add()", () => {
  test("should be defined and a function", () => {
    expect(add).toBeDefined();
    expect(add).toBeInstanceOf(Function);
  });

  test("should take two numbers as arguments and return the sum", () => {
    const sum1 = add(4, 7);
    expect(sum1).toBe(11);

    const sum2 = add(5, 11);
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
    const result1 = subtract(11, 9);
    expect(result1).toBe(2);

    const result2 = subtract(10, 6);
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
    const product1 = multiply(2, 5);
    expect(product1).toBe(10);

    const product2 = multiply(3, 4);
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
    const result1 = divide(15, 3);
    expect(result1).toBe(5);

    const result2 = divide(14, 7);
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
    const result1 = calculate(12, "+", 4);
    expect(result1).toBe(16);

    const result2 = calculate(12, "-", 4);
    expect(result2).toBe(8);

    const result3 = calculate(12, "*", 4);
    expect(result3).toBe(48);

    const result4 = calculate(12, "/", 4);
    expect(result4).toBe(3);
  });

  test(`should return NaN when the operator is not +, -, * or /`, () => {
    const result1 = calculate(4, "bla", 12);
    expect(result1).toBe(NaN);
  });
});
