const express = require('express');
const axios = require('axios');
const path = require('path');
const { getApplicationData } = require('./controllers/checklistController');

const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to display the checklist dashboard
app.get('/dashboard', getApplicationData);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
