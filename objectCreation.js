const prompt = require("prompt-sync")();

let isAvailable = true
const id = Number(prompt("What is your ID? "));
const name = String(prompt("What is your Name? "));
const author = String(prompt("Who is the Author? "));
const count = Number(prompt("how many books? "));

const user = {
  isAvailable: isAvailable === false, 
  id,
  name,
  author,
  count,
  }
  
  console.log(user)
  

