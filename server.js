const express = require('express')
const bodyParser = require('body-parser')
const app = express();

// -------- filter --------
const filterRouter = require('./routes/search')
app.use('/filter', filterRouter)

// -------- sorting --------
const sortingRout = require('./routes/sorting')
app.use('/sort', sortingRout)

// -------- mongoDB --------
const connectDB = require('./config/db');
connectDB();




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`${PORT} port ishlayapti`)
});