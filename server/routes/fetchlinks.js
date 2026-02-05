const express = require('express');
const router = express.Router();
const dataModel = require('../models/link.model');

router.get('/fetchlinks', async (req, res) => {
    try {
        const links = await dataModel.find({}).sort({ createdAt: -1 });
        console.log('Fetched links successfully:', links);
        res.status(200).send({ message: 'Links fetched successfully', data: links });
    } catch(err) {
        console.error('Error fetching links:', err.message);
        res.status(500).send({ message: 'Failed to fetch links' });
    }
});

router.post('/addlink', async (req, res) => {
    const { url, context } = req.body;
    
    try {
        const linkdata = await dataModel.create({
            url: url,
            context: context
        });
        res.status(201).send({ message: 'Link added successfully', data: linkdata });
    } catch(err) {
        console.error('Error adding link:', err.message);
        res.status(500).send({ message: 'Failed to add link' });
    }
});

module.exports = router;