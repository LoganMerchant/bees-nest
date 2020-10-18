const inquirer = require('inquirer');
const connection = require('../db/database');

const Department = require('./departmentQueries');
const Role = require('./roleQueries');
const Employee = require('./employeeQueries');
const department = new Department;
const role = new Role;
const employee = new Employee;

const menuPrompt = [
    {
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: [
                `View all departments.`,
                `View all roles.`,
                `View all employees.`,
                `Add a department.`,
                `Add a role.`,
                `Add an employee.`,
                `Update an employee's role.`,
                `Quit the application.`,
        ],
        loop: false
    },
];

const addDepartmentPrompts = [
    {
        type: 'input',
        name: 'newDepartment',
        message: 'What is the name for this new department?',
        validate: newDepartmentInput => {
            if (newDepartmentInput) {
                return true;
            } else {
                console.log(`Please give this new department a name.`);
                return false;
            };
        },
    }
];

const addRolePrompts = [
    {
        type: 'input',
        name: 'newRoleName',
        message: 'What is the name for this new position?',
        validate: newRoleNameInput => {
            if (newRoleNameInput) {
                return true;
            } else {
                console.log(`Please give this new position a name.`);
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'newSalary',
        message: 'What is the salary for this new position?',
        validate: newSalaryInput => {
            if (newSalaryInput) {
                let type = parseInt(newSalaryInput);

                if (Number.isInteger(type)) {
                    return true;
                } else {
                    console.log(`Please enter a number value for this new position's salary.`)
                    return false;
                };
            } else {
                console.log(`Please enter a salary for this new position.`);
                return false;
            };
        }
    },
    {
        type: 'list',
        name: 'department',
        message: 'Which department is this position under?',
        choices: department.getDepartmentNames()
    },
];

const addEmployeePrompts = [
    {
        type: 'input',
        name: 'firstName',
        message: `What is this new employee's first name?`,
        validate: firstNameInput => {
            if (firstNameInput) {
                return true;
            } else {
                console.log(`Please enter this new employee's first name.`);
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: `What is this new employee's last name?`,
        validate: lastNameInput => {
            if (lastNameInput) {
                return true;
            } else {
                console.log(`Please enter this new employee's last name.`);
                return false;
            };
        }
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: `What will this employee's position be?`,
        choices: role.getRoleTitles()
    }
];

const updateEmployeePrompts = [
    {
        type: 'list',
        name: 'employee',
        message: `Which employee's role are you wanting to update?`,
        choices: employee.getEmployeeNames()
    },
    {
        type: 'list',
        name: 'newRole',
        message: `What will this employee's new position be?`,
        choices: role.getRoleTitles()
    }
];

function makeQuery() {
    inquirer.prompt(menuPrompt).then(answer => {
        if (answer.selection === `View all departments.` || 
            answer.selection === `View all roles.` || 
            answer.selection === `View all employees.`) {
                return answer.selection;
        };

        if (answer.selection === 'Add a department.') {
            inquirer.prompt(addDepartmentPrompts)
            .then(answer => {
                return answer;
            });
        };

        if (answer.selection === `Add a role.`) {
            inquirer.prompt(addRolePrompts)
            .then(answers => {
                return answers;
            });
        };

        if (answer.selection === `Add an employee.`) {
            inquirer.prompt(addEmployeePrompts)
            .then(answers => {
                return answers;
            });
        };

        if (answer.selection === `Update an employee's role.`) {
            inquirer.prompt(updateEmployeePrompts)
            .then(answers => {
                return answers;
            });
        };

        if (answer.selection === `Quit the application.`) {
            console.log(`Goodbye!`);
            connection.end();
        };
    })
    .then(data => {
        // console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
};

module.exports = makeQuery;