const mongoose = require('mongoose');

const ClientSchema =  mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    purchase: [{
        description: String,
        quantity: Number,
        price: Number,
    }],
})

module.exports = mongoose.model('Client', ClientSchema);
