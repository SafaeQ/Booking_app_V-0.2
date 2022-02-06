const mongoose = require("mongoose");

const Owner = mongoose.model('Owner',
    new mongoose.Schema({
        name: {
            type: String,
            required: 'Please enter your name',
        },
        email: {
            type: String,
            unique: true,
            required: 'Please enter your email',
        },
        password: {
            type: String,
            required: 'Please enter your password',
            // max: 1024,
            // min: 6,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }));

module.exports = Owner