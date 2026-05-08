const prompt = require("prompt-sync")();

let grade = prompt("Enter grade (A, B, C, D, or F): ");

switch(grade.toUpperCase()) {
    case 'A':
        console.log("4.0");
        break;
    case 'B':
        console.log("3.0");
        break;
    case 'C':
        console.log("2.0");
        break;
    case 'D':
        console.log("1.0");
        break;
    case 'F':
        console.log("0.0");
        break;
    default:
        console.log("Error: Invalid grade!!!");
}