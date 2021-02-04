import getRandomNumber from '../utils.js';
/*import {
  greet, executeGame, askQuestionTakeAnswer, steps, giveTaskStatement, congratulate,
} from '../index.js';

import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const name = greet();
  giveTaskStatement('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= steps; i += 1) {
    const number = getRandomNumber(1, 100);

    const answer = askQuestionTakeAnswer(number);

    const gameResult = executeGame(answer, isPrime(number), name);
    if (!gameResult) {
      return;
    }
  }
  congratulate(`Congratulations, ${name}!`);
};
*/
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const input = getRandomNumber(1, 100);
export const getRandomInput = () => getRandomNumber(1, 100);

export const statement = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const showNumber = (inputData) => `${inputData}`;

export const checkResult = (inputData) => isPrime(inputData) ? 'yes' : 'no';