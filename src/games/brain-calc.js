/* import {
  greet, executeGame, steps, askQuestionTakeAnswer, congratulate, giveTaskStatement,
} from '../index.js';

import getRandomNumber from '../utils.js';

const calculateResult = (operator, operand1, operand2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    default:
      result = operand1 * operand2;
  }
  return result;
};

export default () => {
  const name = greet();

  giveTaskStatement('What is the result of the expression?');

  for (let i = 1; i <= steps; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, 3)];
    const operand1 = getRandomNumber(1, 100);
    const operand2 = getRandomNumber(1, 100);
    const operation = `${operand1} ${operator} ${operand2}`;

    const result = calculateResult(operator, operand1, operand2);

    const answer = askQuestionTakeAnswer(operation);

    const gameResult = executeGame(Number(answer), result, name);
    if (!gameResult) {
      return;
    }
  }
  congratulate(name);
};
*/
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

export const calculateResult = (inputData) => {
  const [operand1, operator, operand2] = inputData;
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
export const operation = (inputData) => {
  const [operand1, operator, operand2] = inputData;
  return `${operand1} ${operator} ${operand2}`;
};
