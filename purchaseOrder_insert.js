const pool = require('./db'); 

const sql = 'INSERT INTO  "PrelimExam"."A_PurchaseOrder"(po_id, supp_id, cust_id, po_date, status) VALUES ($1,$2,$3,$4,$5) RETURNING *';
const data = [1, 1, 3, 'november', 'good'];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();