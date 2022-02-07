const roomRouter = require('express').Router()

const {
    getAll_rooms,
    getOne_room,
    add_room,
    update_room,
    removeOne_room,
    deleteAll_rooms
} = require('../controllers/room.controller')

const isAuthorized = require('../middlewares/permissions')
const isAuth = require('../middlewares/isAuth')

roomRouter
    .get('/rooms', getAll_rooms)
    .get('/room/:id', getOne_room)
    .post('/add-room', isAuth, isAuthorized('owner'), add_room)
    .put('/room/:id/update', isAuth, isAuthorized('owner'), update_room)
    .delete('/room/:id/delete', isAuth, isAuthorized('owner'), removeOne_room)
    .delete('/rooms/delete', isAuth, isAuthorized('owner'), deleteAll_rooms)

module.exports = roomRouter