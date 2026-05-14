function merge(personal,professional){


const newObject = {
...personal,
...professional
}
return newObject
}

const personal = {name: 'Kemi', age: 27,}
const professional = {role: 'Designer', company: 'Techcorp'}

const merged = merge(personal, professional)

console.log(merged)