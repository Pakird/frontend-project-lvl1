import getRandomNumber from '../utils.js';

import runGame from '../index.js';

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

export const checkResult = (inputData) => (isPrime(inputData) ? 'yes' : 'no');

export default () => runGame(statement, showNumber, checkResult, input, getRandomInput);
