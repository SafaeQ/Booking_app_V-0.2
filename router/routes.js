const express = require('express');
const router = express.Router(); //create new obj of router
const checkAuthentication = require('../middlewares/isAuth')

router.get('/', checkAuthentication, function (req, res) {
    res.send({
        status: 'API is working',
        message: 'Lovely'
    })
})

module.exports = router;