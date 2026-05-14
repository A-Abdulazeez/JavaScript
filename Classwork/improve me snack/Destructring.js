function destructring(employee){

return employee.name + employee.salary
}


const employee = {name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech'}
console.log(destructring(employee))