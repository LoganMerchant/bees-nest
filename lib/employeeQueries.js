const connection = require('../db/database');

class Employee {
    getEmployees() {
        connection.promise()
            .query(`SELECT e.id, e.first_name, e.last_name,
                    role.title AS job_title, department.name AS department, role.salary,
                    CONCAT(m.first_name, ' ', m.last_name) AS manager
                    FROM employee e
                    LEFT JOIN role ON e.role_id = role.id
                    LEFT JOIN department ON role.department_id = department.id
                    LEFT JOIN employee AS m ON e.manager_id = m.id
                    `)
            .then( ([rows]) => {
                console.log(rows);
            })
            .catch(console.log)
    };

    getEmployeeNames() {
        let choices = [];

        connection.query(
            `SELECT CONCAT(first_name, ' ', last_name) AS name FROM employee
            `,
            function (err, results) {
                if (err) {
                    console.log(err);
                }

                results.forEach(row => {
                    choices.push(row.name)
                });
            }
        );

        return choices;
    }

    addEmployee = (firstName, lastName, role, manager) => {
        connection.promise()
            .query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                    VALUES (?, ?, ?, ?)`, [firstName, lastName, role, manager])
            .then( ([rows]) => {
                console.log(`${firstName} ${lastName} was added as an employee. They have an id of ${rows.insertId}`)
            })
            .catch(console.log)
    };

    updateEmployeeRole = (role, employee) => {
        connection.promise()
            .query(`UPDATE employee
                    SET role_id = ?
                    WHERE id = ?`, [role, employee])
            .then( ([rows]) => {
                console.log(`${employee}'s role was updated to ${role}`)
            })
            .catch(console.log)
    };
};

module.exports = Employee;