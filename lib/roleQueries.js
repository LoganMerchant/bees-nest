const connection = require('../db/database');

class Role {
    getRoles() {
        let response = [];

        connection.promise().query(`
        SELECT role.id, role.title AS job_title, salary, department.name AS department
        FROM role 
        LEFT JOIN department 
        ON role.department_id = department.id`)
        .then( ([rows]) => {
            rows.forEach(row => {
                response.push({
                    ID: row.id,
                    'Job Title': row.job_title,
                    Salary: row.salary,
                    Department: row.department
                });
            })
            return response;
        })
        .then(responseArr => {
            console.table('\nROLES', responseArr);
        })
        .catch(console.log);
    };

    getRoleTitles() {
        let choices = [];

        connection.query(
            `SELECT title, id FROM role`,
            function (err, results) {
                if (err) {
                    throw new Error;
                }

                results.forEach(row => {
                    choices.push({
                        name: row.title,
                        value: row.id
                    });
                });
            }
        );

        return choices;
    };

    addRole = (title, salary, department) => {
        connection.promise()
            .query(`INSERT INTO role (title, salary, department_id)
                    VALUES (?, ?, ?)`, [title, salary, department])
            .then( ([rows]) => {
                console.log(`${title} was added as a new position. It has an id of ${rows.insertId}.`);
            })
            .catch(console.log)
    }
};

module.exports = Role;