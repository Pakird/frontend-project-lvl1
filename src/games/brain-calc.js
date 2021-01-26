import { greet, executeTheGame, steps, askQuestionTakeAnswer } from '../index.js';
import { randomOf3, randomOf100, calculateResult } from '../utils.js';

export default () => {
  const name = greet();

  console.log('What is the result of the expression?');

  for (let i = 1; i <= steps; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[randomOf3()];
    const operand1 = randomOf100();
    const operand2 = randomOf100();
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
