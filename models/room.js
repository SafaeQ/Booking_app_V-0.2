const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model("Hotels", hotelSchema);

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