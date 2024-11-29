const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Add this route to handle the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Checklist System!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
