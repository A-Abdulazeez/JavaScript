const prompt = require("prompt-sync")();

let pin = Number(prompt("Enter your pin: "));

if(pin >= 1000 && pin <= 9999) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}