import readLineSync from 'readline-sync';
import { getRandom } from '../index.js';

export default () => {
  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandom(1, 100);
    console.log(`Question: ${randomNum}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer === isEven(randomNum)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNum)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
