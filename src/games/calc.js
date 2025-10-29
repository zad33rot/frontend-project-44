import { getRandomInt, getRandomOperator } from '../utils.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
};

export const getRules = () => 'What is the result of the expression?';

export const getQuestionAndAnswer = () => {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const operator = getRandomOperator(['+', '-', '*']);

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(a, b, operator).toString();

  return [question, correctAnswer];
};