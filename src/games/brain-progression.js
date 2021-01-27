import {
  executeGame, greet, askQuestionTakeAnswer, steps, giveTaskStatement, congratulate,
} from '../index.js';

import getRandomNumber from '../utils.js';

export default () => {
  const name = greet();
  giveTaskStatement('What number is missing in the progression?');

  for (let i = 1; i <= steps; i += 1) {
    const lostNumber = getRandomNumber(0, 10);
    const firstNumber = getRandomNumber(1, 100);
    const difference = getRandomNumber(2, 20);
    const progression = [firstNumber];
    for (let j = 1; j < 10; j += 1) {
      progression[j] = progression[j - 1] + difference;
    }
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
