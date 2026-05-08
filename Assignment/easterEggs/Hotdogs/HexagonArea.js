const prompt = require("prompt-sync")();

const side = prompt("Enter the side of the hexagon: "))

let area = ((3 * (3 ** 0.5)) / 2) * (side ** 2)

console.log("The area of the hexagon is", area)
