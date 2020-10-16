const connection = require('../db/database');

function getAll(table) {
    connection.promise()
        .query(`SELECT * FROM ${table}`)
        .then( ([rows]) => {
            console.log(rows);
        })
        .catch(console.log)
        .then( () => connection.end());
}
module.exports = getSkelly;