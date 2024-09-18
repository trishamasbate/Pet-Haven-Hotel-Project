const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tier: {
        type: String,
        enum: ['Basic', 'Deluxe', 'Premium'],
        required: true
    }
});

const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;
