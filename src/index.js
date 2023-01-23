import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const getRandomNumber = () => Math.floor(Math.random(100 - 1) * 100 + 1);

const IsEven = (number) => number % 2 === 0;

function checkAnswer(answer, count, number, name) {
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const rightAnswer = IsEven(number) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    count += 1;
    console.log('Correct!');
    return count;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${name}!`);
  return 4;
}

const askQuestion = (number) => readlineSync.question(`Question: ${number} `);

const name = askName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 1;
const letsPlay = () => {
  const number = getRandomNumber();
  const answer = askQuestion(number);
  count = checkAnswer(answer, count, number, name);
  if (count < 4) {
    letsPlay();
  }
};

export default letsPlay;