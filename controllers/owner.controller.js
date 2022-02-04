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
    try {
        const {
            name,
            email,
            password,
            role
        } = req.body;

        if (infos.role === "admin") {
            returnErrorAsResponse(res, "You cann't create admin !");
        }
        // let encryptedPassword = await bcrypt.hash(password, 10)
        const user = await Owner.create({
            name,
            email: email.toLowerCase(),
            password,
            role: 'owner'
        })

        console.log(user)
        return res.json({
            name,
            email
        })

    } catch (error) {
        console.error("current err ", error)
    }
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