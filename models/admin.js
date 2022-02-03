const mongoose = require("mongoose");

const Admin = mongoose.model('User',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            max: 255,
            min: 6,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            max: 255,
            min: 6,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            min: 6,
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        },
        token: {
            type: String
        },
    })
)

module.exports = Admin;