const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('Post Request Hit.');
});

module.exports = router;