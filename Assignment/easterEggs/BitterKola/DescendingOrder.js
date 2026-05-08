const prompt = require("prompt-sync")();

let firstNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");
let thirdNumber = prompt("Enter third number: ");

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
    if(secondNumber > thirdNumber)
        console.log(firstNumber, secondNumber, thirdNumber)
    else
        console.log(firstNumber, thirdNumber, secondNumber)
} else if(secondNumber > firstNumber && secondNumber > thirdNumber) {
    if(firstNumber > thirdNumber)
        console.log(secondNumber, firstNumber, thirdNumber)
    else
        console.log(secondNumber, thirdNumber, firstNumber)
} else {
    if(firstNumber > secondNumber)
        console.log(thirdNumber, firstNumber, secondNumber)
    else
        console.log(thirdNumber, secondNumber, firstNumber)
}