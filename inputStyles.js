const prompt = require("prompt-sync")();

const input = prompt("What is your age? ");
let isVAlid = true

console.log(input)

if(!input){
console.log("login")
} else {
console.log("invalid input")
}
