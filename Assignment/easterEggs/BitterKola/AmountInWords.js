const prompt = require("prompt-sync")();

let dollarAmount = Number(prompt("Enter dollar amount (1 - 10): "));

switch(dollarAmount) {
    case 1:
        console.log(`$${dollarAmount} => One dollar`);
        break;
    case 2:
        console.log(`$${dollarAmount} => Two dollar`);
        break;
    case 3:
        console.log(`$${dollarAmount} => Three dollar`);
        break;
    case 4:
        console.log(`$${dollarAmount} => Four dollar`);
        break;
    case 5:
        console.log(`$${dollarAmount} => Five dollar`);
        break;
    case 6:
        console.log(`$${dollarAmount} => Six dollar`);
        break;
    case 7:
        console.log(`$${dollarAmount} => Seven dollar`);
        break;
    case 8:
        console.log(`$${dollarAmount} => Eight dollar`);
        break;
    case 9:
        console.log(`$${dollarAmount} => Nine dollar`);
        break;
    case 10:
        console.log(`$${dollarAmount} => Ten dollar`);
        break;
    default:
        console.log("Invalid amount")
}