const express = require('express');
const router = express.Router();

const{sort} = require('../controller/sorting')
router.get('/', sort)

module.exports = router;