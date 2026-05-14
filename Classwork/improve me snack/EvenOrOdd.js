const prompt = require("prompt-sync")();

const userNumber = Number(prompt("Enter a number"))
if (userNumber % 2 == 0) 
console.log("It is an even number")

else if (userNumber % 2 == 1) 
console.log("It is an odd number")
