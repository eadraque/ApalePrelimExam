const pool = require("./db");

pool.query('SELECT * FROM  "PrelimExam"."A_supplier"', (err,res)=>{
    try{
        console.log(res.rows);

    } catch (err){
        console.error(err.message);
    }

});

pool.end();
