const prompt = require("prompt-sync")();

const distance = Number(prompt("Enter the distance you want to drive: "));
const miles = Number(prompt("Enter the fuel efficiency: "));
const pricePerGallon = Number(prompt("Enter the price per gallon: "));

const price = Math.round((distance / miles) * pricePerGallon);

console.log(`The price of the journey = $${price}`)
