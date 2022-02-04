const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    place: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Hotel", hotelSchema);