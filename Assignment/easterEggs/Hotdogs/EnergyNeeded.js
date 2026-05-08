const prompt = require("prompt-sync")();

const mass = Number(prompt("Enter the amount of water in kg: "));
const initialTemperature = Number(prompt("Enter the initial temperature: "));
const finalTemperature = Number(prompt("Enter the final temperature: "));

const energy = mass * (finalTemperature - initialTemperature) * 4184

console.log(`The energy required to heat up ${mass}kg of water = ${energy} joules`)
