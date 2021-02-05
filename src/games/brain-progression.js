import getRandomNumber from '../utils.js';

import runGame from '../index.js';

const createProgression = ([difference, firstNumber, progressionLength]) => {
  const progression = [];
  for (let j = 0; j <= progressionLength; j += 1) {
    progression[j] = firstNumber + difference * j;
  }
  return progression;
};
/*
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
*/

export default () => runGame(runBrainProgression, description);

const description = 'What number is missing in the progression?';

const runBrainProgression = () => {
  const outputObj = {};
  const difference = getRandomNumber(2, 20);
  const firstNumber = getRandomNumber(1, 100);
  const progressionLength = getRandomNumber(5, 11);
  const lostNumber = getRandomNumber(0, progressionLength);
  const progression = createProgression([difference, firstNumber, progressionLength])
  const secretProgression = [...progression];
  secretProgression[lostNumber] = '..';
  outputObj['showOperation'] = `${secretProgression.join(' ')}`;
  const result = progression[lostNumber];
  outputObj['calculateResult'] = result;
  return outputObj;
};
