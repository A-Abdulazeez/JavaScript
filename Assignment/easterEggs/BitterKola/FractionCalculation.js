const prompt = require("prompt-sync")();

let fractionOneNumerator = Number(prompt("Enter fraction 1 numerator: "));
let fractionOneDenominator = Number(prompt("Enter fraction 1 denominator: "));

let fractionTwoNumerator =  Number(prompt("Enter fraction 2 numerator: "));
let fractionTwoDenominator = Number(prompt("Enter fraction 1 denominator: "));

if (fractionOneDenominator === 0 || fractionTwoDenominator === 0) {
    console.log("Denominator cannot be 0");
    return;
}

let fractionOne = fractionOneNumerator / fractionOneDenominator;
let fractionTwo = fractionTwoNumerator / fractionTwoDenominator;

let sum = fractionOne + fractionTwo;
let difference = fractionOne - fractionTwo;
let product = fractionOne * fractionTwo;
let quotient = fractionOne / fractionTwo;

console.log("The sum of the fractions is", sum);
console.log("The difference of the fractions is", difference);
console.log("The product of the fractions is", product);
console.log("The quotient of the fractions is", quotient);
