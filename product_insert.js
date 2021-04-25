const pool = require('./db'); 

const sql = 'INSERT INTO  "PrelimExam"."A_product"(prod_id, supp_id, prod_name, prod_price) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [1, 1, 'Charger', 500];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();