const Department = require('./lib/departmentQueries');
const Role = require('./lib/roleQueries');
const Employee = require('./lib/employeeQueries');
const department = new Department;
const role = new Role;
const employee = new Employee;

employee.updateEmployeeRole(1, 5);
