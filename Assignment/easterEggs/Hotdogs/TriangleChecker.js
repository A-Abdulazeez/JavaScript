const input = require("prompt-sync")();
let sideOne = input("Enter side 1: ")
let sideTwo = input("Enter side 2: ")
let sideThree = input("Enter side 3: ")

if (sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree > sideOne)
    if (sideOne == sideTwo && sideTwo == sideThree)
        console.log("The triangle is equilateral")
    else if (sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree)
        console.log("The triangle is isosceles")
    else
        console.log("The triangle is scalene")
else
    console.log("The input does not form a valid triangle")
