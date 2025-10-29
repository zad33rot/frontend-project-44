#!/usr/bin/env node
import startGame from '../src/index.js';
import { getRules, getQuestionAndAnswer } from '../src/games/calc.js';

startGame(getRules, getQuestionAndAnswer);