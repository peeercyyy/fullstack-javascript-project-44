import letsPlay, { getRandomNumber } from '../index.js';

const gameDescription = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const gameData = () => {
  const number = getRandomNumber(0, 50);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const brainPrime = () => letsPlay(gameDescription, gameData);

export default brainPrime;
