const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
       
      await client.query('BEGIN');
      const q1 = `INSERT INTO "PrelimExam"."A_supplier" 
                    (supp_id, 
                     supp_name, 
                     supp_loc) 
                  VALUES ($1, 
                          $2, 
                          $3)`;
      const data1 = [1,
                     'Bryan Apale',
                     'Mintal'];
      const res = await client.query(q1,data1);
  
      const q2 = `INSERT INTO "PrelimExam"."A_supplier"
                    (supp_id, 
                     supp_name, 
                     supp_loc) 
                  VALUES ($1, 
                          $2, 
                          $3)`;
      const data2 = [2,
                     'japhet Cortez',
                     'kiamba'];
      await client.query(q2,data2);

      const q3 = `INSERT INTO "PrelimExam"."A_supplier"
      (supp_id, 
       supp_name, 
       supp_loc) 
    VALUES ($1, 
            $2, 
            $3)`;
const data3 = [3,
       'Reniel Espinosa',
       'Cotabato'];
await client.query(q3,data3);

const q4 = `INSERT INTO "PrelimExam"."A_supplier"
(supp_id, 
 supp_name, 
 supp_loc) 
VALUES ($1, 
      $2, 
      $3)`;
const data4 = [4,
 'Ricart Narvasa',
 'Panabo'];
await client.query(q4,data4);

const q5 = `INSERT INTO "PrelimExam"."A_supplier"
(supp_id, 
 supp_name, 
 supp_loc) 
VALUES ($1, 
      $2, 
      $3)`;
const data5 = [5,
 'Rechiel Lactaoen',
 'Buhangin'];
await client.query(q5,data5);
await client.query('COMMIT');

    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state
      client.release();
    }
  })().catch(e=>console.error(e.stack))