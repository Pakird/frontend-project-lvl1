import runGame from '../index.js';
import { runPredicateFunc } from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const runBrainEven = () => runPredicateFunc(isEven);

export default () => runGame(runBrainEven, description);
