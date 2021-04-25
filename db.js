const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'postgress',
    host: 'localhost',
    port: 5432,
    database: 'Apale',
});

module.exports = pool;
