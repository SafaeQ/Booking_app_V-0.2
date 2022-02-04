const isAuthorized = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.tokenData.role.name)) {
            res.status(401).json({
                error: "you are not authorized"
            });
        } else {
            next()
        }
    }

}



module.exports = isAuthorized