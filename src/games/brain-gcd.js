import readLineSync from 'readline-sync';
import { getRandom } from '../index.js';

export default () => {
  const greatestCommonDivisor = (number1, number2) => {
    const max = Math.max(number1, number2);
    const min = Math.min(number1, number2);
    const divisor = max % min;
    return divisor === 0 ? min : greatestCommonDivisor(min, divisor);
  };

  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i < 4; i += 1) {
    const randomNum1 = getRandom(1, 100);
    const randomNum2 = getRandom(1, 100);
    const gcd = greatestCommonDivisor(randomNum1, randomNum2);

    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const answer = readLineSync.question('Your answer: ');
    if (Number(answer) === gcd) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
