import { executeTheGame, askQuestionTakeAnswer, greet, steps } from '../index.js';
import { randomOf100, getGreatestCommonDivisor } from  '../utils.js'

export default () => {
  const name = greet();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= steps; i += 1) {
    const randomNum1 = randomOf100();
    const randomNum2 = randomOf100();
    const gcd = getGreatestCommonDivisor(randomNum1, randomNum2);
   
    const answer = askQuestionTakeAnswer(`${randomNum1} ${randomNum2}`);

    const gameResult = executeTheGame(Number(answer), gcd, name);
    if (!gameResult) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
