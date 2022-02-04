const Owner = require('../models/owner')

const getOwner = async (req, res) => {
    try {
        const owner = await Owner.find({}).catch((err) => {
            console.error(err);
        });
        res.status(200).send(owner);
    } catch (error) {
        console.error(error);
    }
}

const getOwner_byId = async (req, res) => {
    const id = req.params.id;
    try {
        const owner = await Owner.findById(id).catch((err) => {
            throw err;
        });
        res.status(200).send(owner);
    } catch (error) {
        console.log(error);
    }
}