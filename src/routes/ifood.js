const express = require('express');
const router = express.Router();
const Client = require('../model/Client');

router.post('/', async (req, res) => {  
    const client = new Client({
        date: Date.parse(req.body.date),
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        purchase: req.body.purchase,
    })

    try {
        const savedClient = await client.save();
        res.status(201).json(savedClient);
    } catch(err) {
        res.json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await Client.find();
        res.json(result)
    } catch (err) {
        res.json(err)
    }
});


module.exports = router;