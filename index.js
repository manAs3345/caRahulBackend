require('dotenv').config();
const express = require('express');
const app = express();
const emailRoutes = require('./emailRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/email', emailRoutes);

app.get('/', (req, res) => {
    res.status(200).json('Welcome to backend server');
});
app.listen(5000, () => {
    console.log('server running: http://localhost:5000');
    console.log(process.env.EMAIL);
    console.log(process.env.EMAIL_PASSWORD);
});


module.exports = app;

