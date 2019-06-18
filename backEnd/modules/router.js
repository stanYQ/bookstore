const express = require('express');
const router = express.Router();
const handle = require('./handle');
router.get('/',handle.index);

module.exports = router;