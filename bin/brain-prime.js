#!/usr/bin/env node
import startGame from '../src/index.js';
import { getRules, generateRound } from '../src/games/prime.js';

startGame(getRules, generateRound);