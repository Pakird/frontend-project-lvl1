#!/usr/bin/env node
import runGame from '../src/index.js';

import {
  input,
  getRandomInput,
  showProgression,
  giveLostNumber,
  statement,
} from '../src/games/brain-progression.js';

runGame(statement, showProgression, giveLostNumber, input, getRandomInput);
