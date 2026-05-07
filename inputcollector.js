const prompt = require("prompt-sync")();

const input = prompt("What is your age? ");

if(input <= 12){
console.log("My age is: ", input)
console.log("I'm just a baby")
}

if(input > 12){
console.log("My age is: ", input)
console.log("Na man i be")
}
else{
console.log("invalid")
}
