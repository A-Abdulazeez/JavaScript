const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

if(number > 10 && number < 100)
    console.log("Number is between 10 and 100 exclusive");
else
    console.log("Number is not between 10 and 100 exclusive");
