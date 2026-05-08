const prompt = require("prompt-sync")();

let squareMeters = Number(prompt("Enter Square meters: "))
let ping = squareMeters * 0.3025

console.log(squareMeters, "Square neters =", ping, "ping")
