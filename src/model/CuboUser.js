const mongoose = require('mongoose');

const CuboSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    participation: {
        type: Number,
        required: true,
    },
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('CuboUser', CuboSchema);