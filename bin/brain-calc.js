#!/usr/bin/env node
import {
  operation,
  calculateResult,
  statement,
  input,
  getRandomInput,
} from '../src/games/brain-calc.js';

import runGame from '../src/index.js';

runGame(statement, operation, calculateResult, input, getRandomInput);
