const express = require('express');
const router = express.Router();

// Route to handle adding a new link
router.post('/addlink', (req, res) => {
    const { url, context} = req.body;
    console.log(`Received new link: ${url} with description: ${context}`);
    // Here you would typically add code to save the link to a database
    res.status(201).send({ message: 'Link added successfully' });
});

module.exports = router;