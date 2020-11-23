//import the utility members
const utilityModule = require('./utility')
console.log(utilityModule)

console.log(utilityModule.add(10, 20))
console.log(utilityModule.subtract(10, 5));

const anil = {
    name: 'anil',
    age: 20
}

// const name = anil.name;
// const age = anil.age;

const { name, age } = anil;

console.log(name, age)

// console.log(module)