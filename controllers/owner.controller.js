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