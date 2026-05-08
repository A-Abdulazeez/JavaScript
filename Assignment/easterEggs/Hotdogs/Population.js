const prompt = require("prompt-sync")();

const years = 5;
const currentPop = 8000000000;
const secondsInYear = 365 * 24 * 60 * 60;
const popChangePerYear = (secondsInYear/7) - (secondsInYear/13) + (secondsInYear/45);
const futurePop = Math.floor(currentPop + (popChangePerYear * years));

console.log(`Population in ${years} years: ${futurePop}`);

