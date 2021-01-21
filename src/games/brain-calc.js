import readLineSync from 'readline-sync';

export default () => {
  const getRandom = (begin, end) => {
    const min = Math.ceil(begin);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 1; i < 4; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[getRandom(0, 3)];
    const operand1 = getRandom(1, 100);
    const operand2 = getRandom(1, 100);
    const operation = `${operand1} ${operator} ${operand2}`;
    let result = '';
    if (operator === '+') {
      result = operand1 + operand2;
    } else if (operator === '-') {
      result = operand1 - operand2;
    } else {
      result = operand1 * operand2;
    }

    console.log(`Question: ${operation}`);
    const answer = readLineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
