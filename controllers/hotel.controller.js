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

const add_hotel = async (req, res) => {
    const {
        name,
        place,
        stars
    } = req.body;
    const insertHotel = new Hotel({
        name: name,
        place: place,
        stars: stars,
        // images: images,
    });
    const hotel = await insertHotel.save();
    if (!hotel) return res.status(400).send("Sorry Hotel Does Not Added!");
    res.status(200).send("Hotel Added Successfully!");
}

const update_hotel = async (req, res) => {
    const hotelId = req.params.id;
    const hotel = await Hotel.findById(hotelId);
    if (!hotel)
        return res.status(400).send("Sorry We Can Not Find Hotel With Given Id!");
    const {
        name,
        place,
        stars
    } = req.body;
    const updateHotel = await Hotel.updateOne({
        _id: hotelId
    }, {
        name: name,
        place: place,
        stars: stars
    });
    if (updateHotel) return res.status(200).send("Hotel Updated Successfully!");
    res.send("Ooops Something Goes Wrong!");
}

const delete_hotel = async (req, res) => {
    const hotelId = req.params.id;
    const hotel = await Hotel.findById(hotelId);
    if (!hotel)
        return res.status(400).send("Sorry We Can Not Find Hotel With Given Id!");
    await Hotel.deleteOne({
        _id: hotelId
    });
    res.status(200).send("delete hotel");
}
module.exports = {
    get_hotels,
    get_hotel_byId,
    add_hotel,
    update_hotel,
    delete_hotel
}
exports.getAllAnnonces = async (req, res) => {
  const hotels = await Hotel.find().populate('Rooms');
  if (!hotels)
    return res.status(400).send("Sorry We Can Not Get Your Request!");
  res.status(200).send(hotels);
};