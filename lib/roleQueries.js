const connection = require('../db/database');

class Role {
    getRoles() {
        connection.promise()
            .query(`SELECT role.id, role.title AS job_title, salary, department.name AS department
                    FROM role 
                    LEFT JOIN department 
                    ON role.department_id = department.id`)
            .then( ([rows]) => {
                console.table('Roles', rows);
            })
            .catch(console.log)
    };

    getRoleTitles() {
        let choices = [];

        connection.query(
            `SELECT title FROM role`,
            function (err, results) {
                if (err) {
                    throw new Error;
                }

                results.forEach(row => {
                    choices.push(row.title);
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
                console.log(`${title} was added as a new role within ${department}. It has an id of ${rows.insertId}.`);
            })
            .catch(console.log)
    }
};

module.exports = Role;