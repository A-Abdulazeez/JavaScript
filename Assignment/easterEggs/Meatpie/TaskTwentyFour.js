const prompt = require("prompt-sync")();

let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));

[a, b] = [b, a];

console.log(`After swapping:\nFirst number: ${a}\nSecond number: ${b}`);

