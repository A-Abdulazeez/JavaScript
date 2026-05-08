const prompt = require("prompt-sync")();

let firstNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");

if(secondNumber % firstNumber == 0)
    console.log("The first number is a factor of the second number")
else
    console.log("The first number is not a factor of the second number")
