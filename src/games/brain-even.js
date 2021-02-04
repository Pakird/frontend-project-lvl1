import getRandomNumber from '../utils.js';

export const input = getRandomNumber(1, 100);
const isEven = (inputData) => (inputData % 2 === 0);
export const statement = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getRandomInput = () => getRandomNumber(1, 100);
export const showInput = (inputData) => `${inputData}`;
export const getResult = (inputData) => (isEven(inputData) ? 'yes' : 'no');
