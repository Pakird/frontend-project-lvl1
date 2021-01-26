import {
  greet, executeTheGame, askQuestionTakeAnswer, steps,
} from '../index.js';
import { isPrime, randomOf100 } from '../utils.js';

export default () => {
  const name = greet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= steps; i += 1) {
    const number = randomOf100();

    const answer = askQuestionTakeAnswer(number);

    const gameResult = executeTheGame(answer, isPrime(number), name);
    if (!gameResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
