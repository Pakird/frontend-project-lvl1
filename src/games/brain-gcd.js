import getRandomNumber from '../utils.js';

import runGame from '../index.js';

const gCD = ([num1, num2]) => ((!num2) ? num1 : gCD([num2, num1 % num2]));

const description = 'Find the greatest common divisor of given numbers.';

const runBrainGCD = () => {
  const outputObj = {};
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  outputObj.showOperation = `${number1} ${number2}`;
  const result = gCD([number1, number2]);
  outputObj.calculateResult = result;
  return outputObj;
};

export default () => runGame(runBrainGCD, description);
