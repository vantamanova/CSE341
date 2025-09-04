const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Express app is running');
});

// Use routes from /routes folder
app.use('/', require('./routes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
