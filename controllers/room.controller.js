const Room = require('../models/room')


const getAll_rooms = async (req, res) => {
    const rooms = await Room.find()
    if (!rooms) {
        return res.status(400).send('😒 Sorry We can\'t find any rooms')
    }
    res.status(200).send(rooms)
}

const getOne_room = async (req, res) => {
    const id = req.params.id
    const room = await Room.findById(id)
    if (!room) return res.status(400).send(room)
    res.status(200).send(room)
}

const add_room = async (req, res) => {
    const {
        type,
        price,
        state,
        description,
        date
    } = req.body;
    const room = await Room.create({
        type,
        price,
        state,
        description,
        date
    })
    const result = await room.save()
    if (!result) return res.status(400).send("😒 Sorry we can't add your room")
    res.status(200).send(result)
}

const update_room = async (req, res) => {
    const id = req.params.id
    const room = await Room.findById(id)
    const {
        type,
        price,
        state,
        hotel,
        description,
        date
    } = req.body;
    const result = await Room.updateOne({
        _id: id
    }, {
        type: type,
        price: price,
        state: state,
        hotel: hotel,
        description: description,
        date: date
    })
    if (!result) return res.status(400).send('😒 Sorry We can not update your item')
    res.status(200).send(result)
}

const removeOne_room = async (req, res) => {
    const id = req.params.id
    const room = await Room.deleteOne(id)
    res.status(200).send('😜 your room has been deleted', {
        room
    })
}

const deleteAll_rooms = async (req, res) => {

}

module.exports = {
    getAll_rooms,
    getOne_room,
    add_room,
    update_room,
    removeOne_room,
    deleteAll_rooms
}