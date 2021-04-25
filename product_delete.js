const pool = require('./db'); 

const sql = 'UPDATE  "PrelimExam"."A_product" SET prod_name = $1, prod_price = $2 WHERE supp_id = 1 RETURNING *';
const data = ['Book', 550];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();