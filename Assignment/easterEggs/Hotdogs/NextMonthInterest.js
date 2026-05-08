const prompt = require("prompt-sync")();

const balance = prompt("Enter balance: "))
const annualInterestRate = prompt("Enter annual percentage interest rate: "))

let interest = balance * (annualInterestRate / 1200)

console.log("The interest is", interest)
