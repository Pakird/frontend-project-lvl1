import {
  executeGame, greet, askQuestionTakeAnswer, steps, giveTaskStatement, congratulate,
} from '../index.js';

import getRandomNumber from '../utils.js';

const createProgression = (difference, firstNumber, length) => {
  const progression = [firstNumber];
  for (let j = 1; j <= length; j += 1) {
    progression[j] = progression[j - 1] + difference;
  }
  return progression;
};

export default () => {
  const name = greet();
  giveTaskStatement('What number is missing in the progression?');

  for (let i = 1; i <= steps; i += 1) {
    const lostNumber = getRandomNumber(0, 10);
    const firstNumber = getRandomNumber(1, 100);
    const difference = getRandomNumber(2, 20);
    const length = getRandomNumber(5, 11);
    const progression = createProgression(difference, firstNumber, length);
    
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
