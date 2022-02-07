const mongoose = require("mongoose");

const Reserve = mongoose.model('Reservation',
    new mongoose.Schema({
        room: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Room'
        },
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Hotel'
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