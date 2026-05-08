const prompt = require("prompt-sync")();

let birthYear = Number(prompt("Enter birth year: "));
let year = Number(prompt("Enter current year: "));

let age = year - birthYear;
if (age >= 65)
    console.log("You are eligible for senior citizen discount");