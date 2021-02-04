#!/usr/bin/env node
import {
  gCD,
  getRandomInput,
  input,
  showNumbers,
  statement,
} from '../src/games/brain-gcd.js';
import runGame from '../src/index.js';

runGame(statement, showNumbers, gCD, input, getRandomInput);
