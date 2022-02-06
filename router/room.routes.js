const roomRouter = require('express').Router()

const {
    getAll_rooms,
    getOne_room,
    add_room,
    update_room,
    removeOne_room,
    deleteAll_rooms
} = require('../controllers/room.controller')

roomRouter
    .get('/rooms', getAll_rooms)
    .get('/room/:id', getOne_room)
    .post('/add-room', add_room)
    .put('/room/:id/update', update_room)
    .delete('/room/:id/delete', removeOne_room)
    .delete('/rooms/delete', deleteAll_rooms)

module.exports = roomRouter