const prompt = require("prompt-sync")();

let day = Number(prompt("Enter day: "));
let month = Number(prompt("Enter month: "));
let year = Number(prompt("Enter year: "));

switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if(day >= 1 && day <= 30 && year > 0) {
            console.log("Valid date");
        } else {
            console.log("Invalid date");
        }
        break;
    case 4: case 6: case 9: case 11:
        if(day >= 1 && day <= 31 && year > 0) {
            console.log("Valid date");
        } else {
            console.log("Invalid date");
        }
        break;
    case 2:
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            if(day >= 1 && day <= 29 && year > 0) {
                console.log("Valid date");
            } else {
                console.log("Invalid date");
            }
        } else {
           if(day >= 1 && day <= 28 && year > 0) {
                console.log("Valid date");
            } else {
                console.log("Invalid date");
            }
        }
        break;
    default:
        console.log("Invalid date");
}
