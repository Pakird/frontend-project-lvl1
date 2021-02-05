import readLineSync from 'readline-sync';

export default (game, description) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const copyObject = Object.assign({ ...game() });

    console.log(` Question: ${copyObject.showOperation}`);
    const answer = readLineSync.question('Your answer: ');

    const gameResult = (answer === copyObject["calculateResult"] || Number(answer) === copyObject.calculateResult);
    if (!gameResult) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${copyObject.calculateResult}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
