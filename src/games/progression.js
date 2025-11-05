import { getRandomInt } from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export const getRules = () => 'What number is missing in the progression?';

export const getQuestionAndAnswer = () => {
  const progressionLength = getRandomInt(5, 10);
  const start = getRandomInt(1, 20);
  const step = getRandomInt(2, 5);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = progression[hiddenIndex].toString();

  const progressionWithHidden = progression.map((num, index) => 
    index === hiddenIndex ? '..' : num
  ).join(' ');

  return [progressionWithHidden, correctAnswer];
};