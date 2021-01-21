/*#!/usr/bin/env node
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
  console.log('What is the result of the expression?');

  for (let i = 1; i < 4; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[getRandom(0, 3)];
    const operand1 = getRandom(1, 100);
    const operand2 = getRandom(1, 100);
    const operation = `${operand1} ${operator} ${operand2}`;
    const result = eval(operation);

    console.log(`Question: ${operation}`);
    const answer = readLineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
game();
*/