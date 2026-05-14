const user = {
    name: "Amaka",
    age: 25, 
    country: "Nigeria"
}


function destructringTwo(user){

    const { name, age } = user;
return name + age
}

console.log(destructringTwo(user))