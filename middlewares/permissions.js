const isAuthorized = (...role) => {
    return (req, res, next) => {
        console.log("role ", req.user.role.name)
        if (!role.includes(req.user.role.name)) {
            res.status(401).json({
                error: "you are not authorized"
            });
        } else {
            next()
        }
    }

}



module.exports = isAuthorized