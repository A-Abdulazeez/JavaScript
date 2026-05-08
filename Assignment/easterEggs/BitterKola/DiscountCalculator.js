const prompt = require("prompt-sync")();

let price = prompt("Enter price: ");
let discountPercentage = prompt("Enter discount percentage: ");

let discountAmount = price * discountPercentage / 100;
let finalPrice = price - discountAmount;

console.log("The final price is", finalPrice)
