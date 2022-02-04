const express = require('express');
const hotelRouter = express.Router()

hotelRouter.get('/hotels', )
hotelRouter.get('/hotel/:id', )
hotelRouter.post('/add-hotel', )
hotelRouter.put('/hotel/:id/update', )
hotelRouter.delete('/hotel/:id/delete', )

module.exports = hotelRouter