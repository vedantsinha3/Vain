// backend/index.js
const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

// Routes would go here
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example using the db module
app.get('/products', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});