const prompt = require("prompt-sync")()
const input = Number(prompt("Enter a number: "))

if(input < 0)
console.log("Negative")

else if(input == 0)
console.log("zero")

else if(input > 0)
console.log("positive")
