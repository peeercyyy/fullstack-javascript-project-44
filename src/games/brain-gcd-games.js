import letsPlay, { getRandomNumber } from '../index.js';

const gameDescription = () => console.log('Find the gratest common divisor of given numbers.');

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const gameData = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return [question, answer];
};

const brainGcd = () => letsPlay(gameDescription, gameData);

export default brainGcd;
