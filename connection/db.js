const mongoose = require("mongoose");

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/hotel-booking');
}

module.exports = connect;