const express = require('express');
const hotelRouter = express.Router()
const {
    get_hotels,
    get_hotel_byId,
    add_hotel,
    update_hotel,
    delete_hotel
} = require('../controllers/hotel.controller')
const isAuthorized = require('../middlewares/permissions')

hotelRouter.get('/hotels', isAuthorized(['admin', 'owner']), get_hotels)
hotelRouter.get('/hotel/:id', get_hotel_byId)
hotelRouter.post('/add-hotel', add_hotel)
hotelRouter.put('/hotel/:id/update', update_hotel)
hotelRouter.delete('/hotel/:id/delete', delete_hotel)

module.exports = hotelRouter