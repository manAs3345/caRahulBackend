const express = require('express');
const app = express();
const emailRoutes = require('./emailRoutes');
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use('/email', emailRoutes);


app.listen(5000, () => {
    console.log('Server is running on port 3000');
});

