const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

if (number % 5 == 0)
console.log("Hifive");
else if(number % 2 == 0)
console.log("HiEven");
