import {
  executeTheGame, askQuestionTakeAnswer, greet, steps,
} from '../index.js';

import { getRandom } from '../utils.js';

const getGreatestCommonDivisor = (number1, number2) => {
  const max = Math.max(number1, number2);
  const min = Math.min(number1, number2);
  const divisor = max % min;
  return divisor === 0 ? min : getGreatestCommonDivisor(min, divisor);
};

export default () => {
  const name = greet();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= steps; i += 1) {
    const randomNum1 = getRandom(1, 100);
    const randomNum2 = getRandom(1, 100);
    const gcd = getGreatestCommonDivisor(randomNum1, randomNum2);

    const answer = askQuestionTakeAnswer(`${randomNum1} ${randomNum2}`);

    const gameResult = executeTheGame(Number(answer), gcd, name);
    if (!gameResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
