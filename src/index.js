import readlineSync from 'readline-sync';
import askName from './cli.js';

const getRandomNumber = () => Math.floor(Math.random(100 - 1) * 100 + 1);

const IsEven = (number) => number % 2 === 0;

function checkAnswer(answer, count, number, name) {
  if (count === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const rightAnswer = IsEven(number) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    return console.log('Correct!');
  }

  return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${name}!`);
}

const askQuestion = (number) => readlineSync.question(`Question: ${number} `);

const name = askName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 1;
const letsPlay = () => {
  const number = getRandomNumber();
  const answer = askQuestion(number);
  checkAnswer(answer, count, number, name);
  count += 1;
  if (count < 4) {
    letsPlay();
  }
};

export default letsPlay;
