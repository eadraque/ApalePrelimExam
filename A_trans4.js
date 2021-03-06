const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {

        await client.query('BEGIN');

        const q1 = 'UPDATE "PrelimExam"."A_supplier" SET supp_loc = $1 WHERE supp_id = 1 RETURNING *';
        const d1 = ['Mintal D.C'];
        const res1 = await client.query(q1, d1);

        
        await client.query('COMMIT');
    } catch (e) {
        
        await client.query('ROLLBACK');
        throw e;
    } finally {
  
        client.release();
    }
})().catch(e => console.error(e.stack));