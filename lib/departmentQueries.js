const connection = require('../db/database');

class Department {
    getDepartments() {
        connection.promise()
            .query(`SELECT * FROM department`)
            .then( ([rows]) => {
                console.log(rows);
            })
            .catch(console.log)
    };

    addDepartment = newDepartment => {
        connection.promise()
            .query(`INSERT INTO department (name) VALUES (?)`, [newDepartment])
            .then( ([rows]) => {
                console.log(newDepartment + ` added as a department with an id of ${rows.insertId}.`);
            })
            .catch(console.log)
            .then( () => connection.end());
    };
};

module.exports = Department;