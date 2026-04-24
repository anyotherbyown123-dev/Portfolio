const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Portfolio API is running (In-memory mode)');
});

// Import routes
const projectRoutes = require('./routes/projects');
const profileRoutes = require('./routes/profile');

app.use('/api/projects', projectRoutes);
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Keep process alive
setInterval(() => {}, 1000);
