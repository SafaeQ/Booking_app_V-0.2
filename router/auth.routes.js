const express = require('express');
const authRouter = express.Router()
const {
    auth_signup,
    auth_login
} = require('../controllers/auth.controller')


authRouter.post('/signup', auth_signup)

// authRouter.get('/login', (req, res) => {
//     // res.render('')
// })
authRouter.post('/login', auth_login)

authRouter.get('/test', (req, res) => {
    res.render('test')
})
module.exports = authRouter