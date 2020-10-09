const express = require('express');
const router = express.Router();
const { toDoFilter,search } = require('../controller/search')

router.get('/filter', toDoFilter)
router.get('/', search)

module.exports = router;