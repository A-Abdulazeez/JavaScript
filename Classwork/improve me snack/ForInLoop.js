const country = {
    name: "Nigeria",
    capital: "Abuja",
    population: "200M"
}

for(let element in country)
    console.log(`${element}: ${country[element]}`);