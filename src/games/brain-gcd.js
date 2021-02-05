import getRandomNumber from '../utils.js';

import runGame from '../index.js';

export const statement = 'Find the greatest common divisor of given numbers.';
export const gCD = ([num1, num2]) => ((!num2) ? num1 : gCD([num2, num1 % num2]));

export const input = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
export const getRandomInput = () => [getRandomNumber(1, 100), getRandomNumber(1, 100)];

export const showNumbers = ([num1, num2]) => `${num1} ${num2}`;

export default () => runGame(statement, showNumbers, gCD, input, getRandomInput);
