import readLineSync from 'readline-sync';
import { getRandom, gameExercusion } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 1; i < 4; i += 1) {
    const lostNumber = getRandom(0, 10);
    const firstNumber = getRandom(0, 51);
    const difference = getRandom(2, 20);
    const progression = [firstNumber];
    for (let j = 1; j < 10; j += 1) {
      progression[j] = progression[j - 1] + difference;
    }
    const partProgression = [...progression];
    partProgression[lostNumber] = '..';

    console.log(`Question: ${partProgression.join(' ')}`);
    const answer = readLineSync.question('Your answer: ');
    
    const game = gameExercusion(answer, progression[lostNumber], name);
    if (game === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
