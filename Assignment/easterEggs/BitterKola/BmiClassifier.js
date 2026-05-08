const prompt = require("prompt-sync")();

let weightInKg = Number(prompt("Enter weight (kilogram): "));
let heightInMeter = Number(prompt("Enter height (meter): "));

let bmi = weightInKg / (heightInMeter * heightInMeter);

if(bmi < 18.5)
    console.log("Underweight");
else if(bmi < 25)
    console.log("Normal");
else if(bmi < 30)
    console.log("Overweight");
else
    console.log("Obese");