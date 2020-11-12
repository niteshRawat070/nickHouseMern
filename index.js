const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const houses = require('./routes/houses'); //use as middleware

const app = express();
app.use(cors());

app.use(express.json())
app.get('/', (req, res) => {
    res.send("Welcome to the house listing API");
});
app.use('/api/houses', houses);
require('dotenv').config();
const port = process.env.PORT || 3000;
//connect returns a promise
mongoose.connect('Enter your mongoDb atlas id password')
    .then(result => {

        app.listen(port, () => console.log(`Server is running on port ${port}`))
    }) // .then if we did succeed
    .catch(err => console.log(err)) // .catch if we're not succeed