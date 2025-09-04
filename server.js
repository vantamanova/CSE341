const express = require('express');
const { initDb } = require('./db/connect');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Use routes from /routes folder
app.use('/', routes);

// Start the server
// Only start the server if DB connects successfully
initDb((err) => {
  if (err) {
    console.error('Failed to connect to DB', err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
});
