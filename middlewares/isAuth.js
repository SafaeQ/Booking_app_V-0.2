const checkAuthentication = async (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send('user is authenticate')
        next()
    } else {
        res.send('user is not authenticated')
    }
}

module.exports = checkAuthentication