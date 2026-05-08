const prompt = require("prompt-sync")();

const velocity = Number(prompt("Enter the initial velocity in m/s: "));
const time = Number(prompt("Enter the time in seconds: "));
const acceleration = Number(prompt("Enter the acceleration in m/s square: "));

const distance = velocity * time + (0.5 * acceleration * (time ** 2));

console.log("The distance =", distance);
