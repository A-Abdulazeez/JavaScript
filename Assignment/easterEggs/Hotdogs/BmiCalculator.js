const prompt = require("prompt-sync")();

const weightInPounds = prompt("Enter weight in pounds: ");
const heightInInches = prompt("Enter height in inches: "))

let weightInKilograms = weightInPounds * 0.45359237
let heightInMeters = heightInInches * 0.0254

bmi = weightInKilograms / (heightInMeters * heightInMeters)

console.log("BMI is", bmi)
