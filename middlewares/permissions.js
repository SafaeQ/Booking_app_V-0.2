const isAuthorized = (...role) => {
    return (req, res, next) => {
        if (!role.includes(req.role)) {
            res.status(401).json({
                error: "you are not authorized"
            });
        } else {
            next()
        }
    }

}



module.exports = isAuthorized