const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a three digit number: "));

let firstDigit = Math.floor(number / 100);
let lastDigit = number % 10;

if (firstDigit === lastDigit)
console.log("The number is a palindrome");
else
console.log("The number is not a palindrome");

