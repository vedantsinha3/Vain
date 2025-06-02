const express = require('express');
const { Pool } = require('pg'); // Import the Pool object
const app = express();
const port = 3000;

// Database connection pool configuration
const pool = new Pool({
  user: 'vedantsinha',        // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'vain_ecommerce', // Replace with your database name
  password: '',    // Replace with your PostgreSQL password
  port: 5432,                   // Default PostgreSQL port
});

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release(); // release the client back to the pool

    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Database connected successfully:', result.rows[0]);
  });
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});