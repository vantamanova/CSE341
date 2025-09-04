const express = require('express');
const router = express.Router();

// Functions
const {getData} = require('../controllers/'); 
const { getUser, getUsername } = require('../controllers/user');

// Routes
router.get('/data', getData);
router.get('/user', getUser);
router.get('/username', getUsername);

// Exports (so server.js can use it)
module.exports = router;