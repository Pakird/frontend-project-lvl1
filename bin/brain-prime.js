#!/usr/bin/env node
import readLineSync from 'readline-sync';

const getRandom = (begin, end) => {
  const min = Math.ceil(begin);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min)) + min;
};

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

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i < 4; i += 1) {
    const number = getRandom(1, 200);
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer: ');

    if (answer === isPrime(number)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrime(number)}".`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
game();
