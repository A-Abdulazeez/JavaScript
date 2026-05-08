const prompt = require("prompt-sync")();

let minutes = Number(prompt("Enter minutes: "));

let remainingMinutes = minutes % 60;
let totalHours = Math.trunc(minutes / 60);
let remainingHours = totalHours % 24;
let totalDays = Math.trunc(totalHours / 24);

console.log(`${totalDays} days, ${totalHours} hours, ${remainingMinutes} minutes`);
