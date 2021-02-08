import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const getAnswer = (operand1, operator, operand2) => {
  let answer;
  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    default:
  }
  return answer;
};

const description = 'What is the result of the expression?';
const runBrainCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const answer = String(getAnswer(operand1, operator, operand2));
  const question = `${operand1} ${operator} ${operand2}`;
  return { question, answer };
};

export default () => runGame(runBrainCalc, description);
