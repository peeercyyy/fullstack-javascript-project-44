import letsPlay, { getRandomNumber } from '../index.js';

const gameDescription = () => console.log('What number is missing in the progression?');

const progression = (step) => {
  const numbers = [getRandomNumber(1, 10)];
  const numbersCount = getRandomNumber(5, 15);
  for (let i = 0; i <= numbersCount; i += 1) {
    numbers.push(numbers[i] + step);
  }
  return numbers;
};

const gameData = () => {
  const step = getRandomNumber(1, 7);
  const progressionNumbers = progression(step);
  const dotsPosition = getRandomNumber(0, progressionNumbers.length);
  const answer = String(progressionNumbers[dotsPosition]);
  progressionNumbers[dotsPosition] = '..';
  const question = progressionNumbers.join(' ');
  return [question, answer];
};

const brainProgression = () => letsPlay(gameDescription, gameData);

export default brainProgression;
