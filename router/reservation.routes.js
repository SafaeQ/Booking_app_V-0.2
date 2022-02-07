const reserveRouter = require('express').Router()

const {
    add_reservation
} = require('../controllers/reservation.controller')

reserveRouter
    .post('/add-reservation', add_reservation)

module.exports = reserveRouter