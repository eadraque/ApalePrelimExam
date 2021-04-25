const pool = require("./db");

const sql = 'INSERT INTO  "PrelimExam"."A_supplier"(supp_id,supp_name,supp_loc) VALUES ($1,$2,$3) RETURNING *';
const data = ['1','Dan','Toril'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});
pool.end();