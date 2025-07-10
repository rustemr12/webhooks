const express = require('express');
const app = express();
const port = 443;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint
app.post('/webhooks', (req, res) => {
  console.log('Received data:', req.body);
  res.status(201).send({ message: 'Resource created successfully' });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
