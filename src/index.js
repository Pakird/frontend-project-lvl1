import readLineSync from 'readline-sync';

export default (game, description) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const copyObject = { ...game() };

    console.log(` Question: ${copyObject.question}`);
    const answer = readLineSync.question('Your answer: ');

    const gameResult = (answer === copyObject.answer
      || Number(answer) === copyObject.answer);
    if (!gameResult) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${copyObject.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
