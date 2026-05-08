const prompt = require("prompt-sync")();


const number = prompt("Enter an integer: ")

if (number % 2 == 0)
    console.log(number, "is divisible by 2")
else
    console.log(number, "is not divisible by 2")

if (number % 3 == 0)
    console.log(number, "is divisible by 3")
else
    console.log(number, "is not divisible by 3")

if (number % 5 == 0)
    console.log(number, "is divisible by 5")
else
    console.log(number, "is not divisible by 5")

if (number % 6 == 0)
    console.log(number, "is divisible by 6")
else
    console.log(number, "is not divisible by 6")

if (number % 7 == 0)
    console.log(number, "is divisible by 7")
else
    console.log(number, "is not divisible by 7")
