const prompt = require("prompt-sync")();

const amount = Number(prompt("Enter the investment amount: "));
const annualRate = Number(prompt("Enter the annual interest rate: "));
const years = Number(prompt("Enter the number of years: "));

const monthlyRate = annualRate / 1200
const futureInvestmentValue = amount * ((1 + monthlyRate) ** (years * 12))

console.log(`The future investment value = $${futureInvestmentValue.toFixed(4)}`)
