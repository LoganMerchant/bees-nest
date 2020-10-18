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

    getDepartmentId(match) {
        connection.query(
            `SELECT id FROM department WHERE name LIKE ?`, 
            [`%${match}`],
            function (err, results) {
                if (err) {
                    console.log(err);
                }

                return results.id;
            }
        );
    };

    addRole = (title, salary, department) => {
        department = this.getDepartmentId(department);

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