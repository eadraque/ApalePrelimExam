const pool = require('./db');

const sql = 'UPDATE  "PrelimExam"."A_PurchaseOrder" SET status = $1 WHERE po_id =1 RETURNING *';
const data = ['Verygood'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();