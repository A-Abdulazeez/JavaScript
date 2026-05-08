const prompt = require("prompt-sync")();

let number = prompt("Enter a five-digit number: ");

let lastDigit = number % 10;
let firstDigit = Math.trunc(number / 10000);
let sum = firstDigit + lastDigit;

console.log("The sum of the first and last digit is", sum);