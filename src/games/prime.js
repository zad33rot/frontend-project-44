import { getRandomInt } from '../utils.js';

const calculatePrime = (n) => {
    if(n < 2) return false;

    if(n % 2 === 0) return false;

    if (n === 2) return true;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
          return false;
        }
      };

      return true;
}

export const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
    const question = getRandomInt(1, 100);
    const answer = calculatePrime(question) ? 'yes' : 'no';
    return [question, answer];
  };