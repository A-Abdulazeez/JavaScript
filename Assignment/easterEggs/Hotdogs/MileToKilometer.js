const prompt = require("prompt-sync")();

let miles = Number(prompt("Enter miles: "))
let kilometers = miles * 1.6

console.log(miles, "miles =", kilometers, "kilometers")
