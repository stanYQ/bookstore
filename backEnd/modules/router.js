const express = require('express');
const router = express.Router();
const handle = require('./handle');

router.get('/category',handle.category);

module.exports = router;