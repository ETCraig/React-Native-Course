require('../models/User');
require('../models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const requireAuth = require('../middlewares/requireAuth');
const authRoutes = require('../routes/authRoutes');
const trackRoutes = require('../routes/trackRoutes');

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb://player-one:Dev1225@ds063170.mlab.com:63170/native-tracker';

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

app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email is: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on Server Port 3000.');
});