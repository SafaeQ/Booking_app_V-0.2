let passport = require('passport');
const checkAuthentication = async (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.send('user is not authenticated')
    }
    next()
}

module.exports = checkAuthentication