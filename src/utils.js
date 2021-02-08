export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

export const runPredicateFunc = (predicate) => {
  const question = getRandomNumber(1, 100);
  const answer = predicate(question) ? 'yes' : 'no';
  return { question, answer };
};
