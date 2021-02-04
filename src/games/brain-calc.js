import getRandomNumber from '../utils.js';

export const getRandomInput = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  return [operand1, operator, operand2];
};
export const input = getRandomInput();

export const statement = 'What is the result of the expression?';

export const calculateResult = ([operand1, operator, operand2]) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
  }
  return result;
};
export const showOperation = ([operand1, operator, operand2]) => `${operand1} ${operator} ${operand2}`;
