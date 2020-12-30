const express = require('express');
const router = express.Router();
const User = require('../model/CuboUser');

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        participation: req.body.participation 
    });

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch(err) {
        res.json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json(err);
    }

});

module.exports = router;