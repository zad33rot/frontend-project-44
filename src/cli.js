import readlineSync from 'readline-sync';

function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

function checkAnswer(correctAnswer, name) {
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer.toLowerCase() !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
}

function startGame(gameRound, name) {
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    if (!gameRound()) return;
  }
  
  console.log(`Congratulations, ${name}!`);
};

export {welcomeUser, checkAnswer, startGame}