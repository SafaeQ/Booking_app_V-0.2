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
const isAuth = require('../middlewares/isAuth')
hotelRouter.get('/hotels', get_hotels)
hotelRouter.get('/hotel/:id', get_hotel_byId)
hotelRouter.post('/add-hotel', isAuth, isAuthorized('admin', 'owner'), add_hotel)
hotelRouter.put('/hotel/:id/update', isAuth, isAuthorized('admin', 'owner'), update_hotel)
hotelRouter.delete('/hotel/:id/delete', isAuth, isAuthorized('admin', 'owner'), delete_hotel)

module.exports = hotelRouter