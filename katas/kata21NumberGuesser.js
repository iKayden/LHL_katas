let prompt = require("prompt-sync")();
// Make a random number
let randNum = Math.floor(Math.random() * 100) + 1;
// Setup variables for the game
let answer;
// Array will hold attempted numbers and guesses the amount of tries
let guesses = 0;
let attemptsArr = [];
// Start a do while loop until the answer is correct
do {
  answer = parseInt(prompt("Guess a number: "));

  if (answer) {
    if (!attemptsArr.includes(answer)) {
      if (answer < randNum) {
        console.log("Too Low! Try Again!");
      }
      if (answer > randNum) {
        console.log("Too High! Try Again!");
      }

      attemptsArr.push(answer);
      guesses++;
    } else {
      console.log("Already Guessed!");
    }
  } else {
    console.log("Not a number! Try again!");
  }
} while (answer !== randNum);
console.log(attemptsArr);
console.log(`You got it! You took ${guesses} attempts!`);
