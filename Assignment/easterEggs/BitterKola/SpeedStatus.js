const prompt = require("prompt-sync")();

let speed = Number(prompt("Enter speed in km/h: "));

if (speed === 0) {
    console.log("Stationary");
} else if (speed >= 1 && speed <= 40) {
    console.log("Slow");
} else if (speed >= 41 && speed <= 80) {
    console.log("Moderate");
} else if (speed >= 81 && speed <= 120) {
    console.log("Fast");
} else {
    console.log("Dangerously Fast");
}
