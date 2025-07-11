// db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Handle errors on the pool globally
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1); // Optional: exit app if the DB connection breaks
});

// Optional: Test connection on startup
async function testConnection() {
  try {
    await pool.query('SELECT NOW()');
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err.stack);
    process.exit(-1); // Exit if connection failed
  }
}
testConnection();

module.exports = pool;
