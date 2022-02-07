const Reserve = require('../models/reservation')

const add_reservation = async (req, res) => {
    const reservation = await new Reserve({
        ...req.body
    })
    try {
        await reservation.save()
        res.status(200).send(reservation)
    } catch (error) {
        res.status(404).send(e.message)
    }
}

const delete_reservation = async (req, res) => {
    const id = req.params.id
    const reservation = await Reserve.deleteOne({
        id
    })
    res.status(200).send({
        reservation
    })
}

module.exports = {
    add_reservation,
    delete_reservation
}