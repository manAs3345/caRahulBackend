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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running: http://localhost:${PORT}`);
});
module.exports = app;

