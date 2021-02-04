#!/usr/bin/env node
import runGame from '../src/index.js';

import {
  checkResult,
  getRandomInput,
  input,
  showNumber,
  statement,
} from '../src/games/brain-prime.js';

runGame(statement, showNumber, checkResult, input, getRandomInput);
