const prompt = require("prompt-sync")();

const weightOne = prompt("Enter weight for package 1: ")
const priceOne = prompt("Enter price for package 1: ")
const weightTwo = prompt("Enter weight for package 2: ")
const priceTwo = prompt("Enter price for package 2: ")

let pricePerWeightOne = priceOne / weightOne
const pricePerWeightTwo = priceTwo / weightTwo

if (pricePerWeightOne < pricePerWeightTwo)
    console.log("Package 1 has the better price")
else if (pricePerWeightTwo < pricePerWeightOne)
    console.log("Package 2 has the better price")
else
    console.log("Both packages have the same price")
