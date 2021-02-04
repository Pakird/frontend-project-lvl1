#!/usr/bin/env node
import {
  getGreatestCommonDivisor,
  getRandomInput,
  input,
  showNumbers,
  statement,
} from '../src/games/brain-gcd.js';
import runGame from '../src/index.js';

runGame(statement, showNumbers, getGreatestCommonDivisor, input, getRandomInput);
