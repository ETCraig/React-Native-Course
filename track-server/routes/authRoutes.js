const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = new user({ email, password });
        await user.save();

        res.status(200).send('User Saved.');
    } catch (error) {
        res.status(422).send('Error: ', err);
    }
});

module.exports = router;