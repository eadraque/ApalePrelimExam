const pool = require('./db'); 

const sql =
    'INSERT INTO "PrelimExam"."A_lineItem"(po_id, prod_id, quantity, price) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [1, 1, 5, 550];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();