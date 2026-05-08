const prompt = require("prompt-sync")();

let subTotal = Number(prompt("Enter Subtotal: "))
let gratuityRate = Number(prompt("Enter Gratuity rate in %: "))
let gratuity = subTotal * (gratuityRate / 100)
let total = subTotal + gratuity

console.log(`Gratuity = $${gratuity} and the total amount = $${total}`)
