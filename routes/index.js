const express = require('express');
const router = express.Router();

// Functions
const {getData} = require('../controllers/'); 

// Routes
router.get('/data', getData);

// Exports (so server.js can use it)
module.exports = router;