import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const isEven = (number) => (number % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const result = isEven(number) ? 'yes' : 'no';
  const answer = result;
  return { question, answer };
};

export default () => runGame(runBrainEven, description);
