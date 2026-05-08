const prompt = require("prompt-sync")();

let number1 = Number(prompt("Enter first number:  "))
let number2 = Number(prompt("Enter second number:  "))

let product = number1 * number2

console.log("Product =", product)
