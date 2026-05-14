const prompt = require("prompt-sync")()

const userInput = prompt("Enter traffic light color: ")
if (userInput.toLowerCase() == "red")
console.log("STOP !!!")

else if (userInput.toLowerCase() == "yellow")
console.log("GET READY !!!")

else if (userInput.toLowerCase() == "green")
console.log("GO !!!")