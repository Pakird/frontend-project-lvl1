import {
  executeTheGame, greet, askQuestionTakeAnswer, steps,
} from '../index.js';

import { getRandom } from '../utils.js';

export default () => {
  const name = greet();
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= steps; i += 1) {
    const lostNumber = getRandom(0, 10);
    const firstNumber = getRandom(1, 100);
    const difference = getRandom(2, 20);
    const progression = [firstNumber];
    for (let j = 1; j < 10; j += 1) {
      progression[j] = progression[j - 1] + difference;
    }
    const partProgression = [...progression];
    partProgression[lostNumber] = '..';

    const answer = askQuestionTakeAnswer(partProgression.join(' '));

    const gameResult = executeTheGame(answer, progression[lostNumber], name);
    if (!gameResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
