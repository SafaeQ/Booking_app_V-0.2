const express = require('express');
const authRouter = express.Router()
const {
    auth_signup,
    auth_login
} = require('../controllers/auth.controller')
const checkAuthentication = require('../middlewares/isAuth')

authRouter.post('/signup', auth_signup)

authRouter.get('/login', (req, res) => {
    res.render('auth/signin')
})
authRouter.post('/login', checkAuthentication, auth_login)

authRouter.get('/test', (req, res) => {
    res.render('test')
})
module.exports = authRouter