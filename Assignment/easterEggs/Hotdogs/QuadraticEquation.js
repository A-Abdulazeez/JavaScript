const prompt = require("prompt-sync")();

const a = prompt("Enter a: ")
const b = prompt("Enter b: ")
const c = prompt("Enter c: ")

const discriminant = (b ** 2) - (4 * a * c)

if (discriminant > 0){
 let rootOne = (-b + (discriminant ** 0.5)) / (2 * a)
 let rootTwo = (-b - (discriminant ** 0.5)) / (2 * a)
 console.log("The roots are", rootOne, "and", rootTwo)
}
else if (discriminant == 0){
    let root = -b / (2 * a)
    console.log("The root is", root)
    }
else
    console.log("The equation has no real roots")
