import letsPlay, { getRandomNumber } from '../index.js';

const IsEven = (number) => number % 2 === 0;
const gameDescription = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameData = () => {
  const number = getRandomNumber(1, 100);
  const answer = IsEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const brainEvenGame = () => letsPlay(gameDescription, gameData);

export default brainEvenGame;
