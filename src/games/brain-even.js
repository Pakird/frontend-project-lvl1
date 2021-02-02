import {
  executeGame, askQuestionTakeAnswer, greet, steps, congratulate,
} from '../index.js';

import getRandomNumber from '../utils.js';

const isEven = (num) => (num % 2 === 0);

export default () => {
  const name = greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= steps; i += 1) {
    const randomNum = getRandomNumber(1, 100);

    const answer = askQuestionTakeAnswer(randomNum);
    const getResult = (isEven(randomNum)) ? 'yes' : 'no';
    const gameResult = executeGame(answer, getResult, name);
    if (!gameResult) {
      return;
    }
  }
  congratulate(`Congratulations, ${name}!`);
};
