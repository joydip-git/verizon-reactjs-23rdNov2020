const developerModule = require('./developer')
const hrModule = require('./hr')
const salaryFn = require('./printSalary')

const employees = [];

const anilDeveloper = new developerModule.developer('sunil', 1, 1000, 2000, 3000, 4000);
const sunilHr = new hrModule.hr('anil', 2, 1500, 2500, 3500, 4500);

employees.push(anilDeveloper);
employees.push(sunilHr);

//const appDiv = document.getElementById('app');
for (let i = 0; i < employees.length; i++) {
    let employeeSalary = salaryFn(employees[i].calculateSalary);
    console.log(employeeSalary)
    // appDiv.innerHTML += employeeSalary;
    // appDiv.innerHTML += '<br/>'
    
}