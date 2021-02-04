import getRandomNumber from '../utils.js'
/*import {
  executeGame, askQuestionTakeAnswer, greet, steps, giveTaskStatement, congratulate,
} from '../index.js';

import getRandomNumber from '../utils.js';

const getGreatestCommonDivisor = (number1, number2) => {
  const max = Math.max(number1, number2);
  const min = Math.min(number1, number2);
  const divisor = max % min;
  return divisor === 0 ? min : getGreatestCommonDivisor(min, divisor);
};

export default () => {
  const name = greet();
  giveTaskStatement('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= steps; i += 1) {
    const randomNum1 = getRandomNumber(1, 100);
    const randomNum2 = getRandomNumber(1, 100);
    const gcd = getGreatestCommonDivisor(randomNum1, randomNum2);

    const answer = askQuestionTakeAnswer(`${randomNum1} ${randomNum2}`);

    const gameResult = executeGame(Number(answer), gcd, name);
    if (!gameResult) {
      return;
    }
  }
  congratulate(`Congratulations, ${name}!`);
};
*/
export const statement = 'Find the greatest common divisor of given numbers.';
export const getGreatestCommonDivisor = (inputData) => {
  const [number1, number2] = inputData;
  const max = Math.max(number1, number2);
  const min = Math.min(number1, number2);
  const divisor = max % min;
  return divisor === 0 ? min : getGreatestCommonDivisor([min, divisor]);
};

export const input = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
export const getRandomInput = () => [getRandomNumber(1, 100), getRandomNumber(1, 100)];
export const showNumbers = (inputData) => {
  const [number1, number2] = inputData;
  return `${number1} ${number2}`;
};
