const prompt = require("prompt-sync")();

let sides = Number(prompt("Enter length of sides: "))

let area = (Math.sqrt(3) / 4) * (sides ** 2)

console.log("The are of an equilateral triangle =", area)
