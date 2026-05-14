const prompt = require("prompt-sync")();

const userInput = prompt("Enter the day of the week: ")
switch (userInput.toLowerCase()){
case "monday":
case "tuesday": 
case "wednesday": 
case "thursday" :
case "friday":
console.log("weekday")
break;
case "saturday" :
case "sunday" :
console.log("weekend")
break;
default :
console.log("invalid")
}