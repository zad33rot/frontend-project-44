#!/usr/bin/env node

import { welcomeUser, checkAnswer, startGame } from "../src/cli.js";

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  const name = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  startGame(() => {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    console.log(`Question: ${number}`);
    return checkAnswer(correctAnswer, name);
  }, name);
};

playEvenGame();