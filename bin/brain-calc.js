#!/usr/bin/env node
import {
  showOperation,
  calculateResult,
  statement,
  input,
  getRandomInput,
} from '../src/games/brain-calc.js';

import runGame from '../src/index.js';

runGame(statement, showOperation, calculateResult, input, getRandomInput);
