const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const searchRouter = require('./routes/search')

app.use('/search' , searchRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server ishlayapti')
})