require('../models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const authRoutes = require('../routes/authRoutes');

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = '';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB.');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

app.get('/', (req, res) => {
    res.send('Hi There.');
});

app.listen(3000, () => {
    console.log('Listening on Server Port 3000.');
});