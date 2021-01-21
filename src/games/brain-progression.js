#!/usr/bin/env node
import readLineSync from 'readline-sync';

const getRandom = (begin, end) => {
  const min = Math.ceil(begin);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min)) + min;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
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
    if (Number(answer) === progression[lostNumber]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${progression[lostNumber]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
game();
