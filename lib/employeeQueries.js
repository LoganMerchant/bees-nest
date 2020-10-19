const connection = require('../db/database');

class Employee {
    getEmployees() {
        let response = [];

        connection.promise()
            .query(`SELECT e.id, CONCAT(e.first_name, ' ', e.last_name) AS employee,
                    role.title AS job_title, department.name AS department, role.salary,
                    CONCAT(m.first_name, ' ', m.last_name) AS manager
                    FROM employee e
                    LEFT JOIN role ON e.role_id = role.id
                    LEFT JOIN department ON role.department_id = department.id
                    LEFT JOIN employee AS m ON e.manager_id = m.id
                    `)
            .then( ([rows]) => {
                rows.forEach(row => {
                    response.push({
                        ID: row.id,
                        Name: row.employee,
                        Title: row.job_title,
                        Salary: row.salary,
                        Department: row.department,
                        Manager: row.manager
                    });
                })
                return response;
            })
            .then(responseArr => {
                console.table('\nEMPLOYEES', responseArr);
            })
            .catch(console.log);
    };

    getEmployeeNames() {
        let choices = [];

        connection.query(
            `SELECT CONCAT(first_name, ' ', last_name) AS name, id FROM employee`,
            function (err, results) {
                if (err) {
                    console.log(err);
                }

                results.forEach(row => {
                    choices.push({
                        name: row.name,
                        value: row.id 
                    });
                });
            }
        );

        return choices;
    };

    getManagerNames() {
        let choices = [];
        
        connection.query(
            `SELECT CONCAT(first_name, ' ', last_name) AS name, id 
            FROM employee
            WHERE manager_id IS NULL`,
            function (err, results) {
                if (err) {
                    console.log(err);
                }

                results.forEach(row => {
                    choices.push({
                        name: row.name,
                        value: row.id
                    })
                });

                choices.push({
                    name: 'This employee does not have a manager.',
                    value: null
                });
            }
        );

        return choices;
    };

    addEmployee = (firstName, lastName, role, manager) => {
        connection.promise()
            .query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                    VALUES (?, ?, ?, ?)`, [firstName, lastName, role, manager])
            .then( ([rows]) => {
                console.log(`\n${firstName} ${lastName} was added as an employee.\n`)
            })
            .catch(console.log)
    };

    updateEmployeeRole = (employee, role) => {
        connection.promise()
            .query(`UPDATE employee
                    SET role_id = ?
                    WHERE id = ?`, [role, employee])
            .then( ([rows]) => {
                console.log(`\nThe employee's position was successfully updated.\n`)
            })
            .catch(console.log)
    };
};

module.exports = Employee;