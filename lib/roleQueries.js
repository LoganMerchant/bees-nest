const connection = require('../db/database');

class Role {
    getRoles() {
        connection.promise()
            .query(`SELECT role.id, role.title AS job_title, salary, department.name AS department
                    FROM role 
                    LEFT JOIN department 
                    ON role.department_id = department.id`)
            .then( ([rows]) => {
                console.log(rows);
            })
            .catch(console.log)
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