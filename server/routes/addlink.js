const express = require('express');
const router = express.Router();
const dataModel = require('../models/link.model');

// Route to handle adding a new link
router.post('/addlink', async (req, res) => {
    const { url, context } = req.body;
    console.log(`Received new link: ${url} with description: ${context}`);
    
    try {
        const existinglink = await dataModel.findOne({url: url});
        if(existinglink){
            return  res.status(400).send({ message: 'Link already exists' });
        }else{
            const linkdata = await dataModel.create({
            url: url,
            context: context
        });
        console.log('Link added successfully:', linkdata);
        res.status(201).send({ message: 'Link added successfully', data: linkdata });
        }
        
    } catch(err) {
        console.error('Error adding link:', err.message);
        res.status(500).send({ message: 'Failed to add link' });
    }
});

module.exports = router;