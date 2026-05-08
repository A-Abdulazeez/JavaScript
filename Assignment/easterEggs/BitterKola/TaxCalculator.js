const prompt = require("prompt-sync")();

let employeeSalary = Number(prompt("Enter employee's monthly salary: "));

let monthlyTax = 0;
if(employeeSalary > 600000) {
    let taxableIncome = employeeSalary - 600000;
    employeeSalary -= taxableIncome;
    monthlyTax += 0.25 * taxableIncome;
}

if(employeeSalary > 300000 ) {
    let taxableIncome = employeeSalary - 300000;
    monthlyTax += 0.15 * taxableIncome;
}

let annualTax = monthlyTax * 12;
console.log("Your monthly tax is", monthlyTax);
console.log("Your annual tax is", annualTax);
