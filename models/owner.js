const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        unique: true,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
        // max: 1024,
        // min: 6,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Owner", ownerSchema);