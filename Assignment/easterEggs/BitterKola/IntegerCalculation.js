const prompt = require("prompt-sync")();

let firstDigit = Number(prompt("Enter first number: "));
let secondDigit = Number(prompt("Enter second number: "));

if(firstDigit > 0 && secondDigit > 0) {
    let sum = firstDigit + secondDigit;
    console.log("The sum is", sum);
} else if (firstDigit < 0 && secondDigit < 0){
    let product = firstDigit * secondDigit;
    console.log("The product is", product);
} else {
    let difference = 0;
    if (firstDigit > secondDigit) {
        difference = firstDigit - secondDigit;
    } else {
        difference = secondDigit - firstDigit;
    }

    console.log("The difference between the larger and smaller number is", difference);
}