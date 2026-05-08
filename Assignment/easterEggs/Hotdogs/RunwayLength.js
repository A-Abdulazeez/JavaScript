const prompt = require("prompt-sync")();

const velocity = Number(prompt("Enter the initial velocity in m/s: "));
const acceleration = Number(prompt("Enter the acceleration in m/s square: "));

const length = velocity ** 2 / (2 * acceleration);

console.log(`The minimum runway length = ${length}meters`)
