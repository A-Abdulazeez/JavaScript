const prompt = require("prompt-sync")();

let firstNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");

if (Math.abs(firstNumber) > Math.abs(secondNumber)) {
    console.log("The second number is closer to 0");
} else if (Math.abs(firstNumber) < Math.abs(secondNumber)) {
    console.log("The first number is closer to 0");
} else {
    console.log("Both are equally closer to 0");
}