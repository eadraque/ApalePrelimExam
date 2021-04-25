const pool = require("./db");

const sql = 'INSERT INTO  "PrelimExam"."A_customer"(cust_id,cust_name,cust_loc) VALUES ($1,$2,$3) RETURNING *';
const data = ['3','Dan','davao'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});
pool.end();