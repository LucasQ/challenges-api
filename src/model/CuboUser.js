const mongoose = require('mongoose');

const CuboSchema =  mongoose.Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    participation: {
        type: Number,
    },
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('CuboUser', CuboSchema);