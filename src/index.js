import readlineSync from 'readline-sync';
import askName from './cli.js';

export const getRandomNumber = (min, max) => Math.floor(Math.random(max - min) * max + min);

const letsPlay = (gameDescription, gameData) => {
  const userName = askName();
  const askQuestion = (number) => {
    console.log(`Question: ${number}`);
    return readlineSync.question('Your answer: ');
  };
  gameDescription();

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = gameData();
    const userAnswer = askQuestion(question);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
export default letsPlay;
