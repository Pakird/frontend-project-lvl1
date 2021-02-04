#!/usr/bin/env node
import runGame from '../src/index.js';
import {
  input,
  getRandomInput,
  showProgression,
  checkLostNumber,
  statement
} from '../src/games/brain-progression.js';

runGame(statement, showProgression, checkLostNumber, input, getRandomInput);
