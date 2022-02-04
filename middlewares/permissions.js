const isAuthorized = (req, res, next) => {
    if (!req.user || !req.user.isAuthorized) {
        res.status(401).json({
            error: 'Unauthorized'
        })
        return
    }
    next()
}

module.exports = isAuthorized