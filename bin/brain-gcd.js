#!/usr/bin/env node
import startGame from '../src/index.js';
import { getRules, getQuestionAndAnswer } from '../src/games/gcd.js';

startGame(getRules, getQuestionAndAnswer);