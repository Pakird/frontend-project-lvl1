#!/usr/bin/env node
import readLineSync from "readline-sync";

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const isEven = (num) => (num % 2 === 0 ? "yes" : "no");
const game = () => {
  console.log("Welcome to the Brain Games!");
  const name = readLineSync.question("May i have your name? ");
  console.log(
    `Hello, ${name}\nAnswer "yes" if the number is even, otherwise answer "no".`
  );
  for (let i = 1; i <= 3; i += 1) {
    let randomNum = getRandom(1, 100);
    console.log(`Question: ${randomNum}`);
    const answer = readLineSync.question("Your answer: ");
    if (answer === isEven(randomNum)) {
      console.log("Correct!");
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${isEven(
          !randomNum
        )}.`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
game();
