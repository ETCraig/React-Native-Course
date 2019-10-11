const express = require('express');
const mongoose = require('mongoose');
const Track = mongoose.model('Track');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    try {
        const tracks = await Track.find({ userId: req.user._id });

        res.status(200).send(tracks);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.post('tracks', async (req, res) => {
    try {
        const { name, locations } = req.body;

        if (!name || !locations) {
            return res.status(422).send({ error: 'You Must Provide a Name and Locations.' });
        }

        const track = new track({ userId: req.user._id, name, locations });
        await track.save();

        res.status(200).send(track);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;