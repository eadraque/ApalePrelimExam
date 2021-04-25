const pool = require('./db'); 

const sql = 'UPDATE  "PrelimExam"."A_lineItem" SET quantity = $1, price = $2 WHERE po_id =1 RETURNING *';
const data = [5, 550];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();