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

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runBrainPrime = () => {
  const outputObj = {};
  const number = getRandomNumber(1, 100);
  outputObj["showOperation"] = `${number}`;
  const result = isPrime(number) ? 'yes' : 'no';
  outputObj["calculateResult"] = result;
  return outputObj;
};

export default () => runGame(runBrainPrime, description);
