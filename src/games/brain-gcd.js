import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const getGCD = (number1, number2) => ((!number2) ? number1 : getGCD(number2, number1 % number2));

const description = 'Find the greatest common divisor of given numbers.';

const runBrainGCD = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  return { question, answer };
};

export default () => runGame(runBrainGCD, description);
