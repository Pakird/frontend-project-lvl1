import readLineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const giveTaskStatement = (statement) => console.log(statement);

export const askQuestionTakeAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readLineSync.question('Your answer: ');
  return answer;
};

export const steps = 3;

export const executeGame = (answer, result, name) => {
  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const congratulate = (name) => console.log(`Congratulations, ${name}!`);
