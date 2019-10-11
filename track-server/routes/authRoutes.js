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

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).send({ error: 'Must Provide Email and Password.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send({ error: 'Email Not Found.' });
    }

    try {
        await user.comparePassword(password);

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');

        res.status(200).send({ token });
    } catch (error) {
        res.status(404).send({ error: 'Invalid Password or Email.' });
    }
});

module.exports = router;