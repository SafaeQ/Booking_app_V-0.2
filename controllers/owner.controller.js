const Owner = require('../models/owner')
const bcrypt = require("bcryptjs");


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

const add_owner = async (req, res) => {
    Owner.findOne({
        email: req.body.email
    }).then(owner => {
        if (owner) {
            return res.status(400).json({
                email: "email already exists"
            });
        }
    })

    const newOwner = new Owner()
    newOwner.name = req.body.name,
        newOwner.email = req.body.email,
        newOwner.password = req.body.password

    console.log('hayyyyyyyyyyyyyyyyyy', req.body)
    // genSalt function, used to generate a salt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newOwner.password, salt, (err, hash) => {
            // salt is a random string
            if (err) throw err;
            newOwner.password = hash;
            newOwner
                .save()
                .then(owner => res.send(owner))
                .catch(err => console.log(err));
        });
    })
}

const update_owner = async (req, res) => {
    const ownerId = req.params.id;
    const {
        name,
        email
    } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const updatedOwner = await Owner.findByIdAndUpdate(ownerId, {
        name: name,
        email: email,
        password: hashedPassword,
    });
    if (!updatedOwner) return res.status(400).send("Owner does not updated!");
    res.status(200).send("Owner updated successfully!");
}

const delete_owner = async (req, res) => {
    const id = req.params.id;
    try {
        const owner = await Owner.findByIdAndRemove(id).catch((err) => {
            console.error(err);
        });
        res.status(200).json("Your Owner has been removed successfully");
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getOwner,
    getOwner_byId,
    add_owner,
    update_owner,
    delete_owner
}