const mongoose = require("mongoose");

// const hotelSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true,
//     }
// });

// module.exports = mongoose.model("Hotels", hotelSchema);

const Room = mongoose.model('Room',
    new mongoose.Schema({
        type: {
            type: String
        },
        price: {
            type: Number
        },
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Hotel'
        },

        description: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }));

module.exports = Room