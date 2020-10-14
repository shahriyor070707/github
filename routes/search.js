const express = require('express');
const router = express.Router();

const { filter } = require('../controller/search')
router.get('/', filter);

module.exports = router;