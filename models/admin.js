const mongoose = require("mongoose");


const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['admin', 'customer', 'owner']
    },
    status: {
        type: Boolean
    }
});

const Admin = mongoose.model('User',
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
        role: RoleSchema,
        token: {
            type: String
        },
    })
)

module.exports = Admin;