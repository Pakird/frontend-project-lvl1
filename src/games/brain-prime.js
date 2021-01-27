import {
  greet, executeTheGame, askQuestionTakeAnswer, steps,
} from '../index.js';

import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const name = greet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= steps; i += 1) {
    const number = getRandomNumber(1, 100);

    const answer = askQuestionTakeAnswer(number);

    const gameResult = executeTheGame(answer, isPrime(number), name);
    if (!gameResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
