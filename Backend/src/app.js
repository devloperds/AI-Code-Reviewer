const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ai', aiRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'AI Code Reviewer Backend is running' });
});

module.exports = app;