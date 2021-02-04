import getRandomNumber from '../utils.js';

const createProgression = ([difference, firstNumber, lengthProgression]) => {
  const progression = [];
  const lostNumber = getRandomNumber(0, lengthProgression);
  for (let j = 0; j <= lengthProgression; j += 1) {
    progression[j] = firstNumber + difference * j;
  }
  return [progression, lostNumber];
};

export const input = createProgression([
  getRandomNumber(2, 20),
  getRandomNumber(1, 100),
  getRandomNumber(5, 11),
]);
export const getRandomInput = () => createProgression([
  getRandomNumber(2, 20),
  getRandomNumber(1, 100),
  getRandomNumber(5, 11),
]);

export const statement = 'What number is missing in the progression?';

export const showProgression = ([progression, lostNumber]) => {
  const secretProgression = [...progression];
  secretProgression[lostNumber] = '..';
  return `${secretProgression.join(' ')}`;
};

export const giveLostNumber = ([progression, lostNumber]) => progression[lostNumber];
