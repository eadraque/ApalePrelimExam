const pool = require('./db'); 


pool.query('SELECT * FROM "PrelimExam"."A_lineItem"', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});


pool.end();