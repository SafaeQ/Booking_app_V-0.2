const Hotel = require('../models/hotel')

const get_hotels = async (req, res) => {
    const hotels = await Hotel.find();
    if (!hotels)
        return res.status(400).send("Sorry We Can Not Get Your Request!");
    res.status(200).send(hotels);
}

const get_hotel_byId = async (req, res) => {
    const hotelId = req.params.id;
    const hotel = await Hotel.findById(hotelId);
    if (!hotel)
        return res.status(400).send("Sorry We Can Not Find Hotel With Given Id!");
    res.status(200).send(hotel);
}


module.exports = {
    get_hotels,
    get_hotel_byId
}