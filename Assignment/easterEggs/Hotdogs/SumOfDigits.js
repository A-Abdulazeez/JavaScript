const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number between 1 and 1000: "))

let firstDigit = number % 10
let secondDigit = (number / 10) % 10
let thirdDigit = (number / 100) % 10
let fourthDigit = (number / 1000) % 10

let sum = firstDigit + secondDigit + thirdDigit + fourthDigit

console.log("The sum of all digits =", sum)
