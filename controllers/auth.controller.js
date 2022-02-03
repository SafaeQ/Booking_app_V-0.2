const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')

const {
    token
} = require('../utils/token')

const auth_signup = async (req, res, next) => {

    const {
        username,
        email,
        password,
        role
    } = req.body;

    try {
        let encryptedPassword = await bcrypt.hash(password, 10)

        const user = await Admin.create({
                username,
                email: email.toLowerCase(),
                password: encryptedPassword,
                role
            })
            .catch((err) => {
                throw err
            })

        user.token = token;

        console.log(user)
        return res.json({
            token: token(user),
        })

    } catch (error) {
        console.error(error)
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

        res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log(error);
    }
    res.render('auth/signin')
}


module.exports = {
    auth_signup,
    auth_login
}