const prompt = require("prompt-sync")();

let number = prompt("Enter number: ");
let squareRootOfNumber = number ** 0.5;

if(squareRootOfNumber === Math.trunc(squareRootOfNumber))
    console.log("It is a perfect square");
else
    console.log("It is not a perfect square");