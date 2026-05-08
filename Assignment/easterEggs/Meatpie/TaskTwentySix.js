const prompt = require("prompt-sync")();

let name = String(prompt("What is your name: "))
let age = Number(prompt("How old are you: "))

console.log(`I am ${name} and i am ${age} years old`)

