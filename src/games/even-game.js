import makeGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = num => num % 2 === 0;
const game = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const evenGame = () => makeGame(game, description);
export default evenGame;
