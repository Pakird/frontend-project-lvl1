#!/usr/bin/env node
import runGame from '../src/index.js';

import { statement,
    showInput,
    getResult,
    input,
    getRandomInput,
} from '../src/games/brain-even.js';

runGame(statement, showInput, getResult, input, getRandomInput);
