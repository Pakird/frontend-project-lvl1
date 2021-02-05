import getRandomNumber from '../utils.js';

import runGame from '../index.js';

const createProgression = ([difference, firstNumber, progressionLength]) => {
  const progression = [];
  const lostNumber = getRandomNumber(0, progressionLength);
  for (let j = 0; j <= progressionLength; j += 1) {
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

export default () => runGame(statement, showProgression, giveLostNumber, input, getRandomInput);
