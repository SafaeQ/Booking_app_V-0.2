const Admin = require('../models/admin')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const signToken = id => {
    return jwt.sign({
        id
    }, 'secret');
}


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

        if (!email && !password) {
            return res.status(401).json({
                status: 'fail',
                message: 'Please Provide an email !'
            });
        }

        const user = await Admin.findOne({
            email
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({
                status: "fail",
                msg: 'Incorrect Password or email !!'
            });
        }

        const token = signToken(user._id);

        res.status(200).json({
            status: "success",
            token
        });

        // console.log(user);
        // return res.send(user)

        // res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    auth_signup,
    auth_login
}