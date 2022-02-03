const mongoose = require("mongoose");

const Admin = mongoose.model('Admin',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
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