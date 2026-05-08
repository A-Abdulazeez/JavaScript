const input = require("prompt-sync")()

const exchangeRate = input("Enter the exchange rate from dollars to RMB: ")
const code = input("Enter 0 to convert dollars to RMB or 1 to convert RMB to dollars: ")

if (code == 0){
   let dollars = input("Enter the dollar amount: ")
 let rmb = dollars * exchangeRate
    console.log(dollars, "dollars is", rmb, "RMB")
    }
else if (code == 1){
    let rmb = input("Enter the RMB amount: ")
 let dollars = rmb / exchangeRate
    console.log(rmb, "RMB is", dollars, "dollars")
    }
else
    console.log("Incorrect input")
