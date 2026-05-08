const prompt = require("prompt-sync")();

let length = Number(prompt("Enter length:  "))
let width = Number(prompt("Enter width:  "))

let result = length * width

console.log("The area =", result)
