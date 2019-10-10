const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = new user({ email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');

        res.status(200).send({ token });
    } catch (error) {
        res.status(422).send('Error: ', err);
    }
});

module.exports = router;