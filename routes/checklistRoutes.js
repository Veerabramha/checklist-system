// routes/checklistRoutes.js
const express = require('express');
const { getApplicationData } = require('../controllers/checklistController');
const router = express.Router();

router.get('/dashboard', getApplicationData);

module.exports = router;
