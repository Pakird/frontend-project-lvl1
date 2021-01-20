#!/usr/bin/env node
import readLineSync from "readline-sync";

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const game = () => {
  console.log("Welcome to the Brain Games!");
  const name = readLineSync.question("May I have your name? ");
  console.log(`Hello ${name}!`);
  console.log(""); //task
  for (let i = 1; i < 4; i += 1) {
    console.log(`Question: ${0}`);
    const answer = readLineSync.question("Your answer: ");
    if (answer === 0) {
      console.log("Correct!");
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${0}.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
