const express = require('express')
const router = express.Router();
const {register} = require('../controller/user')

router.post('./registration', register)

//router.post('./login', (req, res) => {
//    res.send('Siz avtorizatsiyadan o`tdingiz')
//})

module.exports = router;