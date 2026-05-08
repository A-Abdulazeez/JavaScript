const prompt = require("prompt-sync")();

let meters = Number(prompt("Enter meters: "))
let feet = meters * 3.2786

console.log(meters, "meters =", feet, "feet")
