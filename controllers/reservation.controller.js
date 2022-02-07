const Reserve = require('../models/reservation')

const add_reservation = async (req, res) => {
    const reservation = await new Reserve({
        ...req.body,
        owner: req.user.id
    })
    try {
        await reservation.save()
        res.status(200).send(reservation)
    } catch (error) {
        res.status(404).send(e.message)
    }
}

module.exports = {
    add_reservation
}