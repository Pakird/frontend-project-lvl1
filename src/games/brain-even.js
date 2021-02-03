import getRandomNumber from '../utils.js';
/* export default () => {
  const name = greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= steps; i += 1) {
    const randomNum = getRandomNumber(1, 100);

    const answer = askQuestionTakeAnswer(randomNum);
    const getResult = (isEven(randomNum)) ? 'yes' : 'no';
    const gameResult = executeGame(answer, getResult, name);
    if (!gameResult) {
      return;
    }
  }
  congratulate(`Congratulations, ${name}!`);
};
*/ 
const isEven = (input) => (input % 2 === 0);
export const statement = 'Answer "yes" if the number is even, otherwise answer "no".';
export const input = getRandomNumber(1, 100);
export const getRandomInput = () => getRandomNumber(1, 100);
export const showInput = (input) => `${input}`;
export const getResult = (input) => (isEven(input) ? 'yes' : 'no');
