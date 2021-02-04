import getRandomNumber from '../utils.js';

export const statement = 'Find the greatest common divisor of given numbers.';
export const getGreatestCommonDivisor = ([num1, num2]) => ((!num2) ? num1 : getGreatestCommonDivisor([num2, num1 % num2]));

export const input = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
export const getRandomInput = () => [getRandomNumber(1, 100), getRandomNumber(1, 100)];

export const showNumbers = ([num1, num2]) => {
  return `${num1} ${num2}`;
};
