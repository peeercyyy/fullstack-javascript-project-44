import readlineSync from 'readline-sync';
import askName from './cli.js';

export const getRandomNumber = () => Math.floor(Math.random(100 - 1) * 100 + 1);

const letsPlay = (gameDescription, gameData) => {
  const userName = askName();
  const askQuestion = (number) => readlineSync.question(`Question: ${number} `);
  gameDescription();

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = gameData();
    const userAnswer = askQuestion(question);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default letsPlay;
