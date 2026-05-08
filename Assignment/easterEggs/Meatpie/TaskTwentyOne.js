const prompt = require("prompt-sync")();

let base = Number(prompt("Enter length:  "))
let height = Number(prompt("Enter width:  "))

let result = (base * height) / 2

console.log("The area =", result)
