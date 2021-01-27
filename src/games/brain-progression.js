import {
  executeGame, greet, askQuestionTakeAnswer, steps, giveTaskStatement, congratulate,
} from '../index.js';

import getRandomNumber from '../utils.js';

const createProgression = (difference, firstNumber, lengthProgression) => {
  const progression = [firstNumber];
  for (let j = 1; j <= lengthProgression; j += 1) {
    progression[j] = progression[j - 1] + difference;
  }
  return progression;
};

export default () => {
  const name = greet();
  giveTaskStatement('What number is missing in the progression?');

  for (let i = 1; i <= steps; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const difference = getRandomNumber(2, 20);
    const lengthProgression = getRandomNumber(5, 11);
    const lostNumber = getRandomNumber(0, lengthProgression);
    const progression = createProgression(difference, firstNumber, lengthProgression);

    const partProgression = [...progression];
    partProgression[lostNumber] = '..';

    const answer = askQuestionTakeAnswer(partProgression.join(' '));

    const gameResult = executeGame(Number(answer), progression[lostNumber], name);
    if (!gameResult) {
      return;
    }
  }
  congratulate(`Congratulations, ${name}!`);
};
