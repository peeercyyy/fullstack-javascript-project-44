import letsPlay, { getRandomNumber } from '../index.js';

const operators = {
  0: '+',
  1: '*',
  2: '-',
};
const gameDescription = () => console.log('What is the result of the expression?');
const calcNumbers = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};
const gameData = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operatorIndex = getRandomNumber(0, 3);
  const operator = operators[operatorIndex];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calcNumbers(num1, num2, operator));
  return [question, answer];
};

const brainCalcGame = () => letsPlay(gameDescription, gameData);

export default brainCalcGame;
