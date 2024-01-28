/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 10;
  }
  add(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input: not a number");
    }
    this.result += parseInt(num);
  }
  subtract(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input: not a number");
    }
    this.result -= parseInt(num);
  }
  multiply(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input: not a number");
    }
    this.result *= parseInt(num);
  }
  divide(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input: not a number");
    }
    if (num === 0) {
      throw new Error("Division by zero");
    }
    this.result /= parseFloat(num);
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    // Remove continuous spaces and split the expression into tokens
    const tokens = expression.trim().replace(/\s+/g, " ").split(" ");
    const stack = [];
    const operators = ["+", "-", "*", "/"];

    for (const token of tokens) {
      if (operators.includes(token)) {
        continue;
      } else if (!isNaN(token)) {
        stack.push(token);
      } else {
        throw new Error("Invalid input: contains non-numerical characters");
      }
    }

    // Reversing the stack to correctly handle arithmetic precedence
    stack.reverse();

    while (stack.length > 1) {
      const num1 = parseFloat(stack.pop());
      const operator = stack.pop();
      const num2 = parseFloat(stack.pop());

      switch (operator) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          if (num2 === 0) {
            throw new Error("Division by zero");
          }
          stack.push(num1 / num2);
          break;
        default:
          throw new Error("Invalid operator");
      }
    }

    if (stack.length === 1) {
      this.result = parseFloat(stack[0]);
    }

    return this.result;
  }
}

const calc = new Calculator();
console.log("TOkEn", calc.calculate("10 - (4 + 2)"));

module.exports = Calculator;
