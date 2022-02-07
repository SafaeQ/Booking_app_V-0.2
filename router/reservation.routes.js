const reserveRouter = require('express').Router()

const {
    add_reservation,
    delete_reservation
} = require('../controllers/reservation.controller')

reserveRouter
    .post('/add-reservation', add_reservation)
    .delete('/delete-reservation/:id', delete_reservation)

module.exports = reserveRouter