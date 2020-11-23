const employees = [];

const anilDeveloper = new developer('sunil', 1, 1000, 2000, 3000, 4000);
const sunilHr = new hr('anil', 2, 1500, 2500, 3500, 4500);

employees.push(anilDeveloper);
employees.push(sunilHr);

for (let i = 0; i < employees.length; i++) {
    printSalary(employees[i].calculateSalary);
}