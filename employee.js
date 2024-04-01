const createEmployee = (name, salary, role) => {
    return { name, role, salary };
};

let michael = createEmployee('michael', 'frontend dev', 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
}

console.log(getSalary(michael));