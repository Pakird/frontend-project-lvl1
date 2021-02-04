import getRandomNumber from '../utils.js';

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
