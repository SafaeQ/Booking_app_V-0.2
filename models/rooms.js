const mongoose = require("mongoose");
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

const roomSchema = new mongoose.Schema({
    type: {
        type: String
    },
    price: {
        type: Number
    },
    state: {
        type: Boolean,
    },
    hotel: hotelSchema,
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Room", roomSchema);