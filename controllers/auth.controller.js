const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')

const {
    token
} = require('../utils/token')

const auth_signup = async (req, res, next) => {

    try {
        const {
            name,
            email,
            password,
            role
        } = req.body;

        let encryptedPassword = await bcrypt.hash(password, 10)
        const user = await Admin.create({
                name,
                email: email.toLowerCase(),
                password: encryptedPassword,
                role,
            })
            .catch((err) => {
                throw err
            })

        console.log(user)
        return res.json({
            name,
            email,
            role
        })

    } catch (error) {
        console.error("current err ", error)
    }
}


const auth_login = async (req, res) => {

    try {
        const {
            email,
            password
        } = req.body;

        const user = await Admin.findOne({
            email
        });

        if (user && (await bcrypt.compare(password, user.password))) {

            user.token = token(user);
            res.status(200).json(user);
        }
        console.log(user);
        return res.send(user)

        res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    auth_signup,
    auth_login
}