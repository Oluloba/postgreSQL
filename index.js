// index.js - Main app entry point

const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express PostgreSQL API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
