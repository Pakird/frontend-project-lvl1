import {
  greet, executeTheGame, steps, askQuestionTakeAnswer,
} from '../index.js';

import { getRandom } from '../utils.js';

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

  console.log('What is the result of the expression?');

  for (let i = 1; i <= steps; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[getRandom(0, 3)];
    const operand1 = getRandom(1, 100);
    const operand2 = getRandom(1, 100);
    const operation = `${operand1} ${operator} ${operand2}`;

    const result = calculateResult(operator, operand1, operand2);

    const answer = askQuestionTakeAnswer(operation);

    const gameResult = executeTheGame(answer, result, name);
    if (!gameResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
