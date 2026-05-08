const prompt = require("prompt-sync")();

let number = Number(prompt("Enter number: "));

let summation = (number * (number + 1)) / 2
console.log(`The sum from 1 to ${number} is ${summation}`)