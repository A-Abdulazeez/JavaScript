const prompt = require("prompt-sync")();

let firstNumber = Number(prompt("Enter first number: "));
let secondNumber = Number(prompt("Enter second number: "));

if(secondNumber % firstNumber == 0)
    console.log("The first digit is a multiple of the second")
else
    console.log("The first digit is not a multiple of the second")