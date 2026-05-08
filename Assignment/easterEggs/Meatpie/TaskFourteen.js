const prompt = require("prompt-sync")();

let number1 = Number(prompt("Enter first number: "))
let number2 = Number(prompt("Enter second number: "))
let number3 = Number(prompt("Enter third number: "))

let average = (number1 + number2 + number3) / 3

console.log("The average =", average)
