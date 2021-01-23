import readLineSync from 'readline-sync';
import { getRandom, gameExercusion } from '../index.js';

export default () => {
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

  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i < 4; i += 1) {
    const number = getRandom(1, 200);
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer: ');
    const game = gameExercusion(answer, isPrime(number), name);
    if (game === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
