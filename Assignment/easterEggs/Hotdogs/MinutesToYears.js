const prompt = require("prompt-sync")();

const minutes = Number(prompt("Enter number of minutes: "));

const totalDays = Math.floor(minutes / 1440);
const years = Math.floor(totalDays / 365);
const remainingDays = totalDays % 365;

console.log(minutes, "minutes = ", years, "years and ", remainingDays, "days");
