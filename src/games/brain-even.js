import {
  executeGame, askQuestionTakeAnswer, greet, steps, giveTaskStatement, congratulate,
} from '../index.js';

import getRandomNumber from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const name = greet();
  giveTaskStatement('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= steps; i += 1) {
    const randomNum = getRandomNumber(1, 100);

    const answer = askQuestionTakeAnswer(randomNum);

    const gameResult = executeGame(answer, isEven(randomNum), name);
    if (!gameResult) {
      return;
    }
  }
  congratulate(`Congratulations, ${name}!`);
};
