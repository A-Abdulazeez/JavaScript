const prompt = require("prompt-sync")();

const totalSeconds = Number(prompt("Enter number of seconds: "));

const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log(`${hours} hour, ${minutes} minutes, ${seconds} seconds`);

