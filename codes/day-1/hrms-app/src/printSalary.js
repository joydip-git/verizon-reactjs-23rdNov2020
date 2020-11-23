const printSalary = (printSalaryFnRef) => {
    return printSalaryFnRef();
}

export const add = (a, b) => (a + b);
export default printSalary;

// module.exports = printSalary;