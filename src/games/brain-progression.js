import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const createProgression = (difference, firstNumber, progressionLength) => {
  const progression = [];
  for (let j = 0; j <= progressionLength; j += 1) {
    progression[j] = firstNumber + difference * j;
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const runBrainProgression = () => {
  const difference = getRandomNumber(2, 20);
  const firstNumber = getRandomNumber(1, 100);
  const progressionLength = getRandomNumber(5, 11);
  const lostNumber = getRandomNumber(0, progressionLength);
  const progression = createProgression(difference, firstNumber, progressionLength);
  const answer = String(progression[lostNumber]);
  progression[lostNumber] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export default () => runGame(runBrainProgression, description);
