const mongoose = require("mongoose");

const Reserve = mongoose.model('Reservation',
    new mongoose.Schema({
        room: {
            type: String,
            required: true,
        },
        hotel: {
            type: String,
            unique: true,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Owner'
        },
        date_creation: {
            type: Date,
            default: Date.now,
        },
        type_payment: {
            type: String,
        },
    })
)

module.exports = Reserve;