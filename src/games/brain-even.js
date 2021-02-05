import getRandomNumber from '../utils.js';

import runGame from '../index.js';

const isEven = (inputData) => (inputData % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => {
  const outputObj = {};
  const number = getRandomNumber(1, 100);
  outputObj.showOperation = `${number}`;
  const result = isEven(number) ? 'yes' : 'no';
  outputObj.calculateResult = result;
  return outputObj;
};

export default () => runGame(runBrainEven, description);
