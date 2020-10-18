const connection = require('../db/database');
const cTable = require('console.table');

class Department {
    getDepartments() {
        connection.query(
            `SELECT * FROM department`,
            function(err, results) {
                if (err) {
                    console.log(err);
                };

                console.log(results[0].name);

                console.table(`\nDepartments`, results);
            }
        );
    };

    getDepartmentNames() {
        let choices = [];

        connection.query(
            `SELECT name FROM department`,
            function(err, results) {
                if (err) {
                    console.log(err);
                }

                results.forEach(row => {
                    choices.push(row.name);
                });
            }
        );

        return choices;
    };

    addDepartment = newDepartment => {
        connection.promise()
            .query(`INSERT INTO department (name) VALUES (?)`, [newDepartment])
            .then( ([rows]) => {
                console.log(newDepartment + ` added as a department with an id of ${rows.insertId}.`);
            })
            .catch(console.log)
    };
};

module.exports = Department;