import readLineSync from 'readline-sync';

export default (statement, question, result, input, getRandomInput) => {
  const steps = 3;
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let inputData = input;
  console.log(statement);
  for (let i = 0; i < steps; i += 1) {
    console.log(` Question: ${question(inputData)}`);
    const answer = readLineSync.question('Your answer: ');

    const gameResult = (answer === result(inputData) || Number(answer) === result(inputData));
    if (!gameResult) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result(inputData)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    inputData = getRandomInput();
  }
  console.log(`Congratulations, ${name}!`);
};
