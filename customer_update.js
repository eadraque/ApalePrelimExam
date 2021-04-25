const pool = require('./db'); 
const sql = 'UPDATE  "PrelimExam"."A_customer" SET cust_loc = $1 WHERE cust_id =3 RETURNING *';
const data = ['TORIL DAVAO CITY'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();