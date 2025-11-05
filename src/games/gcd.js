import { getRandomInt } from '../utils.js';

const calculateGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calculateGCD(b, a % b);
};

export const getRules = () => 'Find the greatest common divisor of given numbers.';

export const getQuestionAndAnswer = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  
  const question = `${a} ${b}`;
  const correctAnswer = calculateGCD(a, b).toString();

  return [question, correctAnswer];
};