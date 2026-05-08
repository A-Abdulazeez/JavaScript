const prompt = require("prompt-sync")();

console.log("1. Water (#100)\n2. Juice (#200)\n3. Soda (#150)\n4. Snack (#300)");
let productCode = Number(prompt("Enter product code: "));
let price = Number(prompt("Enter amount: "));

let amount;
switch(productCode) {
    case 1:
        amount = 100;
        break;
    case 2:
        amount = 200;
        break;
    case 3:
        amount = 150;
        break;
    case 4:
        amount = 300;
        break;
    default:
        console.log("Invalid product code!!!");
        return;
}

if(price > amount) {
    let change = price - amount;
    console.log("Your change is", change);
} else
    console.log("Insufficient Amount!!!");