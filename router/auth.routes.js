const express = require('express');
const authRouter = express.Router()
const {
    auth_signup,
    auth_login
} = require('../controllers/auth.controller')

// my api for auth
// authRouter.get('/signup', (req, res) => {
//     // console.log('fd');
//     // res.send('hello')
//     res.render('auth/signup')
// })
authRouter.post('/signup', auth_signup)

authRouter.get('/login', (req, res) => {
    res.render('auth/signin')
})
authRouter.post('/login', auth_login)

authRouter.get('/test', (req, res) => {
    res.render('test')
})
module.exports = authRouter