
import readLineSync from 'readline-sync';
import { getRandomInput } from './games/brain-calc.js';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestionTakeAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readLineSync.question('Your answer: ');
  return answer;
};

export const steps = 3;

/*export const executeGame = (answer, result, name) => {
  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
*/
export const executeGame = (answer, result) => answer === result || Number(answer) === result;

export default (statement, question, result, input) => {
  const name = greet();
  console.log(statement);
  for (let i = 1; i <= steps; i += 1) {
    const answer = askQuestionTakeAnswer(question(input));

    const gameResult = executeGame(answer, result(input));
    if (!gameResult) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result(input)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    input = getRandomInput();
  }
  console.log(`Congratulations, ${name}!`);
};
