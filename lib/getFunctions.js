const connection = require('../db/database');

const getSkelly = connection.promise()
    .query(`SELECT * FROM employee WHERE id = 1;`)
    .then( ([rows]) => {
        console.log(rows);
    })
    .catch(console.log)
    .then( () => connection.end());

module.exports = getSkelly;