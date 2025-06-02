// backend/db/index.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vedantsinha',
  host: 'localhost',
  database: 'vain_ecommerce',
  password: '',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};