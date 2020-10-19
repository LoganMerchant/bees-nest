const connection = require('../db/database');
const cTable = require('console.table');

class Department {
    getDepartments() {
        let response = [];

        connection.promise().query(`SELECT * FROM department`)
        .then( ([rows]) => {
            rows.forEach(row => {
                response.push({
                    ID: row.id,
                    Name: row.name
                });
            })
            return response;
        })
        .then(responseArr => {
            console.table('\nDEPARTMENTS', responseArr);
        })
        .catch(console.log);
    };

    getDepartmentNames() {
        let choices = [];

        connection.query(
            `SELECT name, id FROM department`,
            function(err, results) {
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

    addDepartment = newDepartment => {
        connection.promise()
            .query(`INSERT INTO department (name) VALUES (?)`, [newDepartment])
            .then( ([rows]) => {
                console.log('\n' + newDepartment + ` added as a department.\n`);
            })
            .catch(console.log)
    };
};

module.exports = Department;