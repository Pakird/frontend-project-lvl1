import {
  executeTheGame, askQuestionTakeAnswer, greet, steps,
} from '../index.js';

import { getRandom } from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const name = greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= steps; i += 1) {
    const randomNum = getRandom(1, 100);

    const answer = askQuestionTakeAnswer(randomNum);

    const gameResult = executeTheGame(answer, isEven(randomNum), name);
    if (!gameResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
