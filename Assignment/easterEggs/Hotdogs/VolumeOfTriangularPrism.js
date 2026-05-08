const prompt = require("prompt-sync")();

let sides = Number(prompt("Enter length of sides: "))
let length = Number(prompt("Enter the length of the prism: "));

let area = (Math.sqrt(3) / 4) * (sides ** 2)

let volume = area * length

console.log("The volume of the Triangular prism =", volume)
