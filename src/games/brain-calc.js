import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const runBrainCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
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
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = result;
  return { question, answer };
};

export default () => runGame(runBrainCalc, description);
