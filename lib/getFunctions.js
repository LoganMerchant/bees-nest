const connection = require('../db/database');

const getSkelly = connection.query(
    `SELECT * FROM employee WHERE id = 1;`,
    function(err, results) {
        if (err) {
        return console.log('error');  
    };

        console.log(results);
    }
);

module.exports = getSkelly;